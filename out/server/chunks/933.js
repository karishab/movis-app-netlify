"use strict";exports.id=933,exports.ids=[933],exports.modules={10884:(e,t,r)=>{e.exports=r(30517)},78976:()=>{"getAll"in Headers.prototype||(Headers.prototype.getAll=function(e){if("set-cookie"!==(e=e.toLowerCase()))throw Error("Headers.getAll is only supported for Set-Cookie header");let t=[...this.entries()].filter(([t])=>t===e);return t.map(([,e])=>e)})}};