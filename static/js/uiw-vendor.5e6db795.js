/*! For license information please see uiw-vendor.5e6db795.js.LICENSE.txt */
(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[4382],{9343:function(e,t,o){"use strict";o.d(t,{j:function(){return r}});var n=o(9593),i=o(659),r=function(e){var t=e.theme,o=e.settings,r=e.styles,a={"&":{backgroundColor:o.background,color:o.foreground},".cm-gutters":{}};o.gutterBackground&&(a[".cm-gutters"].backgroundColor=o.gutterBackground),o.gutterForeground&&(a[".cm-gutters"].color=o.gutterForeground),o.gutterBorder&&(a[".cm-gutters"].borderRightColor=o.gutterBorder),o.caret&&(a[".cm-content"]={caretColor:o.caret},a[".cm-cursor, .cm-dropCursor"]={borderLeftColor:o.caret}),o.lineHighlight&&(a[".cm-activeLine"]={backgroundColor:o.lineHighlight},a[".cm-activeLineGutter"]={backgroundColor:o.lineHighlight}),o.selection&&(a["&.cm-focused .cm-selectionBackground .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, ::selection"]={backgroundColor:o.selection}),o.selectionMatch&&(a["& .cm-selectionMatch"]={backgroundColor:o.selectionMatch});var s=n.tk.theme(a,{dark:"dark"===t}),c=i.Qf.define(r);return[s,(0,i.nF)(c)]}},6871:function(e){e.exports=function(){"use strict";function e(e,t){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style={position:"absolute",left:"-9999px"},document.body.appendChild(o);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select();var i=!1;try{i=!!document.execCommand("copy")}catch(r){i=!1}document.body.removeChild(o),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(i)}return e}()},2650:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var n=o(9439),i=o(7462),r=o(3366),a=o(5848),s=o(2466),c=["className","prefixCls","element","top","size","strokeWidth","smooth","children"],l={position:"sticky",bottom:15,right:15,visibility:"visible",opacity:0,transition:"visibility 0.3s linear 0s, opacity 0.3s linear 0s",cursor:"pointer",userSelect:"none"},u={display:"block",transform:"rotate(-90deg)"},d={transition:"stroke-dashoffset 0.3s linear 0s"},h={position:"absolute",top:0,display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12},f=document.documentElement;function m(e){void 0===e&&(e={});var t=e,o=t.className,m=t.prefixCls,p=void 0===m?"w-back-to-up":m,g=t.element,v=void 0===g?f:g,y=t.top,b=void 0===y?120:y,C=t.size,k=void 0===C?35:C,w=t.strokeWidth,x=void 0===w?3:w,Z=t.smooth,S=void 0===Z||Z,L=t.children,E=(0,r.Z)(e,c),N=[o,p].filter(Boolean).join(" "),H=Object.assign({},l,E.style,{width:k,height:k,opacity:0===b?1:0,position:v===f?"fixed":"sticky"}),M=(0,a.useRef)(null),A=(0,a.useMemo)((function(){return k/2}),[k]),z=(0,a.useMemo)((function(){return k/2-x/2}),[k,x]),W=(0,a.useMemo)((function(){return Math.PI*z*2}),[z]),B=(0,a.useState)(W),R=(0,n.Z)(B,2),j=R[0],O=R[1],_=function(e){var t=v||f,o=t.clientHeight,n=t.scrollHeight,i=t.scrollTop;O(W-W*(i/(n-o))),M.current&&b>0&&(M.current.style.opacity=i>b?"1":"0")};(0,a.useEffect)((function(){var e=v===f?document:v;return e&&e.addEventListener("scroll",_,{passive:!0}),function(){e&&e.removeEventListener("scroll",_)}}),[v]);return(0,s.jsxs)("div",(0,i.Z)({className:N,ref:M},E,{onClick:function(e){v.scrollTo({top:0,behavior:S?"smooth":"auto"})},style:H,children:[(0,s.jsxs)("svg",{viewBox:"0 0 "+k+" "+k,width:k,height:k,focusable:"false",style:u,children:[(0,s.jsx)("circle",{fill:"rgb(0 0 0 / 75%)",stroke:"rgb(200 200 200 / 85%)",strokeWidth:x,r:z,cx:A,cy:A}),(0,s.jsx)("circle",{fill:"none",stroke:"rgb(0 0 0 / 50%)",strokeWidth:x,r:z,cx:A,cy:A,strokeDasharray:W,strokeDashoffset:j,style:d})]}),L&&(0,s.jsx)("div",{style:h,children:L})]}))}},4412:function(e,t,o){"use strict";o.d(t,{ZP:function(){return C}});var n=o(7462),i=o(3366),r=o(5848),a=o(9439),s=o(1383),c=o(8491),l=o(9593),u=o(9515),d=o(4941),h=o(659),f=o(1435),m=function(e){void 0===e&&(e={});var t=[];!1!==e.closeBracketsKeymap&&(t=t.concat(d.GA)),!1!==e.defaultKeymap&&(t=t.concat(c.wQ)),!1!==e.searchKeymap&&(t=t.concat(u.Lp)),!1!==e.historyKeymap&&(t=t.concat(c.f$)),!1!==e.foldKeymap&&(t=t.concat(h.e7)),!1!==e.completionKeymap&&(t=t.concat(d.B1)),!1!==e.lintKeymap&&(t=t.concat(f.Fv));var o=[];return!1!==e.lineNumbers&&o.push((0,l.Eu)()),!1!==e.highlightActiveLineGutter&&o.push((0,l.HQ)()),!1!==e.highlightSpecialChars&&o.push((0,l.AE)()),!1!==e.history&&o.push((0,c.m8)()),!1!==e.foldGutter&&o.push((0,h.mi)()),!1!==e.drawSelection&&o.push((0,l.Uw)()),!1!==e.dropCursor&&o.push((0,l.qr)()),!1!==e.allowMultipleSelections&&o.push(s.yy.allowMultipleSelections.of(!0)),!1!==e.indentOnInput&&o.push((0,h.nY)()),!1!==e.syntaxHighlighting&&o.push((0,h.nF)(h.R_,{fallback:!0})),!1!==e.bracketMatching&&o.push((0,h.n$)()),!1!==e.closeBrackets&&o.push((0,d.vQ)()),!1!==e.autocompletion&&o.push((0,d.ys)()),!1!==e.rectangularSelection&&o.push((0,l.Zs)()),!1!==e.crosshairCursor&&o.push((0,l.S2)()),!1!==e.highlightActiveLine&&o.push((0,l.ZO)()),!1!==e.highlightSelectionMatches&&o.push((0,u.sW)()),o.concat([l.$f.of(t.flat())]).filter(Boolean)},p=o(8402);function g(e){var t=e.value,o=e.selection,n=e.onChange,i=e.onStatistics,u=e.onCreateEditor,d=e.onUpdate,h=e.extensions,f=void 0===h?[]:h,g=e.autoFocus,v=e.theme,y=void 0===v?"light":v,b=e.height,C=void 0===b?"":b,k=e.minHeight,w=void 0===k?"":k,x=e.maxHeight,Z=void 0===x?"":x,S=e.placeholder,L=void 0===S?"":S,E=e.width,N=void 0===E?"":E,H=e.minWidth,M=void 0===H?"":H,A=e.maxWidth,z=void 0===A?"":A,W=e.editable,B=void 0===W||W,R=e.readOnly,j=void 0!==R&&R,O=e.indentWithTab,_=void 0===O||O,F=e.basicSetup,T=void 0===F||F,P=e.root,I=(0,r.useState)(),K=(0,a.Z)(I,2),D=K[0],U=K[1],$=(0,r.useState)(),G=(0,a.Z)($,2),Q=G[0],q=G[1],V=(0,r.useState)(),Y=(0,a.Z)(V,2),J=Y[0],X=Y[1],ee=l.tk.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),te=l.tk.theme({"&":{height:C,minHeight:w,maxHeight:Z,width:N,minWidth:M,maxWidth:z}}),oe=l.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof n){var t=e.state.doc.toString();n(t,e)}i&&i(function(e){return{line:e.state.doc.lineAt(e.state.selection.main.from),lineCount:e.state.doc.lines,lineBreak:e.state.lineBreak,length:e.state.doc.length,readOnly:e.state.readOnly,tabSize:e.state.tabSize,selection:e.state.selection,selectionAsSingle:e.state.selection.asSingle().main,ranges:e.state.selection.ranges,selectionCode:e.state.sliceDoc(e.state.selection.main.from,e.state.selection.main.to),selections:e.state.selection.ranges.map((function(t){return e.state.sliceDoc(t.from,t.to)})),selectedText:e.state.selection.ranges.some((function(e){return!e.empty}))}}(e))})),ne=[oe,te];switch(_&&ne.unshift(l.$f.of([c.oc])),T&&("boolean"===typeof T?ne.unshift(m()):ne.unshift(m(T))),L&&ne.unshift((0,l.W$)(L)),y){case"light":ne.push(ee);break;case"dark":ne.push(p.vk);break;default:ne.push(y)}return!1===B&&ne.push(l.tk.editable.of(!1)),j&&ne.push(s.yy.readOnly.of(!0)),d&&"function"===typeof d&&ne.push(l.tk.updateListener.of(d)),ne=ne.concat(f),(0,r.useEffect)((function(){if(D&&!J){var e=s.yy.create({doc:t,selection:o,extensions:ne});if(X(e),!Q){var n=new l.tk({state:e,parent:D,root:P});q(n),u&&u(n,e)}}return function(){Q&&(X(void 0),q(void 0))}}),[D,J]),(0,r.useEffect)((function(){return U(e.container)}),[e.container]),(0,r.useEffect)((function(){return function(){Q&&(Q.destroy(),q(void 0))}}),[Q]),(0,r.useEffect)((function(){g&&Q&&Q.focus()}),[g,Q]),(0,r.useEffect)((function(){Q&&Q.dispatch({effects:s.Py.reconfigure.of(ne)})}),[y,f,C,w,Z,N,M,z,L,B,j,_,T,n,d]),(0,r.useEffect)((function(){var e=Q?Q.state.doc.toString():"";Q&&t!==e&&Q.dispatch({changes:{from:0,to:e.length,insert:t||""}})}),[t,Q]),{state:J,setState:X,view:Q,setView:q,container:D,setContainer:U}}var v=o(2466),y=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root"],b=(0,r.forwardRef)((function(e,t){var o=e.className,a=e.value,s=void 0===a?"":a,c=e.selection,l=e.extensions,u=void 0===l?[]:l,d=e.onChange,h=e.onStatistics,f=e.onCreateEditor,m=e.onUpdate,p=e.autoFocus,b=e.theme,C=void 0===b?"light":b,k=e.height,w=e.minHeight,x=e.maxHeight,Z=e.width,S=e.minWidth,L=e.maxWidth,E=e.basicSetup,N=e.placeholder,H=e.indentWithTab,M=e.editable,A=e.readOnly,z=e.root,W=(0,i.Z)(e,y),B=(0,r.useRef)(null),R=g({container:B.current,root:z,value:s,autoFocus:p,theme:C,height:k,minHeight:w,maxHeight:x,width:Z,minWidth:S,maxWidth:L,basicSetup:E,placeholder:N,indentWithTab:H,editable:M,readOnly:A,selection:c,onChange:d,onStatistics:h,onCreateEditor:f,onUpdate:m,extensions:u}),j=R.state,O=R.view,_=R.container;R.setContainer;if((0,r.useImperativeHandle)(t,(function(){return{editor:B.current,state:j,view:O}}),[B,_,j,O]),"string"!==typeof s)throw new Error("value must be typeof string but got "+typeof s);var F="string"===typeof C?"cm-theme-"+C:"cm-theme";return(0,v.jsx)("div",(0,n.Z)({ref:B,className:F+(o?" "+o:"")},W))}));b.displayName="CodeMirror";var C=b},2163:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var n=o(7462),i=o(3366),r=(o(5848),o(3433)),a=o(5671),s=o(3144),c=o(136),l=o(3668),u=o(8737),d=document.createElement("template");d.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';var h=function(e){(0,c.Z)(o,e);var t=(0,l.Z)(o);function o(){var e;return(0,a.Z)(this,o),(e=t.call(this)).right="0",e.shadow=e.attachShadow({mode:"open"}),e.shadow.appendChild(e.ownerDocument.importNode(d.content,!0)),e.update(),e}return(0,s.Z)(o,[{key:"setAttr",value:function(e,t){var o=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?o.lastElementChild.setAttribute("xlink:href",t):/(color|fill)/.test(e.toLocaleLowerCase())?o.firstElementChild.style[e]=t:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?o.style[e]=t:o.setAttribute(e,t)}},{key:"update",value:function(){var e=this;[].concat((0,r.Z)(this.getAttributeNames()),["right"]).forEach((function(t){var o=e.getAttribute(t)||e[t]||"";e.setAttr(t,o)}))}},{key:"attributeChangedCallback",value:function(e,t,o){t!==o&&this.setAttr(e,o)}}],[{key:"observedAttributes",get:function(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}}]),o}((0,u.Z)(HTMLElement));customElements.define("github-corners",h);var f=o(2466),m=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function p(e){var t=e.size,o=void 0===t?80:t,r=e.fixed,a=void 0!==r&&r,s=e.bottom,c=e.zIndex,l=e.style,u=e.bgColor,d=void 0===u?"#151513":u,h=e.color,p=void 0===h?"#fff":h,g=e.position,v=void 0===g?"right":g,y=(0,i.Z)(e,m),b="left"===v?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return s?(b.bottom=0,b.top="initial",b.transform="left"===v?"scale(-1, -1)":"scale(1, -1)"):(b.bottom="initial",b.top=0),(0,f.jsx)("github-corners",(0,n.Z)({target:"__blank",width:o,height:o,href:e.href,position:a?"fixed":"absolute","z-index":c,style:l,fill:d,color:p},b,y))}},2714:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var n=o(3433),i=o(7462),r=o(3366),a=o(5848),s=o(7685),c=o(6442),l=o(3919),u=o(2134),d=o(5033),h=o(8903),f=o(2208),m=o(4775),p=o(997),g={type:"element",tagName:"svg",properties:{className:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",ariaHidden:"true"},children:[{type:"element",tagName:"path",children:[],properties:{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}}]},v=o(6871),y=o.n(v);var b=o(9664),C=function(e){return void 0===e&&(e={}),function(e){(0,b.Vn)(e,(function(e){"element"===e.type&&"code"===e.tagName&&e.data&&e.data.meta&&(e.properties=(0,i.Z)({},e.properties,{"data-meta":String(e.data.meta)}))}))}},k=o(2466),w=["prefixCls","className","source","style","disableCopy","onScroll","onMouseOver","pluginsFilter","rehypeRewrite","warpperElement"],x=a.forwardRef((function(e,t){var o=e.prefixCls,v=void 0===o?"wmde-markdown wmde-markdown-color":o,b=e.className,x=e.source,Z=e.style,S=e.disableCopy,L=void 0!==S&&S,E=e.onScroll,N=e.onMouseOver,H=e.pluginsFilter,M=e.rehypeRewrite,A=e.warpperElement,z=void 0===A?{}:A,W=(0,r.Z)(e,w),B=a.createRef();(0,a.useImperativeHandle)(t,(function(){return(0,i.Z)({},e,{mdp:B})}),[B,e]);var R=(v||"")+" "+(b||""),j=[C,[m.ZP,{ignoreMissing:!0}],d.Z,l.Z,u.Z,f.Z,[p.Z,{rewrite:function(e,t,o){if("element"===e.type&&o&&"root"===o.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.properties=(0,i.Z)({class:"anchor"},n.properties),n.children=[g])}if("element"===e.type&&"pre"===e.tagName&&!L){var r=(0,p.U)(e.children);e.children.push((void 0===(a=r)&&(a=""),{type:"element",tagName:"div",properties:{onClick:function(e){var t=e.currentTarget||e.target;t.classList.add("active"),y()(t.dataset.code,(function(){setTimeout((function(){t.classList.remove("active")}),2e3)}))},"data-code":a,class:"copied"},children:[{type:"element",tagName:"svg",properties:{className:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{className:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}))}var a;M&&M(e,t,o)}}],[h.Z,{properties:"attr"}]].concat((0,n.Z)(W.rehypePlugins||[])),O={allowElement:function(e,t,o){return W.allowElement?W.allowElement(e,t,o):/^[A-Za-z0-9]+$/.test(e.tagName)}},_=[].concat((0,n.Z)(W.remarkPlugins||[]),[c.Z]);return(0,k.jsx)("div",(0,i.Z)({ref:B,onScroll:E,onMouseOver:N},z,{className:R,style:Z,children:(0,k.jsx)(s.D,(0,i.Z)({},W,O,{rehypePlugins:H?H("rehype",j):j,remarkPlugins:H?H("remark",_):_,children:x||""}))}))}))}}]);
//# sourceMappingURL=uiw-vendor.5e6db795.js.map