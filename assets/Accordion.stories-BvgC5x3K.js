import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,D as r,E as i,N as a,i as o,j as s,k as c,o as l,p as u,s as d,w as f}from"./web-BVRQcnZI.js";import{i as p,r as m}from"./utils-C1J4YlMN.js";import{n as h,t as g}from"./Collapsible-BUYq7pdB.js";var _=e((()=>{h()})),v,y,b,x,S,C,w,T=e((()=>{l(),a(),_(),p(),v=u(`<div>`),y=i(),b=()=>{let e=n(y);if(!e)throw Error(`useAccordionContext must be used within the AccordionContext provider`);return e},x=e=>{let[n,r]=t(e.defaultValue??[]);return f(y.Provider,{value:{expandedItem:n,setExpandedItem:r,multiple:()=>e.multiple,disabled:()=>e.disabled},get children(){var t=v();return d(t,()=>e.children),c(()=>o(t,m(`flex flex-col`,e.class))),t}})},S=e=>{let n=b(),i=s(),a=()=>e.value??i,o=()=>n.expandedItem().includes(a()),[c,l]=t(!1);return r(()=>{o()?l(!0):l(!1)}),r(()=>{if(!c()&&o()){let e=n.expandedItem();n.setExpandedItem(e.filter(e=>e!==a()))}}),f(g,{get class(){return m(`[&+[data-slot=collapsible]]:rounded-t-none [&:has(+[data-slot=collapsible])]:rounded-b-none`,e.class)},get disabled(){return n.disabled()??e.disabled},onOpenChange:e=>{if(e){let e=n.expandedItem();n.setExpandedItem(o()?e.filter(e=>e!==a()):n.multiple()?[...e,a()]:[a()])}l(e)},get open(){return c()},get children(){return e.children}})},C=e=>f(g.Trigger,{get class(){return e.class},get children(){return e.children}}),w=e=>f(g.Content,{get class(){return e.class},get children(){return e.children}}),x.Item=S,x.Trigger=C,x.Content=w;try{x.displayName=`Accordion`,x.__docgenInfo={description:``,displayName:`Accordion`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Accordion/Accordion.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`defaultValue`,required:!1,tags:{},type:{name:`string[] | undefined`}},multiple:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`multiple`,required:!1,tags:{},type:{name:`boolean | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{x.Item.displayName=`Accordion.Item`,x.Item.__docgenInfo={description:``,displayName:`Accordion.Item`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Accordion/Accordion.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{x.Trigger.displayName=`Accordion.Trigger`,x.Trigger.__docgenInfo={description:``,displayName:`Accordion.Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Accordion/Accordion.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{x.Content.displayName=`Accordion.Content`,x.Content.__docgenInfo={description:``,displayName:`Accordion.Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Accordion/Accordion.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Accordion/Accordion.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),E,D,O,k,A,j,M;e((()=>{l(),T(),E=u(`<div class=size-96>`),D={title:`Ui/Accordion`,component:x,parameters:{layout:`centered`}},O=()=>`Id tempor labore tempor in nisi eiusmod laborum veniam enim consectetur cillum sunt eu. Cillum laborum ex irure amet aliquip labore id anim ex dolor magna occaecat amet dolore. Deserunt fugiat duis do nostrud nisi magna non exercitation ad culpa mollit enim labore in. Officia aliquip id non labore minim labore amet velit reprehenderit eu anim ad. Eu non eiusmod aliquip velit officia consequat sunt. Aute reprehenderit exercitation nulla excepteur non irure irure quis nostrud. Sunt eu ullamco eiusmod elit nisi consectetur consectetur cupidatat. Quis consequat laboris labore aliquip dolor velit adipisicing ea officia magna. Qui laboris consectetur voluptate nostrud deserunt voluptate. Quis deserunt ad aliquip incididunt non anim consectetur magna quis adipisicing officia. Eu minim magna sit esse consequat aliqua ut officia reprehenderit incididunt et tempor pariatur.`,k={render:()=>(()=>{var e=E();return d(e,f(x,{get children(){return[f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 1`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 2`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 3`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 4`}),f(x.Content,{get children(){return f(O,{})}})]}})]}})),e})()},A={render:()=>(()=>{var e=E();return d(e,f(x,{multiple:!0,get children(){return[f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 1`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 2`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 3`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 4`}),f(x.Content,{get children(){return f(O,{})}})]}})]}})),e})()},j={render:()=>(()=>{var e=E();return d(e,f(x,{disabled:!0,get children(){return[f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 1`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 2`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 3`}),f(x.Content,{get children(){return f(O,{})}})]}}),f(x.Item,{get children(){return[f(x.Trigger,{children:`Accordion 4`}),f(x.Content,{get children(){return f(O,{})}})]}})]}})),e})()},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Accordion>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                </Accordion>\r
            </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Accordion multiple>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                </Accordion>\r
            </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Accordion disabled>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 1</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 2</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 3</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                    <Accordion.Item>\r
                        <Accordion.Trigger>Accordion 4</Accordion.Trigger>\r
                        <Accordion.Content>\r
                            <PlaceholderContent />\r
                        </Accordion.Content>\r
                    </Accordion.Item>\r
                </Accordion>\r
            </div>;
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Multiple`,`Disabled`]}))();export{k as Default,j as Disabled,A as Multiple,M as __namedExportsOrder,D as default};