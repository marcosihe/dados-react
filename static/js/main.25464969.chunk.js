(this["webpackJsonpjuego-de-dados"]=this["webpackJsonpjuego-de-dados"]||[]).push([[0],{11:function(e,c,s){e.exports={predictionContainer:"Prediccion_predictionContainer__3q59w",btnContainer:"Prediccion_btnContainer__1hxjY",predictionTitle:"Prediccion_predictionTitle__2NUO2",liOptions:"Prediccion_liOptions__1ZvNS",btnOptions:"Prediccion_btnOptions__1zB7q",selectedButton:"Prediccion_selectedButton__2Rxpm"}},12:function(e,c,s){e.exports={mainRules:"Reglas_mainRules__2sXj4",sectionRules:"Reglas_sectionRules__h8uyu",rulesTitle:"Reglas_rulesTitle__3IxAV",ulRules:"Reglas_ulRules__3fbks",extraSectionRules:"Reglas_extraSectionRules__3jQDf"}},15:function(e,c,s){e.exports={btnContainer:"Inicio_btnContainer__3yHP_",btnPlay:"Inicio_btnPlay__zE8pz",diceContainer:"Inicio_diceContainer__3q3s3"}},16:function(e,c,s){e.exports={spaceBetweenTwoCircles:"DadoSeis_spaceBetweenTwoCircles__1H1Gx"}},17:function(e,c,s){e.exports={spaceBetweenTwoCircles:"DadoCinco_spaceBetweenTwoCircles__1S8v8",centerPosition:"DadoCinco_centerPosition__3BSGZ"}},2:function(e,c,s){e.exports={diceCircle:"Dados_diceCircle__1WPR1",circlesContainer:"Dados_circlesContainer__3Sy9k"}},21:function(e,c,s){e.exports={spaceBetweenTwoCircles:"DadoCuatro_spaceBetweenTwoCircles__1kTDJ"}},22:function(e,c,s){e.exports={centerPosition:"DadoTres_centerPosition__3zJj2",endPosition:"DadoTres_endPosition__3Mz4M"}},29:function(e,c,s){e.exports={endPosition:"DadoDos_endPosition__4ewMP"}},30:function(e,c,s){e.exports={circleContainer:"DadoUno_circleContainer__1MzNH"}},33:function(e,c,s){e.exports={footer:"Footer_footer__3-FUY"}},38:function(e,c,s){},55:function(e,c,s){"use strict";s.r(c);var i=s(1),t=s.n(i),n=s(28),a=s.n(n),r=(s(38),s(14)),l=s(3),o=s(10),j=s(15),d=s.n(j),b=s(16),x=s.n(b),O=s(2),u=s.n(O),h=s(0),m=function(){return Object(h.jsxs)("div",{className:u.a.circlesContainer,children:[Object(h.jsxs)("div",{className:x.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]}),Object(h.jsxs)("div",{className:x.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]}),Object(h.jsxs)("div",{className:x.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]})]})},_=s(17),N=s.n(_),C=function(){return Object(h.jsxs)("div",{className:u.a.circlesContainer,children:[Object(h.jsxs)("div",{className:N.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]}),Object(h.jsx)("div",{className:N.a.centerPosition,children:Object(h.jsx)("div",{className:u.a.diceCircle})}),Object(h.jsxs)("div",{className:N.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]})]})},p=s(21),v=s.n(p),f=function(){return Object(h.jsxs)("div",{className:u.a.circlesContainer,children:[Object(h.jsxs)("div",{className:v.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]}),Object(h.jsxs)("div",{className:v.a.spaceBetweenTwoCircles,children:[Object(h.jsx)("div",{className:u.a.diceCircle}),Object(h.jsx)("div",{className:u.a.diceCircle})]})]})},w=s(22),g=s.n(w),T=function(){return Object(h.jsxs)("div",{className:u.a.circlesContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:u.a.diceCircle})}),Object(h.jsx)("div",{className:g.a.centerPosition,children:Object(h.jsx)("div",{className:u.a.diceCircle})}),Object(h.jsx)("div",{className:g.a.endPosition,children:Object(h.jsx)("div",{className:u.a.diceCircle})})]})},P=s(29),B=s.n(P),R=function(){return Object(h.jsxs)("div",{className:u.a.circlesContainer,children:[Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:u.a.diceCircle})}),Object(h.jsx)("div",{className:B.a.endPosition,children:Object(h.jsx)("div",{className:u.a.diceCircle})})]})},k=s(30),D=s.n(k),S=function(){return Object(h.jsx)("div",{className:D.a.circleContainer,children:Object(h.jsx)("div",{className:u.a.diceCircle})})},H=function(e){var c={1:Object(h.jsx)(S,{}),2:Object(h.jsx)(R,{}),3:Object(h.jsx)(T,{}),4:Object(h.jsx)(f,{}),5:Object(h.jsx)(C,{}),6:Object(h.jsx)(m,{})};return Object(h.jsx)("div",{children:c[e.diceNumber]})},q=t.a.memo(H),y=s(11),z=s.n(y),M=function(e){var c=e.prediction,s=Object(i.useState)(1),t=Object(o.a)(s,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){a(e.chosenNumber)}),[e.chosenNumber]),Object(h.jsx)(i.Fragment,{children:Object(h.jsxs)("section",{className:z.a.predictionContainer,children:[Object(h.jsx)("h3",{className:z.a.predictionTitle,children:"\xbfQu\xe9 n\xfamero saldr\xe1?"}),Object(h.jsx)("ul",{className:z.a.btnContainer,children:[1,2,3,4,5,6].map((function(e,s){return Object(h.jsx)("li",{className:z.a.liOptions,children:n!==s+1?Object(h.jsx)("button",{onClick:c,className:z.a.btnOptions,id:s+1,children:e}):Object(h.jsx)("button",{onClick:c,className:z.a.selectedButton,id:s+1,children:e})},s+1)}))})]})})},L=t.a.memo(M),I=s(31),U=s.n(I),E=function(e){return Object(h.jsx)(i.Fragment,{children:void U.a.fire("\xa1Ganaste! =D","Al parecer el ".concat(e.chosenNumber," es tu n\xfamero de la suerte =)"),"success")})},J=function(){var e=Object(i.useState)(1),c=Object(o.a)(e,2),s=c[0],t=c[1],n=Object(i.useState)(!1),a=Object(o.a)(n,2),r=a[0],l=a[1],j=Object(i.useState)(null),b=Object(o.a)(j,2),x=b[0],O=b[1],u=Object(i.useState)(!1),m=Object(o.a)(u,2),_=m[0],N=m[1],C=Object(i.useCallback)((function(e){e.preventDefault(),O(parseInt(e.target.id)),N(!1),l(!1)}),[]);return r&&x===s&&(l(!1),N(!0)),Object(h.jsxs)("main",{children:[Object(h.jsx)("section",{className:d.a.btnContainer,children:Object(h.jsx)("button",{className:d.a.btnPlay,onClick:function(e){e.preventDefault(),t(Math.floor(6*Math.random()+1)),l(!0)},children:"\xa1Lanzar dado!"})}),Object(h.jsx)("section",{className:d.a.diceContainer,children:Object(h.jsx)(q,{diceNumber:s})}),Object(h.jsx)("section",{className:d.a.btnContainer,children:Object(h.jsx)(L,{prediction:C,chosenNumber:x})}),Object(h.jsx)("section",{children:_?Object(h.jsx)(E,{showAlert:_,chosenNumber:x}):null})]})},F=s(12),A=s.n(F),G=function(){return Object(h.jsxs)("main",{className:A.a.mainRules,children:[Object(h.jsxs)("section",{className:A.a.sectionRules,children:[Object(h.jsx)("h2",{className:A.a.rulesTitle,children:"Reglas"}),Object(h.jsxs)("ul",{className:A.a.ulRules,children:[Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"Elije un n\xfamero del recuadro inferior que contiene los n\xfameros del 1 al 6, haciendo click en cualquiera de ellos."}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"Una vez que hayas elegido tu n\xfamero, presiona el bot\xf3n de 'Lanzar dados' y listo!"}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"Si el n\xfamero que elegiste coincide con el n\xfamero del dado entonces ganaste !"}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"Si no hay coincidencia podes seguir intentando, eligiendo otro n\xfamero o el mismo n\xfamero."}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{}),Object(h.jsx)("li",{children:"Si no quieres cambiar la elecci\xf3n de tu n\xfamero, no hacer falta que vuelvas a hacer click en el bot\xf3n correspondiente al mismo, simplemente lanza los dados nuvamente."}),Object(h.jsx)("br",{}),Object(h.jsx)("hr",{}),Object(h.jsx)("br",{})]})]}),Object(h.jsx)("section",{className:A.a.extraSectionRules})]})},Y=s(8),Q=s.n(Y),V=function(){return Object(h.jsxs)("header",{children:[Object(h.jsxs)("section",{children:[Object(h.jsx)("h3",{className:Q.a.headerTitle,children:"Flex-Dados"}),Object(h.jsxs)("div",{className:Q.a.logoBox,children:[Object(h.jsx)("span",{className:Q.a.mLetter,children:"M"}),Object(h.jsx)("span",{className:Q.a.hLetter,children:"H"})]})]}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{className:Q.a.navigationUl,children:[Object(h.jsx)(r.b,{className:Q.a.link,to:"/",children:"Jugar"}),Object(h.jsx)(r.b,{className:Q.a.link,to:"/reglas",children:"Reglas"})]})})]})},Z=s(33),K=s.n(Z),W=function(){return Object(h.jsxs)("footer",{className:K.a.footer,children:[Object(h.jsx)("p",{children:"\xa9 Todos los derechos reservados"}),Object(h.jsx)("p",{children:"Marcos Ezequiel Herrera"})]})},X=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Error 404"}),Object(h.jsx)("p",{children:"P\xe1gina no encontrada"})]})};var $=function(){return Object(h.jsxs)(r.a,{children:[Object(h.jsx)(V,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(J,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/reglas",children:Object(h.jsx)(G,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/*",children:Object(h.jsx)(X,{})})]}),Object(h.jsx)(W,{})]})};a.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)($,{})}),document.getElementById("root"))},8:function(e,c,s){e.exports={headerTitle:"Header_headerTitle__1kJ9Y",logoBox:"Header_logoBox__11f3f",mLetter:"Header_mLetter__3guI-",hLetter:"Header_hLetter__2KA42",navigationUl:"Header_navigationUl__h5kjH",link:"Header_link__1y3qV"}}},[[55,1,2]]]);
//# sourceMappingURL=main.25464969.chunk.js.map