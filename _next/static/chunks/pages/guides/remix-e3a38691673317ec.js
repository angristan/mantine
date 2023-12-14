(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3540],{52293:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/remix",function(){return t(11977)}])},11977:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var s=t(24246),i=t(71670),r=t(3916),o=t(30289);let a=(0,r.A)(o.us.Remix);function l(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{GetTemplates:t,InstallScript:r,PackagesInstallation:o}=n;return t||p("GetTemplates",!0),r||p("InstallScript",!0),o||p("PackagesInstallation",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usage-with-remix",children:"Usage with Remix"}),"\n",(0,s.jsx)(t,{type:"remix"}),"\n",(0,s.jsx)(n.h2,{id:"generate-new-application",children:"Generate new application"}),"\n",(0,s.jsxs)(n.p,{children:["Follow ",(0,s.jsx)(n.a,{href:"https://remix.run/",children:"Remix getting started guide"})," guide to create new Remix application:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx create-remix@latest\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(o,{}),"\n",(0,s.jsx)(n.h2,{id:"postcss-setup",children:"PostCSS setup"}),"\n",(0,s.jsxs)(n.p,{children:["Install PostCSS plugins and ",(0,s.jsx)(n.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),":"]}),"\n",(0,s.jsx)(r,{packages:"postcss postcss-preset-mantine postcss-simple-vars",dev:!0}),"\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"postcss.config.cjs"})," file at the root of your application with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  plugins: {\n    'postcss-preset-mantine': {},\n    'postcss-simple-vars': {\n      variables: {\n        'mantine-breakpoint-xs': '36em',\n        'mantine-breakpoint-sm': '48em',\n        'mantine-breakpoint-md': '62em',\n        'mantine-breakpoint-lg': '75em',\n        'mantine-breakpoint-xl': '88em',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enable PostCSS in Remix ",(0,s.jsx)(n.code,{children:"remix.config.js"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  postcss: true,\n  // ... other options\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsxs)(n.p,{children:["Add styles imports, ",(0,s.jsx)(n.a,{href:"/theming/mantine-provider/",children:"MantineProvider"})," and ",(0,s.jsx)(n.a,{href:"/theming/color-schemes",children:"ColorSchemeScript"})," to ",(0,s.jsx)(n.code,{children:"app/root.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"// Import styles of packages that you've installed.\n// All packages except `@mantine/hooks` require styles imports\nimport '@mantine/core/styles.css';\n\nimport { cssBundleHref } from '@remix-run/css-bundle';\nimport type { LinksFunction } from '@remix-run/node';\nimport {\n  Links,\n  LiveReload,\n  Meta,\n  Outlet,\n  Scripts,\n  ScrollRestoration,\n} from '@remix-run/react';\nimport { ColorSchemeScript, MantineProvider } from '@mantine/core';\n\nexport const links: LinksFunction = () => [\n  ...(cssBundleHref\n    ? [{ rel: 'stylesheet', href: cssBundleHref }]\n    : []),\n];\n\nexport default function App() {\n  return (\n    <html lang=\"en\">\n      <head>\n        <meta charSet=\"utf-8\" />\n        <meta\n          name=\"viewport\"\n          content=\"width=device-width,initial-scale=1\"\n        />\n        <Meta />\n        <Links />\n        <ColorSchemeScript />\n      </head>\n      <body>\n        <MantineProvider>\n          <Outlet />\n          <ScrollRestoration />\n          <Scripts />\n          <LiveReload />\n        </MantineProvider>\n      </body>\n    </html>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"All set! Start development server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})})}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=52293)}),_N_E=e.O()}]);