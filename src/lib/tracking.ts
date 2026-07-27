declare global {
    interface Window {
        dataLayer?: unknown[]
        gtag?: (...args: unknown[]) => void
        fbq?: (...args: unknown[]) => void
        _fbq?: unknown
    }
}

/** Dispara o evento de conversão nas plataformas configuradas antes de abrir o WhatsApp. */
export function trackWhatsappClick(): void {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
    const adsId = import.meta.env.VITE_GOOGLE_ADS_ID
    const adsLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL

    if (gaId && window.gtag) {
        window.gtag('event', 'generate_lead', {
            event_category: 'whatsapp_cta',
            event_label: 'lp_whatsapp',
        })
    }

    if (adsId && adsLabel && window.gtag) {
        window.gtag('event', 'conversion', {
            send_to: `${adsId}/${adsLabel}`,
        })
    }

    if (import.meta.env.VITE_META_PIXEL_ID && window.fbq) {
        window.fbq('track', 'Lead')
    }
}
