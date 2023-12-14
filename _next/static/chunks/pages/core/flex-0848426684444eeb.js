(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8902],{15379:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/flex",function(){return r(70675)}])},70675:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(24246),l=r(71670);let a={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var o=r(27378),s=r(86689),i=r(2256),p=r(96739),c=r(6231),u=r(9889),d=r(81073),m=r(40593),x=r(56589),f=r(50332),h={root:"m-8bffd616"};let y={},b=(0,f.b)((e,t)=>{let r=(0,p.w)("Flex",y,e),{classNames:n,className:l,style:f,styles:b,unstyled:g,vars:v,gap:j,rowGap:w,columnGap:B,align:E,justify:k,wrap:F,direction:S,..._}=r,z=(0,c.y)({name:"Flex",classes:h,props:r,className:l,style:f,classNames:n,styles:b,unstyled:g,vars:v}),G=(0,i.rZ)(),N=(0,m.m)(),V=(0,d.n)({styleProps:{gap:j,rowGap:w,columnGap:B,align:E,justify:k,wrap:F,direction:S},theme:G,data:a});return o.createElement(o.Fragment,null,V.hasResponsiveStyles&&o.createElement(u.f,{selector:`.${N}`,styles:V.styles,media:V.media}),o.createElement(x.x,{ref:t,...z("root",{className:N,style:(0,s.L)(V.inlineStyles)}),..._}))});b.classes=h,b.displayName="@mantine/core/Flex";var g=r(8671);let v=`
import { Flex, Button } from '@mantine/core';


function Demo() {
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      {{props}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`,j={type:"configurator",component:function(e){return o.createElement(b,{mih:50,bg:"rgba(0, 0, 0, .3)",...e},o.createElement(g.z,null,"Button 1"),o.createElement(g.z,null,"Button 2"),o.createElement(g.z,null,"Button 3"))},code:v,controls:[{prop:"gap",type:"size",initialValue:"md",libraryValue:null},{prop:"justify",type:"select",data:[{value:"flex-start",label:"flex-start"},{value:"center",label:"center"},{value:"flex-end",label:"flex-end"}],initialValue:"flex-start",libraryValue:null},{prop:"align",type:"select",data:[{value:"flex-start",label:"flex-start"},{value:"center",label:"center"},{value:"flex-end",label:"flex-end"}],initialValue:"flex-start",libraryValue:null},{prop:"direction",type:"select",data:[{value:"row",label:"row"},{value:"column",label:"column"},{value:"row-reverse",label:"row-reverse"},{value:"column-reverse",label:"column-reverse"}],initialValue:"row",libraryValue:null},{prop:"wrap",type:"select",data:[{value:"wrap",label:"wrap"},{value:"nowrap",label:"nowrap"},{value:"wrap-reverse",label:"wrap-reverse"}],initialValue:"wrap",libraryValue:null}]},w=`
import { Flex, Button } from '@mantine/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`,B={type:"code",component:function(){return o.createElement(b,{direction:{base:"column",sm:"row"},gap:{base:"sm",sm:"lg"},justify:{sm:"center"}},o.createElement(g.z,null,"Button 1"),o.createElement(g.z,null,"Button 2"),o.createElement(g.z,null,"Button 3"))},code:w};var E=r(40957),k=r(3916),F=r(30289);let S=(0,k.A)(F.us.Flex);function _(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,l.a)(),...e.components},{DataTable:r,Demo:o,FlexboxGapSupport:s}=t;return r||G("DataTable",!0),o||G("Demo",!0),s||G("FlexboxGapSupport",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(t.h2,{id:"supported-props",children:"Supported props"}),"\n",(0,n.jsx)(E.T,{source:a}),"\n",(0,n.jsx)(t.h2,{id:"responsive-props",children:"Responsive props"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Flex"})," component props can have responsive values the same way as other ",(0,n.jsx)(t.a,{href:"/styles/style-props/",children:"style props"}),":"]}),"\n",(0,n.jsx)(o,{data:B}),"\n",(0,n.jsx)(t.h2,{id:"difference-from-group-and-stack",children:"Difference from Group and Stack"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Flex"})," component is an alternative to ",(0,n.jsx)(t.a,{href:"/core/group/",children:"Group"})," and ",(0,n.jsx)(t.a,{href:"/core/stack/",children:"Stack"}),".\n",(0,n.jsx)(t.code,{children:"Flex"})," is more flexible, it allows creating both horizontal and vertical flexbox layouts, but requires more configuration.\nUnlike ",(0,n.jsx)(t.a,{href:"/core/group/",children:"Group"})," and ",(0,n.jsx)(t.a,{href:"/core/stack/",children:"Stack"})," ",(0,n.jsx)(t.code,{children:"Flex"})," is ",(0,n.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic"})," and supports responsive props."]}),"\n",(0,n.jsx)(r,{head:["","Group","Stack","Flex"],data:[["Direction","horizontal","vertical","both"],["Equal width children","✅","❌","❌"],["flex-wrap support","✅","❌","✅"],["Responsive flexbox props","❌","❌","✅"],["Polymorphic component","❌","❌","✅"]]}),"\n",(0,n.jsx)(s,{component:"Flex"})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(S,{...e,children:(0,n.jsx)(_,{...e})})}function G(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40957:function(e,t,r){"use strict";r.d(t,{T:function(){return p}});var n=r(24246);r(27378);var l=r(22897),a=r(94998),o=r(24422),s=r(37430);let i={color:"theme.colors",fontSize:"theme.fontSizes",spacing:"theme.spacing",lineHeight:"theme.lineHeights"};function p(e){let{source:t=l.p}=e,r=Object.keys(t).map(e=>{let r=t[e],l=i[r.type];return[(0,n.jsx)(a.E,{children:e},"1"),(0,n.jsx)(o.O,{separator:",",styles:{separator:{marginLeft:2,marginRight:2}},children:Array.isArray(r.property)?r.property.map(e=>(0,n.jsx)(a.E,{children:e},e)):(0,n.jsx)(a.E,{children:r.property})}),l?(0,n.jsx)(a.E,{children:l}):"–"]});return(0,n.jsx)(s.gw,{head:["Prop","CSS Property","Theme key"],data:r})}},24422:function(e,t,r){"use strict";r.d(t,{O:function(){return x}});var n=r(27378),l=r(513),a=r(92082),o=r(83453),s=r(96739),i=r(6231),p=r(56589),c=r(20410),u={root:"m-8b3717df",breadcrumb:"m-f678d540",separator:"m-3b8f2208"};let d={separator:"/"},m=(0,o.Z)((e,{separatorMargin:t})=>({root:{"--bc-separator-margin":(0,a.bG)(t)}})),x=(0,c.d)((e,t)=>{let r=(0,s.w)("Breadcrumbs",d,e),{classNames:a,className:o,style:c,styles:x,unstyled:f,vars:h,children:y,separator:b,separatorMargin:g,...v}=r,j=(0,i.y)({name:"Breadcrumbs",classes:u,props:r,className:o,style:c,classNames:a,styles:x,unstyled:f,vars:h,varsResolver:m}),w=n.Children.toArray(y).reduce((e,t,r,a)=>{let o=(0,l.k)(t)?n.cloneElement(t,{...j("breadcrumb",{className:t.props?.className}),key:r}):n.createElement("div",{...j("breadcrumb"),key:r},t);return e.push(o),r!==a.length-1&&e.push(n.createElement(p.x,{...j("separator"),key:`separator-${r}`},b)),e},[]);return n.createElement(p.x,{ref:t,...j("root"),...v},w)});x.classes=u,x.displayName="@mantine/core/Breadcrumbs"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=15379)}),_N_E=e.O()}]);