(self.webpackChunkdjamaile_dev=self.webpackChunkdjamaile_dev||[]).push([[531],{5680:(e,t,n)=>{"use strict";n.d(t,{xA:()=>p,yg:()=>y});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9976:(e,t,n)=>{"use strict";n.d(t,{A:()=>M});var r=n(8168),o=n(6540),l=n(2602),a=n(4676),c=n(53);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var i={Prism:n(1258).default,theme:s};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function h(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var f=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=u({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=u({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?u({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),p(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(c))}})),p(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=u({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?u({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),p(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,c=[],s=[c];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,p=t[a],u=n[a][l];if("string"==typeof u?(p=a>0?p:["plain"],i=u):(p=y(p,u.type),u.alias&&(p=y(p,u.alias)),i=u.content),"string"==typeof i){var h=i.split(d),f=h.length;c.push({types:p,content:h[0]});for(var g=1;g<f;g++)m(c),s.push(c=[]),c.push({types:p,content:h[g]})}else a++,t.push(p),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return m(c),s}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);const g=f;var v=n(8426),b=n.n(v);const k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var E=n(4785),j=n(9777);const O=()=>{const{prism:e}=(0,j.pN)(),{isDarkTheme:t}=(0,E.A)(),n=e.theme||k,r=e.darkTheme||n;return t?r:n};var N=n(4798);const T="codeBlockContainer_K1bP",A="codeBlockContent_hGly",x="codeBlockTitle_eoMF",C="codeBlock_23N8",_="copyButton_Ue-o",P="codeBlockLines_39YC",w=/{([\d,-]+)}/,S=["js","jsBlock","jsx","python","html"],L={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},B=["highlight-next-line","highlight-start","highlight-end"],D=function(e){void 0===e&&(e=S);const t=e.map((e=>{const{start:t,end:n}=L[e];return`(?:${t}\\s*(${B.join("|")})\\s*${n})`})).join("|");return new RegExp(`^\\s*(?:${t})\\s*$`)};function $(e){let{children:t,className:n,metastring:l,title:a}=e;const{prism:s}=(0,j.pN)(),[p,u]=(0,o.useState)(!1),[d,m]=(0,o.useState)(!1);(0,o.useEffect)((()=>{m(!0)}),[]);const y=(0,j.wt)(l)||a,h=(0,o.useRef)(null);let f=[];const v=O(),k=Array.isArray(t)?t.join(""):t;if(l&&w.test(l)){const e=l.match(w)[1];f=b()(e).filter((e=>e>0))}let E=n?.replace(/language-/,"");!E&&s.defaultLanguage&&(E=s.defaultLanguage);let S=k.replace(/\n$/,"");if(0===f.length&&void 0!==E){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return D(["js","jsBlock"]);case"jsx":case"tsx":return D(["js","jsBlock","jsx"]);case"html":return D(["js","jsBlock","html"]);case"python":case"py":return D(["python"]);default:return D()}})(E),n=k.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,a=n[o].match(t);if(null!==a){switch(a.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${l},`;break;case"highlight-start":r=l;break;case"highlight-end":e+=`${r}-${l-1},`}n.splice(o,1)}else o+=1}f=b()(e),S=n.join("\n")}const L=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let a=!1;l.rangeCount>0&&(a=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}r.remove(),a&&(l.removeAllRanges(),l.addRange(a)),o&&o.focus()}(S),u(!0),setTimeout((()=>u(!1)),2e3)};return o.createElement(g,(0,r.A)({},i,{key:String(d),theme:v,code:S,language:E}),(e=>{let{className:t,style:n,tokens:l,getLineProps:a,getTokenProps:s}=e;return o.createElement("div",{className:T},y&&o.createElement("div",{style:n,className:x},y),o.createElement("div",{className:(0,c.A)(A,E)},o.createElement("pre",{tabIndex:0,className:(0,c.A)(t,C,"thin-scrollbar"),style:n},o.createElement("code",{className:P},l.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=a({line:e,key:t});return f.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.A)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.A)({key:t},s({token:e,key:t}))))))})))),o.createElement("button",{ref:h,type:"button","aria-label":(0,N.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.A)(_,"clean-btn"),onClick:L},p?o.createElement(N.A,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(N.A,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}const R="anchorWithStickyNavbar_31ik",I="anchorWithHideOnScrollNavbar_3R7-",z=function(e){let{...t}=e;return o.createElement("header",null,o.createElement("h1",(0,r.A)({},t,{id:void 0}),t.children))},F=e=>{return"h1"===e?z:(t=e,function(e){let{id:n,...r}=e;const{navbar:{hideOnScroll:l}}=(0,j.pN)();return n?o.createElement(t,r,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,c.A)("anchor",`anchor__${t}`,{[I]:l,[R]:!l}),id:n}),r.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,N.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,r)});var t},V="details_1VDD";function H(e){let{...t}=e;return o.createElement(j.B_,(0,r.A)({},t,{className:(0,c.A)("alert alert--info",V,t.className)}))}const M={head:e=>{const t=o.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e)));return o.createElement(l.A,e,t)},code:e=>{const{children:t}=e;return(0,o.isValidElement)(t)?t:t.includes("\n")?o.createElement($,e):o.createElement("code",e)},a:e=>o.createElement(a.A,e),pre:e=>{const{children:t}=e;return(0,o.isValidElement)(t)&&(0,o.isValidElement)(t?.props?.children)?t.props.children:o.createElement($,(0,o.isValidElement)(t)?t?.props:{...e})},details:e=>{const t=o.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),l=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(H,(0,r.A)({},e,{summary:n}),l)},h1:F("h1"),h2:F("h2"),h3:F("h3"),h4:F("h4"),h5:F("h5"),h6:F("h6")}},1461:(e,t,n)=>{"use strict";n.d(t,{A:()=>y});var r=n(6540),o=n(53),l=n(9777);function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function c(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((e=>a(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(r))?r:n[n.indexOf(r)-1]??null}return n[n.length-1]}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const i=function(e){const t=(0,r.useRef)(void 0),n=s();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=c({anchorTopOffset:n.current}),a=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===a)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},p="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function m(e){let{toc:t,isChild:n}=e;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:u,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(m,{isChild:!0,toc:e.children}))))):null}const y=function(e){let{toc:t}=e;return i(d),r.createElement("div",{className:(0,o.A)(p,"thin-scrollbar")},r.createElement(m,{toc:t}))}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);