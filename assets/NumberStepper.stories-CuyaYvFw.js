import{n as e}from"./chunk-BneVvdWh.js";import{A as t,C as n,D as r,E as i,M as a,O as o,a as s,b as c,f as l,i as u,k as d,l as f,o as p,r as m,v as h,y as g}from"./web-C_www37z.js";import{t as _}from"./IconEditAddPlus-CYd3IEaR.js";import{t as v}from"./IconEditRemoveMinus-BExXNq7H.js";import{t as y}from"./icons-_5EPuHlL.js";import{n as b,r as x}from"./utils-B5zP-D2T.js";import{t as S}from"./Button-C34HWM-0.js";import{t as C}from"./Button-DEhmje5r.js";import{t as w}from"./HelperText-C3MuP2U6.js";import{t as T}from"./HelperText-CpiepTQs.js";import{t as E}from"./FieldLabel-BHxlGmBC.js";import{t as D}from"./FieldLabel-BsxVQXdg.js";var O,k,A=e((()=>{s(),a(),y(),C(),D(),T(),x(),O=l(`<div class="flex flex-col gap-2"><div><input data-slot=number-input inputmode=numeric pattern=^[0-9]+(\\.[0-9]+)?$ step=any type=number>`),k=e=>{let a=t(),[s,l]=d(e.value.toString()),[u,y]=d(!1),x=r(()=>{let t=e.validate?.(Number(s()),u());return e.required&&(s()===``||e.value===void 0)?`This field is required`:t});i(()=>{l(e.value.toString())});let C=t=>{y(!0),e.onChange(t),l(t.toString())},T=t=>{if(!Number.isNaN(t))return e.min!==void 0&&t<e.min&&(t=e.min),e.max!==void 0&&t>e.max&&(t=e.max),t},D=()=>Math.abs(e.step??1)||1,k=()=>{let t=T(e.value+D());t!==void 0&&C(t)},A=()=>{let t=T(e.value-D());t!==void 0&&C(t)},j=e=>{e.key===`ArrowUp`&&(e.preventDefault(),k()),e.key===`ArrowDown`&&(e.preventDefault(),A())};return(()=>{var t=O(),r=t.firstChild,i=r.firstChild;return p(t,n(g,{get when(){return e.label},children:t=>n(E,{id:a,get label(){return t()},get required(){return e.required}})}),r),p(r,n(S,{class:`disabled:bg-transparent`,"data-slot":`decrement-button`,get disabled(){return e.disabled||e.min===e.value},onClick:A,variant:`icon`,get children(){return n(v,{size:`1.5rem`})}}),i),i.$$keydown=j,i.addEventListener(`change`,e=>{let t=e.currentTarget.value.trim();l(t);let n=T(Number(t));n!==void 0&&(C(n),l(n.toString()))}),f(i,`id`,a),p(r,n(S,{class:`disabled:bg-transparent`,"data-slot":`increment-button`,get disabled(){return e.disabled||e.max===e.value},onClick:k,variant:`icon`,get children(){return n(_,{size:`1.5rem`})}}),null),p(t,n(c,{get children(){return[n(h,{get when(){return x()},get children(){return n(w,{variant:`danger`,get children(){return x()}})}}),n(h,{get when(){return e.helperText},get children(){return n(w,{get children(){return e.helperText}})}})]}}),null),o(t=>{var n=b(`flex items-center gap-1 rounded-default bg-surface-3/30 p-1 focus-within:ring-2 focus-within:ring-accent has-invalid:ring-2 has-invalid:ring-danger`,e.class),a=b(`min-w-24 max-w-24 border-border/30 border-x text-center caret-accent outline-none [appearance:textfield] focus:outline-none disabled:opacity-50 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`),o=e.disabled,s=e.max,c=e.min;return n!==t.e&&m(r,t.e=n),a!==t.t&&m(i,t.t=a),o!==t.a&&(i.disabled=t.a=o),s!==t.o&&f(i,`max`,t.o=s),c!==t.i&&f(i,`min`,t.i=c),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),o(()=>i.value=s()),t})()},u([`keydown`]);try{k.displayName=`NumberStepper`,k.__docgenInfo={description:``,displayName:`NumberStepper`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: number) => void`}},min:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`min`,required:!1,tags:{},type:{name:`number | undefined`}},max:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{},type:{name:`number | undefined`}},step:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`step`,required:!1,tags:{},type:{name:`number | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`Element`}},required:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`required`,required:!1,tags:{},type:{name:`boolean | undefined`}},helperText:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`helperText`,required:!1,tags:{},type:{name:`Element`}},validate:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`validate`,required:!1,tags:{},type:{name:`((value: number, isDirty: boolean) => string | undefined) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/NumberStepper/NumberStepper.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),j,M,N,P,F,I,L,R,z;e((()=>{s(),a(),A(),j={title:`Ui/NumberStepper`,component:k,parameters:{layout:`centered`}},M={render:()=>{let[e,t]=d(0);return n(k,{onChange:t,get value(){return e()}})}},N={args:{step:5},render:e=>{let[t,r]=d(0);return n(k,{onChange:r,get step(){return e.step},get value(){return t()}})}},P={args:{max:10,min:0},render:e=>{let[t,r]=d(0);return n(k,{get max(){return e.max},get min(){return e.min},onChange:r,get value(){return t()}})}},F={args:{label:`Label`},render:e=>{let[t,r]=d(0);return n(k,{get label(){return e.label},onChange:r,get value(){return t()}})}},I={args:{label:`Label`,required:!0},render:e=>{let[t,r]=d(0);return n(k,{get label(){return e.label},onChange:r,get required(){return e.required},get value(){return t()}})}},L={args:{helperText:`Helper text`},render:e=>{let[t,r]=d(0);return n(k,{get helperText(){return e.helperText},onChange:r,get value(){return t()}})}},R={render:()=>{let[e,t]=d(0);return n(k,{onChange:t,validate:e=>{if(e<10)return`Must be at least 10`},get value(){return e()}})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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