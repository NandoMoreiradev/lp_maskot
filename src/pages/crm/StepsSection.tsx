import styled from 'styled-components'
import { Target, WhatsappLogo, ArrowsClockwise, GraduationCap } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { Kicker } from '../../components/shared'

const Wrap = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 3.5rem 0;
`

const Head = styled.div`
    text-align: center;
    max-width: 640px;
    margin: 0 auto 2.5rem;

    h2 {
        font-size: 1.7rem;
        font-weight: 800;
        letter-spacing: -0.01em;
    }
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 26px;
        left: 12.5%;
        right: 12.5%;
        height: 2px;
        background: var(--line);
        z-index: 0;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;

        &::before {
            display: none;
        }
    }
`

const Step = styled.div`
    position: relative;
    z-index: 1;
    text-align: center;

    h4 {
        font-size: 1rem;
        font-weight: 800;
        margin-bottom: 0.4rem;
    }
    p {
        font-size: 0.85rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const Node = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: var(--paper);
    border: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);
    margin: 0 auto 1rem;
`

const STEPS = [
    {
        icon: Target,
        title: 'Captou',
        desc: 'Lead do site, anúncio ou WhatsApp cai direto no funil, sem digitação manual.',
    },
    {
        icon: WhatsappLogo,
        title: 'Atendeu',
        desc: 'Fila organizada por departamento, com IA ajudando fora do horário comercial.',
    },
    {
        icon: ArrowsClockwise,
        title: 'Acompanhou',
        desc: 'Automação cobra o retorno sozinha — nenhum lead esfria por esquecimento.',
    },
    {
        icon: GraduationCap,
        title: 'Matriculou',
        desc: 'Comissão e onboarding do aluno seguem pro próximo passo automaticamente.',
    },
]

export function StepsSection() {
    return (
        <Wrap>
            <div className="wrap">
                <Reveal>
                    <Head>
                        <Kicker style={{ justifyContent: 'center' }}>Do primeiro contato à matrícula assinada</Kicker>
                        <h2>Um funil só, do começo ao fim</h2>
                    </Head>
                </Reveal>
                <Row>
                    {STEPS.map((step) => (
                        <Reveal key={step.title}>
                            <Step>
                                <Node>
                                    <step.icon size={22} weight="regular" />
                                </Node>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </Step>
                        </Reveal>
                    ))}
                </Row>
            </div>
        </Wrap>
    )
}
