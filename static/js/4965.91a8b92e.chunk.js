"use strict";(self.webpackChunk_uiw_react_markdown_editor=self.webpackChunk_uiw_react_markdown_editor||[]).push([[4965],{4965:function(e,r,t){function n(e){for(var r={},t=e.split(" "),n=0;n<t.length;++n)r[t[n]]=!0;return r}t.r(r),t.d(r,{tcl:function(){return s}});var a=n("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),o=n("if elseif else and not or eq ne in ni for foreach while switch"),i=/[+\-*&%=<>!?^\/\|]/;function l(e,r,t){return r.tokenize=t,t(e,r)}function u(e,r){var t=r.beforeParams;r.beforeParams=!1;var n,s=e.next();if('"'!=s&&"'"!=s||!r.inParams){if(/[\[\]{}\(\),;\.]/.test(s))return"("==s&&t?r.inParams=!0:")"==s&&(r.inParams=!1),null;if(/\d/.test(s))return e.eatWhile(/[\w\.]/),"number";if("#"==s)return e.eat("*")?l(e,r,c):"#"==s&&e.match(/ *\[ *\[/)?l(e,r,f):(e.skipToEnd(),"comment");if('"'==s)return e.skipTo(/"/),"comment";if("$"==s)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),r.beforeParams=!0,"builtin";if(i.test(s))return e.eatWhile(i),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var m=e.current().toLowerCase();return a&&a.propertyIsEnumerable(m)?"keyword":o&&o.propertyIsEnumerable(m)?(r.beforeParams=!0,"keyword"):null}return l(e,r,(n=s,function(e,r){for(var t,a=!1,o=!1;null!=(t=e.next());){if(t==n&&!a){o=!0;break}a=!a&&"\\"==t}return o&&(r.tokenize=u),"string"}))}function c(e,r){for(var t,n=!1;t=e.next();){if("#"==t&&n){r.tokenize=u;break}n="*"==t}return"comment"}function f(e,r){for(var t,n=0;t=e.next();){if("#"==t&&2==n){r.tokenize=u;break}"]"==t?n++:" "!=t&&(n=0)}return"meta"}var s={startState:function(){return{tokenize:u,beforeParams:!1,inParams:!1}},token:function(e,r){return e.eatSpace()?null:r.tokenize(e,r)},languageData:{commentTokens:{line:"#"}}}}}]);
//# sourceMappingURL=4965.91a8b92e.chunk.js.map