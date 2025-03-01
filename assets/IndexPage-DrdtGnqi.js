import{u as b,g as x,Q as f,a as k,b as h,W as S,c as P,d as I,e as B,f as D,h as C,i as O}from"./WuPage-BB9OYB5X.js";import{c as Q}from"./QBtn-Cb2benR1.js";import{x as l,B as F,a as v,_ as p,s,t as _,u as r,z as a,A as m,C as w,D as W,E as g,F as H,G as L,H as j}from"./index-ClANKyF-.js";import{D as E}from"./DurationBadge-Cxeav824.js";const N=l({__name:"WorkoutPreviewItem",props:{workout:{}},setup(n,{expose:o}){o();const t=F(),e=n;function u(){t.push({name:"WorkoutDetails",params:{workoutId:e.workout.id}})}const{isScreenSmall:i}=b(),c=v(()=>{const y=i.value?64:150;return x(e.workout.notes,y)}),d={router:t,props:e,gotoWorkoutDetails:u,isScreenSmall:i,notesPreview:c,DurationBadge:E};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function V(n,o,t,e,u,i){return s(),_(h,{clickable:"",onClick:e.gotoWorkoutDetails},{default:r(()=>[a(f,{side:""},{default:r(()=>[a(e.DurationBadge,{duration:t.workout.totalDuration},null,8,["duration"])]),_:1}),a(f,null,{default:r(()=>[a(k,{caption:""},{default:r(()=>[m(w(t.workout.date),1)]),_:1}),a(k,null,{default:r(()=>[m(w(t.workout.name),1)]),_:1}),a(k,{caption:""},{default:r(()=>[m(w(e.notesPreview),1)]),_:1})]),_:1}),a(f,{side:""},{default:r(()=>[a(Q,{name:"chevron_right"})]),_:1})]),_:1})}const $=p(N,[["render",V],["__file","WorkoutPreviewItem.vue"]]),A=l({__name:"WuFab",props:{icon:{},color:{}},setup(n,{expose:o}){o();const t={WuBaseButton:S,get getStringOrEmpty(){return P}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function z(n,o,t,e,u,i){return s(),_(e.WuBaseButton,{primary:"",icon:t.icon,color:e.getStringOrEmpty(t.color),style:{width:"56px",height:"56px"}},null,8,["icon","color"])}const G=p(A,[["render",z],["__scopeId","data-v-b092dd9e"],["__file","WuFab.vue"]]),R=l({__name:"WorkoutHistory",props:{workouts:{}},setup(n,{expose:o}){o();const t=n,e=v(()=>t.workouts.toSorted((i,c)=>c.date.localeCompare(i.date))),u={props:t,sortedWorkouts:e,WorkoutPreviewItem:$,WorkoutLayout:I,WuFab:G};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),T={key:1,class:"no-workout"},Y={class:"row justify-center"};function q(n,o,t,e,u,i){return s(),_(e.WorkoutLayout,null,{header:r(()=>o[0]||(o[0]=[W("span",{class:"text-h5"},"Workout History",-1)])),body:r(()=>[t.workouts.length>0?(s(),_(B,{key:0,bordered:"",style:{"border-radius":"var(--wu-border-radius)",overflow:"hidden"}},{default:r(()=>[(s(!0),g(L,null,H(e.sortedWorkouts,(c,d)=>(s(),g("div",{key:c.id},[a(e.WorkoutPreviewItem,{workout:c},null,8,["workout"]),d<t.workouts.length-1?(s(),_(D,{key:0})):j("",!0)]))),128))]),_:1})):(s(),g("div",T,o[1]||(o[1]=[W("span",{class:"text-center"},"Your workouts will appear here",-1)])))]),footer:r(()=>[W("div",Y,[a(e.WuFab,{icon:"add",color:"primary",to:{name:"WorkoutCreate"}})])]),_:1})}const J=p(R,[["render",q],["__scopeId","data-v-f88d0170"],["__file","WorkoutHistory.vue"]]),K=l({__name:"IndexPage",setup(n,{expose:o}){o();const e={workouts:C(),WorkoutHistory:J,WuPage:O};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function M(n,o,t,e,u,i){return s(),_(e.WuPage,null,{default:r(()=>[a(e.WorkoutHistory,{workouts:e.workouts},null,8,["workouts"])]),_:1})}const te=p(K,[["render",M],["__file","IndexPage.vue"]]);export{te as default};
