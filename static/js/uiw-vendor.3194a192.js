/*! For license information please see uiw-vendor.3194a192.js.LICENSE.txt */
(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[4382],{8458:function(e,t,o){"use strict";o.d(t,{AR:function(){return s}});var n=o(5671),i=o(3144),r=o(9593);function a(e){var t=e.type,o=void 0===t?"scroll":t,a=e.events;return r.lg.fromClass(function(){function e(t){var i=this;(0,n.Z)(this,e),this.dom=void 0,this.view=void 0,this.view=t,this.dom="dom"===o?t.dom:"content"===o?t.contentDOM:t.scrollDOM,Object.keys(a||{}).forEach((function(e){a&&a[e]&&i.dom&&i.dom.addEventListener(e,a[e])}))}return(0,i.Z)(e,[{key:"destroy",value:function(){var e=this;Object.keys(a||{}).forEach((function(t){a&&a[t]&&e.dom&&e.dom.removeEventListener(t,a[t])}))}}]),e}())}function s(e){return a({type:"scroll",events:e})}},9343:function(e,t,o){"use strict";o.d(t,{j:function(){return r}});var n=o(9593),i=o(659),r=function(e){var t=e.theme,o=e.settings,r=void 0===o?{}:o,a=e.styles,s=void 0===a?[]:a,c={".cm-gutters":{}},l={};r.background&&(l.backgroundColor=r.background),r.foreground&&(l.color=r.foreground),(r.background||r.foreground)&&(c["&"]=l),r.fontFamily&&(c["&.cm-editor .cm-scroller"]={fontFamily:r.fontFamily}),r.gutterBackground&&(c[".cm-gutters"].backgroundColor=r.gutterBackground),r.gutterForeground&&(c[".cm-gutters"].color=r.gutterForeground),r.gutterBorder&&(c[".cm-gutters"].borderRightColor=r.gutterBorder),r.caret&&(c[".cm-content"]={caretColor:r.caret},c[".cm-cursor, .cm-dropCursor"]={borderLeftColor:r.caret});var u={};r.gutterActiveForeground&&(u.color=r.gutterActiveForeground),r.lineHighlight&&(c[".cm-activeLine"]={backgroundColor:r.lineHighlight},u.backgroundColor=r.lineHighlight),c[".cm-activeLineGutter"]=u,r.selection&&(c["&.cm-focused .cm-selectionBackground, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"]={backgroundColor:r.selection}),r.selectionMatch&&(c["& .cm-selectionMatch"]={backgroundColor:r.selectionMatch});var d=n.tk.theme(c,{dark:"dark"===t}),h=i.Qf.define(s);return[d,(0,i.nF)(h)]}},6871:function(e){e.exports=function(){"use strict";function e(e,t){var o=document.createElement("textarea");o.value=e,o.setAttribute("readonly",""),o.style={position:"absolute",left:"-9999px"},document.body.appendChild(o);var n=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);o.select();var i=!1;try{i=!!document.execCommand("copy")}catch(r){i=!1}document.body.removeChild(o),n&&document.getSelection&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(n)),t&&t(i)}return e}()},2650:function(e,t,o){"use strict";o.d(t,{Z:function(){return m}});var n=o(9439),i=o(7462),r=o(3366),a=o(5848),s=o(2466),c=["className","prefixCls","element","top","size","strokeWidth","smooth","hideProgress","children"],l={position:"sticky",bottom:15,right:15,visibility:"visible",opacity:0,transition:"visibility 0.3s linear 0s, opacity 0.3s linear 0s",cursor:"pointer",userSelect:"none"},u={display:"block",transform:"rotate(-90deg)"},d={transition:"stroke-dashoffset 0.3s linear 0s"},h={position:"absolute",top:0,display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:12},f=document.documentElement;function m(e){void 0===e&&(e={});var t=e,o=t.className,m=t.prefixCls,p=void 0===m?"w-back-to-up":m,v=t.element,g=void 0===v?f:v,y=t.top,b=void 0===y?120:y,k=t.size,C=void 0===k?35:k,w=t.strokeWidth,x=void 0===w?3:w,S=t.smooth,Z=void 0===S||S,E=t.hideProgress,L=void 0!==E&&E,N=t.children,A=(0,r.Z)(e,c),H=(0,a.useRef)(null),M=[o,p].filter(Boolean).join(" "),z=Object.assign({},l,{position:g===f?"fixed":"sticky"},A.style,{width:C,height:C,opacity:0===b?1:0}),W=(0,a.useMemo)((function(){return C/2}),[C]),B=(0,a.useMemo)((function(){return C/2-x/2}),[C,x]),O=(0,a.useMemo)((function(){return Math.PI*B*2}),[B]),j=(0,a.useState)(O||0),R=(0,n.Z)(j,2),F=R[0],_=R[1],T=function(e){var t=g||f,o=t.clientHeight,n=t.scrollHeight,i=t.scrollTop;_(O-O*(i/(n-o))),H.current&&b>0&&(H.current.style.opacity=i>b?"1":"0")};(0,a.useEffect)((function(){var e=g===f?document:g;return e&&e.addEventListener("scroll",T,{passive:!0}),function(){e&&e.removeEventListener("scroll",T)}}),[g]);return(0,s.jsxs)("div",(0,i.Z)({className:M,ref:H},A,{onClick:function(e){g.scrollTo({top:0,behavior:Z?"smooth":"auto"})},style:z,children:[!L&&(0,s.jsxs)("svg",{viewBox:"0 0 "+C+" "+C,width:C,height:C,focusable:"false",style:u,children:[(0,s.jsx)("circle",{fill:"rgb(0 0 0 / 75%)",stroke:"rgb(200 200 200 / 85%)",strokeWidth:x,r:B,cx:W,cy:W}),(0,s.jsx)("circle",{fill:"none",stroke:"rgb(0 0 0 / 50%)",strokeWidth:x,r:B,cx:W,cy:W,strokeDasharray:O,strokeDashoffset:F,style:d})]}),N&&(0,s.jsx)("div",{style:h,children:N})]}))}},4412:function(e,t,o){"use strict";o.d(t,{ZP:function(){return C}});var n=o(7462),i=o(3366),r=o(5848),a=o(9439),s=o(1383),c=o(8491),l=o(9593),u=o(9515),d=o(4941),h=o(659),f=o(1435),m=function(e){void 0===e&&(e={});var t=[];!1!==e.closeBracketsKeymap&&(t=t.concat(d.GA)),!1!==e.defaultKeymap&&(t=t.concat(c.wQ)),!1!==e.searchKeymap&&(t=t.concat(u.Lp)),!1!==e.historyKeymap&&(t=t.concat(c.f$)),!1!==e.foldKeymap&&(t=t.concat(h.e7)),!1!==e.completionKeymap&&(t=t.concat(d.B1)),!1!==e.lintKeymap&&(t=t.concat(f.Fv));var o=[];return!1!==e.lineNumbers&&o.push((0,l.Eu)()),!1!==e.highlightActiveLineGutter&&o.push((0,l.HQ)()),!1!==e.highlightSpecialChars&&o.push((0,l.AE)()),!1!==e.history&&o.push((0,c.m8)()),!1!==e.foldGutter&&o.push((0,h.mi)()),!1!==e.drawSelection&&o.push((0,l.Uw)()),!1!==e.dropCursor&&o.push((0,l.qr)()),!1!==e.allowMultipleSelections&&o.push(s.yy.allowMultipleSelections.of(!0)),!1!==e.indentOnInput&&o.push((0,h.nY)()),!1!==e.syntaxHighlighting&&o.push((0,h.nF)(h.R_,{fallback:!0})),!1!==e.bracketMatching&&o.push((0,h.n$)()),!1!==e.closeBrackets&&o.push((0,d.vQ)()),!1!==e.autocompletion&&o.push((0,d.ys)()),!1!==e.rectangularSelection&&o.push((0,l.Zs)()),!1!==e.crosshairCursor&&o.push((0,l.S2)()),!1!==e.highlightActiveLine&&o.push((0,l.ZO)()),!1!==e.highlightSelectionMatches&&o.push((0,u.sW)()),e.tabSize&&"number"===typeof e.tabSize&&o.push(h.c.of(" ".repeat(e.tabSize))),o.concat([l.$f.of(t.flat())]).filter(Boolean)},p=o(8402),v=s.q6.define();function g(e){var t=e.value,o=e.selection,n=e.onChange,i=e.onStatistics,u=e.onCreateEditor,d=e.onUpdate,h=e.extensions,f=void 0===h?[]:h,g=e.autoFocus,y=e.theme,b=void 0===y?"light":y,k=e.height,C=void 0===k?"":k,w=e.minHeight,x=void 0===w?"":w,S=e.maxHeight,Z=void 0===S?"":S,E=e.placeholder,L=void 0===E?"":E,N=e.width,A=void 0===N?"":N,H=e.minWidth,M=void 0===H?"":H,z=e.maxWidth,W=void 0===z?"":z,B=e.editable,O=void 0===B||B,j=e.readOnly,R=void 0!==j&&j,F=e.indentWithTab,_=void 0===F||F,T=e.basicSetup,P=void 0===T||T,D=e.root,I=e.initialState,K=(0,r.useState)(),U=(0,a.Z)(K,2),$=U[0],q=U[1],G=(0,r.useState)(),Q=(0,a.Z)(G,2),V=Q[0],J=Q[1],Y=(0,r.useState)(),X=(0,a.Z)(Y,2),ee=X[0],te=X[1],oe=l.tk.theme({"&":{backgroundColor:"#fff"}},{dark:!1}),ne=l.tk.theme({"&":{height:C,minHeight:x,maxHeight:Z,width:A,minWidth:M,maxWidth:W}}),ie=l.tk.updateListener.of((function(e){if(e.docChanged&&"function"===typeof n&&!e.transactions.some((function(e){return e.annotation(v)}))){var t=e.state.doc.toString();n(t,e)}i&&i(function(e){return{line:e.state.doc.lineAt(e.state.selection.main.from),lineCount:e.state.doc.lines,lineBreak:e.state.lineBreak,length:e.state.doc.length,readOnly:e.state.readOnly,tabSize:e.state.tabSize,selection:e.state.selection,selectionAsSingle:e.state.selection.asSingle().main,ranges:e.state.selection.ranges,selectionCode:e.state.sliceDoc(e.state.selection.main.from,e.state.selection.main.to),selections:e.state.selection.ranges.map((function(t){return e.state.sliceDoc(t.from,t.to)})),selectedText:e.state.selection.ranges.some((function(e){return!e.empty}))}}(e))})),re=[ie,ne];switch(_&&re.unshift(l.$f.of([c.oc])),P&&("boolean"===typeof P?re.unshift(m()):re.unshift(m(P))),L&&re.unshift((0,l.W$)(L)),b){case"light":re.push(oe);break;case"dark":re.push(p.vk);break;case"none":break;default:re.push(b)}return!1===O&&re.push(l.tk.editable.of(!1)),R&&re.push(s.yy.readOnly.of(!0)),d&&"function"===typeof d&&re.push(l.tk.updateListener.of(d)),re=re.concat(f),(0,r.useEffect)((function(){if($&&!ee){var e={doc:t,selection:o,extensions:re},n=I?s.yy.fromJSON(I.json,e,I.fields):s.yy.create(e);if(te(n),!V){var i=new l.tk({state:n,parent:$,root:D});J(i),u&&u(i,n)}}return function(){V&&(te(void 0),J(void 0))}}),[$,ee]),(0,r.useEffect)((function(){return q(e.container)}),[e.container]),(0,r.useEffect)((function(){return function(){V&&(V.destroy(),J(void 0))}}),[V]),(0,r.useEffect)((function(){g&&V&&V.focus()}),[g,V]),(0,r.useEffect)((function(){V&&V.dispatch({effects:s.Py.reconfigure.of(re)})}),[b,f,C,x,Z,A,M,W,L,O,R,_,P,n,d]),(0,r.useEffect)((function(){if(void 0!==t){var e=V?V.state.doc.toString():"";V&&t!==e&&V.dispatch({changes:{from:0,to:e.length,insert:t||""},annotations:[v.of(!0)]})}}),[t,V]),{state:ee,setState:te,view:V,setView:J,container:$,setContainer:q}}var y=o(2466),b=["className","value","selection","extensions","onChange","onStatistics","onCreateEditor","onUpdate","autoFocus","theme","height","minHeight","maxHeight","width","minWidth","maxWidth","basicSetup","placeholder","indentWithTab","editable","readOnly","root","initialState"],k=(0,r.forwardRef)((function(e,t){var o=e.className,a=e.value,s=void 0===a?"":a,c=e.selection,l=e.extensions,u=void 0===l?[]:l,d=e.onChange,h=e.onStatistics,f=e.onCreateEditor,m=e.onUpdate,p=e.autoFocus,v=e.theme,k=void 0===v?"light":v,C=e.height,w=e.minHeight,x=e.maxHeight,S=e.width,Z=e.minWidth,E=e.maxWidth,L=e.basicSetup,N=e.placeholder,A=e.indentWithTab,H=e.editable,M=e.readOnly,z=e.root,W=e.initialState,B=(0,i.Z)(e,b),O=(0,r.useRef)(null),j=g({container:O.current,root:z,value:s,autoFocus:p,theme:k,height:C,minHeight:w,maxHeight:x,width:S,minWidth:Z,maxWidth:E,basicSetup:L,placeholder:N,indentWithTab:A,editable:H,readOnly:M,selection:c,onChange:d,onStatistics:h,onCreateEditor:f,onUpdate:m,extensions:u,initialState:W}),R=j.state,F=j.view,_=j.container;if((0,r.useImperativeHandle)(t,(function(){return{editor:O.current,state:R,view:F}}),[O,_,R,F]),"string"!==typeof s)throw new Error("value must be typeof string but got "+typeof s);var T="string"===typeof k?"cm-theme-"+k:"cm-theme";return(0,y.jsx)("div",(0,n.Z)({ref:O,className:T+(o?" "+o:"")},B))}));k.displayName="CodeMirror";var C=k},2163:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var n=o(7462),i=o(3366),r=(o(5848),o(3433)),a=o(5671),s=o(3144),c=o(136),l=o(7277),u=o(8737),d=document.createElement("template");d.innerHTML='\n<style>\n:host a:hover .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n@keyframes octocat-wave {\n  0%, 100% { transform: rotate(0); }\n  20%, 60% { transform: rotate(-25deg); }\n  40%, 80% { transform: rotate(10deg); }\n}\n@media (max-width:500px) {\n  :host a:hover .octo-arm { animation: none; }\n  :host .octo-arm { animation: octocat-wave 560ms ease-in-out; }\n}\n:host svg {\n  z-index: 99;\n  position: fixed;\n  border: 0px;\n  top: 0px;\n}\n</style>\n<svg width="54" height="54" viewBox="0 0 250 250" aria-hidden="true">\n  <a xlink:href="https://github.com/uiwjs/react-github-corners" target="_blank" rel="nofollow sponsored" style="fill: rgb(21, 21, 19); color: rgb(255, 255, 255);">\n    <g>\n      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>\n      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" class="octo-arm" style="transform-origin: 130px 106px;"></path>\n      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>\n    </g>\n  </a>\n</svg>\n';var h=function(e){(0,c.Z)(o,e);var t=(0,l.Z)(o);function o(){var e;return(0,a.Z)(this,o),(e=t.call(this)).right="0",e.shadow=e.attachShadow({mode:"open"}),e.shadow.appendChild(e.ownerDocument.importNode(d.content,!0)),e.update(),e}return(0,s.Z)(o,[{key:"setAttr",value:function(e,t){var o=this.shadow.querySelector("svg");/(href)/.test(e.toLocaleLowerCase())?o.lastElementChild.setAttribute("xlink:href",t):/(color|fill)/.test(e.toLocaleLowerCase())?o.firstElementChild.style[e]=t:/(z-index|position|top|left|right|bottom|transform)/.test(e.toLocaleLowerCase())?o.style[e]=t:o.setAttribute(e,t)}},{key:"update",value:function(){var e=this;[].concat((0,r.Z)(this.getAttributeNames()),["right"]).forEach((function(t){var o=e.getAttribute(t)||e[t]||"";e.setAttr(t,o)}))}},{key:"attributeChangedCallback",value:function(e,t,o){t!==o&&this.setAttr(e,o)}}],[{key:"observedAttributes",get:function(){return["style","z-index","target","height","width","href","color","fill","position","top","left","right","bottom","transform"]}}]),o}((0,u.Z)(HTMLElement));customElements.define("github-corners",h);var f=o(2466),m=["size","fixed","bottom","zIndex","className","style","bgColor","color","position"];function p(e){var t=e.size,o=void 0===t?80:t,r=e.fixed,a=void 0!==r&&r,s=e.bottom,c=e.zIndex,l=e.style,u=e.bgColor,d=void 0===u?"#151513":u,h=e.color,p=void 0===h?"#fff":h,v=e.position,g=void 0===v?"right":v,y=(0,i.Z)(e,m),b="left"===g?{left:0,right:"initial",transform:"scale(-1, 1)"}:{right:0,left:"initial",transform:"scale(1, 1)"};return s?(b.bottom=0,b.top="initial",b.transform="left"===g?"scale(-1, -1)":"scale(1, -1)"):(b.bottom="initial",b.top=0),(0,f.jsx)("github-corners",(0,n.Z)({target:"__blank",width:o,height:o,href:e.href,position:a?"fixed":"absolute","z-index":c,style:l,fill:d,color:p},b,y))}},189:function(e,t,o){"use strict";o.d(t,{Z:function(){return x}});var n=o(3433),i=o(7462),r=o(3366),a=o(5848),s=o(8252),c=o(7730),l=o(2700),u=o(4196),d=o(5057),h=o(8903),f=o(2208),m=o(9645),p=o(5414),v={type:"element",tagName:"svg",properties:{className:"octicon octicon-link",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",ariaHidden:"true"},children:[{type:"element",tagName:"path",children:[],properties:{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"}}]};var g=o(6871),y=o.n(g);var b=o(363),k=function(e){return void 0===e&&(e={}),function(e){(0,b.Vn)(e,(function(e){"element"===e.type&&"code"===e.tagName&&e.data&&e.data.meta&&(e.properties=(0,i.Z)({},e.properties,{"data-meta":String(e.data.meta)}))}))}},C=o(2466),w=["prefixCls","className","source","style","disableCopy","skipHtml","onScroll","onMouseOver","pluginsFilter","rehypeRewrite","wrapperElement","warpperElement"],x=a.forwardRef((function(e,t){var o=e.prefixCls,g=void 0===o?"wmde-markdown wmde-markdown-color":o,b=e.className,x=e.source,S=e.style,Z=e.disableCopy,E=void 0!==Z&&Z,L=e.skipHtml,N=void 0===L||L,A=e.onScroll,H=e.onMouseOver,M=e.pluginsFilter,z=e.rehypeRewrite,W=e.wrapperElement,B=void 0===W?{}:W,O=e.warpperElement,j=void 0===O?{}:O,R=(0,r.Z)(e,w),F=a.useRef(null);(0,a.useImperativeHandle)(t,(function(){return(0,i.Z)({},e,{mdp:F})}),[F,e]);var _=(g||"")+" "+(b||"");!function(e){var t=(0,a.useCallback)((function(e){var t=e.currentTarget||e.target;t.classList.add("active"),y()(t.dataset.code,(function(){setTimeout((function(){t.classList.remove("active")}),2e3)}))}),[]);(0,a.useEffect)((function(){var o,n=null==(o=e.current)?void 0:o.querySelectorAll("pre code + div.copied");return n&&Array.from(n).forEach((function(e){return e.addEventListener("click",t,!1)})),function(){n&&Array.from(n).forEach((function(e){return e.removeEventListener("click",t,!1)}))}}),[e])}(F);var T=[k,[m.ZP,{ignoreMissing:!0}],u.Z,d.Z,f.Z,[p.Z,{rewrite:function(e,t,o){if("element"===e.type&&o&&"root"===o.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.properties=(0,i.Z)({class:"anchor"},n.properties),n.children=[v])}if("element"===e.type&&"pre"===e.tagName&&!E){var r=(0,p.U)(e.children);e.children.push((void 0===(a=r)&&(a=""),{type:"element",tagName:"div",properties:{class:"copied","data-code":a},children:[{type:"element",tagName:"svg",properties:{className:"octicon-copy",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"},children:[]},{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"},children:[]}]},{type:"element",tagName:"svg",properties:{className:"octicon-check",ariaHidden:"true",viewBox:"0 0 16 16",fill:"currentColor",height:12,width:12},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"},children:[]}]}]}))}var a;z&&z(e,t,o)}}],[h.Z,{properties:"attr"}]].concat((0,n.Z)(R.rehypePlugins||[])),P={allowElement:function(e,t,o){return R.allowElement?R.allowElement(e,t,o):/^[A-Za-z0-9]+$/.test(e.tagName)}};N&&T.push(l.Z);var D=[].concat((0,n.Z)(R.remarkPlugins||[]),[c.Z]),I=(0,i.Z)({},j,B);return(0,C.jsx)("div",(0,i.Z)({ref:F,onScroll:A,onMouseOver:H},I,{className:_,style:S,children:(0,C.jsx)(s.D,(0,i.Z)({},P,R,{skipHtml:N,rehypePlugins:M?M("rehype",T):T,remarkPlugins:M?M("remark",D):D,children:x||""}))}))}))}}]);
//# sourceMappingURL=uiw-vendor.3194a192.js.map