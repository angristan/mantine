(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{1002:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var n=(0,i(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},49454:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/alert",function(){return i(79506)}])},79506:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return I}});var n=i(24246),r=i(71670),o=i(27378),l=i(4675),a=i(31002),c=i(92082),s=i(83453),u=i(96739),d=i(6231),m=i(56589),p=i(20410),f=i(96217),b={root:"m-66836ed3","root--filled":"m-12b2e6d5","root--white":"m-cffd1856",wrapper:"m-a5d60502",body:"m-667c2793",title:"m-6a03f287",label:"m-698f4f23",icon:"m-667f2a6a",message:"m-7fa78076",closeButton:"m-87f54839"};let h={},y=(0,s.Z)((e,{radius:t,color:i,variant:n})=>{let r=e.variantColorResolver({color:i||e.primaryColor,theme:e,variant:n||"light"});return{root:{"--alert-radius":void 0===t?void 0:(0,c.H5)(t),"--alert-bg":i||n?r.background:void 0,"--alert-color":i||n?r.color:void 0,"--alert-bd":i||n?r.border:void 0}}}),v=(0,p.d)((e,t)=>{let i=(0,u.w)("Alert",h,e),{classNames:n,className:r,style:l,styles:c,unstyled:s,vars:p,radius:v,color:x,title:g,children:A,id:_,icon:E,withCloseButton:j,onClose:w,closeButtonLabel:V,variant:k,...C}=i,B=(0,d.y)({name:"Alert",classes:b,props:i,className:r,style:l,classNames:n,styles:c,unstyled:s,vars:p,varsResolver:y}),I=(0,a.M)(_),q=g&&`${I}-title`||void 0,N=`${I}-body`;return o.createElement(m.x,{id:I,...B("root",{variant:k}),variant:k,ref:t,...C,role:"alert","aria-describedby":N,"aria-labelledby":q},o.createElement("div",{...B("wrapper")},E&&o.createElement("div",{...B("icon")},E),o.createElement("div",{...B("body")},g&&o.createElement("div",{...B("title"),"data-with-close-button":j||void 0},o.createElement("span",{id:q,...B("label")},g)),A&&o.createElement("div",{id:N,...B("message")},A)),j&&o.createElement(f.P,{...B("closeButton"),onClick:w,variant:"transparent",size:16,iconSize:16,"aria-label":V,unstyled:s})))});v.classes=b,v.displayName="@mantine/core/Alert";var x=i(85411);let g=`
import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

function Demo() {
  const icon = <IconInfoCircle />;
  return (
    <Alert{{props}} icon={icon}>
      {{children}}
    </Alert>
  );
}
`,A={type:"configurator",component:function(e){return o.createElement(v,{icon:o.createElement(l.Z,null),...e})},code:g,centered:!0,maxWidth:400,controls:[{...x.d_,initialValue:"light"},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"withCloseButton",initialValue:!1,libraryValue:!1},{type:"string",prop:"title",initialValue:"Alert title",libraryValue:null},{type:"string",prop:"children",initialValue:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",libraryValue:null}]};var _=i(1002),E=i(30345);let j=`
import { Alert } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  const icon = <IconHeart />;

  return (
    <Alert title="Alert title" icon={icon} withCloseButton{{props}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis
      cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates
      nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.
    </Alert>
  );
}
`,w={type:"styles-api",data:E.g,component:function(e){return o.createElement(v,{title:"Alert title",icon:o.createElement(_.Z,null),withCloseButton:!0,...e},"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt corporis natus veniam quis cupiditate enim architecto mollitia numquam temporibus, consectetur nam laboriosam voluptates nemo facilis? Exercitationem aut praesentium quibusdam reiciendis.")},centered:!0,maxWidth:440,code:j};var V=i(3916),k=i(30289);let C=(0,V.A)(k.us.Alert);function B(e){let t={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:i,StylesApiSelectors:o}=t;return i||q("Demo",!0),o||q("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i,{data:A}),"\n",(0,n.jsx)(o,{component:"Alert"}),"\n",(0,n.jsx)(i,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Root element role set to ",(0,n.jsx)(t.code,{children:"alert"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aria-describedby"})," set to body element id, ",(0,n.jsx)(t.code,{children:"aria-labelledby"})," set to title element id if ",(0,n.jsx)(t.code,{children:"title"})," is provided"]}),"\n",(0,n.jsxs)(t.li,{children:["Set ",(0,n.jsx)(t.code,{children:"closeButtonLabel"})," prop to make close button accessible"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { Alert } from '@mantine/core';\n\nfunction Invalid() {\n  // -> not ok\n  return <Alert withCloseButton />;\n}\n\nfunction Valid() {\n  // -> ok\n  return <Alert withCloseButton closeButtonLabel=\"Dismiss\" />;\n}\n\nfunction AlsoValid() {\n  // -> ok, without close button, closeButtonLabel is not needed\n  return <Alert />;\n}\n"})})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(C,{...e,children:(0,n.jsx)(B,{...e})})}function q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85411:function(e,t,i){"use strict";i.d(t,{cH:function(){return n},d_:function(){return r}});let n={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=49454)}),_N_E=e.O()}]);