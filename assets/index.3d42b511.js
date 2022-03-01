import{j as d,r as a,s as u,W as h,R as p,a as g}from"./vendor.113ef8a1.js";const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=s(r);fetch(r.href,i)}};x();const e=d.exports.jsx,l=d.exports.jsxs,f=d.exports.Fragment,m=a.exports.createContext({}),y=()=>a.exports.useContext(m),b=({children:o})=>{const[t,s]=a.exports.useState(""),n=r=>{s(r)};return e(m.Provider,{value:{permission:t,handlePermission:n},children:o})},v=u.input`
        background-color: #333;
        border: none;
        border-radius: 16px;
        text-decoration: none;
        text-align: center;
        font-size: 48px;
        font-family: 'Cascadia Code';
        outline: 0px;
        width: 100%;
        padding: 0;
        letter-spacing: 10px;
        margin-bottom: 1rem;
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        -moz-appearance: textfield;
    `,P=()=>{const{permission:o,handlePermission:t}=a.exports.useContext(m);return e("div",{children:e(v,{type:"number",name:"octal",id:"octal",min:0,maxLength:3,onChange:async n=>{n.target.value.length<=3&&t(n.target.value),n.target.value=n.target.value.substr(0,3)}})})},A=u.table`
    width: auto;
    thead {
        border-bottom: 1px #e8e6e3 solid;
    }
    td th {
        margin: 0px 40px;
        
    }
`,S=()=>{const{permission:o}=y();let t=[];t["0"]="Nenhuma Permiss\xE3o",t["1"]="Somente executar",t["2"]="Somente gravar",t["3"]="Escrever e executar",t["4"]="Somente ler",t["5"]="Ler e Executar",t["6"]="Ler e gravar",t["7"]="Permiss\xE3o total",t["8"]="Invalido",t["9"]="Invalido";const s=n=>t[n];return e("div",{children:e(A,{children:l("thead",{children:[l("tr",{children:[e("th",{style:{textAlign:"right"},children:o[0]}),e("th",{style:{textAlign:"center"},children:"Propriet\xE1rio"}),e("td",{style:{textAlign:"right"},children:s(o[0])})]}),l("tr",{children:[e("th",{style:{textAlign:"right"},children:o[1]}),e("th",{style:{textAlign:"center"},children:"Grupo"}),e("td",{style:{textAlign:"right"},children:s(o[1])})]}),l("tr",{children:[e("th",{style:{textAlign:"right"},children:o[2]}),e("th",{style:{textAlign:"center"},children:"Outros"}),e("td",{style:{textAlign:"right"},children:s(o[2])})]})]})})})},C=h`
    /* html,
    html::before,
    html::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } */
    body {
        background-color: #1a1a1a;
        color: #e8e6e3;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
    }
    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
`,E=u.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    padding: .25rem;
`;function I(){return l(f,{children:[e(C,{}),e(b,{children:l(E,{children:[e("h1",{children:"Chmod Guru!!!"}),e("p",{children:"Um simples utilit\xE1rio para saber qual \xE9 permiss\xE3o do Linux!!!"}),e(P,{}),e(S,{})]})})]})}p.render(e(g.StrictMode,{children:e(I,{})}),document.getElementById("root"));
