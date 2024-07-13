(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16334],{52181:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/drawer",function(){return o(36160)}])},36160:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return T}});var r=o(52322),t=o(45392),s=o(41168),i=o(17115),c=o(3900),l=o(3789);let a={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Authentication",children:(0,r.jsx)(l._,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(i.z,{onClick:n,children:"Open Drawer"})]})}};var d=o(2784),h=o(93010);let u={type:"code",component:function(){let[e,n]=(0,d.useState)(!1),[o,t]=(0,d.useState)("top"),c=e=>{t(e),n(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:()=>n(!1),padding:"md",position:o,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,r.jsxs)(h.Z,{justify:"center",children:[(0,r.jsx)(i.z,{onClick:()=>c("left"),children:"Left"}),(0,r.jsx)(i.z,{onClick:()=>c("right"),children:"Right"}),(0,r.jsx)(i.z,{onClick:()=>c("top"),children:"Top"}),(0,r.jsx)(i.z,{onClick:()=>c("bottom"),children:"Bottom"})]})]})}};var p=o(77612);let m={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4},children:(0,r.jsx)(l._,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}},x={type:"code",component:function(){let[e,n]=(0,d.useState)(!1),[o,t]=(0,d.useState)("top"),c=e=>{t(e),n(!0)},l=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>(0,r.jsx)(i.z,{onClick:()=>c(e),children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:()=>n(!1),padding:"md",size:o,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,r.jsx)(h.Z,{justify:"center",children:l})]})}},j={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,withCloseButton:!1,children:"Drawer without header, press escape or click on overlay to close"}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}},w={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>(0,r.jsx)("p",{children:"Drawer with scroll"},n));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Header is sticky",children:t}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}};var f=o(38405);let D={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1),t=Array(100).fill(0).map((e,n)=>(0,r.jsx)("p",{children:"Drawer with scroll"},n));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:f.x.Autosize,children:t}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}},C={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"},children:(0,r.jsx)(l._,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(i.z,{onClick:n,children:"Open Drawer"})]})}};var y=o(74770);let g={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.d,{opened:e,onClose:o,title:"Focus demo",children:[(0,r.jsx)(y.o,{label:"First input",placeholder:"First input"}),(0,r.jsx)(y.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}};var k=o(10266);let b={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.d,{opened:e,onClose:o,title:"Focus demo",children:[(0,r.jsx)(k.i.InitialFocus,{}),(0,r.jsx)(y.o,{label:"First input",placeholder:"First input"}),(0,r.jsx)(y.o,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}};var v=o(81082);let B={type:"code",code:`
import { IconXboxX } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <IconXboxX size={20} stroke={1.5} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.d,{opened:e,onClose:o,title:"Authentication",closeButtonProps:{icon:(0,r.jsx)(v.Z,{size:20,stroke:1.5})},children:(0,r.jsx)(l._,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(i.z,{onClick:n,children:"Open Drawer"})]})}},F={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button onClick={open}>Open drawer</Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:n,close:o}]=(0,c.q)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.d.Root,{opened:e,onClose:o,children:[(0,r.jsx)(s.d.Overlay,{}),(0,r.jsxs)(s.d.Content,{children:[(0,r.jsxs)(s.d.Header,{children:[(0,r.jsx)(s.d.Title,{children:"Drawer title"}),(0,r.jsx)(s.d.CloseButton,{})]}),(0,r.jsx)(s.d.Body,{children:"Drawer content"})]})]}),(0,r.jsx)(i.z,{onClick:n,children:"Open drawer"})]})}};var O=o(25071),z=o(15019);let I=(0,O.A)(z.us.Drawer);function A(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Demo:o}=n;return o||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(o,{data:a}),"\n",(0,r.jsx)(n.h2,{id:"position",children:"Position"}),"\n",(0,r.jsxs)(n.p,{children:["Drawer can be placed on ",(0,r.jsx)(n.code,{children:"left"})," (default), ",(0,r.jsx)(n.code,{children:"top"}),", ",(0,r.jsx)(n.code,{children:"right"})," and ",(0,r.jsx)(n.code,{children:"bottom"}),". Control drawer position with ",(0,r.jsx)(n.code,{children:"position"})," prop,\nfor example ",(0,r.jsx)(n.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,r.jsx)(o,{data:u}),"\n",(0,r.jsx)(n.h2,{id:"offset",children:"Offset"}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"offset"})," prop to change drawer offset from the edge of the viewport:"]}),"\n",(0,r.jsx)(o,{data:p.c}),"\n",(0,r.jsx)(n.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," uses ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})," component, you can set any props that ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,r.jsx)(n.code,{children:"overlayProps"}),":"]}),"\n",(0,r.jsx)(o,{data:m}),"\n",(0,r.jsx)(n.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsxs)(n.p,{children:["You can change drawer width/height (depends on ",(0,r.jsx)(n.code,{children:"position"}),") by setting ",(0,r.jsx)(n.code,{children:"size"})," prop to predefined size or any valid width,\nfor example, ",(0,r.jsx)(n.code,{children:'size="55%"'})," or ",(0,r.jsx)(n.code,{children:"size={200}"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,r.jsx)(o,{data:x}),"\n",(0,r.jsx)(n.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,r.jsxs)(n.p,{children:["To remove header set ",(0,r.jsx)(n.code,{children:"withCloseButton={false}"})]}),"\n",(0,r.jsx)(o,{data:j}),"\n",(0,r.jsx)(n.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,r.jsx)(o,{data:w}),"\n",(0,r.jsx)(n.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,r.jsx)(o,{data:D}),"\n",(0,r.jsx)(n.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," is built with ",(0,r.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," component. Use ",(0,r.jsx)(n.code,{children:"transitionProps"}),"\nprop to customize any ",(0,r.jsx)(n.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,r.jsx)(o,{data:C}),"\n",(0,r.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," uses ",(0,r.jsx)(n.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add ",(0,r.jsx)(n.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,r.jsx)(o,{data:g}),"\n",(0,r.jsxs)(n.p,{children:["If you do not want to focus any elements when the drawer is opened, use ",(0,r.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,r.jsx)(o,{data:b}),"\n",(0,r.jsxs)(n.p,{children:["If you do not add ",(0,r.jsx)(n.code,{children:"data-autofocus"})," attribute and do not use ",(0,r.jsx)(n.code,{children:"FocusTrap.InitialFocus"}),",\ndrawer will focus the first focusable element inside it which is usually the close button."]}),"\n",(0,r.jsx)(n.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,r.jsxs)(n.p,{children:["The following props can be used to control ",(0,r.jsx)(n.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,r.jsx)(n.code,{children:"Escape"})," key is pressed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," uses ",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,r.jsx)(n.code,{children:"RemoveScroll"})," component\nwith ",(0,r.jsx)(n.code,{children:"removeScrollProps"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    >\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,r.jsx)(o,{data:B}),"\n",(0,r.jsx)(n.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the following compound components to have full control over the ",(0,r.jsx)(n.code,{children:"Drawer"})," rendering:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Overlay"})," – render ",(0,r.jsx)(n.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,r.jsx)(n.code,{children:"Drawer.Title"})," and ",(0,r.jsx)(n.code,{children:"Drawer.CloseButton"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Title"})," – ",(0,r.jsx)(n.code,{children:"h2"})," element, ",(0,r.jsx)(n.code,{children:"aria-labelledby"})," of ",(0,r.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,r.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,r.jsx)(n.code,{children:"Drawer.Header"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Drawer.Body"})," – a place for main content, ",(0,r.jsx)(n.code,{children:"aria-describedby"})," of ",(0,r.jsx)(n.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,r.jsx)(o,{data:F}),"\n",(0,r.jsx)(n.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," component uses ",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,r.jsx)(n.code,{children:"elements"})," add a ",(0,r.jsx)(n.code,{children:"className"})," to them (",(0,r.jsx)(n.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Drawer"})," component follows ",(0,r.jsx)(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,r.jsxs)(n.p,{children:["Set ",(0,r.jsx)(n.code,{children:"title"})," props to make component accessible, will add ",(0,r.jsx)(n.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To set close button ",(0,r.jsx)(n.code,{children:"aria-label"})," use ",(0,r.jsx)(n.code,{children:"closeButtonProps"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(I,{...e,children:(0,r.jsx)(A,{...e})})}},81082:function(e,n,o){"use strict";o.d(n,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,o(73681).Z)("outline","xbox-x","IconXboxX",[["path",{d:"M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z",key:"svg-0"}],["path",{d:"M9 8l6 8",key:"svg-1"}],["path",{d:"M15 8l-6 8",key:"svg-2"}]])}},function(e){e.O(0,[61177,66748,11340,405,57902,92888,49774,40179],function(){return e(e.s=52181)}),_N_E=e.O()}]);