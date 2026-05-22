import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,E as r,F as i,N as a,P as o,T as s,b as c,i as l,k as u,o as d,p as f,s as p,u as m,w as h}from"./web-BVRQcnZI.js";import{t as g}from"./Button-D7ZefyVV.js";import{i as _,r as v}from"./utils-C1J4YlMN.js";import{t as y}from"./Button-BZz8-4tt.js";var b,x,S,C,w,T,E,D,O,k,A=e((()=>{d(),a(),y(),_(),b=f(`<div class="@container/tabs h-full w-full"><div>`),x=f(`<div data-slot=list>`),S=f(`<div data-slot=panel>`),C=r(),w=()=>{let e=n(C);if(!e)throw Error(`useTabsContext must be used within the TabsContext provider`);return e},T=e=>{let n=o({variant:`underline`,orientation:`horizontal`},e),[r,a]=t(n.value??n.defaultValue);return s(i(()=>n.value,e=>{a(()=>e)},{defer:!0})),h(C.Provider,{value:{value:r,onChange:e=>{n.value===void 0&&a(()=>e),n.onChange?.(e)},orientation:()=>n.orientation,variant:()=>n.variant,disabled:()=>n.disabled,size:()=>n.size,isSelected:e=>r()===e},get children(){var e=b(),t=e.firstChild;return p(t,()=>n.children),u(e=>{var r=v(`flex h-full w-full flex-col flex-wrap gap-1`,`data-[orientation=vertical]:flex-row`,`data-[orientation=vertical]:@max-sm/tabs:flex-col`,n.class),i=n.orientation;return r!==e.e&&l(t,e.e=r),i!==e.t&&m(t,`data-orientation`,e.t=i),e},{e:void 0,t:void 0}),e}})},E=e=>{let t=w(),n=()=>t.isSelected(e.value),r=()=>t.disabled()||e.disabled,i=()=>{if(!n())return`transparent`;switch(t.variant()){case`underline`:return`transparent`;case`soft`:case`subtle`:return`soft`}},a=()=>{switch(t.variant()){case`subtle`:return`secondary`;case`underline`:case`soft`:return n()?`primary`:`secondary`}};return h(g,{get appearance(){return a()},get class(){return v(`text-text-muted capitalize hover:text-text-secondary`,`data-[variant=underline]:rounded-none`,`data-[variant=underline]:border-transparent`,`data-[variant=underline]:border-b-2`,`data-[variant=underline]:data-[selected=true]:border-current`,`data-[variant=underline]:data-[selected=true]:text-accent`,`data-[variant=soft]:data-[selected=true]:text-accent`,`data-[variant=subtle]:data-[selected=true]:text-text-secondary`,`data-[variant=subtle]:data-[selected=true]:outline-text-secondary`,e.class)},get"data-orientation"(){return t.orientation()},get"data-selected"(){return n()},"data-slot":`tab`,get"data-variant"(){return t.variant()},get disabled(){return r()},onClick:()=>t.onChange(e.value),get size(){return t.size()??e.size},get variant(){return i()},get children(){return e.children??e.value}})},D=e=>{let t=w();return(()=>{var n=x();return p(n,()=>e.children),u(r=>{var i=v(`flex flex-wrap rounded-default bg-surface-base/60 p-2`,`data-[orientation=vertical]:flex-col`,`data-[orientation=vertical]:basis-44`,`data-[orientation=vertical]:shrink-0`,`data-[orientation=vertical]:@max-sm/tabs:flex-row`,`data-[orientation=vertical]:@max-sm/tabs:basis-auto`,`data-[orientation=vertical]:@max-sm/tabs:p-0`,`data-[orientation=vertical]:@max-sm/tabs:bg-transparent`,e.class),a=t.orientation();return i!==r.e&&l(n,r.e=i),a!==r.t&&m(n,`data-orientation`,r.t=a),r},{e:void 0,t:void 0}),n})()},O=e=>{let t=w(),n=()=>t.isSelected(e.value);return h(c,{get when(){return n()},get children(){var r=S();return p(r,()=>e.children),u(i=>{var a=v(`grow p-2`,e.class),o=t.orientation(),s=n();return a!==i.e&&l(r,i.e=a),o!==i.t&&m(r,`data-orientation`,i.t=o),s!==i.a&&m(r,`data-selected`,i.a=s),i},{e:void 0,t:void 0,a:void 0}),r}})},k=()=>({Root:T,Tab:E,List:D,Panel:O})})),j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{d(),_(),A(),j=f(`<div>`),M=f(`<div class="flex flex-wrap place-content-center gap-1">`),N=k(),P={title:`Ui/Tabs`,component:N.Root,parameters:{layout:`centered`}},F=e=>(()=>{var t=j();return p(t,()=>e.children),u(()=>l(t,v(`size-156 rounded-default bg-surface-1 p-2`,e.class))),t})(),I={render:()=>h(F,{get children(){return h(N.Root,{defaultValue:`overview`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}})},L={render:()=>h(F,{get children(){return h(N.Root,{defaultValue:`overview`,size:`sm`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}})},R={render:()=>(()=>{var e=M();return p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`underline`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`soft`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`subtle`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),e})()},z={render:()=>(()=>{var e=M();return p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`vertical`,variant:`underline`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`vertical`,variant:`soft`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`vertical`,variant:`subtle`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),e})()},B={render:()=>(()=>{var e=M();return p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`underline`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{disabled:!0,value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{disabled:!0,value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`soft`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{disabled:!0,value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{disabled:!0,value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,orientation:`horizontal`,variant:`subtle`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{disabled:!0,value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{disabled:!0,value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),e})()},V={render:()=>(()=>{var e=M();return p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,disabled:!0,orientation:`horizontal`,variant:`underline`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,disabled:!0,orientation:`horizontal`,variant:`soft`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),p(e,h(F,{get children(){return h(N.Root,{defaultValue:`overview`,disabled:!0,orientation:`horizontal`,variant:`subtle`,get children(){return[h(N.List,{get children(){return[h(N.Tab,{value:`overview`}),h(N.Tab,{value:`analytics`}),h(N.Tab,{value:`reports`}),h(N.Tab,{value:`settings`})]}}),h(N.Panel,{value:`overview`,children:`Overview`}),h(N.Panel,{value:`analytics`,children:`Analytics`}),h(N.Panel,{value:`reports`,children:`Reports`}),h(N.Panel,{value:`settings`,children:`Settings`})]}})}}),null),e})()},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Wrapper>\r
                <Tabs.Root defaultValue='overview'>\r
                    <Tabs.List>\r
                        <Tabs.Tab value='overview' />\r
                        <Tabs.Tab value='analytics' />\r
                        <Tabs.Tab value='reports' />\r
                        <Tabs.Tab value='settings' />\r
                    </Tabs.List>\r
                    <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                    <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                    <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                    <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                </Tabs.Root>\r
            </Wrapper>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Wrapper>\r
                <Tabs.Root defaultValue='overview' size='sm'>\r
                    <Tabs.List>\r
                        <Tabs.Tab value='overview' />\r
                        <Tabs.Tab value='analytics' />\r
                        <Tabs.Tab value='reports' />\r
                        <Tabs.Tab value='settings' />\r
                    </Tabs.List>\r
                    <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                    <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                    <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                    <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                </Tabs.Root>\r
            </Wrapper>;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-wrap place-content-center gap-1'>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='underline'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='soft'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='subtle'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
            </div>;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-wrap place-content-center gap-1'>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='vertical' variant='underline'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='vertical' variant='soft'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='vertical' variant='subtle'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
            </div>;
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-wrap place-content-center gap-1'>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='underline'>\r
                        <Tabs.List>\r
                            <Tabs.Tab disabled value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab disabled value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='soft'>\r
                        <Tabs.List>\r
                            <Tabs.Tab disabled value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab disabled value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' orientation='horizontal' variant='subtle'>\r
                        <Tabs.List>\r
                            <Tabs.Tab disabled value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab disabled value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
            </div>;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='flex flex-wrap place-content-center gap-1'>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' disabled orientation='horizontal' variant='underline'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' disabled orientation='horizontal' variant='soft'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
                <Wrapper>\r
                    <Tabs.Root defaultValue='overview' disabled orientation='horizontal' variant='subtle'>\r
                        <Tabs.List>\r
                            <Tabs.Tab value='overview' />\r
                            <Tabs.Tab value='analytics' />\r
                            <Tabs.Tab value='reports' />\r
                            <Tabs.Tab value='settings' />\r
                        </Tabs.List>\r
                        <Tabs.Panel value='overview'>Overview</Tabs.Panel>\r
                        <Tabs.Panel value='analytics'>Analytics</Tabs.Panel>\r
                        <Tabs.Panel value='reports'>Reports</Tabs.Panel>\r
                        <Tabs.Panel value='settings'>Settings</Tabs.Panel>\r
                    </Tabs.Root>\r
                </Wrapper>\r
            </div>;
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Size`,`Horizontal`,`Vertical`,`DisabledTabs`,`Disabled`]}))();export{I as Default,V as Disabled,B as DisabledTabs,R as Horizontal,L as Size,z as Vertical,H as __namedExportsOrder,P as default};