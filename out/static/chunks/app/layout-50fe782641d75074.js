(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2472:function(e,t,n){Promise.resolve().then(n.t.bind(n,2489,23)),Promise.resolve().then(n.t.bind(n,8089,23)),Promise.resolve().then(n.bind(n,3948)),Promise.resolve().then(n.bind(n,1427))},3948:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return NextAuthProvider}});var r=n(7437),u=n(2749);function NextAuthProvider(e){let{children:t}=e;return(0,r.jsx)(u.SessionProvider,{children:t})}},2751:function(e,t,n){"use strict";n.d(t,{Z:function(){return CircleLoader}});var r=n(7437);function CircleLoader(){return(0,r.jsx)("div",{id:"circle-loader",className:"circleLoader"})}},1427:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalContext:function(){return i},default:function(){return GlobalState}});var r=n(7437),u=n(2751),s=n(2749),o=n(2265);let i=(0,o.createContext)(null);function GlobalState(e){let{children:t}=e,[n,l]=(0,o.useState)(null),[a,c]=(0,o.useState)([]),[f,d]=(0,o.useState)(!0),[S,_]=(0,o.useState)([]),[v,h]=(0,o.useState)([]),[b,m]=(0,o.useState)(null),[x,N]=(0,o.useState)(!1),[P,C]=(0,o.useState)(null),[k,p]=(0,o.useState)([]),[g,j]=(0,o.useState)([]),{data:E}=(0,s.useSession)();return((0,o.useEffect)(()=>{l(JSON.parse(sessionStorage.getItem("loggedInAccount")))},[]),void 0===E)?(0,r.jsx)(u.Z,{}):(0,r.jsx)(i.Provider,{value:{loggedInAccount:n,setLoggedInAccount:l,accounts:a,setAccounts:c,pageLoader:f,mediaData:S,setMediaData:_,setPageLoader:d,searchResults:v,setSearchResults:h,currentMediaInfoIdAndType:b,setCurrentMediaInfoIdAndType:m,showDetailsPopup:x,setShowDetailsPopup:N,mediaDetails:P,setMediaDetails:C,similarMedias:k,setSimilarMedias:p,favorites:g,setFavorites:j},children:t})}},2489:function(){},8089:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}}},function(e){e.O(0,[749,971,472,744],function(){return e(e.s=2472)}),_N_E=e.O()}]);