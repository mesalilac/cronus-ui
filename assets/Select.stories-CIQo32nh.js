import{n as e}from"./chunk-BneVvdWh.js";import{A as t,B as n,D as r,E as i,I as a,L as o,N as s,O as c,P as l,b as u,c as ee,d,i as f,k as p,m as te,o as m,p as h,s as g,v as _,w as v}from"./web-BVRQcnZI.js";import{t as y}from"./IconArrowCaretDownMd-BsggTpgx.js";import{t as ne}from"./IconArrowCaretUpMd-CGVdBe_1.js";import{t as re}from"./IconEditAddPlus-Dqin1xvN.js";import{t as ie}from"./IconInterfaceCheck-BExOPGQL.js";import{t as b}from"./icons-DwK0ITIp.js";import{t as x}from"./Button-D7ZefyVV.js";import{i as S,r as C,t as ae}from"./utils-C1J4YlMN.js";import{t as w}from"./Button-BZz8-4tt.js";import{t as oe}from"./Separator-Cn2BPlbd.js";import{t as se}from"./Separator-Bn4szB4a.js";import{n as T,t as E}from"./gsap-BCio8Dq3.js";import{n as ce,t as le}from"./dist-BwHv0uIN.js";import{t as D}from"./Badge-Bh8DpNx5.js";import{n as ue,r as de,t as fe}from"./Popover-BsKXwPGd.js";import{n as pe,t as me}from"./Label-Az67DKGD.js";import{t as he}from"./Input-CVai8KKR.js";import{t as ge}from"./Input-msnBHPIj.js";import{t as _e}from"./Badge-BXemyYFl.js";var O,k,A=e((()=>{s(),O=i(),k=()=>{let e=n(O);if(!e)throw Error(`useSelectContext must be used within a SelectContext`);return e}})),j,M,N,P,ve=e((()=>{m(),T(),s(),fe(),S(),A(),j=h(`<div>`),M=h(`<div><span class="hidden select-none text-center text-text-secondary only:block">No options found`),N=e=>{let t=k(),n;r(()=>{if(t.isOpen()&&n){let e=E.context(()=>{E.from(n,{autoAlpha:0,scale:.98,overflow:`hidden`,duration:.2,ease:`power3.out`})});a(()=>e.revert())}});let i=()=>{let e=t.triggerRef();return e?`${e.getBoundingClientRect().width}px`:`auto`},o=()=>{if(t.placement().startsWith(`top`)||t.placement().startsWith(`bottom`))return C(`my-1`);if(t.placement().startsWith(`right`)||t.placement().startsWith(`left`))return C(`mx-1`)};return v(de,{get onOpenChange(){return t.setIsOpen},get open(){return t.isOpen()},positionTryFallbacks:()=>t.placementFallback().map(e=>ue[e]),targetPosition:`fixed`,get targetPositionArea(){return ue[t.placement()]},get triggerElement(){return t.triggerRef()},get children(){var t=j(),r=n;return typeof r==`function`?te(r,t):n=t,g(t,()=>e.children),p(n=>{var r=C(`flex max-h-80 flex-col gap-2 rounded-default bg-surface-2 p-2 text-text-primary shadow-default outline outline-accent`,o(),e.class),a=i(),s=i();return r!==n.e&&f(t,n.e=r),a!==n.t&&d(t,`min-width`,n.t=a),s!==n.a&&d(t,`max-width`,n.a=s),n},{e:void 0,t:void 0,a:void 0}),t}})},P=e=>(()=>{var t=M(),n=t.firstChild;return g(t,()=>e.children,n),p(()=>f(t,C(`flex flex-1 flex-col gap-1 overflow-y-auto`,e.class))),t})();try{N.displayName=`Content`,N.__docgenInfo={description:``,displayName:`Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Content.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{P.displayName=`SelectList`,P.__docgenInfo={description:``,displayName:`SelectList`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Content.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),F,I,ye=e((()=>{m(),se(),S(),F=h(`<div>`),I=e=>[(()=>{var t=F();return g(t,()=>e.children),p(()=>f(t,C(`flex flex-col gap-2 bg-surface-2`,e.class))),t})(),v(oe,{class:`-mx-2 my-0.5`})];try{I.displayName=`Filter`,I.__docgenInfo={description:``,displayName:`Filter`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Filter.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Filter.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),L,R,be=e((()=>{m(),s(),b(),w(),S(),A(),L=h(`<div class="flex gap-1">`),R=e=>{let t=k(),n=()=>e.selected??t.value()===e.value;return v(x,{get appearance(){return n()?`primary`:`secondary`},get class(){return C(`relative justify-between text-nowrap px-2 py-1 text-text-primary before:absolute before:inset-x-0 before:inset-y-1 before:size-full before:content-[""]`,e.class)},get disabled(){return e.disabled},onClick:()=>{t.onChange(e.value),t.autoClose()&&t.setIsOpen(!1)},get variant(){return n()?`solid`:`ghost`},get children(){return[(()=>{var t=L();return g(t,()=>e.children),t})(),v(u,{get when(){return n()},get children(){return v(ie,{})}})]}})};try{R.displayName=`Option`,R.__docgenInfo={description:``,displayName:`Option`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Option.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},selected:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),z,B,xe=e((()=>{m(),T(),s(),ce(),b(),w(),me(),z=h(`<div class="flex flex-col gap-1 rounded-default bg-surface-3/20">`),B=e=>{let[n,r]=t(e.open??!0);return[v(x,{onClick:()=>r(e=>!e),variant:`ghost`,get children(){return[v(u,{get fallback(){return v(y,{size:`1.5em`})},get when(){return n()},get children(){return v(ne,{size:`1.5em`})}}),v(pe,{class:`text-text-muted`,get children(){return e.label}})]}}),v(le,{onEnter:(e,t)=>{E.from(e,{autoAlpha:0,height:0,duration:.2,ease:`power3.out`,onComplete:t})},onExit:(e,t)=>{E.to(e,{autoAlpha:0,height:0,duration:.2,ease:`power3.out`,onComplete:t})},get children(){return v(u,{get when(){return n()},get children(){var t=z();return g(t,()=>e.children),t}})}})]};try{B.displayName=`OptionGroup`,B.__docgenInfo={description:``,displayName:`OptionGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/OptionGroup.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`string`}},open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}})),Se,V,Ce=e((()=>{m(),s(),b(),w(),ge(),S(),Se=h(`<div class="flex flex-1 items-center gap-1">`),V=e=>{let t=e.canCreateFromQuery??(()=>!0),n=()=>{let t=e.query.trim();t&&(e.setQuery(``),e.onCreateNewOption?.(t))};return(()=>{var r=Se();return g(r,v(he,{get class(){return C(`px-2 py-1`,e.class)},get onInput(){return e.setQuery},type:`search`,get value(){return e.query}}),null),g(r,v(u,{get when(){return ee(()=>!!e.query.trim())()&&e.onCreateNewOption!==void 0},get children(){return v(x,{appearance:`primary`,class:`px-2 py-1.5`,get disabled(){return!t(e.query)},onClick:n,title:`Create new option`,get children(){return v(re,{})}})}}),null),r})()};try{V.displayName=`Searchbar`,V.__docgenInfo={description:``,displayName:`Searchbar`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Searchbar.tsx`,methods:[],props:{query:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`query`,required:!0,tags:{},type:{name:`string`}},setQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`setQuery`,required:!0,tags:{},type:{name:`(query: string) => void`}},onCreateNewOption:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`onCreateNewOption`,required:!1,tags:{},type:{name:`((value: string) => void) | undefined`}},canCreateFromQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`canCreateFromQuery`,required:!1,tags:{},type:{name:`((value: string) => boolean) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),we,Te,H,Ee=e((()=>{m(),b(),w(),S(),A(),we=h(`<div class="flex flex-row gap-2">`),Te=h(`<div class="flex flex-col">`),H=e=>{let t=k();return v(x,{get appearance(){return e.appearance},get"aria-expanded"(){return t.isOpen()},"aria-haspopup":`listbox`,get class(){return C(`min-w-52 justify-between bg-surface-3/30 p-1 px-3 py-2.5 capitalize outline outline-border`,t.isOpen()&&`outline-accent`,e.class)},get disabled(){return e.disabled},ref(e){var n=t.setTriggerRef;typeof n==`function`?n(e):t.setTriggerRef=e},role:`combobox`,get variant(){return e.variant},get children(){return[(()=>{var n=we();return g(n,()=>e.children??(t.value()||`Choose an option`)),n})(),(()=>{var e=Te();return g(e,v(ne,{class:`-mb-2`}),null),g(e,v(y,{}),null),e})()]}})};try{H.displayName=`Trigger`,H.__docgenInfo={description:``,displayName:`Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Trigger.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonVariant | undefined`,value:[{value:`undefined`},{value:`"link"`},{value:`"solid"`},{value:`"soft"`},{value:`"outline"`},{value:`"ghost"`},{value:`"transparent"`}]}},appearance:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`appearance`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonAppearance | undefined`,value:[{value:`undefined`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`}]}}},tags:{}}}catch{}})),U,W,De=e((()=>{m(),s(),ve(),A(),ye(),be(),xe(),Ce(),Ee(),U=e=>{let t=e?.trim().toLocaleUpperCase();if(e)return`SELECT_MENU_${t}`},W=e=>{let n=l({autoClose:!0,placement:`bottom-start`,placementFallback:[`right-start`,`left-start`,`top-start`,`bottom-start`]},e),[r,i]=t(!1),[a,s]=t(void 0);o(()=>{let e=U(n.persistKey);if(!e)return;let t=localStorage.getItem(e);t&&n.onChange(t)});let u=e=>{let t=U(n.persistKey);t&&localStorage.setItem(t,e),n.onChange(e)},ee=c(()=>n.value);return v(O.Provider,{value:{onChange:u,autoClose:()=>n.autoClose,value:ee,isOpen:r,setIsOpen:i,placement:()=>n.placement,placementFallback:()=>n.placementFallback,triggerRef:a,setTriggerRef:s},get children(){return n.children}})},W.Trigger=H,W.Content=N,W.List=P,W.OptionGroup=B,W.Option=R,W.Filter=I,W.Searchbar=V;try{W.displayName=`Select`,W.__docgenInfo={description:``,displayName:`Select`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{onChange:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`onChange`,required:!0,tags:{},type:{name:`(value: string) => void`}},autoClose:{defaultValue:{value:`true`},declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`autoClose`,required:!1,tags:{default:`true`},type:{name:`boolean | undefined`}},value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!1,tags:{},type:{name:`string | undefined`}},placement:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`placement`,required:!1,tags:{},type:{name:`enum`,raw:`CommonPositionArea | undefined`,value:[{value:`undefined`},{value:`"top"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"right"`},{value:`"right-start"`},{value:`"right-end"`},{value:`"bottom"`},{value:`"bottom-start"`},{value:`"bottom-end"`},{value:`"left"`},{value:`"left-start"`},{value:`"left-end"`}]}},placementFallback:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:``,name:`placementFallback`,required:!1,tags:{},type:{name:`CommonPositionArea[] | undefined`}},persistKey:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Select.tsx`,name:`TypeLiteral`}],description:`Enables persistence of the selected value after refresh`,name:`persistKey`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{W.Trigger.displayName=`Select.Trigger`,W.Trigger.__docgenInfo={description:``,displayName:`Select.Trigger`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Trigger.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},variant:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`variant`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonVariant | undefined`,value:[{value:`undefined`},{value:`"link"`},{value:`"solid"`},{value:`"soft"`},{value:`"outline"`},{value:`"ghost"`},{value:`"transparent"`}]}},appearance:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Button/Button.tsx`,name:`TypeLiteral`}],description:``,name:`appearance`,required:!1,tags:{},type:{name:`enum`,raw:`ButtonAppearance | undefined`,value:[{value:`undefined`},{value:`"primary"`},{value:`"secondary"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`}]}}},tags:{}}}catch{}try{W.Content.displayName=`Select.Content`,W.Content.__docgenInfo={description:``,displayName:`Select.Content`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Content.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{W.OptionGroup.displayName=`Select.OptionGroup`,W.OptionGroup.__docgenInfo={description:``,displayName:`Select.OptionGroup`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`string`}},open:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/OptionGroup.tsx`,name:`TypeLiteral`}],description:``,name:`open`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{W.Option.displayName=`Select.Option`,W.Option.__docgenInfo={description:``,displayName:`Select.Option`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`value`,required:!0,tags:{},type:{name:`string`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}},disabled:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`disabled`,required:!1,tags:{},type:{name:`boolean | undefined`}},selected:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Option.tsx`,name:`TypeLiteral`}],description:``,name:`selected`,required:!1,tags:{},type:{name:`boolean | undefined`}}},tags:{}}}catch{}try{W.Filter.displayName=`Select.Filter`,W.Filter.__docgenInfo={description:``,displayName:`Select.Filter`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Filter.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}try{W.Searchbar.displayName=`Select.Searchbar`,W.Searchbar.__docgenInfo={description:``,displayName:`Select.Searchbar`,filePath:`C:/Users/bmjfd/Documents/Dev/cronus-ui/src/ui/Select/Select.tsx`,methods:[],props:{query:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`query`,required:!0,tags:{},type:{name:`string`}},setQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`setQuery`,required:!0,tags:{},type:{name:`(query: string) => void`}},onCreateNewOption:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`onCreateNewOption`,required:!1,tags:{},type:{name:`((value: string) => void) | undefined`}},canCreateFromQuery:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`canCreateFromQuery`,required:!1,tags:{},type:{name:`((value: string) => boolean) | undefined`}},class:{defaultValue:null,declarations:[{fileName:`cronus-ui/src/ui/Select/Searchbar.tsx`,name:`TypeLiteral`}],description:``,name:`class`,required:!1,tags:{},type:{name:`string | undefined`}}},tags:{}}}catch{}})),Oe,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),s(),_e(),S(),De(),Oe={title:`Ui/Select`,component:W,parameters:{layout:`centered`}},G=[`option-1`,`option-2`,`option-3`,`option-4`,`option-5`,`option-6`,`option-7`,`option-8`,`option-9`,`option-10`,`option-11`,`option-12`,`option-13`,`option-14`,`option-15`,`option-16`,`option-17`,`option-18`,`option-19`,`option-20`],K=e=>ae(e.replaceAll(`-`,` `)),q={render:()=>{let[e,n]=t(`option-1`);return v(W,{onChange:n,get value(){return e()},get children(){return[v(W.Trigger,{get children(){return K(e())}}),v(W.Content,{get children(){return v(W.List,{get children(){return v(_,{each:G,children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}})}})]}})}},J={render:()=>{let[e,n]=t(`option-1`);return v(W,{onChange:n,get value(){return e()},get children(){return[v(W.Trigger,{get children(){return K(e())}}),v(W.Content,{get children(){return v(W.List,{get children(){return[v(_,{each:G,children:e=>v(W.Option,{value:e,get children(){return K(e)}})}),v(W.OptionGroup,{label:`Group 1`,get children(){return v(_,{each:[`g-1-option-1`,`g-1-option-2`,`g-1-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}}),v(W.OptionGroup,{label:`Group 2`,get children(){return v(_,{each:[`g-2-option-1`,`g-2-option-2`,`g-2-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}}),v(W.OptionGroup,{label:`Group 3`,get children(){return v(_,{each:[`g-3-option-1`,`g-3-option-2`,`g-3-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}}),v(W.OptionGroup,{label:`Group 4`,get children(){return v(_,{each:[`g-4-option-1`,`g-4-option-2`,`g-4-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}})]}})}})]}})}},Y={render:()=>{let[e,n]=t(`option-1`);return v(W,{onChange:n,get value(){return e()},get children(){return[v(W.Trigger,{get children(){return K(e())}}),v(W.Content,{get children(){return v(W.List,{get children(){return[v(_,{each:G,children:e=>v(W.Option,{value:e,get children(){return K(e)}})}),v(W.OptionGroup,{label:`Group 1`,get children(){return[v(_,{each:[`g-1-option-1`,`g-1-option-2`,`g-1-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})}),v(W.OptionGroup,{label:`Group 2`,get children(){return v(_,{each:[`g-2-option-1`,`g-2-option-2`,`g-2-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}})]}}),v(W.OptionGroup,{label:`Group 3`,get children(){return v(_,{each:[`g-3-option-1`,`g-3-option-2`,`g-3-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}}),v(W.OptionGroup,{label:`Group 4`,get children(){return v(_,{each:[`g-4-option-1`,`g-4-option-2`,`g-4-option-3`],children:e=>v(W.Option,{value:e,get children(){return K(e)}})})}})]}})}})]}})}},X={render:()=>{let[e,n]=t([`option-1`,`option-2`]);return v(W,{autoClose:!1,onChange:t=>{if(e().includes(t)){n(e=>e.filter(e=>e!==t));return}n(e=>[...e,t])},get children(){return[v(W.Trigger,{get children(){return[`Select Option `,v(D,{get children(){return e().length}})]}}),v(W.Content,{get children(){return v(W.List,{get children(){return v(_,{each:G,children:t=>v(W.Option,{get selected(){return e().includes(t)},value:t,get children(){return K(t)}})})}})}})]}})}},Z={render:()=>{let[e,n]=t([`option-1`,`option-2`]),[r,i]=t(``),a=c(()=>{let e=r().trim().toLowerCase();return e?G.filter(t=>t.toLowerCase().includes(e)):G});return v(W,{autoClose:!1,onChange:t=>{if(e().includes(t)){n(e=>e.filter(e=>e!==t));return}n(e=>[...e,t])},get children(){return[v(W.Trigger,{get children(){return[`Select Option `,v(D,{get children(){return e().length}})]}}),v(W.Content,{get children(){return[v(W.Filter,{get children(){return v(W.Searchbar,{get query(){return r()},setQuery:i})}}),v(W.List,{get children(){return v(_,{get each(){return a()},children:t=>v(W.Option,{get selected(){return e().includes(t)},value:t,get children(){return K(t)}})})}})]}})]}})}},Q={render:()=>{let[e,n]=t([`option-1`,`option-2`,`option-3`]),[r,i]=t([`option-1`,`option-2`]),[a,o]=t(``),s=c(()=>{let t=e(),n=a().trim().toLowerCase();return n?t.filter(e=>e.toLowerCase().includes(n)):t}),l=t=>{e().includes(t)||(n(e=>[...e,t]),i(e=>[...e,t]))};return v(W,{autoClose:!1,onChange:e=>{if(r().includes(e)){i(t=>t.filter(t=>t!==e));return}i(t=>[...t,e])},get children(){return[v(W.Trigger,{get children(){return[`Select Option `,v(D,{get children(){return r().length}})]}}),v(W.Content,{get children(){return[v(W.Filter,{get children(){return v(W.Searchbar,{canCreateFromQuery:t=>!e().includes(t),onCreateNewOption:l,get query(){return a()},setQuery:o})}}),v(W.List,{get children(){return v(_,{get each(){return s()},children:e=>v(W.Option,{get selected(){return r().includes(e)},value:e,get children(){return K(e)}})})}})]}})]}})}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <Select.List>\r
                        <For each={OptionsList}>\r
                            {option => <Select.Option value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.List>\r
                </Select.Content>\r
            </Select>;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <Select.List>\r
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
                    </Select.List>\r
                </Select.Content>\r
            </Select>;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = createSignal('option-1');
    return <Select onChange={setValue} value={value()}>\r
                <Select.Trigger>{displayOption(value())}</Select.Trigger>\r
                <Select.Content>\r
                    <Select.List>\r
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
                    </Select.List>\r
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
                    <Select.List>\r
                        <For each={OptionsList}>\r
                            {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.List>\r
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
                    <Select.List>\r
                        <For each={filteredOptions()}>\r
                            {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.List>\r
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
                    <Select.List>\r
                        <For each={filteredOptions()}>\r
                            {option => <Select.Option selected={value().includes(option)} value={option}>\r
                                    {displayOption(option)}\r
                                </Select.Option>}\r
                        </For>\r
                    </Select.List>\r
                </Select.Content>\r
            </Select>;
  }
}`,...Q.parameters?.docs?.source}}},$=[`Single`,`OptionGroup`,`NestedOptionGroup`,`Multiple`,`WithSearchbar`,`Creatable`]}))();export{Q as Creatable,X as Multiple,Y as NestedOptionGroup,J as OptionGroup,q as Single,Z as WithSearchbar,$ as __namedExportsOrder,Oe as default};