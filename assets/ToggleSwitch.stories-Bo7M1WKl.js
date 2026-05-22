import{n as e}from"./chunk-BneVvdWh.js";import{A as t,N as n,o as r,w as i}from"./web-BVRQcnZI.js";import{n as a,t as o}from"./ToggleSwitch-Cw-ePpZA.js";var s,c,l,u,d,f;e((()=>{r(),n(),a(),s={title:`Ui/ToggleSwitch`,component:o,parameters:{layout:`centered`}},c={render:()=>{let[e,n]=t(!1);return i(o,{get checked(){return e()},onChange:n})}},l={render:()=>{let[e,n]=t(!1);return i(o,{get checked(){return e()},label:`Label`,onChange:n})}},u={render:()=>{let[e,n]=t(!1);return i(o,{get checked(){return e()},helper:`Helper Text`,label:`Label`,onChange:n})}},d={render:()=>{let[e,n]=t(!1);return i(o,{get checked(){return e()},disabled:!0,helper:`Helper Text`,label:`Label`,onChange:n})}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = createSignal(false);
    return <ToggleSwitch checked={checked()} onChange={setChecked} />;
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = createSignal(false);
    return <ToggleSwitch checked={checked()} label='Label' onChange={setChecked} />;
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = createSignal(false);
    return <ToggleSwitch checked={checked()} helper='Helper Text' label='Label' onChange={setChecked} />;
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = createSignal(false);
    return <ToggleSwitch checked={checked()} disabled helper='Helper Text' label='Label' onChange={setChecked} />;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithLabel`,`WithHelperText`,`Disabled`]}))();export{c as Default,d as Disabled,u as WithHelperText,l as WithLabel,f as __namedExportsOrder,s as default};