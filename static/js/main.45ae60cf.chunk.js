(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{314:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(86),i=t.n(o),l=t(8),c=t(9),s=t(6),m=t(87),d=t.n(m),u=t(52);function f(){var n=Object(l.a)(["\n  width:5rem;\n  height:5rem;\n  background-color:transparent;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-evenly;\n  align-items:flex-start;\n  z-index:1000;\n  cursor:pointer;\n  div{\n    z-index:1000;\n    width:80%;\n    height: .3rem;\n    background-color:var(--main-color);\n    border-radius:50px;\n  }\n  div:first-of-type{\n    /* position:",";\n    top:","; */\n    transform:",";\n    transform-origin:top left;\n    transition: transform .4s ease-in-out;\n  }\n\n  div:nth-of-type(2){\n    width:40%;\n    transform:",";\n    transition: transform .4s ease-in-out;\n  }\n  div:nth-of-type(3){\n    width:65%;\n    width:",";\n    /* position:",";\n    bottom:","; */\n    transform:",";\n    transform-origin: bottom left;\n    transition: transform .4s ease-in-out;\n  }\n\n  @media screen and (min-width: 768px) {\n    &{\n      display:none;\n    }\n  }\n\n"]);return f=function(){return n},n}var p=c.b.div(f(),(function(n){return n.clicked&&"relative"}),(function(n){return n.clicked&&"1.4rem"}),(function(n){return n.clicked&&"rotate(45deg)"}),(function(n){return n.clicked&&"translateX(1000%)"}),(function(n){return n.clicked&&"80%"}),(function(n){return n.clicked&&"relative"}),(function(n){return n.clicked&&"1.4rem"}),(function(n){return n.clicked&&"rotate(-45deg)"})),h=function(n){return r.a.createElement(p,{clicked:n.isOpen,onClick:n.open},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))};function b(){var n=Object(l.a)(["\n  position:fixed;\n  top:0;\n  left:0;\n  width:100vw;\n  height:100vh;\n  z-index:400;\n  background-color:rgba(0,0,0,.7);\n  transform:translateX(-100%);\n  transform:",";\n  transition:all .4s ease;\n"]);return b=function(){return n},n}var v=c.b.div(b(),(function(n){return n.isOpen&&"translateX(0%)"})),g=function(n){return r.a.createElement(v,{isOpen:n.isOpen,onClick:n.close})},y=t(15),E=t(12);function x(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 70%;\n  height: 100%;\n  z-index: 500;\n  background-color: var(--main-bg);\n  transform: translateX(100%);\n  transform: ",";\n  transition: transform 0.4s ease;\n  nav {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    ul {\n      width: 100%;\n      height: 50%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: center;\n      li {\n        a {\n          font-size: 3rem;\n          font-weight: 600;\n        }\n      }\n    }\n  }\n  @media screen and (min-width: 768px) {\n    & {\n      display: none;\n    }\n  }\n"]);return x=function(){return n},n}var w=c.b.div(x(),(function(n){return n.isOpen&&"translateX(0)"})),k={open:{opacity:1,x:0,rotation:.02},closed:{opacity:0,x:"100%",rotation:.02}},z=function(n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{close:n.close,isOpen:n.isOpen}),r.a.createElement(w,{isOpen:n.isOpen},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(y.b.li,{animate:n.isOpen?"open":"closed",transition:{delay:.1,type:"spring",stiffness:50},variants:k},r.a.createElement(E.c,{to:"/portfolio/about",onClick:n.close},"About Me")),r.a.createElement(y.b.li,{animate:n.isOpen?"open":"closed",transition:{delay:.2,type:"spring",stiffness:50},variants:k},r.a.createElement(E.c,{to:"/portfolio/projects",onClick:n.close},"Projects")),r.a.createElement(y.b.li,{animate:n.isOpen?"open":"closed",transition:{delay:.3,type:"spring",stiffness:50},variants:k},r.a.createElement(E.c,{to:"/portfolio/contact",onClick:n.close},"Contact"))))))};function O(){var n=Object(l.a)(['\n  ul {\n    list-style-type: none;\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  li {\n    padding: 0 3rem;\n  }\n  a {\n    text-decoration: none;\n    font-size: 2.5rem;\n    color: var(--main-color);\n    position: relative;\n  }\n\n  a::before {\n    position: absolute;\n    transform: translateX(-50%);\n    bottom: 0rem;\n    left: 50%;\n    content: "";\n    width: 105%;\n    height: 0.2rem;\n    background-color: var(--second-color);\n    transition: all 0.4s ease;\n  }\n  a:hover::before {\n    height: 100%;\n    z-index: -1;\n  }\n  .active::before {\n    height: 100%;\n    z-index: -1;\n  }\n  @media screen and (max-width: 768px) {\n    ul {\n      display: none;\n    }\n  }\n']);return O=function(){return n},n}function j(){var n=Object(l.a)(["\n  color: var(--main-color);\n  font-size: 2.5rem;\n  .slash{\n    font-size:2rem;\n    font-weight:bold;\n  }\n  span {\n    display: inline-block;\n    color: var(--second-color);\n    font-size: 2rem;\n  }\n  a {\n    color: var(--main-color);\n    text-decoration: none;\n  }\n"]);return j=function(){return n},n}function _(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return _=function(){return n},n}function N(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 140rem;\n  margin: 0 auto;\n  padding: 0 1rem;\n  @media screen and (max-width: 768px) {\n    & {\n      padding: 0 2rem;\n    }\n  }\n"]);return N=function(){return n},n}function C(){var n=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 7rem;\n  z-index: 100;\n  \n\n  @media screen and (max-width: 768px) {\n    & {\n      background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.9));\n      background: -webkit-linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,.9));\n    }\n  }\n"]);return C=function(){return n},n}var F=c.b.header(C()),A=c.b.div(N()),I=c.b.div(_()),X=c.b.div(j()),K=c.b.nav(O()),P=function(){var n=Object(a.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1],i=function(){o((function(n){return!n}))};return r.a.createElement(F,null,r.a.createElement(A,null,r.a.createElement(I,null,r.a.createElement(X,null,r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-less-than"})),r.a.createElement(E.b,{to:"/portfolio/"},"Kasprowicz"),r.a.createElement("span",null,r.a.createElement("span",{className:"slash"},"/"),r.a.createElement("i",{className:"fas fa-greater-than"}))),r.a.createElement(K,null,r.a.createElement(h,{isOpen:t,open:i}),r.a.createElement(z,{close:i,isOpen:t}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.c,{to:"/portfolio/about"},"About Me")),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/portfolio/projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/portfolio/contact"},"Contact")))))))},S=t(91),B=t.n(S),D=t(92),L=t.n(D);function M(){var n=Object(l.a)(['\n  display: flex;\n  align-items: center;\n  position: relative;\n  h1 {\n    font-size: 4rem;\n    color: var(--main-color);\n    @media screen and (max-height: 375px) {\n      margin-top: 5rem;\n    }\n  }\n  h1:nth-of-type(2) {\n    color: var(--second-color);\n    font-size: 3rem;\n    margin-top: 4rem;\n  }\n  .social {\n    @keyframes move {\n      0% {\n        transform: rotate(0deg);\n      }\n      40% {\n        transform: rotate(-20deg);\n      }\n      80% {\n        transform: rotate(20deg);\n      }\n      100% {\n        transform: rotate(0deg);\n      }\n    }\n    padding-top: 5rem;\n    a {\n      text-align: center;\n      position: relative;\n      padding-right: 3rem;\n    }\n    a:hover::before {\n      top: -5rem;\n      position: absolute;\n      color: var(--second-color);\n      font-size: 2rem;\n      width: 100%;\n      height: 100%;\n      animation-name: move;\n      animation-duration: 4s;\n      animation-iteration-count: infinite;\n      font-family: "Long Cang", cursive;\n    }\n    a:first-of-type:hover::before {\n      content: "GITHUB";\n      left: -1.5rem;\n    }\n    a:nth-of-type(2):hover::before {\n      content: "MAIL";\n      left: -1.5rem;\n    }\n    a:nth-of-type(3):hover::before {\n      content: "LINKEDIN";\n      left: -3rem;\n    }\n    a:nth-of-type(4):hover::before {\n      content: "CV";\n      left: -2rem;\n    }\n    i {\n      color: var(--main-color);\n      font-size: 4rem;\n    }\n    i:hover {\n      color: var(--second-color);\n    }\n  }\n  @media screen and (max-width: 768px) {\n    h1:nth-of-type(3) {\n      color: var(--second-color);\n      margin-top: 4rem;\n      font-size: 3rem;\n    }\n  }\n']);return M=function(){return n},n}function T(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n"]);return T=function(){return n},n}function G(){var n=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  max-width: 140rem;\n  margin: 0 auto;\n  padding: 0 1rem;\n  @media screen and (max-width: 768px) {\n    & {\n      padding: 0 2rem;\n    }\n  }\n"]);return G=function(){return n},n}function H(){var n=Object(l.a)(["\n  .particles {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 0;\n  }\n"]);return H=function(){return n},n}var J=c.b.div(H()),W=c.b.div(G()),U=c.b.div(T()),V=Object(c.b)(W)(M()),Y={hidden:{opacity:0,x:"-100%"},visible:{opacity:1,x:"0%"}},$=function(){return r.a.createElement(J,null,r.a.createElement(U,null,r.a.createElement(V,null,r.a.createElement("div",null,r.a.createElement(y.b.h1,{initial:"hidden",variants:Y,animate:"visible",transition:{delay:.2,type:"spring",stiffness:100}},"Tomasz ",r.a.createElement("br",null),"Kasprowicz"),r.a.createElement("h1",{className:"special"},r.a.createElement(B.a,{onInit:function(n){n.typeString("Hello!").pauseFor(1500).deleteAll().typeString("I am a Front-End <br> Developer").start()}})),r.a.createElement("div",{className:"social"},r.a.createElement(y.b.a,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},exit:{opacity:0},href:"https://github.com/tomekxoxo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement(E.b,{to:"/portfolio/contact"},r.a.createElement(y.b.i,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},exit:{opacity:0},className:"fas fa-envelope"})),r.a.createElement(y.b.a,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},exit:{opacity:0},href:"https://www.linkedin.com/in/tomasz-kasprowicz-2b0709187/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement(y.b.a,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},exit:{opacity:0},href:L.a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-file-alt"})))))))};function q(){var n=Object(l.a)(["\nhtml{\n  font-size:10px;\n  font-family:'Playfair Display', serif;\n}\n*{\n  box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\nbody{\n  width: 100vw;\n  min-height:100vh;\n  overflow-x:hidden;\n  background-color:var(--main-bg);\n  .particles {\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index:-1;\n  }\n}\n:root{\n  --main-bg:#252525;\n  --main-color: #FAFAFF;\n  --second-color: #1A9797;\n  --second-font: 'Grandstander', cursive;\n}\n"]);return q=function(){return n},n}var Q=r.a.lazy((function(){return Promise.all([t.e(4),t.e(3)]).then(t.bind(null,342))})),R=r.a.lazy((function(){return t.e(7).then(t.bind(null,346))})),Z=r.a.lazy((function(){return t.e(5).then(t.bind(null,347))})),nn=r.a.lazy((function(){return t.e(6).then(t.bind(null,348))})),en=Object(c.a)(q());var tn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(en,null),r.a.createElement(d.a,{className:"particles",params:{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#fff"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.1,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#fff",opacity:.1,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}}),r.a.createElement(P,null),r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null)},r.a.createElement(y.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/portfolio/",exact:!0,component:$}),r.a.createElement(s.b,{path:"/portfolio/about",component:R}),r.a.createElement(s.b,{path:"/portfolio/projects",exact:!0,component:Z}),r.a.createElement(s.b,{path:"/portfolio/projects/:id",children:r.a.createElement(Q,null)}),r.a.createElement(s.b,{path:"/portfolio/contact",component:nn}),r.a.createElement(s.a,{to:"/portfolio/"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E.a,{basename:"/"},r.a.createElement(tn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},92:function(n,e,t){n.exports=t.p+"static/media/TomaszKasprowicz.fbdebc7a.pdf"},93:function(n,e,t){n.exports=t(314)}},[[93,1,2]]]);
//# sourceMappingURL=main.45ae60cf.chunk.js.map