import styled from 'styled-components'
import { Gift } from 'phosphor-react'
import { Reveal } from './Reveal'

const Section = styled.section`
    background: linear-gradient(
        120deg,
        color-mix(in srgb, var(--amber) 12%, var(--paper-raised)),
        color-mix(in srgb, var(--blue) 9%, var(--paper-raised))
    );
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
`

const Ticket = styled.div`
    display: flex;
    align-items: stretch;
    max-width: 1180px;
    margin: 0 auto;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`

const BadgeCol = styled.div`
    flex-shrink: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        border-right: 2px dashed color-mix(in srgb, var(--ink) 18%, transparent);
    }
    &::before {
        content: '';
        position: absolute;
        right: -11px;
        top: 50%;
        transform: translateY(-50%);
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: var(--paper);
        border: 1px solid var(--line);
    }

    @media (max-width: 700px) {
        width: 100%;
        padding: 1.5rem 0 0.5rem;
        &::after,
        &::before {
            display: none;
        }
    }
`

const Badge = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background: var(--amber);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
`

const Text = styled.div`
    padding: 2.3rem 2.5rem;

    h3 {
        font-size: 1.4rem;
        font-weight: 800;
        margin-bottom: 0.4rem;
        letter-spacing: -0.01em;
    }

    p {
        color: var(--slate);
        font-size: 0.97rem;
        max-width: 640px;
        line-height: 1.55;
    }

    strong {
        color: var(--ink);
    }

    @media (max-width: 700px) {
        padding: 0.5rem 1.75rem 1.75rem;
    }
`

export function OfferBand() {
    return (
        <Reveal>
            <Section>
                <Ticket>
                    <BadgeCol>
                        <Badge>
                            <Gift size={26} weight="regular" />
                        </Badge>
                    </BadgeCol>
                    <Text>
                        <h3>Contrate o WhatsApp, ganhe o CRM Crescimento de bônus</h3>
                        <p>
                            Ao contratar o <strong>Módulo WhatsApp</strong>, sua escola leva sem custo adicional o{' '}
                            <strong>Maskot CRM — plano Crescimento</strong>: a máquina de matrículas completa, com
                            funil visual, automações e analytics avançado.
                        </p>
                    </Text>
                </Ticket>
            </Section>
        </Reveal>
    )
}
