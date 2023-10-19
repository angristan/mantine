(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4173],{33507:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,n,s){"use strict";s.d(n,{Z:function(){return a}});var a=(0,s(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},21865:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-local-storage",function(){return s(87352)}])},87352:function(e,n,s){"use strict";s.r(n);var a=s(85893),o=s(11151),t=s(19905),l=s(9904);let r=(0,t.A)(l.us.useLocalStorage);function i(e){let n=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-local-storage"})," allows using value from the ",(0,a.jsx)(n.code,{children:"localStorage"})," as react state.\nThe hook works the same way as ",(0,a.jsx)(n.code,{children:"useState"}),", but also writes the value to the ",(0,a.jsx)(n.code,{children:"localStorage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\n// The hook will read value from localStorage.getItem('color-scheme')\n// If localStorage is not available or value at a given key does not exist\n// 'dark' will be assigned to value variable\nconst [value, setValue] = useLocalStorage({ key: 'color-scheme', defaultValue: 'dark' });\n\n// Value is set both to state and localStorage at 'color-scheme'\nsetValue('light');\n\n// You can also use callback like in useState hook to set value\nsetValue((current) => (current === 'dark' ? 'light' : 'dark'));\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["Example of a color scheme toggle button that uses ",(0,a.jsx)(n.code,{children:"use-local-storage"})," hook\nto store current color scheme in the ",(0,a.jsx)(n.code,{children:"localStorage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\nimport { ActionIcon, ColorScheme } from '@mantine/core';\nimport { IconSun, IconMoonStars } from '@tabler/icons-react';\n\nfunction ColorSchemeToggle() {\n  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({\n    key: 'color-scheme',\n    defaultValue: 'light',\n  });\n\n  const toggleColorScheme = () =>\n    setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'));\n\n  return (\n    <ActionIcon onClick={toggleColorScheme}>\n      {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}\n    </ActionIcon>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"remove-value",children:"Remove value"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"removeValue"})," callback to clean ",(0,a.jsx)(n.code,{children:"localStorage"}),"/",(0,a.jsx)(n.code,{children:"sessionStorage"}),".\nWhen value is removed it is reset to ",(0,a.jsx)(n.code,{children:"defaultValue"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\nconst [value, setValue, removeValue] = useLocalStorage({\n  key: 'color-scheme',\n  defaultValue: 'light',\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"browser-tabs-synchronization",children:"Browser tabs synchronization"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-local-storage"})," subscribes to ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event",children:"storage event"}),".\nWhen state changes in one tab, it automatically updates the value in all other opened browser tabs.\nYou can test this feature by opening 2 tabs with Mantine docs side by side and changing the color scheme\n(button on the top right or ",(0,a.jsx)(n.code,{children:"⌘ + J"})," on MacOS and ",(0,a.jsx)(n.code,{children:"Ctrl + J"})," on Windows and Linux)."]}),"\n",(0,a.jsx)(n.h2,{id:"serializedeserialize-json",children:"Serialize/deserialize JSON"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the hook will serialize/deserialize data with ",(0,a.jsx)(n.code,{children:"JSON.stringify"}),"/",(0,a.jsx)(n.code,{children:"JSON.parse"}),".\nIf you need to store data in local storage that cannot be serialized with ",(0,a.jsx)(n.code,{children:"JSON.stringify"}),"\n– provide your own serialization handlers:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const [value, setValue] = useLocalStorage({\n  key: 'color-scheme',\n  serialize: (value) => {\n    /* return value serialized to string */\n  },\n  deserialize: (localStorageValue) => {\n    /* parse localStorage string value and return value */\n  },\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usage-with-superjson",children:"Usage with superjson"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/blitz-js/superjson",children:"superjson"})," is compatible with ",(0,a.jsx)(n.code,{children:"JSON.stringify"}),"/",(0,a.jsx)(n.code,{children:"JSON.parse"})," but works for ",(0,a.jsx)(n.code,{children:"Date"}),", ",(0,a.jsx)(n.code,{children:"Map"}),", ",(0,a.jsx)(n.code,{children:"Set"})," and ",(0,a.jsx)(n.code,{children:"BigInt"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import superjson from 'superjson';\n\nconst [value, setValue] = useLocalStorage({\n  key,\n  defaultValue,\n  serialize: superjson.stringify,\n  deserialize: (str) => (str === undefined ? defaultValue : superjson.parse(str)),\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"use-session-storage",children:"use-session-storage"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"use-session-storage"})," hook works the same way as ",(0,a.jsx)(n.code,{children:"use-local-storage"})," hook but uses ",(0,a.jsx)(n.code,{children:"sessionStorage"})," instead of ",(0,a.jsx)(n.code,{children:"window.localStorage"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { useSessionStorage } from '@mantine/hooks';\n\nconst [value, setValue] = useSessionStorage({ key: 'session-key', defaultValue: 'mantine' });\n"})}),"\n",(0,a.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"interface UseLocalStorage<T> {\n  /** Local storage key */\n  key: string;\n\n  /** Default value that will be set if value is not found in local storage */\n  defaultValue?: T;\n\n  /** If set to true, value will be updated in useEffect after mount */\n  getInitialValueInEffect: boolean;\n\n  /** Function to serialize value into a string to be saved in local storage */\n  serialize?(value: T): string;\n\n  /** Function to deserialize string value from local storage to value */\n  deserialize?(value: string): T;\n}\n\nfunction useLocalStorage<T = string>({\n  key,\n  defaultValue,\n  deserialize,\n  serialize,\n  getInitialValueInEffect,\n}: UseLocalStorage<T>): readonly [\n  T, // current value\n  (val: T | ((prevState: T) => T)) => void, // callback to set value in storage\n  () => void // callback to remove value from storage\n];\n"})}),"\n",(0,a.jsx)(n.h2,{id:"set-value-type",children:"Set value type"}),"\n",(0,a.jsxs)(n.p,{children:["You can specify value type same as in ",(0,a.jsx)(n.code,{children:"useState"})," hook:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const [value, setValue] = useLocalStorage<'dark' | 'light'>({\n  key: 'color-scheme',\n  defaultValue: 'light',\n});\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(r,Object.assign({},e,{children:(0,a.jsx)(i,e)}))}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=21865)}),_N_E=e.O()}]);