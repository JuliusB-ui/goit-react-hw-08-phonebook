"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[31],{7031:function(n,t,e){e.r(t),e.d(t,{default:function(){return Tn}});var r=e(2791),a=e(3050),o=e(9439),i="Form_form__e1yzW",s="Form_formField__0BF+h",c="Form_formLabel__alHO0",u="Form_formButton__7mGGM";function l(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var d=e(3433),f=e(1413),p=e(4942),m={data:""},h=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||m},v=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,b=/\n+/g,y=function n(t,e){var r="",a="",o="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":a+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?a+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&o?e+"{"+o+"}":o)+a},x={},Z=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},w=function(n,t,e,r,a){var o=Z(n),i=x[o]||(x[o]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(o));if(!x[i]){var s=o!==n?n:function(n){for(var t,e,r=[{}];t=v.exec(n.replace(g,""));)t[4]?r.shift():t[3]?(e=t[3].replace(b," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(b," ").trim();return r[0]}(n);x[i]=y(a?(0,p.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&x.g?x.g:null;return e&&(x.g=x[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(x[i],t,r,c),i},j=function(n,t,e){return n.reduce((function(n,r,a){var o=t[a];if(o&&o.call){var i=o(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;o=s?"."+s:i&&"object"==typeof i?i.props?"":y(i,""):!1===i?"":i}return n+r+(null==o?"":o)}),"")};function _(n){var t=this||{},e=n.call?n(t.p):n;return w(e.unshift?e.raw?j(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,h(t.target),t.g,t.o,t.k)}_.bind({g:1});var N,C,k,I,z,E,F,A,L,O,S,D,P,T,q,B,K,M,G,U=_.bind({k:1});function H(n,t){var e=this||{};return function(){var r=arguments;function a(o,i){var s=Object.assign({},o),c=s.className||a.className;e.p=Object.assign({theme:C&&C()},s),e.o=/ *go\d+/.test(c),s.className=_.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),k&&u[0]&&k(s),N(u,s)}return t?t(a):a}}var $=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},Q=function(){var n=0;return function(){return(++n).toString()}}(),V=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),W=new Map,J=function(n){if(!W.has(n)){var t=setTimeout((function(){W.delete(n),nn({type:4,toastId:n})}),1e3);W.set(n,t)}},R=function n(t,e){switch(e.type){case 0:return(0,f.Z)((0,f.Z)({},t),{},{toasts:[e.toast].concat((0,d.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=W.get(n);t&&clearTimeout(t)}(e.toast.id),(0,f.Z)((0,f.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,f.Z)((0,f.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var a=e.toastId;return a?J(a):t.toasts.forEach((function(n){J(n.id)})),(0,f.Z)((0,f.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===a||void 0===a?(0,f.Z)((0,f.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,f.Z)((0,f.Z)({},t),{},{toasts:[]}):(0,f.Z)((0,f.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,f.Z)((0,f.Z)({},t),{},{pausedAt:e.time});case 6:var o=e.time-(t.pausedAt||0);return(0,f.Z)((0,f.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,f.Z)((0,f.Z)({},n),{},{pauseDuration:n.pauseDuration+o})}))})}},X=[],Y={toasts:[],pausedAt:void 0},nn=function(n){Y=R(Y,n),X.forEach((function(n){n(Y)}))},tn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,f.Z)((0,f.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||Q()})}(t,n,e);return nn({type:2,toast:r}),r.id}},en=function(n,t){return tn("blank")(n,t)};en.error=tn("error"),en.success=tn("success"),en.loading=tn("loading"),en.custom=tn("custom"),en.dismiss=function(n){nn({type:3,toastId:n})},en.remove=function(n){return nn({type:4,toastId:n})},en.promise=function(n,t,e){var r=en.loading(t.loading,(0,f.Z)((0,f.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return en.success($(t.success,n),(0,f.Z)((0,f.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){en.error($(t.error,n),(0,f.Z)((0,f.Z)({id:r},e),null==e?void 0:e.error))})),n};var rn=U(I||(I=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),an=U(z||(z=l(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),on=U(E||(E=l(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),sn=H("div")(F||(F=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),rn,an,(function(n){return n.secondary||"#fff"}),on),cn=U(A||(A=l(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),un=H("div")(L||(L=l(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),cn),ln=U(O||(O=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),dn=U(S||(S=l(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),fn=H("div")(D||(D=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),ln,dn,(function(n){return n.secondary||"#fff"})),pn=H("div")(P||(P=l(["\n  position: absolute;\n"]))),mn=H("div")(T||(T=l(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),hn=U(q||(q=l(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),vn=H("div")(B||(B=l(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),hn),gn=function(n){var t=n.toast,e=t.icon,a=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?r.createElement(vn,null,e):e:"blank"===a?null:r.createElement(mn,null,r.createElement(un,(0,f.Z)({},o)),"loading"!==a&&r.createElement(pn,null,"error"===a?r.createElement(sn,(0,f.Z)({},o)):r.createElement(fn,(0,f.Z)({},o))))},bn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},yn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},xn=H("div")(K||(K=l(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Zn=H("div")(M||(M=l(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"])));r.memo((function(n){var t=n.toast,e=n.position,a=n.style,i=n.children,s=t.height?function(n,t){var e=n.includes("top")?1:-1,r=V()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[bn(e),yn(e)],a=(0,o.Z)(r,2),i=a[0],s=a[1];return{animation:t?"".concat(U(i)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(U(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},c=r.createElement(gn,{toast:t}),u=r.createElement(Zn,(0,f.Z)({},t.ariaProps),$(t.message,t));return r.createElement(xn,{className:t.className,style:(0,f.Z)((0,f.Z)((0,f.Z)({},s),a),t.style)},"function"==typeof i?i({icon:c,message:u}):r.createElement(r.Fragment,null,c,u))}));!function(n,t,e,r){y.p=t,N=n,C=e,k=r}(r.createElement);_(G||(G=l(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"])));var wn=en,jn=e(4420),_n=e(4683),Nn=e(3634),Cn=e(184),kn=function(){var n=(0,jn.I0)(),t=(0,r.useState)(""),e=(0,o.Z)(t,2),a=e[0],l=e[1],d=(0,r.useState)(""),f=(0,o.Z)(d,2),p=f[0],m=f[1],h=(0,jn.v9)(_n.SN);return(0,Cn.jsxs)("form",{className:i,onSubmit:function(t){if(t.preventDefault(),""!==a.trim()&&""!==p.trim()){var e=h.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}));if(e)wn("".concat(a," is already in contacts!"));else{var r={name:a,number:p};n((0,Nn.uK)(r)),l(""),m("")}}},children:[(0,Cn.jsxs)("label",{className:s,children:[(0,Cn.jsx)("p",{className:c,children:"Name"}),(0,Cn.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.",required:!0,value:a,onChange:function(n){l(n.target.value)}})]}),(0,Cn.jsxs)("label",{className:s,children:[(0,Cn.jsx)("p",{className:c,children:"Number"}),(0,Cn.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:function(n){m(n.target.value)}})]}),(0,Cn.jsx)("button",{className:u,type:"submit",children:"Add Contact"})]})},In={filterInput:"Filter_filterInput__1Cysk"},zn=e(1634),En=function(){var n=(0,jn.I0)();return(0,Cn.jsxs)("div",{className:In.container,children:[(0,Cn.jsx)("p",{children:"Find Contacts by Name"}),(0,Cn.jsx)("input",{className:In.filterInput,type:"text",name:"filter",placeholder:"Search by name",onChange:function(t){n((0,zn.T)(t.target.value))}})]})},Fn="ListItem_listItem__POSh4",An="ListItem_contactName__cUn7K",Ln="ListItem_delBtn__u1Qxy",On=function(n){var t=n.filteredContact,e=(0,jn.I0)();return(0,Cn.jsxs)("li",{className:Fn,children:[(0,Cn.jsxs)("p",{className:An,children:[t.name,":"]}),(0,Cn.jsx)("p",{children:t.number}),(0,Cn.jsx)("button",{className:Ln,onClick:function(){e((0,Nn.GK)(t.id))},children:"Delete"})]})},Sn="List_listUl__6SUy+",Dn=e(3485),Pn=function(){var n=(0,jn.v9)(_n.SN),t=function(n,t){return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}((0,jn.v9)(_n.zK),n);return(0,jn.v9)(_n.Vc)?(0,Cn.jsx)(Dn.a,{}):(0,Cn.jsx)(Cn.Fragment,{children:(0,Cn.jsx)("ul",{className:Sn,children:t.map((function(n){return(0,Cn.jsx)(On,{filteredContact:n},n.id)}))})})},Tn=function(){var n=(0,jn.I0)();return(0,r.useEffect)((function(){n((0,Nn.yF)())}),[n]),(0,Cn.jsxs)(a.B6,{children:[(0,Cn.jsx)(a.ql,{children:(0,Cn.jsx)("title",{children:"Contacts"})}),(0,Cn.jsxs)("div",{children:[(0,Cn.jsx)(kn,{}),(0,Cn.jsx)("h2",{children:"Contacts"}),(0,Cn.jsx)(En,{}),(0,Cn.jsx)(Pn,{})]})]})}}}]);
//# sourceMappingURL=31.f95e604c.chunk.js.map