"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[1341],{1341:function(e,r,t){t.r(r),t.d(r,{pascal:function(){return s}});var n=function(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}("absolute and array asm begin case const constructor destructor div do downto else end file for function goto if implementation in inherited inline interface label mod nil not object of operator or packed procedure program record reintroduce repeat self set shl shr string then to type unit until uses var while with xor as class dispinterface except exports finalization finally initialization inline is library on out packed property raise resourcestring threadvar try absolute abstract alias assembler bitpacked break cdecl continue cppdecl cvar default deprecated dynamic enumerator experimental export external far far16 forward generic helper implements index interrupt iocheck local message name near nodefault noreturn nostackframe oldfpccall otherwise overload override pascal platform private protected public published read register reintroduce result safecall saveregisters softfloat specialize static stdcall stored strict unaligned unimplemented varargs virtual write"),a={null:!0},i=/[+\-*&%=<>!?|\/]/;function o(e,r){var t,o=e.next();if("#"==o&&r.startOfLine)return e.skipToEnd(),"meta";if('"'==o||"'"==o)return r.tokenize=(t=o,function(e,r){for(var n,a=!1,i=!1;null!=(n=e.next());){if(n==t&&!a){i=!0;break}a=!a&&"\\"==n}return!i&&a||(r.tokenize=null),"string"}),r.tokenize(e,r);if("("==o&&e.eat("*"))return r.tokenize=l,l(e,r);if("{"==o)return r.tokenize=u,u(e,r);if(/[\[\]\(\),;\:\.]/.test(o))return null;if(/\d/.test(o))return e.eatWhile(/[\w\.]/),"number";if("/"==o&&e.eat("/"))return e.skipToEnd(),"comment";if(i.test(o))return e.eatWhile(i),"operator";e.eatWhile(/[\w\$_]/);var s=e.current();return n.propertyIsEnumerable(s)?"keyword":a.propertyIsEnumerable(s)?"atom":"variable"}function l(e,r){for(var t,n=!1;t=e.next();){if(")"==t&&n){r.tokenize=null;break}n="*"==t}return"comment"}function u(e,r){for(var t;t=e.next();)if("}"==t){r.tokenize=null;break}return"comment"}var s={startState:function(){return{tokenize:null}},token:function(e,r){if(e.eatSpace())return null;var t=(r.tokenize||o)(e,r);return t},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{block:{open:"(*",close:"*)"}}}}}}]);
//# sourceMappingURL=1341.7e096fc1.chunk.js.map