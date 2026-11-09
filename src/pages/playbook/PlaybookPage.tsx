import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DownloadSimple, FilePdf, CheckCircle, PlayCircle, WhatsappLogo, Clock } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { usePageMeta } from '../../hooks/usePageMeta'
import { buildWhatsappUrl, MASTERCLASS_DEFAULT_NUMBER } from '../../lib/whatsapp'
import { trackWhatsappClick } from '../../lib/tracking'

// Coloque o arquivo em public/playbook-masterclass-2027.pdf. O botão de download é liberado sozinho quando ele existir.
const PDF_URL = '/playbook-masterclass-2027.pdf'

const CTA_MESSAGE = 'Olá! Baixei o Playbook do Maskot Edu e quero ver como implementar na minha escola.'

const Section = styled.section`
    padding: 4.5rem 0 4rem;
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
    max-width: 720px;
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
`

const Title = styled.h1`
    font-size: 2.6rem;
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
        font-size: 1.9rem;
    }
`

const Sub = styled.p`
    font-size: 1.1rem;
    color: var(--slate);
    line-height: 1.6;
    max-width: 560px;
    margin: 0 auto 2rem;

    @media (max-width: 720px) {
        font-size: 1rem;
    }
`

const buttonBase = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    font-weight: 800;
    font-size: 1.05rem;
    line-height: 1.3;
    padding: 1rem 1.6rem;
    border-radius: 12px;
    border: none;
    text-decoration: none;
`

const DownloadButton = styled.a`
    ${buttonBase}
    background: var(--wa);
    color: #fff;
    cursor: pointer;
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--wa) 55%, transparent);
    transition: transform 0.18s ease;

    &:hover {
        transform: translateY(-2px);
    }

    @media (max-width: 720px) {
        width: 100%;
    }
`

const SoonButton = styled.div`
    ${buttonBase}
    background: var(--chip-bg);
    color: var(--slate);
    cursor: default;

    @media (max-width: 720px) {
        width: 100%;
    }
`

const Hint = styled.p`
    margin-top: 0.9rem;
    font-size: 0.85rem;
    color: var(--slate-soft);
`

const Contents = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 4rem 0;
`

const ContentsInner = styled.div`
    max-width: 760px;
    margin: 0 auto;

    h2 {
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: -0.015em;
        text-align: center;
        margin-bottom: 2rem;
    }
`

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;

    li {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        background: var(--paper);
        border: 1px solid var(--line);
        border-radius: 14px;
        padding: 1rem 1.1rem;
        font-size: 0.97rem;
        line-height: 1.5;
        color: var(--slate);
    }
    strong {
        display: block;
        color: var(--ink);
        font-weight: 800;
        margin-bottom: 0.15rem;
    }
    svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--wa);
    }
`

const Next = styled.section`
    padding: 4rem 0 4.5rem;
    text-align: center;

    h2 {
        font-size: 1.6rem;
        font-weight: 800;
        letter-spacing: -0.015em;
        margin-bottom: 0.75rem;
    }
    p {
        color: var(--slate);
        font-size: 1.02rem;
        line-height: 1.6;
        max-width: 520px;
        margin: 0 auto 1.75rem;
    }
`

const NextRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    flex-wrap: wrap;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: stretch;
    }
`

const MasterclassLink = styled(Link)`
    ${buttonBase}
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--line);
    font-weight: 700;
`

const WhatsappButton = styled.button`
    ${buttonBase}
    background: var(--wa);
    color: #fff;
    cursor: pointer;
    box-shadow: 0 14px 30px -8px color-mix(in srgb, var(--wa) 55%, transparent);
    transition: transform 0.18s ease;

    &:hover {
        transform: translateY(-2px);
    }
`

