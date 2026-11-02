import styled from 'styled-components'
import { WhatsappLogo, Robot, Kanban, ClipboardText, ArrowsClockwise, ChartLineUp, Package } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { SectionHead, Kicker, SectionTitle, SectionSub } from '../../components/shared'

const Section = styled.section`
    padding: 5rem 0;
`

const Head = styled(SectionHead)`
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    > div:first-child {
        justify-content: center;
    }

    @media (max-width: 720px) {
        h2 {
            font-size: 1.6rem;
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.1rem;

    @media (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 620px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    height: 100%;
    border: 1px solid var(--line);
    border-radius: 16px;
    padding: 1.5rem;
    background: var(--paper-raised);
    box-shadow: var(--shadow-md);

    h3 {
        font-size: 1.02rem;
        font-weight: 800;
        line-height: 1.3;
        margin-bottom: 0.55rem;
    }
    p {
        font-size: 0.9rem;
        color: var(--slate);
        line-height: 1.6;
    }
`

const IconWrap = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--chip-bg);
    color: var(--blue-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
`

const PILLARS = [
    {
        icon: WhatsappLogo,
        title: 'WhatsApp Inbox Oficial Centralizado',
        desc: 'Chega de celulares espalhados ou conversas perdidas. Coloque toda a sua secretaria atendendo em um único número oficial, com distribuição de conversas, histórico blindado e supervisão em tempo real.',
    },
    {
        icon: Robot,
        title: 'Copilot IA (Mia) — Atendimento 24h',
        desc: 'O segredo da matrícula é a velocidade. A Mia, nossa Inteligência Artificial, responde os pais em segundos (inclusive à noite e nos finais de semana), tira dúvidas, qualifica a família e prepara o agendamento da visita.',
    },
    {
        icon: Kanban,
        title: 'Funil de Matrículas em Kanban (CRM Educacional)',
        desc: 'Visualize em uma única tela cada família que entrou em contato: Novo Lead, Em Atendimento, Visita Agendada, Visita Realizada e Matriculado. Saiba exatamente onde estão travadas as suas matrículas.',
    },
    {
        icon: ClipboardText,
        title: 'Gestão de Tarefas Anti-Esquecimento',
        desc: 'Sua equipe nunca mais vai esquecer de cobrar um pai que pediu o valor da mensalidade. O próprio sistema gera os alertas diários de quem a secretaria precisa ligar ou chamar no WhatsApp naquele dia.',
    },
    {
        icon: ArrowsClockwise,
        title: 'Jornadas de Nutrição e Disparos em Massa',
        desc: 'Ative sequências automáticas de mensagens para confirmar visitas (reduzindo faltas), aquecer pais indecisos e reativar com um clique centenas de contatos de famílias de campanhas passadas.',
    },
    {
        icon: ChartLineUp,
        title: 'Inteligência Comercial (CAC, ROAS e Previsibilidade)',
        desc: 'Saia do escuro. Descubra exatamente de qual campanha (Instagram, Google, Indicação) veio cada matrícula assinada, qual o seu Custo de Aquisição por Aluno e qual a previsão de fechamento do mês.',
    },
]

export function Pillars() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <Head>
                        <Kicker>
                            <Package size={15} weight="regular" />
                            O que você ativa na escola
                        </Kicker>
                        <SectionTitle>O que a sua escola recebe pronto ao ativar o Maskot Edu</SectionTitle>
                        <SectionSub>
                            Cada etapa que você viu na Masterclass já está construída dentro da plataforma para a sua
                            equipe operar sem improviso.
                        </SectionSub>
                    </Head>
                </Reveal>
                <Grid>
                    {PILLARS.map((p) => (
                        <Reveal key={p.title}>
                            <Card>
                                <IconWrap>
                                    <p.icon size={22} weight="regular" />
                                </IconWrap>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </Card>
                        </Reveal>
                    ))}
                </Grid>
            </div>
        </Section>
    )
}
