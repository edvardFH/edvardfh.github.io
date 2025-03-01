import{h as F,a as ee,b as te,Q as ne}from"./QBtn-CNkEeCE3.js";import{c as $,a as f,h,r as w,i as A,o as Q,b as R,n as I,d as j,g as P,l as k,e as K,f as q,j as M,w as S,k as H,p as G,m as oe,q as le,_ as J,s as X,t as Y,u as T,v as ie,x as re,y as ae,z as L,A as se}from"./index-iepjf8dx.js";import{s as ue,g as ce,a as de,b as fe,c as E}from"./scroll-C4VIvOQJ.js";const ve=$({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:n.value},F(d.default))}}),he=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:d}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:n.value,role:"toolbar"},F(d.default))}});function ge(){const e=w(!A.value);return e.value===!1&&Q(()=>{e.value=!0}),{isHydrated:e}}const Z=typeof ResizeObserver<"u",D=Z===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},W=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:d}){let n=null,t,l={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:i}=t;(r!==l.width||i!==l.height)&&(l={width:r,height:i},d("resize",l))}}const{proxy:g}=P();if(g.trigger=s,Z===!0){let r;const i=p=>{t=g.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),u()):p!==!0&&j(()=>{i(!0)})};return Q(()=>{i()}),R(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),I}else{let r=function(){n!==null&&(clearTimeout(n),n=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",s,k.passive),v=void 0)},i=function(){r(),t&&t.contentDocument&&(v=t.contentDocument.defaultView,v.addEventListener("resize",s,k.passive),u())};const{isHydrated:p}=ge();let v;return Q(()=>{j(()=>{t=g.$el,t&&i()})}),R(r),()=>{if(p.value===!0)return h("object",{class:"q--avoid-card-border",style:D.style,tabindex:-1,type:"text/html",data:D.url,"aria-hidden":"true",onLoad:i})}}}}),me=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=P(),l=K(M,q);if(l===q)return console.error("QHeader needs to be child of QLayout"),q;const s=w(parseInt(e.heightHint,10)),u=w(!0),g=f(()=>e.reveal===!0||l.view.value.indexOf("H")!==-1||t.platform.is.ios&&l.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return u.value===!0?s.value:0;const o=s.value-l.scroll.value.position;return o>0?o:0}),i=f(()=>e.modelValue!==!0||g.value===!0&&u.value!==!0),p=f(()=>e.modelValue===!0&&i.value===!0&&e.reveal===!0),v=f(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(i.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),z=f(()=>{const o=l.rows.value.top,b={};return o[0]==="l"&&l.left.space===!0&&(b[t.lang.rtl===!0?"right":"left"]=`${l.left.size}px`),o[2]==="r"&&l.right.space===!0&&(b[t.lang.rtl===!0?"left":"right"]=`${l.right.size}px`),b});function c(o,b){l.update("header",o,b)}function y(o,b){o.value!==b&&(o.value=b)}function O({height:o}){y(s,o),c("size",o)}function V(o){p.value===!0&&y(u,!0),n("focusin",o)}S(()=>e.modelValue,o=>{c("space",o),y(u,!0),l.animate()}),S(r,o=>{c("offset",o)}),S(()=>e.reveal,o=>{o===!1&&y(u,e.modelValue)}),S(u,o=>{l.animate(),n("reveal",o)}),S(l.scroll,o=>{e.reveal===!0&&y(u,o.direction==="up"||o.position<=e.revealOffset||o.position-o.inflectionPoint<100)});const C={};return l.instances.header=C,e.modelValue===!0&&c("size",s.value),c("space",e.modelValue),c("offset",r.value),R(()=>{l.instances.header===C&&(l.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const o=ee(d.default,[]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push(h(W,{debounce:0,onResize:O})),h("header",{class:v.value,style:z.value,onFocusin:V},o)}}}),{passive:U}=k,pe=["both","horizontal","vertical"],be=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>pe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ue},emits:["scroll"],setup(e,{emit:d}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,l,s;S(()=>e.scrollTarget,()=>{r(),g()});function u(){t!==null&&t();const v=Math.max(0,de(l)),z=fe(l),c={top:v-n.position.top,left:z-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const y=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:v,left:z},n.directionChanged=n.direction!==y,n.delta=c,n.directionChanged===!0&&(n.direction=y,n.inflectionPoint=n.position),d("scroll",{...n})}function g(){l=ce(s,e.scrollTarget),l.addEventListener("scroll",i,U),i(!0)}function r(){l!==void 0&&(l.removeEventListener("scroll",i,U),l=void 0)}function i(v){if(v===!0||e.debounce===0||e.debounce==="0")u();else if(t===null){const[z,c]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];t=()=>{c(z),t=null}}}const{proxy:p}=P();return S(()=>p.$q.lang.rtl,u),Q(()=>{s=p.$el.parentNode,g()}),R(()=>{t!==null&&t(),r()}),Object.assign(p,{trigger:i,getPosition:()=>n}),I}}),ye=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:d,emit:n}){const{proxy:{$q:t}}=P(),l=w(null),s=w(t.screen.height),u=w(e.container===!0?0:t.screen.width),g=w({position:0,direction:"down",inflectionPoint:0}),r=w(0),i=w(A.value===!0?0:E()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),z=f(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),c=f(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function y(a){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};g.value=m,e.onScroll!==void 0&&n("scroll",m)}}function O(a){const{height:m,width:x}=a;let _=!1;s.value!==m&&(_=!0,s.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),C()),u.value!==x&&(_=!0,u.value=x),_===!0&&e.onResize!==void 0&&n("resize",a)}function V({height:a}){r.value!==a&&(r.value=a,C())}function C(){if(e.container===!0){const a=s.value>r.value?E():0;i.value!==a&&(i.value=a)}}let o=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:l,height:s,containerHeight:r,scrollbarWidth:i,totalWidth:f(()=>u.value+i.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:g,animate(){o!==null?clearTimeout(o):document.body.classList.add("q-body--layout-animate"),o=setTimeout(()=>{o=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,m,x){b[a][m]=x}};if(G(M,b),E()>0){let a=function(){_=null,B.classList.remove("hide-scrollbar")},m=function(){if(_===null){if(B.scrollHeight>t.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(_);_=setTimeout(a,300)},x=function(N){_!==null&&N==="remove"&&(clearTimeout(_),a()),window[`${N}EventListener`]("resize",m)},_=null;const B=document.body;S(()=>e.container!==!0?"add":"remove",x),e.container!==!0&&x("add"),oe(()=>{x("remove")})}return()=>{const a=te(d.default,[h(be,{onScroll:y}),h(W,{onResize:O})]),m=h("div",{class:p.value,style:v.value,ref:e.container===!0?void 0:l,tabindex:-1},a);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:l},[h(W,{onResize:V}),h("div",{class:"absolute-full",style:z.value},[h("div",{class:"scroll",style:c.value},[m])])]):m}}}),_e=$({name:"QPageContainer",setup(e,{slots:d}){const{proxy:{$q:n}}=P(),t=K(M,q);if(t===q)return console.error("QPageContainer needs to be child of QLayout"),q;G(le,!0);const l=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>h("div",{class:"q-page-container",style:l.value},F(d.default))}}),we={};function ze(e,d){return X(),Y(_e,{class:"wu-page-container"},{default:T(()=>[ie(e.$slots,"default",{},void 0,!0)]),_:3})}const xe=J(we,[["render",ze],["__scopeId","data-v-65bdedef"],["__file","WuPageContainer.vue"]]),Se=re({__name:"MainLayout",setup(e,{expose:d}){d();const n={WuPageContainer:xe};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}});function Te(e,d,n,t,l,s){const u=ae("router-view");return X(),Y(ye,{class:"layout",view:"lHh Lpr lFf"},{default:T(()=>[L(me,{elevated:""},{default:T(()=>[L(he,null,{default:T(()=>[L(ve,null,{default:T(()=>[L(ne,{to:{name:"HomePage"},"no-caps":"",size:"lg",flat:""},{default:T(()=>d[0]||(d[0]=[se(" WorkUp ")])),_:1})]),_:1})]),_:1})]),_:1}),L(t.WuPageContainer,null,{default:T(()=>[L(u)]),_:1})]),_:1})}const Ce=J(Se,[["render",Te],["__file","MainLayout.vue"]]);export{Ce as default};
