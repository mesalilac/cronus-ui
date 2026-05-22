import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,E as r,N as i,O as a,b as o,c as s,d as c,i as l,j as u,k as d,o as f,p,s as m,u as h,w as g}from"./web-BVRQcnZI.js";import{i as _,n as v,r as y}from"./utils-C1J4YlMN.js";import{n as b,t as x}from"./Label-Az67DKGD.js";import{n as S,t as C}from"./Slider-DXQqGUw1.js";var w=e((()=>{S()})),T,E,D,O,k,A,j,M,N=e((()=>{f(),i(),x(),_(),T=p(`<div>`),E=p(`<span aria-hidden class="absolute top-0 -translate-x-1/2 select-none font-medium text-text-primary text-xs">%`),D=p(`<div class="relative w-full"><progress>`),O=r(),k=()=>{let e=n(O);if(!e)throw Error(`useProgressContext must be used within the ProgressContext provider`);return e},A=e=>{let t=u(),n=()=>e.max??100,r=a(()=>v(e.value,0,n())/n()*100);return g(O.Provider,{value:{id:()=>e.id??t,value:()=>e.value,max:n,getPercent:r},get children(){var t=T();return m(t,()=>e.children??g(M,{})),d(()=>l(t,y(`flex flex-col gap-2`,e.class))),t}})},j=e=>{let t=k();return g(b,{get class(){return e.class},get for(){return t.id()},get children(){return s(()=>typeof e.children==`function`)()?e.children(t.getPercent()):e.children}})},M=e=>{let t=k();return(()=>{var n=D(),r=n.firstChild;return m(n,g(o,{get when(){return t.getPercent()>=5},get children(){var e=E(),n=e.firstChild;return m(e,()=>Math.round(t.getPercent()),n),d(n=>c(e,`left`,`${t.getPercent()/2}%`)),e}}),null),d(n=>{var i=y(`block w-full appearance-none overflow-hidden rounded-full bg-surface-3 outline outline-border [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-accent [&::-webkit-progress-bar]:appearance-none [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:bg-surface-3 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-accent`,e.class),a=t.id(),o=t.max();return i!==n.e&&l(r,n.e=i),a!==n.t&&h(r,`id`,n.t=a),o!==n.a&&h(r,`max`,n.a=o),n},{e:void 0,t:void 0,a:void 0}),d(()=>r.value=t.value()),n})()},A.Label=j,A.Bar=M;try{A.displayName=`Progress`,A.__docgenInfo={description:``,displayName:`Progress`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Progress/Progress.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}},max:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`number | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{A.Label.displayName=`Progress.Label`,A.Label.__docgenInfo={description:``,displayName:`Progress.Label`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Progress/Progress.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{A.Bar.displayName=`Progress.Bar`,A.Bar.__docgenInfo={description:``,displayName:`Progress.Bar`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Progress/Progress.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Progress/Progress.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),P,F,I,L,R,z,B;e((()=>{f(),i(),w(),N(),P=p(`<div class=size-96>`),F=p(`<div class="flex size-96 flex-col gap-4">`),I={title:`Ui/Progress`,component:A,parameters:{layout:`centered`}},L={render:()=>{let[e,n]=t(0),r=setInterval(()=>{e()===100&&clearInterval(r),n(e=>e+1)},20);return(()=>{var t=P();return m(t,g(A,{max:100,get value(){return e()}})),t})()}},R={render:()=>(()=>{var e=P();return m(e,g(A,{max:100,value:80,get children(){return[g(A.Label,{children:`Label`}),g(A.Bar,{})]}})),e})()},z={render:()=>{let[e,n]=t(0);return(()=>{var t=F();return m(t,g(A,{max:100,get value(){return e()},get children(){return[g(A.Label,{children:`Label`}),g(A.Bar,{})]}}),null),m(t,g(C,{max:100,onInput:n,get value(){return e()},get children(){return g(C.Input,{})}}),null),t})()}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(0);
    const interval = setInterval(() => {
      if (value() === 100) clearInterval(interval);
      setValue(prev => prev + 1);
    }, 20);
    return <div class='size-96'>\r
                <Progress max={100} value={value()} />\r
            </div>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Progress max={100} value={80}>\r
                    <Progress.Label>Label</Progress.Label>\r
                    <Progress.Bar />\r
                </Progress>\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(0);
    return <div class='flex size-96 flex-col gap-4'>\r
                <Progress max={100} value={value()}>\r
                    <Progress.Label>Label</Progress.Label>\r
                    <Progress.Bar />\r
                </Progress>\r
                <Slider max={100} onInput={setValue} value={value()}>\r
                    <Slider.Input />\r
                </Slider>\r
            </div>;
  }
}`,...z.parameters?.docs?.source}}},B=[`Default`,`withLabel`,`ExternalControl`]}))();export{L as Default,z as ExternalControl,B as __namedExportsOrder,I as default,R as withLabel};