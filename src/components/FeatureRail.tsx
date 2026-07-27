import styled from 'styled-components'
import { ArrowsClockwise, Robot, Funnel, Lightning, ChartLineUp, CheckCircle, WhatsappLogo, InstagramLogo, FacebookLogo, NotePencil, Sparkle, Microphone } from 'phosphor-react'
import { Reveal } from './Reveal'
import { SectionHead, Kicker, SectionTitle, SectionSub, VisualCard, ChipRow, Chip, StatGrid, StatCard, Heat } from './shared'

const Rail = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 27px;
        top: 27px;
        bottom: 27px;
        width: 2px;
        background: var(--line);
        z-index: 0;

        @media (max-width: 900px) {
            display: none;
        }
    }
`

const Row = styled.div<{ $rev?: boolean }>`
    display: grid;
    grid-template-columns: 56px 1fr 1fr;
    gap: 0 2.5rem;
    align-items: center;
    margin-bottom: 5.75rem;
    position: relative;
    z-index: 1;

    &:last-child {
        margin-bottom: 0;
    }

    ${(p) =>
        p.$rev &&
        `
        .feature-text { order: 3; }
        .visual-card-slot { order: 2; }
    `}

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        margin-bottom: 3.5rem;

        .feature-text {
            order: initial;
        }
        .visual-card-slot {
            order: initial;
        }
    }
`

const Node = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--paper-raised);
    border: 1px solid var(--line);
    box-shadow: var(--shadow-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--blue);

    @media (max-width: 900px) {
        margin-bottom: 0.5rem;
    }
`

const Num = styled.div`
    font-family: var(--font-mono);
    font-size: 0.76rem;
    color: var(--slate-soft);
    margin-bottom: 0.6rem;
    letter-spacing: 0.03em;
`

const Text = styled.div`
    h3 {
        font-size: 1.58rem;
        font-weight: 800;
        margin-bottom: 0.85rem;
        letter-spacing: -0.01em;
    }
    p {
        color: var(--slate);
        font-size: 1rem;
        line-height: 1.65;
        margin-bottom: 1.25rem;
    }
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    li {
        display: flex;
        gap: 0.65rem;
        align-items: flex-start;
        font-size: 0.92rem;
        font-weight: 600;

        svg {
            color: var(--wa-dark);
            margin-top: 0.15rem;
            flex-shrink: 0;
        }

        span {
            font-weight: 400;
            color: var(--slate);
        }
    }
`

const MiniBubble = styled.div<{ $out?: boolean }>`
    max-width: 88%;
    padding: 0.55rem 0.75rem;
    border-radius: 9px;
    font-size: 0.8rem;
    line-height: 1.42;
    background: ${(p) => (p.$out ? 'var(--wa-bubble-out)' : 'var(--wa-bubble-in)')};
    align-self: ${(p) => (p.$out ? 'flex-end' : 'flex-start')};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
`

const SysNote = styled.div`
    align-self: center;
    background: color-mix(in srgb, var(--amber) 18%, var(--paper-raised));
    border: 1px dashed var(--amber);
    font-size: 0.7rem;
    color: var(--ink);
    text-align: center;
    max-width: 92%;
    padding: 0.55rem 0.75rem;
    border-radius: 9px;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    justify-content: center;

    svg {
        color: var(--amber);
    }
`

// heatmap decorativo com padrão fixo (evita aleatoriedade a cada render)
const HEAT_PATTERN = [
    2, 2, 3, 4, 6, 8, 9, 7, 5, 4, 3, 2, 2, 3, 5, 7, 9, 10, 9, 6, 4, 3, 2, 2, 3, 4, 6, 9, 10, 9, 8, 6, 5, 4, 3, 2, 2, 3,
    4, 5, 6, 5, 4, 3, 2, 2, 2, 2,
]

