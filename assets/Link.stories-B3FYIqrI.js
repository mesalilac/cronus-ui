import{n as e}from"./chunk-BneVvdWh.js";import{N as t,O as n,P as r,R as i,b as a,c as o,f as s,o as c,p as l,s as u,w as d}from"./web-BVRQcnZI.js";import{t as f}from"./IconInterfaceExternalLink-60OIUBTh.js";import{t as p}from"./icons-DwK0ITIp.js";import{i as m,r as h}from"./utils-C1J4YlMN.js";var g,_,v=e((()=>{c(),t(),p(),m(),g=l(`<a>`),_=e=>{let[t,c]=i(e,[`class`,`href`,`disabled`,`aria-disabled`,`hideIcon`,`children`]),l=n(()=>{try{return new URL(t.href).hostname!==window.location.hostname}catch{return!1}});return(()=>{var e=g();return s(e,r({get"aria-disabled"(){return t.disabled},get class(){return h(`flex items-center gap-1 font-semibold underline underline-offset-2 transition-colors hover:text-accent data-disabled:pointer-events-none data-disabled:text-text-muted`,t.class)},get"data-disabled"(){return t.disabled},get href(){return t.href}},c),!1,!0),u(e,()=>t.children,null),u(e,d(a,{get when(){return o(()=>!!l())()&&!t.hideIcon},get children(){return d(f,{"data-slot":`external-link-icon`})}}),null),e})()};try{_.displayName=`Link`,_.__docgenInfo={description:``,displayName:`Link`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Link/Link.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`},required:!1,tags:{},type:{name:`string | undefined`}},href:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`}],description:``,name:`href`,parent:{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`},required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`}],description:``,name:`disabled`,parent:{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},hideIcon:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`}],description:``,name:`hideIcon`,parent:{fileName:`cronus-ui/src/ui/Link/Link.tsx`,name:`LinkProps`},required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),y,b,x,S,C,w,T;e((()=>{c(),v(),y={title:`Ui/Link`,component:_,parameters:{layout:`centered`}},b={render:()=>d(_,{href:`https://www.google.com`,children:`Google`})},x={render:()=>d(_,{href:`https://www.google.com`,children:`Google`})},S={render:()=>d(_,{hideIcon:!0,href:`https://www.google.com`,children:`Google`})},C={render:()=>d(_,{href:`/users`,children:`Users`})},w={render:()=>d(_,{disabled:!0,href:`https://www.google.com`,children:`Google`})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Link href='https://www.google.com'>Google</Link>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Link href='https://www.google.com'>Google</Link>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Link hideIcon href='https://www.google.com'>\r
                Google\r
            </Link>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Link href='/users'>Users</Link>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Link disabled href='https://www.google.com'>\r
                Google\r
            </Link>;
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`External`,`ExternalWithoutIcon`,`Internal`,`Disabled`]}))();export{b as Default,w as Disabled,x as External,S as ExternalWithoutIcon,C as Internal,T as __namedExportsOrder,y as default};