"use strict";(self.webpackChunkdjamaile_dev=self.webpackChunkdjamaile_dev||[]).push([[154],{4676:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(6540),r=n(4625),l=n(4586),o=n(6654),c=n(8193);const s=(0,a.createContext)({collectLink:()=>{}});var i=n(6025),m=n(440);const u=function(e){let{isNavLink:t,to:n,href:u,activeClassName:d,isActive:h,"data-noBrokenLinkCheck":f,autoAddBaseUrl:v=!0,...b}=e;var g;const{siteConfig:{trailingSlash:E,baseUrl:p}}=(0,l.A)(),{withBaseUrl:k}=(0,i.h)(),A=(0,a.useContext)(s),_=n||u,w=(0,o.A)(_),N=null==_?void 0:_.replace("pathname://","");let y=void 0!==N?(C=N,v&&(e=>e.startsWith("/"))(C)?k(C):C):void 0;var C;y&&w&&(y=(0,m.applyTrailingSlash)(y,{trailingSlash:E,baseUrl:p}));const S=(0,a.useRef)(!1),L=t?r.k2:r.N_,T=c.A.canUseIntersectionObserver;let D;(0,a.useEffect)((()=>(!T&&w&&null!=y&&window.docusaurus.prefetch(y),()=>{T&&D&&D.disconnect()})),[y,T,w]);const I=null!==(g=null==y?void 0:y.startsWith("#"))&&void 0!==g&&g,B=!y||!w||I;return y&&w&&!I&&!f&&A.collectLink(y),B?a.createElement("a",{href:y,..._&&!w&&{target:"_blank",rel:"noopener noreferrer"},...b}):a.createElement(L,{...b,onMouseEnter:()=>{S.current||null==y||(window.docusaurus.preload(y),S.current=!0)},innerRef:e=>{var t,n;T&&e&&w&&(t=e,n=()=>{null!=y&&window.docusaurus.prefetch(y)},D=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.unobserve(t),D.disconnect(),n())}))})),D.observe(t))},to:y||"",...t&&{isActive:h,activeClassName:d}})}},418:(e,t,n)=>{n.d(t,{A:()=>a});const a=()=>null},6654:(e,t,n)=>{function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{A:()=>r,z:()=>a})},6025:(e,t,n)=>{n.d(t,{A:()=>o,h:()=>l});var a=n(4586),r=n(6654);function l(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,a.A)();return{withBaseUrl:(n,a)=>function(e,t,n,a){let{forcePrependBaseUrl:l=!1,absolute:o=!1}=void 0===a?{}:a;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.z)(n))return n;if(l)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,a)}}function o(e,t){void 0===t&&(t={});const{withBaseUrl:n}=l();return n(e,t)}},6359:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540);const r="iconExternalLink_3J9K",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},1154:(e,t,n)=>{n.d(t,{A:()=>we});var a=n(6540),r=n(53),l=n(4180),o=n(4798),c=n(9777);const s="skipToContent_1oUP";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.W6)();return(0,c.$G)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.A,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(8168);function d(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_3WsW",f="announcementBarPlaceholder_2m9F",v="announcementBarClose_38nx",b="announcementBarContent_3EUC";const g=function(){const{isClosed:e,close:t}=(0,c.Mj)(),{announcementBar:n}=(0,c.pN)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:f}),a.createElement("div",{className:b,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.A)("clean-btn close",v),onClick:t,"aria-label":(0,o.T)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(418),p=n(2303);const k={toggle:"toggle_71bT"},A=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.A)(k.toggle,k.dark),style:n},t)},_=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.A)(k.toggle,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.A)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{"Enter"===e.key&&d.current?.click()}}))}));function N(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.pN)(),o=(0,p.A)();return a.createElement(w,(0,u.A)({disabled:!o,icons:{checked:a.createElement(A,{icon:t,style:n}),unchecked:a.createElement(_,{icon:r,style:l})}},e))}var y=n(4785),C=n(8193);const S=()=>C.A.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,L=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(S()),r=()=>{const t=S();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)},T=e=>{const t=(0,l.zy)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return L(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.$G)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])},I={desktop:"desktop",mobile:"mobile",ssr:"ssr"},B=996;function x(){return C.A.canUseDOM?window.innerWidth>B?I.desktop:I.mobile:I.ssr}const M=function(){const[e,t]=(0,a.useState)((()=>x()));return(0,a.useEffect)((()=>{function e(){t(x())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e};var U=n(4098),P=n(6897),W=n(4676);const z={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},R=e=>{const t=(0,p.A)(),{isDarkTheme:n}=(0,y.A)(),{sources:l,className:o,alt:c="",...s}=e,i=t?n?["dark"]:["light"]:["light","dark"];return a.createElement(a.Fragment,null,i.map((e=>a.createElement("img",(0,u.A)({key:e,src:l[e],alt:c,className:(0,r.A)(z.themedImage,z[`themedImage--${e}`],o)},s)))))};var $=n(6025),H=n(4586);const V=e=>{const{siteConfig:{title:t}}=(0,H.A)(),{navbar:{title:n,logo:r={src:""}}}=(0,c.pN)(),{imageClassName:l,titleClassName:o,...s}=e,i=(0,$.A)(r.href||"/"),m={light:(0,$.A)(r.src),dark:(0,$.A)(r.srcDark||r.src)};return a.createElement(W.A,(0,u.A)({to:i},s,r.target&&{target:r.target}),r.src&&a.createElement(R,{className:l,sources:m,alt:r.alt||n||t}),null!=n&&a.createElement("b",{className:o},n))},O=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function j(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.A)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const K={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_2XuS"},G="right";function q(){return(0,c.pN)().navbar.items}function F(){const{colorMode:{disableSwitch:e}}=(0,c.pN)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,y.A)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function Q(e){let{sidebarShown:t,toggleSidebar:n}=e;D(t);const l=q(),s=F(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.Ko)()?.({toggleSidebar:n}),l=(0,c.ZC)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(V,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(N,{className:K.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(j,{width:20,height:20,className:K.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.A)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(P.A,(0,u.A)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.A,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const Y=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.pN)(),n=function(){const e=M(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.$Z)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=F(),o=(0,U.vT)(),{navbarRef:s,isNavbarVisible:i}=T(e),m=q(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:f}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??G))),rightItems:e.filter((e=>"right"===(e.position??G)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.A)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[K.navbarHideable]:e,[K.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(O,null)),a.createElement(V,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(P.A,(0,u.A)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},f.map(((e,t)=>a.createElement(P.A,(0,u.A)({},e,{key:t})))),!l.disabled&&a.createElement(N,{className:K.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.A,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(Q,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var X=n(6654);const Z="footerLogoLink_MyFc";var J=n(6359);function ee(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,$.A)(t),s=(0,$.A)(n,{forcePrependBaseUrl:!0});return a.createElement(W.A,(0,u.A)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,X.A)(n)?a.createElement("span",null,r,a.createElement(J.A,null)):r)}const te=e=>{let{sources:t,alt:n}=e;return a.createElement(R,{className:"footer__logo",alt:n,sources:t})};const ne=function(){const{footer:e}=(0,c.pN)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,$.A)(l.src),dark:(0,$.A)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.A)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(ee,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(W.A,{href:l.href,className:Z},a.createElement(te,{alt:l.alt,sources:o})):a.createElement(te,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},ae=(0,c.Wf)("theme"),re="light",le="dark",oe=e=>e===le?le:re,ce=e=>{(0,c.Wf)("theme").set(oe(e))},se=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.pN)(),[r,l]=(0,a.useState)((e=>C.A.canUseDOM?oe(document.documentElement.getAttribute("data-theme")):oe(e))(e)),o=(0,a.useCallback)((()=>{l(re),ce(re)}),[]),s=(0,a.useCallback)((()=>{l(le),ce(le)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",oe(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=ae.get();null!==e&&l(oe(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?le:re)}))}),[]),{isDarkTheme:r===le,setLightTheme:o,setDarkTheme:s}};var ie=n(493);const me=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=se();return a.createElement(ie.A.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},ue="docusaurus.tab.",de=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.Wf)(`${ue}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c.Eo)().forEach((t=>{if(t.startsWith(ue)){const n=t.substring(15);e[n]=(0,c.Wf)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};var he=n(8555);const fe=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=de();return a.createElement(he.A.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ve(e){let{children:t}=e;return a.createElement(me,null,a.createElement(c.oq,null,a.createElement(fe,null,a.createElement(c.VQ,null,a.createElement(c.pM,null,t)))))}var be=n(2602);function ge(e){let{locale:t,version:n,tag:r}=e;return a.createElement(be.A,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var Ee=n(8139);function pe(){const{i18n:{defaultLocale:e,locales:t}}=(0,H.A)(),n=(0,c.oK)();return a.createElement(be.A,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function ke(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,H.A)(),r=function(){const{siteConfig:{url:e}}=(0,H.A)(),{pathname:t}=(0,l.zy)();return e+(0,$.A)(t)}(),o=t?`${n}${t}`:r;return a.createElement(be.A,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function Ae(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,H.A)(),{metadatas:l,image:o}=(0,c.pN)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,f=(0,$.A)(t),v=(0,c.s$)(s),b=n,g=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(be.A,null,a.createElement("html",{lang:b,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:f}),a.createElement("title",null,v),a.createElement("meta",{property:"og:title",content:v}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(Ee.A,{image:o}),m&&a.createElement(Ee.A,{image:m}),a.createElement(Ee.A,{description:i,keywords:d}),a.createElement(ke,null),a.createElement(pe,null),a.createElement(ge,(0,u.A)({tag:c.Cy,locale:n},h)),a.createElement(be.A,null,l.map(((e,t)=>a.createElement("meta",(0,u.A)({key:`metadata_${t}`},e))))))}const _e=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const we=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return _e(),a.createElement(ve,null,a.createElement(Ae,e),a.createElement(m,null),a.createElement(g,null),a.createElement(Y,null),a.createElement("div",{className:(0,r.A)(c.GN.wrapper.main,l,o)},t),!n&&a.createElement(ne,null))}},3031:(e,t,n)=>{n.d(t,{A:()=>v,k:()=>d});var a=n(8168),r=n(6540),l=n(53),o=n(4676),c=n(6025),s=n(6359),i=n(6654),m=n(6897);const u="dropdown__link--active";function d(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:d,activeClassName:h="",prependBaseUrlToHref:f,...v}=e;const b=(0,c.A)(l),g=(0,c.A)(t),E=(0,c.A)(m,{forcePrependBaseUrl:!0}),p=d&&m&&!(0,i.A)(m),k=h===u;return r.createElement(o.A,(0,a.A)({},m?{href:f?E:m}:{isNavLink:!0,activeClassName:v.className?.includes(h)?"":h,to:b,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}:null},v),p?r.createElement("span",null,d,r.createElement(s.A,k&&{width:12,height:12})):d)}function h(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(d,(0,a.A)({className:(0,l.A)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function f(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.A)({className:(0,l.A)("menu__link",t)},o)))}const v=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?f:h;return r.createElement(o,(0,a.A)({},l,{activeClassName:l.activeClassName??(0,m.S)(t)}))}},8240:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),r=n(6540),l=n(3031),o=n(4098),c=n(53),s=n(6897),i=n(9777),m=n(440);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.zK)(u),{preferredVersion:v}=(0,i.g1)(u),b=(0,o.r7)(u),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,v,b].filter(Boolean)),t),E=(0,s.S)(d.mobile);return r.createElement(l.A,(0,a.A)({exact:!0},d,{className:(0,c.A)(d.className,{[E]:f?.sidebar&&f.sidebar===g.sidebar}),activeClassName:E,label:n??g.id,to:g.path}))}},7754:(e,t,n)=>{n.d(t,{A:()=>u});var a=n(8168),r=n(6540),l=n(3031),o=n(1175),c=n(4098),s=n(9777),i=n(4798);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const v=(0,c.zK)(n),b=(0,c.jh)(n),g=(0,c.r7)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.g1)(n);const k=function(){const e=b.map((e=>{const t=v?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===v?.activeVersion,onClick:()=>{p(e.name)}}}));return[...d,...e,...h]}(),A=v.activeVersion??E??g,_=t&&k?(0,i.T)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):A.label,w=t&&k?void 0:m(A).path;return k.length<=1?r.createElement(l.A,(0,a.A)({},f,{mobile:t,label:_,to:w,isActive:u?()=>!1:void 0})):r.createElement(o.A,(0,a.A)({},f,{mobile:t,label:_,to:w,items:k,isActive:u?()=>!1:void 0}))}},6467:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(8168),r=n(6540),l=n(3031),o=n(4098),c=n(9777);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...m}=e;const u=(0,o.ir)(i),{preferredVersion:d}=(0,c.g1)(i),h=(0,o.r7)(i),f=u??d??h,v=t??f.label,b=n??s(f).path;return r.createElement(l.A,(0,a.A)({},m,{label:v,to:b}))}},1175:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(8168),r=n(6540),l=n(53),o=n(9777),c=n(3031),s=n(6897);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,o.ys)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u(e){let{items:t,position:n,className:o,...m}=e;const u=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]),r.createElement("div",{ref:u,className:(0,l.A)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":h})},r.createElement(c.k,(0,a.A)({className:(0,l.A)("navbar__link",o)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!h))}}),m.children??m.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.A,(0,a.A)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:n}))))))}function d(e){let{items:t,className:n,position:i,...u}=e;const d=(0,o.BH)(),h=m(t,d),{collapsed:f,toggleCollapsed:v,setCollapsed:b}=(0,o.uW)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&b(!h)}),[d,h]),r.createElement("li",{className:(0,l.A)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.k,(0,a.A)({role:"button",className:(0,l.A)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),v()}}),u.children??u.label),r.createElement(o.Nt,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.A,(0,a.A)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const h=function(e){let{mobile:t=!1,...n}=e;const a=t?d:u;return r.createElement(a,n)}},6897:(e,t,n)=>{n.d(t,{A:()=>g,S:()=>b});var a=n(6540),r=n(3031),l=n(1175),o=n(8168);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.A)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(4586),i=n(9777);const m="iconLanguage_3vod";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,s.A)(),v=(0,i.oK)();function b(e){return f[e].label}const g=[...n,...h.map((e=>{const t=`pathname://${v.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:b(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":b(d);return a.createElement(l.A,(0,o.A)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:g}))}var d=n(418);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.A,null)}const f={default:()=>r.A,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.A,docsVersion:()=>n(6467).A,docsVersionDropdown:()=>n(7754).A,doc:()=>n(8240).A},v=e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const b=e=>e?"menu__link--active":"navbar__link--active";function g(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=v(r);return a.createElement(l,n)}},8139:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(6540),r=n(2602),l=n(9777),o=n(6025);function c(e){let{title:t,description:n,keywords:c,image:s,children:i}=e;const m=(0,l.s$)(t),{withBaseUrl:u}=(0,o.h)(),d=s?u(s,{absolute:!0}):void 0;return a.createElement(r.A,null,t&&a.createElement("title",null,m),t&&a.createElement("meta",{property:"og:title",content:m}),n&&a.createElement("meta",{name:"description",content:n}),n&&a.createElement("meta",{property:"og:description",content:n}),c&&a.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&a.createElement("meta",{property:"og:image",content:d}),d&&a.createElement("meta",{name:"twitter:image",content:d}),i)}},493:(e,t,n)=>{n.d(t,{A:()=>a});const a=n(6540).createContext(void 0)},8555:(e,t,n)=>{n.d(t,{A:()=>a});const a=(0,n(6540).createContext)(void 0)},4785:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(6540),r=n(493);const l=function(){const e=(0,a.useContext)(r.A);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},2983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:a}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[r]=e.split(/[#?]/),l="/"===r||r===a?r:(o=r,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(r,l)}},440:function(e,t,n){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(2983);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return a(r).default}});var l=n(5183);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return a(l).default}})},5183:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);