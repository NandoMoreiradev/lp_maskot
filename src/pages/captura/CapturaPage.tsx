import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FilePdf, PlayCircle, Lightning, GraduationCap, Check, Lock } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { usePageMeta } from '../../hooks/usePageMeta'

// Link de embed do formulário criado no Criador de Formulários do Maskot Edu.
// O redirecionamento para /masterclass após o envio é configurado no próprio formulário.
// Enquanto estiver vazio, mostra o placeholder.
const FORM_EMBED_URL = 'https://app.maskotedu.com.br/p/forms/masterclass27?embed=true'

// Versão em script do mesmo formulário (ajusta a altura sozinha). Se preenchido, tem prioridade sobre o iframe.
// Hoje vazio (usa o iframe de altura fixa): com o script, a altura enviada pelo formulário não acompanhava o conteúdo
// e aparecia barra de rolagem interna. Ative de novo quando o MASKOT_FORM_RESIZE do formulário for corrigido.
const FORM_SCRIPT_URL = ''

const Section = styled.section`
    padding: 4rem 0 4.5rem;
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
            ? `width:420px;height:420px;background:var(--blue);top:-160px;left:-120px;opacity:0.28;`
            : `width:360px;height:360px;background:var(--wa);bottom:-140px;right:-80px;opacity:0.24;`}
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 3.5rem;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (max-width: 920px) {
        grid-template-columns: 1fr;
        gap: 2.5rem;
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
    font-size: 2.8rem;
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

    @media (max-width: 920px) {
        font-size: 2rem;
    }
`

const Sub = styled.p`
    font-size: 1.1rem;
    color: var(--slate);
    line-height: 1.6;
    max-width: 540px;
    margin-bottom: 2rem;

    @media (max-width: 920px) {
        font-size: 1rem;
    }
`

