(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={3:0},a={3:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{1:"0ed3ed6b",2:"4146506a",4:"587b7eb4",5:"74e17f58"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r={1:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{1:"bc6cc63b",2:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=l.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===n||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],d.parentNode.removeChild(d),r(s)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",m.name="ChunkLoadError",m.type=n,m.request=o,r[1](m)}a[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var d=u;s.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("5319"),r("7d6e"),r("e54f"),r("985d"),r("31cd");var n=r("2b0e"),o=r("1f91"),a=r("42d2"),s=r("b05d"),i=r("2a19");n["a"].use(s["a"],{config:{notify:{}},lang:o["a"],iconSet:a["a"],plugins:{Notify:i["a"]}});var l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},c=[],u={name:"App"},m=u,d=r("2877"),h=Object(d["a"])(m,l,c,!1,null,null,null),p=h.exports,g=r("2f62"),f=r("bc3a"),v=r.n(f);n["a"].use(g["a"],v.a),v.a.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("token")||null}`,console.log("First method...");var b=function(){const e=new g["a"].Store({modules:{},state:{apiServer:"https://agripays-api.herokuapp.com",token:localStorage.getItem("token")||"",user:localStorage.getItem("user")||null,plans:[],products:[],userInvestments:[],userTransactions:[]},getters:{user:e=>JSON.parse(e.user),apiServer:e=>e.apiServer,plans:e=>e.plans,products:e=>e.products,investment:e=>e.investment,userInvestments:e=>e.userInvestments,userTransactions:e=>e.userTransactions},mutations:{registration_success(e,t){e.user=JSON.stringify(t)},login_success(e,t){e.user=JSON.stringify(t),console.log("After Commit>>>",e.user)},plans_fetched(e,t){e.plans=t},products_fetched(e,t){e.products=t},investment_success(e,t){e.investment=t},user_investments(e,t){e.userInvestment=t},user_transactions(e,t){e.userTransactions=t}},actions:{register({commit:e},t){return console.log("User Data",t),new Promise(((r,n)=>{delete v.a.defaults.headers.common["Authorization"],v.a.post(`${this.getters.apiServer}/auth/local/register/`,t).then((t=>{console.log(t),localStorage.setItem("token",t.data.jwt),localStorage.setItem("user",JSON.stringify(t.data.user)),v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,e("registration_success",t.data.user),r(t.data.user)})).catch((e=>{console.log(e),n(e)}))}))},login({commit:e},t){return console.log("User Data",t),new Promise(((r,n)=>{delete v.a.defaults.headers.common["Authorization"],v.a.post(`${this.getters.apiServer}/auth/local/`,t).then((t=>{console.log("After Login",t),localStorage.setItem("token",t.data.jwt),localStorage.setItem("user",JSON.stringify(t.data.user.data)),v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,e("login_success",t.data.user),r(t.data.user)})).catch((e=>{console.log(e),n(e)}))}))},logout({commit:e}){return new Promise((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),delete v.a.defaults.headers.common["Authorization"],this.$router.push("/"),e("success")}))},plans({commit:e}){v.a.get(`${this.getters.apiServer}/plans`).then((t=>{t=t.data.map((e=>({label:e.name,value:e.id}))),e("plans_fetched",t)})).catch((e=>{console.log(e)}))},products({commit:e}){v.a.get(`${this.getters.apiServer}/products`).then((t=>{t=t.data.map((e=>({label:e.name,value:e.id}))),e("products_fetched",t)})).catch((e=>{console.log(e)}))},createInvestment({commit:e},t){return new Promise(((r,n)=>{v.a.post(`${this.getters.apiServer}/investments/`,t).then((t=>{console.log(t),e("investment_success",t.data),r(t.data)})).catch((e=>{console.log(e),n(e)}))}))},getPlan({commit:e},t){return new Promise(((e,r)=>{v.a.get(`${this.getters.apiServer}/plans/${t}`).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),r(e)}))}))},refreshUser({commit:e}){console.log("Current user",this.getters.user),v.a.get(`${this.getters.apiServer}/users/${this.getters.user.id}`).then((t=>{console.log("User fetched is>>>",t.data),localStorage.setItem("user",JSON.stringify(t.data)),e("login_success",t.data)})).catch((e=>{console.log(e)}))},updateUser({commit:e},t){return new Promise(((r,n)=>{v.a.put(`${this.getters.apiServer}/users/${this.getters.user.id}`,t).then((t=>{console.log("User Updated is>>>",t),localStorage.setItem("user",JSON.stringify(t.data)),e("login_success",t.data),r("success")})).catch((e=>{n(e),console.log(e)}))}))},userInvestments({commit:e},t){return new Promise(((r,n)=>{v.a.get(`${this.getters.apiServer}/getInvestments/${t}`).then((t=>{console.log("The current users investments are",t.data),e("user_investments",t.data),r(t.data)})).catch((e=>{console.log(e),n(e)}))}))},userTransactions({commit:e},t){return new Promise(((r,n)=>{v.a.get(`${this.getters.apiServer}/getTransactions/${t}`).then((t=>{console.log("The current users transactions are",t.data),e("user_transactions",t.data),r(t.data)})).catch((e=>{console.log(e),n(e)}))}))},getInvestment({commit:e},t){return new Promise(((e,r)=>{v.a.get(`${this.getters.apiServer}/investments/${t}`).then((t=>{console.log("The current users investments are",t.data),e(t.data)})).catch((e=>{console.log(e),r(e)}))}))}},strict:!1});return e},w=r("8c4f");r("ddb0");const y=[{path:"/",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"713b")),children:[{path:"",name:"login",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))},{path:"register",name:"register",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"8b24"))},{path:"/dashboard",name:"home",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/wallet",name:"wallet",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/transactions",name:"transactions",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/account",name:"account",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/account/edit",name:"edit",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/profile",name:"profile",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/store",name:"store",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/savings",name:"savings",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/deposit/:investmentId",name:"deposit",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/food-bag",name:"food",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/new-saving",name:"newSaving",component:()=>Promise.all([r.e(0),r.e(1)]).then(r.bind(null,"ec95")),meta:{requireAtuh:!0}}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"e51e"))}];var S=y;n["a"].use(w["a"]);var P=function({store:e}){const t=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:S,mode:"hash",base:""});return t.beforeEach(((e,t,r)=>{const n=localStorage.getItem("token");e.matched.some((e=>e.meta.requireAtuh))&&!n?r({name:"login"}):r()})),t},A=async function(){const e="function"===typeof b?await b({Vue:n["a"]}):b,t="function"===typeof P?await P({Vue:n["a"],store:e}):P;e.$router=t;const r={router:t,store:e,render:e=>e(p),el:"#q-app"};return{app:r,store:e,router:t}};n["a"].prototype.$axios=v.a;const _="";async function I(){const{app:e,store:t,router:r}=await A();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[void 0];for(let c=0;!1===o&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:r,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:s,publicPath:_})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new n["a"](e)}I()},"31cd":function(e,t,r){}});