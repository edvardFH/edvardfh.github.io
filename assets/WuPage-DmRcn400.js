import{a as d,c as p,g,h as v,t as u,u as i,v as l,x as c,y as q,z as r,f as h,j as o,k as C,s as b}from"./index-BcBs46Eh.js";import{h as y}from"./QBtn-BQBKKmP6.js";import{_ as f}from"./workout--KoIstGW.js";const B={dark:{type:Boolean,default:null}};function Q(e,t){return d(()=>e.dark===null?t.dark.isActive:e.dark)}const x=p({name:"QCard",props:{...B,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:s}}=g(),a=Q(e,s),_=d(()=>"q-card"+(a.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>v(e.tag,{class:_.value},y(t.default))}}),P={};function w(e,t){return i(),u(x,{bordered:"",flat:"",class:"wu-card"},{default:l(()=>[c(e.$slots,"default",{},void 0,!0)]),_:3})}const F=f(P,[["render",w],["__scopeId","data-v-c526f206"]]),W={class:"sub-container"},I={class:"top"},j={class:"container-section"},z={class:"container-section"},D={class:"bottom"},H=q({__name:"WorkoutLayout",setup(e){return(t,s)=>(i(),u(F,{class:"container"},{default:l(()=>[r("div",W,[r("div",I,[r("div",j,[c(t.$slots,"header",{},void 0,!0)]),r("div",z,[c(t.$slots,"body",{},void 0,!0)])]),r("div",D,[c(t.$slots,"footer",{},void 0,!0)])])]),_:3}))}}),V=f(H,[["__scopeId","data-v-fa28dcf6"]]),L=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:s}}=g(),a=h(C,o);if(a===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(h(b,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const m=d(()=>{const n=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof e.styleFn=="function"){const k=a.isContainer.value===!0?a.containerHeight.value:s.screen.height;return e.styleFn(n,k)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-n+"px":s.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":s.screen.height-n+"px"}}),$=d(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:$.value,style:m.value},y(t.default))}}),S={};function K(e,t){return i(),u(L,{class:"wu-page row justify-center items-center",style:{width:"100%"}},{default:l(()=>[c(e.$slots,"default",{},void 0,!0)]),_:3})}const E=f(S,[["render",K],["__scopeId","data-v-af56943e"]]);export{V as W,E as a,Q as b,B as u};
