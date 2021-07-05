(self.webpackChunkchatsubo=self.webpackChunkchatsubo||[]).push([[962],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2834:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(2122),i=r(9756),a=(r(7294),r(3905)),o=["components"],s={},l="Installation",c={unversionedId:"Providers/Docker/installation",id:"Providers/Docker/installation",isDocsHomePage:!1,title:"Installation",description:"L'utilisation de la socket du daemon Docker n\xe9cessite la mise en place de l'authentification TLS. Plus d'informations.",source:"@site/docs/20-Providers/Docker/20-installation.md",sourceDirName:"20-Providers/Docker",slug:"/Providers/Docker/installation",permalink:"/docs/Providers/Docker/installation",editUrl:"https://github.com/chatsuboctf/chatsubo/docs/20-Providers/Docker/20-installation.md",version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instances",permalink:"/docs/Providers/Docker/instances"},next:{title:"Provider",permalink:"/docs/Providers/Proxmox/provider"}},u=[{value:"Les certificats",id:"les-certificats",children:[{value:"G\xe9n\xe9ration",id:"g\xe9n\xe9ration",children:[]},{value:"Plateforme",id:"plateforme",children:[]}]},{value:"Configuration du daemon",id:"configuration-du-daemon",children:[{value:"Certificats",id:"certificats",children:[]},{value:"daemon.json",id:"daemonjson",children:[]}]}],d={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"L'utilisation de la socket du daemon Docker n\xe9cessite la mise en place de l'authentification TLS. ",(0,a.kt)("a",{href:"https://docs.docker.com/engine/security/protect-access/#use-tls-https-to-protect-the-docker-daemon-socket"},"Plus d'informations.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Ce mode d'authentification filtre \xe9galement les requ\xeates en fonction du nom d'h\xf4te utilis\xe9."),(0,a.kt)("p",{parentName:"blockquote"},"Afin d'\xe9viter des soucis de d\xe9tournement de domaine, il est recommand\xe9 d'en utiliser un qui ne puisse pas \xeatre enregistr\xe9 (ie. ",(0,a.kt)("inlineCode",{parentName:"p"},"chatsubo.wz"),") et de modifier le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," sur le serveur h\xe9bergeant la plateforme pour le faire pointer vers l'adresse IP du daemon Docker.")),(0,a.kt)("h2",{id:"les-certificats"},"Les certificats"),(0,a.kt)("h3",{id:"g\xe9n\xe9ration"},"G\xe9n\xe9ration"),(0,a.kt)("p",null,"Le script ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts/docker_cert.sh")," est mis \xe0 disposition afin de simplifier la cr\xe9ation des certificats."),(0,a.kt)("p",null,"Pour l'utiliser, il suffit de configurer la variable d'environnement ",(0,a.kt)("inlineCode",{parentName:"p"},"CERT_HOST")," au nom d'h\xf4te souhait\xe9 puis de lancer le script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CERT_HOST=chatsubo.wz\nbash ./script/docker_cert.sh\n")),(0,a.kt)("p",null,"Il cr\xe9era alors l'autorit\xe9 de certification et les certificats n\xe9cessaires pour le serveur et la plateforme dans le dossier courant. "),(0,a.kt)("p",null,"Le mot de passe de l'autorit\xe9 de certification vous sera demand\xe9 plusieurs fois. C'est \xe0 vous de le choisir la premi\xe8re fois qu'il est demand\xe9."),(0,a.kt)("p",null,"Les m\xe9tadonn\xe9es du certificat (Organization, Country, etc) peuvent \xeatre laiss\xe9es \xe0 leur valeur par d\xe9faut."),(0,a.kt)("h3",{id:"plateforme"},"Plateforme"),(0,a.kt)("p",null,"Une fois g\xe9n\xe9r\xe9s, vous pouvez d\xe9poser les fichiers suivants dans le dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"config/providers/docker/$CERT_HOST")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cert.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ca.pem"))),(0,a.kt)("p",null,"Bien qu'ils puissent se trouver n'importe o\xf9 sur la machine, il est recommand\xe9 de suivre la convention ci-dessus. "),(0,a.kt)("h2",{id:"configuration-du-daemon"},"Configuration du daemon"),(0,a.kt)("p",null,"Maintenant que les certificats ont \xe9t\xe9 g\xe9n\xe9r\xe9s, il faut configurer le daemon Docker sur la machine qui h\xe9bergera les conteneurs."),(0,a.kt)("h3",{id:"certificats"},"Certificats"),(0,a.kt)("p",null,"Tout d'abord, cr\xe9er un dossier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/tls")," sur la machine distante et y d\xe9poser les fichiers suivants :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ca.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-cert.pem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"server-key.pem"))),(0,a.kt)("h3",{id:"daemonjson"},"daemon.json"),(0,a.kt)("p",null,"Ensuite, modifier le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," et s'assurer que les options suivantes soient bien pr\xe9sentes : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "tls": true,\n    "tlscacert": "/etc/docker/tls/ca.pem",\n    "tlscert": "/etc/docker/tls/server-cert.pem",\n    "tlskey": "/etc/docker/tls/server-key.pem",\n    "tlsverify": true,\n    "hosts": ["fd://", "unix:///var/run/docker.sock","tcp://localhost:2376"]\n}\n')),(0,a.kt)("p",null,"Cr\xe9er le fichier avec ces valeurs s'il n'existe pas."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"En cas d'erreur au d\xe9marrage, v\xe9rifier qu'il n'y ait pas de doublons entre les arguments pass\xe9s \xe0 la commande ",(0,a.kt)("em",{parentName:"p"},"ExecStart")," du fichier de service de Docker et ceux renseign\xe9s dans le fichier ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"))),(0,a.kt)("p",null,"Relancer le service Docker ainsi que la socket et surveiller l'apparition d'erreurs potentielles."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart docker.service docker.socket\n\n# V\xe9rifier que le service s'est relanc\xe9 correctement\nsudo journalctl -xefu docker.service\n")),(0,a.kt)("p",null,"Enfin, v\xe9rifier que la configuration est valide en utilisant cette commande depuis la machine h\xe9bergeant Chatsubo et \xe0 la racine du r\xe9pertoire :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://$CERT_HOST:2376/images/json \\\n  --cert "config/providers/docker/$CERT_HOST/cert.pem" \\\n  --key "config/providers/docker/$CERT_HOST/key.pem" \\\n  --cacert "config/providers/docker/$CERT_HOST/ca.pem"\n')),(0,a.kt)("p",null,"La liste des images Docker charg\xe9es sur la machine distante devrait appara\xeetre."))}p.isMDXComponent=!0}}]);