export function FeatureRail() {
    return (
        <section className="block" id="como-funciona">
            <div className="wrap">
                <Reveal>
                    <SectionHead>
                        <Kicker>
                            <Sparkle size={15} weight="regular" />
                            Como funciona
                        </Kicker>
                        <SectionTitle>Tudo o que sua escola precisa pra nunca perder um lead no WhatsApp</SectionTitle>
                        <SectionSub>
                            Cinco frentes construídas pra resolver o problema real: atendimento lento, lead esquecido
                            e equipe sem visão do que está acontecendo.
                        </SectionSub>
                    </SectionHead>
                </Reveal>

                <Rail>
                    <Row>
                        <Reveal>
                            <Node>
                                <ArrowsClockwise size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>01 · Atendimento</Num>
                                <h3>Todo canal, uma fila só</h3>
                                <p>
                                    WhatsApp, Instagram Direct e Messenger chegam na mesma fila. A distribuição entre
                                    departamentos (Secretaria, Financeiro, Pedagógico) acontece sozinha, por rodízio
                                    ou por quem tem menos conversas em aberto.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Departamentos e filas configuráveis{' '}
                                        <span>— sem depender de planilha ou grupo de WhatsApp paralelo</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Distribuição automática{' '}
                                        <span>por rodízio ou balanceamento de carga entre atendentes</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Inbox unificado <span>WhatsApp + Instagram + Messenger na mesma tela</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <MiniBubble>Vi vocês no Instagram, como faço pra visitar?</MiniBubble>
                                <MiniBubble $out>Oi! Você pode agendar direto por aqui.</MiniBubble>
                                <ChipRow>
                                    <Chip $tone="wa">
                                        <WhatsappLogo size={15} weight="regular" /> WhatsApp
                                    </Chip>
                                    <Chip $tone="ig">
                                        <InstagramLogo size={15} weight="regular" /> Instagram
                                    </Chip>
                                    <Chip $tone="fb">
                                        <FacebookLogo size={15} weight="regular" /> Messenger
                                    </Chip>
                                </ChipRow>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row $rev>
                        <Reveal>
                            <Node>
                                <Robot size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>02 · Inteligência Artificial</Num>
                                <h3>Uma IA que resolve, não só responde</h3>
                                <p>
                                    Treinada com a base de conhecimento da sua escola: tira dúvida, agenda e reagenda
                                    visita, cria e atualiza lead no funil, manda material em PDF — e transfere pro
                                    time humano sozinha quando o assunto exige.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Agenda e reagenda visitas <span>direto na sua agenda, sem intervenção humana</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Cria e atualiza leads <span>no funil de matrículas automaticamente</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Transfere pro time humano{' '}
                                        <span>quando detecta que precisa, com resumo da conversa</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <MiniBubble>Quero falar com uma pessoa, por favor</MiniBubble>
                                <SysNote>
                                    <ArrowsClockwise size={15} weight="regular" /> IA: transferindo para @Secretaria
                                    com resumo da conversa
                                </SysNote>
                                <MiniBubble $out>
                                    Oi! Sou a Ana, da Secretaria. Vi que você já conversou com nossa IA — como posso
                                    ajudar?
                                </MiniBubble>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row>
                        <Reveal>
                            <Node>
                                <Funnel size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>03 · CRM no chat</Num>
                                <h3>O funil de matrículas na palma da mão</h3>
                                <p>
                                    Converta o contato em lead, mude o estágio do funil, agende visita ou tarefa e
                                    exporte a conversa inteira em PDF — sem sair da tela do WhatsApp.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Converter em lead <span>com um clique, direto do painel da conversa</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Mover estágio do funil <span>sem abrir outra aba do CRM</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Exportar conversa em PDF <span>pra documentar um atendimento crítico</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <StatGrid style={{ gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                                    <StatCard>
                                        <div className="lbl">Funil de vendas</div>
                                        <div className="val" style={{ fontSize: '0.95rem' }}>
                                            Em negociação
                                        </div>
                                    </StatCard>
                                    <StatCard>
                                        <div className="lbl">Aluno de interesse</div>
                                        <div className="val" style={{ fontSize: '0.95rem' }}>
                                            Pedro Henrique · 1º Ano
                                        </div>
                                    </StatCard>
                                </StatGrid>
                                <ChipRow>
                                    <Chip>
                                        <NotePencil size={15} weight="regular" /> Matrícula 2026
                                    </Chip>
                                    <Chip>
                                        <Sparkle size={15} weight="regular" /> Quente
                                    </Chip>
                                </ChipRow>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row $rev>
                        <Reveal>
                            <Node>
                                <Lightning size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>04 · Produtividade</Num>
                                <h3>Ferramentas que sua equipe usa todo dia</h3>
                                <p>
                                    Pequenos recursos que economizam horas por semana: respostas prontas, notas
                                    internas invisíveis pro cliente e áudio em velocidade acelerada.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Respostas rápidas{' '}
                                        <span>atalhos como /materiais pra enviar tabelas e documentos padrão</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Notas internas <span>combine com o time sem o pai ver</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Áudio até 2x <span>ouça áudios longos em menos tempo</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <ChipRow>
                                    <Chip>
                                        <NotePencil size={15} weight="regular" /> Notas internas
                                    </Chip>
                                    <Chip>
                                        <Microphone size={15} weight="regular" /> Áudio 2x
                                    </Chip>
                                    <Chip>
                                        <Lightning size={15} weight="regular" /> /materiais
                                    </Chip>
                                </ChipRow>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row>
                        <Reveal>
                            <Node>
                                <ChartLineUp size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>05 · Analytics</Num>
                                <h3>Decisão baseada em dado, não em achismo</h3>
                                <p>
                                    Tempo de resposta por atendente, horário de pico da sua escola e quantos
                                    atendimentos realmente viram matrícula — tudo em um painel só.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        SLA de resposta <span>por faixa de tempo e por atendente</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Mapa de calor <span>descubra os horários de pico do seu WhatsApp</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Conversão até matrícula <span>e pesquisa de satisfação (CSAT) automática</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <StatGrid>
                                    <StatCard>
                                        <div className="lbl">Tempo médio</div>
                                        <div className="val">4 min</div>
                                    </StatCard>
                                    <StatCard>
                                        <div className="lbl">Conversão p/ matrícula</div>
                                        <div className="val">31%</div>
                                    </StatCard>
                                    <Heat>
                                        {HEAT_PATTERN.map((v, i) => (
                                            <div key={i} style={{ opacity: v / 10 }} />
                                        ))}
                                    </Heat>
                                </StatGrid>
                            </VisualCard>
                        </Reveal>
                    </Row>
                </Rail>
            </div>
        </section>
    )
}
