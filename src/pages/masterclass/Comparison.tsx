import styled from 'styled-components'
import { CheckCircle, XCircle } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'

const Section = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 5rem 0;
`

const Title = styled.h2`
    font-size: 2.15rem;
    font-weight: 800;
    letter-spacing: -0.015em;
    text-align: center;
    margin-bottom: 2.75rem;

    @media (max-width: 720px) {
        font-size: 1.6rem;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    max-width: 980px;
    margin: 0 auto;

    @media (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div<{ $good?: boolean }>`
    height: 100%;
    border-radius: 18px;
    padding: 1.75rem;
    background: var(--paper);
    border: 1px solid ${(p) => (p.$good ? 'var(--wa)' : 'var(--line)')};
    box-shadow: ${(p) => (p.$good ? 'var(--shadow-md)' : 'none')};

    h3 {
        font-size: 1.05rem;
        font-weight: 800;
        line-height: 1.3;
        margin-bottom: 1.25rem;
        color: ${(p) => (p.$good ? 'var(--wa-dark)' : 'var(--slate)')};
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    li {
        display: flex;
        gap: 0.7rem;
        align-items: flex-start;
        font-size: 0.97rem;
        line-height: 1.5;
        color: var(--ink);
    }

    li svg {
        flex-shrink: 0;
        margin-top: 2px;
        color: ${(p) => (p.$good ? 'var(--wa)' : '#E5484D')};
    }
`

const BAD = [
    'Depender da memória da secretária para fazer os 5 toques de follow-up.',
    'Demorar horas para responder pais que chamam fora do horário comercial.',
    'Anotar visitas em agendas de papel ou planilhas que ninguém atualiza.',
    'Investir em anúncios no Instagram e Google sem saber quantas matrículas voltaram.',
]

const GOOD = [
    'IA Mia respondendo e qualificando famílias em segundos, 24h por dia.',
    'Funil Kanban visual com tarefas automáticas cobrando a equipe diariamente.',
    'Lembretes automáticos de visita e reativação de ex-interessados na API Oficial.',
    'Painel em tempo real com origem de leads, conversão de visitas, CAC e ROAS.',
]

export function Comparison() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <Title>Dois caminhos após assistir a esta aula</Title>
                </Reveal>
                <Grid>
                    <Reveal>
                        <Card>
                            <h3>Tentando implementar sozinho no improviso</h3>
                            <ul>
                                {BAD.map((t) => (
                                    <li key={t}>
                                        <XCircle size={20} weight="fill" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card $good>
                            <h3>Com o protocolo rodando no Maskot Edu</h3>
                            <ul>
                                {GOOD.map((t) => (
                                    <li key={t}>
                                        <CheckCircle size={20} weight="fill" />
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </Reveal>
                </Grid>
            </div>
        </Section>
    )
}
