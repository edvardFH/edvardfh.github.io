import{a as c,h as v,Z as ae,c as V,g as F,aj as fe,P as ve,a6 as N,S as ge,W as me,L as re,V as be,r as U,b as he,a3 as ye,X as P,U as ke,l as pe}from"./index-Du_IofS6.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},ie={size:String};function ue(e,t=Q){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}function xe(e,t){return e!==void 0&&e()||t}function Ge(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function z(e,t){return e!==void 0?t.concat(e()):t}function Je(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function et(e,t,n,a,l,d){t.key=a+l;const o=v(e,t,n);return l===!0?ae(o,d()):o}const H="0 0 24 24",W=e=>e,I=e=>`ionicons ${e}`,le={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},oe={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(le).join("|")+")"),$e=new RegExp("^("+Object.keys(oe).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Se=/^[Mm]\s?[-+]?\.?\d/,Ee=/^img:/,Re=/^svguse:/,we=/^ion-/,Le=/^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,Y=V({name:"QIcon",props:{...ie,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=F(),a=ue(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),d=c(()=>{let o,i=e.name;if(i==="none"||!i)return{none:!0};if(n.iconMapFn!==null){const s=n.iconMapFn(i);if(s!==void 0)if(s.icon!==void 0){if(i=s.icon,i==="none"||!i)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Se.test(i)===!0){const[s,y=H]=i.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Ee.test(i)===!0)return{img:!0,src:i.substring(4)};if(Re.test(i)===!0){const[s,y=H]=i.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=i.match(qe);if(h!==null)o=le[h[1]](i);else if(Le.test(i)===!0)o=i;else if(we.test(i)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(X.test(i)===!0){o="notranslate material-symbols";const s=i.match(X);s!==null&&(i=i.substring(6),o+=se[s[1]]),q=i}else{o="notranslate material-icons";const s=i.match($e);s!==null&&(i=i.substring(2),o+=oe[s[1]]),q=i}return{cls:o,content:q}});return()=>{const o={class:l.value,style:a.value,"aria-hidden":"true",role:"presentation"};return d.value.none===!0?v(e.tag,o,xe(t.default)):d.value.img===!0?v(e.tag,o,z(t.default,[v("img",{src:d.value.src})])):d.value.svg===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox||"0 0 24 24"},d.value.nodes)])):d.value.svguse===!0?v(e.tag,o,z(t.default,[v("svg",{viewBox:d.value.viewBox},[v("use",{"xlink:href":d.value.src})])])):(d.value.cls!==void 0&&(o.class+=" "+d.value.cls),v(e.tag,o,z(t.default,[d.value.content])))}}}),Be={size:{type:[String,Number],default:"1em"},color:String};function Ce(e){return{cSize:c(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const _e=V({name:"QSpinner",props:{...Be,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Ce(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,t){const n=e.style;for(const a in t)n[a]=t[a]}function tt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=fe(e);if(t)return t.$el||t}function nt(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}function Oe(e,t=250){let n=!1,a;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),a=e.apply(this,arguments)),a}}function Z(e,t,n,a){n.modifiers.stop===!0&&re(e);const l=n.modifiers.color;let d=n.modifiers.center;d=d===!0||a===!0;const o=document.createElement("span"),i=document.createElement("span"),q=be(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,f=d?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,_=d?x:`${q.top-s-b}px`;i.className="q-ripple__inner",Pe(i,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${f},${_},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(i),t.appendChild(o);const B=()=>{o.remove(),clearTimeout(C)};n.abort.push(B);let C=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,i.style.opacity=.2,C=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,C=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(B),1)},275)},250)},50)}function G(e,{modifiers:t,value:n,arg:a}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||a,keyCodes:[].concat(l.keyCodes||13)}}const Te=ve({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const a={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){a.enabled===!0&&l.qSkipRipple!==!0&&l.type===(a.modifiers.early===!0?"pointerdown":"click")&&Z(l,e,a,l.qKeyEvent===!0)},keystart:Oe(l=>{a.enabled===!0&&l.qSkipRipple!==!0&&N(l,a.modifiers.keyCodes)===!0&&l.type===`key${a.modifiers.early===!0?"down":"up"}`&&Z(l,e,a,!0)},300)};G(a,t),e.__qripple=a,ge(a,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&G(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),me(t,"main"),delete e._qripple)}}),ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},je=Object.keys(ce),Me={align:{type:String,validator:e=>je.includes(e)}};function Ae(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function at(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function ze(e){return e.appContext.config.globalProperties.$router!==void 0}function rt(e){return e.isUnmounted===!0||e.isDeactivated===!0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ke(e,t){for(const n in t){const a=t[n],l=e[n];if(typeof a=="string"){if(a!==l)return!1}else if(Array.isArray(l)===!1||l.length!==a.length||a.some((d,o)=>d!==l[o]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function De(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(De(e[n],t[n])===!1)return!1;return!0}const de={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},it={...de,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const n=F(),{props:a,proxy:l,emit:d}=n,o=ze(n),i=c(()=>a.disable!==!0&&a.href!==void 0),q=t===!0?c(()=>o===!0&&a.disable!==!0&&i.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""):c(()=>o===!0&&i.value!==!0&&a.to!==void 0&&a.to!==null&&a.to!==""),h=c(()=>q.value===!0?_(a.to):null),s=c(()=>h.value!==null),y=c(()=>i.value===!0||s.value===!0),u=c(()=>a.type==="a"||y.value===!0?"a":a.tag||e||"div"),k=c(()=>i.value===!0?{href:a.href,target:a.target}:s.value===!0?{href:h.value.href,target:a.target}:{}),b=c(()=>{if(s.value===!1)return-1;const{matched:g}=h.value,{length:$}=g,E=g[$-1];if(E===void 0)return-1;const w=l.$route.matched;if(w.length===0)return-1;const L=w.findIndex(ee.bind(null,E));if(L!==-1)return L;const K=J(g[$-2]);return $>1&&J(E)===K&&w[w.length-1].path!==K?w.findIndex(ee.bind(null,g[$-2])):L}),p=c(()=>s.value===!0&&b.value!==-1&&Ke(l.$route.params,h.value.params)),f=c(()=>p.value===!0&&b.value===l.$route.matched.length-1&&Ie(l.$route.params,h.value.params)),x=c(()=>s.value===!0?f.value===!0?` ${a.exactActiveClass} ${a.activeClass}`:a.exact===!0?"":p.value===!0?` ${a.activeClass}`:"":"");function _(g){try{return l.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:$,to:E=a.to,replace:w=a.replace}={}){if(a.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||a.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=l.$router[w===!0?"replace":"push"](E);return $===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(s.value===!0){const $=E=>B(g,E);d("click",g,$),g.defaultPrevented!==!0&&$()}else d("click",g)}return{hasRouterLink:s,hasHrefLink:i,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:f,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Qe={xs:8,sm:10,md:14,lg:20,xl:24},Ve=["button","submit","reset"],Fe=/[^\s]\/[^\s]/,Ue=["flat","outline","push","unelevated"];function He(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const We={...ie,...de,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Ue.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},Xe={...We,round:Boolean};function Ye(e){const t=ue(e,Qe),n=Ae(e),{hasRouterLink:a,hasLink:l,linkTag:d,linkAttrs:o,navigateOnClick:i}=Ne({fallbackTag:"button"}),q=c(()=>{const f=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},f,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):f}),h=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>s.value===!0?e.tabindex||0:-1),u=c(()=>He(e,"standard")),k=c(()=>{const f={tabindex:y.value};return l.value===!0?Object.assign(f,o.value):Ve.includes(e.type)===!0&&(f.type=e.type),d.value==="a"?(e.disable===!0?f["aria-disabled"]="true":f.href===void 0&&(f.role="button"),a.value!==!0&&Fe.test(e.type)===!0&&(f.type=e.type)):e.disable===!0&&(f.disabled="",f["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(f,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),f}),b=c(()=>{let f;e.color!==void 0?e.flat===!0||e.outline===!0?f=`text-${e.textColor||e.color}`:f=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(f=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(f!==void 0?" "+f:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:l,linkTag:d,navigateOnClick:i,isActionable:s}}const{passiveCapture:S}=pe;let O=null,T=null,j=null;const ut=V({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:a}=F(),{classes:l,style:d,innerClasses:o,attributes:i,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Ye(e),u=U(null),k=U(null);let b=null,p,f=null;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=c(()=>({center:e.round})),C=c(()=>{const r=Math.max(0,Math.min(100,e.percentage));return r>0?{transition:"transform 0.6s",transform:`translateX(${r-100}%)`}:{}}),g=c(()=>{if(e.loading===!0)return{onMousedown:A,onTouchstart:A,onClick:A,onKeydown:A,onKeyup:A};if(y.value===!0){const r={onClick:E,onKeydown:w,onMousedown:K};if(a.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";r[`onTouchstart${m}`]=L}return r}return{onClick:P}}),$=c(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:d.value,...i.value,...g.value}));function E(r){if(u.value!==null){if(r!==void 0){if(r.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const D=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",D,S),u.value!==null&&u.value.removeEventListener("blur",D,S)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",D,S),u.value.addEventListener("blur",D,S)}}s(r)}}function w(r){u.value!==null&&(n("keydown",r),N(r,[13,32])===!0&&T!==u.value&&(T!==null&&M(),r.defaultPrevented!==!0&&(u.value.focus(),T=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",R,!0),u.value.addEventListener("blur",R,S)),P(r)))}function L(r){u.value!==null&&(n("touchstart",r),r.defaultPrevented!==!0&&(O!==u.value&&(O!==null&&M(),O=u.value,b=r.target,b.addEventListener("touchcancel",R,S),b.addEventListener("touchend",R,S)),p=!0,f!==null&&clearTimeout(f),f=setTimeout(()=>{f=null,p=!1},200)))}function K(r){u.value!==null&&(r.qSkipRipple=p===!0,n("mousedown",r),r.defaultPrevented!==!0&&j!==u.value&&(j!==null&&M(),j=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",R,S)))}function R(r){if(u.value!==null&&!(r!==void 0&&r.type==="blur"&&document.activeElement===u.value)){if(r!==void 0&&r.type==="keyup"){if(T===u.value&&N(r,[13,32])===!0){const m=new MouseEvent("click",r);m.qKeyEvent=!0,r.defaultPrevented===!0&&ke(m),r.cancelBubble===!0&&re(m),u.value.dispatchEvent(m),P(r),r.qKeyEvent=!0}n("keyup",r)}M()}}function M(r){const m=k.value;r!==!0&&(O===u.value||j===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),O===u.value&&(b!==null&&(b.removeEventListener("touchcancel",R,S),b.removeEventListener("touchend",R,S)),O=b=null),j===u.value&&(document.removeEventListener("mouseup",R,S),j=null),T===u.value&&(document.removeEventListener("keyup",R,!0),u.value!==null&&u.value.removeEventListener("blur",R,S),T=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function A(r){P(r),r.qSkipRipple=!0}return he(()=>{M(!0)}),Object.assign(a,{click:r=>{y.value===!0&&E(r)}}),()=>{let r=[];e.icon!==void 0&&r.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&r.push(v("span",{class:"block"},[e.label])),r=z(t.default,r),e.iconRight!==void 0&&e.round===!1&&r.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},r)),e.loading!==null&&m.push(v(ye,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(_e)])]:null)),ae(v(h.value,$.value,m),[[Te,_.value,void 0,B.value]])}}});export{ut as Q,Te as R,Ge as a,z as b,Y as c,_e as d,ue as e,et as f,Je as g,xe as h,at as i,rt as j,nt as k,tt as l,Pe as m,it as n,Ne as o,ie as u,ze as v};
