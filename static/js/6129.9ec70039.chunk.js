"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[6129],{6129:function(n,r,t){t.r(r),t.d(r,{ntriples:function(){return k}});var e=0,i=1,u=2,a=3,o=4,s=5,c=6,l=7,f=8,h=9,p=10,v=11,_=12;function b(n,r){var t,b=n.location;t=b==e&&"<"==r?i:b==e&&"_"==r?u:b==a&&"<"==r?o:b==s&&"<"==r?c:b==s&&"_"==r?l:b==s&&'"'==r?f:b==i&&">"==r||b==u&&" "==r?a:b==o&&">"==r?s:b==c&&">"==r||b==l&&" "==r||b==f&&'"'==r||b==h&&" "==r||b==p&&">"==r?v:b==f&&"@"==r?h:b==f&&"^"==r?p:" "!=r||b!=e&&b!=a&&b!=s&&b!=v?b==v&&"."==r?e:_:b,n.location=t}var k={startState:function(){return{location:e,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(n,r){var t=n.next();if("<"==t){b(r,t);var e="";return n.eatWhile((function(n){return"#"!=n&&">"!=n&&(e+=n,!0)})),r.uris.push(e),n.match("#",!1)?"variable":(n.next(),b(r,">"),"variable")}if("#"==t){var i="";return n.eatWhile((function(n){return">"!=n&&" "!=n&&(i+=n,!0)})),r.anchors.push(i),"url"}if(">"==t)return b(r,">"),"variable";if("_"==t){b(r,t);var u="";return n.eatWhile((function(n){return" "!=n&&(u+=n,!0)})),r.bnodes.push(u),n.next(),b(r," "),"builtin"}if('"'==t)return b(r,t),n.eatWhile((function(n){return'"'!=n})),n.next(),"@"!=n.peek()&&"^"!=n.peek()&&b(r,'"'),"string";if("@"==t){b(r,"@");var a="";return n.eatWhile((function(n){return" "!=n&&(a+=n,!0)})),r.langs.push(a),n.next(),b(r," "),"string.special"}if("^"==t){n.next(),b(r,"^");var o="";return n.eatWhile((function(n){return">"!=n&&(o+=n,!0)})),r.types.push(o),n.next(),b(r,">"),"variable"}" "==t&&b(r,t),"."==t&&b(r,t)}}}}]);
//# sourceMappingURL=6129.9ec70039.chunk.js.map