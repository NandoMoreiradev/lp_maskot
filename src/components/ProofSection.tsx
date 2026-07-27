import styled from 'styled-components'
import { CheckCircle, Lightning, Archive, BellRinging } from 'phosphor-react'
import { Reveal } from './Reveal'
import { SectionHead, Kicker, SectionTitle, SectionSub } from './shared'

const Section = styled.section`
    padding: 5.25rem 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
    margin-top: 2.75rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    background: var(--paper-raised);
    border: 1px solid var(--line);
    border-radius: 18px;
    padding: 2.1rem 1.85rem;
    box-shadow: var(--shadow-md);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    h4 {
        font-size: 1.12rem;
        font-weight: 800;
        margin: 1.25rem 0 0.5rem;
        letter-spacing: -0.005em;
    }
    p {
        font-size: 0.92rem;
        color: var(--slate);
        line-height: 1.6;
    }
`

const IconWrap = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: var(--chip-bg);
    color: var(--blue-dark);
    display: flex;
    align-items: center;
    justify-content: center;
`

export function ProofSection() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <SectionHead>
                        <Kicker>
                            <CheckCircle size={15} weight="regular" />
                            Impacto real, sem promessa de número mágico
                        </Kicker>
                        <SectionTitle>O que muda na rotina do atendimento da sua escola</SectionTitle>
                        <SectionSub>
                            Sem depoimento fabricado — só o que o módulo WhatsApp resolve de fato no dia a dia da
                            secretaria e do comercial.
                        </SectionSub>
                    </SectionHead>
                </Reveal>
                <Grid>
                    <Reveal>
                        <Card>
                            <IconWrap>
                                <Lightning size={22} weight="regular" />
                            </IconWrap>
                            <h4>Resposta em segundos</h4>
                            <p>
                                Atendimento imediato 24/7, mesmo fora do horário comercial. O primeiro a responder é
                                quem ganha a matrícula.
                            </p>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card>
                            <IconWrap>
                                <Archive size={22} weight="regular" />
                            </IconWrap>
                            <h4>100% do histórico salvo</h4>
                            <p>
                                Cada conversa, visita e proposta fica registrada no funil — nada se perde quando um
                                consultor sai da equipe.
                            </p>
                        </Card>
                    </Reveal>
                    <Reveal>
                        <Card>
                            <IconWrap>
                                <BellRinging size={22} weight="regular" />
                            </IconWrap>
                            <h4>Zero lead sem follow-up</h4>
                            <p>
                                A régua de automação cobra o retorno sozinha e lembra o consultor de agir — nenhuma
                                família esfria por esquecimento.
                            </p>
                        </Card>
                    </Reveal>
                </Grid>
            </div>
        </Section>
    )
}
