import{_ as c,H as p,o as r,c as y,J as n,C as s,a,E as e,V as l}from"./chunks/framework.c6d8cbec.js";const N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/ts/typeScript.md","filePath":"frontend/ts/typeScript.md"}'),F={name:"frontend/ts/typeScript.md"},i=l("",10),E=s("p",null,[a("名称使用大写开头，或者以"),s("code",null,"I"),a("开头")],-1),d=s("p",null,[a("使用"),s("code",null,"?"),a("说明属性是可选的。")],-1),C=s("code",null,"[propName: string]: any",-1),u=s("strong",null,"任意属性",-1),h=s("code",null,"any",-1),b=s("code",null,"string",-1),g=s("code",null,"string",-1),f=s("p",null,[s("code",null,"readonly"),a("定义属性只读。即初始化赋值，后面不可改。")],-1),m=l("",5),D=l("",59);function A(v,k,q,B,_,P){const t=p("Banner"),o=p("font");return r(),y("div",null,[n(t),i,s("blockquote",null,[E,d,s("p",null,[C,a("指定该接口有"),n(o,{color:"red"},{default:e(()=>[u]),_:1}),a("，这个"),h,a("说明任意属性可以是任意类型。如果换成"),b,a("，则该接口下，必选、可选的属性都必须是"),g,a("类型。")]),f]),m,n(o,{color:"red"},{default:e(()=>[a("需要注意的是，可选参数必须接在必需参数后面。换句话说，**可选参数后面不允许再出现必需参数了**")]),_:1}),D])}const T=c(F,[["render",A]]);export{N as __pageData,T as default};
