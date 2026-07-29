import styled from 'styled-components'
import {
    ChartLineUp,
    ClipboardText,
    CurrencyCircleDollar,
    GraduationCap,
    Buildings,
    Star,
    CalendarCheck,
    Sparkle,
} from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { SectionHead, Kicker } from '../../components/shared'

const Wrap = styled.section`
    background: var(--paper-raised);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 4.25rem 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9rem;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Card = styled.div`
    border: 1px solid var(--line);
    border-radius: 14px;
    padding: 1.25rem;
    background: var(--paper);

    h4 {
        font-size: 0.9rem;
        font-weight: 800;
        margin-bottom: 0.35rem;
    }
    p {
        font-size: 0.78rem;
        color: var(--slate);
        line-height: 1.5;
    }
`

const IconWrap = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: var(--chip-bg);
    color: var(--blue-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
`

const ITEMS = [
    {
        icon: ChartLineUp,
        title: 'Analytics & BI',
        desc: 'Funil de conversão, ranking de vendedores e motivos de perda num dashboard executivo.',
    },
    {
        icon: ClipboardText,
        title: 'Gestão de Tarefas',
        desc: 'Kanban, lista e calendário para secretaria, financeiro e pedagógico, com automação.',
    },
    {
        icon: CurrencyCircleDollar,
        title: 'Comissões',
        desc: 'Cálculo automático com recibo em PDF e estorno configurável em caso de cancelamento.',
    },
    {
        icon: GraduationCap,
        title: 'Onboarding do Aluno',
        desc: 'Checklist de boas-vindas disparado sozinho assim que a matrícula é fechada.',
    },
    {
        icon: Buildings,
        title: 'Multi-Escolas',
        desc: 'Troque de unidade com um clique e veja o consolidado da rede num painel só.',
    },
    {
        icon: Star,
        title: 'Pesquisas & NPS',
        desc: 'Meça a satisfação de pais e alunos com pesquisas automáticas pós-atendimento.',
    },
    {
        icon: CalendarCheck,
        title: 'Agendamento de Visitas',
        desc: 'Página pública com horários reais e lembrete automático — sem ida e volta de mensagem.',
    },
    {
        icon: Sparkle,
        title: 'Onboarding Guiado',
        desc: 'Todos os planos incluem suporte para configuração inicial do sistema.',
    },
]

export function PowerGrid() {
    return (
        <Wrap>
            <div className="wrap">
                <Reveal>
                    <SectionHead style={{ marginBottom: '2.25rem' }}>
                        <Kicker>
                            <Star size={15} weight="regular" />
                            E tem muito mais
                        </Kicker>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.015em' }}>
                            Um sistema completo, não uma colcha de retalhos
                        </h2>
                    </SectionHead>
                </Reveal>
                <Grid>
                    {ITEMS.map((item) => (
                        <Reveal key={item.title}>
                            <Card>
                                <IconWrap>
                                    <item.icon size={20} weight="regular" />
                                </IconWrap>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </Card>
                        </Reveal>
                    ))}
                </Grid>
            </div>
        </Wrap>
    )
}
