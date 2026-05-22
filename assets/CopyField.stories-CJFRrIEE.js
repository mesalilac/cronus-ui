import{n as e}from"./chunk-BneVvdWh.js";import{B as t,E as n,N as r,P as i,R as a,b as o,i as s,k as c,o as l,p as u,s as d,w as f}from"./web-BVRQcnZI.js";import{i as p,r as m}from"./utils-C1J4YlMN.js";import{n as h,t as g}from"./CopyButton-D8HFSxBz.js";import{t as _}from"./Input-CVai8KKR.js";import{t as v}from"./Input-msnBHPIj.js";import{n as y,t as b}from"./Textarea-CA_o16xM.js";var x=e((()=>{h()})),S=e((()=>{y()})),C,w,T,E,D,O,k=e((()=>{l(),r(),x(),v(),S(),p(),C=u(`<div>`),w=n(),T=()=>{let e=t(w);if(!e)throw Error(`useCopyFieldContext must be used within the CopyFieldContext provider`);return e},E=e=>{let t=i({multiline:!1,readOnly:!0},e);return(()=>{var e=C();return d(e,f(w.Provider,{value:{value:()=>t.value,multiline:()=>t.multiline,readOnly:()=>t.readOnly},get children(){return t.children}})),c(()=>s(e,m(`flex gap-1`,t.multiline&&`flex-col`,t.class))),e})()},D=e=>{let t=T();return f(o,{get fallback(){return f(_,{get class(){return e.class},get readOnly(){return t.readOnly()},get value(){return t.value()??``}})},get when(){return t.multiline()},get children(){return f(b,{get class(){return e.class},get readOnly(){return t.readOnly()},get value(){return t.value()??``}})}})},O=e=>{let[t,n]=a(e,[`value`,`compact`]),r=T();return f(g,i({get compact(){return t.compact??!r.multiline()},get value(){return t.value??r.value()}},n))},E.Input=D,E.CopyButton=O;try{E.displayName=`CopyField`,E.__docgenInfo={description:``,displayName:`CopyField`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/CopyField/CopyField.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/CopyField/CopyField.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},multiline:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/CopyField/CopyField.tsx`,name:`TypeLiteral`}],description:``,name:`multiline`,required:!1,tags:{},type:{name:`boolean | undefined`}},readOnly:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/CopyField/CopyField.tsx`,name:`TypeLiteral`}],description:``,name:`readOnly`,required:!1,tags:{},type:{name:`boolean | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/CopyField/CopyField.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),A,j,M,N,P,F,I;e((()=>{l(),p(),k(),A=u(`<div>`),j={title:`Ui/CopyField`,component:E,parameters:{layout:`centered`}},M=e=>(()=>{var t=A();return d(t,()=>e.children),c(()=>s(t,m(`size-124 rounded-default bg-surface-1 p-2 outline outline-border`,e.class))),t})(),N={render:()=>f(E,{value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,get children(){return[f(E.Input,{}),f(E.CopyButton,{})]}})},P={render:()=>f(M,{get children(){return f(E,{multiline:!0,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
sagittis, ipsum in tristique accumsan, erat sem bibendum justo, vel
dictum arcu mi sit amet ex. Ut quis auctor massa, et porta felis
Duis ut sapien lectus. Sed elementum
congue molestie. Donec aliquam
eros vel consectetur efficitur. Etiam commodo blandit neque, a
fringilla magna tincidunt quis. Nulla sit amet odio sagittis,
blandit nunc vel, scelerisque nulla. Nulla facilisis finibus
pretium. Nulla in nunc justo. Duis interdum pulvinar sem eu
fermentum. Donec dictum a massa eu iaculis. Sed sagittis velit a
nunc ultrices, eget tempus est tincidunt. Aenean interdum tellus ut
feugiat porttitor. Phasellus interdum consectetur elit eu dapibus.`,get children(){return[f(E.Input,{}),f(E.CopyButton,{})]}})}})},F={render:()=>f(E,{readOnly:!1,value:`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,get children(){return[f(E.Input,{}),f(E.CopyButton,{})]}})},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return <CopyField value={value}>\r
                <CopyField.Input />\r
                <CopyField.CopyButton />\r
            </CopyField>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed\\nsagittis, ipsum in tristique accumsan, erat sem bibendum justo, vel\\ndictum arcu mi sit amet ex. Ut quis auctor massa, et porta felis\\nDuis ut sapien lectus. Sed elementum\\ncongue molestie. Donec aliquam\\neros vel consectetur efficitur. Etiam commodo blandit neque, a\\nfringilla magna tincidunt quis. Nulla sit amet odio sagittis,\\nblandit nunc vel, scelerisque nulla. Nulla facilisis finibus\\npretium. Nulla in nunc justo. Duis interdum pulvinar sem eu\\nfermentum. Donec dictum a massa eu iaculis. Sed sagittis velit a\\nnunc ultrices, eget tempus est tincidunt. Aenean interdum tellus ut\\nfeugiat porttitor. Phasellus interdum consectetur elit eu dapibus.';
    return <Wrapper>\r
                <CopyField multiline value={value}>\r
                    <CopyField.Input />\r
                    <CopyField.CopyButton />\r
                </CopyField>\r
            </Wrapper>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return <CopyField readOnly={false} value={value}>\r
                <CopyField.Input />\r
                <CopyField.CopyButton />\r
            </CopyField>;
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Multiline`,`Editable`]}))();export{N as Default,F as Editable,P as Multiline,I as __namedExportsOrder,j as default};