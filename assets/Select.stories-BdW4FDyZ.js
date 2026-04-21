import{n as e}from"./chunk-BneVvdWh.js";import{C as t,D as n,E as r,F as i,I as a,M as o,N as s,O as c,T as l,_ as u,a as d,f,k as p,o as m,p as ee,r as h,s as te,u as ne,y as g,z as re}from"./web-C_www37z.js";import{t as _}from"./IconArrowCaretDownMd-CT2lbp6y.js";import{t as ie}from"./IconArrowCaretUpMd-iGBhP5AS.js";import{t as ae}from"./IconEditAddPlus-CYd3IEaR.js";import{t as oe}from"./IconInterfaceCheck-B4zwSB2l.js";import{t as v}from"./icons-_5EPuHlL.js";import{n as y,r as b,t as se}from"./utils-B5zP-D2T.js";import{t as x}from"./Badge-5F7VuVPB.js";import{r as ce,t as S}from"./Button-C34HWM-0.js";import{t as C}from"./Button-DEhmje5r.js";import{n as w,r as T,t as le}from"./Separator-Cxtl9a4g.js";import{n as ue,t as de}from"./Popover-DwLeSoBZ.js";import{t as fe}from"./Separator-DvM8STVU.js";import{t as pe}from"./Input-BavMTG6t.js";import{t as me}from"./Input-DuCIj2X7.js";import{n as he,t as ge}from"./dist-C8hLrrlg.js";var E,D,O=e((()=>{o(),E=l(),D=()=>{let e=re(E);if(!e)throw Error(`useSelectContext must be used within a SelectContext`);return e}})),k,A,_e=e((()=>{d(),T(),o(),de(),b(),O(),k=f(`<div>`),A=e=>{let n=s({targetPosition:`fixed`,targetPositionArea:`block-end span-inline-end`,positionTryFallbacks:()=>[`block-start span-inline-end`]},e),a,o=D();r(()=>{if(o.isOpen()&&a){let e=w.context(()=>{w.from(a,{autoAlpha:0,scale:.98,overflow:`hidden`,duration:.2,ease:`power3.out`})});i(()=>e.revert())}});let l=()=>{let e=o.triggerRef();return e?`${e.getBoundingClientRect().width}px`:`auto`};return t(ue,{get onOpenChange(){return o.setIsOpen},get open(){return o.isOpen()},get positionTryFallbacks(){return n.positionTryFallbacks},get targetPosition(){return n.targetPosition},get targetPositionArea(){return n.targetPositionArea},get triggerElement(){return o.triggerRef()},get children(){var e=k(),t=a;return typeof t==`function`?ee(t,e):a=e,m(e,()=>n.children),c(t=>{var r=y(`mt-1 mb-1 flex max-h-80 flex-col gap-1 overflow-y-auto overscroll-contain rounded-default border border-border bg-surface-2 p-2 text-text-primary shadow-default`,n.class),i=l();return r!==t.e&&h(e,t.e=r),i!==t.t&&ne(e,`min-width`,t.t=i),t},{e:void 0,t:void 0}),e}})};try{A.displayName=`Content`,A.__docgenInfo={description:``,displayName:`Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Content.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`SelectContentProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`SelectContentProps`},required:!1,tags:{},type:{name:`string | undefined`}},targetPosition:{defaultValue:{value:`absolute`},declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`targetPosition`,required:!1,tags:{default:`absolute`},type:{name:`enum`,raw:`"absolute" | "fixed" | undefined`,value:[{value:`undefined`},{value:`"absolute"`},{value:`"fixed"`}]}},targetPositionArea:{defaultValue:{value:`"end center"`},declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`targetPositionArea`,required:!1,tags:{see:`https://css-tricks.com/css-anchor-positioning-guide/#aa-position-area`,default:`"end center"`},type:{name:`TargetPositionArea | undefined`}},positionTryFallbacks:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`positionTryFallbacks`,required:!1,tags:{see:`https://css-tricks.com/css-anchor-positioning-guide/#aa-position-try-fallbacks`},type:{name:`((anchorName: string) => ("top center" | "top self-start" | "top self-end" | "top left" | "top right" | "top inline-start" | "top inline-end" | "top inline-center" | "top span-left" | ... 159 more ... | "span-block span-inline")[]) | undefined`}}},tags:{}}}catch{}})),j,M,ve=e((()=>{d(),le(),b(),j=f(`<div>`),M=e=>[(()=>{var t=j();return m(t,()=>e.children),c(()=>h(t,y(`sticky top-0 -mt-2 flex flex-col gap-1 bg-inherit p-2`,e.class))),t})(),t(fe,{class:`my-2`})];try{M.displayName=`Filter`,M.__docgenInfo={description:``,displayName:`Filter`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Filter.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Filter.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),N,P,ye=e((()=>{d(),o(),v(),C(),b(),O(),N=f(`<div class="flex gap-1">`),P=e=>{let n=D(),r=()=>e.selected??n.value()===e.value;return t(S,{get class(){return y(`justify-between text-nowrap`,e.class)},get disabled(){return e.disabled},onClick:()=>{n.onChange(e.value),n.autoClose&&n.setIsOpen(!1)},get variant(){return r()?`primary`:`ghost`},get children(){return[(()=>{var t=N();return m(t,()=>e.children),t})(),t(g,{get when(){return r()},get children(){return t(oe,{})}})]}})};try{P.displayName=`Option`,P.__docgenInfo={description:``,displayName:`Option`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Option.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},selected:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),F,I,L,be=e((()=>{d(),T(),o(),he(),v(),C(),F=f(`<span class="font-bold text-sm text-text-muted uppercase">`),I=f(`<div class="ml-4 flex flex-col gap-1 rounded-default bg-surface-3/20">`),L=e=>{let[n,r]=p(e.open??!0);return[t(S,{onClick:()=>r(e=>!e),variant:`ghost`,get children(){return[t(g,{get fallback(){return t(_,{size:`1.5em`})},get when(){return n()},get children(){return t(ie,{size:`1.5em`})}}),(()=>{var t=F();return m(t,()=>e.label),t})()]}}),t(ge,{onEnter:(e,t)=>{w.from(e,{autoAlpha:0,height:0,duration:.2,ease:`power3.out`,onComplete:t})},onExit:(e,t)=>{w.to(e,{autoAlpha:0,height:0,duration:.2,ease:`power3.out`,onComplete:t})},get children(){return t(g,{get when(){return n()},get children(){var t=I();return m(t,()=>e.children),t}})}})]};try{L.displayName=`OptionGroup`,L.__docgenInfo={description:``,displayName:`OptionGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/OptionGroup.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`string`}},open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),R,xe=e((()=>{d(),o(),v(),C(),me(),R=e=>{let n=e.canCreateFromQuery??(()=>!0),r=()=>{let t=e.query.trim();t&&(e.setQuery(``),e.onCreateNewOption?.(t))};return t(pe,{get class(){return e.class},get onInput(){return e.setQuery},type:`search`,get value(){return e.query},get children(){return t(g,{get when(){return te(()=>!!e.query.trim())()&&e.onCreateNewOption!==void 0},get children(){return t(S,{get disabled(){return!n(e.query)},onClick:r,variant:`primary`,get children(){return t(ae,{})}})}})}})};try{R.displayName=`Searchbar`,R.__docgenInfo={description:``,displayName:`Searchbar`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Searchbar.tsx`,methods:[],props:{query:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`query`,required:!0,tags:{},type:{name:`string`}},setQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`setQuery`,required:!0,tags:{},type:{name:`(query: string) => void`}},onCreateNewOption:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`onCreateNewOption`,required:!1,tags:{},type:{name:`((value: string) => void) | undefined`}},canCreateFromQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`canCreateFromQuery`,required:!1,tags:{},type:{name:`((value: string) => boolean) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),z,B,V,Se=e((()=>{d(),o(),v(),C(),b(),O(),z=f(`<div class="flex flex-row gap-2">`),B=f(`<div class="flex flex-col">`),V=e=>{let n=s({variant:`secondary`},e),r=D();return t(S,{get"aria-expanded"(){return r.isOpen()},"aria-haspopup":`listbox`,get class(){return y(`justify-between px-3 capitalize`,r.isOpen()&&`bg-surface-3/30 hover:bg-surface-3/30`,n.class)},get disabled(){return n.disabled},ref(e){var t=r.setTriggerRef;typeof t==`function`?t(e):r.setTriggerRef=e},role:`combobox`,get variant(){return n.variant},get children(){return[(()=>{var e=z();return m(e,()=>n.children??(r.value()||`Choose an option`)),e})(),(()=>{var e=B();return m(e,t(ie,{class:`-mb-2`}),null),m(e,t(_,{}),null),e})()]}})};try{V.displayName=`Trigger`,V.__docgenInfo={description:``,displayName:`Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Trigger.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`},required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`}],description:``,name:`disabled`,parent:{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`ButtonProps`}],description:``,name:`variant`,parent:{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`ButtonVariant | undefined`,value:[{value:`undefined`},{value:`"success"`},{value:`"danger"`},{value:`"warning"`},{value:`"outline"`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"ghost"`},{value:`"icon"`}]}}},tags:{}}}catch{}})),H,U,Ce=e((()=>{d(),o(),_e(),O(),ve(),ye(),be(),xe(),Se(),H=e=>{let t=e?.trim().toLocaleUpperCase();if(e)return`SELECT_MENU_${t}`},U=e=>{let r=s({autoClose:!0},e),[i,o]=p(!1),[c,l]=p(void 0);a(()=>{let e=H(r.persistKey);if(!e)return;let t=localStorage.getItem(e);t&&r.onChange(t)});let u=e=>{let t=H(r.persistKey);t&&localStorage.setItem(t,e),r.onChange(e)},d=n(()=>r.value);return t(E.Provider,{get value(){return{onChange:u,autoClose:r.autoClose,value:d,isOpen:i,setIsOpen:o,triggerRef:c,setTriggerRef:l}},get children(){return r.children}})},U.Trigger=V,U.Content=A,U.OptionGroup=L,U.Option=P,U.Filter=M,U.Searchbar=R;try{U.displayName=`Select`,U.__docgenInfo={description:``,displayName:`Select`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: string) => void`}},autoClose:{defaultValue:{value:`true`},declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`autoClose`,required:!1,tags:{default:`true`},type:{name:`boolean | undefined`}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},persistKey:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:`Enables persistence of the selected value after refresh`,name:`persistKey`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{U.Trigger.displayName=`Select.Trigger`,U.Trigger.__docgenInfo={description:``,displayName:`Select.Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`},required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`}],description:``,name:`disabled`,parent:{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`SelectTriggerProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`ButtonProps`}],description:``,name:`variant`,parent:{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`ButtonProps`},required:!1,tags:{},type:{name:`enum`,raw:`ButtonVariant | undefined`,value:[{value:`undefined`},{value:`"success"`},{value:`"danger"`},{value:`"warning"`},{value:`"outline"`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"ghost"`},{value:`"icon"`}]}}},tags:{}}}catch{}try{U.Content.displayName=`Select.Content`,U.Content.__docgenInfo={description:``,displayName:`Select.Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`SelectContentProps`}],description:``,name:`class`,parent:{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`SelectContentProps`},required:!1,tags:{},type:{name:`string | undefined`}},targetPosition:{defaultValue:{value:`absolute`},declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`targetPosition`,required:!1,tags:{default:`absolute`},type:{name:`enum`,raw:`"absolute" | "fixed" | undefined`,value:[{value:`undefined`},{value:`"absolute"`},{value:`"fixed"`}]}},targetPositionArea:{defaultValue:{value:`"end center"`},declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`targetPositionArea`,required:!1,tags:{see:`https://css-tricks.com/css-anchor-positioning-guide/#aa-position-area`,default:`"end center"`},type:{name:`TargetPositionArea | undefined`}},positionTryFallbacks:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Popover/Popover.tsx`,name:`TypeLiteral`}],description:``,name:`positionTryFallbacks`,required:!1,tags:{see:`https://css-tricks.com/css-anchor-positioning-guide/#aa-position-try-fallbacks`},type:{name:`((anchorName: string) => ("top center" | "top self-start" | "top self-end" | "top left" | "top right" | "top inline-start" | "top inline-end" | "top inline-center" | "top span-left" | ... 159 more ... | "span-block span-inline")[]) | undefined`}}},tags:{}}}catch{}try{U.OptionGroup.displayName=`Select.OptionGroup`,U.OptionGroup.__docgenInfo={description:``,displayName:`Select.OptionGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`string`}},open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{U.Option.displayName=`Select.Option`,U.Option.__docgenInfo={description:``,displayName:`Select.Option`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},selected:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{U.Filter.displayName=`Select.Filter`,U.Filter.__docgenInfo={description:``,displayName:`Select.Filter`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Filter.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{U.Searchbar.displayName=`Select.Searchbar`,U.Searchbar.__docgenInfo={description:``,displayName:`Select.Searchbar`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{query:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`query`,required:!0,tags:{},type:{name:`string`}},setQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`setQuery`,required:!0,tags:{},type:{name:`(query: string) => void`}},onCreateNewOption:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`onCreateNewOption`,required:!1,tags:{},type:{name:`((value: string) => void) | undefined`}},canCreateFromQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`canCreateFromQuery`,required:!1,tags:{},type:{name:`((value: string) => boolean) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),W,G,K,q,J,Y,X,Z,Q,$;e((()=>{d(),o(),ce(),b(),Ce(),W={title:`Ui/Select`,component:U,parameters:{layout:`centered`}},G=[`option-1`,`option-2`,`option-3`],K=e=>se(e.replaceAll(`-`,` `)),q={render:()=>{let[e,n]=p(`option-1`);return t(U,{onChange:n,get value(){return e()},get children(){return[t(U.Trigger,{get children(){return K(e())}}),t(U.Content,{get children(){return t(u,{each:G,children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}})]}})}},J={render:()=>{let[e,n]=p(`option-1`);return t(U,{onChange:n,get value(){return e()},get children(){return[t(U.Trigger,{get children(){return K(e())}}),t(U.Content,{get children(){return[t(u,{each:G,children:e=>t(U.Option,{value:e,get children(){return K(e)}})}),t(U.OptionGroup,{label:`Group 1`,get children(){return t(u,{each:[`g-1-option-1`,`g-1-option-2`,`g-1-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}}),t(U.OptionGroup,{label:`Group 2`,get children(){return t(u,{each:[`g-2-option-1`,`g-2-option-2`,`g-2-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}}),t(U.OptionGroup,{label:`Group 3`,get children(){return t(u,{each:[`g-3-option-1`,`g-3-option-2`,`g-3-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}}),t(U.OptionGroup,{label:`Group 4`,get children(){return t(u,{each:[`g-4-option-1`,`g-4-option-2`,`g-4-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}})]}})]}})}},Y={render:()=>{let[e,n]=p(`option-1`);return t(U,{onChange:n,get value(){return e()},get children(){return[t(U.Trigger,{get children(){return K(e())}}),t(U.Content,{get children(){return[t(u,{each:G,children:e=>t(U.Option,{value:e,get children(){return K(e)}})}),t(U.OptionGroup,{label:`Group 1`,get children(){return[t(u,{each:[`g-1-option-1`,`g-1-option-2`,`g-1-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})}),t(U.OptionGroup,{label:`Group 2`,get children(){return t(u,{each:[`g-2-option-1`,`g-2-option-2`,`g-2-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}})]}}),t(U.OptionGroup,{label:`Group 3`,get children(){return t(u,{each:[`g-3-option-1`,`g-3-option-2`,`g-3-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}}),t(U.OptionGroup,{label:`Group 4`,get children(){return t(u,{each:[`g-4-option-1`,`g-4-option-2`,`g-4-option-3`],children:e=>t(U.Option,{value:e,get children(){return K(e)}})})}})]}})]}})}},X={render:()=>{let[e,n]=p([`option-1`,`option-2`]);return t(U,{autoClose:!1,onChange:t=>{if(e().includes(t)){n(e=>e.filter(e=>e!==t));return}n(e=>[...e,t])},get children(){return[t(U.Trigger,{get children(){return[`Select Option `,t(x,{get children(){return e().length}})]}}),t(U.Content,{get children(){return t(u,{each:G,children:n=>t(U.Option,{get selected(){return e().includes(n)},value:n,get children(){return K(n)}})})}})]}})}},Z={render:()=>{let[e,r]=p([`option-1`,`option-2`]),[i,a]=p(``),o=n(()=>{let e=i().trim().toLowerCase();return e?G.filter(t=>t.toLowerCase().includes(e)):G});return t(U,{autoClose:!1,onChange:t=>{if(e().includes(t)){r(e=>e.filter(e=>e!==t));return}r(e=>[...e,t])},get children(){return[t(U.Trigger,{get children(){return[`Select Option `,t(x,{get children(){return e().length}})]}}),t(U.Content,{get children(){return[t(U.Filter,{get children(){return t(U.Searchbar,{get query(){return i()},setQuery:a})}}),t(u,{get each(){return o()},children:n=>t(U.Option,{get selected(){return e().includes(n)},value:n,get children(){return K(n)}})})]}})]}})}},Q={render:()=>{let[e,r]=p([`option-1`,`option-2`,`option-3`]),[i,a]=p([`option-1`,`option-2`]),[o,s]=p(``),c=n(()=>{let t=e(),n=o().trim().toLowerCase();return n?t.filter(e=>e.toLowerCase().includes(n)):t}),l=t=>{e().includes(t)||(r(e=>[...e,t]),a(e=>[...e,t]))};return t(U,{autoClose:!1,onChange:e=>{if(i().includes(e)){a(t=>t.filter(t=>t!==e));return}a(t=>[...t,e])},get children(){return[t(U.Trigger,{get children(){return[`Select Option `,t(x,{get children(){return i().length}})]}}),t(U.Content,{get children(){return[t(U.Filter,{get children(){return t(U.Searchbar,{canCreateFromQuery:t=>!e().includes(t),onCreateNewOption:l,get query(){return o()},setQuery:s})}}),t(u,{get each(){return c()},children:e=>t(U.Option,{get selected(){return i().includes(e)},value:e,get children(){return K(e)}})})]}})]}})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <For each={OptionsList}>\r
                        {option => <Select.Option value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                </Select.Content>\r
            </Select>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <For each={OptionsList}>\r
                        {option => <Select.Option value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                    <Select.OptionGroup label='Group 1'>\r
                        <For each={['g-1-option-1', 'g-1-option-2', 'g-1-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                    <Select.OptionGroup label='Group 2'>\r
                        <For each={['g-2-option-1', 'g-2-option-2', 'g-2-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                    <Select.OptionGroup label='Group 3'>\r
                        <For each={['g-3-option-1', 'g-3-option-2', 'g-3-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                    <Select.OptionGroup label='Group 4'>\r
                        <For each={['g-4-option-1', 'g-4-option-2', 'g-4-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                </Select.Content>\r
            </Select>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <For each={OptionsList}>\r
                        {option => <Select.Option value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                    <Select.OptionGroup label='Group 1'>\r
                        <For each={['g-1-option-1', 'g-1-option-2', 'g-1-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                        <Select.OptionGroup label='Group 2'>\r
                            <For each={['g-2-option-1', 'g-2-option-2', 'g-2-option-3']}>\r
                                {option => <Select.Option value={option}>\r
                                        {displayOption(option)}\r
                                    </Select.Option>}\r
                            </For>\r
                        </Select.OptionGroup>\r
                    </Select.OptionGroup>\r
                    <Select.OptionGroup label='Group 3'>\r
                        <For each={['g-3-option-1', 'g-3-option-2', 'g-3-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                    <Select.OptionGroup label='Group 4'>\r
                        <For each={['g-4-option-1', 'g-4-option-2', 'g-4-option-3']}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.OptionGroup>\r
                </Select.Content>\r
            </Select>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string[]>(['option-1', 'option-2']);
    return <Select autoClose={false} onChange={v => {
      if (value().includes(v)) {
        setValue(prev => prev.filter(i => i !== v));
        return;
      }
      setValue(prev => [...prev, v]);
    }}>\r
                <Select.Trigger>\r
                    Select Option <Badge>{value().length}</Badge>\r
                </Select.Trigger>\r
                <Select.Content>\r
                    <For each={OptionsList}>\r
                        {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                </Select.Content>\r
            </Select>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal<string[]>(['option-1', 'option-2']);
    const [searchQuery, setSearchQuery] = createSignal('');
    const filteredOptions = createMemo(() => {
      const query = searchQuery().trim().toLowerCase();
      if (query) {
        return OptionsList.filter(option => option.toLowerCase().includes(query));
      }
      return OptionsList;
    });
    return <Select autoClose={false} onChange={v => {
      if (value().includes(v)) {
        setValue(prev => prev.filter(i => i !== v));
        return;
      }
      setValue(prev => [...prev, v]);
    }}>\r
                <Select.Trigger>\r
                    Select Option <Badge>{value().length}</Badge>\r
                </Select.Trigger>\r
                <Select.Content>\r
                    <Select.Filter>\r
                        <Select.Searchbar query={searchQuery()} setQuery={setSearchQuery} />\r
                    </Select.Filter>\r
                    <For each={filteredOptions()}>\r
                        {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                </Select.Content>\r
            </Select>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [options, setOptions] = createSignal<string[]>(['option-1', 'option-2', 'option-3']);
    const [value, setValue] = createSignal<string[]>(['option-1', 'option-2']);
    const [searchQuery, setSearchQuery] = createSignal('');
    const filteredOptions = createMemo(() => {
      const list = options();
      const query = searchQuery().trim().toLowerCase();
      if (query) {
        return list.filter(option => option.toLowerCase().includes(query));
      }
      return list;
    });
    const createNewOption = (val: string) => {
      if (options().includes(val)) return;
      setOptions(prev => [...prev, val]);
      setValue(prev => [...prev, val]);
    };
    return <Select autoClose={false} onChange={v => {
      if (value().includes(v)) {
        setValue(prev => prev.filter(i => i !== v));
        return;
      }
      setValue(prev => [...prev, v]);
    }}>\r
                <Select.Trigger>\r
                    Select Option <Badge>{value().length}</Badge>\r
                </Select.Trigger>\r
                <Select.Content>\r
                    <Select.Filter>\r
                        <Select.Searchbar canCreateFromQuery={val => !options().includes(val)} onCreateNewOption={createNewOption} query={searchQuery()} setQuery={setSearchQuery} />\r
                    </Select.Filter>\r
                    <For each={filteredOptions()}>\r
                        {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                {displayOption(option)}\r
                            </Select.Option>}\r
                    </For>\r
                </Select.Content>\r
            </Select>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Single`,`OptionGroup`,`NestedOptionGroup`,`Multiple`,`WithSearchbar`,`Creatable`]}))();export{Q as Creatable,X as Multiple,Y as NestedOptionGroup,J as OptionGroup,q as Single,Z as WithSearchbar,$ as __namedExportsOrder,W as default};