const Deliverables = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
`

const Deliverable = styled.div`
    display: flex;
    gap: 0.9rem;
    align-items: flex-start;
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 1rem 1.1rem;

    h3 {
        font-size: 0.97rem;
        font-weight: 800;
        margin-bottom: 0.2rem;
    }
    p {
        font-size: 0.86rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const IconWrap = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 11px;
    background: var(--chip-bg);
    color: var(--blue-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

const FormCard = styled.div`
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    padding: 1.75rem 1.25rem 1rem;
    width: 100%;
    max-width: 400px;

    @media (max-width: 920px) {
        max-width: 440px;
        margin: 0 auto;
    }
`

const FormHead = styled.div`
    margin-bottom: 0.75rem;

    h2 {
        font-size: 1.15rem;
        font-weight: 800;
        line-height: 1.25;
        margin-bottom: 0.35rem;
    }
    p {
        font-size: 0.9rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const FormMount = styled.div`
    width: 100%;
    min-height: 320px;
`

// O embed.js monta o iframe no elemento com id "maskot-form-<slug>". Sem ele, usa o último <script> da página,
// que não é o nosso quando injetado pelo React. Por isso o container já nasce com esse id.
function FormScript({ src }: { src: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const slug = /public-lead-forms\/([^/]+)\/embed\.js/.exec(src)?.[1]

    useEffect(() => {
        const container = ref.current
        if (!container) return
        const script = document.createElement('script')
        script.src = src
        script.async = true
        container.appendChild(script)
        return () => {
            container.innerHTML = ''
        }
    }, [src])

    return <FormMount ref={ref} id={slug ? `maskot-form-${slug}` : undefined} />
}

const FormFrame = styled.iframe`
    width: 100%;
    height: 620px;
    border: 0;
`

const FormPlaceholder = styled.div`
    min-height: 360px;
    border: 1px dashed var(--line);
    border-radius: 14px;
    background: var(--paper);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1.5rem;
    text-align: center;

    strong {
        font-size: 0.95rem;
        font-weight: 800;
    }
    span {
        font-size: 0.82rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const Privacy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin-top: 1rem;
    font-size: 0.78rem;
    color: var(--slate-soft);

    svg {
        flex-shrink: 0;
    }
`

const PlaybookStrip = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 3.75rem 0;
`

const StripInner = styled.div`
    max-width: 860px;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem 1.5rem;

    li {
        display: flex;
        gap: 0.6rem;
        align-items: flex-start;
        font-size: 0.97rem;
        line-height: 1.5;
        color: var(--ink);
    }
    svg {
        flex-shrink: 0;
        margin-top: 3px;
        color: var(--wa);
    }

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`

const PLAYBOOK_ITEMS = [
    'Checklist de diagnóstico: descubra quanto a secretaria está perdendo hoje.',
    'Scripts copie e cole para quando o pai pergunta "qual o valor da mensalidade?".',
    'O mapa do funil Kanban com as colunas que toda escola precisa ter.',
    'A cadência dos 5 toques de follow-up, dia a dia.',
    'Mensagem pronta para reativar ex-interessados do ano passado.',
    'Um guia de 6 páginas que você pode imprimir e entregar para a secretaria.',
]

export function CapturaPage() {
    usePageMeta(
        'Playbook + Masterclass gratuita — Conversão de matrículas pelo WhatsApp | Maskot Edu',
        'Libere a Masterclass gratuita e o Playbook com os scripts prontos de WhatsApp para a secretaria da sua escola particular.',
    )

    return (
        <>
            <Section>
                <Blob $variant="blue" />
                <Blob $variant="wa" />
                <div className="wrap">
                    <Grid>
                        <div>
                            <Eyebrow>
                                <GraduationCap size={15} weight="regular" /> Material gratuito para diretores e gestores
                                de escolas particulares
                            </Eyebrow>
                            <Title>
                                Libere a Masterclass e o Playbook para <em>dobrar a conversão</em> de matrículas pelo
                                WhatsApp
                            </Title>
                            <Sub>
                                Preencha o formulário e receba o acesso na hora: a aula em vídeo com o protocolo das 4
                                etapas e o guia em PDF com os scripts prontos para a sua secretaria.
                            </Sub>
                            <Deliverables>
                                <Deliverable>
                                    <IconWrap>
                                        <PlayCircle size={22} weight="regular" />
                                    </IconWrap>
                                    <div>
                                        <h3>Masterclass: O Protocolo das 4 Etapas</h3>
                                        <p>Aula prática de ~18 minutos, com Mapa Mental e bastidores reais.</p>
                                    </div>
                                </Deliverable>
                                <Deliverable>
                                    <IconWrap>
                                        <FilePdf size={22} weight="regular" />
                                    </IconWrap>
                                    <div>
                                        <h3>Playbook em PDF + scripts de WhatsApp</h3>
                                        <p>Tudo o que a aula ensina, pronto para imprimir e aplicar na secretaria.</p>
                                    </div>
                                </Deliverable>
                                <Deliverable>
                                    <IconWrap>
                                        <Lightning size={22} weight="regular" />
                                    </IconWrap>
                                    <div>
                                        <h3>Acesso em segundos</h3>
                                        <p>O link da aula e o PDF chegam no seu WhatsApp e no seu e-mail.</p>
                                    </div>
                                </Deliverable>
                            </Deliverables>
                        </div>

                        <Reveal>
                            <FormCard>
                                <FormHead>
                                    <h2>Libere o seu acesso gratuito</h2>
                                    <p>Leva menos de 1 minuto. Você assiste à aula logo após o envio.</p>
                                </FormHead>
                                {FORM_SCRIPT_URL ? (
                                    <FormScript src={FORM_SCRIPT_URL} />
                                ) : FORM_EMBED_URL ? (
                                    <FormFrame
                                        src={FORM_EMBED_URL}
                                        title="Formulário de acesso à Masterclass"
                                        allowTransparency
                                    />
                                ) : (
                                    <FormPlaceholder>
                                        <strong>Formulário do Maskot Edu</strong>
                                        <span>
                                            Cole o link de embed do formulário em FORM_EMBED_URL para ele aparecer aqui.
                                        </span>
                                    </FormPlaceholder>
                                )}
                                <Privacy>
                                    <Lock size={14} weight="regular" /> Seus dados estão seguros. Sem spam.
                                </Privacy>
                            </FormCard>
                        </Reveal>
                    </Grid>
                </div>
            </Section>

            <PlaybookStrip>
                <div className="wrap">
                    <Reveal>
                        <StripInner>
                            <h2>O que você leva no Playbook</h2>
                            <List>
                                {PLAYBOOK_ITEMS.map((item) => (
                                    <li key={item}>
                                        <Check size={16} weight="bold" />
                                        {item}
                                    </li>
                                ))}
                            </List>
                        </StripInner>
                    </Reveal>
                </div>
            </PlaybookStrip>
        </>
    )
}
