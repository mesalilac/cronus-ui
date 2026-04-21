import{n as e}from"./chunk-BneVvdWh.js";import{C as t,D as n,M as r,O as i,T as a,a as o,f as s,k as c,o as l,r as u,z as d}from"./web-C_www37z.js";import{n as f,r as p}from"./utils-B5zP-D2T.js";import{t as m}from"./Button-C34HWM-0.js";import{t as h}from"./Button-DEhmje5r.js";var g,_,v=e((()=>{r(),g=a(),_=()=>{let e=d(g);if(!e)throw Error(`useContext must be used within the correct context provider`);return e}})),y,b=e((()=>{o(),h(),p(),v(),y=e=>{let n=_(),r=()=>n.isSelected(e.value),i=()=>n.disabled()??e.disabled;return t(m,{get class(){return f(`rounded-none border-border-subtle first:rounded-l-lg last:rounded-r-lg disabled:bg-transparent`,e.class,r()&&`bg-accent/60`)},get disabled(){return i()},onClick:()=>n.toggle(e.value),variant:`outline`,get children(){return e.children}})};try{y.displayName=`Item`,y.__docgenInfo={description:``,displayName:`Item`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ToggleGroup/Item.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/Item.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),x,S,C=e((()=>{o(),r(),p(),v(),b(),x=s(`<div>`),S=e=>{let r=()=>n(()=>e.disabled),a=t=>e.type===`single`?e.value===t:e.value.includes(t)??!1,o=t=>{if(e.type===`single`){e.onChange(t);return}let n=e.value,r=n.includes(t)?n.filter(e=>e!==t):[...n,t];e.onChange(r)};return t(g.Provider,{get value(){return{isSelected:a,toggle:o,disabled:r()}},get children(){var t=x();return l(t,()=>e.children),i(()=>u(t,f(`flex flex-row`,e.class))),t}})},S.Item=y;try{S.displayName=`ToggleGroup`,S.__docgenInfo={description:``,displayName:`ToggleGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},type:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`type`,required:!0,tags:{},type:{name:`enum`,raw:`"single" | "multiple"`,value:[{value:`"single"`},{value:`"multiple"`}]}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string | string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`},{fileName:`cronus-ui/src/ui/ToggleGroup/ToggleGroup.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`((value: string) => void) | ((value: string[]) => void)`}}},tags:{}}}catch{}})),w,T,E,D,O,k;e((()=>{o(),r(),C(),w={title:`Ui/ToggleGroup`,component:S,parameters:{layout:`centered`}},T={render:()=>{let[e,n]=c(``);return t(S,{onChange:n,type:`single`,get value(){return e()},get children(){return[t(S.Item,{value:`a`,children:`A`}),t(S.Item,{value:`b`,children:`B`}),t(S.Item,{value:`c`,children:`C`})]}})}},E={render:()=>{let[e,n]=c([]);return t(S,{onChange:n,type:`multiple`,get value(){return e()},get children(){return[t(S.Item,{value:`a`,children:`A`}),t(S.Item,{value:`b`,children:`B`}),t(S.Item,{value:`c`,children:`C`})]}})}},D={render:()=>{let[e,n]=c([]);return t(S,{onChange:n,type:`multiple`,get value(){return e()},get children(){return[t(S.Item,{value:`a`,children:`A`}),t(S.Item,{disabled:!0,value:`b`,children:`B`}),t(S.Item,{value:`c`,children:`C`})]}})}},O={render:()=>{let[e,n]=c([]);return t(S,{disabled:!0,onChange:n,type:`multiple`,get value(){return e()},get children(){return[t(S.Item,{value:`a`,children:`A`}),t(S.Item,{value:`b`,children:`B`}),t(S.Item,{value:`c`,children:`C`})]}})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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