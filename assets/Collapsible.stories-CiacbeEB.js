import{n as e}from"./chunk-BneVvdWh.js";import{A as t,N as n,o as r,p as i,s as a,w as o}from"./web-BVRQcnZI.js";import{t as s}from"./Button-D7ZefyVV.js";import{t as c}from"./Button-BZz8-4tt.js";import{n as l,t as u}from"./Collapsible-BUYq7pdB.js";var d,f,p,m,h,g,_,v,y;e((()=>{r(),n(),c(),l(),d=i(`<div class=size-96>`),f=i(`<div class="flex size-96 flex-col gap-2">`),p={title:`Ui/Collapsible`,component:u,parameters:{layout:`centered`}},m=()=>`Id tempor labore tempor in nisi eiusmod laborum veniam enim consectetur cillum sunt eu. Cillum laborum ex irure amet aliquip labore id anim ex dolor magna occaecat amet dolore. Deserunt fugiat duis do nostrud nisi magna non exercitation ad culpa mollit enim labore in. Officia aliquip id non labore minim labore amet velit reprehenderit eu anim ad. Eu non eiusmod aliquip velit officia consequat sunt. Aute reprehenderit exercitation nulla excepteur non irure irure quis nostrud. Sunt eu ullamco eiusmod elit nisi consectetur consectetur cupidatat. Quis consequat laboris labore aliquip dolor velit adipisicing ea officia magna. Qui laboris consectetur voluptate nostrud deserunt voluptate. Quis deserunt ad aliquip incididunt non anim consectetur magna quis adipisicing officia. Eu minim magna sit esse consequat aliqua ut officia reprehenderit incididunt et tempor pariatur.`,h={render:()=>(()=>{var e=d();return a(e,o(u,{get children(){return[o(u.Trigger,{children:`Open Collapsible`}),o(u.Content,{get children(){return o(m,{})}})]}})),e})()},g={render:()=>{let[e,n]=t(!1);return(()=>{var t=f();return a(t,o(s,{appearance:`primary`,onClick:()=>n(e=>!e),children:`External Control`}),null),a(t,o(u,{onOpenChange:n,get open(){return e()},get children(){return[o(u.Trigger,{children:`Open Collapsible`}),o(u.Content,{get children(){return o(m,{})}})]}}),null),t})()}},_={render:()=>(()=>{var e=d();return a(e,o(u,{defaultOpen:!0,get children(){return[o(u.Trigger,{children:`Open Collapsible`}),o(u.Content,{get children(){return o(m,{})}})]}})),e})()},v={render:()=>(()=>{var e=d();return a(e,o(u,{disabled:!0,get children(){return[o(u.Trigger,{children:`Open Collapsible`}),o(u.Content,{get children(){return o(m,{})}})]}})),e})()},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Collapsible>\r
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>\r
                    <Collapsible.Content>\r
                        <PlaceholderContent />\r
                    </Collapsible.Content>\r
                </Collapsible>\r
            </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = createSignal(false);
    return <div class='flex size-96 flex-col gap-2'>\r
                <Button appearance='primary' onClick={() => setIsOpen(prev => !prev)}>\r
                    External Control\r
                </Button>\r
\r
                <Collapsible onOpenChange={setIsOpen} open={isOpen()}>\r
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>\r
                    <Collapsible.Content>\r
                        <PlaceholderContent />\r
                    </Collapsible.Content>\r
                </Collapsible>\r
            </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Collapsible defaultOpen>\r
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>\r
                    <Collapsible.Content>\r
                        <PlaceholderContent />\r
                    </Collapsible.Content>\r
                </Collapsible>\r
            </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div class='size-96'>\r
                <Collapsible disabled>\r
                    <Collapsible.Trigger>Open Collapsible</Collapsible.Trigger>\r
                    <Collapsible.Content>\r
                        <PlaceholderContent />\r
                    </Collapsible.Content>\r
                </Collapsible>\r
            </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`ExternalControl`,`OpenByDefault`,`Disabled`]}))();export{h as Default,v as Disabled,g as ExternalControl,_ as OpenByDefault,y as __namedExportsOrder,p as default};