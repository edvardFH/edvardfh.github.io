import{W as u}from"./WorkoutEdit-D1gIk1Mp.js";import{i}from"./WuPage-DxHe3gEO.js";import{x as s,r as c,_,s as o,t as n,u as f,H as p}from"./index-WA43LDbh.js";import"./QBtn-Cfi5klT3.js";import"./StringAbbreviation-rpVaGbur.js";import"./scroll-D3PNqnxk.js";function m(t){return`${d(t)}/${l(t)}/${g(t)}`}function d(t){return t.getFullYear()}function l(t){return String(t.getMonth()+1).padStart(2,"0")}function g(t){return String(t.getDate()).padStart(2,"0")}function k(){return m(new Date(Date.now()))}const w=s({__name:"WorkoutCreatePage",setup(t,{expose:r}){r();const e={workout:c({id:"",name:"",date:k(),rounds:[],notes:"",totalDuration:"00:00"}),WorkoutEdit:u,WuPage:i};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function W(t,r,a,e,D,x){return o(),n(e.WuPage,null,{default:f(()=>[e.workout?(o(),n(e.WorkoutEdit,{key:0,workout:e.workout},null,8,["workout"])):p("",!0)]),_:1})}const b=_(w,[["render",W],["__file","WorkoutCreatePage.vue"]]);export{b as default};
