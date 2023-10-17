"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{2751:function(e,t,n){n.d(t,{Z:function(){return CircleLoader}});var a=n(7437);function CircleLoader(){return(0,a.jsx)("div",{id:"circle-loader",className:"circleLoader"})}},7477:function(e,t,n){n.d(t,{Z:function(){return ManageAccounts}});var a=n(7437),o=n(1427),s=n(2749),i=n(2265),l=n(2751),c=n(9844);function AccountForm(e){let{showAccountForm:t,formData:n,setFormData:o,handleSave:s}=e;return t&&(0,a.jsx)(c.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:(0,a.jsx)("div",{className:"px-8 py-8 h-[300px] fixed top-[10px] gap-3 flex flex-col items-start right-[10px] bg-black opacity-[0.85] z-[999]",children:(0,a.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,a.jsx)("input",{name:"name",type:"text",value:n.name,onChange:e=>o({...n,[e.target.name]:e.target.value}),placeholder:"Enter your name",className:"px-5 py-3 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none"}),(0,a.jsx)("input",{name:"pin",type:"password",value:n.pin,onChange:e=>o({...n,[e.target.name]:e.target.value}),maxLength:4,placeholder:"Enter your PIN",className:"px-5 py-3 rounded-lg placeholder:text-red-700 text-lg text-[#e5b109] outline-none focus:outline-none"}),(0,a.jsx)("button",{onClick:s,className:"border p-4 bg-[#e5b109] outline-none rounded-lg text-black text-lg font-bold",children:"Save"})]})})})}var r=n(7227),d=n(22),u=n.n(d);function PinContainer(e){let{showPinContainer:t,pinError:n,setShowPinContainer:o,handlePinSubmit:s,setPinError:i,pin:l,setPin:c}=e;return t&&(0,a.jsxs)("div",{className:"z-[100] bg-[#141414] flex-col min-h-screen absolute left-0 top-0 justify-center flex items-center right-0",children:[(0,a.jsx)("div",{children:(0,a.jsx)("span",{onClick:()=>{o({...t,show:!1}),c(""),i(!1)},className:"cursor-pointer absolute top-[50px] right-[40px]",children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"svg-icon svg-icon-close ltr-0 e1mhci4z1","data-name":"X","aria-hidden":"true",children:(0,a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z",fill:"currentColor"})})})}),(0,a.jsx)("h1",{className:"text-gray-400 font-bold text-[16px] mb-4",children:"Profile Lock is currently ON"}),n?(0,a.jsx)("h2",{className:"text-[#e6b209] font-bold text-[30px]",children:"Whoops, wrong PIN. Please try again"}):(0,a.jsx)("h2",{className:"text-white font-bold text-[30px]",children:"Enter your PIN to access this profile"}),(0,a.jsx)(u(),{length:4,initialValue:l,secret:!0,secretDelay:100,onChange:(e,t)=>c(e),type:"numeric",inputMode:"number",style:{padding:"20px",display:"flex",gap:"10px"},inputStyle:{borderColor:"white",height:"70px",width:"70px",fontSize:"40px"},inputFocusStyle:{borderColor:"white"},onComplete:(e,t)=>s(e,t),autoSelect:!0})]})}var h=n(4033);let p={name:"",pin:""};function ManageAccounts(){let{accounts:e,setAccounts:t,pageLoader:n,setPageLoader:c,setLoggedInAccount:d}=(0,i.useContext)(o.GlobalContext),[u,m]=(0,i.useState)(!1),[x,v]=(0,i.useState)(p),[f,g]=(0,i.useState)(!1),[w,y]=(0,i.useState)(""),[j,b]=(0,i.useState)(!1),[N,S]=(0,i.useState)({show:!1,account:null}),{data:C}=(0,s.useSession)(),k=(0,h.usePathname)(),T=(0,h.useRouter)();async function getAllAccounts(){var e;let n=await fetch("/api/account/get-all-accounts?id=".concat(null==C?void 0:null===(e=C.user)||void 0===e?void 0:e.uid),{method:"GET"}),a=await n.json();console.log(a),a&&a.data&&a.data.length&&t(a.data),c(!1)}async function handleSave(){var e;let t=await fetch("/api/account/create-account",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...x,uid:null==C?void 0:null===(e=C.user)||void 0===e?void 0:e.uid})}),n=await t.json();n.success?(getAllAccounts(),v(p),m(!1)):getAllAccounts(),console.log(n,"datadata")}async function handleRemoveAccount(e){let t=await fetch("/api/account/remove-account?id=".concat(e._id),{method:"DELETE"}),n=await t.json();n.success&&(getAllAccounts(),g(!1))}async function handlePinSubmit(e,t){var n,a,o;c(!0);let s=await fetch("/api/account/login-to-account",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({uid:null==C?void 0:null===(n=C.user)||void 0===n?void 0:n.uid,accountId:N.account._id,pin:e})}),i=await s.json();i.success?(d(N.account),sessionStorage.setItem("loggedInAccount",JSON.stringify(N.account)),k.includes("my-list")?T.push("/my-list/".concat(null==C?void 0:null===(a=C.user)||void 0===a?void 0:a.uid,"/").concat(null===(o=N.account)||void 0===o?void 0:o._id)):T.push(k),c(!1)):(c(!1),b(!0),y(""))}return((0,i.useEffect)(()=>{getAllAccounts()},[]),console.log(n,"accounts"),n)?(0,a.jsx)(l.Z,{}):(0,a.jsxs)("div",{className:"min-h-screen flex justify-center flex-col items-center relative",children:[(0,a.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[(0,a.jsx)("h1",{className:"text-white font-bold text-[54px] my-[36px]",children:"Who's Watching?"}),(0,a.jsxs)("ul",{className:"flex p-0 my-[25px]",children:[e&&e.length?e.map(e=>(0,a.jsxs)("li",{className:"max-w-[200px] w-[155px] cursor-pointer flex flex-col items-center gap-3 min-w-[200px]",onClick:f?null:()=>S({show:!0,account:e}),children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("img",{src:"https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4",alt:"Account",className:"max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] object-cover w-[155px] h-[155px]"}),f?(0,a.jsx)("div",{onClick:()=>handleRemoveAccount(e),className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer",children:(0,a.jsx)(r.Z,{width:30,height:30,color:"black"})}):null]}),(0,a.jsx)("span",{className:"mb-4",children:e.name}),(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"svg-icon svg-icon-profile-lock ltr-0 e1mhci4z1","data-name":"Lock","aria-hidden":"true",children:(0,a.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V7H19C20.1046 7 21 7.89543 21 9V18.6529C21 19.6274 20.2885 20.4855 19.2814 20.6076C18.0287 20.7593 15.492 21 12 21C8.50801 21 5.97128 20.7593 4.71855 20.6076C3.71153 20.4855 3 19.6274 3 18.6529V9C3 7.89543 3.89543 7 5 7H7V6ZM15 6V7H9V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6ZM5 9V18.627C6.19927 18.7708 8.63769 19 12 19C15.3623 19 17.8007 18.7708 19 18.627V9H5ZM11 12V16H13V12H11Z",fill:"currentColor"})})]},e._id)):null,e&&e.length<4?(0,a.jsx)("li",{onClick:()=>m(!u),className:"border text-black bg-[#e5b109] font-bold text-lg border-black max-w-[200px] rounded min-w-[84px] max-h-[200px] min-h-[84px] w-[155px] h-[155px] cursor-pointer flex justify-center items-center",children:"Add Account"}):null]}),(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("span",{onClick:()=>g(!f),className:"border border-gray-100 cursor-pointer tracking-wide inline-flex text-sm px-[1.5em] py-[0.5em]",children:"Manage Profiles"})})]}),(0,a.jsx)(PinContainer,{pin:w,setPin:y,pinError:j,setPinError:b,showPinContainer:N.show,setShowPinContainer:S,handlePinSubmit:handlePinSubmit}),(0,a.jsx)(AccountForm,{handleSave:handleSave,formData:x,setFormData:v,showAccountForm:u})]})}},3982:function(e,t,n){n.d(t,{Z:function(){return MediaItem}});var a=n(7437),o=n(9844),s=n(6691),i=n.n(s),l=n(7805),c=n(5255),r=n(4164),d=n(4033),u=n(2265),h=n(1427),p=n(2749),m=n(6630);function MediaItem(e){let{media:t,searchView:n=!1,similarMovieView:s=!1,listView:x=!1,title:v}=e,f=(0,d.useRouter)(),g=(0,d.usePathname)(),{setShowDetailsPopup:w,loggedInAccount:y,setFavorites:j,setCurrentMediaInfoIdAndType:b,similarMedias:N,searchResults:S,setSearchResults:C,setSimilarMedias:k,setMediaData:T,mediaData:A}=(0,u.useContext)(h.GlobalContext),{data:M}=(0,p.useSession)();async function updateFavorites(){var e;let t=await (0,m.pK)(null==M?void 0:null===(e=M.user)||void 0===e?void 0:e.uid,null==y?void 0:y._id);t&&j(t.map(e=>({...e,addedToFavorites:!0})))}async function handleAddToFavorites(e){var t;let{backdrop_path:a,poster_path:o,id:i,type:l}=e,c=await fetch("/api/favorites/add-favorite",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({backdrop_path:a,poster_path:o,movieID:i,type:l,uid:null==M?void 0:null===(t=M.user)||void 0===t?void 0:t.uid,accountID:null==y?void 0:y._id})}),r=await c.json();if(r&&r.success){if(g.includes("my-list")&&updateFavorites(),n){let e=[...S],t=e.findIndex(e=>e.id===i);e[t]={...e[t],addedToFavorites:!0},C(e)}else if(s){let e=[...N],t=e.findIndex(e=>e.id===i);e[t]={...e[t],addedToFavorites:!0},k(e)}else{let e=[...A],t=e.findIndex(e=>e.title===v),n=e[t].medias,a=n.findIndex(e=>e.id===i);n[a]={...n[a],addedToFavorites:!0},T(e)}}console.log(r,"sangam")}async function handleRemoveFavorites(e){let t=await fetch("/api/favorites/remove-favorite?id=".concat(e._id),{method:"DELETE"}),n=await t.json();n.success&&updateFavorites()}return(0,a.jsx)(o.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5,ease:[0,.71,.2,1.01]},children:(0,a.jsxs)("div",{className:"relative cardWrapper h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] transform transition duration-500 hover:scale-110 hover:z-[999]",children:[(0,a.jsx)(i(),{src:"".concat("https://image.tmdb.org/t/p/w500").concat((null==t?void 0:t.backdrop_path)||(null==t?void 0:t.poster_path)),alt:"Media",layout:"fill",className:"rounded sm object-cover md:rounded hover:rounded-sm",onClick:()=>f.push("/watch/".concat(null==t?void 0:t.type,"/").concat(x?null==t?void 0:t.movieID:null==t?void 0:t.id))}),(0,a.jsxs)("div",{className:"space-x-3 hidden absolute p-2 bottom-0 buttonWrapper",children:[(0,a.jsx)("button",{onClick:(null==t?void 0:t.addedToFavorites)?x?()=>handleRemoveFavorites(t):null:()=>handleAddToFavorites(t),className:"".concat((null==t?void 0:t.addedToFavorites)&&!x&&"cursor-not-allowed"," cursor-pointer border flex p-2 items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90 border-white   bg-black opacity-75 text-black"),children:(null==t?void 0:t.addedToFavorites)?(0,a.jsx)(l.Z,{color:"#ffffff",className:"h-7 w-7"}):(0,a.jsx)(c.Z,{color:"#ffffff",className:"h-7 w-7"})}),(0,a.jsx)("button",{onClick:()=>{w(!0),b({type:null==t?void 0:t.type,id:x?null==t?void 0:t.movieID:null==t?void 0:t.id})},className:"cursor-pointer p-2 border flex items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90  border-white  bg-black opacity-75 ",children:(0,a.jsx)(r.Z,{color:"#fffffff",className:"h-7 w-7"})})]})]})})}},7607:function(e,t,n){n.d(t,{Z:function(){return Navbar}});var a=n(7437),o=n(2749),s=n(4033),i=n(2265),l=n(9150);function Search(e){let{pathName:t,router:n,searchQuery:o,setSearchQuery:s,setPageLoader:i,setShowSearchBar:c}=e;return(0,a.jsx)("div",{className:"hidden md:flex justify-center items-center text-center",children:(0,a.jsxs)("div",{className:"bg-[rgba(0,0,0,0.75)] border border-[hsla(0,0%,100%,0.85)] px-4 items-center text-center flex",children:[(0,a.jsx)("div",{className:"order-2",children:(0,a.jsx)("input",{name:"search",value:o,onKeyUp:function(e){"Enter"===e.key&&o&&""!==o.trim()&&(i(!0),t.includes("/search")?n.replace("/search/".concat(o)):n.push("/search/".concat(o)))},onChange:e=>s(e.target.value),placeholder:"Search Movies, TV and Dramas",className:"bg-transparent text-[14px] font-medium h-[34px] px-4 py-2 placeholder:text-[14px] font-md text-white outline-none w-[210px]"})}),(0,a.jsx)("button",{className:"px-2.5",children:(0,a.jsx)(l.RB5,{onClick:()=>c(!1),className:"hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"})})]})})}var c=n(1427);function AccountPopup(e){let{accounts:t,setLoggedInAccount:n,signOut:o,loggedInAccount:s,setPageLoader:i}=e;return(0,a.jsxs)("div",{className:"px-8 py-8 fixed top-[50px] gap-3 flex flex-col items-start right-[45px] bg-black opacity-[.85] z-[999]",children:[(0,a.jsx)("div",{className:"flex flex-col gap-3",children:t&&t.length?t.filter(e=>e._id!==(null==s?void 0:s._id)).map(e=>(0,a.jsxs)("div",{onClick:()=>{n(null),sessionStorage.removeItem("loggedInAccount")},className:"cursor-pointer flex gap-5",children:[(0,a.jsx)("img",{src:"https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4",alt:"Current Profile",className:"max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"}),(0,a.jsx)("p",{className:"mb-4",children:e.name})]},e._id)):null}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{onClick:()=>{i(!0),o(),n(null),sessionStorage.removeItem("loggedInAccount")},children:"Sign out of Movies-App"})})]})}var r=n(2751),d=n(9844),u=n(1835),h=n(6689),p=n(6630),m=n(429),x=n(3982);function DetailsPopup(e){let{show:t,setShow:n}=e,{mediaDetails:r,setMediaDetails:v,similarMedias:f,setSimilarMedias:g,currentMediaInfoIdAndType:w,setCurrentMediaInfoIdAndType:y,loggedInAccount:j}=(0,i.useContext)(c.GlobalContext),[b,N]=(0,i.useState)(""),S=(0,s.useRouter)(),{data:C}=(0,o.useSession)();function handleClose(){n(!1),y(null)}return console.log(w),(0,i.useEffect)(()=>{null!==w&&async function(){var e,t,n,a,o;let s=await (0,p.Om)(w.type,w.id),i=await (0,p.WX)(w.type,w.id),l=await (0,p.pK)(null==C?void 0:null===(e=C.user)||void 0===e?void 0:e.uid,null==j?void 0:j._id);console.log(s,"extractMediaDetails");let c=s&&s.videos&&s.videos.results&&s.videos.results.length?s.videos.results.findIndex(e=>"Trailer"===e.type):-1,r=s&&s.videos&&s.videos.results&&s.videos.results.length?s.videos.results.findIndex(e=>"Clip"===e.type):-1;v(s),N(-1!==c?null===(n=s.videos)||void 0===n?void 0:null===(t=n.results[c])||void 0===t?void 0:t.key:-1!==r?null===(o=s.videos)||void 0===o?void 0:null===(a=o.results[r])||void 0===a?void 0:a.key:"XuDwndGaCFo"),g(i.map(e=>({...e,type:"movie"===w.type?"movie":"tv",addedToFavorites:!!l&&!!l.length&&l.map(e=>e.movieID).indexOf(e.id)>-1})))}()},[w,j]),(0,a.jsx)(d.E.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5,ease:[0,.71,.2,1.01]},children:(0,a.jsx)(u.Z,{open:t,onClose:handleClose,className:"fixed !top-7 left-0 right-0 z-50 w-full mx-auto max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:handleClose,className:"modalButton flex items-center justify-center absolute top-5 right-5 bg-[#181818] hover:bg-[#181818] !z-40 border-none h-9 w-9",children:(0,a.jsx)(h.Z,{className:"h-6 w-6"})}),(0,a.jsxs)("div",{className:"relative pt-[56.25%]",children:[(0,a.jsx)(m.Z,{url:"https://www.youtube.com/watch?v=".concat(b),width:"100%",height:"100%",style:{position:"absolute",top:"0",left:"0"},playing:!0,controls:!0}),(0,a.jsx)("div",{className:"absolute bottom-[4.25rem] flex w-full items-center justify-between pl-[1.5rem]",children:(0,a.jsx)("div",{children:(0,a.jsxs)("button",{onClick:()=>S.push("/watch/".concat(null==w?void 0:w.type,"/").concat(null==w?void 0:w.id)),className:"cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black",children:[(0,a.jsx)(l.sT9,{className:"h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer"}),"Play"]})})})]}),(0,a.jsxs)("div",{className:"rounded-b-md bg-[#181818] p-8",children:[(0,a.jsx)("div",{className:"space-x-2 pb-4 flex gap-4",children:(0,a.jsxs)("div",{className:"text-green-400 font-semibold flex gap-2",children:[(0,a.jsx)("span",{children:(null==r?void 0:r.release_date)?null==r?void 0:r.release_date.split("-")[0]:"2023"}),(0,a.jsx)("div",{className:"inline-flex border-2 border-white/40 rounded px-2",children:"HD"})]})}),(0,a.jsx)("h2",{className:"mt-10 mb-6 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl",children:"More Like This"}),(0,a.jsx)("div",{className:"grid grid-cols-5 gap-3 items-center scrollbar-hide md:p-2",children:f&&f.length?f.filter(e=>null!==e.backdrop_path&&null!==e.poster_path).map(e=>(0,a.jsx)(x.Z,{media:e,similarMovieView:!0},e.id)):null})]})]})})})}function Navbar(){var e;let{data:t}=(0,o.useSession)(),[n,d]=(0,i.useState)(!1),[u,h]=(0,i.useState)(!1),[p,m]=(0,i.useState)(""),[x,v]=(0,i.useState)(!1),f=(0,s.useRouter)(),g=(0,s.usePathname)(),{setPageLoader:w,loggedInAccount:y,setAccounts:j,accounts:b,setLoggedInAccount:N,pageLoader:S,showDetailsPopup:C,setShowDetailsPopup:k}=(0,i.useContext)(c.GlobalContext),T=[{id:"home",title:"Home",path:"/browse"},{id:"tv",title:"TV",path:"/tv"},{id:"movies",title:"Movies",path:"/movies"},{id:"my-list",title:"My List",path:"/my-list/".concat(null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.uid,"/").concat(null==y?void 0:y._id)}];async function getAllAccounts(){var e;let n=await fetch("/api/account/get-all-accounts?id=".concat(null==t?void 0:null===(e=t.user)||void 0===e?void 0:e.uid),{method:"GET"}),a=await n.json();console.log(a),a&&a.data&&a.data.length&&j(a.data),w(!1)}return((0,i.useEffect)(()=>{let handleScroll=()=>{window.scrollY>0?d(!0):d(!1)};return window.addEventListener("scroll",handleScroll),()=>{window.removeEventListener("scroll",handleScroll)}},[]),(0,i.useEffect)(()=>{getAllAccounts()},[]),S)?(0,a.jsx)(r.Z,{}):(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("header",{className:"header ".concat(n&&"bg-[#141414]"," hover:bg-[#141414]"),children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2 md:space-x-10",children:[(0,a.jsx)("img",{src:"https://rb.gy/ulxxee",width:120,height:120,alt:"Movies-App",className:"cursor-pointer object-contain",onClick:()=>f.push("/browse")}),(0,a.jsx)("ul",{className:"hidden md:space-x-4 md:flex cursor-pointer",children:T.map(e=>(0,a.jsx)("li",{onClick:()=>{w(!0),f.push(e.path),m(""),h(!1)},className:"cursor-pointer text-[16px] font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]",children:e.title},e.id))})]}),(0,a.jsxs)("div",{className:"font-light flex items-center space-x-4 text-sm",children:[u?(0,a.jsx)(Search,{pathName:g,router:f,searchQuery:p,setSearchQuery:m,setPageLoader:w,setShowSearchBar:h}):(0,a.jsx)(l.RB5,{onClick:()=>h(!0),className:"hidden sm:inline sm:w-6 sm:h-6 cursor-pointer"}),(0,a.jsxs)("div",{onClick:()=>v(!x),className:"flex gap-2 items-center cursor-pointer",children:[(0,a.jsx)("img",{src:"https://occ-0-2611-3663.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4",alt:"Current Profile",className:"max-w-[30px] rounded min-w-[20px] max-h-[30px] min-h-[20px] object-cover w-[30px] h-[30px]"}),(0,a.jsx)("p",{children:y&&y.name})]})]})]}),(0,a.jsx)(DetailsPopup,{show:C,setShow:k}),x&&(0,a.jsx)(AccountPopup,{accounts:b,setPageLoader:w,signOut:o.signOut,loggedInAccount:y,setLoggedInAccount:N})]})}},1183:function(e,t,n){n.d(t,{Z:function(){return UnauthPage}});var a=n(7437),o=n(2749),s=n(9844),i=n(5255),l=n(4033),c=n(2265);let r=[{ques:"What is Movies-App?",ans:"Movies-App is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"},{ques:"How much does Movies-App cost",ans:"Watch Movies-App on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."},{ques:"What can I watch on Movies-App?",ans:"Watch anywhere, anytime. Sign in with your Movies-App account to watch instantly on the web at Movies-App from your personal computer or on any internet-connected device that offers the Movies-App, including smart TVs, smartphones, tablets, streaming media players and game consoles.\n\n    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Movies-App with you anywhere."},{ques:"How do I cancel?",ans:"Movies-App is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},{ques:"What can I watch on Movies-App?",ans:"Movies-App has an extensive library of feature films, documentaries, TV shows, anime, award-winning Movies-App originals, and more. Watch as much as you want, anytime you want."},{ques:"Is Movies-App good for kids?",ans:"The Movies-App Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.\n\nKids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}];function UnauthBanner(e){let{router:t}=e;return(0,a.jsx)("div",{className:"h-[65vh] sm:h-[90vh] xl:h-[95vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ",children:(0,a.jsxs)("div",{className:"bg-black bg-opacity-70 h-[100vh] ",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("img",{src:"https://rb.gy/ulxxee",alt:"Movies-App",width:120,height:120,className:"w-28 sm:w-36 lg:w-52 ml-4 sm:ml-8 pt-4",onClick:()=>t.push("/")}),(0,a.jsx)("div",{className:"flex mr-4 sm:mr-10",children:(0,a.jsx)("button",{onClick:()=>(0,o.signIn)("github"),className:"h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded",children:"Sign In"})})]}),(0,a.jsxs)("div",{className:"h-[55vh] sm:h-[80vh] w-[90%] md:w-[80%] mx-[5%] md:mx-[10%] flex flex-col items-center justify-center text-white text-center",children:[(0,a.jsx)("h1",{className:"text-2xl sm:text-4xl lg:text-5xl xl:text-6xl sm:px-[15%] md:px-[15%] lg:mx-14 lg:px-[7%] xl:px-[15%] font-medium",children:"Unlimited movies, TV shows, and more.."}),(0,a.jsx)("h2",{className:"text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4",children:"Watch anywhere. Cancel anytime."}),(0,a.jsx)("div",{className:"flex  justify-center",children:(0,a.jsx)("button",{onClick:()=>(0,o.signIn)("github"),className:"bg-red-600 hover:bg-[#e50914] p-4 rounded",children:"Sign In to Get Started"})})]})]})})}function UnauthPage(){let e=(0,l.useRouter)(),[t,n]=(0,c.useState)(null);return(0,a.jsx)(s.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:"bg-[#000000]",children:[(0,a.jsx)(UnauthBanner,{router:e}),(0,a.jsx)("div",{className:"border-b-8 border-gray-800 pb-8",children:(0,a.jsxs)("div",{className:"flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 md:px-28 lg:px-48 xl:px-80 mt-3 sm:mt-14",children:[(0,a.jsx)("h1",{className:"mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0",children:"Frequently asked questions"}),r.map((e,o)=>(0,a.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,a.jsxs)("div",{onClick:()=>n(t===o?null:o),className:"flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer",children:[(0,a.jsx)("h2",{children:e.ques}),(0,a.jsx)(i.Z,{className:"h-7 w-7",color:"white"})]}),t===o&&(0,a.jsx)("div",{className:"p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer",children:e.ans})]}))]})})]})})})}},1427:function(e,t,n){n.r(t),n.d(t,{GlobalContext:function(){return l},default:function(){return GlobalState}});var a=n(7437),o=n(2751),s=n(2749),i=n(2265);let l=(0,i.createContext)(null);function GlobalState(e){let{children:t}=e,[n,c]=(0,i.useState)(null),[r,d]=(0,i.useState)([]),[u,h]=(0,i.useState)(!0),[p,m]=(0,i.useState)([]),[x,v]=(0,i.useState)([]),[f,g]=(0,i.useState)(null),[w,y]=(0,i.useState)(!1),[j,b]=(0,i.useState)(null),[N,S]=(0,i.useState)([]),[C,k]=(0,i.useState)([]),{data:T}=(0,s.useSession)();return((0,i.useEffect)(()=>{c(JSON.parse(sessionStorage.getItem("loggedInAccount")))},[]),void 0===T)?(0,a.jsx)(o.Z,{}):(0,a.jsx)(l.Provider,{value:{loggedInAccount:n,setLoggedInAccount:c,accounts:r,setAccounts:d,pageLoader:u,mediaData:p,setMediaData:m,setPageLoader:h,searchResults:x,setSearchResults:v,currentMediaInfoIdAndType:f,setCurrentMediaInfoIdAndType:g,showDetailsPopup:w,setShowDetailsPopup:y,mediaDetails:j,setMediaDetails:b,similarMedias:N,setSimilarMedias:S,favorites:C,setFavorites:k},children:t})}},6630:function(e,t,n){n.d(t,{FN:function(){return getTrendingMedias},Lm:function(){return getTVorMovieVideosByID},Ob:function(){return getPopularMedias},Om:function(){return getTVorMovieDetailsByID},RD:function(){return getTVorMoviesByGenre},WX:function(){return getSimilarTVorMovies},Wt:function(){return getTopratedMedias},pK:function(){return getAllfavorites},to:function(){return getTVorMovieSearchResults}});let a="4729f8046d161c403075a83612cd6838",o="https://api.themoviedb.org/3",getTrendingMedias=async e=>{try{let t=await fetch("".concat(o,"/trending/").concat(e,"/day?api_key=").concat(a,"&language=en-US"),{method:"GET"}),n=await t.json();return n&&n.results}catch(e){console.log(e)}},getTopratedMedias=async e=>{try{let t=await fetch("".concat(o,"/").concat(e,"/top_rated?api_key=").concat(a,"&language=en-US"),{method:"GET"}),n=await t.json();return n&&n.results}catch(e){console.log(e)}},getPopularMedias=async e=>{try{let t=await fetch("".concat(o,"/").concat(e,"/popular?api_key=").concat(a,"&language=en-US"),{method:"GET"}),n=await t.json();return n&&n.results}catch(e){console.log(e)}},getTVorMoviesByGenre=async(e,t)=>{try{let n=await fetch("".concat(o,"/discover/").concat(e,"?api_key=").concat(a,"&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=").concat(t),{method:"GET"}),s=await n.json();return s&&s.results}catch(e){console.log(e)}},getTVorMovieVideosByID=async(e,t)=>{try{let n=await fetch("".concat(o,"/").concat(e,"/").concat(t,"/videos?api_key=").concat(a,"&language=en-US&append_to_response=videos"),{method:"GET"}),s=await n.json();return s}catch(e){console.log(e)}},getTVorMovieSearchResults=async(e,t)=>{try{let n=await fetch("".concat(o,"/search/").concat(e,"?api_key=").concat(a,"&include_adult=false&language=en-US&query=").concat(t),{method:"GET"}),s=await n.json();return s&&s.results}catch(e){console.log(e)}},getTVorMovieDetailsByID=async(e,t)=>{try{let n=await fetch("".concat(o,"/").concat(e,"/").concat(t,"?api_key=").concat(a,"&language=en-US&append_to_response=videos"),{method:"GET"}),s=await n.json();return s}catch(e){console.log(e)}},getSimilarTVorMovies=async(e,t)=>{try{let n=await fetch("".concat(o,"/").concat(e,"/").concat(t,"/similar?api_key=").concat(a,"&language=en-US"),{method:"GET"}),s=await n.json();return s&&s.results}catch(e){console.log(e)}},getAllfavorites=async(e,t)=>{try{let n=await fetch("/api/favorites/get-all-favorites?id=".concat(e,"&accountID=").concat(t),{method:"GET"}),a=await n.json();return a&&a.data}catch(e){console.log(e)}}}}]);