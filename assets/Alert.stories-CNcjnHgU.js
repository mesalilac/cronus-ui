import{n as e}from"./chunk-BneVvdWh.js";import{C as t,M as n,N as r,O as i,T as a,a as o,b as s,f as c,k as l,o as u,r as d,v as f,y as p,z as m}from"./web-C_www37z.js";import{t as h}from"./IconEditShow-CfK5yT5T.js";import{t as g}from"./IconInterfaceCheck-B4zwSB2l.js";import{t as _}from"./IconMenuCloseMd-XpXSoaUx.js";import{t as v}from"./IconWarningCircleWarning-CBrQ5TQH.js";import{t as y}from"./IconWarningInfo-s4Zp5rGP.js";import{t as b}from"./icons-_5EPuHlL.js";import{n as x,r as S}from"./utils-B5zP-D2T.js";import{t as C}from"./Button-C34HWM-0.js";import{t as w}from"./Button-DEhmje5r.js";var T,E,D,O,k,A=e((()=>{o(),n(),b(),w(),S(),T=c(`<div class="mt-2 flex flex-row items-center gap-2">`),E=c(`<div><div class="flex w-full flex-col gap-2"><h1 class=font-medium></h1><p>`),D=a(),O=()=>{let e=m(D);if(!e)throw Error(`useContext must be used within the correct context provider`);return e},k=e=>{let n=r({variant:`default`},e),[a,o]=l(!0),c={default:x(`bg-surface-3/20 text-text-muted`),success:x(`bg-success/20 text-text-success`),warning:x(`bg-warning/20 text-text-warning`),danger:x(`bg-danger/20 text-text-danger`),info:x(`bg-info/20 text-text-info`)},m=()=>o(!1);return t(p,{get when(){return a()},get children(){return t(D.Provider,{get value(){return{variant:n.variant,dismiss:m}},get children(){var e=E(),r=e.firstChild,a=r.firstChild,o=a.nextSibling;return u(e,t(s,{get children(){return[t(f,{get when(){return n.variant===`default`},get children(){return t(y,{class:`size-6`})}}),t(f,{get when(){return n.variant===`success`},get children(){return t(g,{class:`size-6`})}}),t(f,{get when(){return n.variant===`warning`},get children(){return t(v,{class:`size-6`})}}),t(f,{get when(){return n.variant===`danger`},get children(){return t(v,{class:`size-6`})}}),t(f,{get when(){return n.variant===`info`},get children(){return t(y,{class:`size-6`})}})]}}),r),u(a,()=>n.title),u(o,()=>n.description),u(r,t(p,{get when(){return n.children},get children(){var e=T();return u(e,()=>n.children),e}}),null),u(e,t(_,{class:`size-6 cursor-pointer`,onClick:m}),null),i(()=>d(e,x(`flex w-full min-w-80 flex-row gap-4 rounded-default border-current border-l-4 p-4`,c[n.variant],n.class))),e}})}})},k.Action=e=>{let n=O();return t(C,{get class(){return x(`border-current text-current hover:bg-current/10 active:bg-current/20`,e.class)},onClick:()=>e.onClick?.(n.dismiss),variant:`outline`,get children(){return e.children}})};try{k.displayName=`Alert`,k.__docgenInfo={description:``,displayName:`Alert`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Alert/Alert.tsx`,methods:[],props:{variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`AlertVariant | undefined`,value:[{value:`undefined`},{value:`"default"`},{value:`"success"`},{value:`"danger"`},{value:`"warning"`},{value:`"info"`}]}},title:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{k.Action.displayName=`Alert.Action`,k.Action.__docgenInfo={description:``,displayName:`Alert.Action`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Alert/Alert.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`((dismiss: () => void) => void) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),j,M,N,P,F,I,L;e((()=>{o(),b(),A(),j={title:`Ui/Alert`,component:k,parameters:{layout:`centered`}},M={render:()=>t(k,{description:`Alert Description`,title:`Alert Title`,variant:`default`,get children(){return t(k.Action,{onClick:e=>e(),get children(){return[t(h,{}),` Show more`]}})}})},N={render:()=>t(k,{description:`Alert Description`,title:`Alert Title`,variant:`success`,get children(){return t(k.Action,{onClick:e=>e(),get children(){return[t(h,{}),` Show more`]}})}})},P={render:()=>t(k,{description:`Alert Description`,title:`Alert Title`,variant:`warning`,get children(){return t(k.Action,{onClick:e=>e(),get children(){return[t(h,{}),` Show more`]}})}})},F={render:()=>t(k,{description:`Alert Description`,title:`Alert Title`,variant:`danger`,get children(){return t(k.Action,{onClick:e=>e(),get children(){return[t(h,{}),` Show more`]}})}})},I={render:()=>t(k,{description:`Alert Description`,title:`Alert Title`,variant:`info`,get children(){return t(k.Action,{onClick:e=>e(),get children(){return[t(h,{}),` Show more`]}})}})},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='default'>\r
                <Alert.Action onClick={dismiss => dismiss()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='success'>\r
                <Alert.Action onClick={dismiss => dismiss()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='warning'>\r
                <Alert.Action onClick={dismiss => dismiss()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='danger'>\r
                <Alert.Action onClick={dismiss => dismiss()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='info'>\r
                <Alert.Action onClick={dismiss => dismiss()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`Success`,`Warning`,`Danger`,`Info`]}))();export{F as Danger,M as Default,I as Info,N as Success,P as Warning,L as __namedExportsOrder,j as default};