(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{102:function(e,c,a){"use strict";a.d(c,"a",(function(){return b})),a.d(c,"b",(function(){return j}));var t=a(0),l=a.n(t);function i(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function n(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var c=1;c<arguments.length;c++){var a=null!=arguments[c]?arguments[c]:{};c%2?n(Object(a),!0).forEach((function(c){i(e,c,a[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(a,c))}))}return e}function r(e,c){if(null==e)return{};var a,t,l=function(e,c){if(null==e)return{};var a,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],c.indexOf(a)>=0||(l[a]=e[a]);return l}(e,c);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],c.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),p=function(e){var c=l.a.useContext(s),a=c;return e&&(a="function"==typeof e?e(c):o(o({},c),e)),a},b=function(e){var c=p(e.components);return l.a.createElement(s.Provider,{value:c},e.children)},m={inlineCode:"code",wrapper:function(e){var c=e.children;return l.a.createElement(l.a.Fragment,{},c)}},d=l.a.forwardRef((function(e,c){var a=e.components,t=e.mdxType,i=e.originalType,n=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),b=p(a),d=t,j=b["".concat(n,".").concat(d)]||b[d]||m[d]||i;return a?l.a.createElement(j,o(o({ref:c},s),{},{components:a})):l.a.createElement(j,o({ref:c},s))}));function j(e,c){var a=arguments,t=c&&c.mdxType;if("string"==typeof e||t){var i=a.length,n=new Array(i);n[0]=d;var o={};for(var r in c)hasOwnProperty.call(c,r)&&(o[r]=c[r]);o.originalType=e,o.mdxType="string"==typeof e?e:t,n[1]=o;for(var s=2;s<i;s++)n[s]=a[s];return l.a.createElement.apply(null,n)}return l.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},90:function(e,c,a){"use strict";a.r(c),a.d(c,"frontMatter",(function(){return n})),a.d(c,"metadata",(function(){return o})),a.d(c,"toc",(function(){return r})),a.d(c,"default",(function(){return p}));var t=a(3),l=a(7),i=(a(0),a(102)),n={title:"Commands",sidebar_position:3},o={unversionedId:"reference/commands",id:"reference/commands",isDocsHomePage:!1,title:"Commands",description:"about",source:"@site/docs/reference/commands.md",sourceDirName:"reference",slug:"/reference/commands",permalink:"/scala-cli/docs/reference/commands",editUrl:"https://github.com/VirtuslabRnD/scala-cli/edit/master/website/docs/reference/commands.md",version:"current",sidebarPosition:3,frontMatter:{title:"Commands",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Configuration file",permalink:"/scala-cli/docs/reference/configuration-file"},next:{title:"Dependency format",permalink:"/scala-cli/docs/reference/dependency"}},r=[{value:"<code>about</code>",id:"about",children:[]},{value:"<code>bsp</code>",id:"bsp",children:[]},{value:"<code>clean</code>",id:"clean",children:[]},{value:"<code>compile</code>",id:"compile",children:[]},{value:"<code>directories</code>",id:"directories",children:[]},{value:"<code>export</code>",id:"export",children:[]},{value:"<code>fmt</code>",id:"fmt",children:[]},{value:"<code>install completions</code>",id:"install-completions",children:[]},{value:"<code>browse</code>",id:"browse",children:[]},{value:"<code>console</code>",id:"console",children:[]},{value:"<code>package</code>",id:"package",children:[]},{value:"<code>run</code>",id:"run",children:[]},{value:"<code>setup-ide</code>",id:"setup-ide",children:[]},{value:"<code>test</code>",id:"test",children:[]},{value:"Hidden commands",id:"hidden-commands",children:[{value:"<code>add-path</code>",id:"add-path",children:[]},{value:"<code>bloop exit</code>",id:"bloop-exit",children:[]},{value:"<code>bloop start</code>",id:"bloop-start",children:[]},{value:"<code>install-home</code>",id:"install-home",children:[]}]}],s={toc:r};function p(e){var c=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,a,{components:c,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"about"},Object(i.b)("inlineCode",{parentName:"h2"},"about")),Object(i.b)("p",null,"Print details about this application"),Object(i.b)("h2",{id:"bsp"},Object(i.b)("inlineCode",{parentName:"h2"},"bsp")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(i.b)("h2",{id:"clean"},Object(i.b)("inlineCode",{parentName:"h2"},"clean")),Object(i.b)("p",null,"Clean-up workspace"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(i.b)("h2",{id:"compile"},Object(i.b)("inlineCode",{parentName:"h2"},"compile")),Object(i.b)("p",null,"Compile Scala code"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compile-options"},"compile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#cross-options"},"cross")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(i.b)("h2",{id:"directories"},Object(i.b)("inlineCode",{parentName:"h2"},"directories")),Object(i.b)("h2",{id:"export"},Object(i.b)("inlineCode",{parentName:"h2"},"export")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#export-options"},"export")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#main-class-options"},"main class")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(i.b)("h2",{id:"fmt"},Object(i.b)("inlineCode",{parentName:"h2"},"fmt")),Object(i.b)("p",null,"Format Scala code"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#fmt-options"},"fmt")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(i.b)("h2",{id:"install-completions"},Object(i.b)("inlineCode",{parentName:"h2"},"install completions")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#install-completions-options"},"install completions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(i.b)("h2",{id:"browse"},Object(i.b)("inlineCode",{parentName:"h2"},"browse")),Object(i.b)("p",null,"Aliases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metabrowse"))),Object(i.b)("p",null,"Browse Scala code and its dependencies in the browser"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#metabrowse-options"},"metabrowse")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(i.b)("h2",{id:"console"},Object(i.b)("inlineCode",{parentName:"h2"},"console")),Object(i.b)("p",null,"Aliases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"repl"))),Object(i.b)("p",null,"Fire-up a Scala REPL"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compile-cross-options"},"compile cross")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#repl-options"},"repl")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(i.b)("h2",{id:"package"},Object(i.b)("inlineCode",{parentName:"h2"},"package")),Object(i.b)("p",null,"Compile and package Scala code"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compile-cross-options"},"compile cross")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#main-class-options"},"main class")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#package-options"},"package")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#packager-options"},"packager")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(i.b)("h2",{id:"run"},Object(i.b)("inlineCode",{parentName:"h2"},"run")),Object(i.b)("p",null,"Compile and run Scala code."),Object(i.b)("p",null,"To pass arguments to the application, just add them after '--', like:\nscala-cli MyApp.scala -- first-arg second-arg"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#benchmarking-options"},"benchmarking")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compile-cross-options"},"compile cross")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#main-class-options"},"main class")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(i.b)("h2",{id:"setup-ide"},Object(i.b)("inlineCode",{parentName:"h2"},"setup-ide")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#setup-ide-options"},"setup IDE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared"))),Object(i.b)("h2",{id:"test"},Object(i.b)("inlineCode",{parentName:"h2"},"test")),Object(i.b)("p",null,"Compile and test Scala code"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#dependency-options"},"dependency")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#java-options"},"java")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalajs-options"},"Scala.JS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scala-native-options"},"Scala Native")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#scalac-options"},"scalac")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#shared-options"},"shared")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#test-options"},"test")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#watch-options"},"watch"))),Object(i.b)("h2",{id:"hidden-commands"},"Hidden commands"),Object(i.b)("h3",{id:"add-path"},Object(i.b)("inlineCode",{parentName:"h3"},"add-path")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#add-path-options"},"add path"))),Object(i.b)("h3",{id:"bloop-exit"},Object(i.b)("inlineCode",{parentName:"h3"},"bloop exit")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(i.b)("h3",{id:"bloop-start"},Object(i.b)("inlineCode",{parentName:"h3"},"bloop start")),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#bloop-start-options"},"bloop start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#compilation-server-options"},"compilation server")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#coursier-options"},"coursier")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#jvm-options"},"jvm")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#logging-options"},"logging"))),Object(i.b)("h3",{id:"install-home"},Object(i.b)("inlineCode",{parentName:"h3"},"install-home")),Object(i.b)("p",null,"Install scala-cli in a sub-directory of the home directory"),Object(i.b)("p",null,"Accepts options:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/scala-cli/docs/reference/cli-options#install-home-options"},"install home"))))}p.isMDXComponent=!0}}]);