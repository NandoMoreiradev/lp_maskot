import styled from 'styled-components'
import { WhatsappLogo, Check, Calculator, ArrowRight } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { Kicker } from '../../components/shared'
import { buildWhatsappUrl } from '../../lib/whatsapp'
import { trackWhatsappClick } from '../../lib/tracking'

const CTA_MESSAGE = 'Olá! Assisti à Masterclass do Maskot Edu e quero ver como implementar na minha escola.'

const Section = styled.section`
    background: var(--ink);
    color: var(--paper);
    padding: 5.5rem 0;
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
    max-width: 820px;
    margin: 0 auto;
    text-align: center;

    ${Kicker} {
        justify-content: center;
        color: var(--wa);
    }
`

const Title = styled.h2`
    font-size: 2.1rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: #fff;
    margin-bottom: 2.25rem;

    @media (max-width: 720px) {
        font-size: 1.55rem;
    }
`

const Highlight = styled.div`
    text-align: left;
    background: color-mix(in srgb, #fff 7%, transparent);
    border: 1px solid color-mix(in srgb, #fff 16%, transparent);
    border-radius: 18px;
    padding: 1.75rem;
    margin-bottom: 1.75rem;

    h3 {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.15rem;
        font-weight: 800;
        color: #fff;
        margin-bottom: 0.85rem;
        line-height: 1.3;

        svg {
            flex-shrink: 0;
            color: var(--wa);
        }
    }

    p {
        font-size: 1.02rem;
        line-height: 1.7;
        color: #b9c4da;
        font-style: italic;
    }

    strong {
        color: #fff;
        font-weight: 800;
    }

    @media (max-width: 720px) {
        padding: 1.35rem;
    }
`

const Checklist = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    margin-bottom: 2.5rem;
`

const Tag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: color-mix(in srgb, var(--wa) 16%, transparent);
    color: #fff;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 0.5rem 0.9rem;
    border-radius: 100px;
    text-align: left;

    svg {
        color: var(--wa);
        flex-shrink: 0;
    }
`

const CtaRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.9rem;
    flex-wrap: wrap;

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

const SecondaryLink = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #fff;
    font-weight: 700;
    font-size: 1.05rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid color-mix(in srgb, #fff 28%, transparent);
    text-decoration: none;
`

const CHECKLIST = [
    'WhatsApp Oficial & IA (Mia)',
    'Funil CRM de Matrículas',
    'Automação de Tarefas e Follow-up',
    'Disparos em Massa e Jornadas',
    'Ligação de Voz e Criador de LPs',
    'Painel de BI (CAC e ROAS)',
]

function handleClick() {
    trackWhatsappClick()
    window.open(buildWhatsappUrl(CTA_MESSAGE), '_blank', 'noopener')
}

export function ValueCta() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <Inner>
                        <Kicker>
                            <Calculator size={15} weight="regular" />
                            Retorno imediato
                        </Kicker>
                        <Title>
                            Absolutamente tudo o que a sua escola particular precisa para transformar conversas de
                            WhatsApp em matrículas assinadas.
                        </Title>
                        <Highlight>
                            <h3>
                                <Calculator size={24} weight="regular" />
                                Quanto custa perder apenas 1 aluno por demora no atendimento?
                            </h3>
                            <p>
                                Uma única matrícula que escorre pelo ralo no WhatsApp representa de{' '}
                                <strong>R$ 10.000 a R$ 20.000 a menos</strong> no caixa da sua escola ao longo do ano.
                                Com o <strong>Maskot Edu</strong>, você blinda 100% do seu setor comercial com planos
                                acessíveis <strong>a partir de R$ 247/mês</strong> (menos de R$ 8 por dia — uma única
                                matrícula salva já paga anos de plataforma).
                            </p>
                        </Highlight>
                        <Checklist>
                            {CHECKLIST.map((c) => (
                                <Tag key={c}>
                                    <Check size={15} weight="bold" />
                                    {c}
                                </Tag>
                            ))}
                        </Checklist>
                        <CtaRow>
                            <PrimaryButton onClick={handleClick}>
                                <WhatsappLogo size={20} weight="regular" /> Agendar demonstração gratuita
                            </PrimaryButton>
                            <SecondaryLink href="/#precos">
                                Conhecer os planos e preços <ArrowRight size={16} weight="regular" />
                            </SecondaryLink>
                        </CtaRow>
                    </Inner>
                </Reveal>
            </div>
        </Section>
    )
}
