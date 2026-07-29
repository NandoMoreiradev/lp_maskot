import styled from 'styled-components'
import {
    Kanban,
    WhatsappLogo,
    Robot,
    Target,
    ArrowsClockwise,
    CheckCircle,
    CurrencyCircleDollar,
    Sparkle,
    Funnel,
} from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { SectionHead, Kicker, SectionTitle, SectionSub, VisualCard, ChipRow, Chip } from '../../components/shared'

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
    margin-bottom: 5.5rem;
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
        margin-bottom: 3.25rem;

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
`

const Text = styled.div`
    h3 {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.8rem;
        letter-spacing: -0.01em;
    }
    p {
        color: var(--slate);
        font-size: 0.98rem;
        line-height: 1.65;
        margin-bottom: 1.2rem;
    }
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;

    li {
        display: flex;
        gap: 0.6rem;
        align-items: flex-start;
        font-size: 0.9rem;
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

const AddonNote = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--chip-bg);
    color: var(--blue-dark);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.3rem 0.7rem;
    border-radius: 8px;
    margin-top: 0.3rem;
`

const StatPill = styled.div`
    display: inline-flex;
    align-items: baseline;
    gap: 0.35rem;
    background: var(--chip-bg);
    border-radius: 8px;
    padding: 0.3rem 0.65rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--blue-dark);
    margin-bottom: 0.9rem;

    .n {
        font-family: var(--font-mono);
        font-size: 0.95rem;
    }
`

const MiniBubble = styled.div<{ $out?: boolean }>`
    max-width: 85%;
    padding: 0.55rem 0.75rem;
    border-radius: 9px;
    font-size: 0.8rem;
    background: ${(p) => (p.$out ? '#DCF8C6' : '#fff')};
    align-self: ${(p) => (p.$out ? 'flex-end' : 'flex-start')};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
`

const CopilotCard = styled.div`
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 0.9rem 1rem;

    .who {
        font-size: 0.72rem;
        color: var(--slate);
        font-weight: 700;
        margin-bottom: 0.5rem;
    }
    .suggestion {
        font-size: 0.82rem;
        line-height: 1.5;
        margin-bottom: 0.7rem;
    }
`

const CopilotBtn = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: var(--blue);
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.4rem 0.7rem;
    border-radius: 7px;
`

const BudgetRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 0.6rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const BudgetLabel = styled.div`
    width: 82px;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--slate);
    flex-shrink: 0;
`

const BudgetBarBg = styled.div`
    flex: 1;
    background: var(--paper);
    border-radius: 6px;
    height: 10px;
    overflow: hidden;
`

const BudgetBar = styled.div<{ $pct: number }>`
    height: 100%;
    border-radius: 6px;
    background: linear-gradient(90deg, var(--blue), var(--wa));
    width: ${(p) => p.$pct}%;
`

const BudgetVal = styled.div`
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 700;
    width: 44px;
    text-align: right;
    flex-shrink: 0;
`

const FlowNode = styled.div`
    background: var(--paper);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 0.5rem 0.7rem;
    font-size: 0.72rem;

    .h {
        font-weight: 800;
        display: flex;
        align-items: center;
        gap: 0.35rem;
        margin-bottom: 0.2rem;
        color: var(--blue-dark);
    }
`

