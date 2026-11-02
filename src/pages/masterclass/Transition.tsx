import styled from 'styled-components'
import { Rocket } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { Kicker, ChipRow } from '../../components/shared'

const Section = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 5rem 0;
`

const Inner = styled.div`
    max-width: 760px;
    margin: 0 auto;
`

const Title = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.015em;
    margin-bottom: 1.5rem;

    @media (max-width: 720px) {
        font-size: 1.5rem;
    }
`

const Pills = styled(ChipRow)`
    margin-bottom: 2.25rem;
`

const Pill = styled.span`
    background: var(--chip-bg);
    color: var(--blue-dark);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.45rem 0.9rem;
    border-radius: 100px;
`

const Copy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    p {
        font-size: 1.08rem;
        line-height: 1.7;
        color: var(--slate);
    }

    strong {
        color: var(--ink);
        font-weight: 800;
    }

    @media (max-width: 720px) {
        p {
            font-size: 1rem;
        }
    }
`

const PILLS = [
    'WhatsApp Oficial',
    'IA Copiloto (Mia)',
    'Funil CRM',
    'Gestão de Tarefas',
    'Jornadas & Disparos',
    'Relatórios CAC/ROAS',
]

export function Transition() {
    return (
        <Section>
            <div className="wrap">
                <Inner>
                    <Reveal>
                        <Kicker>
                            <Rocket size={15} weight="regular" />
                            Da teoria à prática
                        </Kicker>
                        <Title>
                            Imagine ter toda essa máquina de matrículas pronta dentro da sua secretaria ainda esta
                            semana, gerando visitas e alunos novos todos os dias.
                        </Title>
                        <Pills>
                            {PILLS.map((p) => (
                                <Pill key={p}>{p}</Pill>
                            ))}
                        </Pills>
                        <Copy>
                            <p>
                                Estou falando de tirar a sua secretaria do improviso do caderninho e do WhatsApp solto.
                                Falo sobre você <strong>atender em segundos, nutrir no piloto automático e converter</strong>{' '}
                                os pais que já chamam a sua escola todos os dias.
                            </p>
                            <p>
                                O grande desafio da maioria dos diretores escolares hoje — mesmo depois de aprenderem o
                                método desta aula — é a <strong>lentidão e a falha humana</strong> na hora de cobrar a
                                execução da secretaria.
                            </p>
                            <p>
                                Muitos diretores até tentam criar uma planilha ou pedir para a equipe fazer os{' '}
                                <em>follow-ups</em> manualmente. Mas, na correria da escola, a atendente esquece de
                                retornar, demora horas para responder, não confirma as visitas e{' '}
                                <strong>os pais fecham com o concorrente</strong>.
                            </p>
                            <p>
                                Felizmente, você não precisa montar nada disso no braço. É exatamente essa estrutura
                                pronta que você ativa hoje dentro do <strong>Maskot Edu</strong>.
                            </p>
                        </Copy>
                    </Reveal>
                </Inner>
            </div>
        </Section>
    )
}
