"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1457],{74360:function(e,t,n){n.d(t,{_:function(){return r}});var a=n(27378),i=n(26569),o=n(78060);let l=`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,r={type:"code",code:l,component:function(){return a.createElement(a.Fragment,null,a.createElement(i.x,{mb:"xs"},"1 boundary (default)"),a.createElement(o.t,{total:20,boundaries:1,defaultValue:10}),a.createElement(i.x,{mt:"xl",mb:"xs"},"2 boundaries"),a.createElement(o.t,{total:20,boundaries:2,defaultValue:10}),a.createElement(i.x,{mt:"xl",mb:"xs"},"3 boundaries"),a.createElement(o.t,{total:20,boundaries:3,defaultValue:10}))}}},33585:function(e,t,n){n.d(t,{d:function(){return r}});var a=n(27378),i=n(26569),o=n(78060);let l=`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,r={type:"code",code:l,component:function(){return a.createElement(a.Fragment,null,a.createElement(i.x,{mb:"xs"},"1 sibling (default)"),a.createElement(o.t,{total:20,siblings:1,defaultValue:10}),a.createElement(i.x,{mb:"xs",mt:"xl"},"2 siblings"),a.createElement(o.t,{total:20,siblings:2,defaultValue:10}),a.createElement(i.x,{mb:"xs",mt:"xl"},"3 siblings"),a.createElement(o.t,{total:20,siblings:3,defaultValue:10}))}}},78060:function(e,t,n){n.d(t,{t:function(){return I}});var a=n(27378),i=n(96739),o=n(20410),l=n(22971),r=n(19397),s=n(71656);let[c,u]=(0,s.R)("Pagination.Root component was not found in tree");var m={root:"m-4addd315",control:"m-326d024a",dots:"m-4ad7767d"};let d={withPadding:!0},g=(0,o.d)((e,t)=>{let n=(0,i.w)("PaginationControl",d,e),{classNames:o,className:l,style:s,styles:c,vars:m,active:g,disabled:x,withPadding:b,...p}=n,f=u(),v=x||f.disabled;return a.createElement(r.k,{ref:t,disabled:v,mod:{active:g,disabled:v,"with-padding":b},...f.getStyles("control",{className:l,style:s,classNames:o,styles:c,active:!v}),...p})});g.classes=m,g.displayName="@mantine/core/PaginationControl";var x=n(56589);function b({style:e,children:t,path:n,...i}){return a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...e},...i},a.createElement("path",{d:n,fill:"currentColor"}))}let p={icon:e=>a.createElement(b,{...e,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})},f=(0,o.d)((e,t)=>{let n=(0,i.w)("PaginationDots",p,e),{classNames:o,className:l,style:r,styles:s,vars:c,icon:m,...d}=n,g=u();return a.createElement(x.x,{ref:t,...g.getStyles("dots",{className:l,style:r,styles:s,classNames:o}),...d},a.createElement(m,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});f.classes=m,f.displayName="@mantine/core/PaginationDots";var v=n(31788);function E({icon:e,name:t,action:n,type:o}){let l={icon:e},r=(0,a.forwardRef)((e,r)=>{let{icon:s,...c}=(0,i.w)(t,l,e),m=u(),d="next"===o?m.active===m.total:1===m.active;return a.createElement(g,{disabled:m.disabled||d,ref:r,onClick:m[n],withPadding:!1,...c},a.createElement(s,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});return r.displayName=`@mantine/core/${t}`,(0,v.F)(r)}let C=E({icon:e=>a.createElement(b,{...e,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),name:"PaginationNext",action:"onNext",type:"next"}),P=E({icon:e=>a.createElement(b,{...e,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),name:"PaginationPrevious",action:"onPrevious",type:"previous"}),h=E({icon:e=>a.createElement(b,{...e,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),name:"PaginationFirst",action:"onFirst",type:"previous"}),y=E({icon:e=>a.createElement(b,{...e,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),name:"PaginationLast",action:"onLast",type:"next"});function L({dotsIcon:e}){let t=u(),n=t.range.map((n,i)=>"dots"===n?a.createElement(f,{icon:e,key:i}):a.createElement(g,{key:i,active:n===t.active,"aria-current":n===t.active?"page":void 0,onClick:()=>t.onChange(n),disabled:t.disabled,...t.getItemProps?.(n)},n));return a.createElement(a.Fragment,null,n)}L.displayName="@mantine/core/PaginationItems";var w=n(58675);function z(e,t){return Array.from({length:t-e+1},(t,n)=>n+e)}let T="dots";var V=n(92082),M=n(41664),N=n(83453),k=n(89738),F=n(6231);let R={siblings:1,boundaries:1},Z=(0,N.Z)((e,{size:t,radius:n,color:a})=>({root:{"--pagination-control-radius":void 0===n?void 0:(0,V.H5)(n),"--pagination-control-size":(0,V.ap)(t,"pagination-control-size"),"--pagination-control-fz":(0,V.yv)(t),"--pagination-active-bg":a?(0,k.p)(a,e):void 0}})),D=(0,o.d)((e,t)=>{let n=(0,i.w)("PaginationRoot",R,e),{classNames:o,className:l,style:r,styles:s,unstyled:u,vars:d,total:g,value:b,defaultValue:p,onChange:f,disabled:v,siblings:E,boundaries:C,color:P,radius:h,onNextPage:y,onPreviousPage:L,onFirstPage:V,onLastPage:N,getItemProps:k,...D}=n,_=(0,F.y)({name:"Pagination",classes:m,props:n,className:l,style:r,classNames:o,styles:s,unstyled:u,vars:d,varsResolver:Z}),{range:I,setPage:S,next:A,previous:B,active:H,first:$,last:j}=function({total:e,siblings:t=1,boundaries:n=1,page:i,initialPage:o=1,onChange:l}){let r=Math.max(Math.trunc(e),0),[s,c]=(0,w.C)({value:i,onChange:l,defaultValue:o,finalValue:o}),u=e=>{e<=0?c(1):e>r?c(r):c(e)},m=(0,a.useMemo)(()=>{let e=2*t+3+2*n;if(e>=r)return z(1,r);let a=Math.max(s-t,n),i=Math.min(s+t,r-n),o=a>n+2,l=i<r-(n+1);if(!o&&l){let e=2*t+n+2;return[...z(1,e),T,...z(r-(n-1),r)]}if(o&&!l){let e=n+1+2*t;return[...z(1,n),T,...z(r-e,r)]}return[...z(1,n),T,...z(a,i),T,...z(r-n+1,r)]},[r,t,s]);return{range:m,active:s,setPage:u,next:()=>u(s+1),previous:()=>u(s-1),first:()=>u(1),last:()=>u(r)}}({page:b,initialPage:p,onChange:f,total:g,siblings:E,boundaries:C}),q=(0,M.x)(y,A),G=(0,M.x)(L,B),J=(0,M.x)(V,$),K=(0,M.x)(N,j);return a.createElement(c,{value:{total:g,range:I,active:H,disabled:v,getItemProps:k,onChange:S,onNext:q,onPrevious:G,onFirst:J,onLast:K,getStyles:_}},a.createElement(x.x,{ref:t,..._("root"),...D}))});D.classes=m,D.displayName="@mantine/core/PaginationRoot";let _={withControls:!0,siblings:1,boundaries:1,gap:8},I=(0,o.d)((e,t)=>{let n=(0,i.w)("Pagination",_,e),{withEdges:o,withControls:r,getControlProps:s,nextIcon:c,previousIcon:u,lastIcon:m,firstIcon:d,dotsIcon:g,total:x,gap:b,...p}=n;return x<=0?null:a.createElement(D,{ref:t,total:x,...p},a.createElement(l.Z,{gap:b},o&&a.createElement(h,{icon:d,...s?.("first")}),r&&a.createElement(P,{icon:u,...s?.("previous")}),a.createElement(L,{dotsIcon:g}),r&&a.createElement(C,{icon:c,...s?.("next")}),o&&a.createElement(y,{icon:m,...s?.("last")})))});I.classes=m,I.displayName="@mantine/core/Pagination",I.Root=D,I.Control=g,I.Dots=f,I.First=h,I.Last=y,I.Next=C,I.Previous=P,I.Items=L}}]);