const FlowArrow = styled.div`
    text-align: center;
    color: var(--slate-soft);
    font-size: 0.9rem;
`

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
                        <SectionTitle>Os pilares que sustentam a captação da sua escola</SectionTitle>
                        <SectionSub>
                            Cinco frentes que trabalham juntas — não são módulos soltos, são o mesmo dado circulando
                            pelo sistema inteiro.
                        </SectionSub>
                    </SectionHead>
                </Reveal>

                <Rail>
                    <Row>
                        <Reveal>
                            <Node>
                                <Kanban size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>01 · CRM</Num>
                                <h3>O funil visual que substitui a planilha</h3>
                                <p>
                                    Veja cada lead, negociação e valor em jogo num Kanban só. Famílias com mais de um
                                    filho negociam em paralelo, sem duplicar cadastro.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Kanban arrastar-e-soltar <span>com valor em negociação visível no topo</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Timeline única{' '}
                                        <span>WhatsApp, ligações, visitas e notas no mesmo lugar</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Modo lista <span>com filtros avançados e ações em massa</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <ChipRow>
                                    <Chip>
                                        <Kanban size={15} weight="regular" /> Em negociação
                                    </Chip>
                                    <Chip>
                                        <CurrencyCircleDollar size={15} weight="regular" /> R$ 24.600 no funil
                                    </Chip>
                                </ChipRow>
                                <div
                                    style={{
                                        background: 'var(--paper)',
                                        border: '1px solid var(--line)',
                                        borderRadius: 10,
                                        padding: '0.6rem 0.65rem',
                                        fontSize: '0.72rem',
                                    }}
                                >
                                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Ana Beatriz — 1º Ano</div>
                                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--wa-dark)', fontWeight: 700 }}>
                                        R$ 980/mês
                                    </div>
                                </div>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row $rev>
                        <Reveal>
                            <Node>
                                <WhatsappLogo size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>02 · Atendimento</Num>
                                <h3>WhatsApp oficial integrado ao CRM</h3>
                                <p>
                                    Quem contrata o Módulo WhatsApp atende pelo número oficial da Meta com o funil de
                                    matrículas dentro da própria conversa — sem trocar de tela.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Departamentos e filas{' '}
                                        <span>organizados por Secretaria, Financeiro, Pedagógico</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        IA que atende 24/7 <span>tira dúvida e agenda visita fora do expediente</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Converter em lead <span>direto do painel da conversa, sem sair da tela</span>
                                    </li>
                                </List>
                                <AddonNote>
                                    <CheckCircle size={13} weight="regular" /> Módulo adicional — contratado à parte
                                    do CRM
                                </AddonNote>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <MiniBubble>Vocês têm vaga pro Infantil 2?</MiniBubble>
                                <MiniBubble $out>Temos sim! Posso agendar uma visita essa semana?</MiniBubble>
                                <ChipRow>
                                    <Chip>
                                        <Kanban size={15} weight="regular" /> Lead criado no funil
                                    </Chip>
                                </ChipRow>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row>
                        <Reveal>
                            <Node>
                                <Robot size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>03 · Inteligência Artificial</Num>
                                <h3>Um copiloto que sugere o próximo passo</h3>
                                <p>
                                    A Mia (copiloto de IA) resume conversas longas, sugere resposta, monta o briefing
                                    do dia e ajuda a redigir mensagens — direto na ficha do lead ou no WhatsApp.
                                </p>
                                <StatPill>
                                    <span className="n">7</span> modos de IA disponíveis
                                </StatPill>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Sugestão de resposta <span>e resumo automático de conversa</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Próxima melhor ação <span>indicada por lead, com base no histórico</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Briefing diário{' '}
                                        <span>automático pra equipe começar o dia sabendo o que fazer</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <CopilotCard>
                                    <div className="who">Sugestão de IA — Ana Beatriz</div>
                                    <div className="suggestion">
                                        "Ela perguntou sobre desconto há 2 dias e não teve resposta. Quer que eu monte
                                        uma mensagem de retomada?"
                                    </div>
                                    <CopilotBtn>
                                        <Sparkle size={13} weight="regular" /> Gerar mensagem
                                    </CopilotBtn>
                                </CopilotCard>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row $rev>
                        <Reveal>
                            <Node>
                                <Target size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>04 · Campanhas &amp; Landing Pages</Num>
                                <h3>Saiba o retorno de cada real investido</h3>
                                <p>
                                    Acompanhe o custo por canal, monte a landing page de captação sem depender de
                                    agência e capture o lead direto no funil, com origem rastreada.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Orçamento por canal{' '}
                                        <span>num painel só, sem planilha de marketing separada</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Criador de landing page{' '}
                                        <span>arrastar-e-soltar, com formulário conectado ao CRM</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Rastreio de origem <span>do clique no anúncio até a matrícula</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <BudgetRow>
                                    <BudgetLabel>Google Ads</BudgetLabel>
                                    <BudgetBarBg>
                                        <BudgetBar $pct={72} />
                                    </BudgetBarBg>
                                    <BudgetVal>72%</BudgetVal>
                                </BudgetRow>
                                <BudgetRow>
                                    <BudgetLabel>Meta Ads</BudgetLabel>
                                    <BudgetBarBg>
                                        <BudgetBar $pct={54} />
                                    </BudgetBarBg>
                                    <BudgetVal>54%</BudgetVal>
                                </BudgetRow>
                                <BudgetRow>
                                    <BudgetLabel>Instagram</BudgetLabel>
                                    <BudgetBarBg>
                                        <BudgetBar $pct={31} />
                                    </BudgetBarBg>
                                    <BudgetVal>31%</BudgetVal>
                                </BudgetRow>
                            </VisualCard>
                        </Reveal>
                    </Row>

                    <Row>
                        <Reveal>
                            <Node>
                                <ArrowsClockwise size={26} weight="regular" />
                            </Node>
                        </Reveal>
                        <Reveal className="feature-text">
                            <Text>
                                <Num>05 · Automação de Marketing</Num>
                                <h3>Nenhum lead esfria por falta de follow-up</h3>
                                <p>
                                    Monte jornadas automáticas com condições reais do funil: WhatsApp, e-mail ou
                                    lembrete financeiro disparado sozinho, no momento certo.
                                </p>
                                <List>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Jornadas visuais <span>com condições por etapa do funil de matrículas</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Disparo automático{' '}
                                        <span>por WhatsApp, e-mail e lembretes de cobrança</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={17} weight="regular" />
                                        Régua de recuperação <span>reativa lead esquecido sem esforço manual</span>
                                    </li>
                                </List>
                            </Text>
                        </Reveal>
                        <Reveal className="visual-card-slot">
                            <VisualCard>
                                <FlowNode>
                                    <div className="h">
                                        <Funnel size={13} weight="regular" /> Etapa: Proposta enviada
                                    </div>
                                    Sem resposta há 2 dias
                                </FlowNode>
                                <FlowArrow>↓</FlowArrow>
                                <FlowNode>
                                    <div className="h">
                                        <WhatsappLogo size={13} weight="regular" /> Disparo automático
                                    </div>
                                    "Olá [Nome], ficou alguma dúvida sobre a proposta?"
                                </FlowNode>
                            </VisualCard>
                        </Reveal>
                    </Row>
                </Rail>
            </div>
        </section>
    )
}
