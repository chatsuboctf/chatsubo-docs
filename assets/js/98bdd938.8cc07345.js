(self.webpackChunkchatsubo=self.webpackChunkchatsubo||[]).push([[716],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8705:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),u=["components"],i={},l="Bienvenue",s={unversionedId:"welcome",id:"welcome",isDocsHomePage:!1,title:"Bienvenue",description:"Chatsubo est une plateforme de CTF ax\xe9e sur l'attaque de machines vuln\xe9rables.",source:"@site/docs/00-welcome.md",sourceDirName:".",slug:"/welcome",permalink:"/docs/welcome",editUrl:"https://github.com/chatsuboctf/chatsubo/docs/00-welcome.md",version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Aper\xe7u",permalink:"/docs/Introduction/index"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bienvenue"},"Bienvenue"),(0,o.kt)("p",null,"Chatsubo est une plateforme de CTF ax\xe9e sur l'attaque de machines vuln\xe9rables."),(0,o.kt)("p",null,"Elle a \xe9t\xe9 cr\xe9\xe9e afin de permettre \xe0 de petites communaut\xe9s d'h\xe9berger des machines vuln\xe9rable et de les rendre accessible \xe0 leur membres."),(0,o.kt)("p",null,"La plateforme propose les fonctionnalit\xe9s suivantes :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pr\xe9-remplissage des informations du challenge depuis ses m\xe9tadonn\xe9es"),(0,o.kt)("li",{parentName:"ul"},"Instance d\xe9di\xe9e \xe0 chaque joueur (Docker uniquement)"),(0,o.kt)("li",{parentName:"ul"},"Flags uniques pour instance (Docker uniquement)"),(0,o.kt)("li",{parentName:"ul"},"G\xe9n\xe9ration al\xe9atoire des identifiants pour un acc\xe8s initial"),(0,o.kt)("li",{parentName:"ul"},"Gestion et distribution des acc\xe8s VPN automatis\xe9es"),(0,o.kt)("li",{parentName:"ul"},"WireGuard et OpenVPN support\xe9s"),(0,o.kt)("li",{parentName:"ul"},"Param\xe9trage du d\xe9but et de la fin de la comp\xe9tition"),(0,o.kt)("li",{parentName:"ul"},"Suivi des tentatives de validations pour chaque joueur"),(0,o.kt)("li",{parentName:"ul"},"Participation seul ou en \xe9quipe"),(0,o.kt)("li",{parentName:"ul"},"Personnalisation des \xe9l\xe9ments graphiques de l'interface"),(0,o.kt)("li",{parentName:"ul"},"... et bien d'autres choses")),(0,o.kt)("p",null,"Il est possible de connecter la plateforme \xe0 des infrastructures non support\xe9es par d\xe9faut via un plugin d\xe9di\xe9."),(0,o.kt)("p",null,"Aujourd'hui, Chatsubo supporte les infrastructures bas\xe9es sur ",(0,o.kt)("strong",{parentName:"p"},"Docker")," et ",(0,o.kt)("strong",{parentName:"p"},"Proxmox"),"."))}m.isMDXComponent=!0}}]);