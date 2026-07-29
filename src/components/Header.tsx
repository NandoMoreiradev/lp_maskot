import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { WhatsappLogo } from 'phosphor-react'
import { buildWhatsappUrl, DEFAULT_CTA_MESSAGE } from '../lib/whatsapp'
import { trackWhatsappClick } from '../lib/tracking'
import logoColor from '../assets/maskot-logo.png'
import logoOnDark from '../assets/maskot-logo-dark-bg.png'

const Bar = styled.header`
    position: sticky;
    top: 0;
    z-index: 50;
    background: color-mix(in srgb, var(--paper) 86%, transparent);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 0.9rem 1.75rem;
    max-width: 1180px;
    margin: 0 auto;

    @media (max-width: 560px) {
        padding: 0.7rem 1.1rem;
    }
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`

const LogoImg = styled.img`
    height: 46px;
    width: auto;
    display: block;

    @media (max-width: 560px) {
        height: 34px;
    }
`

const LogoLight = styled(LogoImg)`
    @media (prefers-color-scheme: dark) {
        display: none;
    }
`

const LogoDark = styled(LogoImg)`
    display: none;

    @media (prefers-color-scheme: dark) {
        display: block;
    }
`

const Cta = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--wa);
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    padding: 0.6rem 1.15rem;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    box-shadow: var(--shadow-md);
    flex-shrink: 0;
    white-space: nowrap;

    @media (max-width: 560px) {
        font-size: 0.72rem;
        padding: 0.5rem 0.8rem;
        gap: 0.35rem;
    }

    @media (max-width: 360px) {
        font-size: 0.66rem;
        padding: 0.45rem 0.65rem;
    }
`

function handleClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(DEFAULT_CTA_MESSAGE), '_blank', 'noopener')
}

export function Header() {
    return (
        <Bar>
            <Inner>
                <LogoLink to="/" aria-label="Maskot">
                    <LogoLight src={logoColor} alt="Maskot Edu" />
                    <LogoDark src={logoOnDark} alt="Maskot Edu" />
                </LogoLink>
                <Cta onClick={handleClick}>
                    <WhatsappLogo size={18} weight="regular" /> Falar com um Consultor
                </Cta>
            </Inner>
        </Bar>
    )
}
