(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84242],{93892:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/grid",function(){return r(41728)}])},41728:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return b}});var o=r(52322),i=r(45392),s=r(69659),d=r(15749);let t={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:4,children:"1"}),(0,o.jsx)(d.Y,{span:4,children:"2"}),(0,o.jsx)(d.Y,{span:4,children:"3"})]})}};var l=r(17234);let c={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{gutter:{base:5,xs:"md",md:"xl",xl:50},children:[(0,o.jsx)(d.Y,{span:4,children:"1"}),(0,o.jsx)(d.Y,{span:4,children:"2"}),(0,o.jsx)(d.Y,{span:4,children:"3"})]})}},a={type:"configurator",component:function(e){return(0,o.jsxs)(s.r,{...e,children:[(0,o.jsx)(d.Y,{span:4,children:"1"}),(0,o.jsx)(d.Y,{span:4,children:"2"}),(0,o.jsx)(d.Y,{span:4,children:"3"}),(0,o.jsx)(d.Y,{span:4,children:"4"}),(0,o.jsx)(d.Y,{span:4,children:"5"})]})},code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
      <Grid.Col span={4}>5</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"grow",type:"boolean",initialValue:!0,libraryValue:!1},{prop:"gutter",type:"size",initialValue:"md",libraryValue:"md"}]},h={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3}>1</Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
      <Grid.Col span={3} offset={3}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:3,children:"1"}),(0,o.jsx)(d.Y,{span:3,children:"2"}),(0,o.jsx)(d.Y,{span:3,offset:3,children:"3"})]})}},p={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={3} order={{ base: 2, sm: 1, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={3} order={{ base: 3, sm: 2, lg: 2 }}>3</Grid.Col>
      <Grid.Col span={3} order={{ base: 1, sm: 3, lg: 1 }}>1</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:3,order:{base:2,sm:1,lg:3},children:"2"}),(0,o.jsx)(d.Y,{span:3,order:{base:3,sm:2,lg:2},children:"3"}),(0,o.jsx)(d.Y,{span:3,order:{base:1,sm:3,lg:1},children:"1"})]})}},u={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:4,children:"1"}),(0,o.jsx)(d.Y,{span:4,children:"2"}),(0,o.jsx)(d.Y,{span:4,children:"3"}),(0,o.jsx)(d.Y,{span:4,children:"4"})]})}};var x=r(58898);let m={type:"configurator",component:function(e){return(0,o.jsxs)(s.r,{...e,id:"grid-configurator",children:[(0,o.jsx)(d.Y,{span:3,style:{minHeight:(0,x.h)(80)},children:"1"}),(0,o.jsx)(d.Y,{span:3,style:{minHeight:(0,x.h)(120)},children:"2"}),(0,o.jsx)(d.Y,{span:3,children:"3"})]})},code:`
import { Grid, rem } from '@mantine/core';

function Demo() {
  return (
    <Grid{{props}}>
      <Grid.Col span={3} style={{ minHeight: rem(80) }}>1</Grid.Col>
      <Grid.Col span={3} style={{ minHeight: rem(120) }}>2</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid>
  );
}
`,controls:[{prop:"justify",type:"select",initialValue:"flex-start",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"space-between",value:"space-between"},{label:"space-around",value:"space-around"}]},{prop:"align",type:"select",initialValue:"stretch",libraryValue:"__",data:[{label:"flex-start",value:"flex-start"},{label:"flex-end",value:"flex-end"},{label:"center",value:"center"},{label:"stretch",value:"stretch"}]}]},j={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="auto">1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span="auto">3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:"auto",children:"1"}),(0,o.jsx)(d.Y,{span:6,children:"2"}),(0,o.jsx)(d.Y,{span:"auto",children:"3"})]})}},f={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span="content">fit content</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{children:[(0,o.jsx)(d.Y,{span:"content",children:"fit content"}),(0,o.jsx)(d.Y,{span:6,children:"2"})]})}},G={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid columns={24}>
      <Grid.Col span={12}>1</Grid.Col>
      <Grid.Col span={6}>2</Grid.Col>
      <Grid.Col span={6}>3</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(s.r,{columns:24,children:[(0,o.jsx)(d.Y,{span:12,children:"1"}),(0,o.jsx)(d.Y,{span:6,children:"2"}),(0,o.jsx)(d.Y,{span:6,children:"3"})]})}};var g=r(25071),w=r(15019);let C=(0,g.A)(w.us.Grid);function y(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:t}),"\n",(0,o.jsx)(n.h2,{id:"columns-span",children:"Columns span"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Grid.Col"})," ",(0,o.jsx)(n.code,{children:"span"})," prop controls the ratio of column width to the total width of the row.\nBy default, grid uses 12 columns layout, so ",(0,o.jsx)(n.code,{children:"span"})," prop can be any number from 1 to 12."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={3} />"})," – 3 / 12 = 25% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={4} />"})," – 4 / 12 = 33% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={6} />"})," – 6 / 12 = 50% of row width"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<Grid.Col span={12} />"})," – 12 / 12 = 100% of row width"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"span"})," prop also supports object syntax to change column width based on viewport width,\nit accepts ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12. The syntax\nis the same as in ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In the following example ",(0,o.jsx)(n.code,{children:"span={{ base: 12, md: 6, lg: 3 }}"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"base"})," – 12 / 12 = 100% of row width when viewport width is less than ",(0,o.jsx)(n.code,{children:"md"})," breakpoint"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"md"})," – 6 / 12 = 50% of row width when viewport width is between ",(0,o.jsx)(n.code,{children:"md"})," and ",(0,o.jsx)(n.code,{children:"lg"})," breakpoints"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"lg"})," – 3 / 12 = 25% of row width when viewport width is greater than ",(0,o.jsx)(n.code,{children:"lg"})," breakpoint"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:l.j}),"\n",(0,o.jsx)(n.h2,{id:"gutter",children:"Gutter"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"gutter"})," prop to control spacing between columns. The prop works the same\nway as ",(0,o.jsx)(n.a,{href:"/styles/style-props",children:"style props"})," – you can reference ",(0,o.jsx)(n.code,{children:"theme.spacing"})," values\nwith ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," strings and use object syntax to change gutter\nbased on viewport width:"]}),"\n",(0,o.jsx)(r,{data:c}),"\n",(0,o.jsx)(n.h2,{id:"grow",children:"Grow"}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"grow"})," prop is set, column will grow to fill the remaining space in the row:"]}),"\n",(0,o.jsx)(r,{data:a}),"\n",(0,o.jsx)(n.h2,{id:"column-offset",children:"Column offset"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"offset"})," prop on ",(0,o.jsx)(n.code,{children:"Grid.Col"})," component to add gaps to the grid. ",(0,o.jsx)(n.code,{children:"offset"})," prop\nsupports the same syntax as ",(0,o.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,o.jsx)(r,{data:h}),"\n",(0,o.jsx)(n.h2,{id:"order",children:"Order"}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"order"})," prop on ",(0,o.jsx)(n.code,{children:"Grid.Col"})," component to change the order of columns. ",(0,o.jsx)(n.code,{children:"order"})," prop\nsupports the same syntax as ",(0,o.jsx)(n.code,{children:"span"})," prop: a number from 1 to 12 or an object with ",(0,o.jsx)(n.code,{children:"xs"}),", ",(0,o.jsx)(n.code,{children:"sm"}),", ",(0,o.jsx)(n.code,{children:"md"}),", ",(0,o.jsx)(n.code,{children:"lg"})," and ",(0,o.jsx)(n.code,{children:"xl"})," keys and values from 1 to 12."]}),"\n",(0,o.jsx)(r,{data:p}),"\n",(0,o.jsx)(n.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,o.jsxs)(n.p,{children:["Once columns ",(0,o.jsx)(n.code,{children:"span"})," and ",(0,o.jsx)(n.code,{children:"offset"})," sum exceeds ",(0,o.jsx)(n.code,{children:"columns"})," prop (12 by default),\ncolumns are moved to the next row:"]}),"\n",(0,o.jsx)(r,{data:u}),"\n",(0,o.jsx)(n.h2,{id:"justify-and-align",children:"Justify and align"}),"\n",(0,o.jsxs)(n.p,{children:["You can control ",(0,o.jsx)(n.code,{children:"justify-content"})," and ",(0,o.jsx)(n.code,{children:"align-items"})," CSS properties with ",(0,o.jsx)(n.code,{children:"justify"})," and ",(0,o.jsx)(n.code,{children:"align"})," props on ",(0,o.jsx)(n.code,{children:"Grid"})," component:"]}),"\n",(0,o.jsx)(r,{data:m}),"\n",(0,o.jsx)(n.h2,{id:"auto-sized-columns",children:"Auto sized columns"}),"\n",(0,o.jsxs)(n.p,{children:["All columns in a row with ",(0,o.jsx)(n.code,{children:'span="auto"'})," grow as much as they can to fill the row.\nIn the following example, the second column takes up 50% of the row while the other two columns automatically resize to fill the remaining space:"]}),"\n",(0,o.jsx)(r,{data:j}),"\n",(0,o.jsx)(n.h2,{id:"fit-column-content",children:"Fit column content"}),"\n",(0,o.jsxs)(n.p,{children:["If you set ",(0,o.jsx)(n.code,{children:'span="content"'}),", the column's size will automatically adjust to match the width of its content:"]}),"\n",(0,o.jsx)(r,{data:f}),"\n",(0,o.jsx)(n.h2,{id:"change-columns-count",children:"Change columns count"}),"\n",(0,o.jsxs)(n.p,{children:["By default, grid uses 12 columns layout, you can change it by setting ",(0,o.jsx)(n.code,{children:"columns"})," prop on ",(0,o.jsx)(n.code,{children:"Grid"})," component.\nNote that in this case, columns span and offset will be calculated relative to this value."]}),"\n",(0,o.jsx)(n.p,{children:"In the following example, first column takes 50% with 12 span (12/24), second and third take 25% (6/24):"}),"\n",(0,o.jsx)(r,{data:G}),"\n",(0,o.jsx)(n.h2,{id:"overflow-hidden",children:"overflow: hidden"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"Grid"})," has ",(0,o.jsx)(n.code,{children:"overflow: visible"})," style on the root element. In some cases\nyou might want to change it to ",(0,o.jsx)(n.code,{children:"overflow: hidden"})," to prevent negative margins from\noverflowing the grid container. For example, if you use ",(0,o.jsx)(n.code,{children:"Grid"})," without parent container\nwhich has padding."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { Grid } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Grid overflow=\"hidden\">\n      <Grid.Col span={6}>1</Grid.Col>\n      <Grid.Col span={6}>2</Grid.Col>\n    </Grid>\n  );\n}\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(C,{...e,children:(0,o.jsx)(y,{...e})})}},17234:function(e,n,r){"use strict";r.d(n,{j:function(){return d}});var o=r(52322),i=r(69659),s=r(15749);let d={type:"code",code:`
