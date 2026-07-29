import styled from 'styled-components'

const Card = styled.div`
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: var(--shadow-lg);
    padding: 1.1rem;
    max-width: 460px;
    margin: 0 auto;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.9rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--line);

    .dots {
        display: flex;
        gap: 6px;

        div {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--line);
        }
    }
`

const Title = styled.span`
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--slate);
`

const Cols = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.7rem;
`

const ColHead = styled.div`
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--slate-soft);
    margin-bottom: 0.55rem;
    display: flex;
    align-items: center;
    gap: 0.35rem;

    span {
        background: var(--chip-bg);
        color: var(--blue-dark);
        border-radius: 100px;
        padding: 0.05rem 0.4rem;
        font-size: 0.65rem;
    }
`

const KCard = styled.div<{ $drag?: boolean; $done?: boolean }>`
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 0.6rem 0.65rem;
    margin-bottom: 0.55rem;
    font-size: 0.72rem;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

    .name {
        font-weight: 700;
        margin-bottom: 0.3rem;
    }
    .val {
        font-family: var(--font-mono);
        color: var(--wa-dark);
        font-weight: 700;
    }
    .tag {
        display: inline-block;
        background: ${(p) => (p.$done ? '#DCF8C6' : 'var(--chip-bg)')};
        color: ${(p) => (p.$done ? '#00876b' : 'var(--blue-dark)')};
        font-size: 0.6rem;
        font-weight: 700;
        padding: 0.1rem 0.4rem;
        border-radius: 5px;
        margin-top: 0.3rem;
    }

    ${(p) =>
        p.$drag &&
        `
        border-color: var(--blue);
        box-shadow: 0 8px 18px -6px color-mix(in srgb, var(--blue) 45%, transparent);
        transform: rotate(-1.5deg);
    `}
`

export function KanbanMockup() {
    return (
        <Card>
            <Head>
                <Title>Funil de Matrículas 2026</Title>
                <div className="dots">
                    <div />
                    <div />
                    <div />
                </div>
            </Head>
            <Cols>
                <div>
                    <ColHead>
                        Novo Lead <span>4</span>
                    </ColHead>
                    <KCard>
                        <div className="name">Mãe do Pedro</div>
                        <span className="tag">Instagram</span>
                    </KCard>
                    <KCard>
                        <div className="name">Família Costa</div>
                        <span className="tag">WhatsApp</span>
                    </KCard>
                </div>
                <div>
                    <ColHead>
                        Visita Agendada <span>3</span>
                    </ColHead>
                    <KCard $drag>
                        <div className="name">Ana Beatriz</div>
                        <div className="val">R$ 980/mês</div>
                    </KCard>
                    <KCard>
                        <div className="name">João Vitor</div>
                        <div className="val">R$ 1.240/mês</div>
                    </KCard>
                </div>
                <div>
                    <ColHead>
                        Matriculado <span>2</span>
                    </ColHead>
                    <KCard $done>
                        <div className="name">Sofia M.</div>
                        <span className="tag">Fechado</span>
                    </KCard>
                </div>
            </Cols>
        </Card>
    )
}
