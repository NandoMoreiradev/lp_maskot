const DEFAULT_NUMBER = '5579991064405'

function getUtmSuffix(): string {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('utm_source')
    const campaign = params.get('utm_campaign')
    if (!source && !campaign) return ''
    const parts = [source, campaign].filter(Boolean).join(' / ')
    return `\n\n_Origem da campanha: ${parts}_`
}

export function buildWhatsappUrl(baseMessage: string): string {
    const number = import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_NUMBER
    const message = `${baseMessage}${getUtmSuffix()}`
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_CTA_MESSAGE =
    'Olá! Vi a página do Módulo WhatsApp do Maskot e quero saber mais sobre a oferta do CRM Crescimento de bônus.'
