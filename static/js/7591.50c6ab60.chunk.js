"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[7591],{7591:function(e,t,n){n.r(t),n.d(t,{vb:function(){return R}});var r="error";function a(e){return new RegExp("^(("+e.join(")|(")+"))\\b","i")}var i=new RegExp("^[\\+\\-\\*/%&\\\\|\\^~<>!]"),o=new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),c=new RegExp("^((==)|(<>)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),u=new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),s=new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))"),l=new RegExp("^[_A-Za-z][_A-Za-z0-9]*"),d=["class","module","sub","enum","select","while","if","function","get","set","property","try","structure","synclock","using","with"],m=["else","elseif","case","catch","finally"],h=["next","loop"],f=["and","andalso","or","orelse","xor","in","not","is","isnot","like"],p=a(f),b=["#const","#else","#elseif","#end","#if","#region","addhandler","addressof","alias","as","byref","byval","cbool","cbyte","cchar","cdate","cdbl","cdec","cint","clng","cobj","compare","const","continue","csbyte","cshort","csng","cstr","cuint","culng","cushort","declare","default","delegate","dim","directcast","each","erase","error","event","exit","explicit","false","for","friend","gettype","goto","handles","implements","imports","infer","inherits","interface","isfalse","istrue","lib","me","mod","mustinherit","mustoverride","my","mybase","myclass","namespace","narrowing","new","nothing","notinheritable","notoverridable","of","off","on","operator","option","optional","out","overloads","overridable","overrides","paramarray","partial","private","protected","public","raiseevent","readonly","redim","removehandler","resume","return","shadows","shared","static","step","stop","strict","then","throw","to","true","trycast","typeof","until","until","when","widening","withevents","writeonly"],g=["object","boolean","char","string","byte","sbyte","short","ushort","int16","uint16","integer","uinteger","int32","uint32","long","ulong","int64","uint64","decimal","single","double","float","date","datetime","intptr","uintptr"],k=a(b),w=a(g),v='"',y=a(d),x=a(m),I=a(h),_=a(["end"]),z=a(["do"]);function L(e,t){t.currentIndent++}function E(e,t){t.currentIndent--}function C(e,t){if(e.eatSpace())return null;if("'"===e.peek())return e.skipToEnd(),"comment";if(e.match(/^((&H)|(&O))?[0-9\.a-f]/i,!1)){var n=!1;if((e.match(/^\d*\.\d+F?/i)||e.match(/^\d+\.\d*F?/)||e.match(/^\.\d+F?/))&&(n=!0),n)return e.eat(/J/i),"number";var a=!1;if(e.match(/^&H[0-9a-f]+/i)||e.match(/^&O[0-7]+/i)?a=!0:e.match(/^[1-9]\d*F?/)?(e.eat(/J/i),a=!0):e.match(/^0(?![\dx])/i)&&(a=!0),a)return e.eat(/L/i),"number"}return e.match(v)?(t.tokenize=function(e){var t=1==e.length,n="string";return function(r,a){for(;!r.eol();){if(r.eatWhile(/[^'"]/),r.match(e))return a.tokenize=C,n;r.eat(/['"]/)}return t&&(a.tokenize=C),n}}(e.current()),t.tokenize(e,t)):e.match(s)||e.match(u)?null:e.match(c)||e.match(i)||e.match(p)?"operator":e.match(o)?null:e.match(z)?(L(0,t),t.doInCurrentLine=!0,"keyword"):e.match(y)?(t.doInCurrentLine?t.doInCurrentLine=!1:L(0,t),"keyword"):e.match(x)?"keyword":e.match(_)?(E(0,t),E(0,t),"keyword"):e.match(I)?(E(0,t),"keyword"):e.match(w)||e.match(k)?"keyword":e.match(l)?"variable":(e.next(),r)}var R={name:"vb",startState:function(){return{tokenize:C,lastToken:null,currentIndent:0,nextLineIndent:0,doInCurrentLine:!1}},token:function(e,t){e.sol()&&(t.currentIndent+=t.nextLineIndent,t.nextLineIndent=0,t.doInCurrentLine=0);var n=function(e,t){var n=t.tokenize(e,t),a=e.current();if("."===a)return"variable"===(n=t.tokenize(e,t))?"variable":r;var i="[({".indexOf(a);return-1!==i&&L(0,t),-1!==(i="])}".indexOf(a))&&E(0,t)?r:n}(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e,t,n){var r=t.replace(/^\s+|\s+$/g,"");return r.match(I)||r.match(_)||r.match(x)?n.unit*(e.currentIndent-1):e.currentIndent<0?0:e.currentIndent*n.unit},languageData:{closeBrackets:{brackets:["(","[","{",'"']},commentTokens:{line:"'"},autocomplete:d.concat(m).concat(h).concat(f).concat(b).concat(g)}}}}]);
//# sourceMappingURL=7591.50c6ab60.chunk.js.map