const DEFAULT_NUMBER = '5579991064405'
export const MASTERCLASS_DEFAULT_NUMBER = '5579981756382'

function getUtmSuffix(): string {
    const params = new URLSearchParams(window.location.search)
    const source = params.get('utm_source')
    const campaign = params.get('utm_campaign')
    if (!source && !campaign) return ''
    const parts = [source, campaign].filter(Boolean).join(' / ')
    return `\n\n_Origem da campanha: ${parts}_`
}

function sanitizeNumber(raw: string): string {
    const digits = raw.replace(/\D/g, '')
    // Se for número de celular brasileiro com DDD (55 + 2 dígitos DDD + 8 dígitos sem o nono dígito 9)
    if (digits.length === 12 && digits.startsWith('55')) {
        const ddd = digits.slice(2, 4)
        const rest = digits.slice(4)
        if (['6', '7', '8', '9'].includes(rest[0])) {
            return `55${ddd}9${rest}`
        }
    }
    return digits
}

export function buildWhatsappUrl(baseMessage: string, customNumber?: string): string {
    const rawNumber = customNumber || import.meta.env.VITE_WHATSAPP_NUMBER || DEFAULT_NUMBER
    const number = sanitizeNumber(rawNumber)
    const message = `${baseMessage}${getUtmSuffix()}`
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_CTA_MESSAGE =
    'Olá! Vi a página do Módulo WhatsApp do Maskot e quero saber mais sobre a oferta do CRM Crescimento de bônus.'
