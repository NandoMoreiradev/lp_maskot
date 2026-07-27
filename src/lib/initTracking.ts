const CONSENT_KEY = 'maskot_lp_analytics_consent'

function injectScript(src: string, attrs: Record<string, string> = {}) {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value))
    document.head.appendChild(script)
}

/** Inicializa GA4 + Google Ads + Meta Pixel com Consent Mode v2, replicando o padrão já usado no site institucional. */
export function initTracking() {
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer!.push(args)
    }

    window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        wait_for_update: 500,
    })

    const storedConsent = localStorage.getItem(CONSENT_KEY)
    if (storedConsent === 'true') {
        window.gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
        })
    }

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (gaId) {
        injectScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`)
        window.gtag('js', new Date())
        window.gtag('config', gaId)
    }

    const adsId = import.meta.env.VITE_GOOGLE_ADS_ID
    if (adsId && adsId !== gaId) {
        window.gtag('config', adsId)
    }

    const pixelId = import.meta.env.VITE_META_PIXEL_ID
    if (pixelId && storedConsent === 'true') {
        loadMetaPixel(pixelId)
    }
}

interface FbqShim {
    (...args: unknown[]): void
    callMethod?: (...args: unknown[]) => void
    queue: unknown[][]
    push: FbqShim
    loaded: boolean
    version: string
}

/** Réplica fiel do snippet oficial do Meta Pixel (base code), só que tipada. */
function loadMetaPixel(pixelId: string) {
    if (window.fbq) return

    const fbq = function fbqShim(this: unknown, ...args: unknown[]) {
        if (fbq.callMethod) {
            fbq.callMethod.apply(fbq, args)
        } else {
            fbq.queue.push(args)
        }
    } as FbqShim
    fbq.queue = []
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.push = fbq

    window.fbq = fbq
    window._fbq = fbq
    injectScript('https://connect.facebook.net/en_US/fbevents.js')
    window.fbq('init', pixelId)
    window.fbq('track', 'PageView')
}

export function grantConsent() {
    localStorage.setItem(CONSENT_KEY, 'true')
    window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
    })
    const pixelId = import.meta.env.VITE_META_PIXEL_ID
    if (pixelId) loadMetaPixel(pixelId)
}

export function denyConsent() {
    localStorage.setItem(CONSENT_KEY, 'false')
}

export function hasStoredConsentChoice(): boolean {
    return localStorage.getItem(CONSENT_KEY) !== null
}
