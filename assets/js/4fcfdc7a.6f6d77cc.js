(self.webpackChunkchatsubo=self.webpackChunkchatsubo||[]).push([[194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},726:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),s=["components"],i={},c="Instances",u={unversionedId:"Providers/Proxmox/instances",id:"Providers/Proxmox/instances",isDocsHomePage:!1,title:"Instances",description:"Toute machine (en cours d'ex\xe9cution ou non) poss\xe9dant au moins un snapshot et les labels chatsubo.template, chatsubo.realm et chatsubo.address dans sa Note sera reconnue comme un template par Chatsubo.",source:"@site/docs/20-Providers/Proxmox/10-instances.md",sourceDirName:"20-Providers/Proxmox",slug:"/Providers/Proxmox/instances",permalink:"/docs/Providers/Proxmox/instances",editUrl:"https://github.com/chatsuboctf/chatsubo/docs/20-Providers/Proxmox/10-instances.md",version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Provider",permalink:"/docs/Providers/Proxmox/provider"},next:{title:"Installation",permalink:"/docs/Providers/Proxmox/installation"}},l=[],p={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"instances"},"Instances"),(0,a.kt)("p",null,"Toute machine (en cours d'ex\xe9cution ou non) poss\xe9dant au moins un snapshot et les labels ",(0,a.kt)("inlineCode",{parentName:"p"},"chatsubo.template"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"chatsubo.realm")," et ",(0,a.kt)("inlineCode",{parentName:"p"},"chatsubo.address")," dans sa ",(0,a.kt)("inlineCode",{parentName:"p"},"Note")," sera reconnue comme un template par Chatsubo."),(0,a.kt)("p",null,"Pour qu'elle soit accessible aux joueurs, il est cependant n\xe9cessaire de renseigner le ",(0,a.kt)("inlineCode",{parentName:"p"},"realm")," auquel l'instance est rattach\xe9e ainsi que l'adresse IP par laquelle la machine est joignable \xe0 travers le pont VPN."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Afin qu'il soit possible de r\xe9initialiser la machine \xe0 son \xe9tat initial \xe0 la demande des joueurs, ",(0,a.kt)("strong",{parentName:"p"},"il est n\xe9cessaire qu'au moins un snapshot soit pr\xe9sent")," pour que l'instance soit d\xe9tect\xe9e par Chatsubo.")),(0,a.kt)("p",null,"Exemple de ",(0,a.kt)("inlineCode",{parentName:"p"},"Note")," valide :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chatsubo.template=lovelace\nchatsubo.realm=wz\nchatsubo.address=192.168.1.21\n")))}m.isMDXComponent=!0}}]);