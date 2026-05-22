import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,D as r,E as i,I as a,L as o,N as s,a as c,b as l,i as u,k as d,m as f,o as p,p as m,s as h,w as g}from"./web-BVRQcnZI.js";import{t as _}from"./Button-D7ZefyVV.js";import{i as v,r as y}from"./utils-C1J4YlMN.js";import{t as b}from"./Button-BZz8-4tt.js";var x,S,C,w,T,E,D,O,k=e((()=>{p(),s(),b(),v(),x=m(`<div>`),S=m(`<span class="cursor-pointer text-accent underline"role=none>`),C=i(),w=()=>{let e=n(C);if(!e)throw Error(`useShowMoreContext must be used within the ShowMoreContext provider`);return e},T=e=>{let[n,r]=t(e.defaultExpanded??!1),[i,a]=t(!1);return g(C.Provider,{value:{isExpanded:n,setIsExpanded:r,isOverflowing:i,setIsOverflowing:a},get children(){var t=x();return h(t,()=>e.children),d(()=>u(t,y(`flex flex-col gap-2`,e.class))),t}})},E=e=>{let t=w(),n,i,s=()=>{if(!n)return;let e=n.scrollHeight>n.clientHeight+1;t.setIsOverflowing(e)};return o(()=>{s(),i=new ResizeObserver(()=>{s()}),n&&i.observe(n)}),r(()=>{t.isExpanded(),queueMicrotask(s)}),a(()=>{i?.disconnect()}),(()=>{var r=x(),i=n;return typeof i==`function`?f(i,r):n=r,h(r,()=>e.children),d(()=>u(r,y(`overflow-hidden`,e.class,t.isExpanded()&&`max-h-none`))),r})()},D=e=>{let t=w();return g(l,{get fallback(){return e.children?.(t.isExpanded(),t.setIsExpanded)},get when(){return!e.children},get children(){return g(_,{get class(){return y(`justify-center`,e.class)},onClick:()=>t.setIsExpanded(e=>!e),get variant(){return t.isExpanded()?`outline`:`solid`},get children(){return g(l,{get fallback(){return`Show More`},get when(){return t.isExpanded()},children:`Show less`})}})}})},O=e=>{let t=w();return g(l,{get fallback(){return e.children?.(t.isExpanded(),t.setIsExpanded)},get when(){return!e.children},get children(){var e=S();return e.$$click=()=>t.setIsExpanded(e=>!e),h(e,g(l,{get fallback(){return`Read More`},get when(){return t.isExpanded()},children:`Read Less`})),e}})},T.Trigger=D,T.ReadMore=O,T.Content=E,c([`click`]);try{T.displayName=`ShowMore`,T.__docgenInfo={description:``,displayName:`ShowMore`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ShowMore/ShowMore.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ShowMore/ShowMore.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},defaultExpanded:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ShowMore/ShowMore.tsx`,name:`TypeLiteral`}],description:``,name:`defaultExpanded`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{T.Trigger.displayName=`ShowMore.Trigger`,T.Trigger.__docgenInfo={description:``,displayName:`ShowMore.Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ShowMore/ShowMore.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ShowMore/ShowMore.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{T.ReadMore.displayName=`ShowMore.ReadMore`,T.ReadMore.__docgenInfo={description:`Custom Trigger for text`,displayName:`ShowMore.ReadMore`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ShowMore/ShowMore.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ShowMore/ShowMore.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),A,j,M,N,P,F,I,L;e((()=>{p(),s(),b(),k(),A=m(`<div class="flex size-96 flex-col gap-2 overflow-y-auto p-2"><h1 class="font-semibold text-xl">Message`),j={title:`Ui/ShowMore`,component:T,parameters:{layout:`centered`}},M=()=>`Amet adipisicing excepteur id fugiat aliquip ea dolore velit. Culpa sunt ad irure sint officia aliqua labore id deserunt ullamco. Minim irure nostrud sunt do culpa excepteur nulla nulla cupidatat. Dolor adipisicing tempor dolore nisi fugiat. Nostrud Lorem consequat in dolore. Cillum qui eu sint ipsum. Magna commodo nostrud culpa dolor Lorem aliqua culpa. Fugiat do nulla pariatur consequat veniam adipisicing mollit laborum sunt. Ipsum id ullamco tempor ad cillum exercitation tempor in mollit pariatur laborum mollit. Aute fugiat adipisicing consequat tempor exercitation ex sunt et cillum aute consectetur. Proident nulla ut do proident eiusmod dolore dolore. Esse dolore magna consequat sint tempor ipsum irure quis esse et tempor ut sint ullamco. Occaecat mollit sit veniam ipsum nulla non adipisicing enim dolor labore fugiat. Officia ullamco ad sit magna non est nisi id sint id exercitation reprehenderit reprehenderit. Excepteur est tempor laborum nostrud qui culpa qui dolore voluptate velit duis. Dolor incididunt magna dolor pariatur. Nostrud minim consequat officia tempor aliquip cillum officia. In velit officia et aute ex pariatur velit duis ipsum. Cupidatat consectetur minim commodo dolor mollit reprehenderit laboris. Occaecat eu ullamco ullamco magna. Deserunt aliquip nulla in nisi. Occaecat minim incididunt aliquip minim id eu adipisicing consectetur veniam quis. Eu cillum eu laborum irure eiusmod amet officia Lorem elit laboris nostrud amet. Quis labore do do amet esse voluptate. Nisi culpa ullamco nostrud pariatur excepteur adipisicing voluptate reprehenderit officia. Aliqua anim eu officia culpa exercitation dolore reprehenderit irure est occaecat minim laboris reprehenderit.`,N={render:()=>(()=>{var e=A();return e.firstChild,h(e,g(T,{get children(){return[g(T.Content,{class:`max-h-32 text-text-secondary`,get children(){return g(M,{})}}),g(T.Trigger,{})]}}),null),e})()},P={render:()=>(()=>{var e=A();return e.firstChild,h(e,g(T,{defaultExpanded:!0,get children(){return[g(T.Content,{class:`max-h-32 text-text-secondary`,get children(){return g(M,{})}}),g(T.Trigger,{})]}}),null),e})()},F={render:()=>(()=>{var e=A();return e.firstChild,h(e,g(T,{get children(){return[g(T.Content,{class:`max-h-32 text-text-secondary`,get children(){return g(M,{})}}),g(T.ReadMore,{})]}}),null),e})()},I={render:()=>(()=>{var e=A();return e.firstChild,h(e,g(T,{get children(){return[g(T.Content,{class:`max-h-32 text-text-secondary`,get children(){return g(M,{})}}),g(T.Trigger,{children:(e,t)=>g(_,{appearance:e?`secondary`:`primary`,onClick:()=>t(e=>!e),variant:e?`outline`:`solid`,get children(){return g(l,{get fallback(){return`Read More`},when:e,children:`Read Less`})}})})]}}),null),e})()},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>\r
                <h1 class='font-semibold text-xl'>Message</h1>\r
                <ShowMore>\r
                    <ShowMore.Content class='max-h-32 text-text-secondary'>\r
                        <LoremIpsum />\r
                    </ShowMore.Content>\r
                    <ShowMore.Trigger />\r
                </ShowMore>\r
            </div>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>\r
                <h1 class='font-semibold text-xl'>Message</h1>\r
                <ShowMore defaultExpanded>\r
                    <ShowMore.Content class='max-h-32 text-text-secondary'>\r
                        <LoremIpsum />\r
                    </ShowMore.Content>\r
                    <ShowMore.Trigger />\r
                </ShowMore>\r
            </div>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>\r
                <h1 class='font-semibold text-xl'>Message</h1>\r
                <ShowMore>\r
                    <ShowMore.Content class='max-h-32 text-text-secondary'>\r
                        <LoremIpsum />\r
                    </ShowMore.Content>\r
                    <ShowMore.ReadMore />\r
                </ShowMore>\r
            </div>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex size-96 flex-col gap-2 overflow-y-auto p-2'>\r
                <h1 class='font-semibold text-xl'>Message</h1>\r
                <ShowMore>\r
                    <ShowMore.Content class='max-h-32 text-text-secondary'>\r
                        <LoremIpsum />\r
                    </ShowMore.Content>\r
                    <ShowMore.Trigger>\r
                        {(isExpanded, setIsExpanded) => <Button appearance={isExpanded ? 'secondary' : 'primary'} onClick={() => setIsExpanded(prev => !prev)} variant={isExpanded ? 'outline' : 'solid'}>\r
                                <Show fallback={<>Read More</>} when={isExpanded}>\r
                                    Read Less\r
                                </Show>\r
                            </Button>}\r
                    </ShowMore.Trigger>\r
                </ShowMore>\r
            </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`ExpandedByDefault`,`ReadMoreTrigger`,`customTrigger`]}))();export{N as Default,P as ExpandedByDefault,F as ReadMoreTrigger,L as __namedExportsOrder,I as customTrigger,j as default};