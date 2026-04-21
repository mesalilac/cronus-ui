import{n as e}from"./chunk-BneVvdWh.js";import{C as t,M as n,O as r,a as i,f as a,i as o,k as s,l as c,o as l,y as u}from"./web-C_www37z.js";var d,f,p=e((()=>{i(),n(),d=a(`<div class="flex flex-col gap-1"><input class=accent-accent data-slot=slider type=range>`),f=e=>(()=>{var n=d(),i=n.firstChild;return l(n,t(u,{get when(){return e.label},get children(){return e.label}}),i),i.$$input=t=>e.onInput?.(t.currentTarget.valueAsNumber),i.addEventListener(`change`,t=>e.onChange?.(t.currentTarget.valueAsNumber)),r(t=>{var n=e.disabled,r=e.id,a=e.list,o=e.max,s=e.min,l=e.step;return n!==t.e&&(i.disabled=t.e=n),r!==t.t&&c(i,`id`,t.t=r),a!==t.a&&c(i,`list`,t.a=a),o!==t.o&&c(i,`max`,t.o=o),s!==t.i&&c(i,`min`,t.i=s),l!==t.n&&c(i,`step`,t.n=l),t},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),r(()=>i.value=e.value),n})(),o([`input`]);try{f.displayName=`Slider`,f.__docgenInfo={description:``,displayName:`Slider`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Slider/Slider.tsx`,methods:[],props:{id:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`id`,required:!1,tags:{},type:{name:`string | undefined`}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`number`}},onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!1,tags:{},type:{name:`((value: number) => void) | undefined`}},onInput:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`onInput`,required:!1,tags:{},type:{name:`((value: number) => void) | undefined`}},min:{defaultValue:{value:`0`},declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`min`,required:!1,tags:{default:`0`},type:{name:`number | undefined`}},max:{defaultValue:{value:`100`},declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`max`,required:!1,tags:{default:`100`},type:{name:`number | undefined`}},step:{defaultValue:{value:`1`},declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`step`,required:!1,tags:{default:`1`},type:{name:`number | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},list:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`list`,required:!1,tags:{},type:{name:`string | undefined`}},label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!1,tags:{},type:{name:`Element`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Slider/Slider.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),m,h,g,_,v,y,b,x;e((()=>{i(),n(),p(),m=a(`<div class="flex justify-between"><span>Volume</span><span>%`),h=a(`<datalist id=markers><option value=0></option><option value=25></option><option value=50></option><option value=75></option><option value=100>`),g={title:`Ui/Slider`,component:f,parameters:{layout:`centered`}},_={render:()=>{let[e,n]=s(30);return t(f,{onInput:n,get value(){return e()}})}},v={render:()=>{let[e,n]=s(20);return t(f,{get label(){return(()=>{var t=m(),n=t.firstChild.nextSibling,r=n.firstChild;return l(n,e,r),t})()},onInput:n,get value(){return e()}})}},y={render:()=>{let[e,n]=s(20);return[t(f,{get label(){return(()=>{var t=m(),n=t.firstChild.nextSibling,r=n.firstChild;return l(n,e,r),t})()},list:`markers`,onInput:n,get value(){return e()}}),h()]}},b={render:()=>{let[e,n]=s(30);return t(f,{disabled:!0,onInput:n,get value(){return e()}})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    return <Slider label={<div class='flex justify-between'>\r
                        <span>Volume</span>\r
                        <span>{value()}%</span>\r
                    </div>} onInput={setValue} value={value()} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    return <>\r
                <Slider label={<div class='flex justify-between'>\r
                            <span>Volume</span>\r
                            <span>{value()}%</span>\r
                        </div>} list='markers' onInput={setValue} value={value()} />\r
                <datalist id='markers'>\r
                    <option value='0' />\r
                    <option value='25' />\r
                    <option value='50' />\r
                    <option value='75' />\r
                    <option value='100' />\r
                </datalist>\r
            </>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider disabled onInput={setValue} value={value()} />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`WithLabel`,`WithMarkers`,`Disabled`]}))();export{_ as Default,b as Disabled,v as WithLabel,y as WithMarkers,x as __namedExportsOrder,g as default};