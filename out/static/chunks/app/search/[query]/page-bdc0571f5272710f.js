(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171],{3853:function(e,t,i){Promise.resolve().then(i.bind(i,2453))},2453:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Search}});var n=i(7437),s=i(2751),o=i(7477),a=i(1183),l=i(1427),r=i(6630),d=i(2749),u=i(4033),c=i(2265),p=i(9844),h=i(7607),m=i(3982);function Search(){let{loggedInAccount:e,searchResults:t,pageLoader:i,setPageLoader:v,setSearchResults:x}=(0,c.useContext)(l.GlobalContext),{data:f}=(0,d.useSession)(),w=(0,u.useParams)();return((0,c.useEffect)(()=>{(async function(){var t;let i=await (0,r.to)("tv",w.query),n=await (0,r.to)("movie",w.query),s=await (0,r.pK)(null==f?void 0:null===(t=f.user)||void 0===t?void 0:t.uid,null==e?void 0:e._id);x([...i.filter(e=>null!==e.backdrop_path&&null!==e.poster_path).map(e=>({...e,type:"tv",addedToFavorites:!!s&&!!s.length&&s.map(e=>e.movieID).indexOf(e.id)>-1})),...n.filter(e=>null!==e.backdrop_path&&null!==e.poster_path).map(e=>({...e,type:"movie",addedToFavorites:!!s&&!!s.length&&s.map(e=>e.movieID).indexOf(e.id)>-1}))]),v(!1),console.log(i,n)})()},[e]),null===f)?(0,n.jsx)(a.Z,{}):null===e?(0,n.jsx)(o.Z,{}):i?(0,n.jsx)(s.Z,{}):(0,n.jsxs)(p.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:[(0,n.jsx)(h.Z,{}),(0,n.jsxs)("div",{className:"mt-[100px] space-y-0.5 md:space-y-2 px-4",children:[(0,n.jsxs)("h2",{className:"cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl",children:["Showing Results for ",decodeURI(w.query)]}),(0,n.jsx)("div",{className:"grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2",children:t&&t.length?t.map(e=>(0,n.jsx)(m.Z,{media:e,searchView:!0},e.id)):null})]})]})}}},function(e){e.O(0,[712,749,890,32,882,971,472,744],function(){return e(e.s=3853)}),_N_E=e.O()}]);