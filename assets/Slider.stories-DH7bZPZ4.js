import{n as e}from"./chunk-BneVvdWh.js";import{A as t,N as n,o as r,p as i,s as a,w as o,x as s,y as c}from"./web-BVRQcnZI.js";import{t as l}from"./IconMediaVolumeMax-B0l1upE9.js";import{t as u}from"./IconMediaVolumeMin-DLjnCUFU.js";import{t as d}from"./IconMediaVolumeOff-BN9nKIO8.js";import{t as f}from"./icons-DwK0ITIp.js";import{t as p}from"./Button-D7ZefyVV.js";import{t as m}from"./Button-BZz8-4tt.js";import{n as h,t as g}from"./Slider-DXQqGUw1.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{r(),n(),f(),m(),h(),_=i(`<div class="flex justify-between"><span>Volume</span><span>%`),v=i(`<span>Volume`),y=i(`<div class="flex gap-1"><span class="w-8 text-right text-sm tabular-nums">%`),b=i(`<div class="flex items-center gap-1"><span class="w-8 text-right text-sm tabular-nums">%`),x=i(`<datalist id=markers><option value=0></option><option value=25></option><option value=50></option><option value=75></option><option value=100>`),S={title:`Ui/Slider`,component:g,parameters:{layout:`centered`}},C={render:()=>{let[e,n]=t(30);return o(g,{onInput:n,get value(){return e()},get children(){return o(g.Input,{})}})}},w={render:()=>{let[e,n]=t(20);return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.Label,{get children(){var t=_(),n=t.firstChild.nextSibling,r=n.firstChild;return a(n,e,r),t}}),o(g.Input,{})]}})}},T={render:()=>{let[e,n]=t(20);return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.Label,{get children(){return v()}}),(()=>{var t=y(),n=t.firstChild,r=n.firstChild;return a(t,o(s,{get children(){return[o(c,{get when(){return e()===0},get children(){return o(d,{class:`size-5`})}}),o(c,{get when(){return e()>=80},get children(){return o(l,{class:`size-5`})}}),o(c,{get when(){return e()<80},get children(){return o(u,{class:`size-5`})}})]}}),n),a(t,o(g.Input,{class:`flex-1`}),n),a(n,e,r),t})()]}})}},E={render:()=>{let[e,n]=t(20),[r,i]=t(null),f=()=>{e()!==0&&i(e()),e()===0?n(r()??0):n(0)};return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.Label,{get children(){return v()}}),(()=>{var t=b(),n=t.firstChild,r=n.firstChild;return a(t,o(p,{onClick:f,size:`icon`,variant:`ghost`,get children(){return o(s,{get children(){return[o(c,{get when(){return e()===0},get children(){return o(d,{class:`size-5`})}}),o(c,{get when(){return e()>=80},get children(){return o(l,{class:`size-5`})}}),o(c,{get when(){return e()<80},get children(){return o(u,{class:`size-5`})}})]}})}}),n),a(t,o(g.Input,{class:`flex-1`}),n),a(n,e,r),t})()]}})}},D={render:()=>{let[e,n]=t(20);return[o(g,{list:`markers`,onInput:n,get value(){return e()},get children(){return[o(g.Label,{get children(){var t=_(),n=t.firstChild.nextSibling,r=n.firstChild;return a(n,e,r),t}}),o(g.Input,{})]}}),x()]}},O={render:()=>{let[e,n]=t(30);return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.ToolTip,{}),o(g.Input,{})]}})}},k={render:()=>{let[e,n]=t(30);return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.ToolTip,{placement:`bottom`}),o(g.Input,{})]}})}},A={render:()=>{let[e,n]=t(30);return o(g,{onInput:n,get value(){return e()},get children(){return[o(g.ToolTip,{children:e=>[`value: `,e]}),o(g.Input,{})]}})}},j={render:()=>{let[e,n]=t(30);return o(g,{onInput:n,get value(){return e()},get children(){return o(g.Input,{hideThumb:!0})}})}},M={render:()=>{let[e,n]=t(30);return o(g,{disabled:!0,onInput:n,get value(){return e()},get children(){return o(g.Input,{})}})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.Label>\r
                    <div class='flex justify-between'>\r
                        <span>Volume</span>\r
                        <span>{value()}%</span>\r
                    </div>\r
                </Slider.Label>\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.Label>\r
                    <span>Volume</span>\r
                </Slider.Label>\r
                <div class='flex gap-1'>\r
                    <Switch>\r
                        <Match when={value() === 0}>\r
                            <IconMediaVolumeOff class='size-5' />\r
                        </Match>\r
                        <Match when={value() >= 80}>\r
                            <IconMediaVolumeMax class='size-5' />\r
                        </Match>\r
                        <Match when={value() < 80}>\r
                            <IconMediaVolumeMin class='size-5' />\r
                        </Match>\r
                    </Switch>\r
                    <Slider.Input class='flex-1' />\r
                    <span class='w-8 text-right text-sm tabular-nums'>\r
                        {value()}%\r
                    </span>\r
                </div>\r
            </Slider>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    const [prevValue, setPrevValue] = createSignal<number | null>(null);
    const toggleMute = () => {
      if (value() !== 0) setPrevValue(value());
      if (value() === 0) setValue(prevValue() ?? 0);else setValue(0);
    };
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.Label>\r
                    <span>Volume</span>\r
                </Slider.Label>\r
                <div class='flex items-center gap-1'>\r
                    <Button onClick={toggleMute} size='icon' variant='ghost'>\r
                        <Switch>\r
                            <Match when={value() === 0}>\r
                                <IconMediaVolumeOff class='size-5' />\r
                            </Match>\r
                            <Match when={value() >= 80}>\r
                                <IconMediaVolumeMax class='size-5' />\r
                            </Match>\r
                            <Match when={value() < 80}>\r
                                <IconMediaVolumeMin class='size-5' />\r
                            </Match>\r
                        </Switch>\r
                    </Button>\r
\r
                    <Slider.Input class='flex-1' />\r
                    <span class='w-8 text-right text-sm tabular-nums'>\r
                        {value()}%\r
                    </span>\r
                </div>\r
            </Slider>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(20);
    return <>\r
                <Slider list='markers' onInput={setValue} value={value()}>\r
                    <Slider.Label>\r
                        <div class='flex justify-between'>\r
                            <span>Volume</span>\r
                            <span>{value()}%</span>\r
                        </div>\r
                    </Slider.Label>\r
                    <Slider.Input />\r
                </Slider>\r
                <datalist id='markers'>\r
                    <option value='0' />\r
                    <option value='25' />\r
                    <option value='50' />\r
                    <option value='75' />\r
                    <option value='100' />\r
                </datalist>\r
            </>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.ToolTip />\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.ToolTip placement='bottom' />\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.ToolTip>\r
                    {value => {
          return <>value: {value}</>;
        }}\r
                </Slider.ToolTip>\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider onInput={setValue} value={value()}>\r
                <Slider.Input hideThumb />\r
            </Slider>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal(30);
    return <Slider disabled onInput={setValue} value={value()}>\r
                <Slider.Input />\r
            </Slider>;
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithLabel`,`WithIcon`,`WithExternalButton`,`WithMarkers`,`Tooltip`,`TooltipBottom`,`TooltipCustomLabel`,`HideThumb`,`Disabled`]}))();export{C as Default,M as Disabled,j as HideThumb,O as Tooltip,k as TooltipBottom,A as TooltipCustomLabel,E as WithExternalButton,T as WithIcon,w as WithLabel,D as WithMarkers,N as __namedExportsOrder,S as default};