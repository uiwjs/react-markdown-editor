"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9463],{9463:(e,t,a)=>{a.r(t),a.d(t,{spreadsheet:()=>s});const s={name:"spreadsheet",startState:function(){return{stringType:null,stack:[]}},token:function(e,t){if(e){switch(0===t.stack.length&&('"'!=e.peek()&&"'"!=e.peek()||(t.stringType=e.peek(),e.next(),t.stack.unshift("string"))),t.stack[0]){case"string":for(;"string"===t.stack[0]&&!e.eol();)e.peek()===t.stringType?(e.next(),t.stack.shift()):"\\"===e.peek()?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return"string";case"characterClass":for(;"characterClass"===t.stack[0]&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||t.stack.shift();return"operator"}var a=e.peek();switch(a){case"[":return e.next(),t.stack.unshift("characterClass"),"bracket";case":":return e.next(),"operator";case"\\":return e.match(/\\[a-z]+/)?"string.special":(e.next(),"atom");case".":case",":case";":case"*":case"-":case"+":case"^":case"<":case"/":case"=":return e.next(),"atom";case"$":return e.next(),"builtin"}return e.match(/\d+/)?e.match(/^\w+/)?"error":"number":e.match(/^[a-zA-Z_]\w*/)?e.match(/(?=[\(.])/,!1)?"keyword":"variable":-1!=["[","]","(",")","{","}"].indexOf(a)?(e.next(),"bracket"):(e.eatSpace()||e.next(),null)}}}}}]);
//# sourceMappingURL=9463.18f48d40.chunk.js.map