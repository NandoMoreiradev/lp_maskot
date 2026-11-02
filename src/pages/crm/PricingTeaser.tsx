import styled from 'styled-components'
import { CurrencyCircleDollar } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { Kicker } from '../../components/shared'

const Section = styled.section`
    padding: 5rem 0;
`

const Head = styled.div`
    text-align: center;
    max-width: 640px;
    margin: 0 auto 1rem;

    h2 {
        font-size: 2.1rem;
        font-weight: 800;
        letter-spacing: -0.015em;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-top: 2.5rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 560px) {
        grid-template-columns: 1fr;
    }
`

const PlanCard = styled.div<{ $popular?: boolean }>`
    border: 1px solid ${(p) => (p.$popular ? 'var(--blue)' : 'var(--line)')};
    border-radius: 16px;
    padding: 1.5rem 1.25rem;
    background: var(--paper-raised);
    position: relative;
    ${(p) => p.$popular && `box-shadow: var(--shadow-md);`}

    h4 {
        font-size: 1.02rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 0.82rem;
        color: var(--slate);
        line-height: 1.5;
        min-height: 56px;
    }
`

const Badge = styled.span`
    position: absolute;
    top: -11px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--blue);
    color: #fff;
    font-size: 0.62rem;
    font-weight: 800;
    padding: 0.2rem 0.7rem;
    border-radius: 100px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
`

const Note = styled.p`
    text-align: center;
    color: var(--slate-soft);
    font-size: 0.8rem;
    margin-top: 2rem;
`

const PLANS = [
    { name: 'Essencial', desc: 'Para pequenas escolas que precisam organizar o comercial.', popular: false },
    { name: 'Crescimento', desc: 'A máquina de matrículas com automação para escalar.', popular: true },
    { name: 'Escala', desc: 'Para grandes operações que precisam de inteligência.', popular: false },
    { name: 'Rede Educacional', desc: 'Gestão multi-unidades centralizada para grupos.', popular: false },
]

export function PricingTeaser() {
    return (
        <Section id="precos">
            <div className="wrap">
                <Reveal>
                    <Head>
                        <Kicker style={{ justifyContent: 'center' }}>
                            <CurrencyCircleDollar size={15} weight="regular" />
                            Planos flexíveis
                        </Kicker>
                        <h2>Comece pelo que sua escola precisa agora</h2>
                    </Head>
                </Reveal>
                <Grid>
                    {PLANS.map((plan) => (
                        <Reveal key={plan.name}>
                            <PlanCard $popular={plan.popular}>
                                {plan.popular && <Badge>Mais escolhido</Badge>}
                                <h4>{plan.name}</h4>
                                <p>{plan.desc}</p>
                            </PlanCard>
                        </Reveal>
                    ))}
                </Grid>
                <Note>
                    WhatsApp e IA são módulos adicionais, disponíveis em qualquer plano. Fale com um consultor pra
                    montar o combo certo pra sua escola.
                </Note>
            </div>
        </Section>
    )
}
