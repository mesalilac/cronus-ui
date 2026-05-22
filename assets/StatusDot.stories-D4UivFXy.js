import{n as e}from"./chunk-BneVvdWh.js";import{N as t,P as n,b as r,i,k as a,o,p as s,s as c,w as l}from"./web-BVRQcnZI.js";import{i as u,r as d}from"./utils-C1J4YlMN.js";var f,p,m,h,g,_=e((()=>{o(),t(),u(),f=s(`<div>`),p=s(`<div><div>`),m={primary:d(`bg-accent`),secondary:d(`bg-text-muted`),info:d(`bg-info`),success:d(`bg-success`),warning:d(`bg-warning`),danger:d(`bg-danger`)},h={sm:d(`size-2`),md:d(`size-4`),lg:d(`size-6`)},g=e=>{let t=n({variant:`secondary`,size:`md`},e),o=()=>d(m[t.variant],h[t.size]);return(()=>{var e=p(),n=e.firstChild;return c(e,l(r,{get when(){return t.ping},get children(){var e=f();return a(()=>i(e,d(`animate-ping rounded-full`,o()))),e}}),n),a(t=>{var r=d(`inline-grid shrink-0 *:[grid-area:1/1]`),a=d(`rounded-full`,o());return r!==t.e&&i(e,t.e=r),a!==t.t&&i(n,t.t=a),t},{e:void 0,t:void 0}),e})()};try{g.displayName=`StatusDot`,g.__docgenInfo={description:``,displayName:`StatusDot`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/StatusDot/StatusDot.tsx`,methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/StatusDot/StatusDot.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`StatusDotVariant | undefined`,value:[{value:`undefined`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`}]}},size:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/StatusDot/StatusDot.tsx`,name:`TypeLiteral`}],description:``,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`StatusDotSize | undefined`,value:[{value:`undefined`},{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},ping:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/StatusDot/StatusDot.tsx`,name:`TypeLiteral`}],description:``,name:`ping`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{o(),_(),v=s(`<div class="flex flex-col gap-2">`),y={title:`Ui/StatusDot`,component:g,parameters:{layout:`centered`}},b={render:()=>l(g,{})},x={render:()=>l(g,{variant:`primary`})},S={render:()=>l(g,{variant:`secondary`})},C={render:()=>l(g,{variant:`info`})},w={render:()=>l(g,{variant:`success`})},T={render:()=>l(g,{variant:`warning`})},E={render:()=>l(g,{variant:`danger`})},D={render:()=>(()=>{var e=v();return c(e,l(g,{ping:!0,variant:`primary`}),null),c(e,l(g,{ping:!0,variant:`secondary`}),null),c(e,l(g,{ping:!0,variant:`info`}),null),c(e,l(g,{ping:!0,variant:`success`}),null),c(e,l(g,{ping:!0,variant:`warning`}),null),c(e,l(g,{ping:!0,variant:`danger`}),null),e})()},O={render:()=>(()=>{var e=v();return c(e,l(g,{size:`sm`}),null),c(e,l(g,{size:`md`}),null),c(e,l(g,{size:`lg`}),null),e})()},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='primary' />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='secondary' />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='info' />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='success' />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='warning' />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <StatusDot variant='danger' />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-col gap-2'>\r
                <StatusDot ping variant='primary' />\r
                <StatusDot ping variant='secondary' />\r
                <StatusDot ping variant='info' />\r
                <StatusDot ping variant='success' />\r
                <StatusDot ping variant='warning' />\r
                <StatusDot ping variant='danger' />\r
            </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-col gap-2'>\r
                <StatusDot size='sm' />\r
                <StatusDot size='md' />\r
                <StatusDot size='lg' />\r
            </div>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Primary`,`Secondary`,`Info`,`Success`,`Warning`,`Danger`,`PingAnimation`,`Size`]}))();export{E as Danger,b as Default,C as Info,D as PingAnimation,x as Primary,S as Secondary,O as Size,w as Success,T as Warning,k as __namedExportsOrder,y as default};