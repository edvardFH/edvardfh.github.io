import{r as d,a as o,o as r,p as s}from"./index-DBDKhFHL.js";const a=600;function w(){const e=d(window.innerWidth);function n(){e.value=window.innerWidth}const i=o(()=>e.value>a),t=o(()=>!i.value);return r(()=>window.addEventListener("resize",n)),s(()=>window.removeEventListener("resize",n)),{windowWidth:e,isScreenLarge:i,isScreenSmall:t}}export{w as u};
