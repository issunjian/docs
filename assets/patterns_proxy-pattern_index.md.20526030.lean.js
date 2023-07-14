import{d as f,h as y,o as E,c as i,C as l,t as C,b as c,G as D,F as v,H as _,J as F,E as g,a as $,V as m}from"./chunks/framework.c6d8cbec.js";const j={key:0},b=23,k=f({__name:"demo1",setup(h){const e={name:"Chocolate",age:b,nationality:"China"},n=y(""),r=y(""),o=y(0),u=y(e),p=new Proxy(e,{get:(a,t)=>{n.value=`The value of ${t} is ${a[t]}`},set:(a,t,d)=>(n.value=`Changed ${t} from ${a[t]} to ${d}`,a[t]=d,!0)});function s(){n.value="",r.value="",o.value=0,e.age=b}return(a,t)=>(E(),i(v,null,[l("pre",null,C(u.value),1),l("button",{onClick:t[0]||(t[0]=d=>r.value=c(p).name)}," get name "),l("button",{onClick:t[1]||(t[1]=d=>o.value=c(p).age=18)}," set age "),l("button",{class:"gray",onClick:s}," reset "),n.value?(E(),i("p",j," log message: "+C(n.value),1)):D("",!0)],64))}}),T={key:0},x=22,B=f({__name:"demo2",setup(h){const e={name:"John Doe",age:x,nationality:"American"},n=y(""),r=y(e),o=new Proxy(e,{get:(p,s)=>{p[s]?n.value=`The value of ${s} is ${p[s]}`:n.value="Hmm.. this property doesn't seem to exist"},set:(p,s,a)=>(s==="age"&&typeof a!="number"?n.value="Sorry, you can only pass numeric values for age.":s==="name"&&a.length<2?n.value="You need to provide a valid name.":(n.value=`Changed ${s} from ${p[s]} to ${a}.`,p[s]=a),!0)});function u(){n.value="",e.age=x}return(p,s)=>(E(),i(v,null,[l("pre",null,C(r.value),1),l("button",{onClick:s[0]||(s[0]=a=>{c(o).nonExistentProperty})}," get nonExistentProperty "),l("button",{onClick:s[1]||(s[1]=a=>c(o).age=44)}," set age = 44 "),l("button",{onClick:s[2]||(s[2]=a=>c(o).name="")}," set name = '' "),l("button",{class:"gray",onClick:u}," reset "),n.value?(E(),i("p",T," log message: "+C(n.value),1)):D("",!0)],64))}}),S={key:0},A=42,P="John Doe",R=f({__name:"demo3",setup(h){const e={name:P,age:A,nationality:"American"},n=y(""),r=y(e),o=new Proxy(e,{get:(p,s)=>{n.value=`The value of ${s} is ${Reflect.get(p,s)}`},set:(p,s,a)=>(n.value=`Changed ${s} from ${p[s]} to ${a}`,Reflect.set(p,s,a))});function u(){n.value="",e.name=P,e.age=A}return(p,s)=>(E(),i(v,null,[l("pre",null,C(r.value),1),l("button",{onClick:s[0]||(s[0]=(...a)=>c(o).name&&c(o).name(...a))}," get name "),l("button",{onClick:s[1]||(s[1]=a=>c(o).age=43)}," set age = 43 "),l("button",{onClick:s[2]||(s[2]=a=>c(o).name="Chocolate")}," set name = 'Chocolate' "),l("button",{class:"gray",onClick:u}," reset "),n.value?(E(),i("p",S," log message: "+C(n.value),1)):D("",!0)],64))}}),V=l("h1",{id:"代理模式",tabindex:"-1"},[$("代理模式 "),l("a",{class:"header-anchor",href:"#代理模式","aria-label":'Permalink to "代理模式"'},"​")],-1),q=m("",5),w=m("",4),N=m("",6),I=m("",7),H=JSON.parse('{"title":"代理模式","description":"","frontmatter":{},"headers":[],"relativePath":"patterns/proxy-pattern/index.md","filePath":"patterns/proxy-pattern/index.md"}'),J={name:"patterns/proxy-pattern/index.md"},Y=Object.assign(J,{setup(h){return(e,n)=>{const r=_("VideoLink"),o=_("DemoContainer");return E(),i("div",null,[V,F(r,{bvId:"BV1FM41187Rx"},{default:g(()=>[$("前端代理模式，介绍 Proxy 与 Reflect | Proxy Pattern B 站视频传送门")]),_:1}),q,F(o,{pkg:"patterns/proxy-pattern",path:"demo1.vue"},{default:g(()=>[F(k)]),_:1}),w,F(o,{pkg:"patterns/proxy-pattern",path:"demo2.vue"},{default:g(()=>[F(B)]),_:1}),N,F(o,{pkg:"patterns/proxy-pattern",path:"demo3.vue"},{default:g(()=>[F(R)]),_:1}),I])}}});export{H as __pageData,Y as default};
