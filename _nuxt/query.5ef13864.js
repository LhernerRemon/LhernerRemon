import{B as S,E as H,a2 as K,a3 as P,M as N,$ as I,u as q,a4 as W,Y as Q,a5 as J,O as B,a6 as V,a7 as G,a8 as Y,a0 as X}from"./entry.47fcbdbf.js";import{u as $}from"./preview.87c69d79.js";const Z=()=>null;function tt(...r){const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??Z,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=I(),i=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],u=()=>i()!==void 0;(!a._asyncData[s]||!t.immediate)&&(a._asyncData[s]={data:S(i()??t.default()),pending:S(!u()),error:H(a.payload._errors,s),status:S("idle")});const o={...a._asyncData[s]};o.refresh=o.execute=(c={})=>{if(a._asyncDataPromises[s]){if(c.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((c._initial||a.isHydrating&&c._initial!==!1)&&u())return i();o.pending.value=!0,o.status.value="pending";const g=new Promise((f,p)=>{try{f(e(a))}catch(x){p(x)}}).then(f=>{if(g.cancelled)return a._asyncDataPromises[s];let p=f;t.transform&&(p=t.transform(f)),t.pick&&(p=et(p,t.pick)),o.data.value=p,o.error.value=null,o.status.value="success"}).catch(f=>{if(g.cancelled)return a._asyncDataPromises[s];o.error.value=f,o.data.value=q(t.default()),o.status.value="error"}).finally(()=>{g.cancelled||(o.pending.value=!1,a.payload.data[s]=o.data.value,o.error.value&&(a.payload._errors[s]=W(o.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const l=()=>o.refresh({_initial:!0}),h=t.server!==!1&&a.payload.serverRendered;{const c=Q();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const f=c._nuxtOnBeforeMountCbs;c&&(K(()=>{f.forEach(p=>{p()}),f.splice(0,f.length)}),P(()=>f.splice(0,f.length)))}h&&a.isHydrating&&u()?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):c&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?c._nuxtOnBeforeMountCbs.push(l):t.immediate&&l(),t.watch&&N(t.watch,()=>o.refresh());const g=a.hook("app:data:refresh",f=>{if(!f||f.includes(s))return o.refresh()});c&&P(g)}const d=Promise.resolve(a._asyncDataPromises[s]).then(()=>o);return Object.assign(d,o),d}function xt(...r){const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);const[s,e,t]=r;return tt(s,e,{...t,lazy:!0},null)}function et(r,n){const s={};for(const e of n)s[e]=r[e];return s}const D=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function rt(r,n){n?n={...D,...n}:n=D;const s=R(n);return s.dispatch(r),s.toString()}const nt=Object.freeze(["prototype","__proto__","constructor"]);function R(r){let n="",s=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let i="";const u=a.length;u<10?i="unknown:["+a+"]":i=a.slice(8,u-1),i=i.toLowerCase();let o=null;if((o=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):r.ignoreUnknown||this.unkown(t,i);else{let l=Object.keys(t);r.unorderedObjects&&(l=l.sort());let h=[];r.respectType!==!1&&!C(t)&&(h=nt),r.excludeKeys&&(l=l.filter(c=>!r.excludeKeys(c)),h=h.filter(c=>!r.excludeKeys(c))),e("object:"+(l.length+h.length)+":");const d=c=>{this.dispatch(c),e(":"),r.excludeValues||this.dispatch(t[c]),e(",")};for(const c of l)d(c);for(const c of h)d(c)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const o of t)this.dispatch(o);return}const i=new Map,u=t.map(o=>{const l=R(r);l.dispatch(o);for(const[h,d]of l.getContext())i.set(h,d);return l.toString()});return s=i,u.sort(),this.array(u,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),C(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const L="[native code] }",st=L.length;function C(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-st)===L}class m{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||it).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const it={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},at={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,u=t<<16|a<<8|i;for(let o=0;o<4&&e*8+o*6<r.sigBytes*8;o++)s.push(n.charAt(u>>>6*(3-o)&63))}return s.join("")}},ot={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new m(s,n)}},ct={parse(r){return ot.parse(unescape(encodeURIComponent(r)))}};class ut{constructor(){this._data=new m,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new m,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=ct.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new m(s,a)}}class lt extends ut{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const O=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ft=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class ht extends lt{constructor(){super(...arguments),this._hash=new m([...O])}reset(){super.reset(),this._hash=new m([...O])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],i=e[2],u=e[3],o=e[4],l=e[5],h=e[6],d=e[7];for(let c=0;c<64;c++){if(c<16)w[c]=n[s+c]|0;else{const _=w[c-15],T=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,b=w[c-2],U=(b<<15|b>>>17)^(b<<13|b>>>19)^b>>>10;w[c]=T+w[c-7]+U+w[c-16]}const g=o&l^~o&h,f=t&a^t&i^a&i,p=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),x=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),k=d+x+g+ft[c]+w[c],M=p+f;d=h,h=l,l=o,o=u+k|0,u=i,i=a,a=t,t=k+M|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+i|0,e[3]=e[3]+u|0,e[4]=e[4]+o|0,e[5]=e[5]+l|0,e[6]=e[6]+h|0,e[7]=e[7]+d|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function dt(r){return new ht().finalize(r).toString(at)}function A(r,n={}){const s=typeof r=="string"?r:rt(r,n);return dt(s).slice(0,10)}const z=(r,n)=>n.split(".").reduce((s,e)=>s&&s[e],r),v=(r,n)=>Object.keys(r).filter(n).reduce((s,e)=>Object.assign(s,{[e]:r[e]}),{}),St=r=>n=>r&&r.length?v(n,s=>!r.includes(s)):n,vt=r=>n=>Array.isArray(n)?n.map(s=>r(s)):r(n),j=r=>{const n=[],s=[];for(const e of r)["$","_"].includes(e)?n.push(e):s.push(e);return{prefixes:n,properties:s}},kt=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:s,properties:e}=j(r);return v(n,t=>!e.includes(t)&&!s.includes(t[0]))},Pt=(r=[])=>n=>{if(r.length===0||!n)return n;const{prefixes:s,properties:e}=j(r);return v(n,t=>e.includes(t)||s.includes(t[0]))},Dt=(r,n)=>{const s=new Intl.Collator(n.$locale,{numeric:n.$numeric,caseFirst:n.$caseFirst,sensitivity:n.$sensitivity}),e=Object.keys(n).filter(t=>!t.startsWith("$"));for(const t of e)r=r.sort((a,i)=>{const u=[z(a,t),z(i,t)].map(o=>{if(o!==null)return o instanceof Date?o.toISOString():o});return n[t]===-1&&u.reverse(),s.compare(u[0],u[1])});return r},Ct=(r,n="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(n)},y=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],pt=["sort","where","only","without"];function yt(r,n={}){const s={};for(const i of Object.keys(n.initialParams||{}))s[i]=pt.includes(i)?y(n.initialParams[i]):n.initialParams[i];const e=(i,u=o=>o)=>(...o)=>(s[i]=u(...o),a),t=i=>{var u;return n.legacy?i!=null&&i.surround?i.surround:i&&(i!=null&&i.dirConfig&&(i.result={_path:(u=i.dirConfig)==null?void 0:u._path,...i.result,_dir:i.dirConfig}),i!=null&&i._path||Array.isArray(i)||!Object.prototype.hasOwnProperty.call(i,"result")?i:i==null?void 0:i.result):i},a={params:()=>({...s,...s.where?{where:[...y(s.where)]}:{},...s.sort?{sort:[...y(s.sort)]}:{}}),only:e("only",y),without:e("without",y),where:e("where",i=>[...y(s.where),...y(i)]),sort:e("sort",i=>[...y(s.sort),...y(i)]),limit:e("limit",i=>parseInt(String(i),10)),skip:e("skip",i=>parseInt(String(i),10)),find:()=>r(a).then(t),findOne:()=>r(e("first")(!0)).then(t),count:()=>r(e("count")(!0)).then(t),locale:i=>a.where({_locale:i}),withSurround:e("surround",(i,u)=>({query:i,...u})),withDirConfig:()=>e("dirConfig")(!0)};return n.legacy&&(a.findSurround=(i,u)=>a.withSurround(i,u).find().then(t)),a}function F(r){return JSON.stringify(r,gt)}function gt(r,n){return n instanceof RegExp?`--REGEX ${n.toString()}`:n}const mt=r=>{let n=F(r);return n=typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n),n=n.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(n.match(/.{1,100}/g)||[]).join("/")},E=r=>J(r,B().public.content.api.baseURL),Ot=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},wt=()=>{const{experimental:r}=B().public.content;return r.clientDB?!0:$().isEnabled()},_t=()=>async r=>{const{content:n}=B().public,s=r.params(),e=n.experimental.stripQueryParameters?E(`/query/${`${A(s)}.${n.integrity}`}/${mt(s)}.json`):E(`/query/${A(s)}.${n.integrity}.json`);if(wt())return(await X(()=>import("./client-db.7d073ef8.js"),["./client-db.7d073ef8.js","./entry.47fcbdbf.js","./entry.ef7a1d5f.css","./index.288f722b.js","./preview.87c69d79.js"],import.meta.url).then(i=>i.useContentDatabase())).fetch(r);const t=await $fetch(e,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:F(s),previewToken:$().getPreviewToken()}});if(typeof t=="string"&&t.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return t};function At(r,...n){const{content:s}=B().public,e=yt(_t(),{initialParams:typeof r!="string"?r:{},legacy:!0});let t;typeof r=="string"&&(t=V(G(r,...n)));const a=e.params;return e.params=()=>{var u,o,l;const i=a();return t&&(i.where=i.where||[],i.first&&(i.where||[]).length===0?i.where.push({_path:Y(t)}):i.where.push({_path:new RegExp(`^${t.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=i.sort)!=null&&u.length||(i.sort=[{_file:1,$numeric:!0}]),s.locales.length&&((l=(o=i.where)==null?void 0:o.find(d=>d._locale))!=null&&l._locale||(i.where=i.where||[],i.where.push({_locale:s.defaultLocale}))),i},e}export{Ot as a,tt as b,Ct as c,y as d,mt as e,Dt as f,z as g,A as h,vt as i,F as j,kt as k,Pt as l,yt as m,St as o,At as q,wt as s,xt as u,E as w};