const CONTENTS = [
    {
        title: 'Checklist de diagnóstico',
        desc: '5 perguntas de sim ou não para descobrir quanto a secretaria está perdendo hoje.',
    },
    {
        title: 'Scripts copie e cole',
        desc: 'Os textos de resposta para quando o pai pergunta o valor da mensalidade, por segmento.',
    },
    {
        title: 'Mapa do funil Kanban',
        desc: 'As colunas que toda escola precisa ter, de Novo Lead até Matriculado.',
    },
    {
        title: 'Cadência dos 5 toques + reativação',
        desc: 'O calendário de follow-up dia a dia e a mensagem pronta para reativar ex-interessados.',
    },
]

// Só libera o download se o arquivo existir de verdade (sem o PDF, o servidor devolve a página inicial).
function usePdfAvailable(): boolean | null {
    const [available, setAvailable] = useState<boolean | null>(null)

    useEffect(() => {
        let cancelled = false
        fetch(PDF_URL, { method: 'HEAD' })
            .then((res) => {
                if (cancelled) return
                setAvailable(res.ok && (res.headers.get('content-type') ?? '').includes('pdf'))
            })
            .catch(() => {
                if (!cancelled) setAvailable(false)
            })
        return () => {
            cancelled = true
        }
    }, [])

    return available
}

function handleWhatsappClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(CTA_MESSAGE, MASTERCLASS_DEFAULT_NUMBER), '_blank', 'noopener')
}

export function PlaybookPage() {
    usePageMeta(
        'Playbook das 4 Etapas + Scripts de WhatsApp — Download | Maskot Edu',
        'Baixe o Playbook em PDF com os scripts prontos de WhatsApp para a secretaria da sua escola particular.',
    )
    const available = usePdfAvailable()

    return (
        <>
            <Section>
                <Blob $variant="blue" />
                <Blob $variant="wa" />
                <div className="wrap">
                    <Inner>
                        <Eyebrow>
                            <FilePdf size={15} weight="regular" /> Material gratuito para escolas particulares
                        </Eyebrow>
                        <Title>
                            Baixe o <em>Playbook das 4 Etapas</em> + Scripts de WhatsApp
                        </Title>
                        <Sub>
                            O guia em PDF com tudo o que a Masterclass ensina, pronto para imprimir e entregar para a
                            sua secretaria aplicar.
                        </Sub>
                        {available ? (
                            <DownloadButton href={PDF_URL} download>
                                <DownloadSimple size={22} weight="bold" /> Baixar o Playbook (PDF)
                            </DownloadButton>
                        ) : (
                            <SoonButton>
                                <Clock size={20} weight="regular" /> {available === null ? 'Carregando…' : 'Disponível em breve'}
                            </SoonButton>
                        )}
                        <Hint>Arquivo em PDF · 6 páginas</Hint>
                    </Inner>
                </div>
            </Section>

            <Contents>
                <div className="wrap">
                    <Reveal>
                        <ContentsInner>
                            <h2>O que tem dentro</h2>
                            <List>
                                {CONTENTS.map((c) => (
                                    <li key={c.title}>
                                        <CheckCircle size={20} weight="fill" />
                                        <div>
                                            <strong>{c.title}</strong>
                                            {c.desc}
                                        </div>
                                    </li>
                                ))}
                            </List>
                        </ContentsInner>
                    </Reveal>
                </div>
            </Contents>

            <Next>
                <div className="wrap">
                    <Reveal>
                        <h2>Quer ver isso rodando na sua escola?</h2>
                        <p>
                            Assista à Masterclass com o protocolo completo ou fale com a equipe para ver uma demonstração
                            do Maskot Edu.
                        </p>
                        <NextRow>
                            <MasterclassLink to="/masterclass">
                                <PlayCircle size={20} weight="regular" /> Assistir à Masterclass
                            </MasterclassLink>
                            <WhatsappButton onClick={handleWhatsappClick}>
                                <WhatsappLogo size={20} weight="regular" /> Falar com a equipe no WhatsApp
                            </WhatsappButton>
                        </NextRow>
                    </Reveal>
                </div>
            </Next>
        </>
    )
}
