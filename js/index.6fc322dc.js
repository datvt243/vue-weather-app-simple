(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={index:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-weather-app-simple/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3e0a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container is-flex"},[a("Header",{attrs:{projectName:t.projectName}}),a("main",{staticClass:"main-wrapper"},[a("WeatherWrapper")],1),a("Footer")],1)])])},s=[],o=a("5530"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header-wrapper mb-5"},[n("nav",{staticClass:"navbar bg-dark rounded-3"},[n("span",{staticClass:"navbar-brand text-white",attrs:{href:"#"}},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:a("cf05"),width:"30",alt:"",loading:"lazy"}}),n("span",{staticClass:"ms-2 logo-brand"},[t._v(t._s(t.projectName))])])])])},c=[],l={name:"Header",props:["projectName"]},u=l,p=(a("d1a1"),a("2877")),d=Object(p["a"])(u,i,c,!1,null,null,null),f=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer-wrapper"},[a("div",{staticClass:"clearfix text-white"},[a("small",{staticClass:"text-center",domProps:{innerHTML:t._s(t.footer)}})])])},h=[],g={data:function(){return{footer:"Make by me &copy; 2021"}}},v=g,y=(a("edac"),Object(p["a"])(v,m,h,!1,null,"7091fdfe",null)),b=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather-wrapper bg-dark p-3 p-md-5 text-white rounded-3"},[a("div",{staticClass:"mb-5"},[a("WeatherForm",{on:{emitFetchWeather:t.fetchWeather}})],1),a("transition",{attrs:{name:"animate"}},["undefined"!=typeof t.getResult.main?a("div",{staticClass:"clearfix"},[a("div",{staticClass:"mb-4"},[a("WeatherDate")],1),a("div",{staticClass:"weather-result text-center"},[a("div",{staticClass:"mb-4"},[a("div",{staticClass:"d-inline-block border rounded-3 px-3 py-2 px-md-5 py-md-3"},[a("div",{staticClass:"weather-location"},[a("span",{staticClass:"h2"},[t._v(t._s(t.getResult.name)+", "+t._s(t.getResult.sys.country))])]),a("div",{staticClass:"weather-box"},[a("div",{staticClass:"temp display-1"},[t._v(t._s(Math.round(t.getResult.main.temp))+"°C")])])])]),a("div",{staticClass:"weather"},[a("div",{staticClass:"d-block d-sm-flex justify-content-center align-items-center"},[a("div",[a("i",{staticClass:"icon",class:t.getIcon})]),a("div",{staticClass:"ms-2"},[a("span",{staticClass:"h2"},[t._v(t._s(t.getResult.weather[0].description))])])])])])]):a("div",{staticClass:"clearfix"},[a("WeatherError",{attrs:{message:t.getResult.message}})],1)])],1)},_=[],w=(a("498a"),a("2f62")),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather-form"},[a("div",{staticClass:"input-group"},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.getQueryy,expression:"getQueryy"}],staticClass:"form-control form-control form-control-lg text-capitalize",attrs:{type:"text",placeholder:"Nhập địa điểm ..."},domProps:{value:t.getQueryy},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.emitFetchWeather(e)},input:function(e){e.target.composing||(t.getQueryy=e.target.value)}}})])])},j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"input-group-text"},[n("img",{staticClass:"d-inline-block align-top",attrs:{src:a("e6b6"),width:"20",alt:"location"}})])}],O={name:"WeatherForm",computed:Object(o["a"])(Object(o["a"])({},Object(w["b"])(["getQuery"])),{},{getQueryy:{get:function(){return this.getQuery},set:function(t){this.$store.commit("updateQuery",t)}}}),methods:{emitFetchWeather:function(){this.$emit("emitFetchWeather")}}},k=O,W=Object(p["a"])(k,x,j,!1,null,null,null),B=W.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather-error"},[a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("div",{staticClass:"text-center p-5"},[a("p",{staticClass:"h2"},[t._v("Địa điểm không tồn lại")])])])])}],P={name:"WeatherError",props:{message:{type:String,default:""}},computed:{booleanMessage:function(){return"undefined"!=typeof message}}},Q=P,R=Object(p["a"])(Q,$,E,!1,null,null,null),T=R.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weather-date"},[a("div",{staticClass:"text-center"},[a("span",{staticClass:"h2",domProps:{innerHTML:t._s(t.getDate)}})])])},F=[],M=(a("99af"),{name:"WeatherDate",computed:{getDate:function(){var t=new Date,e=["1","2","3","4","5","6","7","8","9","10","11","12"],a=["Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"],n=a[t.getDay()],r=t.getDate(),s=e[t.getMonth()],o=t.getFullYear();return"".concat(n,', <br class="d-block d-sm-none" /><small>Ngày</small> ').concat(r," <small>Tháng</small> ").concat(s," <small>Năm</small> ").concat(o)}}}),N=M,q=Object(p["a"])(N,D,F,!1,null,null,null),I=q.exports,S={name:"WeatherWrapper",components:{WeatherForm:B,WeatherError:T,WeatherDate:I},data:function(){return{}},created:function(){var t,e,a=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(n){t=n.coords.longitude,e=n.coords.latitude,a.$store.dispatch("getData",{lat:e,long:t})}))},computed:Object(o["a"])({},Object(w["b"])(["getURL","getQuery","getKeyAPI","getBgBody","getIcon","getResult"])),methods:Object(o["a"])(Object(o["a"])({},Object(w["c"])(["setBgBody","setIcon"])),{},{fetchWeather:function(){""!=this.getQuery.trim()&&this.$store.dispatch("getData",{})},resetWeather:function(){this.getQuery.trim().length||(this.result={})}})},H=S,L=Object(p["a"])(H,C,_,!1,null,null,null),A=L.exports,z={name:"App",data:function(){return{projectName:"WeatherApp"}},components:{Header:f,Footer:b,WeatherWrapper:A},computed:Object(o["a"])({},Object(w["b"])(["getBgBody"]))},J=z,K=(a("cf25"),Object(p["a"])(J,r,s,!1,null,null,null)),U=K.exports,Y={key_api:"6801ae848371a19c0a769a98525a9dfb",url:"https://api.openweathermap.org/data/2.5/",query:"",bgbody:"default",icon:"clear",result:{}},G={getKeyAPI:function(t){return t.key_api},getURL:function(t){return t.url},getQuery:function(t){return t.query},getBgBody:function(t){return t.getBgBody},getIcon:function(t){return t.icon},getResult:function(t){return t.result}},V={updateQuery:function(t,e){t.query=e},setBgBody:function(t,e){t.bgbody=e},setIcon:function(t,e){t.icon=e},setResult:function(t,e){t.result=e},setBackground:function(t,e){t.bgbody=e,t.icon=e}},X=(a("d3b7"),{getData:function(t,e){var a=t.commit,n=t.state,r=e.lat,s=e.long,o="";o=r&&s?"".concat(n.url,"/weather?q=").concat(n.query,"&lat=").concat(r,"&lon=").concat(s,"&units=metric&lang=vi&appid=").concat(n.key_api):"".concat(n.url,"/weather?q=").concat(n.query,"&units=metric&lang=vi&appid=").concat(n.key_api),fetch(o).then((function(t){return t.json()})).then((function(t){if(a("setResult",t),"undefined"!=typeof t.main){var e=t.weather[0].main;a("setBackground",e.toLowerCase())}}))}});n["a"].use(w["a"]);var Z=new w["a"].Store({state:Y,getters:G,mutations:V,actions:X});n["a"].config.productionTip=!1,new n["a"]({store:Z,render:function(t){return t(U)}}).$mount("#app")},c5d4:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},cf25:function(t,e,a){"use strict";var n=a("fea6"),r=a.n(n);r.a},d1a1:function(t,e,a){"use strict";var n=a("c5d4"),r=a.n(n);r.a},e6b6:function(t,e,a){t.exports=a.p+"img/location.06edf5b1.png"},edac:function(t,e,a){"use strict";var n=a("3e0a"),r=a.n(n);r.a},fea6:function(t,e,a){}});
//# sourceMappingURL=index.6fc322dc.js.map