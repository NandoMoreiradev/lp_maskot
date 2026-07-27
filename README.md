# Maskot LP — Módulo WhatsApp

Landing page de campanha (tráfego pago) para o Módulo WhatsApp do Maskot Edu. Projeto separado do site institucional (`maskot-website`) e do sistema (`maskotCrmEdu`), pensado para viver em `lp.maskotedu.com.br` e não ser indexada no Google (só tráfego pago).

Stack: Vite + React + TypeScript + styled-components + `phosphor-react` (mesmos ícones e fonte Inter usados no sistema Maskot).

## Rodando localmente

```bash
npm install
npm run dev
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Número do consultor que recebe o clique do CTA (já vem preenchido com o mesmo número usado no site institucional) |
| `VITE_GA_MEASUREMENT_ID` | GA4. Por padrão reaproveita a propriedade do site institucional (`G-9XNN6J8DYE`) para relatório unificado — troque se quiser uma propriedade exclusiva da LP |
| `VITE_GOOGLE_ADS_ID` | ID da conta do Google Ads (`AW-XXXXXXXXX`), criado em Google Ads → Conversões |
| `VITE_GOOGLE_ADS_CONVERSION_LABEL` | Label da ação de conversão específica, também em Google Ads → Conversões |
| `VITE_META_PIXEL_ID` | ID do Pixel criado no Meta Business Manager → Gerenciador de Eventos |

Sem `VITE_GOOGLE_ADS_ID`/`VITE_GOOGLE_ADS_CONVERSION_LABEL` ou `VITE_META_PIXEL_ID`, a página funciona normalmente — só não dispara aquele evento de conversão específico.

O clique em qualquer botão de WhatsApp dispara (nessa ordem): evento `generate_lead` no GA4, evento de conversão do Google Ads (se configurado) e evento `Lead` do Meta Pixel (se o usuário aceitou cookies) — só então abre o `wa.me` com a mensagem pré-preenchida. Se a URL tiver `utm_source`/`utm_campaign`, eles são anexados ao final da mensagem para o consultor já saber a origem do lead.

## Consentimento de cookies

Segue o mesmo padrão do site institucional (Google Consent Mode v2, negado por padrão até o usuário aceitar). O Meta Pixel só carrega depois que o usuário aceita — o GA4 registra em modo anônimo antes disso, como já ocorre no site institucional.

## Deploy (Render — subdomínio `lp.maskotedu.com.br`)

1. Suba este repositório pro GitHub e conecte no Render (ou rode `render.yaml` direto, já está configurado como Static Site).
2. Preencha as env vars no painel do Render (a build funciona sem elas — a página só sai sem tracking).
3. No provedor de DNS do domínio `maskotedu.com.br`, crie um registro `CNAME` apontando `lp` para o hostname `.onrender.com` que o Render fornecer para este serviço.
4. No Render, adicione `lp.maskotedu.com.br` como Custom Domain do serviço e aguarde a validação/SSL automático.

A página já sai com `robots.txt` bloqueando tudo e meta `noindex, nofollow` — é só para tráfego pago, não para SEO.

## Estrutura

- `src/components/` — uma seção da LP por arquivo (Hero, OfferBand, FeatureRail, ProofSection, PowerGrid, BonusSection, FinalCta, Footer, FloatingWhatsapp)
- `src/lib/whatsapp.ts` — monta a URL `wa.me` com UTM
- `src/lib/tracking.ts` / `src/lib/initTracking.ts` — GA4, Google Ads e Meta Pixel
- `src/styles/` — tokens de cor/tipografia (mesma paleta do sistema Maskot) e reset global
