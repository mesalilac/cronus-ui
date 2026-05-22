import{n as e}from"./chunk-BneVvdWh.js";import{N as t,o as n,w as r,x as i,y as a}from"./web-BVRQcnZI.js";import{n as o,t as s}from"./CopyButton-D8HFSxBz.js";var c,l,u,d,f,p,m;e((()=>{n(),t(),o(),c={title:`Ui/CopyButton`,component:s,parameters:{layout:`centered`}},l={render:()=>r(s,{value:`copy button value`})},u={render:()=>r(s,{compact:!1,value:`copy button value`})},d={render:()=>r(s,{delayMs:4e3,value:`copy button value`})},f={render:()=>r(s,{appearance:e=>{switch(e()){case`normal`:return`primary`;case`copied`:return`primary`;case`failed`:return`danger`}},value:`copy button value`,variant:e=>{switch(e()){case`normal`:return`ghost`;case`copied`:return`soft`;case`failed`:return`outline`}}})},p={render:()=>r(s,{value:`copy button value`,children:e=>r(i,{get children(){return[r(a,{get when(){return e()===`normal`},children:`Copyme`}),r(a,{get when(){return e()===`copied`},children:`Copied`}),r(a,{get when(){return e()===`failed`},children:`Copy Failed`})]}})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CopyButton value='copy button value' />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CopyButton compact={false} value='copy button value' />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CopyButton delayMs={4000} value='copy button value' />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CopyButton appearance={state => {
      switch (state()) {
        case 'normal':
          return 'primary';
        case 'copied':
          return 'primary';
        case 'failed':
          return 'danger';
      }
    }} value='copy button value' variant={state => {
      switch (state()) {
        case 'normal':
          return 'ghost';
        case 'copied':
          return 'soft';
        case 'failed':
          return 'outline';
      }
    }} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <CopyButton value='copy button value'>\r
                {state => {
        return <Switch>\r
                            <Match when={state() === 'normal'}>Copyme</Match>\r
                            <Match when={state() === 'copied'}>Copied</Match>\r
                            <Match when={state() === 'failed'}>\r
                                Copy Failed\r
                            </Match>\r
                        </Switch>;
      }}\r
            </CopyButton>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NotCompact`,`CustomDelay`,`CustomStyles`,`CustomLabel`]}))();export{d as CustomDelay,p as CustomLabel,f as CustomStyles,l as Default,u as NotCompact,m as __namedExportsOrder,c as default};