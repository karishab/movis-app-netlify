"use strict";exports.id=40,exports.ids=[40],exports.modules={57040:(e,t,s)=>{s.d(t,{Z:()=>CommonLayout});var l=s(30784),a=s(38e3),i=s(71298),o=s.n(i),r=s(7600),n=s(41118);function MediaRow({title:e,medias:t}){return(0,l.jsxs)("div",{className:"h-40 space-y-0.5 md:space-y-2 px-4",children:[l.jsx("h2",{className:"cursor-pointer text-sm font-semibold text-[#e5e5e5] transition-colors duration-200 hover:text-white md:text-2xl",children:e}),l.jsx("div",{className:"group relative md:-ml-2",children:l.jsx("div",{className:"flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2",children:t&&t.length&&t.filter(e=>null!==e.backdrop_path&&null!==e.poster_path).map(t=>l.jsx(n.Z,{title:e,media:t},t.id))})})]})}var d=s(52451),c=s.n(d),m=s(57114),x=s(15816),p=s(12772);function Banner({medias:e}){let t=e&&e.length?e[Math.floor(Math.random()*e.length)]:null;console.log(t,"createRandomMedia");let s=(0,m.useRouter)();return(0,l.jsxs)("div",{className:"flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24",children:[(0,l.jsxs)("div",{className:"absolute top-0 left-0 h-[95vh] w-screen -z-10",children:[l.jsx(c(),{src:`https://image.tmdb.org/t/p/original/${t?.backdrop_path||t?.poster_path}`,alt:"Banner",layout:"fill",objectFit:"cover"}),l.jsx("div",{className:"absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"})]}),l.jsx("h1",{className:"text-2xl md:text-4xl lg:text-7xl font-bold",children:t?.title||t?.name||t?.original_name}),l.jsx("p",{className:"max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl line-clamp-5",children:t?.overview}),(0,l.jsxs)("div",{className:"flex space-x-3",children:[(0,l.jsxs)("button",{onClick:()=>s.push(`/watch/${t?.type}/${t?.id}`),className:"cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black",children:[l.jsx(x.sT9,{className:"h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer"}),"Play"]}),(0,l.jsxs)("button",{className:"cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70",children:[l.jsx(p.UYI,{className:"h-5 w-5  md:h-8 md:w-8 cursor-pointer"}),"More Info"]})]})]})}function CommonLayout({mediaData:e}){return(0,l.jsxs)(a.E.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:[l.jsx(o(),{children:l.jsx("title",{children:"movies-app Clone"})}),(0,l.jsxs)(l.Fragment,{children:[l.jsx(r.Z,{}),(0,l.jsxs)("div",{className:"relative pl-4 pb-24 lg:space-y-24",children:[l.jsx(Banner,{medias:e&&e.length?e[0].medias:[]}),l.jsx("section",{className:"md:space-y-16",children:e&&e.length?e.map(e=>l.jsx(MediaRow,{title:e.title,medias:e.medias})):null})]})]})]})}}};