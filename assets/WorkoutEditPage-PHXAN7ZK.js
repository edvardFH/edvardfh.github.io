import{g as f,W}from"./ExerciceRepository-B1ED5n54.js";import{a as g}from"./WuPage-CY-cMJ2G.js";import{u as w,g as x}from"./user-B-jgYFBe.js";import{u as v}from"./workout-DBLkSHe4.js";import{y as _,r,w as a,a as y,t as s,v as I,I as V,u}from"./index-fRkRtG5j.js";import"./QBtn-NDgkqETV.js";import"./WuBaseInput-el9xSb7F.js";import"./use-key-composition-GeyU1OPc.js";import"./StringAbbreviation-DcT5tr7o.js";import"./WindowWidth-CHCBUS4X.js";import"./pinia-BT-9ErvD.js";const b=_({__name:"WorkoutEditPage",props:{workoutId:{}},setup(m){const p=m,{getWorkoutById:l,updateWorkout:i}=v(),o=r(l(p.workoutId));a(o,e=>{e&&i(e)});const n=r(f()),c=y(()=>o.value?x(o.value):0),{addXp:d}=w();return a(c,(e,t)=>{d(e-t)}),(e,t)=>(u(),s(g,null,{default:I(()=>[o.value?(u(),s(W,{key:0,modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=k=>o.value=k),exercises:n.value},null,8,["modelValue","exercises"])):V("",!0)]),_:1}))}});export{b as default};
