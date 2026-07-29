import styled, { keyframes } from 'styled-components'
import { CheckCircle } from 'phosphor-react'

const pop = keyframes`
    from { opacity: 0; transform: translateY(6px); }
    to { opacity: 1; transform: translateY(0); }
`

const Wrap = styled.div`
    position: relative;
    max-width: 380px;
    margin: 0 auto;
`

const Frame = styled.div`
    background: var(--paper-raised);
    border-radius: 32px;
    box-shadow: var(--shadow-lg);
    border: 6px solid var(--ink);
    overflow: hidden;
    position: relative;
`

const Notch = styled.div`
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 18px;
    background: var(--ink);
    border-radius: 0 0 12px 12px;
    z-index: 3;
`

const StatusBar = styled.div`
    background: var(--wa-dark);
    height: 22px;
`

const Head = styled.div`
    background: var(--wa-dark);
    color: #fff;
    padding: 0.7rem 1.1rem 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.65rem;
`

const Avatar = styled.div`
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 800;
`

const HeadText = styled.div`
    .name {
        font-size: 0.88rem;
        font-weight: 700;
    }
    .status {
        font-size: 0.68rem;
        opacity: 0.85;
    }
`

const Body = styled.div`
    background: var(--wa-panel);
    background-image: radial-gradient(color-mix(in srgb, var(--ink) 4%, transparent) 1px, transparent 0);
    background-size: 14px 14px;
    padding: 1.1rem 0.9rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    min-height: 430px;
`

const Bubble = styled.div<{ $out?: boolean; $sys?: boolean; $delay: number }>`
    max-width: 82%;
    padding: 0.55rem 0.75rem;
    border-radius: 9px;
    font-size: 0.82rem;
    line-height: 1.42;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    position: relative;
    opacity: 0;
    animation: ${pop} 0.45s ease forwards;
    animation-delay: ${(p) => p.$delay}s;

    ${(p) =>
        p.$sys
            ? `
        align-self: center;
        background: color-mix(in srgb, var(--amber) 18%, var(--paper-raised));
        border: 1px dashed var(--amber);
        font-size: 0.7rem;
        color: var(--ink);
        text-align: center;
        max-width: 92%;
        display: flex;
        align-items: center;
        gap: 0.4rem;
        justify-content: center;
    `
            : p.$out
              ? `background: var(--wa-bubble-out); align-self: flex-end; border-top-right-radius: 2px;`
              : `background: var(--wa-bubble-in); align-self: flex-start; border-top-left-radius: 2px;`}

    @media (prefers-reduced-motion: reduce) {
        animation: none;
        opacity: 1;
    }
`

const Time = styled.span`
    display: block;
    margin-top: 0.25rem;
    font-size: 0.62rem;
    color: var(--slate-soft);
    text-align: right;
    font-family: var(--font-mono);
`

export function PhoneMockup() {
    return (
        <Wrap>
            <Frame>
                <Notch />
                <StatusBar />
                <Head>
                    <Avatar>MP</Avatar>
                    <HeadText>
                        <div className="name">Mãe do Pedro</div>
                        <div className="status">via Maskot · Colégio Exemplo</div>
                    </HeadText>
                </Head>
                <Body>
                    <Bubble $delay={0.2}>
                        Boa noite! O berçário funciona até que horas?
                        <Time>23:47</Time>
                    </Bubble>
                    <Bubble $out $delay={1.0}>
                        Olá! Nosso berçário funciona das 07h às 19h, período estendido incluso.
                        <Time>23:47</Time>
                    </Bubble>
                    <Bubble $delay={1.9}>
                        Posso visitar amanhã às 14h?
                        <Time>23:48</Time>
                    </Bubble>
                    <Bubble $out $delay={2.6}>
                        Deixa eu checar a agenda... Sim, temos horário! Já reservei sua visita para amanhã às 14h.
                        <Time>23:48</Time>
                    </Bubble>
                    <Bubble $sys $delay={3.5}>
                        <CheckCircle size={16} weight="regular" /> IA: visita agendada e lead atualizado no funil —
                        Secretaria notificada.
                    </Bubble>
                    <Bubble $delay={4.3}>
                        Perfeito, muito obrigada!
                        <Time>23:49</Time>
                    </Bubble>
                </Body>
            </Frame>
        </Wrap>
    )
}
