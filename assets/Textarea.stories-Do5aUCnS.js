import{n as e}from"./chunk-BneVvdWh.js";import{A as t,N as n,o as r,w as i}from"./web-BVRQcnZI.js";import{n as a,t as o}from"./Textarea-CA_o16xM.js";var s,c,l,u,d,f,p;e((()=>{r(),n(),a(),s={title:`Ui/Textarea`,component:o,parameters:{layout:`centered`}},c={render:()=>{let[e,n]=t(``);return i(o,{onInput:n,get value(){return e()}})}},l={render:()=>{let[e,n]=t(``);return i(o,{label:`Label`,onInput:n,get value(){return e()}})}},u={render:()=>{let[e,n]=t(``);return i(o,{label:`Label`,onInput:n,required:!0,get value(){return e()}})}},d={render:()=>{let[e,n]=t(``);return i(o,{helper:`Helper Text`,onInput:n,get value(){return e()}})}},f={render:()=>{let[e,n]=t(``);return i(o,{onInput:n,validate:e=>{if(e.length<10)return`Must be at least 10 characters long`},get value(){return e()}})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <Textarea onInput={setValue} value={value()} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <Textarea label='Label' onInput={setValue} value={value()} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <Textarea label='Label' onInput={setValue} required value={value()} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <Textarea helper='Helper Text' onInput={setValue} value={value()} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('');
    return <Textarea onInput={setValue} validate={v => {
      if (v.length < 10) return 'Must be at least 10 characters long';
    }} value={value()} />;
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithLabel`,`WithLabelAndRequired`,`WithHelperText`,`WithError`]}))();export{c as Default,f as WithError,d as WithHelperText,l as WithLabel,u as WithLabelAndRequired,p as __namedExportsOrder,s as default};