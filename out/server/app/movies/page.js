(()=>{var e={};e.id=341,e.ids=[341],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},77186:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>c,originalPathname:()=>p,pages:()=>m,routeModule:()=>u,tree:()=>d});var a=i(67096),s=i(16132),o=i(37284),r=i.n(o),n=i(32564),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);i.d(t,l);let d=["",{children:["movies",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,34706)),"/home/dci-student/Desktop/movis-app-netlify/src/app/movies/page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,87181)),"/home/dci-student/Desktop/movis-app-netlify/src/app/layout.js"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/dci-student/Desktop/movis-app-netlify/src/app/movies/page.js"],p="/movies/page",c={require:i,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/movies/page",pathname:"/movies",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},40558:(e,t,i)=>{Promise.resolve().then(i.bind(i,2411))},2411:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>medias});var a=i(30784),s=i(99775),o=i(57040),r=i(28992),n=i(65678),l=i(84177),d=i(38434),m=i(74284),p=i(9885);function medias(){let{loggedInAccount:e,mediaData:t,setMediaData:i,setPageLoader:c,pageLoader:u}=(0,p.useContext)(l.GlobalContext),{data:v}=(0,m.useSession)();return((0,p.useEffect)(()=>{(async function(){let t=await (0,d.RD)("movie",28),a=await (0,d.RD)("movie",12),s=await (0,d.RD)("movie",80),o=await (0,d.RD)("movie",35),r=await (0,d.RD)("movie",10751),n=await (0,d.RD)("movie",9648),l=await (0,d.RD)("movie",10749),m=await (0,d.RD)("movie",878),p=await (0,d.RD)("movie",10752),u=await (0,d.RD)("movie",36),x=await (0,d.RD)("movie",18),_=await (0,d.RD)("movie",53),f=await (0,d.RD)("movie",27),h=await (0,d.pK)(v?.user?.uid,e?._id);console.log(h,"allFavorites"),i([{title:"Action",medias:t},{title:"Adventure",medias:a},{title:"Crime",medias:s},{title:"Comedy",medias:o},{title:"Family",medias:r},{title:"Mystery",medias:n},{title:"Horror",medias:f},{title:"History",medias:u},{title:"Romance",medias:l},{title:"Sci-Fi and Fantasy",medias:m},{title:"Thriller",medias:_},{title:"War",medias:p},{title:"Dramas",medias:x}].map(e=>({...e,medias:e.medias.map(e=>({...e,type:"movie",addedToFavorites:!!h&&!!h.length&&h.map(e=>e.movieID).indexOf(e.id)>-1}))}))),c(!1)})()},[e]),null===v)?a.jsx(n.Z,{}):null===e?a.jsx(r.Z,{}):u?a.jsx(s.Z,{}):(console.log(t,"mediaData"),a.jsx("main",{className:"flex min-h-screen flex-col",children:a.jsx(o.Z,{mediaData:t})}))}},34706:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>r,__esModule:()=>o,default:()=>l});var a=i(95153);let s=(0,a.createProxy)(String.raw`/home/dci-student/Desktop/movis-app-netlify/src/app/movies/page.js`),{__esModule:o,$$typeof:r}=s,n=s.default,l=n}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),i=t.X(0,[126,657,857,964,889,673,146,131,416,40],()=>__webpack_exec__(77186));module.exports=i})();