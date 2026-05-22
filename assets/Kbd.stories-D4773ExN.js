import{n as e}from"./chunk-BneVvdWh.js";import{N as t,P as n,R as r,f as i,o as a,p as o,s,w as c}from"./web-BVRQcnZI.js";import{t as l}from"./IconArrowSubLeftDown-BlCajpdO.js";import{t as u}from"./icons-DwK0ITIp.js";import{t as d}from"./Button-D7ZefyVV.js";import{i as f,r as p}from"./utils-C1J4YlMN.js";import{t as m}from"./Button-BZz8-4tt.js";var h,g,_,v,y=e((()=>{a(),t(),f(),h=o(`<kbd data-slot=kbd>`),g=o(`<kbd data-slot=kbd-group>`),_=e=>{let[t,a]=r(e,[`class`,`children`]);return(()=>{var e=h();return i(e,n({get class(){return p(`pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-default border border-border bg-surface-3/30 px-1 font-medium font-sans text-text-muted text-xs [&_svg:not([class*='size-'])]:size-3`,t.class)}},a),!1,!0),s(e,()=>t.children),e})()},v=e=>{let[t,a]=r(e,[`class`,`children`]);return(()=>{var e=g();return i(e,n({get class(){return p(`inline-flex items-center gap-1 text-text-secondary`,t.class)}},a),!1,!0),s(e,()=>t.children),e})()};try{_.displayName=`Kbd`,_.__docgenInfo={description:``,displayName:`Kbd`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Kbd/Kbd.tsx`,methods:[],props:{},tags:{}}}catch{}try{v.displayName=`KbdGroup`,v.__docgenInfo={description:``,displayName:`KbdGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Kbd/Kbd.tsx`,methods:[],props:{},tags:{}}}catch{}})),b,x,S,C,w,T,E,D;e((()=>{a(),u(),m(),y(),b=o(`<span>+`),x=o(`<p>Use <!> to save buffer`),S={title:`Ui/Kbd`,component:_,parameters:{layout:`centered`}},C={render:()=>c(_,{children:`k`})},w={render:()=>c(v,{get children(){return[c(_,{children:`Ctrl`}),b(),c(_,{children:`S`})]}})},T={render:()=>c(d,{get children(){return[`Submit`,c(v,{get children(){return c(_,{get children(){return c(l,{})}})}})]}})},E={render:()=>(()=>{var e=x(),t=e.firstChild.nextSibling;return t.nextSibling,s(e,c(v,{get children(){return[c(_,{children:`Ctrl`}),b(),c(_,{children:`S`})]}}),t),e})()},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Kbd>k</Kbd>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <KbdGroup>\r
                <Kbd>Ctrl</Kbd>\r
                <span>+</span>\r
                <Kbd>S</Kbd>\r
            </KbdGroup>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Button>\r
                Submit\r
                <KbdGroup>\r
                    <Kbd>\r
                        <IconArrowSubLeftDown />\r
                    </Kbd>\r
                </KbdGroup>\r
            </Button>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <p>\r
                Use{' '}\r
                <KbdGroup>\r
                    <Kbd>Ctrl</Kbd>\r
                    <span>+</span>\r
                    <Kbd>S</Kbd>\r
                </KbdGroup>{' '}\r
                to save buffer\r
            </p>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Group`,`InButton`,`InText`]}))();export{C as Default,w as Group,T as InButton,E as InText,D as __namedExportsOrder,S as default};