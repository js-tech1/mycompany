(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5655:function(e,t,r){Promise.resolve().then(r.bind(r,1767))},5169:function(e,t,r){"use strict";r.d(t,{F:function(){return d},f:function(){return c}});var l=r(2265);let a=["light","dark"],s="(prefers-color-scheme: dark)",i="undefined"==typeof window,o=(0,l.createContext)(void 0),n={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,l.useContext)(o))&&void 0!==e?e:n},c=e=>(0,l.useContext)(o)?l.createElement(l.Fragment,null,e.children):l.createElement(x,e),h=["light","dark"],x=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:n="theme",themes:d=h,defaultTheme:c=r?"system":"light",attribute:x="data-theme",value:b,children:g,nonce:f})=>{let[y,k]=(0,l.useState)(()=>p(n,c)),[j,v]=(0,l.useState)(()=>p(n)),w=b?Object.values(b):d,N=(0,l.useCallback)(e=>{let l=e;if(!l)return;"system"===e&&r&&(l=u());let s=b?b[l]:l,o=t?C():null,n=document.documentElement;if("class"===x?(n.classList.remove(...w),s&&n.classList.add(s)):s?n.setAttribute(x,s):n.removeAttribute(x),i){let e=a.includes(c)?c:null,t=a.includes(l)?l:e;n.style.colorScheme=t}null==o||o()},[]),L=(0,l.useCallback)(e=>{k(e);try{localStorage.setItem(n,e)}catch(e){}},[e]),_=(0,l.useCallback)(t=>{v(u(t)),"system"===y&&r&&!e&&N("system")},[y,e]);(0,l.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,l.useEffect)(()=>{let e=e=>{e.key===n&&L(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[L]),(0,l.useEffect)(()=>{N(null!=e?e:y)},[e,y]);let M=(0,l.useMemo)(()=>({theme:y,setTheme:L,forcedTheme:e,resolvedTheme:"system"===y?j:y,themes:r?[...d,"system"]:d,systemTheme:r?j:void 0}),[y,L,e,j,r,d]);return l.createElement(o.Provider,{value:M},l.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:i,storageKey:n,themes:d,defaultTheme:c,attribute:x,value:b,children:g,attrs:w,nonce:f}),g)},m=(0,l.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:i,enableColorScheme:o,defaultTheme:n,value:d,attrs:c,nonce:h})=>{let x="system"===n,m="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,p=o?a.includes(n)&&n?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${n}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",C=(e,t=!1,l=!0)=>{let s=d?d[e]:e,i=t?e+"|| ''":`'${s}'`,n="";return o&&l&&!t&&a.includes(e)&&(n+=`d.style.colorScheme = '${e}';`),"class"===r?n+=t||s?`c.add(${i})`:"null":s&&(n+=`d[s](n,${i})`),n},u=e?`!function(){${m}${C(e)}}()`:i?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${x})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${C("dark")}}else{${C("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${C(d?"x[e]":"e",!0)}}${x?"":"else{"+C(n,!1,!1)+"}"}${p}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${C(d?"x[e]":"e",!0)}}else{${C(n,!1,!1)};}${p}}catch(t){}}();`;return l.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:u}})},()=>!0),p=(e,t)=>{let r;if(!i){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},C=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},u=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var l=r(5601),a=r.n(l)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return n},getImageProps:function(){return o}});let l=r(9920),a=r(497),s=r(8173),i=l._(r(1241));function o(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/mycompany/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let n=s.Image},1767:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var l=r(7437),a=r(1034),s=r.n(a),i=r(6648),o=r(231),n=r.n(o),d=()=>(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{className:"relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24",children:[(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,l.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12",children:(0,l.jsxs)("div",{className:"mb-12 max-w-[360px] lg:mb-16",children:[(0,l.jsxs)(n(),{href:"/",className:"mb-8 inline-block",children:[(0,l.jsx)(i.default,{src:"/images/logo/logo-2.svg",alt:"logo",className:"w-full dark:hidden",width:140,height:30}),(0,l.jsx)(i.default,{src:"/images/logo/logo.svg",alt:"logo",className:"hidden w-full dark:block",width:140,height:30})]}),(0,l.jsx)("p",{className:"mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark",children:"At js-tech1, we craft reliable and innovative digital solutions, ensuring your online presence is robust and impactful. Let's build something great together."}),(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("a",{href:"/","aria-label":"social-link",target:"_blank",rel:"noopener noreferrer",className:"mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:(0,l.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z",fill:"currentColor"})})}),(0,l.jsx)("a",{href:"/","aria-label":"social-link",target:"_blank",rel:"noopener noreferrer",className:"mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:(0,l.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z",fill:"currentColor"})})}),(0,l.jsx)("a",{href:"/","aria-label":"social-link",target:"_blank",rel:"noopener noreferrer",className:"mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:(0,l.jsx)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",className:"fill-current",children:(0,l.jsx)("path",{d:"M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z"})})}),(0,l.jsx)("a",{href:"/","aria-label":"social-link",target:"_blank",rel:"noopener noreferrer",className:"text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:(0,l.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",className:"fill-current",children:(0,l.jsx)("path",{d:"M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z"})})})]})]})}),(0,l.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,l.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,l.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Useful Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/blog",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Blog"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Pricing"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/about",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"About"})})]})]})}),(0,l.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,l.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,l.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Terms"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"TOS"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Privacy Policy"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Refund Policy"})})]})]})}),(0,l.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12",children:(0,l.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,l.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Support & Help"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/contact",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Open Support Ticket"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"Terms of Use"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"/about",className:"mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary",children:"About"})})]})]})})]}),(0,l.jsx)("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"}),(0,l.jsx)("div",{className:"py-8",children:(0,l.jsx)("p",{className:"text-center text-base text-body-color dark:text-white",children:"All Rights Reserved By js-tech1"})})]}),(0,l.jsx)("div",{className:"absolute right-0 top-14 z-[-1]",children:(0,l.jsxs)("svg",{width:"55",height:"99",viewBox:"0 0 55 99",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"#959CB1"}),(0,l.jsx)("mask",{id:"mask0_94:899",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"99",height:"99",children:(0,l.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"#4A6CF7"})}),(0,l.jsxs)("g",{mask:"url(#mask0_94:899)",children:[(0,l.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"url(#paint0_radial_94:899)"}),(0,l.jsx)("g",{opacity:"0.8",filter:"url(#filter0_f_94:899)",children:(0,l.jsx)("circle",{cx:"53.8676",cy:"26.2061",r:"20.3824",fill:"white"})})]}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("filter",{id:"filter0_f_94:899",x:"12.4852",y:"-15.1763",width:"82.7646",height:"82.7646",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,l.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,l.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,l.jsx)("feGaussianBlur",{stdDeviation:"10.5",result:"effect1_foregroundBlur_94:899"})]}),(0,l.jsxs)("radialGradient",{id:"paint0_radial_94:899",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(49.5 49.5) rotate(90) scale(53.1397)",children:[(0,l.jsx)("stop",{stopOpacity:"0.47"}),(0,l.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]})}),(0,l.jsx)("div",{className:"absolute bottom-24 left-0 z-[-1]",children:(0,l.jsxs)("svg",{width:"79",height:"94",viewBox:"0 0 79 94",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("rect",{opacity:"0.3",x:"-41",y:"26.9426",width:"66.6675",height:"66.6675",transform:"rotate(-22.9007 -41 26.9426)",fill:"url(#paint0_linear_94:889)"}),(0,l.jsx)("rect",{x:"-41",y:"26.9426",width:"66.6675",height:"66.6675",transform:"rotate(-22.9007 -41 26.9426)",stroke:"url(#paint1_linear_94:889)",strokeWidth:"0.7"}),(0,l.jsx)("path",{opacity:"0.3",d:"M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z",fill:"url(#paint2_linear_94:889)"}),(0,l.jsx)("path",{d:"M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z",stroke:"url(#paint3_linear_94:889)",strokeWidth:"0.7"}),(0,l.jsx)("path",{opacity:"0.3",d:"M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z",fill:"url(#paint4_linear_94:889)"}),(0,l.jsx)("path",{d:"M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z",stroke:"url(#paint5_linear_94:889)",strokeWidth:"0.7"}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("linearGradient",{id:"paint0_linear_94:889",x1:"-41",y1:"21.8445",x2:"36.9671",y2:"59.8878",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,l.jsxs)("linearGradient",{id:"paint1_linear_94:889",x1:"25.6675",y1:"95.9631",x2:"-42.9608",y2:"20.668",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]}),(0,l.jsxs)("linearGradient",{id:"paint2_linear_94:889",x1:"20.325",y1:"-3.98039",x2:"90.6248",y2:"25.1062",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,l.jsxs)("linearGradient",{id:"paint3_linear_94:889",x1:"18.3642",y1:"-1.59742",x2:"113.9",y2:"80.6826",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]}),(0,l.jsxs)("linearGradient",{id:"paint4_linear_94:889",x1:"61.1098",y1:"62.3249",x2:"-8.82468",y2:"58.2156",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,l.jsxs)("linearGradient",{id:"paint5_linear_94:889",x1:"65.4236",y1:"65.0701",x2:"24.0178",y2:"41.6598",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]})]})]})})]})}),c=r(1169),h=r(2265),x=r(5169),m=()=>{let{theme:e,setTheme:t}=(0,x.F)();return(0,l.jsxs)("button",{"aria-label":"theme toggler",onClick:()=>t("dark"===e?"light":"dark"),className:"flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14",children:[(0,l.jsx)("svg",{viewBox:"0 0 23 23",className:"w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6",fill:"none",children:(0,l.jsx)("path",{d:"M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,l.jsxs)("svg",{viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hidden w-5 h-5 dark:block md:h-6 md:w-6",children:[(0,l.jsx)("mask",{id:"path-1-inside-1_977:1934",fill:"white",children:(0,l.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"})}),(0,l.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z",fill:"black",stroke:"white",strokeWidth:"2",mask:"url(#path-1-inside-1_977:1934)"})]})]})},p=[{id:1,title:"Home",path:"/",newTab:!1},{id:2,title:"About",path:"/about",newTab:!1},{id:33,title:"Blog",path:"/blog",newTab:!1},{id:3,title:"Contact",path:"/contact",newTab:!1}],C=()=>{let[e,t]=(0,h.useState)(!1),[r,a]=(0,h.useState)(!1),s=()=>{window.scrollY>=80?a(!0):a(!1)};(0,h.useEffect)(()=>{window.addEventListener("scroll",s)});let[o,d]=(0,h.useState)(-1),x=e=>{o===e?d(-1):d(e)},C=(0,c.usePathname)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("header",{className:"header left-0 top-0 z-40 flex w-full items-center ".concat(r?"fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark":"absolute bg-transparent"),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"relative -mx-4 flex items-center justify-between",children:[(0,l.jsx)("div",{className:"w-60 max-w-full px-4 xl:mr-12",children:(0,l.jsxs)(n(),{href:"/",className:"header-logo block w-full ".concat(r?"py-5 lg:py-2":"py-8"," "),children:[(0,l.jsx)(i.default,{src:"/images/logo/logo-2.svg",alt:"logo",width:140,height:30,className:"w-full dark:hidden"}),(0,l.jsx)(i.default,{src:"/images/logo/logo.svg",alt:"logo",width:140,height:30,className:"hidden w-full dark:block"})]})}),(0,l.jsxs)("div",{className:"flex w-full items-center justify-between px-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("button",{onClick:()=>{t(!e)},id:"navbarToggler","aria-label":"Mobile Menu",className:"absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden",children:[(0,l.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[7px] rotate-45":" ")}),(0,l.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?"opacity-0 ":" ")}),(0,l.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(e?" top-[-8px] -rotate-45":" ")})]}),(0,l.jsx)("nav",{id:"navbarCollapse",className:"navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ".concat(e?"visibility top-full opacity-100":"invisible top-[120%] opacity-0"),children:(0,l.jsx)("ul",{className:"block lg:flex lg:space-x-12",children:p.map((e,t)=>(0,l.jsx)("li",{className:"group relative",children:e.path?(0,l.jsx)(n(),{href:e.path,className:"flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ".concat(C===e.path?"text-primary dark:text-white":"text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"),children:e.title}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("p",{onClick:()=>x(t),className:"flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6",children:[e.title,(0,l.jsx)("span",{className:"pl-3",children:(0,l.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",fill:"currentColor"})})})]}),(0,l.jsx)("div",{className:"submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ".concat(o===t?"block":"hidden"),children:e.submenu.map((e,t)=>(0,l.jsx)(n(),{href:e.path,className:"block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3",children:e.title},t))})]})},t))})})]}),(0,l.jsx)("div",{className:"flex items-center justify-end pr-16 lg:pr-0",children:(0,l.jsx)("div",{children:(0,l.jsx)(m,{})})})]})]})})})})};function u(){let[e,t]=(0,h.useState)(!1);return(0,h.useEffect)(()=>{let e=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,l.jsx)("div",{className:"fixed bottom-8 right-8 z-[99]",children:e&&(0,l.jsx)("div",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"scroll to top",className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp",children:(0,l.jsx)("span",{className:"mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"})})})}function b(e){let{children:t}=e;return(0,l.jsx)(x.f,{attribute:"class",enableSystem:!1,defaultTheme:"dark",children:t})}function g(e){let{children:t}=e;return(0,l.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",children:[(0,l.jsx)("head",{}),(0,l.jsx)("body",{className:"bg-[#FCFCFC] dark:bg-black ".concat(s().className),children:(0,l.jsxs)(b,{children:[(0,l.jsx)(C,{}),t,(0,l.jsx)(d,{}),(0,l.jsx)(u,{})]})})]})}r(1756),r(9714)},1756:function(){},9714:function(){},1034:function(e){e.exports={style:{fontFamily:"'__Inter_324bc9', '__Inter_Fallback_324bc9'",fontStyle:"normal"},className:"__className_324bc9"}}},function(e){e.O(0,[665,231,173,971,23,744],function(){return e(e.s=5655)}),_N_E=e.O()}]);