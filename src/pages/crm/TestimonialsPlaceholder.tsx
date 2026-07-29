import styled from 'styled-components'
import { Star } from 'phosphor-react'
import { Reveal } from '../../components/Reveal'
import { SectionHead, Kicker, SectionTitle, SectionSub } from '../../components/shared'

const Section = styled.section`
    padding: 5.5rem 0;
    padding-top: 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 2.75rem;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    position: relative;
    background: var(--paper-raised);
    border: 2px dashed color-mix(in srgb, var(--amber) 55%, var(--line));
    border-radius: 16px;
    padding: 1.75rem 1.5rem;
`

const Flag = styled.span`
    position: absolute;
    top: -11px;
    left: 1.25rem;
    background: var(--amber);
    color: #fff;
    font-size: 0.62rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.2rem 0.6rem;
    border-radius: 100px;
`

const Stars = styled.div`
    display: flex;
    gap: 2px;
    color: var(--amber);
    margin-bottom: 0.9rem;
`

const Quote = styled.p`
    font-size: 0.92rem;
    line-height: 1.6;
    color: var(--slate);
    font-style: italic;
    margin-bottom: 1.2rem;
`

const Author = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7rem;

    .name {
        font-size: 0.85rem;
        font-weight: 800;
    }
    .role {
        font-size: 0.76rem;
        color: var(--slate-soft);
    }
`

const Avatar = styled.div`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--chip-bg);
    color: var(--blue-dark);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 800;
    flex-shrink: 0;
`

interface PlaceholderTestimonial {
    quote: string
    role: string
}

const TESTIMONIALS: PlaceholderTestimonial[] = [
    {
        quote: '[Depoimento de exemplo — troque por uma frase real sobre o resultado que a escola teve com o Maskot.]',
        role: '[Cargo] • [Nome da Escola]',
    },
    {
        quote: '[Depoimento de exemplo — troque por uma frase real sobre atendimento ou captação.]',
        role: '[Cargo] • [Nome da Escola]',
    },
    {
        quote: '[Depoimento de exemplo — troque por uma frase real sobre facilidade de uso ou suporte.]',
        role: '[Cargo] • [Nome da Escola]',
    },
]

/**
 * ATENÇÃO: cards de placeholder. NÃO publicar em produção sem substituir
 * por depoimentos reais — texto entre colchetes é só pra visualizar o layout.
 */
export function TestimonialsPlaceholder() {
    return (
        <Section>
            <div className="wrap">
                <Reveal>
                    <SectionHead>
                        <Kicker>
                            <Star size={15} weight="regular" />
                            Depoimentos
                        </Kicker>
                        <SectionTitle>O que escolas dizem sobre o Maskot</SectionTitle>
                        <SectionSub>
                            ⚠️ Placeholder — os 3 cards abaixo são texto de exemplo. Substitua por depoimentos reais
                            de clientes antes de publicar; não deixe esse conteúdo fictício no ar.
                        </SectionSub>
                    </SectionHead>
                </Reveal>
                <Grid>
                    {TESTIMONIALS.map((t, i) => (
                        <Reveal key={i}>
                            <Card>
                                <Flag>Exemplo — substituir</Flag>
                                <Stars>
                                    {Array.from({ length: 5 }).map((_, s) => (
                                        <Star key={s} size={14} weight="regular" />
                                    ))}
                                </Stars>
                                <Quote>"{t.quote}"</Quote>
                                <Author>
                                    <Avatar>XX</Avatar>
                                    <div>
                                        <div className="name">[Nome do Responsável]</div>
                                        <div className="role">{t.role}</div>
                                    </div>
                                </Author>
                            </Card>
                        </Reveal>
                    ))}
                </Grid>
            </div>
        </Section>
    )
}
