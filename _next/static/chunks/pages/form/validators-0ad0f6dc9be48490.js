(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61356],{69378:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var r,o,i,a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},64130:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validators",function(){return n(26434)}])},26434:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(52322),o=n(45392),i=n(74770),a=n(42697),l=n(93010),s=n(17115),u=n(405),m=n(90070),c=n(3095),d=n(51057),h=n(1328),f=n(73846);let p={type:"code",component:function(){let e=(0,u.c)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:(0,m.d)({min:2,max:10},"Name must be 2-10 characters long"),job:(0,c.U)("Enter your current job"),email:(0,d.J)("Invalid email"),favoriteColor:(0,h.w)(/^#([0-9a-f]{3}){1,2}$/,"Enter a valid hex color"),age:(0,f.m)({min:18,max:99},"You must be 18-99 years old to register")}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,r.jsx)(i.o,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,r.jsx)(i.o,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,r.jsx)(i.o,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(i.o,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,r.jsx)(a.Y,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,r.jsx)(l.Z,{justify:"flex-end",mt:"md",children:(0,r.jsx)(s.z,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }, 'Name must be 2-10 characters long'),
      job: isNotEmpty('Enter your current job'),
      email: isEmail('Invalid email'),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/, 'Enter a valid hex color'),
      age: isInRange({ min: 18, max: 99 }, 'You must be 18-99 years old to register'),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340},g={type:"code",component:function(){let e=(0,u.c)({mode:"uncontrolled",initialValues:{name:"",job:"",email:"",favoriteColor:"",age:18},validate:{name:(0,m.d)({min:2,max:10}),job:(0,c.U)(),email:(0,d.J)(),favoriteColor:(0,h.w)(/^#([0-9a-f]{3}){1,2}$/),age:(0,f.m)({min:18,max:99})}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,r.jsx)(i.o,{label:"Name",placeholder:"Name",withAsterisk:!0,...e.getInputProps("name")},e.key("name")),(0,r.jsx)(i.o,{label:"Your job",placeholder:"Your job",withAsterisk:!0,mt:"md",...e.getInputProps("job")},e.key("job")),(0,r.jsx)(i.o,{label:"Your email",placeholder:"Your email",withAsterisk:!0,mt:"md",...e.getInputProps("email")},e.key("email")),(0,r.jsx)(i.o,{label:"Your favorite color",placeholder:"Your favorite color",withAsterisk:!0,mt:"md",...e.getInputProps("favoriteColor")},e.key("favoriteColor")),(0,r.jsx)(a.Y,{label:"Your age",placeholder:"Your age",withAsterisk:!0,mt:"md",...e.getInputProps("age")},e.key("age")),(0,r.jsx)(l.Z,{justify:"flex-end",mt:"md",children:(0,r.jsx)(s.z,{type:"submit",children:"Submit"})})]})},code:`
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      job: '',
      email: '',
      favoriteColor: '',
      age: 18,
    },

    validate: {
      name: hasLength({ min: 2, max: 10 }),
      job: isNotEmpty(),
      email: isEmail(),
      favoriteColor: matches(/^#([0-9a-f]{3}){1,2}$/),
      age: isInRange({ min: 18, max: 99 }),
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="Name"
        placeholder="Name"
        withAsterisk
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Your job"
        placeholder="Your job"
        withAsterisk
        mt="md"
        key={form.key('job')}
        {...form.getInputProps('job')}
      />
      <TextInput
        label="Your email"
        placeholder="Your email"
        withAsterisk
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <TextInput
        label="Your favorite color"
        placeholder="Your favorite color"
        withAsterisk
        mt="md"
        key={form.key('favoriteColor')}
        {...form.getInputProps('favoriteColor')}
      />
      <NumberInput
        label="Your age"
        placeholder="Your age"
        withAsterisk
        mt="md"
        key={form.key('age')}
        {...form.getInputProps('age')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340};var b=n(25071),v=n(15019);let x=(0,b.A)(v.us.formValidators);function j(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"@mantine/form"})," package exports several functions that can be used in ",(0,r.jsx)(t.a,{href:"/form/validation/#validation-with-rules-object",children:"validation rules object"}),".\nValidation functions are tiny in size and provide basic validation, if you have complex validation requirements, use other types of ",(0,r.jsx)(t.a,{href:"/form/validation/",children:"validation"}),"."]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"optional-error",children:"Optional error"}),"\n",(0,r.jsx)(t.p,{children:"Last argument of all validator functions below is optional. If error is not set, then fields with failed validation will\nonly have invalid styles without error message:"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"isnotempty",children:"isNotEmpty"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isNotEmpty"})," checks that form value is not empty. Empty string, empty array, ",(0,r.jsx)(t.code,{children:"false"}),", ",(0,r.jsx)(t.code,{children:"null"})," and ",(0,r.jsx)(t.code,{children:"undefined"}),"\nvalues are considered to be empty. Strings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isNotEmpty, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    name: '',\n    acceptTermsOfUse: false,\n    country: null,\n    previousJobs: [],\n  },\n\n  validate: {\n    // Empty strings are considered to be invalid\n    name: isNotEmpty('Name cannot be empty'),\n\n    // False value is considered to be invalid\n    acceptTermsOfUse: isNotEmpty('You must accept terms of use'),\n\n    // null is considered to be invalid\n    country: isNotEmpty('Pick your country'),\n\n    // Empty arrays are considered to be invalid\n    previousJobs: isNotEmpty('Enter at least one job'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isemail",children:"isEmail"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isEmail"})," uses ",(0,r.jsx)(t.code,{children:"/^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,})+$/"})," regexp to determine whether form value is an email:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isEmail, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    email: '',\n  },\n\n  validate: {\n    email: isEmail('Invalid email'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matches",children:"matches"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matches"})," checks whether form value matches given regexp. If form value is not a string, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matches, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    color: '',\n  },\n\n  validate: {\n    color: matches(/^#([0-9a-f]{3}){1,2}$/, 'Invalid color'),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"isinrange",children:"isInRange"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"isInRange"})," checks whether form value is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range. If form value is not a number, validation will be failed."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { isInRange, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    maxRange: 0,\n    minRange: 0,\n    minMaxRange: 0,\n  },\n\n  validate: {\n    maxRange: isInRange({ max: 20 }, 'Value must be 20 or less'),\n    minRange: isInRange({ min: 10 }, 'Value must be 10 or more'),\n    minMaxRange: isInRange(\n      { min: 10, max: 20 },\n      'Value must be between 10 and 20'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"haslength",children:"hasLength"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"hasLength"})," check whether form value length is within given ",(0,r.jsx)(t.code,{children:"min"}),"-",(0,r.jsx)(t.code,{children:"max"})," range.\n",(0,r.jsx)(t.code,{children:"hasLength"})," will work correctly with strings, arrays and any other objects that have ",(0,r.jsx)(t.code,{children:"length"})," property.\nStrings are trimmed before validation."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { hasLength, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    exact: '',\n    maxLength: '',\n    minLength: '',\n    minMaxLength: '',\n  },\n\n  validate: {\n    exact: hasLength(5, 'Values must have exactly 5 characters'),\n    maxLength: hasLength(\n      { max: 20 },\n      'Value must have 20 or less characters'\n    ),\n    minLength: hasLength(\n      { min: 10 },\n      'Value must have 10  or more characters'\n    ),\n    minMaxLength: hasLength(\n      { min: 10, max: 20 },\n      'Value must have 10-20 characters'\n    ),\n  },\n});\n"})}),"\n",(0,r.jsx)(t.h2,{id:"matchesfield",children:"matchesField"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"matchesField"})," checks whether form value is the same as value in other form field.\nNote that ",(0,r.jsx)(t.code,{children:"matchesField"})," can only work with primitive values (arrays and objects cannot be compared)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { matchesField, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    password: '',\n    confirmPassword: '',\n  },\n\n  validate: {\n    confirmPassword: matchesField(\n      'password',\n      'Passwords are not the same'\n    ),\n  },\n});\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(x,{...e,children:(0,r.jsx)(j,{...e})})}},15463:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,i,a=0,l=Object.prototype.toString.call(e);if("[object Object]"===l?i=Object.create(e.__proto__||null):"[object Array]"===l?i=Array(e.length):"[object Set]"===l?(i=new Set,e.forEach(function(e){i.add(o(e))})):"[object Map]"===l?(i=new Map,e.forEach(function(e,t){i.set(o(t),o(e))})):"[object Date]"===l?i=new Date(+e):"[object RegExp]"===l?i=new RegExp(e.source,e.flags):"[object DataView]"===l?i=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===l?i=e.slice(0):"Array]"===l.slice(-6)&&(i=new e.constructor(e)),i){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r(i,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(i,t=n[a])&&i[t]===e[t]||r(i,t,Object.getOwnPropertyDescriptor(e,t))}return i||e}n.d(t,{Y:function(){return o}})},42697:function(e,t,n){"use strict";n.d(t,{Y:function(){return I}});var r=n(52322),o=n(2784),i=n(40489),a=n(9462),l=n(9341),s=n(82692),u=n(70837),m=n(91482),c=n(11200),d=n(51477),h=n(46690),f=n(38483),p=n(82027),g=n(73063),b=n(63409);function v({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var x={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let j=/^(0\.0*|-0(\.0*)?)$/,y=/^-?0\d+(\.\d+)?\.?$/;function w(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let k={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},N=(0,c.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,m.ap)(t,"ni-chevron-size")}})),I=(0,p.d)((e,t)=>{let n=(0,f.w)("NumberInput",k,e),{className:m,classNames:c,styles:p,unstyled:I,vars:E,onChange:A,onValueChange:P,value:Y,defaultValue:S,max:F,min:R,step:_,hideControls:O,rightSection:V,isAllowed:C,clampBehavior:L,onBlur:M,allowDecimal:T,decimalScale:D,onKeyDown:B,onKeyDownCapture:$,handlersRef:z,startValue:Z,disabled:G,rightSectionPointerEvents:U,allowNegative:J,readOnly:X,size:K,rightSectionWidth:W,stepHoldInterval:q,stepHoldDelay:H,allowLeadingZeros:Q,withKeyboardEvents:ee,trimLeadingZeroesOnBlur:et,...en}=n,er=(0,h.y)({name:"NumberInput",classes:x,props:n,classNames:c,styles:p,unstyled:I,vars:E,varsResolver:N}),{resolvedClassNames:eo,resolvedStyles:ei}=(0,d.h)({classNames:c,styles:p,props:n}),[ea,el]=(0,l.C)({value:Y,defaultValue:S,onChange:A}),es=void 0!==H&&void 0!==q,eu=(0,o.useRef)(null),em=(0,o.useRef)(null),ec=(0,o.useRef)(0),ed=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eh=e=>{eu.current&&void 0!==e&&eu.current.setSelectionRange(e,e)},ef=(0,o.useRef)();ef.current=()=>{let e;let t=Math.max(ed(ea),ed(_)),n=10**t;if("number"!=typeof ea||Number.isNaN(ea))e=(0,s.u)(Z,R,F);else if(void 0!==F){let t=(Math.round(ea*n)+Math.round(_*n))/n;e=t<=F?t:F}else e=(Math.round(ea*n)+Math.round(_*n))/n;let r=e.toFixed(t);el(parseFloat(r)),P?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>eh(eu.current?.value.length),0)};let ep=(0,o.useRef)();ep.current=()=>{let e;let t=void 0!==R?R:J?Number.MIN_SAFE_INTEGER:0,n=Math.max(ed(ea),ed(_)),r=10**n;if("number"!=typeof ea||Number.isNaN(ea))e=(0,s.u)(Z,t,F);else{let n=(Math.round(ea*r)-Math.round(_*r))/r;e=void 0!==t&&n<t?t:n}let o=e.toFixed(n);el(parseFloat(o)),P?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>eh(eu.current?.value.length),0)},(0,u.kR)(z,{increment:ef.current,decrement:ep.current});let eg=e=>{e?ef.current():ep.current(),ec.current+=1},eb=e=>{if(eg(e),es){let t="number"==typeof q?q:q(ec.current);em.current=window.setTimeout(()=>eb(e),t)}},ev=(e,t)=>{e.preventDefault(),eu.current?.focus(),eg(t),es&&(em.current=window.setTimeout(()=>eb(t),H))},ex=()=>{em.current&&window.clearTimeout(em.current),em.current=null,ec.current=0},ej=(0,r.jsxs)("div",{...er("controls"),children:[(0,r.jsx)(b.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof ea&&void 0!==F&&ea>=F,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ev(e,!0)},onPointerUp:ex,onPointerLeave:ex,children:(0,r.jsx)(v,{direction:"up"})}),(0,r.jsx)(b.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof ea&&void 0!==R&&ea<=R,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ev(e,!1)},onPointerUp:ex,onPointerLeave:ex,children:(0,r.jsx)(v,{direction:"down"})})]});return(0,r.jsx)(g.M,{component:a.h3,allowNegative:J,className:(0,i.Z)(x.root,m),size:K,...en,readOnly:X,disabled:G,value:ea,getInputRef:(0,u.Yx)(t,eu),onValueChange:(e,t)=>{if("event"===t.source){var n;el(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||j.test(e.value)||Q&&y.test(e.value)?e.value:e.floatValue)}P?.(e,t)},rightSection:O||X?V:V||ej,classNames:eo,styles:ei,unstyled:I,__staticSelector:"NumberInput",decimalScale:T?D:0,onKeyDown:e=>{B?.(e),!X&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),ef.current()),"ArrowDown"===e.key&&(e.preventDefault(),ep.current()))},onKeyDownCapture:e=>{if($?.(e),"Backspace"===e.key){let t=eu.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eh(0),0))}},rightSectionPointerEvents:U??(G?"none":void 0),rightSectionWidth:W??`var(--ni-right-section-width-${K||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(M?.(e),"blur"===L&&"number"==typeof ea&&(0,s.u)(ea,R,F)!==ea&&el((0,s.u)(ea,R,F)),et&&"string"==typeof ea){let e=ea.replace(/^0+/,""),t=parseFloat(e);el(Number.isNaN(t)||t>Number.MAX_SAFE_INTEGER?e:t)}},isAllowed:e=>"strict"===L?C?C(e)&&w(e.floatValue,R,F):w(e.floatValue,R,F):!C||C(e)})});I.classes={...g.M.classes,...x},I.displayName="@mantine/core/NumberInput"},90070:function(e,t,n){"use strict";function r(e,t){if("number"==typeof e)return t.length===e;let{max:n,min:r}=e,o=!0;return"number"==typeof n&&t.length>n&&(o=!1),"number"==typeof r&&t.length<r&&(o=!1),o}function o(e,t){let n=t||!0;return t=>"string"==typeof t?r(e,t.trim())?null:n:"object"==typeof t&&null!==t&&"length"in t&&r(e,t)?null:n}n.d(t,{d:function(){return o}})},51057:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(1328);function o(e){return(0,r.w)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},73846:function(e,t,n){"use strict";function r({min:e,max:t},n){let r=n||!0;return n=>{if("number"!=typeof n)return r;let o=!0;return"number"==typeof e&&n<e&&(o=!1),"number"==typeof t&&n>t&&(o=!1),o?null:r}}n.d(t,{m:function(){return r}})},3095:function(e,t,n){"use strict";function r(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}n.d(t,{U:function(){return r}})},1328:function(e,t,n){"use strict";function r(e,t){let n=t||!0;return t=>"string"!=typeof t?n:e.test(t)?null:n}n.d(t,{w:function(){return r}})}},function(e){e.O(0,[61177,9462,66748,11340,405,92888,49774,40179],function(){return e(e.s=64130)}),_N_E=e.O()}]);