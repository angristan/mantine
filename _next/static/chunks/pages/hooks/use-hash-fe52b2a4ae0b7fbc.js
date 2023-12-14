(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{71478:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-hash",function(){return t(13987)}])},13987:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var s=t(24246),o=t(71670),i=t(27378),a=t(22971),h=t(8671),Text=t(26569),r=t(94998),c=t(56617),l=t(55574);let u=`
import { useHash, randomId } from '@mantine/hooks';
import { Button, Text, Code } from '@mantine/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`,d={type:"code",code:u,component:function(){let[e,n]=function({getInitialValueInEffect:e=!0}={}){let[n,t]=(0,i.useState)(e?"":window.location.hash||"");return(0,c.s)("hashchange",()=>{let e=window.location.hash;n!==e&&t(n)}),(0,i.useEffect)(()=>{e&&t(window.location.hash)},[]),[n,e=>{let n=e.startsWith("#")?e:`#${e}`;window.location.hash=n,t(n)}]}();return i.createElement(i.Fragment,null,i.createElement(a.Z,{justify:"center"},i.createElement(h.z,{onClick:()=>n((0,l.k)())},"Set hash to random string")),i.createElement(Text.x,{ta:"center",mt:"md"},"Current hash: ",i.createElement(r.E,null,e)))}};var f=t(3916),m=t(30289);let p=(0,f.A)(m.us.useHash);function g(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-hash"})," returns hash from URL, subscribes to its changes with ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event",children:"hashchange event"}),"\nand allows changing it with ",(0,s.jsx)(n.code,{children:"setHash"})," function:"]}),"\n",(0,s.jsx)(t,{data:d}),"\n",(0,s.jsx)(n.h2,{id:"initial-state-value",children:"Initial state value"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.code,{children:"use-hash"})," will retrieve value in ",(0,s.jsx)(n.code,{children:"useEffect"}),". If you want to get initial value\nas soon as hook is called, set ",(0,s.jsx)(n.code,{children:"getInitialValueInEffect"})," to ",(0,s.jsx)(n.code,{children:"false"}),". Note that this option is\nnot compatible with server side rendering – you can only use it if your app is client-side only."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useHash } from '@mantine/hooks';\n\nfunction Demo() {\n  const [hash, setHash] = useHash({ getInitialValueInEffect: false });\n  return (\n    <Button onClick={() => setHash('new-hash')}>Change hash</Button>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"function useHash(options: {\n  getInitialValueInEffect?: boolean;\n}): readonly [string, (value: string) => void];\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(p,{...e,children:(0,s.jsx)(g,{...e})})}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=71478)}),_N_E=e.O()}]);