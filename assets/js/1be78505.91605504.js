(self.webpackChunkchatsubo=self.webpackChunkchatsubo||[]).push([[514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2493:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ee}});var a=n(7294),r=n(3905),o=n(2263),i=n(6291),l=n(6016),c=n(2122),s=n(9756),u=n(6010),d=n(9306),p=n(1839),m=n(3783),h=n(7898),b=n(6742),f=n(3919),y=n(5537),g=function(e){return a.createElement("svg",(0,c.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},v=n(4478),k=n(8617),E=n(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",_="sidebarLogo_3h0W",S="menu_Bmed",j="menuLinkText_2aKo",T="menuWithAnnouncementBar_2WvA",O="collapseSidebarButton_1CGd",x="collapseSidebarButtonIcon_3E-R",I="sidebarMenuIcon_fgN0",P="sidebarMenuCloseIcon_1lpH",w=["items"],L=["item","onItemClick","collapsible","activePath"],B=["item","onItemClick","activePath","collapsible"],A=function e(t,n){return"link"===t.type?(0,d.Mg)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))},D=(0,a.memo)((function(e){var t=e.items,n=(0,s.Z)(e,w);return t.map((function(e,t){return a.createElement(R,(0,c.Z)({key:t,item:e},n))}))}));function R(e){switch(e.item.type){case"category":return a.createElement(M,e);case"link":default:return a.createElement(W,e)}}function M(e){var t,n=e.item,r=e.onItemClick,o=e.collapsible,i=e.activePath,l=(0,s.Z)(e,L),p=n.items,m=n.label,h=A(n,i),b=(0,d.D9)(h),f=(0,a.useState)((function(){return!!o&&(!h&&n.collapsed)})),y=f[0],g=f[1],v=(0,a.useRef)(null),k=(0,a.useState)(void 0),E=k[0],C=k[1],N=function(e){var t;void 0===e&&(e=!0),C(e?(null==(t=v.current)?void 0:t.scrollHeight)+"px":void 0)};(0,a.useEffect)((function(){h&&!b&&y&&g(!1)}),[h,b,y]);var Z=(0,a.useCallback)((function(e){e.preventDefault(),E||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[E]);return 0===p.length?null:a.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":y})},a.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[j]=!o,t)),onClick:o?Z:void 0,href:o?"#":void 0},l),m),a.createElement("ul",{className:"menu__list",ref:v,style:{height:E},onTransitionEnd:function(){y||N(!1)}},a.createElement(D,{items:p,tabIndex:y?"-1":"0",onItemClick:r,collapsible:o,activePath:i})))}function W(e){var t=e.item,n=e.onItemClick,r=e.activePath,o=(e.collapsible,(0,s.Z)(e,B)),i=t.href,l=t.label,d=A(t,r);return a.createElement("li",{className:"menu__list-item",key:l},a.createElement(b.Z,(0,c.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:i},(0,f.Z)(i)&&{isNavLink:!0,exact:!0,onClick:n},o),(0,f.Z)(i)?l:a.createElement("span",null,l,a.createElement(k.Z,null))))}function H(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,E.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",O),onClick:t},a.createElement(g,{className:x}))}function z(e){var t=e.responsiveSidebarOpened,n=e.onClick;return a.createElement("button",{"aria-label":t?(0,E.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,E.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:n},t?a.createElement("span",{className:(0,u.Z)(I,P)},"\xd7"):a.createElement(v.Z,{className:I,height:24,width:24}))}var F=function(e){var t,n,r=e.path,o=e.sidebar,i=e.sidebarCollapsible,l=void 0===i||i,c=e.onCollapse,s=e.isHidden,b=function(){var e=(0,d.nT)().isClosed,t=(0,a.useState)(!e),n=t[0],r=t[1];return(0,h.Z)((function(t){var n=t.scrollY;e||r(0===n)})),n}(),f=(0,d.LU)(),g=f.navbar.hideOnScroll,v=f.hideableSidebar,k=(0,d.nT)().isClosed,j=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];(0,p.Z)(t);var r=(0,m.Z)();return(0,a.useEffect)((function(){r===m.D.desktop&&n(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,a.useCallback)((function(e){e.target.blur(),n(!1)}),[n]),toggleResponsiveSidebar:(0,a.useCallback)((function(){n((function(e){return!e}))}),[n])}}(),O=j.showResponsiveSidebar,x=j.closeResponsiveSidebar,I=j.toggleResponsiveSidebar;return a.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=g,t[Z]=s,t))},g&&a.createElement(y.Z,{tabIndex:-1,className:_}),a.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",S,(n={"menu--show":O},n[T]=!k&&b,n)),"aria-label":(0,E.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},a.createElement(z,{responsiveSidebarOpened:O,onClick:I}),a.createElement("ul",{className:"menu__list"},a.createElement(D,{items:o,onItemClick:x,collapsible:l,activePath:r}))),v&&a.createElement(H,{onClick:c}))},U={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},$={Prism:n(7410).Z,theme:U};function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var V=/\r\n|\r|\n/,Y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},G=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},X=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=J({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=J({},n,{backgroundColor:null}),r};function q(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var Q=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),K(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?X(e.theme,e.language):void 0;return t.themeDict=n})),K(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=J({},q(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==r&&(o.style=void 0!==o.style?J({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),K(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var i=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),K(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,i=J({},q(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(i.style=void 0!==i.style?J({},i.style,r):r),void 0!==n&&(i.key=n),a&&(i.className+=" "+a),i})),K(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=a[i]++)<r[i];){var s=void 0,u=t[i],d=n[i][o];if("string"==typeof d?(u=i>0?u:["plain"],s=d):(u=G(u,d.type),d.alias&&(u=G(u,d.alias)),s=d.content),"string"==typeof s){var p=s.split(V),m=p.length;l.push({types:u,content:p[0]});for(var h=1;h<m;h++)Y(l),c.push(l=[]),l.push({types:u,content:p[h]})}else i++,t.push(u),n.push(s),a.push(0),r.push(s.length)}i--,t.pop(),n.pop(),a.pop(),r.pop()}return Y(l),c}(void 0!==i?this.tokenize(t,a,i,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);var ee=n(7594),te=n.n(ee),ne={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},ae=n(5350),re=function(){var e=(0,d.LU)().prism,t=(0,ae.Z)().isDarkTheme,n=e.theme||ne,a=e.darkTheme||n;return t?a:n},oe="codeBlockContainer_K1bP",ie="codeBlockContent_hGly",le="codeBlockTitle_eoMF",ce="codeBlock_23N8",se="codeBlockWithTitle_2JqI",ue="copyButton_Ue-o",de="codeBlockLines_39YC",pe=/{([\d,-]+)}/,me=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")};function he(e){var t=e.children,n=e.className,r=e.metastring,o=e.title,i=(0,d.LU)().prism,l=(0,a.useState)(!1),s=l[0],p=l[1],m=(0,a.useState)(!1),h=m[0],b=m[1];(0,a.useEffect)((function(){b(!0)}),[]);var f=(0,d.bc)(r)||o,y=(0,a.useRef)(null),g=[],v=re(),k=Array.isArray(t)?t.join(""):t;if(r&&pe.test(r)){var C=r.match(pe)[1];g=te()(C).filter((function(e){return e>0}))}var N=n&&n.replace(/language-/,"");!N&&i.defaultLanguage&&(N=i.defaultLanguage);var Z=k.replace(/\n$/,"");if(0===g.length&&void 0!==N){for(var _,S="",j=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return me(["js","jsBlock"]);case"jsx":case"tsx":return me(["js","jsBlock","jsx"]);case"html":return me(["js","jsBlock","html"]);case"python":case"py":return me(["python"]);default:return me()}}(N),T=k.replace(/\n$/,"").split("\n"),O=0;O<T.length;){var x=O+1,I=T[O].match(j);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":S+=x+",";break;case"highlight-start":_=x;break;case"highlight-end":S+=_+"-"+(x-1)+","}T.splice(O,1)}else O+=1}g=te()(S),Z=T.join("\n")}var P=function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var i=document.getSelection(),l=!1;i.rangeCount>0&&(l=i.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}r.remove(),l&&(i.removeAllRanges(),i.addRange(l)),o&&o.focus()}(Z),p(!0),setTimeout((function(){return p(!1)}),2e3)};return a.createElement(Q,(0,c.Z)({},$,{key:String(h),theme:v,code:Z,language:N}),(function(e){var t,n=e.className,r=e.style,o=e.tokens,i=e.getLineProps,l=e.getTokenProps;return a.createElement("div",{className:oe},f&&a.createElement("div",{style:r,className:le},f),a.createElement("div",{className:(0,u.Z)(ie,N)},a.createElement("pre",{tabIndex:0,className:(0,u.Z)(n,ce,"thin-scrollbar",(t={},t[se]=f,t)),style:r},a.createElement("code",{className:de},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return g.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),a.createElement("span",(0,c.Z)({key:t},n),e.map((function(e,t){return a.createElement("span",(0,c.Z)({key:t},l({token:e,key:t})))})))})))),a.createElement("button",{ref:y,type:"button","aria-label":(0,E.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,u.Z)(ue,"clean-btn"),onClick:P},s?a.createElement(E.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):a.createElement(E.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var be=n(6159),fe={code:function(e){var t=e.children;return(0,a.isValidElement)(t)?t:t.includes("\n")?a.createElement(he,e):a.createElement("code",e)},a:function(e){return a.createElement(b.Z,e)},pre:function(e){var t,n=e.children;return(0,a.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?null==n?void 0:n.props.children:a.createElement(he,(0,a.isValidElement)(n)?null==n?void 0:n.props:{children:n})},h1:(0,be.Z)("h1"),h2:(0,be.Z)("h2"),h3:(0,be.Z)("h3"),h4:(0,be.Z)("h4"),h5:(0,be.Z)("h5"),h6:(0,be.Z)("h6")},ye=n(4608),ge=n(5977),ve={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function ke(e){var t,n,i,c,s,p=e.currentDocRoute,m=e.versionMetadata,h=e.children,b=(0,o.Z)(),f=b.siteConfig,y=b.isClient,v=m.pluginId,k=m.version,C=function(e){var t,n=e.versionMetadata,a=e.currentDocRoute,r=n.permalinkToSidebar,o=n.docsSidebars,i=r[a.path]||r[(t=a.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];return{sidebar:o[i],sidebarName:i}}({versionMetadata:m,currentDocRoute:p}),N=C.sidebarName,Z=C.sidebar,_=(0,a.useState)(!1),S=_[0],j=_[1],T=(0,a.useState)(!1),O=T[0],x=T[1],I=(0,a.useCallback)((function(){O&&x(!1),j(!S)}),[O]);return a.createElement(l.Z,{key:y,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:k,tag:(0,d.os)(v,k)}},a.createElement("div",{className:ve.docPage},Z&&a.createElement("aside",{className:(0,u.Z)(ve.docSidebarContainer,(t={},t[ve.docSidebarContainerHidden]=S,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve.docSidebarContainer)&&S&&x(!0)}},a.createElement(F,{key:N,sidebar:Z,path:p.path,sidebarCollapsible:null==(n=null==(i=f.themeConfig)?void 0:i.sidebarCollapsible)||n,onCollapse:I,isHidden:O}),O&&a.createElement("div",{className:ve.collapsedDocSidebar,title:(0,E.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,E.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:I,onClick:I},a.createElement(g,{className:ve.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,u.Z)(ve.docMainContainer,(c={},c[ve.docMainContainerEnhanced]=S||!Z,c))},a.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",ve.docItemWrapper,(s={},s[ve.docItemWrapperEnhanced]=S,s))},a.createElement(r.Zo,{components:fe},h)))))}var Ee=function(e){var t=e.route.routes,n=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,ge.LX)(r.pathname,e)}));return o?a.createElement(ke,{currentDocRoute:o,versionMetadata:n},(0,i.Z)(t,{versionMetadata:n})):a.createElement(ye.default,e)}},6159:function(e,t,n){"use strict";n.d(t,{N:function(){return p},Z:function(){return m}});var a=n(9756),r=n(2122),o=n(7294),i=n(6010),l=n(4973),c=n(9306),s="enhancedAnchor_2LWZ",u="h1Heading_27L5",d=["id"],p=function(e){var t=Object.assign({},e);return o.createElement("header",null,o.createElement("h1",(0,r.Z)({},t,{id:void 0,className:u}),t.children))},m=function(e){return"h1"===e?p:(t=e,function(e){var n,r=e.id,u=(0,a.Z)(e,d),p=(0,c.LU)().navbar.hideOnScroll;return r?o.createElement(t,u,o.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",(n={},n[s]=!p,n)),id:r}),u.children,o.createElement("a",{className:"hash-link",href:"#"+r,title:(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.createElement(t,u)});var t}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);