(function(){var GBS_HOST = 'http://books.google.com/';var GBS_LANG = 'en';var i=true,l=null,m=false,n=this,aa=function(a,b,c){var d=a.split("."),e=c||n;!(d[0]in e)&&e.execScript&&e.execScript("var "+d[0]);for(var f;d.length&&(f=d.shift());)if(!d.length&&b!==undefined)e[f]=b;else e=e[f]?e[f]:(e[f]={})},ba=function(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(d[e])d=d[e];else return l;return d},ca=function(){},q=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length==
"number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";else if(b=="function"&&typeof a.call=="undefined")return"object";return b},s=function(a){return q(a)=="array"},t=function(a){var b=q(a);return b==
"array"||b=="object"&&typeof a.length=="number"},u=function(a){return typeof a=="string"},da=function(a){return q(a)=="function"},ea=function(a){var b=q(a);return b=="object"||b=="array"||b=="function"},x=function(a){if(a.hasOwnProperty&&a.hasOwnProperty(v))return a[v];a[v]||(a[v]=++ga);return a[v]},v="closure_hashCode_"+Math.floor(Math.random()*2147483648).toString(36),ga=0,ha=function(a){var b=q(a);if(b=="object"||b=="array"){if(a.clone)return a.clone.call(a);var c=b=="array"?[]:{};for(var d in a)c[d]=
ha(a[d]);return c}return a},y=function(a,b){var c=a.Ia;if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);c&&d.unshift.apply(d,c);c=d}b=a.Ka||b;a=a.Ja||a;var e,f=b||n;e=c?function(){var g=Array.prototype.slice.call(arguments);g.unshift.apply(g,c);return a.apply(f,g)}:function(){return a.apply(f,arguments)};e.Ia=c;e.Ka=b;e.Ja=a;return e},z=function(a){var b=Array.prototype.slice.call(arguments,1);b.unshift(a,l);return y.apply(l,b)},ia=Date.now||function(){return(new Date).getTime()},
A=function(a,b,c){aa(a,b,c)},B=function(a,b){function c(){}c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c};Function.prototype.partial=function(){var a=Array.prototype.slice.call(arguments);a.unshift(this,l);return y.apply(l,a)};var ja=function(a,b,c){if(a.indexOf)return a.indexOf(b,c);if(Array.indexOf)return Array.indexOf(a,b,c);for(var d=c==l?0:c<0?Math.max(0,a.length+c):c,e=d;e<a.length;e++)if(e in a&&a[e]===b)return e;return-1},ka=function(a,b,c){if(a.forEach)a.forEach(b,c);else if(Array.forEach)Array.forEach(a,b,c);else for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=function(a,b){var c=ja(a,b),d;if(d=c!=-1)Array.prototype.splice.call(a,c,1).length==1;return d},ma=function(a){if(s(a))return a.concat();
else{for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}},na=function(a){if(s(a))return a.concat();return ma(a)},oa=function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];if(t(c)){c=na(c);a.push.apply(a,c)}else a.push(c)}};var pa=function(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0};pa.prototype.clone=function(){return new pa(this.x,this.y)};var C=function(a,b){this.width=a;this.height=b};C.prototype.clone=function(){return new C(this.width,this.height)};C.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};C.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var qa=function(a,b,c){for(var d in a)b.call(c,a[d],d,a)},ra=function(a){var b=[],c=0;for(var d in a)b[c++]=a[d];return b},sa=function(a){var b=[],c=0;for(var d in a)b[c++]=d;return b},ta=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ua=function(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var e=0;e<ta.length;e++){b=ta[e];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var va=function(a){for(var b=1;b<arguments.length;b++){var c=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,c)}return a},wa=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},xa=/^[a-zA-Z0-9\-_.!~*'()]*$/,ya=function(a){a=String(a);if(!xa.test(a))return encodeURIComponent(a);return a},Ea=function(a,b){if(b)return a.replace(za,"&amp;").replace(Aa,"&lt;").replace(Ba,"&gt;").replace(Ca,"&quot;");else{if(!Da.test(a))return a;if(a.indexOf("&")!=-1)a=a.replace(za,"&amp;");if(a.indexOf("<")!=
-1)a=a.replace(Aa,"&lt;");if(a.indexOf(">")!=-1)a=a.replace(Ba,"&gt;");if(a.indexOf('"')!=-1)a=a.replace(Ca,"&quot;");return a}},za=/&/g,Aa=/</g,Ba=/>/g,Ca=/\"/g,Da=/[&<>\"]/,Fa=function(a,b){return a.indexOf(b)!=-1},Ha=function(a,b){for(var c=0,d=wa(String(a)).split("."),e=wa(String(b)).split("."),f=Math.max(d.length,e.length),g=0;c==0&&g<f;g++){var h=d[g]||"",j=e[g]||"",o=new RegExp("(\\d*)(\\D*)","g"),k=new RegExp("(\\d*)(\\D*)","g");do{var p=o.exec(h)||["","",""],r=k.exec(j)||["","",""];if(p[0].length==
0&&r[0].length==0)break;var w=p[1].length==0?0:parseInt(p[1],10),fa=r[1].length==0?0:parseInt(r[1],10);c=Ga(w,fa)||Ga(p[2].length==0,r[2].length==0)||Ga(p[2],r[2])}while(c==0)}return c},Ga=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};ia();var D,Ia,Ja,Ka,La,Ma,Na,Oa,Pa,Qa,Ra=function(){return n.navigator?n.navigator.userAgent:l},Sa=function(){return n.navigator},Ta=function(){Ma=La=Ka=Ja=Ia=D=m;var a;if(a=Ra()){var b=Sa();D=a.indexOf("Opera")==0;Ia=!D&&a.indexOf("MSIE")!=-1;Ka=(Ja=!D&&a.indexOf("WebKit")!=-1)&&a.indexOf("Mobile")!=-1;Ma=(La=!D&&!Ja&&b.product=="Gecko")&&b.vendor=="Camino"}};Ta();
var Ua=D,Va=Ia,Wa=La,Xa=Ja,Ya=Ka,Za=function(){var a=Sa();return a&&a.platform||""},$a=Za(),ab=function(){Na=Fa($a,"Mac");Oa=Fa($a,"Win");Pa=Fa($a,"Linux");Qa=!!Sa()&&Fa(Sa().appVersion||"","X11")};ab();
var bb=Na,cb=Qa,db=function(){var a="",b;if(Ua&&n.opera){var c=n.opera.version;a=typeof c=="function"?c():c}else{if(Wa)b=/rv\:([^\);]+)(\)|;)/;else if(Va)b=/MSIE\s+([^\);]+)(\)|;)/;else if(Xa)b=/WebKit\/(\S+)/;if(b){var d=b.exec(Ra());a=d?d[1]:""}}return a},eb=db(),fb={},gb=function(a){return fb[a]||(fb[a]=Ha(eb,a)>=0)};var ib=function(a,b){qa(b,function(c,d){if(d=="style")a.style.cssText=c;else if(d=="class")a.className=c;else if(d=="for")a.htmlFor=c;else if(d in hb)a.setAttribute(hb[d],c);else a[d]=c})},hb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},jb=function(a){var b=a.document;if(Xa&&!gb("500")&&!Ya){if(typeof a.innerHeight=="undefined")a=window;var c=a.innerHeight,
d=a.document.documentElement.scrollHeight;if(a==a.top)if(d<c)c-=15;return new C(a.innerWidth,c)}var e=b.compatMode=="CSS1Compat"&&(!Ua||Ua&&gb("9.50"))?b.documentElement:b.body;return new C(e.clientWidth,e.clientHeight)},kb=function(a){var b=!Xa&&a.compatMode=="CSS1Compat"?a.documentElement:a.body;return new pa(b.scrollLeft,b.scrollTop)},mb=function(){return lb(document,arguments)},lb=function(a,b){var c=b[0],d=b[1];if(Va&&d&&(d.name||d.type)){var e=["<",c];d.name&&e.push(' name="',Ea(d.name),'"');
if(d.type){e.push(' type="',Ea(d.type),'"');d=ha(d);delete d.type}e.push(">");c=e.join("")}var f=a.createElement(c);if(d)if(u(d))f.className=d;else ib(f,d);if(b.length>2){function g(o){if(o)f.appendChild(u(o)?a.createTextNode(o):o)}for(var h=2;h<b.length;h++){var j=b[h];t(j)&&!(ea(j)&&j.nodeType>0)?ka(nb(j)?ma(j):j,g):g(j)}}return f},E=function(a){return document.createElement(a)},F=function(a,b){a.appendChild(b)},ob=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):l};Xa&&Ha(eb,"521");
var nb=function(a){if(a&&typeof a.length=="number")if(ea(a))return typeof a.item=="function"||typeof a.item=="string";else if(da(a))return typeof a.item=="function";return m};if("StopIteration"in n)var pb=n.StopIteration;else pb=Error("StopIteration");var qb=function(){};qb.prototype.next=function(){throw pb;};qb.prototype.__iterator__=function(){return this};var rb=function(a){if(typeof a.r=="function")return a.r();if(u(a))return a.split("");if(t(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ra(a)},sb=function(a){if(typeof a.t=="function")return a.t();if(typeof a.r=="function")return undefined;if(t(a)||u(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(d);return b}return sa(a)},tb=function(a,b,c){if(typeof a.forEach=="function")a.forEach(b,c);else if(t(a)||u(a))ka(a,b,c);else for(var d=sb(a),e=rb(a),f=e.length,g=0;g<f;g++)b.call(c,
e[g],d&&d[g],a)};var G=function(a){this.m={};this.c=[];var b=arguments.length;if(b>1){if(b%2)throw Error("Uneven number of arguments");for(var c=0;c<b;c+=2)this.set(arguments[c],arguments[c+1])}else a&&this.pa(a)};G.prototype.a=0;G.prototype.S=0;G.prototype.r=function(){this.J();for(var a=[],b=0;b<this.c.length;b++){var c=this.c[b];a.push(this.m[c])}return a};G.prototype.t=function(){this.J();return this.c.concat()};G.prototype.j=function(a){return H(this.m,a)};
G.prototype.remove=function(a){if(H(this.m,a)){delete this.m[a];this.a--;this.S++;this.c.length>2*this.a&&this.J();return i}return m};G.prototype.J=function(){if(this.a!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];if(H(this.m,c))this.c[b++]=c;a++}this.c.length=b}if(this.a!=this.c.length){var d={};for(b=a=0;a<this.c.length;){c=this.c[a];if(!H(d,c)){this.c[b++]=c;d[c]=1}a++}this.c.length=b}};G.prototype.get=function(a,b){if(H(this.m,a))return this.m[a];return b};
G.prototype.set=function(a,b){if(!H(this.m,a)){this.a++;this.c.push(a);this.S++}this.m[a]=b};G.prototype.pa=function(a){var b,c;if(a instanceof G){b=a.t();c=a.r()}else{b=sa(a);c=ra(a)}for(var d=0;d<b.length;d++)this.set(b[d],c[d])};G.prototype.clone=function(){return new G(this)};
G.prototype.__iterator__=function(a){this.J();var b=0,c=this.c,d=this.m,e=this.S,f=this,g=new qb;g.next=function(){for(;1;){if(e!=f.S)throw Error("The map has changed since the iterator was created");if(b>=c.length)throw pb;var h=c[b++];return a?h:d[h]}};return g};var H=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ub=/^(?:([^:\/?#]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,vb=function(a){return a.match(ub)};var I=function(a,b){var c;if(a instanceof I){this.u(b==l?a.g:b);this.Q(a.o);this.aa(a.I);this.N(a.s);this.P(a.n);this.O(a.C);this.$(a.h.clone());this.Z(a.A)}else if(a&&(c=vb(String(a)))){this.u(!!b);this.Q(c[1]||"",i);this.aa(c[2]||"",i);this.N(c[3]||"",i);this.P(c[4]);this.O(c[5]||"",i);this.Ea(c[6]||"",i);this.Z(c[7]||"",i)}else{this.u(!!b);this.h=new J(l,this,this.g)}};I.prototype.o="";I.prototype.I="";I.prototype.s="";I.prototype.n=l;I.prototype.C="";I.prototype.A="";I.prototype.xa=m;
I.prototype.g=m;I.prototype.toString=function(){if(this.e)return this.e;var a=[];this.o&&a.push(K(this.o,wb),":");if(this.s){a.push("//");this.I&&a.push(K(this.I,wb),"@");a.push(xb(this.s));this.n!=l&&a.push(":",String(this.n))}this.C&&a.push(K(this.C,yb));var b=String(this.h);b&&a.push("?",b);this.A&&a.push("#",K(this.A,zb));return this.e=a.join("")};I.prototype.clone=function(){return Ab(this.o,this.I,this.s,this.n,this.C,this.h.clone(),this.A,this.g)};
I.prototype.Q=function(a,b){this.k();delete this.e;if(this.o=b?a?decodeURIComponent(a):"":a)this.o=this.o.replace(/:$/,"");return this};I.prototype.aa=function(a,b){this.k();delete this.e;this.I=b?a?decodeURIComponent(a):"":a;return this};I.prototype.N=function(a,b){this.k();delete this.e;this.s=b?a?decodeURIComponent(a):"":a;return this};I.prototype.P=function(a){this.k();delete this.e;if(a){a=Number(a);if(isNaN(a)||a<0)throw Error("Bad port number "+a);this.n=a}else this.n=l;return this};
I.prototype.va=function(){return this.n!=l};I.prototype.O=function(a,b){this.k();delete this.e;this.C=b?a?decodeURIComponent(a):"":a;return this};I.prototype.$=function(a,b){this.k();delete this.e;if(a instanceof J){this.h=a;this.h.R=this;this.h.u(this.g)}else{b||(a=K(a,Bb));this.h=new J(a,this,this.g)}return this};I.prototype.Ea=function(a,b){return this.$(a,b)};I.prototype.G=function(a,b){this.k();delete this.e;this.h.set(a,b);return this};
I.prototype.ma=function(a,b){this.k();delete this.e;s(b)||(b=[String(b)]);this.h.Fa(a,b);return this};I.prototype.Z=function(a,b){this.k();delete this.e;this.A=b?a?decodeURIComponent(a):"":a;return this};I.prototype.k=function(){if(this.xa)throw Error("Tried to modify a read-only Uri");};I.prototype.u=function(a){this.g=a;this.h&&this.h.u(a)};
var Ab=function(a,b,c,d,e,f,g,h){var j=new I(l,h);a&&j.Q(a);b&&j.aa(b);c&&j.N(c);d&&j.P(d);e&&j.O(e);f&&j.$(f);g&&j.Z(g);return j},xb=function(a){if(u(a))return encodeURIComponent(a);return l},Cb=/^[a-zA-Z0-9\-_.!~*'():\/;?]*$/,K=function(a,b){var c=l;if(u(a)){c=a;Cb.test(c)||(c=encodeURI(a));if(c.search(b)>=0)c=c.replace(b,Db)}return c},Db=function(a){var b=a.charCodeAt(0);return"%"+(b>>4&15).toString(16)+(b&15).toString(16)},wb=/[#\/\?@]/g,yb=/[\#\?]/g,Bb=/[\#\?@]/g,zb=/#/g,J=function(a,b,c){this.p=
a||l;this.R=b||l;this.g=!!c};J.prototype.l=function(){if(!this.b){this.b=new G;if(this.p)for(var a=this.p.split("&"),b=0;b<a.length;b++){var c=a[b].indexOf("="),d=l,e=l;if(c>=0){d=a[b].substring(0,c);e=a[b].substring(c+1)}else d=a[b];d=decodeURIComponent(d.replace(/\+/g," "));d=this.q(d);this.add(d,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};J.prototype.b=l;J.prototype.a=l;
J.prototype.add=function(a,b){this.l();this.B();a=this.q(a);if(this.j(a)){var c=this.b.get(a);s(c)?c.push(b):this.b.set(a,[c,b])}else this.b.set(a,b);this.a++;return this};J.prototype.remove=function(a){this.l();a=this.q(a);if(this.b.j(a)){this.B();var b=this.b.get(a);if(s(b))this.a-=b.length;else this.a--;return this.b.remove(a)}return m};J.prototype.j=function(a){this.l();a=this.q(a);return this.b.j(a)};
J.prototype.t=function(){this.l();for(var a=this.b.r(),b=this.b.t(),c=[],d=0;d<b.length;d++){var e=a[d];if(s(e))for(var f=0;f<e.length;f++)c.push(b[d]);else c.push(b[d])}return c};J.prototype.r=function(a){this.l();var b;if(a){var c=this.q(a);if(this.j(c)){var d=this.b.get(c);if(s(d))return d;else{b=[];b.push(d)}}else b=[]}else{var e=this.b.r();b=[];for(var f=0;f<e.length;f++){var g=e[f];s(g)?oa(b,g):b.push(g)}}return b};
J.prototype.set=function(a,b){this.l();this.B();a=this.q(a);if(this.j(a)){var c=this.b.get(a);if(s(c))this.a-=c.length;else this.a--}this.b.set(a,b);this.a++;return this};J.prototype.get=function(a,b){this.l();a=this.q(a);if(this.j(a)){var c=this.b.get(a);return s(c)?c[0]:c}else return b};J.prototype.Fa=function(a,b){this.l();this.B();a=this.q(a);if(this.j(a)){var c=this.b.get(a);if(s(c))this.a-=c.length;else this.a--}if(b.length>0){this.b.set(a,b);this.a+=b.length}};
J.prototype.toString=function(){if(this.p)return this.p;if(!this.b)return"";for(var a=[],b=0,c=this.b.t(),d=0;d<c.length;d++){var e=c[d],f=ya(e),g=this.b.get(e);if(s(g))for(var h=0;h<g.length;h++){b>0&&a.push("&");a.push(f,"=",ya(g[h]));b++}else{b>0&&a.push("&");a.push(f,"=",ya(g));b++}}return this.p=a.join("")};J.prototype.B=function(){delete this.ea;delete this.p;this.R&&delete this.R.e};
J.prototype.clone=function(){var a=new J;if(this.ea)a.ea=this.ea;if(this.p)a.p=this.p;if(this.b)a.b=this.b.clone();return a};J.prototype.q=function(a){var b=String(a);if(this.g)b=b.toLowerCase();return b};J.prototype.u=function(a){var b=a&&!this.g;if(b){this.l();this.B();tb(this.b,function(c,d){var e=d.toLowerCase();if(d!=e){this.remove(d);this.add(e,c)}},this)}this.g=a};var Gb=function(a,b){a=new I(a);var c="__GBS_Callback"+Eb++;a.G("callback",c);var d=mb("script",{src:a.toString(),type:"text/javascript"});n[c]=z(Fb,c,d,b);F(document.body,d)},Fb=function(a,b,c){ob(b);c()},Eb=0;var L=function(){};L.prototype.ga=m;L.prototype.dispose=function(){if(!this.ga){this.ga=i;this.d()}};L.prototype.d=function(){};var M=function(a,b){L.call(this);this.za=b;this.v=[];this.qa(a)};B(M,L);M.prototype.U=l;M.prototype.V=l;M.prototype.F=function(a){this.U=a};M.prototype.la=function(a){this.V=a};M.prototype.f=function(){if(this.v.length)return this.v.pop();return this.ca()};M.prototype.z=function(a){this.v.length<this.za?this.v.push(a):this.fa(a)};M.prototype.qa=function(a){if(a>this.za)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var b=0;b<a;b++)this.v.push(this.ca())};
M.prototype.ca=function(){return this.U?this.U():{}};M.prototype.fa=function(a){if(this.V)this.V(a);else if(da(a.dispose))a.dispose();else for(var b in a)delete a[b]};M.prototype.d=function(){M.ba.d.call(this);for(var a=this.v;a.length;)this.fa(a.pop());delete this.v};var N=function(a,b){this.type=a;this.currentTarget=this.target=b};B(N,L);N.prototype.d=function(){delete this.type;delete this.target;delete this.currentTarget};N.prototype.w=m;N.prototype.L=i;var O=function(a,b){a&&this.init(a,b)};B(O,N);O.prototype.type=l;O.prototype.target=l;O.prototype.relatedTarget=l;O.prototype.offsetX=0;O.prototype.offsetY=0;O.prototype.clientX=0;O.prototype.clientY=0;O.prototype.screenX=0;O.prototype.screenY=0;O.prototype.button=0;O.prototype.keyCode=0;O.prototype.charCode=0;O.prototype.ctrlKey=m;O.prototype.altKey=m;O.prototype.shiftKey=m;O.prototype.metaKey=m;O.prototype.ha=l;
O.prototype.init=function(a,b){this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;this.relatedTarget=a.relatedTarget?a.relatedTarget:this.type=="mouseover"?a.fromElement:this.type=="mouseout"?a.toElement:l;this.offsetX=typeof a.layerX=="number"?a.layerX:a.offsetX;this.offsetY=typeof a.layerY=="number"?a.layerY:a.offsetY;this.clientX=typeof a.clientX=="number"?a.clientX:a.pageX;this.clientY=typeof a.clientY=="number"?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||
0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(this.type=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.ha=a;delete this.L;delete this.w};O.prototype.d=function(){O.ba.d.call(this);this.ha=l};var P=function(){},Hb=0;P.prototype.X=l;P.prototype.listener=l;P.prototype.proxy=l;P.prototype.src=l;P.prototype.type=l;P.prototype.capture=l;P.prototype.handler=l;P.prototype.key=0;P.prototype.removed=m;P.prototype.T=m;P.prototype.init=function(a,b,c,d,e,f){if(da(a))this.X=i;else if(a&&a.handleEvent&&da(a.handleEvent))this.X=m;else throw Error("Invalid listener argument");this.listener=a;this.proxy=b;this.src=c;this.type=d;this.capture=!!e;this.handler=f;this.T=m;this.key=++Hb;this.removed=m};
P.prototype.handleEvent=function(a){if(this.X)return this.listener.call(this.handler||this.src,a);return this.listener.handleEvent.call(this.listener,a)};var Q={},R={},S={},T=new M(0,600);T.F(function(){return{a:0,i:0}});T.la(function(a){a.a=0});var U=new M(0,600);U.F(function(){return[]});U.la(function(a){a.length=0;delete a.K;delete a.ja});var Ib=new M(0,600);Ib.F(function(){var a=function(b){return Jb.call(a.src,a.key,b)};return a});var Kb=function(){return new P},Lb=new M(0,600);Lb.F(Kb);
var Mb=function(){return new O},Nb=function(){var a=l;if(Va){a=new M(0,600);a.F(Mb)}return a},Ob=Nb(),Pb="on",Qb={},V=function(a,b,c,d,e){if(b)if(s(b)){for(var f=0;f<b.length;f++)V(a,b[f],c,d,e);return l}else{var g=!!d,h=R;b in h||(h[b]=T.f());h=h[b];if(!(g in h)){h[g]=T.f();h.a++}h=h[g];var j=x(a),o,k;h.i++;if(h[j]){o=h[j];for(f=0;f<o.length;f++){k=o[f];if(k.listener==c&&k.handler==e){if(k.removed)break;return o[f].key}}}else{o=h[j]=U.f();h.a++}var p=Ib.f();p.src=a;k=Lb.f();k.init(c,p,a,b,g,e);var r=
k.key;p.key=r;o.push(k);Q[r]=k;S[j]||(S[j]=U.f());S[j].push(k);if(a.addEventListener){if(a==n||!a.da)a.addEventListener(b,p,g)}else a.attachEvent(Rb(b),p);return r}else throw Error("Invalid event type");},Sb=function(a,b,c,d,e){if(s(b)){for(var f=0;f<b.length;f++)Sb(a,b[f],c,d,e);return l}var g=V(a,b,c,d,e),h=Q[g];h.T=i;return g},Tb=function(a,b,c,d,e){if(s(b)){for(var f=0;f<b.length;f++)Tb(a,b[f],c,d,e);return l}var g=!!d,h=Ub(a,b,g);if(!h)return m;for(f=0;f<h.length;f++)if(h[f].listener==c&&h[f].capture==
g&&h[f].handler==e)return Vb(h[f].key);return m},Vb=function(a){if(!Q[a])return m;var b=Q[a];if(b.removed)return m;var c=b.src,d=b.type,e=b.proxy,f=b.capture;if(c.removeEventListener){if(c==n||!c.da)c.removeEventListener(d,e,f)}else c.detachEvent&&c.detachEvent(Rb(d),e);var g=x(c),h=R[d][f][g];if(S[g]){var j=S[g];la(j,b);j.length==0&&delete S[g]}b.removed=i;h.ja=i;Wb(d,f,g,h);delete Q[a];return i},Wb=function(a,b,c,d){if(!d.K)if(d.ja){for(var e=0,f=0;e<d.length;e++)if(d[e].removed)Lb.z(d[e]);else{if(e!=
f)d[f]=d[e];f++}d.length=f;d.ja=m;if(f==0){U.z(d);delete R[a][b][c];R[a][b].a--;if(R[a][b].a==0){T.z(R[a][b]);delete R[a][b];R[a].a--}if(R[a].a==0){T.z(R[a]);delete R[a]}}}},Xb=function(a,b,c){var d=0,e=a==l,f=b==l,g=c==l;c=!!c;if(e)qa(S,function(p){for(var r=p.length-1;r>=0;r--){var w=p[r];if((f||b==w.type)&&(g||c==w.capture)){Vb(w.key);d++}}});else{var h=x(a);if(S[h])for(var j=S[h],o=j.length-1;o>=0;o--){var k=j[o];if((f||b==k.type)&&(g||c==k.capture)){Vb(k.key);d++}}}return d},Ub=function(a,b,
c){var d=R;if(b in d){d=d[b];if(c in d){d=d[c];var e=x(a);if(d[e])return d[e]}}return l},Rb=function(a){if(a in Qb)return Qb[a];return Qb[a]=Pb+a},W=function(a,b,c,d,e){var f=1,g=x(b);if(a[g]){a.i--;var h=a[g];if(h.K)h.K++;else h.K=1;try{for(var j=h.length,o=0;o<j;o++){var k=h[o];if(k&&!k.removed)f&=Yb(k,e)!==m}}finally{h.K--;Wb(c,d,g,h)}}return Boolean(f)},Yb=function(a,b){var c=a.handleEvent(b);a.T&&Vb(a.key);return c},Zb=function(a,b){if(u(b))b=new N(b,a);else if(b instanceof N)b.target=b.target||
a;else{var c=b;b=new N(b.type,a);ua(b,c)}var d=1,e,f=b.type,g=R;if(!(f in g))return i;g=g[f];var h=i in g,j;if(h){e=[];for(var o=a;o;o=o.Y)e.push(o);j=g[i];j.i=j.a;for(var k=e.length-1;!b.w&&k>=0&&j.i;k--){b.currentTarget=e[k];d&=W(j,e[k],b.type,i,b)&&b.L!=m}}var p=m in g;if(p){j=g[m];j.i=j.a;if(h)for(k=0;!b.w&&k<e.length&&j.i;k++){b.currentTarget=e[k];d&=W(j,e[k],b.type,m,b)&&b.L!=m}else for(var r=a;!b.w&&r&&j.i;r=r.Y){b.currentTarget=r;d&=W(j,r,b.type,m,b)&&b.L!=m}}return Boolean(d)},Jb=function(a,
b){if(!Q[a])return i;var c=Q[a],d=c.type,e=R;if(!(d in e))return i;e=e[d];var f,g;if(Va){var h=b||ba("window.event"),j=i in e,o=m in e;if(j){if(h.keyCode<0||h.returnValue!=undefined)return i;$b(h)}var k=Ob.f();k.init(h,this);f=i;try{if(j){for(var p=U.f(),r=k.currentTarget;r;r=r.parentNode)p.push(r);g=e[i];g.i=g.a;for(var w=p.length-1;!k.w&&w>=0&&g.i;w--){k.currentTarget=p[w];f&=W(g,p[w],d,i,k)}if(o){g=e[m];g.i=g.a;for(w=0;!k.w&&w<p.length&&g.i;w++){k.currentTarget=p[w];f&=W(g,p[w],d,m,k)}}}else f=
Yb(c,k)}finally{if(p){p.length=0;U.z(p)}k.dispose();Ob.z(k)}return f}var fa=new O(b,this);try{f=Yb(c,fa)}finally{fa.dispose()}return f},$b=function(a){var b=m;if(a.keyCode==0)try{a.keyCode=-1;return}catch(c){b=i}if(b||a.returnValue==undefined)a.returnValue=i};var ac,bc,cc,dc,ec,fc,gc=function(){fc=ec=dc=cc=bc=ac=m;var a=Ra();if(a)if(a.indexOf("Firefox")!=-1)ac=i;else if(a.indexOf("Camino")!=-1)bc=i;else if(a.indexOf("iPhone")!=-1||a.indexOf("iPod")!=-1)cc=i;else if(a.indexOf("Android")!=-1)dc=i;else if(a.indexOf("Chrome")!=-1)ec=i;else if(a.indexOf("Safari")!=-1)fc=i};gc();var X=function(a,b,c){u(b)?hc(a,c,b):qa(b,z(hc,a))},hc=function(a,b,c){a.style[ic(c)]=b},jc=function(a,b,c){var d,e,f=Wa&&(bb||cb)&&gb("1.9");if(b instanceof pa){d=b.x;e=b.y}else{d=b;e=c}a.style.left=typeof d=="number"?(f?Math.round(d):d)+"px":d;a.style.top=typeof e=="number"?(f?Math.round(e):e)+"px":e},kc=function(a,b,c){var d;if(b instanceof C){d=b.height;b=b.width}else{if(c==undefined)throw Error("missing height argument");d=c}a.style.width=typeof b=="number"?Math.round(b)+"px":b;a.style.height=
typeof d=="number"?Math.round(d)+"px":d},lc={},ic=function(a){return lc[a]||(lc[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))},mc=function(a,b){var c=a.style;if("opacity"in c)c.opacity=b;else if("MozOpacity"in c)c.MozOpacity=b;else if("filter"in c)c.filter=b===""?"":"alpha(opacity="+b*100+")"};Wa&&gb("1.9");var nc=function(a,b){this.Na=b||"en"};nc.prototype.ia=function(){var a=E("img");a.src=va("http://books.google.com/intl/%s/googlebooks/images/gbs_preview_button1.gif",this.Na);a.border=0;X(a,"cursor","pointer");return a};var oc=function(a,b,c){nc.call(this,a,c);var d=E("a");d.href=b;F(a,d);F(d,this.ia())};B(oc,nc);var pc=function(a,b,c){nc.call(this,a,c);F(a,this.ia());X(a,"cursor","pointer");V(a,"click",b)};B(pc,nc);var qc=function(a,b){this.ra();var c=new google.books.DefaultViewer(this.oa,b);c.load(a);this.Ba()};
qc.prototype.ra=function(){var a=document.getElementsByTagName("body")[0],b=E("div");mc(b,0.5);X(b,{backgroundColor:"#333",position:"absolute",zIndex:200});this.Ha=b;var c=jb(window),d=a.scrollWidth,e=Math.max(a.scrollHeight,c.height);kc(b,d,e);jc(b,0,0);F(a,b);this.M=E("div");X(this.M,{position:"absolute",zIndex:201});F(a,this.M);this.H=E("div");kc(this.H,618,500);X(this.H,{backgroundColor:"#333",position:"absolute",zIndex:202});jc(this.H,3,3);mc(this.H,0.3);F(this.M,this.H);this.D=E("div");jc(this.D,
0,0);X(this.D,{position:"absolute",padding:"8px",border:"1px solid #2c4462",backgroundColor:"#b4cffe",zIndex:203});var f=E("div");X(f,{backgroundColor:"#d8e8fd",fontSize:"16px",fontFamily:"Arial, sans-serif",fontWeight:"bold",padding:"2px 2px 2px 5px"});F(this.D,f);var g=E("img");g.src="http://books.google.com/googlebooks/images/dialog_close_x.gif";g.width=15;g.height=15;X(g,{cursor:"pointer",position:"absolute",right:"11px",top:"11px"});Sb(g,"click",y(this.close,this));F(f,g);var h=E("div");h.innerHTML=
"&nbsp;";F(f,h);this.oa=E("div");F(this.D,this.oa);kc(this.oa,600,456);F(this.M,this.D)};qc.prototype.Ba=function(){var a=jb(window),b=Math.max(0,(a.height-500)/2);b=Math.floor(b+kb(document).y);var c=Math.max(0,(a.width-618)/2);c=Math.floor(c);jc(this.M,c,b)};qc.prototype.close=function(){ka([this.D,this.Ha,this.H],ob)};var rc=function(a,b){this.R=new I(a);this.La=b?b:"callback";this.na=5000},sc=0;
rc.prototype.send=function(a,b,c,d){if(!document.documentElement.firstChild){c&&c(a);return l}var e=d||"_"+(sc++).toString(36)+ia().toString(36);n._callbacks_||(n._callbacks_={});var f=E("script"),g=l;if(this.na>0){var h=tc(e,f,a,c);g=n.setTimeout(h,this.na)}var j=this.R.clone();uc(a,j);if(b){var o=vc(e,f,b,g);n._callbacks_[e]=o;j.ma(this.La,"_callbacks_."+e)}ib(f,{type:"text/javascript",id:e,charset:"UTF-8",src:j.toString()});F(document.getElementsByTagName("head")[0],f);return{Oa:e,na:g}};
var tc=function(a,b,c,d){return function(){wc(a,b,m);d&&d(c)}},vc=function(a,b,c,d){return function(){n.clearTimeout(d);wc(a,b,i);c.apply(undefined,arguments)}},wc=function(a,b,c){n.setTimeout(function(){ob(b)},0);if(n._callbacks_[a])if(c)delete n._callbacks_[a];else n._callbacks_[a]=ca},uc=function(a,b){for(var c in a)if(!a.hasOwnProperty||a.hasOwnProperty(c))b.ma(c,a[c]);return b};var Y=function(){};B(Y,L);Y.prototype.da=i;Y.prototype.Y=l;Y.prototype.addEventListener=function(a,b,c,d){V(this,a,b,c,d)};Y.prototype.removeEventListener=function(a,b,c,d){Tb(this,a,b,c,d)};Y.prototype.dispatchEvent=function(a){return Zb(this,a)};Y.prototype.d=function(){Y.ba.d.call(this);Xb(this);this.Y=l};var Z=function(a){Y.call(this);this.url=a;this.Ca=l;this.ya=i};B(Z,Y);Z.prototype.fetch=function(){if(this.ya)this.ya=m;else throw{};};Z.prototype.Da=function(a){this.Ca=a};Z.prototype.f=function(){return this.Ca};var $=function(a){Z.call(this,a);this.Ma=new rc(a);this.W=i};B($,Z);$.prototype.fetch=function(a,b){$.ba.fetch.call(this,a,b);this.W=m;this.Ma.send({},y(this.ua,this,a),y(this.ta,this,b))};$.prototype.ua=function(a,b){if(!this.W){this.Da(b);this.dispatchEvent("success");a&&a(this.f());this.ka()}};$.prototype.ta=function(a){if(!this.W){this.dispatchEvent("error");a&&a();this.ka()}};$.prototype.ka=function(){this.W=i};var yc=function(a,b,c,d){s(a)||(a=[a]);this.wa=a;this.Ga=b;this.Aa=c;var e=new I(xc);e.G("bibkeys",a.join(","));e.G("hl",GBS_LANG);e.G("source",d||"previewlib");var f=new $(e);f.fetch(y(this.sa,this))},xc=(GBS_HOST||"http://books.google.com/")+"books?jscmd=viewapi";yc.prototype.sa=function(a){for(var b=0;b<this.wa.length;b++){var c=this.wa[b],d=a[c];if(d){var e=d.preview_url;if(e&&zc(d)){this.Ga&&this.Ga(e);return}}}this.Aa&&this.Aa()};
var zc=function(a){var b=a.preview,c=a.embeddable;c!==undefined||(c=i);return(b=="full"||b=="partial")&&c};var Cc=function(a,b){var c=b||{},d=c.alternativeUrl,e=z(Ac,d);Bc(a,e,"GBS_insertPreviewButtonLink")};A("GBS_insertPreviewButtonLink",Cc);var Ec=function(a){Bc(a,Dc,"GBS_insertPreviewButtonPopup")};A("GBS_insertPreviewButtonPopup",Ec);var Gc=function(a,b,c){Bc(a,z(Fc,b,c),"GBS_insertEmbeddedViewer")};A("GBS_insertEmbeddedViewer",Gc);
var Bc=function(a,b,c){var d=Hc(),e=function(f){b(d,f)};new yc(a,e,l,c)},Ac=function(a,b,c){var d=Ic(a,c);new oc(b,d,Jc)},Ic=function(a,b){if(a)return a;var c=new I(b);if(Kc){var d=new I(GBS_HOST);c.Q(d.o);c.N(d.s);c.P(d.n);c.O("/books/p/"+Kc)}c.G("hl",Jc||"en");return c.toString()},Dc=function(a,b){var c=Lc.partial(b);new pc(a,c,Jc)},Fc=function(a,b,c,d){var e=E("div");F(c,e);kc(e,a,b);Mc(function(){var f=new google.books.DefaultViewer(e,Nc);f.load(d)})},Mc=function(a){var b=z(Mc,a);if(n.google&&
n.google.load)if(google.books)a();else{var c={callback:b,language:Jc};if(GBS_HOST!==undefined&&GBS_HOST.indexOf("http://books")==-1){var d=new I(GBS_HOST),e=d.s;if(d.va())e+=":"+d.n;c.other_params="host="+e}google.load("books","0",c)}else Gb("http://www.google.com/jsapi",z(Mc,b))},Lc=function(a){Mc(function(){new qc(a,Nc)})},Jc="en",Oc=function(a){Jc=a};A("GBS_setLanguage",Oc);var Pc=function(a){Nc=a};A("GBS_setViewerOptions",Pc);var Kc=l,Qc=function(a){Kc=a};A("GBS_setCobrandName",Qc);
var Nc={},Hc=function(){var a="__GBS_Button"+Rc++;document.write(va('<span id="%s"></span>',a));return u(a)?document.getElementById(a):a},Rc=0;V(window,"unload",function(){Xb()});
})();