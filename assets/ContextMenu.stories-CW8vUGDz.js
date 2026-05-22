import{n as e}from"./chunk-BneVvdWh.js";import{A as t,D as n,I as r,L as i,N as a,O as o,a as s,c,i as l,k as u,m as d,o as f,p,s as m,v as h,w as g}from"./web-BVRQcnZI.js";import{n as _,t as v}from"./gsap-BCio8Dq3.js";import{_ as y,a as b,c as x,d as S,f as C,g as w,h as T,i as E,l as D,m as O,n as k,o as A,p as j,r as M,s as N,t as P,u as F,v as I}from"./Menu-Cp2SAqkl.js";import{r as L,t as R}from"./Popover-BsKXwPGd.js";var z,B,V=e((()=>{f(),_(),a(),y(),R(),z=p(`<div class="mt-1 mb-1 max-h-[85vh] min-w-30 overflow-y-auto rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default">`),B=e=>{let a,s=I(),[c,l]=t({x:0,y:0});n(()=>{if(s.isOpen()&&a){let e=v.context(()=>{v.from(a,{autoAlpha:0,duration:.2,scale:.98,ease:`power3.out`})});r(()=>e.revert())}}),i(()=>{let t=new AbortController;s.triggerRef()?.addEventListener(`contextmenu`,t=>{if(s.disabled()||(s.isOpen()&&s.setIsOpen(!1),e.disableEventDelegation!==void 0&&t.target!==t.currentTarget))return;t.preventDefault(),t.stopPropagation();let{clientX:n,clientY:r}=t;l({x:n,y:r}),s.setIsOpen(!0)}),r(()=>{t.abort()})});let u=o(()=>{let e=c().x+2,t=c().y+2;return{top:()=>`${t}px`,left:()=>`${e}px`}});return g(L,{get onOpenChange(){return s.setIsOpen},get open(){return s.isOpen()},targetPosition:`fixed`,get targetPositionArea(){return u()},get triggerElement(){return s.triggerRef()},triggerEvents:``,get children(){var t=z(),n=a;return typeof n==`function`?d(n,t):a=t,m(t,()=>e.children),t}})};try{B.displayName=`Content`,B.__docgenInfo={description:``,displayName:`Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ContextMenu/Content.tsx`,methods:[],props:{disableEventDelegation:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ContextMenu/Content.tsx`,name:`TypeLiteral`}],description:``,name:`disableEventDelegation`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),H,U,W=e((()=>{f(),y(),H=p(`<div role=none>`),U=e=>{let t=I();return(()=>{var n=H(),r=t.setTriggerRef;return typeof r==`function`?d(r,n):t.setTriggerRef=n,n.$$click=()=>{t.isOpen()&&t.setIsOpen(!1)},m(n,()=>e.children),u(()=>l(n,e.class)),n})()},s([`click`]);try{U.displayName=`ContextMenuTrigger`,U.__docgenInfo={description:``,displayName:`ContextMenuTrigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ContextMenu/Trigger.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ContextMenu/Trigger.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),G,K=e((()=>{f(),V(),W(),P(),w(),O(),C(),F(),N(),A(),M(),G=(e=>g(k,e)),G.Trigger=U,G.Content=B,G.Item=T,G.ItemSwitch=S,G.ItemCheckbox=j,G.Label=D,G.Separator=b,G.Sub=E,G.RadioGroup=x;try{G.displayName=`ContextMenu`,G.__docgenInfo={description:``,displayName:`ContextMenu`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ContextMenu/ContextMenu.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}},defaultOpen:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`defaultOpen`,required:!1,tags:{},type:{name:`boolean | undefined`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`onOpenChange`,required:!1,tags:{},type:{name:`((open: boolean) => void) | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Menu/Menu.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),q,J,Y,X,Z,Q,$;e((()=>{f(),a(),K(),q=p(`<span>Card `),J={title:`Ui/ContextMenu`,component:G,parameters:{layout:`centered`}},Y={render:()=>{let[e,n]=t(`option-1`),[r,i]=t(!1);return g(G,{get children(){return[g(G.Trigger,{class:`flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent`,children:`Right click here`}),g(G.Content,{get children(){return[g(G.ItemCheckbox,{get checked(){return r()},onChange:i,children:`Item`}),g(G.ItemSwitch,{get checked(){return r()},onChange:i,children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Separator,{}),g(G.Label,{children:`Label`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.RadioGroup,{onChange:n,get value(){return e()},get children(){return[g(G.RadioGroup.Item,{value:`option-1`,children:`Option 1`}),g(G.RadioGroup.Item,{value:`option-2`,children:`Option 2`}),g(G.RadioGroup.Item,{value:`option-3`,children:`Option 3`})]}})]}})]}})}},X={render:()=>g(G,{get children(){return[g(G.Trigger,{class:`flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent`,children:`Right click here`}),g(G.Content,{get children(){return[g(G.Item,{children:`Item`}),g(G.Separator,{}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Sub,{get children(){return[g(G.Sub.Trigger,{children:`Sub menu`}),g(G.Sub.Content,{get children(){return[g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`})]}})]}})]}})]}})},Z={render:()=>g(G,{get children(){return[g(G.Trigger,{class:`flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent`,children:`Right click here`}),g(G.Content,{get children(){return[g(G.Item,{children:`Item`}),g(G.Separator,{}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Sub,{get children(){return[g(G.Sub.Trigger,{children:`Sub menu`}),g(G.Sub.Content,{get children(){return[g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Sub,{get children(){return[g(G.Sub.Trigger,{children:`Sub menu`}),g(G.Sub.Content,{get children(){return[g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`})]}})]}})]}})]}})]}})]}})},Q={render:()=>{let e=e=>g(G,{get children(){return[g(G.Trigger,{class:`rounded-default border border-accent/40 bg-accent/20 px-2 py-4`,get children(){var t=q();return t.firstChild,m(t,()=>e.num,null),t}}),g(G.Content,{disableEventDelegation:!0,get children(){return[g(G.Label,{get children(){return[`Card Menu `,c(()=>e.num)]}}),g(G.Separator,{}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`})]}})]}});return g(G,{get children(){return[g(G.Trigger,{class:`flex size-80 flex-col gap-2 overflow-y-auto rounded-default p-4 outline-dashed outline-2 outline-accent`,get children(){return g(h,{each:[1,2,3,4,5,6,7,8],children:t=>g(e,{num:t})})}}),g(G.Content,{disableEventDelegation:!0,get children(){return[g(G.Label,{children:`App Menu`}),g(G.Separator,{}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`}),g(G.Item,{children:`Item`})]}})]}})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    const [checked, setChecked] = createSignal(false);
    return <ContextMenu>\r
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>\r
                    Right click here\r
                </ContextMenu.Trigger>\r
                <ContextMenu.Content>\r
                    <ContextMenu.ItemCheckbox checked={checked()} onChange={setChecked}>\r
                        Item\r
                    </ContextMenu.ItemCheckbox>\r
                    <ContextMenu.ItemSwitch checked={checked()} onChange={setChecked}>\r
                        Item\r
                    </ContextMenu.ItemSwitch>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Separator />\r
                    <ContextMenu.Label>Label</ContextMenu.Label>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.RadioGroup onChange={setValue} value={value()}>\r
                        <ContextMenu.RadioGroup.Item value='option-1'>\r
                            Option 1\r
                        </ContextMenu.RadioGroup.Item>\r
                        <ContextMenu.RadioGroup.Item value='option-2'>\r
                            Option 2\r
                        </ContextMenu.RadioGroup.Item>\r
                        <ContextMenu.RadioGroup.Item value='option-3'>\r
                            Option 3\r
                        </ContextMenu.RadioGroup.Item>\r
                    </ContextMenu.RadioGroup>\r
                </ContextMenu.Content>\r
            </ContextMenu>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ContextMenu>\r
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>\r
                    Right click here\r
                </ContextMenu.Trigger>\r
                <ContextMenu.Content>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Separator />\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Sub>\r
                        <ContextMenu.Sub.Trigger>\r
                            Sub menu\r
                        </ContextMenu.Sub.Trigger>\r
                        <ContextMenu.Sub.Content>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                        </ContextMenu.Sub.Content>\r
                    </ContextMenu.Sub>\r
                </ContextMenu.Content>\r
            </ContextMenu>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <ContextMenu>\r
                <ContextMenu.Trigger class='flex size-80 items-center justify-center rounded-default outline-dashed outline-2 outline-accent'>\r
                    Right click here\r
                </ContextMenu.Trigger>\r
                <ContextMenu.Content>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Separator />\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Sub>\r
                        <ContextMenu.Sub.Trigger>\r
                            Sub menu\r
                        </ContextMenu.Sub.Trigger>\r
                        <ContextMenu.Sub.Content>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                            <ContextMenu.Item>Item</ContextMenu.Item>\r
                            <ContextMenu.Sub>\r
                                <ContextMenu.Sub.Trigger>\r
                                    Sub menu\r
                                </ContextMenu.Sub.Trigger>\r
                                <ContextMenu.Sub.Content>\r
                                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                                </ContextMenu.Sub.Content>\r
                            </ContextMenu.Sub>\r
                        </ContextMenu.Sub.Content>\r
                    </ContextMenu.Sub>\r
                </ContextMenu.Content>\r
            </ContextMenu>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const Card = (props: {
      num: number;
    }) => {
      return <ContextMenu>\r
                    <ContextMenu.Trigger class='rounded-default border border-accent/40 bg-accent/20 px-2 py-4'>\r
                        <span>Card {props.num}</span>\r
                    </ContextMenu.Trigger>\r
                    <ContextMenu.Content disableEventDelegation>\r
                        <ContextMenu.Label>\r
                            Card Menu {props.num}\r
                        </ContextMenu.Label>\r
                        <ContextMenu.Separator />\r
                        <ContextMenu.Item>Item</ContextMenu.Item>\r
                        <ContextMenu.Item>Item</ContextMenu.Item>\r
                        <ContextMenu.Item>Item</ContextMenu.Item>\r
                        <ContextMenu.Item>Item</ContextMenu.Item>\r
                    </ContextMenu.Content>\r
                </ContextMenu>;
    };
    return <ContextMenu>\r
                <ContextMenu.Trigger class='flex size-80 flex-col gap-2 overflow-y-auto rounded-default p-4 outline-dashed outline-2 outline-accent'>\r
                    <For each={[1, 2, 3, 4, 5, 6, 7, 8]}>\r
                        {num => <Card num={num} />}\r
                    </For>\r
                </ContextMenu.Trigger>\r
                <ContextMenu.Content disableEventDelegation>\r
                    <ContextMenu.Label>App Menu</ContextMenu.Label>\r
                    <ContextMenu.Separator />\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                    <ContextMenu.Item>Item</ContextMenu.Item>\r
                </ContextMenu.Content>\r
            </ContextMenu>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`SubMenu`,`NestedSubMenu`,`NestedMenus`]}))();export{Y as Default,Q as NestedMenus,Z as NestedSubMenu,X as SubMenu,$ as __namedExportsOrder,J as default};