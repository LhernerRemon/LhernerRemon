import{u as te,q as ne}from"./query.37b941df.js";import{_ as le,V as se,P as ie}from"./VChip.7b86bca3.js";import{_ as de}from"./nuxt-link.c3902804.js";import{c as P,m as ce,a as oe,b as re,u as ue,d as me,e as ve,L as fe}from"./position.c07fea8a.js";import{m as F,a as $,b as x,c as pe,d as ge,e as _e,f as ke,g as ye,R as be,u as he,h as xe,i as Ce,j as Ie,k as Ve,l as Ae,n as Se,V as C}from"./index.bab98858.js";import{m as B,n as D,q as Pe,s as L,b as n,v as j,I as h,x as Be,y as De,z as Le,g as I,A as Te,B as we,f as T,o,i as g,w as u,d as b,t as f,a as c,u as V,c as p,r as A,F as S,_ as Ne,k as R,l as $e}from"./entry.ef86cfce.js";import{m as Re,u as Fe,V as je}from"./VImg.878b37b0.js";import"./preview.c84af44a.js";const Ee=B()({name:"VCardActions",props:D(),setup(e,l){let{slots:t}=l;return Pe({VBtn:{slim:!0,variant:"text"}}),L(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),qe=P("v-card-subtitle"),E=P("v-card-title"),Me=j({appendAvatar:String,appendIcon:h,prependAvatar:String,prependIcon:h,subtitle:[String,Number],title:[String,Number],...D(),...F()},"VCardItem"),Oe=B()({name:"VCardItem",props:Me(),setup(e,l){let{slots:t}=l;return L(()=>{var _;const a=!!(e.prependAvatar||e.prependIcon),i=!!(a||t.prepend),d=!!(e.appendAvatar||e.appendIcon),s=!!(d||t.append),m=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[i&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(x,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n($,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(E,{key:"title"},{default:()=>{var r;return[((r=t.title)==null?void 0:r.call(t))??e.title]}}),v&&n(qe,{key:"subtitle"},{default:()=>{var r;return[((r=t.subtitle)==null?void 0:r.call(t))??e.subtitle]}}),(_=t.default)==null?void 0:_.call(t)]),s&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(x,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):d&&n($,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),q=P("v-card-text"),ze=j({appendAvatar:String,appendIcon:h,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:h,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...pe(),...D(),...F(),...Re(),...ge(),...ce(),...oe(),...re(),..._e(),...ke(),...Be(),...De(),...ye({variant:"elevated"})},"VCard"),He=B()({name:"VCard",directives:{Ripple:be},props:ze(),setup(e,l){let{attrs:t,slots:a}=l;const{themeClasses:i}=Le(e),{borderClasses:d}=he(e),{colorClasses:s,colorStyles:m,variantClasses:v}=xe(e),{densityClasses:_}=Ce(e),{dimensionStyles:r}=Fe(e),{elevationClasses:M}=Ie(e),{loaderClasses:O}=ue(e),{locationStyles:z}=me(e),{positionClasses:H}=ve(e),{roundedClasses:G}=Ve(e),k=Ae(e,t),J=I(()=>e.link!==!1&&k.isLink.value),y=I(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return L(()=>{const K=J.value?"a":e.tag,Q=!!(a.title||e.title!=null),U=!!(a.subtitle||e.subtitle!=null),W=Q||U,X=!!(a.append||e.appendAvatar||e.appendIcon),Y=!!(a.prepend||e.prependAvatar||e.prependIcon),Z=!!(a.image||e.image),ee=W||Y||X,ae=!!(a.text||e.text!=null);return Te(n(K,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":y.value},i.value,d.value,s.value,_.value,M.value,O.value,H.value,G.value,v.value,e.class],style:[m.value,r.value,z.value,e.style],href:k.href.value,onClick:y.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[Z&&n("div",{key:"image",class:"v-card__image"},[a.image?n(x,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(je,{key:"image-img",cover:!0,src:e.image},null)]),n(fe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),ee&&n(Oe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),ae&&n(q,{key:"text"},{default:()=>{var N;return[((N=a.text)==null?void 0:N.call(a))??e.text]}}),(w=a.default)==null?void 0:w.call(a),a.actions&&n(Ee,null,{default:a.actions}),Se(y.value,"v-card")]}}),[[we("ripple"),y.value&&e.ripple]])}),{}}}),Ge={class:"d-flex flex-column",style:{gap:"8px"}},Je={class:"d-flex align-center ml-n1"},Ke={class:"d-flex align-center"},Qe={class:"d-flex align-center"},Ue={class:"tags-container d-flex mt-"},We=T({__name:"ItemBlog",props:{post:{type:Object,default:()=>null}},setup(e){const l=e,t=I(()=>{var i,d;return(i=l.post)!=null&&i.date?new Date((d=l.post)==null?void 0:d.date).toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"}):""});return(a,i)=>{const d=de;return o(),g(He,{variant:"tonal",color:"#9b9b9b",class:"mx-auto",width:"800",rounded:"xl"},{default:u(()=>[n(E,{class:"ma-6 mb-2"},{default:u(()=>[n(d,{to:e.post._path},{default:u(()=>[b(f(e.post.title),1)]),_:1},8,["to"])]),_:1}),n(q,{class:"ma-6 mt-2"},{default:u(()=>{var s,m;return[c("div",Ge,[c("div",Je,[n(le,{width:"40"}),c("h3",null,f((s=e.post)==null?void 0:s.author),1)]),c("div",Ke,[n(C,null,{default:u(()=>[b("mdi-calendar")]),_:1}),c("span",null," "+f(V(t)),1)]),c("div",Qe,[n(C,null,{default:u(()=>[b("mdi-clock-time-eight-outline")]),_:1}),c("span",null," "+f((m=e.post)==null?void 0:m.time),1)]),c("div",Ue,[(o(!0),p(S,null,A(e.post.tags,v=>(o(),g(se,{key:v,label:"",variant:"tonal",color:"primary"},{default:u(()=>[b(f(v),1)]),_:2},1024))),128))])])]}),_:1})]),_:1})}}});const Xe=Ne(We,[["__scopeId","data-v-35ea9df6"]]),Ye=T({__name:"IconSocial",props:{icon:{type:String,default:()=>"mdi-facebook"},link:{type:String,default:()=>null}},setup(e){const l=e,t=()=>{l.link&&window.open(l.link,"_blank")};return(a,i)=>(o(),g(C,{size:"35",icon:e.icon,onClick:t},null,8,["icon"]))}}),Ze={key:1},ea={class:"d-flex justify-center align-center my-10"},aa={class:"d-flex flex-column",style:{gap:"10px"}},ra=T({__name:"index",setup(e){const l=R(!1),t=R();$e(async()=>{l.value=!0;const{data:i}=await te("posts",()=>ne("/blog").sort({date:1}).find());t.value=i.value,l.value=!1});const a=[{icon:"mdi-github",link:"https://github.com/lhernerremon"}];return(i,d)=>(o(),p("div",null,[V(l)?(o(),g(ie,{key:0})):(o(),p("div",Ze,[c("div",ea,[(o(),p(S,null,A(a,s=>n(Ye,{key:s.icon,icon:s.icon,link:s.link},null,8,["icon","link"])),64))]),c("div",aa,[(o(!0),p(S,null,A(V(t),s=>(o(),g(Xe,{key:s._id,post:s},null,8,["post"]))),128))])]))]))}});export{ra as default};
