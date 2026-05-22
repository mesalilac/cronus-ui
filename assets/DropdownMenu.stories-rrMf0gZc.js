import{n as e}from"./chunk-BneVvdWh.js";import{A as t,D as n,I as r,N as i,P as a,i as o,k as s,m as c,o as l,p as u,s as d,w as f}from"./web-BVRQcnZI.js";import{t as p}from"./Button-D7ZefyVV.js";import{i as m,r as h}from"./utils-C1J4YlMN.js";import{t as g}from"./Button-BZz8-4tt.js";import{n as _,t as v}from"./gsap-BCio8Dq3.js";import{_ as y,a as b,c as x,d as S,f as C,g as w,h as T,i as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F,v as I}from"./Menu-Cp2SAqkl.js";import{n as L,r as R,t as z}from"./Popover-BsKXwPGd.js";var B,V,H=e((()=>{l(),_(),i(),y(),z(),m(),B=u(`<div>`),V=e=>{let t=I(),i=a({placement:`bottom-start`,placementFallback:[`top-start`,`bottom-start`,`right-start`,`left-start`]},e),l;n(()=>{if(t.isOpen()&&l){let e=v.context(()=>{v.from(l,{autoAlpha:0,duration:.2,scale:.98,ease:`power3.out`})});r(()=>e.revert())}});let u=()=>{if(i.placement.startsWith(`top`)||i.placement.startsWith(`bottom`))return h(`my-1`);if(i.placement.startsWith(`right`)||i.placement.startsWith(`left`))return h(`mx-1`)};return f(R,{get onOpenChange(){return t.setIsOpen},get open(){return t.isOpen()},positionTryFallbacks:()=>i.placementFallback.map(e=>L[e]),targetPosition:`fixed`,get targetPositionArea(){return L[i.placement]},get triggerElement(){return t.triggerRef()},get children(){var e=B(),t=l;return typeof t==`function`?c(t,e):l=e,d(e,()=>i.children),s(()=>o(e,h(`max-h-[85vh] min-w-30 overflow-y-auto rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default`,u(),i.class))),e}})};try{V.displayName=`Content`,V.__docgenInfo={description:``,displayName:`Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/DropdownMenu/Content.tsx`,methods:[],props:{placement:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/DropdownMenu/Content.tsx`,name:`TypeLiteral`}],description:``,name:`placement`,required:!1,tags:{},type:{name:`enum`,raw:`CommonPositionArea | undefined`,value:[{value:`undefined`},{value:`"top"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"right"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"bottom"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"left"`},{value:`"left-start"`},{value:`"left-end"`}]}},placementFallback:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/DropdownMenu/Content.tsx`,name:`TypeLiteral`}],description:``,name:`placementFallback`,required:!1,tags:{},type:{name:`CommonPositionArea[] | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/DropdownMenu/Content.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),U,W=e((()=>{l(),g(),y(),m(),U=e=>{let t=I();return f(p,a({get"aria-expanded"(){return t.isOpen()},"aria-haspopup":`listbox`,get class(){return h(`px-3 capitalize`,e.class)},get disabled(){return t.disabled()},ref(e){var n=t.setTriggerRef;typeof n==`function`?n(e):t.setTriggerRef=e},role:`combobox`},e))};try{U.displayName=`Trigger`,U.__docgenInfo={description:``,displayName:`Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/DropdownMenu/Trigger.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/DropdownMenu/Trigger.tsx`,name:`DropdownMenuTriggerProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/DropdownMenu/Trigger.tsx`,name:`DropdownMenuTriggerProps`},required:!1,tags:{},type:{name:`string | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonVariant | undefined`,value:[{value:`undefined`},{value:`"link"`},{value:`"solid"`},{value:`"soft"`},{value:`"outline"`},{value:`"ghost"`},{value:`"transparent"`}]}},appearance:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`appearance`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonAppearance | undefined`,value:[{value:`undefined`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`}]}}},tags:{}}}catch{}})),G,K=e((()=>{l(),H(),W(),P(),w(),O(),C(),F(),N(),A(),M(),G=(e=>f(k,e)),G.Trigger=U,G.Content=V,G.Item=T,G.ItemSwitch=S,G.ItemCheckbox=j,G.Label=D,G.Separator=b,G.Sub=E,G.RadioGroup=x;try{G.displayName=`DropdownMenu`,G.__docgenInfo={description:``,displayName:`DropdownMenu`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),q,J,Y,X,Z;e((()=>{l(),i(),K(),q={title:`Ui/DropdownMenu`,component:G,parameters:{layout:`centered`}},J={render:()=>{let[e,n]=t(`option-1`),[r,i]=t(!1);return f(G,{get children(){return[f(G.Trigger,{children:`Menu`}),f(G.Content,{get children(){return[f(G.ItemCheckbox,{get checked(){return r()},onChange:i,children:`Item`}),f(G.ItemSwitch,{get checked(){return r()},onChange:i,children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Separator,{}),f(G.Label,{children:`Label`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.RadioGroup,{onChange:n,get value(){return e()},get children(){return[f(G.RadioGroup.Item,{value:`option-1`,children:`Option 1`}),f(G.RadioGroup.Item,{value:`option-2`,children:`Option 2`}),f(G.RadioGroup.Item,{value:`option-3`,children:`Option 3`})]}})]}})]}})}},Y={render:()=>f(G,{get children(){return[f(G.Trigger,{children:`Menu`}),f(G.Content,{get children(){return[f(G.Item,{children:`Item`}),f(G.Separator,{}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Sub,{get children(){return[f(G.Sub.Trigger,{children:`Sub menu`}),f(G.Sub.Content,{get children(){return[f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`})]}})]}})]}})]}})},X={render:()=>f(G,{get children(){return[f(G.Trigger,{children:`Menu`}),f(G.Content,{get children(){return[f(G.Item,{children:`Item`}),f(G.Separator,{}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Sub,{get children(){return[f(G.Sub.Trigger,{children:`Sub menu`}),f(G.Sub.Content,{get children(){return[f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Sub,{get children(){return[f(G.Sub.Trigger,{children:`Sub menu`}),f(G.Sub.Content,{get children(){return[f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`}),f(G.Item,{children:`Item`})]}})]}})]}})]}})]}})]}})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    const [checked, setChecked] = createSignal(false);
    return <DropdownMenu>\r
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>\r
                <DropdownMenu.Content>\r
                    <DropdownMenu.ItemCheckbox checked={checked()} onChange={setChecked}>\r
                        Item\r
                    </DropdownMenu.ItemCheckbox>\r
                    <DropdownMenu.ItemSwitch checked={checked()} onChange={setChecked}>\r
                        Item\r
                    </DropdownMenu.ItemSwitch>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Separator />\r
                    <DropdownMenu.Label>Label</DropdownMenu.Label>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.RadioGroup onChange={setValue} value={value()}>\r
                        <DropdownMenu.RadioGroup.Item value='option-1'>\r
                            Option 1\r
                        </DropdownMenu.RadioGroup.Item>\r
                        <DropdownMenu.RadioGroup.Item value='option-2'>\r
                            Option 2\r
                        </DropdownMenu.RadioGroup.Item>\r
                        <DropdownMenu.RadioGroup.Item value='option-3'>\r
                            Option 3\r
                        </DropdownMenu.RadioGroup.Item>\r
                    </DropdownMenu.RadioGroup>\r
                </DropdownMenu.Content>\r
            </DropdownMenu>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>\r
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>\r
                <DropdownMenu.Content>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Separator />\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Sub>\r
                        <DropdownMenu.Sub.Trigger>\r
                            Sub menu\r
                        </DropdownMenu.Sub.Trigger>\r
                        <DropdownMenu.Sub.Content>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                        </DropdownMenu.Sub.Content>\r
                    </DropdownMenu.Sub>\r
                </DropdownMenu.Content>\r
            </DropdownMenu>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <DropdownMenu>\r
                <DropdownMenu.Trigger>Menu</DropdownMenu.Trigger>\r
                <DropdownMenu.Content>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Separator />\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                    <DropdownMenu.Sub>\r
                        <DropdownMenu.Sub.Trigger>\r
                            Sub menu\r
                        </DropdownMenu.Sub.Trigger>\r
                        <DropdownMenu.Sub.Content>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                            <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                            <DropdownMenu.Sub>\r
                                <DropdownMenu.Sub.Trigger>\r
                                    Sub menu\r
                                </DropdownMenu.Sub.Trigger>\r
                                <DropdownMenu.Sub.Content>\r
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                                    <DropdownMenu.Item>Item</DropdownMenu.Item>\r
                                </DropdownMenu.Sub.Content>\r
                            </DropdownMenu.Sub>\r
                        </DropdownMenu.Sub.Content>\r
                    </DropdownMenu.Sub>\r
                </DropdownMenu.Content>\r
            </DropdownMenu>;
  }
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`SubMenu`,`NestedSubMenu`]}))();export{J as Default,X as NestedSubMenu,Y as SubMenu,Z as __namedExportsOrder,q as default};