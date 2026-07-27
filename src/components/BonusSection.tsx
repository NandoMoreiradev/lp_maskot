import styled from 'styled-components'
import { Gift, CheckCircle } from 'phosphor-react'
import { Reveal } from './Reveal'

const Section = styled.section`
    padding: 5.5rem 0;
`

const Card = styled.div`
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 24px;
    box-shadow: var(--shadow-lg);
    padding: 2.85rem;
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -60px;
        right: -60px;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        background: radial-gradient(circle, color-mix(in srgb, var(--amber) 20%, transparent), transparent 70%);
    }

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
        padding: 1.9rem;
    }
`

const PlanTag = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--chip-bg);
    color: var(--blue-dark);
    font-size: 0.72rem;
    font-weight: 800;
    padding: 0.38rem 0.8rem;
    border-radius: 100px;
    margin-bottom: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
`

const Left = styled.div`
    position: relative;
    z-index: 1;

    h3 {
        font-size: 1.75rem;
        font-weight: 800;
        margin-bottom: 0.75rem;
        letter-spacing: -0.01em;
    }
    p {
        color: var(--slate);
        font-size: 0.99rem;
        line-height: 1.6;
        margin-bottom: 1.6rem;
    }
`

const Meta = styled.div`
    display: flex;
    gap: 1.75rem;

    .n {
        font-family: var(--font-mono);
        font-size: 1.4rem;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
    }
    .l {
        font-size: 0.72rem;
        color: var(--slate);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.85rem 1.25rem;
    position: relative;
    z-index: 1;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }

    li {
        display: flex;
        gap: 0.6rem;
        font-size: 0.9rem;
        font-weight: 600;
        align-items: flex-start;

        svg {
            color: var(--wa-dark);
            margin-top: 0.15rem;
            flex-shrink: 0;
        }
    }
`

const BONUS_ITEMS = [
    'Kanban visual de matrículas',
    'Calendário de visitas',
    'Automações de funil (régua)',
    'Jornadas automatizadas',
    'Campanhas de matrícula',
    'Disparos em massa por e-mail',
    'Domínio de e-mail próprio',
    'Analytics avançado de captação',
]

export function BonusSection() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <Card>
                        <Left>
                            <PlanTag>
                                <Gift size={14} weight="regular" /> Bônus incluso
                            </PlanTag>
                            <h3>CRM Maskot Crescimento, de graça</h3>
                            <p>
                                A máquina de matrículas com automação pra escalar — a mesma coisa que outras escolas
                                pagam à parte, aqui vem junto ao contratar o WhatsApp.
                            </p>
                            <Meta>
                                <div>
                                    <div className="n">Ilimitados</div>
                                    <div className="l">Usuários</div>
                                </div>
                                <div>
                                    <div className="n">5.000</div>
                                    <div className="l">Leads ativos</div>
                                </div>
                            </Meta>
                        </Left>
                        <List>
                            {BONUS_ITEMS.map((item) => (
                                <li key={item}>
                                    <CheckCircle size={17} weight="regular" />
                                    {item}
                                </li>
                            ))}
                        </List>
                    </Card>
                </Reveal>
            </div>
        </Section>
    )
}
