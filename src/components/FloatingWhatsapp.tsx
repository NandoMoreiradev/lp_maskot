import styled, { keyframes } from 'styled-components'
import { WhatsappLogo } from 'phosphor-react'
import { buildWhatsappUrl, DEFAULT_CTA_MESSAGE } from '../lib/whatsapp'
import { trackWhatsappClick } from '../lib/tracking'

const ring = keyframes`
    0% { transform: scale(1); opacity: 0.7; }
    100% { transform: scale(1.4); opacity: 0; }
`

const Button = styled.button`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 60;
    background: var(--wa);
    color: #fff;
    border: none;
    border-radius: 100px;
    padding: 0.9rem 1.35rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-weight: 800;
    font-size: 0.9rem;
    box-shadow: 0 16px 32px -10px color-mix(in srgb, var(--wa) 60%, transparent);
    cursor: pointer;

    @media (max-width: 640px) {
        padding: 0.95rem;
        border-radius: 50%;

        .lbl {
            display: none;
        }
    }
`

const Ring = styled.span`
    position: absolute;
    inset: 0;
    border-radius: 100px;
    border: 2px solid var(--wa);
    animation: ${ring} 2.4s ease-out infinite;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        display: none;
    }
`

function handleClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(DEFAULT_CTA_MESSAGE), '_blank', 'noopener')
}

export function FloatingWhatsapp() {
    return (
        <Button onClick={handleClick} style={{ position: 'fixed' }} aria-label="Falar no WhatsApp">
            <Ring />
            <WhatsappLogo size={20} weight="regular" />
            <span className="lbl">Falar no WhatsApp</span>
        </Button>
    )
}
