(()=>{"use strict";const e="Server error. Please try again later.";async function t(t){const n=await fetch(`http://api.weatherapi.com/v1/current.json?key=65ac46dfc9cc48478c8190749230811&q=${t}`).catch((()=>new Error(e)));if(n instanceof Error)return n;const a=await n.json().catch((()=>new Error(e)));return"error"in a?new Error(a.error.message):a}function n(e){return{location:{country:e.location.country,city:e.location.name},current:{condition:{icon:`http:${e.current.condition.icon}`,description:e.current.condition.text},temperature:{actualC:e.current.temp_c,actualF:e.current.temp_f,feelsLikeC:e.current.feelslike_c,feelsLikeF:e.current.feelslike_f}}}}const a=document.createElement("span");a.className="text text_larger text_bold";const r=a,c=document.createElement("span");c.className="text text_large text_bold";const o=c,i=document.createElement("img");i.alt="",i.className="image",i.ariaHidden="true";const u=i,l=document.createElement("span");l.className="text text_large text_bold";const s=l,d=document.createElement("span");d.className="text_bold";const m=document.createElement("span");m.className="text",m.append("Feels like: ",d);const p=m,f={updateLocation:function(e,t){a.textContent=`${e}, ${t}`},updateCondition:function(e){c.textContent=e},updateImage:function(e){i.src=e},updateActualTemp:function(e,t){l.textContent=`${e}°C / ${t}°F`},updateFeelTemp:function(e,t){d.textContent=`${e}°C / ${t}°F`}},y=document.createElement("div");y.className="wrapper",y.append(r,o,u,s,p);const C=y,x="input",E="search",h="Location",g=document.createElement(x);g.type=E,g.name=E,g.id=E,g.className=x,g.required=!0,g.placeholder=h,g.ariaLabel=h,g.onfocus=()=>g.placeholder="",g.onblur=()=>g.placeholder=h,g.oninput=()=>{g.setCustomValidity(""),g.checkValidity()||(g.setCustomValidity("Please fill out this field."),g.reportValidity())};const N=g,_=document.createElement("button");_.type="submit",_.className="button",_.textContent="Search";const k=_,F=document.createElement("form");F.noValidate=!0,F.className="form",F.append(N,k),F.onsubmit=async e=>{if(e.preventDefault(),N.value=N.value.trim(),!F.checkValidity())return N.setCustomValidity("Please fill out this field."),F.reportValidity();const a=N.value,r=await t(a);if(r instanceof Error)return N.setCustomValidity(r.message),F.reportValidity();const c=n(r),{updateLocation:o,updateCondition:i,updateImage:u,updateActualTemp:l,updateFeelTemp:s}=f;o(c.location.country,c.location.city),i(c.current.condition.description),u(c.current.condition.icon),l(c.current.temperature.actualC,c.current.temperature.actualF),s(c.current.temperature.feelsLikeC,c.current.temperature.feelsLikeF)};const L=F,b=document.createElement("hr");b.className="separator";const w=document.createElement("div");w.className="content",w.append(C,b,L);const V=w,v=document.createElement("span");v.className="text text_large text_bold",v.textContent="Server error. Please try again later.";const $=v,T=document.querySelector(".root");(async()=>{const e=await async function(){return await t("London")}();if(e instanceof Error)return T.appendChild($);const a=n(e);T.appendChild(V);const{updateLocation:r,updateCondition:c,updateImage:o,updateActualTemp:i,updateFeelTemp:u}=f;r(a.location.country,a.location.city),c(a.current.condition.description),o(a.current.condition.icon),i(a.current.temperature.actualC,a.current.temperature.actualF),u(a.current.temperature.feelsLikeC,a.current.temperature.feelsLikeF)})()})();