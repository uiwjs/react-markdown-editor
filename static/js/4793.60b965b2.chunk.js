"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[4793],{4793:function(e,t,n){function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{velocity:function(){return p}});var a=r("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),i=r("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),o=r("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),s=/[+\-*&%=<>!?:\/|]/;function u(e,t,n){return t.tokenize=n,n(e,t)}function l(e,t){var n=t.beforeParams;t.beforeParams=!1;var r=e.next();if("'"==r&&!t.inString&&t.inParams)return t.lastTokenWasBuiltin=!1,u(e,t,f(r));if('"'!=r){if(/[\[\]{}\(\),;\.]/.test(r))return"("==r&&n?t.inParams=!0:")"==r&&(t.inParams=!1,t.lastTokenWasBuiltin=!0),null;if(/\d/.test(r))return t.lastTokenWasBuiltin=!1,e.eatWhile(/[\w\.]/),"number";if("#"==r&&e.eat("*"))return t.lastTokenWasBuiltin=!1,u(e,t,c);if("#"==r&&e.match(/ *\[ *\[/))return t.lastTokenWasBuiltin=!1,u(e,t,k);if("#"==r&&e.eat("#"))return t.lastTokenWasBuiltin=!1,e.skipToEnd(),"comment";if("$"==r)return e.eat("!"),e.eatWhile(/[\w\d\$_\.{}-]/),o&&o.propertyIsEnumerable(e.current())?"keyword":(t.lastTokenWasBuiltin=!0,t.beforeParams=!0,"builtin");if(s.test(r))return t.lastTokenWasBuiltin=!1,e.eatWhile(s),"operator";e.eatWhile(/[\w\$_{}@]/);var l=e.current();return a&&a.propertyIsEnumerable(l)?"keyword":i&&i.propertyIsEnumerable(l)||e.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==e.peek()&&(!i||!i.propertyIsEnumerable(l.toLowerCase()))?(t.beforeParams=!0,t.lastTokenWasBuiltin=!1,"keyword"):t.inString?(t.lastTokenWasBuiltin=!1,"string"):e.pos>l.length&&"."==e.string.charAt(e.pos-l.length-1)&&t.lastTokenWasBuiltin?"builtin":(t.lastTokenWasBuiltin=!1,null)}return t.lastTokenWasBuiltin=!1,t.inString?(t.inString=!1,"string"):t.inParams?u(e,t,f(r)):void 0}function f(e){return function(t,n){for(var r,a=!1,i=!1;null!=(r=t.next());){if(r==e&&!a){i=!0;break}if('"'==e&&"$"==t.peek()&&!a){n.inString=!0,i=!0;break}a=!a&&"\\"==r}return i&&(n.tokenize=l),"string"}}function c(e,t){for(var n,r=!1;n=e.next();){if("#"==n&&r){t.tokenize=l;break}r="*"==n}return"comment"}function k(e,t){for(var n,r=0;n=e.next();){if("#"==n&&2==r){t.tokenize=l;break}"]"==n?r++:" "!=n&&(r=0)}return"meta"}var p={startState:function(){return{tokenize:l,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{commentTokens:{line:"##",block:{open:"#*",close:"*#"}}}}}}]);
//# sourceMappingURL=4793.60b965b2.chunk.js.map