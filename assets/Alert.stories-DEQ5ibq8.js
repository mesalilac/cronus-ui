import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,E as r,F as i,N as a,O as o,P as s,T as c,b as l,c as u,i as d,k as f,o as p,p as m,s as h,w as g,x as _,y as v}from"./web-BVRQcnZI.js";import{t as y}from"./IconEditShow-Cl1apNMJ.js";import{t as b}from"./IconInterfaceCheck-BExOPGQL.js";import{t as x}from"./IconMenuCloseMd-vPfUM5mQ.js";import{t as S}from"./IconWarningCircleWarning-BikPvaMw.js";import{t as C}from"./IconWarningInfo-LHthxjDH.js";import{t as w}from"./icons-DwK0ITIp.js";import{t as T}from"./Button-D7ZefyVV.js";import{i as E,r as D}from"./utils-C1J4YlMN.js";import{t as O}from"./Button-BZz8-4tt.js";import{n as k,t as A}from"./gsap-BCio8Dq3.js";import{n as j,t as M}from"./dist-BwHv0uIN.js";var N,P,F,I,L,R=e((()=>{p(),k(),a(),j(),w(),O(),E(),N=m(`<div class="mt-2 flex flex-row items-center gap-2">`),P=m(`<div><div class="flex w-full flex-col gap-2"><h1 class="font-semibold text-lg"></h1><p class=text-text-muted>`),F=r(),I=()=>{let e=n(F);if(!e)throw Error(`useContext must be used within the correct context provider`);return e},L=e=>{let n=s({variant:`default`,dismissible:!0},e),[r,a]=t(n.open??!0);c(i(()=>!!n.open,e=>{a(e)},{defer:!0}));let o=e=>{n.open===void 0&&a(e),n.onOpenChange?.(e)},u=()=>o(!1),p={default:D(`border-accent bg-accent/30`),success:D(`border-text-success bg-success/30`),warning:D(`border-text-warning bg-warning/30`),danger:D(`border-text-danger bg-danger/30`),info:D(`border-text-info bg-info/30`)};return g(M,{onEnter:(e,t)=>{A.from(e,{autoAlpha:0,scale:.98,duration:.2,ease:`power3.out`,onComplete:t})},onExit:(e,t)=>{A.to(e,{autoAlpha:0,scale:.98,duration:.2,ease:`power3.out`,onComplete:t})},get children(){return g(l,{get when(){return r()},get children(){return g(F.Provider,{value:{variant:()=>n.variant,closeAlert:u},get children(){var e=P(),t=e.firstChild,r=t.firstChild,i=r.nextSibling;return h(e,g(_,{get fallback(){return g(C,{class:`size-6 text-text-secondary`})},get children(){return[g(v,{get when(){return n.variant===`success`},get children(){return g(b,{class:`size-6 text-text-success`})}}),g(v,{get when(){return n.variant===`warning`},get children(){return g(S,{class:`size-6 text-text-warning`})}}),g(v,{get when(){return n.variant===`danger`},get children(){return g(S,{class:`size-6 text-text-danger`})}}),g(v,{get when(){return n.variant===`info`},get children(){return g(C,{class:`size-6 text-text-info`})}})]}}),t),h(r,()=>n.title),h(i,()=>n.description),h(t,g(l,{get when(){return n.children},get children(){var e=N();return h(e,()=>n.children),e}}),null),h(e,g(l,{get when(){return n.dismissible},get children(){return g(T,{get class(){return D(`absolute top-1 right-1 text-text-muted`,n.class)},onClick:()=>{u(),n.onDismiss?.()},size:`icon`,variant:`ghost`,get children(){return g(x,{})}})}}),null),f(()=>d(e,D(`relative flex w-full min-w-80 flex-row gap-4 rounded-r-default border-current border-l-2 p-4 text-text-secondary`,p[n.variant],n.class))),e}})}})}})},L.Action=e=>{let t=I(),n=o(()=>{let e=t.variant();switch(e){case`default`:return`secondary`;default:return e}});return g(T,{get appearance(){return n()},get class(){return D(e.class)},onClick:()=>e.onClick?.(t.closeAlert),variant:`outline`,get children(){return e.children}})};try{L.displayName=`Alert`,L.__docgenInfo={description:``,displayName:`Alert`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Alert/Alert.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`onOpenChange`,required:!1,tags:{},type:{name:`((value: boolean) => void) | undefined`}},onDismiss:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`onDismiss`,required:!1,tags:{},type:{name:`(() => void) | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`AlertVariant | undefined`,value:[{value:`undefined`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`},{value:`"default"`}]}},title:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`title`,required:!0,tags:{},type:{name:`string`}},description:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`description`,required:!1,tags:{},type:{name:`string | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},dismissible:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`dismissible`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{L.Action.displayName=`Alert.Action`,L.Action.__docgenInfo={description:``,displayName:`Alert.Action`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Alert/Alert.tsx`,methods:[],props:{onClick:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`onClick`,required:!1,tags:{},type:{name:`((closeAlert: () => void) => void) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Alert/Alert.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),z,B,V,H,U,W,G,K,q,J;e((()=>{p(),a(),w(),O(),R(),z=m(`<div class="flex size-96 flex-col gap-2">`),B={title:`Ui/Alert`,component:L,parameters:{layout:`centered`}},V={render:()=>g(L,{description:`Alert Description`,title:`Alert Title`,variant:`default`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},H={render:()=>g(L,{description:`Alert Description`,title:`Alert Title`,variant:`success`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},U={render:()=>g(L,{description:`Alert Description`,title:`Alert Title`,variant:`warning`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},W={render:()=>g(L,{description:`Alert Description`,title:`Alert Title`,variant:`danger`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},G={render:()=>g(L,{description:`Alert Description`,title:`Alert Title`,variant:`info`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},K={render:()=>g(L,{description:`Alert Description`,dismissible:!1,title:`Alert Title`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}})},q={render:()=>{let[e,n]=t(!1);return(()=>{var t=z();return h(t,g(T,{class:`justify-center`,onClick:()=>n(e=>!e),get children(){return[u(()=>e()?`Close`:`Open`),` Alert`]}}),null),h(t,g(L,{description:`Alert Description`,onOpenChange:n,get open(){return e()},title:`Alert Title`,get children(){return g(L.Action,{onClick:e=>e(),get children(){return[g(y,{}),` Show more`]}})}}),null),t})()}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='default'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='success'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='warning'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='danger'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' title='Alert Title' variant='info'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Alert description='Alert Description' dismissible={false} title='Alert Title'>\r
                <Alert.Action onClick={closeAlert => closeAlert()}>\r
                    <IconEditShow /> Show more\r
                </Alert.Action>\r
            </Alert>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);
    return <div class='flex size-96 flex-col gap-2'>\r
                <Button class='justify-center' onClick={() => setIsOpen(prev => !prev)}>\r
                    {isOpen() ? 'Close' : 'Open'} Alert\r
                </Button>\r
                <Alert description='Alert Description' onOpenChange={setIsOpen} open={isOpen()} title='Alert Title'>\r
                    <Alert.Action onClick={closeAlert => closeAlert()}>\r
                        <IconEditShow /> Show more\r
                    </Alert.Action>\r
                </Alert>\r
            </div>;
  }
}`,...q.parameters?.docs?.source}}},J=[`Default`,`Success`,`Warning`,`Danger`,`Info`,`NotDismissible`,`ExternalTrigger`]}))();export{W as Danger,V as Default,q as ExternalTrigger,G as Info,K as NotDismissible,H as Success,U as Warning,J as __namedExportsOrder,B as default};