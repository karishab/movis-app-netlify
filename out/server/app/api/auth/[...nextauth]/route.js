"use strict";(()=>{var e={};e.id=912,e.ids=[912],e.modules={72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},14300:e=>{e.exports=require("buffer")},6113:e=>{e.exports=require("crypto")},82361:e=>{e.exports=require("events")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},63477:e=>{e.exports=require("querystring")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},59796:e=>{e.exports=require("zlib")},57392:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>q,originalPathname:()=>b,requestAsyncStorage:()=>d,routeModule:()=>x,serverHooks:()=>h,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var s={};r.r(s),r.d(s,{GET:()=>c,POST:()=>c}),r(78976);var a=r(10884),o=r(16132),i=r(94020),n=r.n(i),u=r(90596);let p={providers:[(0,u.Z)({clientId:"Iv1.b07f6c15d41f7661",clientSecret:"d9366cbc229dc18b484125a95eb54523851ba256"})],callbacks:{session:async({session:e,token:t,user:r})=>(e.user.username=e?.user?.name.split(" ").join("").toLocaleLowerCase(),e.user.uid=t.sub,e)},secret:"default_secret_key"},c=n()(p),x=new a.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"/home/dci-student/Desktop/movis-app-netlify/src/app/api/auth/[...nextauth]/route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:l,serverHooks:h,headerHooks:q,staticGenerationBailout:m}=x,b="/api/auth/[...nextauth]/route"}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[657,933,449,580],()=>__webpack_exec__(57392));module.exports=r})();