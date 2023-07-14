import{_ as t,H as e,o as r,c as y,J as n,C as a,E as p,a as s,V as o}from"./chunks/framework.c6d8cbec.js";const K=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js/js学习笔记.md","filePath":"frontend/js/js学习笔记.md"}'),F={name:"frontend/js/js学习笔记.md"},i=o("",16),d=o("",30),E=o("",62),u=o("",7),C=a("code",null,"e",-1),h=a("code",null,"x",-1),g=a("code",null,"+",-1),b=a("code",null,"+",-1),v=a("code",null,"x",-1),D=a("code",null,"e",-1),f=a("code",null,"-",-1),A=a("code",null,"x",-1),q=o("",25),B=a("code",null,"parseInt",-1),k=a("li",null,[a("p",null,"如果字符串头部有空格，空格会被自动去除。")],-1),j=a("li",null,[a("p",null,"字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。")],-1),_=a("code",null,"+",-1),m=a("code",null,"-",-1),N=a("code",null,"NaN",-1),x=o("",1),P=o("",47),w=o("",3),O=o("",85),S=o("",79),I=a("code",null,"configurable",-1),T=a("code",null,"true",-1),J=a("code",null,"false",-1),U=a("strong",null,"删除该属性",-1),V=a("strong",null,"不得改变该属性的属性描述对象",-1),M=a("code",null,"configurable",-1),H=o("",31);function R(X,z,L,W,$,Z){const c=e("Banner"),l=e("font");return r(),y("div",null,[n(c),i,a("p",null,[a("strong",null,[n(l,{color:"red"},{default:p(()=>[s("undefined：表示变量定义了，但没有赋值")]),_:1})])]),a("p",null,[a("strong",null,[n(l,{color:"orange"},{default:p(()=>[s("not defined：表示变量未定义，没有声明")]),_:1})])]),d,n(l,{color:"red"},{default:p(()=>[s("`do...while`循环与`while`循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。")]),_:1}),E,n(l,{color:"red"},{default:p(()=>[s("如果一个数大于等于 2 的 1024 次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回`Infinity`。")]),_:1}),u,a("p",null,[C,s("后面直接跟着数字"),h,s("，表示省略了"),g,s("号，和带"),b,s("号的效果一样，表示小数点"),n(l,{color:"red"},{default:p(()=>[s("向右")]),_:1}),s("移动"),v,s("位数")]),a("p",null,[s("如果"),D,s("后面跟着"),f,s("号，即表示小数点"),n(l,{color:"red"},{default:p(()=>[s("向左")]),_:1}),s("移动"),A,s("位数")]),q,a("p",null,[a("strong",null,[B,s("方法用于将"),n(l,{color:"red"},{default:p(()=>[s("字符串")]),_:1}),s("转为整数。")])]),a("ul",null,[k,a("li",null,[n(l,{color:"blue"},{default:p(()=>[s("如果`parseInt`的参数不是字符串，则会先转为字符串再转换。")]),_:1})]),j,a("li",null,[a("p",null,[s("如果字符串的第一位不是数字"),n(l,{color:"red"},{default:p(()=>[s("(除了"),_,s("，"),m,s("号)，")]),_:1}),s("则返回的结果的"),N]),x])]),P,a("p",null,[s("对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。"),n(l,{color:"red"},{default:p(()=>[s("如果一个属性的值为函数，通常把这个属性称为“方法”")]),_:1}),s(">，它可以像函数那样调用。")]),w,a("p",null,[s("此时，如果取消某一个变量对于原对象的引用，不会影响到另一个变量。因为赋值的时候是把内存地址赋值给变量。但这种情况只限于"),n(l,{color:"red"},{default:p(()=>[s("复杂类型")]),_:1})]),a("p",null,[s("如果是"),n(l,{color:"blue"},{default:p(()=>[s("基本数据类型")]),_:1}),s("，这种赋值是对**"),n(l,{color:"orange"},{default:p(()=>[s("值")]),_:1}),s("**的拷贝，并不是拷贝内存地址，所以两个变量不会互相影响")]),O,n(l,{color:"red"},{default:p(()=>[s("`eval`的本质是在当前作用域之中，注入代码。由于安全风险和不利于 JavaScript 引擎优化执行速度，所以一般不推荐使用。")]),_:1}),S,a("p",null,[I,s("是一个布尔值，表示可配置性，默认为"),T,s("。如果设为"),J,s("，将阻止某些操作改写该属性，比如无法"),n(l,{color:"red"},{default:p(()=>[U]),_:1}),s("，也"),n(l,{color:"red"},{default:p(()=>[V]),_:1}),s("。也就是说，"),M,s("属性控制了属性描述对象的可写性。")]),H])}const Q=t(F,[["render",R]]);export{K as __pageData,Q as default};
