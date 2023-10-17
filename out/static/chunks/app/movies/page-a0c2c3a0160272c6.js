(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[341],{4841:function(e,t,i){Promise.resolve().then(i.bind(i,6224))},3574:function(e,t){"use strict";function NoopHead(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return NoopHead}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6224:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return medias}});var a=i(7437),l=i(2751),s=i(3421),o=i(7477),n=i(1183),d=i(1427),r=i(6630),m=i(2749),c=i(2265);function medias(){let{loggedInAccount:e,mediaData:t,setMediaData:i,setPageLoader:u,pageLoader:x}=(0,c.useContext)(d.GlobalContext),{data:p}=(0,m.useSession)();return((0,c.useEffect)(()=>{(async function(){var t;let a=await (0,r.RD)("movie",28),l=await (0,r.RD)("movie",12),s=await (0,r.RD)("movie",80),o=await (0,r.RD)("movie",35),n=await (0,r.RD)("movie",10751),d=await (0,r.RD)("movie",9648),m=await (0,r.RD)("movie",10749),c=await (0,r.RD)("movie",878),x=await (0,r.RD)("movie",10752),v=await (0,r.RD)("movie",36),h=await (0,r.RD)("movie",18),f=await (0,r.RD)("movie",53),j=await (0,r.RD)("movie",27),w=await (0,r.pK)(null==p?void 0:null===(t=p.user)||void 0===t?void 0:t.uid,null==e?void 0:e._id);console.log(w,"allFavorites"),i([{title:"Action",medias:a},{title:"Adventure",medias:l},{title:"Crime",medias:s},{title:"Comedy",medias:o},{title:"Family",medias:n},{title:"Mystery",medias:d},{title:"Horror",medias:j},{title:"History",medias:v},{title:"Romance",medias:m},{title:"Sci-Fi and Fantasy",medias:c},{title:"Thriller",medias:f},{title:"War",medias:x},{title:"Dramas",medias:h}].map(e=>({...e,medias:e.medias.map(e=>({...e,type:"movie",addedToFavorites:!!w&&!!w.length&&w.map(e=>e.movieID).indexOf(e.id)>-1}))}))),u(!1)})()},[e]),null===p)?(0,a.jsx)(n.Z,{}):null===e?(0,a.jsx)(o.Z,{}):x?(0,a.jsx)(l.Z,{}):(console.log(t,"mediaData"),(0,a.jsx)("main",{className:"flex min-h-screen flex-col",children:(0,a.jsx)(s.Z,{mediaData:t})}))}},3421:function(e,t,i){"use strict";i.d(t,{Z:function(){return CommonLayout}});var a=i(7437),l=i(9844),s=i(3574),o=i.n(s),n=i(7607),d=i(3982);function MediaRow(e){let{title:t,medias:i}=e;return(0,a.jsxs)("div",{className:"h-40 space-y-0.5 md:space-y-2 px-4",children:[(0,a.jsx)("h2",{className:"cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl",children:t}),(0,a.jsx)("div",{className:"group relative md:-ml-2",children:(0,a.jsx)("div",{className:"flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2",children:i&&i.length&&i.filter(e=>null!==e.backdrop_path&&null!==e.poster_path).map(e=>(0,a.jsx)(d.Z,{title:t,media:e},e.id))})})]})}var r=i(6691),m=i.n(r),c=i(4033),u=i(9150),x=i(2410);function Banner(e){let{medias:t}=e,i=t&&t.length?t[Math.floor(Math.random()*t.length)]:null;console.log(i,"createRandomMedia");let l=(0,c.useRouter)();return(0,a.jsxs)("div",{className:"flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24",children:[(0,a.jsxs)("div",{className:"absolute top-0 left-0 h-[95vh] w-screen -z-10",children:[(0,a.jsx)(m(),{src:"".concat("https://image.tmdb.org/t/p/original","/").concat((null==i?void 0:i.backdrop_path)||(null==i?void 0:i.poster_path)),alt:"Banner",layout:"fill",objectFit:"cover"}),(0,a.jsx)("div",{className:"absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"})]}),(0,a.jsx)("h1",{className:"text-2xl md:text-4xl lg:text-7xl font-bold",children:(null==i?void 0:i.title)||(null==i?void 0:i.name)||(null==i?void 0:i.original_name)}),(0,a.jsx)("p",{className:"max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl line-clamp-5",children:null==i?void 0:i.overview}),(0,a.jsxs)("div",{className:"flex space-x-3",children:[(0,a.jsxs)("button",{onClick:()=>l.push("/watch/".concat(null==i?void 0:i.type,"/").concat(null==i?void 0:i.id)),className:"cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black",children:[(0,a.jsx)(u.sT9,{className:"h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer"}),"Play"]}),(0,a.jsxs)("button",{className:"cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70",children:[(0,a.jsx)(x.UYI,{className:"h-5 w-5  md:h-8 md:w-8 cursor-pointer"}),"More Info"]})]})]})}function CommonLayout(e){let{mediaData:t}=e;return(0,a.jsxs)(l.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:[(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"movies-app Clone"})}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{}),(0,a.jsxs)("div",{className:"relative pl-4 pb-24 lg:space-y-24",children:[(0,a.jsx)(Banner,{medias:t&&t.length?t[0].medias:[]}),(0,a.jsx)("section",{className:"md:space-y-16",children:t&&t.length?t.map(e=>(0,a.jsx)(MediaRow,{title:e.title,medias:e.medias})):null})]})]})]})}}},function(e){e.O(0,[712,400,749,890,32,882,971,472,744],function(){return e(e.s=4841)}),_N_E=e.O()}]);