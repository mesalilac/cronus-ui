import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,E as r,N as i,O as a,i as o,k as s,o as c,p as l,s as u,w as d}from"./web-BVRQcnZI.js";import{t as f}from"./Button-D7ZefyVV.js";import{i as p,r as m}from"./utils-C1J4YlMN.js";import{t as h}from"./Button-BZz8-4tt.js";var g,_,v=e((()=>{i(),g=r(),_=()=>{let e=n(g);if(!e)throw Error(`useContext must be used within the correct context provider`);return e}})),y,b=e((()=>{c(),h(),p(),v(),y=e=>{let t=_(),n=()=>t.isSelected(e.value),r=()=>t.disabled()??e.disabled;return d(f,{appearance:`secondary`,get class(){return m(`rounded-none first:rounded-l-lg last:rounded-r-lg disabled:bg-transparent`,e.class)},get disabled(){return r()},onClick:()=>t.toggle(e.value),get variant(){return n()?`soft`:`ghost`},get children(){return e.children}})};try{y.displayName=`Item`,y.__docgenInfo={description:``,displayName:`Item`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ToggleGroup/Item.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),x,S,C=e((()=>{c(),i(),p(),v(),b(),x=l(`<div>`),S=e=>{let t=()=>a(()=>e.disabled),n=t=>e.type===`single`?e.value===t:e.value.includes(t)??!1,r=t=>{if(e.type===`single`){e.onChange(t);return}let n=e.value,r=n.includes(t)?n.filter(e=>e!==t):[...n,t];e.onChange(r)};return d(g.Provider,{get value(){return{isSelected:n,toggle:r,disabled:t()}},get children(){var t=x();return u(t,()=>e.children),s(()=>o(t,m(`flex flex-row divide-x-2 divide-border rounded-default outline outline-border`,e.class))),t}})},S.Item=y;try{S.displayName=`ToggleGroup`,S.__docgenInfo={description:``,displayName:`ToggleGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},type:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!0,tags:{},type:{name:`enum`,raw:`"multiple" | "single"`,value:[{value:`"multiple"`},{value:`"single"`}]}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})),w,T,E,D,O,k;e((()=>{c(),i(),C(),w={title:`Ui/ToggleGroup`,component:S,parameters:{layout:`centered`}},T={render:()=>{let[e,n]=t(``);return d(S,{onChange:n,type:`single`,get value(){return e()},get children(){return[d(S.Item,{value:`a`,children:`A`}),d(S.Item,{value:`b`,children:`B`}),d(S.Item,{value:`c`,children:`C`})]}})}},E={render:()=>{let[e,n]=t([]);return d(S,{onChange:n,type:`multiple`,get value(){return e()},get children(){return[d(S.Item,{value:`a`,children:`A`}),d(S.Item,{value:`b`,children:`B`}),d(S.Item,{value:`c`,children:`C`})]}})}},D={render:()=>{let[e,n]=t([]);return d(S,{onChange:n,type:`multiple`,get value(){return e()},get children(){return[d(S.Item,{value:`a`,children:`A`}),d(S.Item,{disabled:!0,value:`b`,children:`B`}),d(S.Item,{value:`c`,children:`C`})]}})}},O={render:()=>{let[e,n]=t([]);return d(S,{disabled:!0,onChange:n,type:`multiple`,get value(){return e()},get children(){return[d(S.Item,{value:`a`,children:`A`}),d(S.Item,{value:`b`,children:`B`}),d(S.Item,{value:`c`,children:`C`})]}})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <ToggleGroup onChange={setValue} type='single' value={value()}>\r
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>\r
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>\r
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>\r
            </ToggleGroup>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string[]>([]);
    return <ToggleGroup onChange={setValue} type='multiple' value={value()}>\r
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>\r
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>\r
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>\r
            </ToggleGroup>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string[]>([]);
    return <ToggleGroup onChange={setValue} type='multiple' value={value()}>\r
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>\r
                <ToggleGroup.Item disabled value='b'>\r
                    B\r
                </ToggleGroup.Item>\r
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>\r
            </ToggleGroup>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string[]>([]);
    return <ToggleGroup disabled onChange={setValue} type='multiple' value={value()}>\r
                <ToggleGroup.Item value='a'>A</ToggleGroup.Item>\r
                <ToggleGroup.Item value='b'>B</ToggleGroup.Item>\r
                <ToggleGroup.Item value='c'>C</ToggleGroup.Item>\r
            </ToggleGroup>;
  }
}`,...O.parameters?.docs?.source}}},k=[`Simple`,`Multiple`,`DisabledItem`,`Disabled`]}))();export{O as Disabled,D as DisabledItem,E as Multiple,T as Simple,k as __namedExportsOrder,w as default};