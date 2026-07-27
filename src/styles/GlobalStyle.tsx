import { createGlobalStyle } from 'styled-components'
import { cssVariables } from './tokens'

export const GlobalStyle = createGlobalStyle`
  ${cssVariables}

  *{box-sizing:border-box;}

  html{scroll-behavior:smooth;}
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
  }

  body{
    margin:0;
    background:var(--paper);
    color:var(--ink);
    font-family:var(--font-main);
    line-height:1.5;
    -webkit-font-smoothing:antialiased;
    text-rendering:optimizeLegibility;
  }

  h1,h2,h3{
    text-wrap:balance;
    margin:0;
    font-family:var(--font-main);
  }

  p{margin:0;}
  img,svg{display:block;}
  a{color:inherit;}
  button{font-family:var(--font-main);}

  :focus-visible{outline:2px solid var(--blue);outline-offset:2px;}

  .wrap{max-width:1180px;margin:0 auto;padding:0 1.75rem;}

  section.block{padding:5.5rem 0;}
`
