import{n as e}from"./chunk-BneVvdWh.js";import{A as t,D as n,N as r,O as i,a,b as o,i as s,j as c,k as l,o as u,p as d,s as f,u as p,w as m,x as h,y as g}from"./web-BVRQcnZI.js";import{t as _}from"./IconEditAddPlus-Dqin1xvN.js";import{t as v}from"./IconEditRemoveMinus-COdSN_TN.js";import{t as y}from"./icons-DwK0ITIp.js";import{t as b}from"./Button-D7ZefyVV.js";import{i as x,r as S}from"./utils-C1J4YlMN.js";import{t as C}from"./Button-BZz8-4tt.js";import{t as w}from"./HelperText-0rFPGsIL.js";import{t as T}from"./HelperText-DNykxhTP.js";import{t as E}from"./FieldLabel-rFm6efx3.js";import{t as D}from"./FieldLabel-BCmKE-IU.js";var O,k,A=e((()=>{u(),r(),y(),C(),D(),T(),x(),O=d(`<div class="flex flex-col gap-2"><div><input data-slot=number-input inputmode=numeric pattern=^[0-9]+(\\.[0-9]+)?$ step=any type=number>`),k=e=>{let r=c(),[a,u]=t(e.value.toString()),[d,y]=t(!1),x=i(()=>{let t=e.validate?.(Number(a()),d());return e.required&&(a()===``||e.value===void 0)?`This field is required`:t});n(()=>{u(e.value.toString())});let C=t=>{y(!0),e.onChange(t),u(t.toString())},T=t=>{if(!Number.isNaN(t))return e.min!==void 0&&t<e.min&&(t=e.min),e.max!==void 0&&t>e.max&&(t=e.max),t},D=()=>Math.abs(e.step??1)||1,k=()=>{let t=T(e.value+D());t!==void 0&&C(t)},A=()=>{let t=T(e.value-D());t!==void 0&&C(t)},j=e=>{e.key===`ArrowUp`&&(e.preventDefault(),k()),e.key===`ArrowDown`&&(e.preventDefault(),A())};return(()=>{var t=O(),n=t.firstChild,i=n.firstChild;return f(t,m(o,{get when(){return e.label},children:t=>m(E,{id:r,get label(){return t()},get required(){return e.required}})}),n),f(n,m(b,{class:`disabled:bg-transparent`,"data-slot":`decrement-button`,get disabled(){return e.disabled||e.min===e.value},onClick:A,size:`icon`,variant:`ghost`,get children(){return m(v,{size:`1.5rem`})}}),i),i.$$keydown=j,i.addEventListener(`change`,e=>{let t=e.currentTarget.value.trim();u(t);let n=T(Number(t));n!==void 0&&(C(n),u(n.toString()))}),p(i,`id`,r),f(n,m(b,{class:`disabled:bg-transparent`,"data-slot":`increment-button`,get disabled(){return e.disabled||e.max===e.value},onClick:k,size:`icon`,variant:`ghost`,get children(){return m(_,{size:`1.5rem`})}}),null),f(t,m(h,{get children(){return[m(g,{get when(){return x()},get children(){return m(w,{variant:`danger`,get children(){return x()}})}}),m(g,{get when(){return e.helperText},get children(){return m(w,{get children(){return e.helperText}})}})]}}),null),l(t=>{var r=S(`flex items-center gap-1 rounded-default bg-surface-3/30 p-1 focus-within:ring-2 focus-within:ring-accent has-invalid:ring-2 has-invalid:ring-danger`,e.class),a=S(`min-w-24 max-w-24 border-border/30 border-x text-center caret-accent outline-none [appearance:textfield] focus:outline-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`),o=e.disabled,c=e.max,l=e.min;return r!==t.e&&s(n,t.e=r),a!==t.t&&s(i,t.t=a),o!==t.a&&(i.disabled=t.a=o),c!==t.o&&p(i,`max`,t.o=c),l!==t.i&&p(i,`min`,t.i=l),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l(()=>i.value=a()),t})()},a([`keydown`]);try{k.displayName=`NumberStepper`,k.__docgenInfo={description:``,displayName:`NumberStepper`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: number) => void`}},min:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`min`,required:!1,tags:{},type:{name:`number | undefined`}},max:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`number | undefined`}},step:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`step`,required:!1,tags:{},type:{name:`number | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`Element`}},required:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},helperText:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`helperText`,required:!1,tags:{},type:{name:`Element`}},validate:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`validate`,required:!1,tags:{},type:{name:`((value: number, isDirty: boolean) => string | undefined) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),j,M,N,P,F,I,L,R,z;e((()=>{u(),r(),A(),j={title:`Ui/NumberStepper`,component:k,parameters:{layout:`centered`}},M={render:()=>{let[e,n]=t(0);return m(k,{onChange:n,get value(){return e()}})}},N={args:{step:5},render:e=>{let[n,r]=t(0);return m(k,{onChange:r,get step(){return e.step},get value(){return n()}})}},P={args:{max:10,min:0},render:e=>{let[n,r]=t(0);return m(k,{get max(){return e.max},get min(){return e.min},onChange:r,get value(){return n()}})}},F={args:{label:`Label`},render:e=>{let[n,r]=t(0);return m(k,{get label(){return e.label},onChange:r,get value(){return n()}})}},I={args:{label:`Label`,required:!0},render:e=>{let[n,r]=t(0);return m(k,{get label(){return e.label},onChange:r,get required(){return e.required},get value(){return n()}})}},L={args:{helperText:`Helper text`},render:e=>{let[n,r]=t(0);return m(k,{get helperText(){return e.helperText},onChange:r,get value(){return n()}})}},R={render:()=>{let[e,n]=t(0);return m(k,{onChange:n,validate:e=>{if(e<10)return`Must be at least 10`},get value(){return e()}})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper onChange={setValue} value={value()} />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    step: 5
  },
  render: args => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper onChange={setValue} step={args.step} value={value()} />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    max: 10,
    min: 0
  },
  render: args => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper max={args.max} min={args.min} onChange={setValue} value={value()} />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label'
  },
  render: args => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper label={args.label} onChange={setValue} value={value()} />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    required: true
  },
  render: args => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper label={args.label} onChange={setValue} required={args.required} value={value()} />;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    helperText: 'Helper text'
  },
  render: args => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper helperText={args.helperText} onChange={setValue} value={value()} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(0);
    return <NumberStepper onChange={setValue} validate={v => {
      if (v < 10) return 'Must be at least 10';
    }} value={value()} />;
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`WithStep`,`WithRange`,`WithLabel`,`WithLabelAndRequired`,`WithHelperText`,`WithError`]}))();export{M as Default,R as WithError,L as WithHelperText,F as WithLabel,I as WithLabelAndRequired,P as WithRange,N as WithStep,z as __namedExportsOrder,j as default};