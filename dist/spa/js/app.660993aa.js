(function(e){function t(t){for(var r,o,i=t[0],l=t[1],c=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={3:0},a={3:0},s=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{1:"76205308",2:"40f0687d",4:"587b7eb4",5:"74e17f58"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={1:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"85d06e5e",2:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0"}[e]+".css",a=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===a))return t()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===r||u===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],h.parentNode.removeChild(h),n(s)},h.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var m=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,n[1](m)}a[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var m=0;m<c.length;m++)t(c[m]);var h=u;s.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),s=n("b05d"),i=n("2a19");r["a"].use(s["a"],{config:{notify:{}},lang:o["a"],iconSet:a["a"],plugins:{Notify:i["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},c=[],u={name:"App"},m=u,h=n("2877"),d=Object(h["a"])(m,l,c,!1,null,null,null),p=d.exports,g=n("2f62"),f=n("bc3a"),v=n.n(f);r["a"].use(g["a"],v.a),v.a.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("token")||null}`,console.log("First method...");var b=function(){const e=new g["a"].Store({modules:{},state:{apiServer:"https://agripays-api2.herokuapp.com",token:localStorage.getItem("token")||"",user:localStorage.getItem("user")||null,plans:[],products:[],userInvestments:[],userTransactions:[],users:[],transactions:[],savings:[]},getters:{user:e=>JSON.parse(e.user),apiServer:e=>e.apiServer,plans:e=>e.plans,products:e=>e.products,investment:e=>e.investment,userInvestments:e=>e.userInvestments,userTransactions:e=>e.userTransactions,users:e=>e.users,savings:e=>e.savings,transactions:e=>transactions.users},mutations:{registration_success(e,t){e.user=JSON.stringify(t)},login_success(e,t){e.user=JSON.stringify(t),console.log("After Commit>>>",e.user)},plans_fetched(e,t){e.plans=t},products_fetched(e,t){e.products=t},investment_success(e,t){e.investment=t},user_investments(e,t){e.userInvestment=t},user_transactions(e,t){e.userTransactions=t},users_fetched(e,t){e.users=t},savings_fetched(e,t){e.savings=t},transactions_fetched(e,t){e.transactions=t}},actions:{register({commit:e},t){return console.log("User Data",t),new Promise(((n,r)=>{delete v.a.defaults.headers.common["Authorization"],v.a.post(`${this.getters.apiServer}/auth/local/register/`,t).then((t=>{console.log(t),localStorage.setItem("token",t.data.jwt),localStorage.setItem("user",JSON.stringify(t.data.user)),v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,e("registration_success",t.data.user),n(t.data.user)})).catch((e=>{console.log(e),r(e)}))}))},login({commit:e},t){return console.log("User Data",t),new Promise(((n,r)=>{delete v.a.defaults.headers.common["Authorization"],v.a.post(`${this.getters.apiServer}/auth/local/`,t).then((t=>{console.log("After Login",t),localStorage.setItem("token",t.data.jwt),localStorage.setItem("user",JSON.stringify(t.data.user.data)),v.a.defaults.headers.common["Authorization"]="Bearer "+t.data.jwt,e("login_success",t.data.user),n(t.data.user)})).catch((e=>{console.log(e),r(e)}))}))},logout({commit:e}){return new Promise((e=>{localStorage.removeItem("token"),localStorage.removeItem("user"),delete v.a.defaults.headers.common["Authorization"],this.$router.push("/"),e("success")}))},plans({commit:e}){v.a.get(`${this.getters.apiServer}/plans`).then((t=>{t=t.data.map((e=>({label:e.name,value:e.id}))),e("plans_fetched",t)})).catch((e=>{console.log(e)}))},products({commit:e}){v.a.get(`${this.getters.apiServer}/products`).then((t=>{t=t.data.map((e=>({label:e.name,value:e.id}))),e("products_fetched",t)})).catch((e=>{console.log(e)}))},createInvestment({commit:e},t){return new Promise(((n,r)=>{v.a.post(`${this.getters.apiServer}/investments/`,t).then((t=>{console.log(t),e("investment_success",t.data),n(t.data)})).catch((e=>{console.log(e),r(e)}))}))},getPlan({commit:e},t){return new Promise(((e,n)=>{v.a.get(`${this.getters.apiServer}/plans/${t}`).then((t=>{console.log(t),e(t)})).catch((e=>{console.log(e),n(e)}))}))},refreshUser({commit:e}){console.log("Current user",this.getters.user),v.a.get(`${this.getters.apiServer}/users/${this.getters.user.id}`).then((t=>{console.log("User fetched is>>>",t.data),localStorage.setItem("user",JSON.stringify(t.data)),e("login_success",t.data)})).catch((e=>{console.log(e)}))},updateUser({commit:e},t){return new Promise(((n,r)=>{v.a.put(`${this.getters.apiServer}/users/${this.getters.user.id}`,t).then((t=>{console.log("User Updated is>>>",t),localStorage.setItem("user",JSON.stringify(t.data)),e("login_success",t.data),n("success")})).catch((e=>{r(e),console.log(e)}))}))},deleteUser({commit:e},t){return new Promise(((e,n)=>{v.a.delete(`${this.getters.apiServer}/users/${t}`).then((t=>{console.log("User Deleted is>>>",t),e("success")})).catch((e=>{n(e),console.log(e)}))}))},getUsers({commit:e}){return new Promise(((t,n)=>{v.a.get(`${this.getters.apiServer}/users/`).then((n=>{console.log("Users fetched are is>>>",n),e("users_fetched",n.data),t(n.data)})).catch((e=>{n(e),console.log(e)}))}))},getSavings({commit:e}){return new Promise(((t,n)=>{v.a.get(`${this.getters.apiServer}/investments/`).then((n=>{console.log("Savings fetched are is>>>",n),e("savings_fetched",n.data),console.log("delete"),t(n.data)})).catch((e=>{n(e),console.log(e)}))}))},completeInvestment({commit:e},t){return new Promise(((e,n)=>{v.a.put(`${this.getters.apiServer}/investments/${t}`,{status:"completed"}).then((t=>{console.log("Investment Updated>>>",t),console.log("delete"),e(t.data)})).catch((e=>{n(e),console.log(e)}))}))},getTransactions({commit:e}){return new Promise(((t,n)=>{v.a.get(`${this.getters.apiServer}/transactions/`).then((n=>{console.log("transactions fetched are is>>>",n),e("transactions_fetched",n.data),t(n.data)})).catch((e=>{n(e),console.log(e)}))}))},userInvestments({commit:e},t){return new Promise(((n,r)=>{v.a.get(`${this.getters.apiServer}/getInvestments/${t}`).then((t=>{console.log("The current users investments are",t.data),e("user_investments",t.data),n(t.data)})).catch((e=>{console.log(e),r(e)}))}))},userTransactions({commit:e},t){return new Promise(((n,r)=>{v.a.get(`${this.getters.apiServer}/getTransactions/${t}`).then((t=>{console.log("The current users transactions are",t.data),e("user_transactions",t.data),n(t.data)})).catch((e=>{console.log(e),r(e)}))}))},getInvestment({commit:e},t){return new Promise(((e,n)=>{v.a.get(`${this.getters.apiServer}/investments/${t}`).then((t=>{console.log("The current users investments are",t.data),e(t.data)})).catch((e=>{console.log(e),n(e)}))}))}},strict:!1});return e},w=n("8c4f");n("ddb0");const S=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",name:"login",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"register",name:"register",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))},{path:"/dashboard",name:"home",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/wallet",name:"wallet",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/transactions",name:"transactions",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/account",name:"account",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/account/edit",name:"edit",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/profile",name:"profile",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/store",name:"store",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/savings",name:"savings",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/deposit/:investmentId",name:"deposit",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/food-bag",name:"food",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/new-saving",name:"newSaving",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/allsavings",name:"allsavings",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/alltransactions",name:"alltransactions",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/duesavings",name:"duesavings",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}},{path:"/users",name:"users",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"ec95")),meta:{requireAtuh:!0}}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var P=S;r["a"].use(w["a"]);var y=function({store:e}){const t=new w["a"]({scrollBehavior:()=>({x:0,y:0}),routes:P,mode:"hash",base:""});return t.beforeEach(((e,t,n)=>{const r=localStorage.getItem("token");e.matched.some((e=>e.meta.requireAtuh))&&!r?n({name:"login"}):n()})),t},_=async function(){const e="function"===typeof b?await b({Vue:r["a"]}):b,t="function"===typeof y?await y({Vue:r["a"],store:e}):y;e.$router=t;const n={router:t,store:e,render:e=>e(p),el:"#q-app"};return{app:n,store:e,router:t}};r["a"].prototype.$axios=v.a;const A="";async function $(){const{app:e,store:t,router:n}=await _();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),i=[void 0];for(let c=0;!1===o&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:s,publicPath:A})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new r["a"](e)}$()},"31cd":function(e,t,n){}});