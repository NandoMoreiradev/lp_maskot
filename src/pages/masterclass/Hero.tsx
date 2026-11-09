import styled from 'styled-components'
import { WhatsappLogo, PlayCircle, ArrowRight, GraduationCap } from 'phosphor-react'
import { buildWhatsappUrl } from '../../lib/whatsapp'
import { trackWhatsappClick } from '../../lib/tracking'

// Cole aqui:
// 1. O caminho do arquivo .mp4 colocado na pasta 'public/' (ex.: '/masterclass.mp4')
// 2. Ou o link de embed final (ex.: https://www.youtube.com/embed/ID ou https://player.vimeo.com/video/ID).
// Enquanto estiver vazio, o player mostra o placeholder.
const VIDEO_URL: string = 'https://www.youtube.com/embed/wd_-jXEDqCA'

const CTA_MESSAGE = 'Olá! Assisti à Masterclass do Maskot Edu e quero ver como implementar na minha escola.'

const Section = styled.section`
    padding: 4rem 0 4.25rem;
    position: relative;
    overflow: hidden;
    text-align: center;
`

const Blob = styled.div<{ $variant: 'blue' | 'wa' }>`
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    pointer-events: none;
    z-index: 0;
    ${(p) =>
        p.$variant === 'blue'
            ? `width:420px;height:420px;background:var(--blue);top:-160px;left:-120px;opacity:0.28;`
            : `width:360px;height:360px;background:var(--wa);bottom:-140px;right:-80px;opacity:0.24;`}
`

const Inner = styled.div`
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
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
    text-align: left;
`

const Title = styled.h1`
    font-size: 2.7rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 1.25rem;

    em {
        font-style: normal;
        background: linear-gradient(100deg, var(--blue) 10%, var(--wa) 90%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    @media (max-width: 720px) {
        font-size: 1.85rem;
    }
`

const Sub = styled.p`
    font-size: 1.12rem;
    color: var(--slate);
    max-width: 680px;
    margin: 0 auto 2.25rem;
    line-height: 1.6;

    @media (max-width: 720px) {
        font-size: 1rem;
    }
`

const Player = styled.div`
    position: relative;
    aspect-ratio: 16 / 9;
    width: 100%;
    border-radius: 18px;
    border: 1px solid var(--line);
    box-shadow: var(--shadow-lg);
    background: var(--ink);
    overflow: hidden;

    iframe,
    video {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
        object-fit: contain;
        background: #000;
    }
`

const Placeholder = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9rem;
    color: #fff;
    padding: 1rem;
    background:
        radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--blue) 45%, transparent), transparent 55%),
        radial-gradient(circle at 80% 85%, color-mix(in srgb, var(--wa) 40%, transparent), transparent 55%),
        var(--ink);

    svg {
        color: #fff;
        opacity: 0.95;
    }

    strong {
        font-size: 1.05rem;
        font-weight: 800;
    }

    span {
        font-size: 0.85rem;
        color: #b9c4da;
    }

    @media (max-width: 720px) {
        gap: 0.5rem;

        svg {
            width: 52px;
            height: 52px;
        }

        strong {
            font-size: 0.9rem;
        }

        span {
            font-size: 0.75rem;
        }
    }
`

const Caption = styled.p`
    margin-top: 0.9rem;
    font-size: 0.85rem;
    color: var(--slate-soft);
`

const CtaRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    flex-wrap: wrap;
    margin-top: 2rem;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: stretch;
    }
`

const PrimaryButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    background: var(--wa);
    color: #fff;
    font-weight: 800;
    font-size: 1.02rem;
    line-height: 1.3;
    padding: 1rem 1.6rem;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--wa) 55%, transparent);
    transition: transform 0.18s ease;

    &:hover {
        transform: translateY(-2px);
    }

    svg {
        flex-shrink: 0;
    }
`

const SecondaryLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: transparent;
    color: var(--ink);
    font-weight: 700;
    font-size: 1.02rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid var(--line);
    cursor: pointer;
    text-decoration: none;
`

function handleCtaClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(CTA_MESSAGE), '_blank', 'noopener')
}

export function Hero() {
    return (
        <Section>
            <Blob $variant="blue" />
            <Blob $variant="wa" />
            <div className="wrap">
                <Inner>
                    <Eyebrow>
                        <GraduationCap size={15} weight="regular" /> Aula oficial para diretores e gestores de escolas
                        particulares
                    </Eyebrow>
                    <Title>
                        O Protocolo das 4 Etapas Para <em>Dobrar a Conversão</em> de Visitas e Matrículas Pelo WhatsApp
                    </Title>
                    <Sub>
                        Assista à Masterclass gratuita abaixo para copiar o sistema comercial que impede os pais de
                        sumirem após pedirem o preço — e descubra como automatizar 100% desse processo na sua secretaria.
                    </Sub>

                    <Player>
                        {VIDEO_URL ? (
                            VIDEO_URL.endsWith('.mp4') || VIDEO_URL.includes('.mp4?') ? (
                                <video
                                    src={VIDEO_URL}
                                    controls
                                    playsInline
                                    preload="metadata"
                                />
                            ) : (
                                <iframe
                                    src={VIDEO_URL}
                                    title="Masterclass Maskot Edu"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                    allowFullScreen
                                />
                            )
                        ) : (
                            <Placeholder>
                                <PlayCircle size={72} weight="fill" />
                                <strong>Masterclass em breve</strong>
                                <span>O vídeo será publicado aqui</span>
                            </Placeholder>
                        )}
                    </Player>
                    <Caption>Duração: ~18 min · Apresentação prática com Mapa Mental e bastidores reais.</Caption>

                    <CtaRow>
                        <PrimaryButton onClick={handleCtaClick}>
                            <WhatsappLogo size={22} weight="regular" /> Quero falar com a equipe no WhatsApp e ver uma
                            demonstração
                        </PrimaryButton>
                        <SecondaryLink href="/#precos">
                            Ver planos e começar agora <ArrowRight size={16} weight="regular" />
                        </SecondaryLink>
                    </CtaRow>
                </Inner>
            </div>
        </Section>
    )
}
