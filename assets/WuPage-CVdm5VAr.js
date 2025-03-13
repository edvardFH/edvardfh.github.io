import{a as o,r as k,o as I,m as q,c as v,h as m,g as W,_ as f,s as _,t as g,u as y,v as c,x as B,A as d,H as $,a8 as P,aj as p,e as h,f as i,j as x,q as L}from"./index-T1bakOJV.js";import{h as b,Q as O}from"./QBtn-Cjkn11Vj.js";const E={dark:{type:Boolean,default:null}};function Q(e,a){return o(()=>e.dark===null?a.dark.isActive:e.dark)}const j=600;function se(){const e=k(window.innerWidth);function a(){e.value=window.innerWidth}const t=o(()=>e.value>j),n=o(()=>!t.value);return I(()=>window.addEventListener("resize",a)),q(()=>window.removeEventListener("resize",a)),{windowWidth:e,isScreenLarge:t,isScreenSmall:n}}function A(e){return e??""}function ie(e,a){return e.toLowerCase().startsWith(a.toLowerCase())}function ce(e,a,t=""){if(e.length<=a)return e;const n=e.slice(0,a+1),r=n.lastIndexOf(" ");return n.slice(0,r)+t}const F=v({name:"QCard",props:{...E,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:t}}=W(),n=Q(e,t),r=o(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>m(e.tag,{class:r.value},b(a.default))}}),z={};function D(e,a){return _(),g(F,{bordered:"",flat:"",class:"wu-card"},{default:y(()=>[c(e.$slots,"default",{},void 0,!0)]),_:3})}const H=f(z,[["render",D],["__scopeId","data-v-c526f206"],["__file","WuBaseContainer.vue"]]),K=B({__name:"WorkoutLayout",setup(e,{expose:a}){a();const t={WuBaseContainer:H};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),R={class:"sub-container"},T={class:"top"},U={class:"container-section"},M={class:"container-section"},N={class:"bottom"};function V(e,a,t,n,r,s){return _(),g(n.WuBaseContainer,{class:"container"},{default:y(()=>[d("div",R,[d("div",T,[d("div",U,[c(e.$slots,"header",{},void 0,!0)]),d("div",M,[c(e.$slots,"body",{},void 0,!0)])]),d("div",N,[c(e.$slots,"footer",{},void 0,!0)])])]),_:3})}const ue=f(K,[["render",V],["__scopeId","data-v-014239e1"],["__file","WorkoutLayout.vue"]]),X="min-height: var(--wu-btn-height); border-radius: var(--wu-border-radius);",Y=B({__name:"WuBaseButton",props:{icon:{},label:{},color:{},primary:{type:Boolean},secondary:{type:Boolean},tertiary:{type:Boolean}},setup(e,{expose:a}){a();const t=e,n=o(()=>!t.primary&&!t.secondary&&!t.tertiary),r=!!t.icon&&!t.label,s=o(()=>r?"0 10px":"0 16px"),l={props:t,noButtonTypeChosen:n,iconOnly:r,padding:s,style:X,get getStringOrEmpty(){return A}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}});function G(e,a,t,n,r,s){return _(),g(O,{padding:n.padding,class:P({"icon-only":n.iconOnly,icon:t.icon}),"no-caps":"",icon:t.icon,label:n.getStringOrEmpty(t.label),color:n.getStringOrEmpty(t.color),unelevated:t.primary,style:n.style,outline:t.secondary,flat:t.tertiary||n.noButtonTypeChosen},{default:y(()=>[e.$slots.default?c(e.$slots,"default",{key:0},void 0,!0):$("",!0)]),_:3},8,["padding","class","icon","label","color","unelevated","outline","flat"])}const de=f(Y,[["render",G],["__scopeId","data-v-2afd50a3"],["__file","WuBaseButton.vue"]]);function C(e,a){p.setItem(e,a)}function J(e){return p.getItem(e)}function Z(){return window.crypto.randomUUID()}const w="workout-";function le(e){return p.getItem(e)}function fe(e){return e.id=ee(),C(e.id,e)}function _e(e){return C(e.id,e)}function ge(){return p.getAllKeys().filter(e=>e.startsWith(w)).map(e=>J(e)).filter(e=>e!==null)}function ee(){return w+Z()}const te=v({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:a}){const{proxy:{$q:t}}=W(),n=h(x,i);if(n===i)return console.error("QPage needs to be a deep child of QLayout"),i;if(h(L,i)===i)return console.error("QPage needs to be child of QPageContainer"),i;const s=o(()=>{const u=(n.header.space===!0?n.header.size:0)+(n.footer.space===!0?n.footer.size:0);if(typeof e.styleFn=="function"){const S=n.isContainer.value===!0?n.containerHeight.value:t.screen.height;return e.styleFn(u,S)}return{minHeight:n.isContainer.value===!0?n.containerHeight.value-u+"px":t.screen.height===0?u!==0?`calc(100vh - ${u}px)`:"100vh":t.screen.height-u+"px"}}),l=o(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:l.value,style:s.value},b(a.default))}}),ne={};function ae(e,a){return _(),g(te,{class:"wu-page row justify-center items-center",style:{width:"100%"}},{default:y(()=>[c(e.$slots,"default",{},void 0,!0)]),_:3})}const ye=f(ne,[["render",ae],["__scopeId","data-v-af56943e"],["__file","WuPage.vue"]]);export{de as W,A as a,ue as b,ge as c,ye as d,E as e,Q as f,ce as g,le as h,_e as i,fe as j,ie as s,se as u};