import { Grid } from '@mantine/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
    </Grid>
  );
}
`,component:function(){return(0,o.jsxs)(i.r,{children:[(0,o.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"1"}),(0,o.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"2"}),(0,o.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"3"}),(0,o.jsx)(s.Y,{span:{base:12,md:6,lg:3},children:"4"})]})}}},15749:function(e,n,r){"use strict";r.d(n,{Y:function(){return s}});var o=r(52322),i=r(69659);function s({children:e,...n}){return(0,o.jsx)(i.r.Col,{...n,children:(0,o.jsx)("div",{className:"m_548ba23a",children:(0,o.jsx)("div",{className:"m_60a4592e",children:e})})})}},69659:function(e,n,r){"use strict";r.d(n,{r:function(){return E}});var o=r(52322);r(2784);var i=r(11200),s=r(38483),d=r(46690),t=r(12063),l=r(28559),c=r(82027);let[a,h]=(0,r(89106).R)("Grid component was not found in tree");var p=r(40489),u=r(98446),x=r(40580),m=r(54541),j=r(32100),f=r(68755),G=r(9437);let g=(e,n)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(n/e)}%`:void 0,w=(e,n,r)=>r||"auto"===e?"100%":"content"===e?"unset":g(e,n),C=(e,n)=>{if(e)return"auto"===e||n?"1":"auto"},y=(e,n)=>0===e?"0":e?`${100/(n/e)}%`:void 0;function b({span:e,order:n,offset:r,selector:i}){let s=(0,f.rZ)(),d=h(),t=void 0===(0,j.v)(e)?12:(0,j.v)(e),l=(0,x.L)({"--col-order":j.v(n)?.toString(),"--col-flex-grow":C(t,d.grow),"--col-flex-basis":g(t,d.columns),"--col-width":"content"===t?"auto":void 0,"--col-max-width":w(t,d.columns,d.grow),"--col-offset":y((0,j.v)(r),d.columns)}),c=(0,u.X)(s.breakpoints).reduce((o,i)=>(o[i]||(o[i]={}),"object"==typeof n&&void 0!==n[i]&&(o[i]["--col-order"]=n[i]?.toString()),"object"==typeof e&&void 0!==e[i]&&(o[i]["--col-flex-grow"]=C(e[i],d.grow),o[i]["--col-flex-basis"]=g(e[i],d.columns),o[i]["--col-width"]="content"===e[i]?"auto":void 0,o[i]["--col-max-width"]=w(e[i],d.columns,d.grow)),"object"==typeof r&&void 0!==r[i]&&(o[i]["--col-offset"]=y(r[i],d.columns)),o),{}),a=(0,m.I)((0,u.X)(c),s).filter(e=>(0,u.X)(c[e.value]).length>0).map(e=>({query:`(min-width: ${s.breakpoints[e.value]})`,styles:c[e.value]}));return(0,o.jsx)(G.f,{styles:l,media:a,selector:i})}var v={root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let Y={span:12},k=(0,c.d)((e,n)=>{let{classNames:r,className:i,style:d,styles:c,vars:a,span:u,order:x,offset:m,...j}=(0,s.w)("GridCol",Y,e),f=h(),G=(0,t.m)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{selector:`.${G}`,span:u,order:x,offset:m}),(0,o.jsx)(l.x,{ref:n,...f.getStyles("col",{className:(0,p.Z)(i,G),style:d,classNames:r,styles:c}),...j})]})});k.classes=v,k.displayName="@mantine/core/GridCol";var _=r(91482);function D({gutter:e,selector:n}){let r=(0,f.rZ)(),i=(0,x.L)({"--grid-gutter":(0,_.bG)((0,j.v)(e))}),s=(0,u.X)(r.breakpoints).reduce((n,r)=>(n[r]||(n[r]={}),"object"==typeof e&&void 0!==e[r]&&(n[r]["--grid-gutter"]=(0,_.bG)(e[r])),n),{}),d=(0,m.I)((0,u.X)(s),r).filter(e=>(0,u.X)(s[e.value]).length>0).map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:s[e.value]}));return(0,o.jsx)(G.f,{styles:i,media:d,selector:n})}let N={gutter:"md",grow:!1,columns:12},I=(0,i.Z)((e,{justify:n,align:r,overflow:o})=>({root:{"--grid-justify":n,"--grid-align":r,"--grid-overflow":o}})),E=(0,c.d)((e,n)=>{let r=(0,s.w)("Grid",N,e),{classNames:i,className:c,style:h,styles:p,unstyled:u,vars:x,grow:m,gutter:j,columns:f,align:G,justify:g,children:w,...C}=r,y=(0,d.y)({name:"Grid",classes:v,props:r,className:c,style:h,classNames:i,styles:p,unstyled:u,vars:x,varsResolver:I}),b=(0,t.m)();return(0,o.jsxs)(a,{value:{getStyles:y,grow:m,columns:f},children:[(0,o.jsx)(D,{selector:`.${b}`,...r}),(0,o.jsx)(l.x,{ref:n,...y("root",{className:b}),...C,children:(0,o.jsx)("div",{...y("inner"),children:w})})]})});E.classes=v,E.displayName="@mantine/core/Grid",E.Col=k},32100:function(e,n,r){"use strict";function o(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}r.d(n,{v:function(){return o}})},99070:function(e,n,r){"use strict";r.d(n,{o:function(){return i}});var o=r(65744);function i(e,n){return e in n.breakpoints?(0,o.px)(n.breakpoints[e]):(0,o.px)(e)}},54541:function(e,n,r){"use strict";r.d(n,{I:function(){return i}});var o=r(99070);function i(e,n){let r=e.map(e=>({value:e,px:(0,o.o)(e,n)}));return r.sort((e,n)=>e.px-n.px),r}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=93892)}),_N_E=e.O()}]);