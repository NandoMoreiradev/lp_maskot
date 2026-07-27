import styled from 'styled-components'
import { WhatsappLogo } from 'phosphor-react'
import { Reveal } from './Reveal'
import { buildWhatsappUrl, DEFAULT_CTA_MESSAGE } from '../lib/whatsapp'
import { trackWhatsappClick } from '../lib/tracking'

const Section = styled.section`
    background: var(--ink);
    color: var(--paper);
    padding: 5.5rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: radial-gradient(color-mix(in srgb, var(--paper) 8%, transparent) 1px, transparent 0);
        background-size: 22px 22px;
        opacity: 0.5;
    }
`

const Inner = styled.div`
    position: relative;
    z-index: 1;

    h2 {
        font-size: 2.35rem;
        font-weight: 800;
        margin-bottom: 1rem;
        letter-spacing: -0.015em;
        color: #fff;
    }
    p {
        color: #b9c4da;
        font-size: 1.06rem;
        margin-bottom: 2.1rem;
        max-width: 520px;
        margin-left: auto;
        margin-right: auto;
    }
`

const Button = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--wa);
    color: #fff;
    font-weight: 800;
    font-size: 1.05rem;
    padding: 1rem 1.6rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--wa) 55%, transparent);
    transition: transform 0.18s ease;

    &:hover {
        transform: translateY(-2px);
    }
`

function handleClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(DEFAULT_CTA_MESSAGE), '_blank', 'noopener')
}

export function FinalCta() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <Inner>
                        <h2>Pronto pra parar de perder lead no WhatsApp?</h2>
                        <p>Fale com um consultor agora e veja o módulo funcionando com a realidade da sua escola.</p>
                        <Button onClick={handleClick}>
                            <WhatsappLogo size={20} weight="regular" /> Quero contratar e ganhar o CRM
                        </Button>
                    </Inner>
                </Reveal>
            </div>
        </Section>
    )
}
