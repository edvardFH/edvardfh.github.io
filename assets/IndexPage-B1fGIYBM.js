import{Q as p,a as f,b as g,W as b,g as v,c as x,d as h,e as S,f as I,h as P}from"./WuPage-BKoRUG_Q.js";import{c as B}from"./QBtn-BZiM1gLD.js";import{x as d,B as D,_ as l,s as n,t as _,u as r,z as a,A as k,C as m,a as C,D as w,E as W,F as O,G as Q,H as F}from"./index-CX9T757-.js";import{D as H}from"./DurationBadge-CCxCo6Hy.js";const j=d({__name:"WorkoutPreviewItem",props:{workout:{}},setup(s,{expose:o}){o();const t=D(),e=s;function u(){t.push({name:"WorkoutDetails",params:{workoutId:e.workout.id}})}const i={router:t,props:e,gotoWorkoutDetails:u,DurationBadge:H};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function E(s,o,t,e,u,i){return n(),_(g,{clickable:"",onClick:e.gotoWorkoutDetails},{default:r(()=>[a(p,{side:""},{default:r(()=>[a(e.DurationBadge,{duration:t.workout.totalDuration},null,8,["duration"])]),_:1}),a(p,null,{default:r(()=>[a(f,{caption:""},{default:r(()=>[k(m(t.workout.date),1)]),_:1}),a(f,null,{default:r(()=>[k(m(t.workout.name),1)]),_:1}),a(f,{caption:""},{default:r(()=>[k(m(t.workout.notes),1)]),_:1})]),_:1}),a(p,{side:""},{default:r(()=>[a(B,{name:"chevron_right"})]),_:1})]),_:1})}const L=l(j,[["render",E],["__file","WorkoutPreviewItem.vue"]]),N=d({__name:"WuFab",props:{icon:{},color:{}},setup(s,{expose:o}){o();const t={WuBaseButton:b,get getStringOrEmpty(){return v}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function V(s,o,t,e,u,i){return n(),_(e.WuBaseButton,{primary:"",icon:t.icon,color:e.getStringOrEmpty(t.color),style:{width:"56px",height:"56px"}},null,8,["icon","color"])}const $=l(N,[["render",V],["__scopeId","data-v-b092dd9e"],["__file","WuFab.vue"]]),A=d({__name:"WorkoutHistory",props:{workouts:{}},setup(s,{expose:o}){o();const t=s,e=C(()=>t.workouts.toSorted((i,c)=>c.date.localeCompare(i.date))),u={props:t,sortedWorkouts:e,WorkoutPreviewItem:L,WorkoutLayout:x,WuFab:$};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),z={key:1,class:"no-workout"},G={class:"row justify-center"};function R(s,o,t,e,u,i){return n(),_(e.WorkoutLayout,null,{header:r(()=>o[0]||(o[0]=[w("span",{class:"text-h5"},"Workout History",-1)])),body:r(()=>[t.workouts.length>0?(n(),_(h,{key:0,bordered:"",style:{"border-radius":"var(--wu-border-radius)",overflow:"hidden"}},{default:r(()=>[(n(!0),W(Q,null,O(e.sortedWorkouts,(c,y)=>(n(),W("div",{key:c.id},[a(e.WorkoutPreviewItem,{workout:c},null,8,["workout"]),y<t.workouts.length-1?(n(),_(S,{key:0})):F("",!0)]))),128))]),_:1})):(n(),W("div",z,o[1]||(o[1]=[w("span",{class:"text-center"},"Your workouts will appear here",-1)])))]),footer:r(()=>[w("div",G,[a(e.WuFab,{icon:"add",color:"primary",to:{name:"WorkoutCreate"}})])]),_:1})}const T=l(A,[["render",R],["__scopeId","data-v-f88d0170"],["__file","WorkoutHistory.vue"]]),Y=d({__name:"IndexPage",setup(s,{expose:o}){o();const e={workouts:I(),WorkoutHistory:T,WuPage:P};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function q(s,o,t,e,u,i){return n(),_(e.WuPage,null,{default:r(()=>[a(e.WorkoutHistory,{workouts:e.workouts},null,8,["workouts"])]),_:1})}const X=l(Y,[["render",q],["__file","IndexPage.vue"]]);export{X as default};
