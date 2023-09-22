"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5316],{5316:function(t,e,n){n.r(e),n.d(e,{textile:function(){return p}});var i={addition:"inserted",attributes:"propertyName",bold:"strong",cite:"keyword",code:"monospace",definitionList:"list",deletion:"deleted",div:"punctuation",em:"emphasis",footnote:"variable",footCite:"qualifier",header:"heading",html:"comment",image:"atom",italic:"emphasis",link:"link",linkDefinition:"link",list1:"list",list2:"list.special",list3:"list",notextile:"string.special",pre:"operator",p:"content",quote:"bracket",span:"quote",specialChar:"character",strong:"strong",sub:"content.special",sup:"content.special",table:"variableName.special",tableHeading:"operator"};function a(t,e,n){if("_"===n)return t.eat("_")?r(t,e,"italic",/__/,2):r(t,e,"em",/_/,1);if("*"===n)return t.eat("*")?r(t,e,"bold",/\*\*/,2):r(t,e,"strong",/\*/,1);if("["===n)return t.match(/\d+\]/)&&(e.footCite=!0),l(e);if("("===n&&t.match(/^(r|tm|c)\)/))return i.specialChar;if("<"===n&&t.match(/(\w+)[^>]+>[^<]+<\/\1>/))return i.html;if("?"===n&&t.eat("?"))return r(t,e,"cite",/\?\?/,2);if("="===n&&t.eat("="))return r(t,e,"notextile",/==/,2);if("-"===n&&!t.eat("-"))return r(t,e,"deletion",/-/,1);if("+"===n)return r(t,e,"addition",/\+/,1);if("~"===n)return r(t,e,"sub",/~/,1);if("^"===n)return r(t,e,"sup",/\^/,1);if("%"===n)return r(t,e,"span",/%/,1);if("@"===n)return r(t,e,"code",/@/,1);if("!"===n){var a=r(t,e,"image",/(?:\([^\)]+\))?!/,1);return t.match(/^:\S+/),a}return l(e)}function r(t,e,n,i,a){var r=t.pos>a?t.string.charAt(t.pos-a-1):null,o=t.peek();if(e[n]){if((!o||/\W/.test(o))&&r&&/\S/.test(r)){var u=l(e);return e[n]=!1,u}}else(!r||/\W/.test(r))&&o&&/\S/.test(o)&&t.match(new RegExp("^.*\\S"+i.source+"(?:\\W|$)"),!1)&&(e[n]=!0,e.mode=c.attributes);return l(e)}function l(t){var e=o(t);if(e)return e;var n=[];return t.layoutType&&n.push(i[t.layoutType]),n=n.concat(function(t){for(var e=[],n=1;n<arguments.length;++n)t[arguments[n]]&&e.push(i[arguments[n]]);return e}(t,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading")),"header"===t.layoutType&&n.push(i.header+"-"+t.header),n.length?n.join(" "):null}function o(t){var e=t.layoutType;switch(e){case"notextile":case"code":case"pre":return i[e];default:return t.notextile?i.notextile+(e?" "+i[e]:""):null}}var u={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- .*?:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(t){switch(t){case"drawTable":return u.makeRe("^",u.single.drawTable,"$");case"html":return u.makeRe("^",u.single.html,"(?:",u.single.html,")*","$");case"linkDefinition":return u.makeRe("^",u.single.linkDefinition,"$");case"listLayout":return u.makeRe("^",u.single.list,s("allAttributes"),"*\\s+");case"tableCellAttributes":return u.makeRe("^",u.choiceRe(u.single.tableCellAttributes,s("allAttributes")),"+\\.");case"type":return u.makeRe("^",s("allTypes"));case"typeLayout":return u.makeRe("^",s("allTypes"),s("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return u.makeRe("^",s("allAttributes"),"+");case"allTypes":return u.choiceRe(u.single.div,u.single.foot,u.single.header,u.single.bc,u.single.bq,u.single.notextile,u.single.pre,u.single.table,u.single.para);case"allAttributes":return u.choiceRe(u.attributes.selector,u.attributes.css,u.attributes.lang,u.attributes.align,u.attributes.pad);default:return u.makeRe("^",u.single[t])}},makeRe:function(){for(var t="",e=0;e<arguments.length;++e){var n=arguments[e];t+="string"===typeof n?n:n.source}return new RegExp(t)},choiceRe:function(){for(var t=[arguments[0]],e=1;e<arguments.length;++e)t[2*e-1]="|",t[2*e]=arguments[e];return t.unshift("(?:"),t.push(")"),u.makeRe.apply(null,t)}};function s(t){return u.cache[t]||(u.cache[t]=u.createRe(t))}var c={newLayout:function(t,e){return t.match(s("typeLayout"),!1)?(e.spanningLayout=!1,(e.mode=c.blockType)(t,e)):(o(e)||(t.match(s("listLayout"),!1)?n=c.list:t.match(s("drawTable"),!1)?n=c.table:t.match(s("linkDefinition"),!1)?n=c.linkDefinition:t.match(s("definitionList"))?n=c.definitionList:t.match(s("html"),!1)&&(n=c.html)),(e.mode=n||c.text)(t,e));var n},blockType:function(t,e){var n,i;return e.layoutType=null,(n=t.match(s("type")))?((n=(i=n[0]).match(s("header")))?(e.layoutType="header",e.header=parseInt(n[0][1])):i.match(s("bq"))?e.layoutType="quote":i.match(s("bc"))?e.layoutType="code":i.match(s("foot"))?e.layoutType="footnote":i.match(s("notextile"))?e.layoutType="notextile":i.match(s("pre"))?e.layoutType="pre":i.match(s("div"))?e.layoutType="div":i.match(s("table"))&&(e.layoutType="table"),e.mode=c.attributes,l(e)):(e.mode=c.text)(t,e)},text:function(t,e){if(t.match(s("text")))return l(e);var n=t.next();return'"'===n?(e.mode=c.link)(t,e):a(t,e,n)},attributes:function(t,e){return e.mode=c.layoutLength,t.match(s("attributes"))?i.attributes:l(e)},layoutLength:function(t,e){return t.eat(".")&&t.eat(".")&&(e.spanningLayout=!0),e.mode=c.text,l(e)},list:function(t,e){var n=t.match(s("list"));e.listDepth=n[0].length;var i=(e.listDepth-1)%3;return e.layoutType=i?1===i?"list2":"list3":"list1",e.mode=c.attributes,l(e)},link:function(t,e){return e.mode=c.text,t.match(s("link"))?(t.match(/\S+/),i.link):l(e)},linkDefinition:function(t){return t.skipToEnd(),i.linkDefinition},definitionList:function(t,e){return t.match(s("definitionList")),e.layoutType="definitionList",t.match(/\s*$/)?e.spanningLayout=!0:e.mode=c.attributes,l(e)},html:function(t){return t.skipToEnd(),i.html},table:function(t,e){return e.layoutType="table",(e.mode=c.tableCell)(t,e)},tableCell:function(t,e){return t.match(s("tableHeading"))?e.tableHeading=!0:t.eat("|"),e.mode=c.tableCellAttributes,l(e)},tableCellAttributes:function(t,e){return e.mode=c.tableText,t.match(s("tableCellAttributes"))?i.attributes:l(e)},tableText:function(t,e){return t.match(s("tableText"))?l(e):"|"===t.peek()?(e.mode=c.tableCell,l(e)):a(t,e,t.next())}},p={name:"textile",startState:function(){return{mode:c.newLayout}},token:function(t,e){return t.sol()&&function(t,e){e.mode=c.newLayout,e.tableHeading=!1,"definitionList"===e.layoutType&&e.spanningLayout&&t.match(s("definitionListEnd"),!1)&&(e.spanningLayout=!1)}(t,e),e.mode(t,e)},blankLine:function(t){var e=t.spanningLayout,n=t.layoutType;for(var i in t)t.hasOwnProperty(i)&&delete t[i];t.mode=c.newLayout,e&&(t.layoutType=n,t.spanningLayout=!0)}}}}]);
//# sourceMappingURL=5316.d7ee2897.chunk.js.map