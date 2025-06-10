"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8816],{4591:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(97538);const o=(0,i(51995).iK)(r.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,i)=>{i.d(t,{Z:()=>l}),i(67294);var r=i(51995),o=i(11965);const n=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,a=r.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  &::after {
    display: inline-block;
    margin-left: ${({theme:e})=>e.gridUnit}px;
    color: ${({theme:e})=>e.colors.error.base};
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
    content: '*';
  }
`;function l({children:e,htmlFor:t,required:i=!1,className:r}){const l=i?a:n;return(0,o.tZ)(l,{htmlFor:t,className:r},e)}},73684:(e,t,i)=>{i.d(t,{Z:()=>k});var r,o=i(73126),n=i(67294),a=i(77808),l=i(31097),s=i(51995),d=i(11965),c=i(61988),p=i(8272),m=i(13322);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},h.apply(this,arguments)}const u=({title:e,titleId:t,...i},o)=>n.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:o,"aria-labelledby":t},i),e?n.createElement("title",{id:t},e):null,r||(r=n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,n.forwardRef)(u);var b=i(4591),v=i(2857);const Z=(0,s.iK)(a.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,f=(0,s.iK)(a.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,x=(0,s.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,$=s.iK.div`
  display: flex;
  align-items: center;
`,y=(0,s.iK)(v.Z)`
  margin-bottom: 0;
`,w=d.iv`
  &.anticon > * {
    line-height: 0;
  }
`,k=({label:e,validationMethods:t,errorMessage:i,helpText:r,required:n=!1,hasTooltip:a=!1,tooltipText:s,id:h,className:u,visibilityToggle:v,...k})=>(0,d.tZ)(x,{className:u},(0,d.tZ)($,null,(0,d.tZ)(y,{htmlFor:h,required:n},e),a&&(0,d.tZ)(p.Z,{tooltip:`${s}`})),(0,d.tZ)(b.Z,{css:e=>((e,t)=>d.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!i),validateTrigger:Object.keys(t),validateStatus:i?"error":"success",help:i||r,hasFeedback:!!i},v||"password"===k.name?(0,d.tZ)(f,(0,o.Z)({},k,t,{iconRender:e=>e?(0,d.tZ)(l.Z,{title:(0,c.t)("Hide password.")},(0,d.tZ)(m.Z.EyeInvisibleOutlined,{iconSize:"m",css:w})):(0,d.tZ)(l.Z,{title:(0,c.t)("Show password.")},(0,d.tZ)(m.Z.EyeOutlined,{iconSize:"m",css:w})),role:"textbox"})):(0,d.tZ)(Z,(0,o.Z)({},k,t))))},49238:(e,t,i)=>{i.d(t,{l0:()=>l,xJ:()=>s.Z,lX:()=>d.Z,QA:()=>c.Z}),i(67294);var r=i(97538),o=i(51995),n=i(11965);const a=(0,o.iK)(r.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function l(e){return(0,n.tZ)(a,e)}var s=i(4591),d=i(2857),c=i(73684)},8272:(e,t,i)=>{i.d(t,{Z:()=>p}),i(67294);var r=i(51995),o=i(58593),n=i(13322),a=i(11965);const l=(0,r.iK)(o.u)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,s=r.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function p({tooltip:e,placement:t="right",trigger:i="hover",overlayStyle:r=d,bgColor:o=c,viewBox:p="0 -1 24 24"}){return(0,a.tZ)(l,{title:(0,a.tZ)(s,null,e),placement:t,trigger:i,overlayStyle:r,color:o},(0,a.tZ)(n.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:p}))}},9875:(e,t,i)=>{i.d(t,{II:()=>a,Kx:()=>s,Rn:()=>l});var r=i(51995),o=i(77808),n=i(36795);const a=(0,r.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,r.iK)(n.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,r.iK)(o.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},87183:(e,t,i)=>{i.d(t,{Y:()=>l});var r=i(51995),o=i(47933);const n=(0,r.iK)(o.ZP)`
  .ant-radio-inner {
    top: -1px;
    left: 2px;
    width: ${({theme:e})=>4*e.gridUnit}px;
    height: ${({theme:e})=>4*e.gridUnit}px;
    border-width: 2px;
    border-color: ${({theme:e})=>e.colors.grayscale.light2};
  }

  .ant-radio.ant-radio-checked {
    .ant-radio-inner {
      border-width: ${({theme:e})=>e.gridUnit+1}px;
      border-color: ${({theme:e})=>e.colors.primary.base};
    }

    .ant-radio-inner::after {
      background-color: ${({theme:e})=>e.colors.grayscale.light5};
      top: 0;
      left: 0;
      width: ${({theme:e})=>e.gridUnit+2}px;
      height: ${({theme:e})=>e.gridUnit+2}px;
    }
  }

  .ant-radio:hover,
  .ant-radio:focus {
    .ant-radio-inner {
      border-color: ${({theme:e})=>e.colors.primary.dark1};
    }
  }
