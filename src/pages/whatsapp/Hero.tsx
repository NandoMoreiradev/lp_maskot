import styled from 'styled-components'
import { WhatsappLogo, Sparkle, ArrowRight, ShieldCheck, CalendarCheck } from 'phosphor-react'
import { PhoneMockup } from './PhoneMockup'
import { Reveal } from '../../components/Reveal'
import { buildWhatsappUrl, DEFAULT_CTA_MESSAGE } from '../../lib/whatsapp'
import { trackWhatsappClick } from '../../lib/tracking'

const Section = styled.section`
    padding: 4.5rem 0 3.75rem;
    position: relative;
    overflow: hidden;
`

const Blob = styled.div<{ $variant: 'blue' | 'wa' }>`
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    z-index: 0;
    ${(p) =>
        p.$variant === 'blue'
            ? `width:420px;height:420px;background:var(--blue);top:-160px;left:-120px;opacity:0.35;`
            : `width:360px;height:360px;background:var(--wa);bottom:-140px;right:-80px;opacity:0.3;`}
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 3.75rem;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
        gap: 2.75rem;
    }
`

const Eyebrow = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    background: var(--chip-bg);
    color: var(--blue-dark);
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.42rem 0.9rem 0.42rem 0.7rem;
    border-radius: 100px;
    margin-bottom: 1.5rem;
`

const Title = styled.h1`
    font-size: 3.25rem;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.022em;
    margin-bottom: 1.4rem;

    em {
        font-style: normal;
        background: linear-gradient(100deg, var(--blue) 10%, var(--wa) 90%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 920px) {
        font-size: 2.3rem;
    }
`

const Sub = styled.p`
    font-size: 1.18rem;
    color: var(--slate);
    max-width: 520px;
    margin-bottom: 0.65rem;
    line-height: 1.6;
`

const Note = styled.p`
    font-size: 0.78rem;
    color: var(--slate-soft);
    margin-bottom: 2.1rem;
`

const CtaRow = styled.div`
    display: flex;
    gap: 0.9rem;
    flex-wrap: wrap;
    margin-bottom: 2.2rem;
`

const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: var(--wa);
    color: #fff;
    font-weight: 800;
    font-size: 1.02rem;
    padding: 1rem 1.6rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--wa) 55%, transparent);
    transition: transform 0.18s ease, box-shadow 0.18s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 36px -8px color-mix(in srgb, var(--wa) 60%, transparent);
    }
`

const SecondaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--ink);
    font-weight: 700;
    font-size: 1.02rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--line);
    cursor: pointer;
    transition: border-color 0.18s ease;

    &:hover {
        border-color: var(--slate-soft);
    }

    svg {
        transform: rotate(90deg);
    }
`

const TrustRow = styled.div`
    display: flex;
    gap: 1.6rem;
    flex-wrap: wrap;
    padding-top: 1.7rem;
    border-top: 1px solid var(--line);
`

const TrustItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.83rem;
    font-weight: 700;
    color: var(--slate);

    svg {
        color: var(--wa-dark);
        flex-shrink: 0;
    }
`

function scrollToFeatures() {
    document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })
}

function handleCtaClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(DEFAULT_CTA_MESSAGE), '_blank', 'noopener')
}

export function Hero() {
    return (
        <Section>
            <Blob $variant="blue" />
            <Blob $variant="wa" />
            <div className="wrap">
                <Grid>
                    <div>
                        <Eyebrow>
                            <Sparkle size={15} weight="regular" /> Módulo WhatsApp Maskot
                        </Eyebrow>
                        <Title>
                            Sua escola respondendo no WhatsApp <em>mesmo dormindo</em>.
                        </Title>
                        <Sub>
                            Número oficial da Meta, atendentes ilimitados no módulo Inbox e uma IA que cria lead,
                            agenda visita e atualiza o funil sozinha — 24 horas por dia, todos os dias.
                        </Sub>
                        <Note>*Atendentes ilimitados no módulo WhatsApp Inbox contratado.</Note>
                        <CtaRow>
                            <PrimaryButton onClick={handleCtaClick}>
                                <WhatsappLogo size={20} weight="regular" /> Quero contratar e ganhar o CRM
                            </PrimaryButton>
                            <SecondaryButton onClick={scrollToFeatures}>
                                Ver como funciona <ArrowRight size={16} weight="regular" />
                            </SecondaryButton>
                        </CtaRow>
                        <TrustRow>
                            <TrustItem>
                                <ShieldCheck size={17} weight="regular" /> API Oficial da Meta (Cloud API)
                            </TrustItem>
                            <TrustItem>
                                <WhatsappLogo size={17} weight="regular" /> Provedor Oficial WhatsApp Business
                            </TrustItem>
                            <TrustItem>
                                <CalendarCheck size={17} weight="regular" /> IA com agenda automática
                            </TrustItem>
                        </TrustRow>
                    </div>

                    <Reveal>
                        <PhoneMockup />
                    </Reveal>
                </Grid>
            </div>
        </Section>
    )
}
