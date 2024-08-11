(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{6505:function(e,t,s){Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,6873))},5169:function(e,t,s){"use strict";s.d(t,{F:function(){return d},f:function(){return c}});var r=s(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",n="undefined"==typeof window,i=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),p=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:s=!0,enableColorScheme:n=!0,storageKey:l="theme",themes:d=p,defaultTheme:c=s?"system":"light",attribute:m="data-theme",value:y,children:b,nonce:g})=>{let[C,w]=(0,r.useState)(()=>f(l,c)),[j,v]=(0,r.useState)(()=>f(l)),_=y?Object.values(y):d,k=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&s&&(r=x());let a=y?y[r]:r,i=t?u():null,l=document.documentElement;if("class"===m?(l.classList.remove(..._),a&&l.classList.add(a)):a?l.setAttribute(m,a):l.removeAttribute(m),n){let e=o.includes(c)?c:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==i||i()},[]),S=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),$=(0,r.useCallback)(t=>{v(x(t)),"system"===C&&s&&!e&&k("system")},[C,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener($),$(e),()=>e.removeListener($)},[$]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&S(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,r.useEffect)(()=>{k(null!=e?e:C)},[e,C]);let O=(0,r.useMemo)(()=>({theme:C,setTheme:S,forcedTheme:e,resolvedTheme:"system"===C?j:C,themes:s?[...d,"system"]:d,systemTheme:s?j:void 0}),[C,S,e,j,s,d]);return r.createElement(i.Provider,{value:O},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:s,enableColorScheme:n,storageKey:l,themes:d,defaultTheme:c,attribute:m,value:y,children:b,attrs:_,nonce:g}),b)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:s,enableSystem:n,enableColorScheme:i,defaultTheme:l,value:d,attrs:c,nonce:p})=>{let m="system"===l,h="class"===s?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${s}',s='setAttribute';`,f=i?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",u=(e,t=!1,r=!0)=>{let a=d?d[e]:e,n=t?e+"|| ''":`'${a}'`,l="";return i&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===s?l+=t||a?`c.add(${n})`:"null":a&&(l+=`d[s](n,${n})`),l},x=e?`!function(){${h}${u(e)}}()`:n?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${u("dark")}}else{${u("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${u(d?"x[e]":"e",!0)}}${m?"":"else{"+u(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${u(d?"x[e]":"e",!0)}}else{${u(l,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:p,dangerouslySetInnerHTML:{__html:x}})},()=>!0),f=(e,t)=>{let s;if(!n){try{s=localStorage.getItem(e)||void 0}catch(e){}return s||t}},u=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6873:function(e,t,s){"use strict";var r=s(7437),o=s(5169);t.default=()=>{let{theme:e}=(0,o.F)();return(0,r.jsxs)("div",{className:"relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11",children:[(0,r.jsx)("h3",{className:"mb-4 text-2xl font-bold leading-tight text-black dark:text-white",children:"Subscribe to receive future updates"}),(0,r.jsx)("p",{className:"mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25",children:"Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus."}),(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Enter your name",className:"border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"}),(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email",className:"border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"}),(0,r.jsx)("input",{type:"submit",value:"Subscribe",className:"mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"}),(0,r.jsx)("p",{className:"text-center text-base leading-relaxed text-body-color dark:text-body-color-dark",children:"No spam guaranteed, So please don’t send any spam mail."})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"absolute left-2 top-7",children:(0,r.jsxs)("svg",{width:"57",height:"65",viewBox:"0 0 57 65",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:"0.5",d:"M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z",fill:"url(#paint0_linear_1028_600)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_1028_600",x1:"-18.3187",y1:"55.1044",x2:"37.161",y2:"15.3509",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0.62"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]})})]})}),(0,r.jsx)("span",{className:"absolute bottom-24 left-1.5",children:(0,r.jsxs)("svg",{width:"39",height:"32",viewBox:"0 0 39 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:"0.5",d:"M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z",fill:"url(#paint0_linear_1028_601)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_1028_601",x1:"39.1948",y1:"38.335",x2:"10.6982",y2:"10.2511",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0.62"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]})})]})}),(0,r.jsx)("span",{className:"absolute right-2 top-[140px]",children:(0,r.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{opacity:"0.5",d:"M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z",fill:"url(#paint0_linear_1028_602)"}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"paint0_linear_1028_602",x1:"-0.571054",y1:"-37.1717",x2:"28.7937",y2:"26.7564",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0.62"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]})})]})}),(0,r.jsx)("span",{className:"absolute right-0 top-0",children:(0,r.jsxs)("svg",{width:"162",height:"91",viewBox:"0 0 162 91",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsxs)("g",{opacity:"0.3",children:[(0,r.jsx)("path",{opacity:"0.45",d:"M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53",stroke:"url(#paint0_linear_1028_603)"}),(0,r.jsx)("path",{opacity:"0.45",d:"M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78",stroke:"url(#paint1_linear_1028_603)"}),(0,r.jsx)("path",{opacity:"0.45",d:"M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69",stroke:"url(#paint2_linear_1028_603)"}),(0,r.jsx)("path",{opacity:"0.45",d:"M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102",stroke:"url(#paint3_linear_1028_603)"})]}),(0,r.jsxs)("defs",{children:[(0,r.jsxs)("linearGradient",{id:"paint0_linear_1028_603",x1:"291.35",y1:"12.1032",x2:"179.211",y2:"237.617",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.328125",stopColor:"light"===e?"#4A6CF7":"#fff"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint1_linear_1028_603",x1:"333.35",y1:"-12.8968",x2:"221.211",y2:"212.617",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.328125",stopColor:"light"===e?"#4A6CF7":"#fff"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint2_linear_1028_603",x1:"294.35",y1:"-3.89678",x2:"182.211",y2:"221.617",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.328125",stopColor:"light"===e?"#4A6CF7":"#fff"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]}),(0,r.jsxs)("linearGradient",{id:"paint3_linear_1028_603",x1:"331.35",y1:"-36.8968",x2:"219.211",y2:"188.617",gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0.328125",stopColor:"light"===e?"#4A6CF7":"#fff"}),(0,r.jsx)("stop",{offset:"1",stopColor:"light"===e?"#4A6CF7":"#fff",stopOpacity:"0"})]})]})]})})]})]})}}},function(e){e.O(0,[231,173,971,23,744],function(){return e(e.s=6505)}),_N_E=e.O()}]);