`,a=(0,r.iK)(o.ZP.Group)`
  font-size: inherit;
`,l=Object.assign(n,{Group:a,Button:o.ZP.Button})},82342:(e,t,i)=>{i.d(t,{Z:()=>m});var r=i(67294),o=i(11965),n=i(51995),a=i(61988),l=i(9882),s=i(58593),d=i(49238),c=i(13322);const p=o.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,m=({name:e,label:t,description:i,validationErrors:m=[],renderTrigger:h=!1,rightNode:u,leftNode:g,onClick:b,hovered:v=!1,tooltipOnClick:Z=(()=>{}),warning:f,danger:x})=>{const{gridUnit:$,colors:y}=(0,n.Fg)(),w=(0,r.useRef)(!1),k=(0,r.useMemo)((()=>(m.length||(w.current=!0),w.current?m.length?y.error.base:"unset":y.alert.base)),[y.error.base,y.alert.base,m.length]);return t?(0,o.tZ)("div",{className:"ControlHeader"},(0,o.tZ)("div",{className:"pull-left"},(0,o.tZ)(d.lX,{css:e=>o.iv`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `},g&&(0,o.tZ)("span",null,g),(0,o.tZ)("span",{role:"button",tabIndex:0,onClick:b,style:{cursor:b?"pointer":""}},t)," ",f&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:f},(0,o.tZ)(c.Z.AlertSolid,{iconColor:y.alert.base,iconSize:"s"}))," "),x&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:x},(0,o.tZ)(c.Z.ErrorSolid,{iconColor:y.error.base,iconSize:"s"}))," "),(null==m?void 0:m.length)>0&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"error-tooltip",placement:"top",title:null==m?void 0:m.join(" ")},(0,o.tZ)(c.Z.ExclamationCircleOutlined,{css:o.iv`
                    ${p};
                    color: ${k};
                  `}))," "),v?(0,o.tZ)("span",{css:()=>o.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${$}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `},i&&(0,o.tZ)("span",null,(0,o.tZ)(s.u,{id:"description-tooltip",title:i,placement:"top"},(0,o.tZ)(c.Z.InfoCircleOutlined,{css:p,onClick:Z}))," "),h&&(0,o.tZ)("span",null,(0,o.tZ)(l.V,{label:(0,a.t)("bolt"),tooltip:(0,a.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null)),u&&(0,o.tZ)("div",{className:"pull-right"},u),(0,o.tZ)("div",{className:"clearfix"})):null}},89483:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var r=i(51995),o=i(5364),n=i(67294),a=i(1090),l=i(74448),s=i(11965);const d=(0,r.iK)(l.un)`
  display: flex;
  align-items: center;
  overflow-x: auto;

  & .ant-tag {
    margin-right: 0;
  }
`,c=r.iK.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:t})=>{var i;return e&&`border-color: ${null==(i=t.colors[e])?void 0:i.base}`}}
  }
`;function p(e){var t;const{setDataMask:i,setHoveredFilter:r,unsetHoveredFilter:l,setFocusedFilter:p,unsetFocusedFilter:m,setFilterActive:h,width:u,height:g,filterState:b,inputRef:v,isOverflowingFilterBar:Z=!1}=e,f=(0,n.useCallback)((e=>{const t=e&&e!==o.vM;i({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[i]);return(0,n.useEffect)((()=>{f(b.value)}),[b.value]),null!=(t=e.formData)&&t.inView?(0,s.tZ)(d,{width:u,height:g},(0,s.tZ)(c,{ref:v,validateStatus:b.validateStatus,onFocus:p,onBlur:m,onMouseEnter:r,onMouseLeave:l},(0,s.tZ)(a.ZP,{value:b.value||o.vM,name:"time_range",onChange:f,onOpenPopover:()=>h(!0),onClosePopover:()=>{h(!1),l(),m()},isOverflowingFilterBar:Z}))):null}},74448:(e,t,i)=>{i.d(t,{Am:()=>s,h2:()=>n,jp:()=>l,un:()=>a});var r=i(51995),o=i(4591);const n=0,a=r.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===n?"100%":`${e}px`};
`,l=(0,r.iK)(o.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=r.iK.div`
  color: ${({theme:e,status:t="error"})=>{var i;return null==(i=e.colors[t])?void 0:i.base}};
`}}]);
//# sourceMappingURL=5518077e37fd32dfbbd8.chunk.js.map