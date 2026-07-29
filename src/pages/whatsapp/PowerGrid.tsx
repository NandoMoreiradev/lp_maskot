import styled from 'styled-components'
import { ShieldCheck, CalendarCheck, Star, Paperclip } from 'phosphor-react'
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
        font-size: 0.92rem;
        font-weight: 800;
        margin-bottom: 0.35rem;
    }
    p {
        font-size: 0.8rem;
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
    margin-bottom: 0.85rem;
`

const ITEMS = [
    {
        icon: ShieldCheck,
        title: 'Templates aprovados Meta',
        desc: 'Reengaje contatos frios com templates oficiais aprovados pela Meta.',
    },
    {
        icon: CalendarCheck,
        title: 'Agendamento de mensagens',
        desc: 'Programe lembretes e avisos para saírem no melhor horário.',
    },
    {
        icon: Star,
        title: 'CSAT automático',
        desc: 'Pesquisa de satisfação ao fim do atendimento, direto no WhatsApp.',
    },
    {
        icon: Paperclip,
        title: 'Central de anexos',
        desc: 'Todos os documentos e comprovantes da conversa, organizados.',
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
                            E ainda tem mais
                        </Kicker>
                        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.015em' }}>
                            Detalhes que fazem diferença no dia a dia
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

