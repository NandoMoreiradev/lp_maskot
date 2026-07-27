import styled from 'styled-components'
import { ShieldCheck } from 'phosphor-react'

const Bar = styled.footer`
    padding: 2.5rem 0;
    border-top: 1px solid var(--line);
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--slate-soft);
`

const Badge = styled.span`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    svg {
        color: var(--wa-dark);
    }
`

const Link = styled.a`
    text-decoration: underline;
    text-underline-offset: 2px;
`

export function Footer() {
    return (
        <Bar>
            <div className="wrap">
                <Inner>
                    <Badge>
                        <ShieldCheck size={16} weight="regular" />
                        Maskot Educação — CRM para captação de alunos
                    </Badge>
                    <Link href="https://www.maskotedu.com.br/legal/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
                        Política de Privacidade
                    </Link>
                </Inner>
            </div>
        </Bar>
    )
}
