(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5331],{74082:e=>{const t=[null];e.exports=t.length<=1?t[0]:t},29487:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(73126),a=r(11965),o=(r(67294),r(4863)),i=r(51995),s=r(13322);function l(e){const{type:t="info",description:r,showIcon:l=!0,closable:d=!0,roomBelow:c=!1,children:u}=e,p=(0,i.Fg)(),{colors:h,typography:m,gridUnit:g}=p,{alert:b,error:f,info:v,success:y}=h;let $=v,x=s.Z.InfoSolid;return"error"===t?($=f,x=s.Z.ErrorSolid):"warning"===t?($=b,x=s.Z.AlertSolid):"success"===t&&($=y,x=s.Z.CircleCheckSolid),(0,a.tZ)(o.default,(0,n.Z)({role:"alert",showIcon:l,icon:(0,a.tZ)(x,{"aria-label":`${t} icon`}),closeText:d&&(0,a.tZ)(s.Z.XSmall,{"aria-label":"close icon"}),css:(0,a.iv)({marginBottom:c?4*g:0,padding:`${2*g}px ${3*g}px`,alignItems:"flex-start",border:0,backgroundColor:$.light2,"& .ant-alert-icon":{marginRight:2*g},"& .ant-alert-message":{color:$.dark2,fontSize:m.sizes.m,fontWeight:r?m.weights.bold:m.weights.normal},"& .ant-alert-description":{color:$.dark2,fontSize:m.sizes.m}},"","")},e),u)}},94670:(e,t,r)=>{"use strict";r.d(t,{Ad:()=>f,YH:()=>g,Z5:()=>v,cE:()=>m,iO:()=>p,ry:()=>b,up:()=>h});var n=r(73126),a=r(67294),o=r(53239),i=r(67913),s=r(38325),l=r(57),d=r(11965);o.config.setModuleUrl("ace/mode/css_worker",l);const c={"mode/sql":()=>r.e(8883).then(r.t.bind(r,48883,23)),"mode/markdown":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(6061)]).then(r.t.bind(r,66061,23)),"mode/css":()=>Promise.all([r.e(5802),r.e(4972)]).then(r.t.bind(r,94972,23)),"mode/json":()=>r.e(8750).then(r.t.bind(r,58750,23)),"mode/yaml":()=>r.e(741).then(r.t.bind(r,60741,23)),"mode/html":()=>Promise.all([r.e(9794),r.e(5802),r.e(4832),r.e(1258)]).then(r.t.bind(r,71258,23)),"mode/javascript":()=>Promise.all([r.e(9794),r.e(4579)]).then(r.t.bind(r,54579,23)),"theme/textmate":()=>r.e(2089).then(r.t.bind(r,2089,23)),"theme/github":()=>r.e(440).then(r.t.bind(r,50440,23)),"ext/language_tools":()=>r.e(5335).then(r.t.bind(r,75335,23)),"ext/searchbox":()=>r.e(8656).then(r.t.bind(r,68656,23))};function u(e,{defaultMode:t,defaultTheme:l,defaultTabSize:u=2,fontFamily:p="Menlo, Consolas, Courier New, Ubuntu Mono, source-code-pro, Lucida Console, monospace",placeholder:h}={}){return(0,i.Z)((async()=>{var i,h;const{default:m}=await Promise.resolve().then(r.bind(r,74981));await Promise.all(e.map((e=>c[e]())));const g=t||(null==(i=e.find((e=>e.startsWith("mode/"))))?void 0:i.replace("mode/","")),b=l||(null==(h=e.find((e=>e.startsWith("theme/"))))?void 0:h.replace("theme/",""));return(0,a.forwardRef)((function({keywords:e,mode:t=g,theme:r=b,tabSize:i=u,defaultValue:l="",...c},h){const f=(0,o.acequire)("ace/ext/language_tools"),v=(0,s.Z)((e=>{const r={getCompletions:(r,n,a,o,i)=>{Number.isNaN(parseInt(o,10))&&n.getMode().$id===`ace/mode/${t}`&&i(null,e)}};f.setCompleters([r])}));return(0,a.useEffect)((()=>{e&&v(e)}),[e,v]),(0,d.tZ)(m,(0,n.Z)({ref:h,mode:t,theme:r,tabSize:i,defaultValue:l,setOptions:{fontFamily:p}},c))}))}),h)}const p=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"]),h=u(["mode/sql","theme/github","ext/language_tools","ext/searchbox"],{placeholder:()=>(0,d.tZ)("div",{style:{height:"100%"}},(0,d.tZ)("div",{style:{width:41,height:"100%",background:"#e8e8e8"}}),(0,d.tZ)("div",{className:"ace_content"}))}),m=u(["mode/markdown","theme/textmate"]),g=u(["mode/markdown","mode/sql","mode/json","mode/html","mode/javascript","theme/textmate"]),b=u(["mode/css","theme/github"]),f=u(["mode/json","theme/github"]),v=u(["mode/json","mode/yaml","theme/github"])},67913:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(73126),a=r(67294),o=r(38703),i=r(11965);function s({width:e,height:t,showLoadingForImport:r=!1,placeholderStyle:n}){return t&&(0,i.tZ)("div",{key:"async-asm-placeholder",style:{width:e,height:t,...n}},r&&(0,i.tZ)(o.Z,{position:"floating"}))||null}function l(e,t=s){let r,o;function l(){return r||(r=e instanceof Promise?e:e()),o||r.then((e=>{o=e.default||e})),r}const d=(0,a.forwardRef)((function(e,r){const[s,d]=(0,a.useState)(void 0!==o);(0,a.useEffect)((()=>{let e=!0;return s||l().then((()=>{e&&d(!0)})),()=>{e=!1}}));const c=o||t;return c?(0,i.tZ)(c,(0,n.Z)({ref:c===o?r:null},e)):null}));return d.preload=l,d}},43700:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i}),r(67294);var n=r(51995),a=r(46445),o=r(11965);const i=Object.assign((0,n.iK)((({light:e,bigger:t,bold:r,animateArrows:n,...i})=>(0,o.tZ)(a.Z,i)))`
    .ant-collapse-item {
      .ant-collapse-header {
        font-weight: ${({bold:e,theme:t})=>e?t.typography.weights.bold:t.typography.weights.normal};
        font-size: ${({bigger:e,theme:t})=>e?4*t.gridUnit+"px":"inherit"};

        .ant-collapse-arrow svg {
          transition: ${({animateArrows:e})=>e?"transform 0.24s":"none"};
        }

        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(90deg) !important;\n            }\n          "}

        ${({light:e,theme:t})=>e&&`\n            color: ${t.colors.grayscale.light4};\n            .ant-collapse-arrow svg {\n              color: ${t.colors.grayscale.light4};\n            }\n          `}

        ${({ghost:e,bordered:t,theme:r})=>e&&t&&`\n            border-bottom: 1px solid ${r.colors.grayscale.light3};\n          `}
      }
      .ant-collapse-content {
        .ant-collapse-content-box {
          .loading.inline {
            margin: ${({theme:e})=>12*e.gridUnit}px auto;
            display: block;
          }
        }
      }
    }
    .ant-collapse-item-active {
      .ant-collapse-header {
        ${({expandIconPosition:e})=>e&&"right"===e&&"\n            .anticon.anticon-right.ant-collapse-arrow > svg {\n              transform: rotate(-90deg) !important;\n            }\n          "}
      }
    }
  `,{Panel:a.Z.Panel})},4591:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(97538);const a=(0,r(51995).iK)(n.Z.Item)`
  ${({theme:e})=>`\n    .ant-form-item-label {\n      padding-bottom: ${e.gridUnit}px;\n      & > label {\n        text-transform: uppercase;\n        font-size: ${e.typography.sizes.s}px;\n        color: ${e.colors.grayscale.base};\n\n        &.ant-form-item-required:not(.ant-form-item-required-mark-optional) {\n          &::before {\n            display: none;\n          }\n          &::after {\n            display: inline-block;\n            color: ${e.colors.error.base};\n            font-size: ${e.typography.sizes.s}px;\n            content: '*';\n          }\n        }\n      }\n    }\n  `}
`},2857:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s}),r(67294);var n=r(51995),a=r(11965);const o=n.iK.label`
  text-transform: uppercase;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
`,i=n.iK.label`
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
`;function s({children:e,htmlFor:t,required:r=!1,className:n}){const s=r?i:o;return(0,a.tZ)(s,{htmlFor:t,className:n},e)}},73684:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z});var n,a=r(73126),o=r(67294),i=r(77808),s=r(31097),l=r(51995),d=r(11965),c=r(61988),u=r(8272),p=r(13322);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}const m=({title:e,titleId:t,...r},a)=>o.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,n||(n=o.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 7a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V8a1 1 0 0 0-1-1m0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9.71-7.44-5.27-5.27a1.05 1.05 0 0 0-.71-.29H8.27a1.05 1.05 0 0 0-.71.29L2.29 7.56a1.05 1.05 0 0 0-.29.71v7.46c.004.265.107.518.29.71l5.27 5.27c.192.183.445.286.71.29h7.46a1.05 1.05 0 0 0 .71-.29l5.27-5.27a1.05 1.05 0 0 0 .29-.71V8.27a1.05 1.05 0 0 0-.29-.71M20 15.31 15.31 20H8.69L4 15.31V8.69L8.69 4h6.62L20 8.69z",clipRule:"evenodd"}))),g=(0,o.forwardRef)(m);var b=r(4591),f=r(2857);const v=(0,l.iK)(i.Z)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,y=(0,l.iK)(i.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,$=(0,l.iK)("div")`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  .ant-form-item {
    margin-bottom: 0;
  }
`,x=l.iK.div`
  display: flex;
  align-items: center;
`,_=(0,l.iK)(f.Z)`
  margin-bottom: 0;
`,w=d.iv`
  &.anticon > * {
    line-height: 0;
  }
`,Z=({label:e,validationMethods:t,errorMessage:r,helpText:n,required:o=!1,hasTooltip:i=!1,tooltipText:l,id:h,className:m,visibilityToggle:f,...Z})=>(0,d.tZ)($,{className:m},(0,d.tZ)(x,null,(0,d.tZ)(_,{htmlFor:h,required:o},e),i&&(0,d.tZ)(u.Z,{tooltip:`${l}`})),(0,d.tZ)(b.Z,{css:e=>((e,t)=>d.iv`
  .ant-form-item-children-icon {
    display: none;
  }
  ${t&&`.ant-form-item-control-input-content {\n      position: relative;\n      &:after {\n        content: ' ';\n        display: inline-block;\n        background: ${e.colors.error.base};\n        mask: url(${g});\n        mask-size: cover;\n        width: ${4*e.gridUnit}px;\n        height: ${4*e.gridUnit}px;\n        position: absolute;\n        right: ${1.25*e.gridUnit}px;\n        top: ${2.75*e.gridUnit}px;\n      }\n    }`}
`)(e,!!r),validateTrigger:Object.keys(t),validateStatus:r?"error":"success",help:r||n,hasFeedback:!!r},f||"password"===Z.name?(0,d.tZ)(y,(0,a.Z)({},Z,t,{iconRender:e=>e?(0,d.tZ)(s.Z,{title:(0,c.t)("Hide password.")},(0,d.tZ)(p.Z.EyeInvisibleOutlined,{iconSize:"m",css:w})):(0,d.tZ)(s.Z,{title:(0,c.t)("Show password.")},(0,d.tZ)(p.Z.EyeOutlined,{iconSize:"m",css:w})),role:"textbox"})):(0,d.tZ)(v,(0,a.Z)({},Z,t))))},49238:(e,t,r)=>{"use strict";r.d(t,{l0:()=>s,xJ:()=>l.Z,lX:()=>d.Z,QA:()=>c.Z}),r(67294);var n=r(97538),a=r(51995),o=r(11965);const i=(0,a.iK)(n.Z)`
  &.ant-form label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }
  .ant-form-item {
    margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
  }
`;function s(e){return(0,o.tZ)(i,e)}var l=r(4591),d=r(2857),c=r(73684)},85931:(e,t,r)=>{"use strict";r.d(t,{m:()=>s});var n=r(73126),a=(r(67294),r(73727)),o=r(23525),i=r(11965);const s=({to:e,component:t,replace:r,innerRef:s,children:l,...d})=>"string"==typeof e&&(0,o.TO)(e)?(0,i.tZ)("a",(0,n.Z)({href:(0,o.en)(e)},d),l):(0,i.tZ)(a.rU,(0,n.Z)({to:e,component:t,replace:r,innerRef:s},d),l)},8272:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u}),r(67294);var n=r(51995),a=r(58593),o=r(13322),i=r(11965);const s=(0,n.iK)(a.u)`
  cursor: pointer;
  path:first-of-type {
    fill: ${({theme:e})=>e.colors.grayscale.base};
  }
`,l=n.iK.span`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,d={fontSize:"12px",lineHeight:"16px"},c="rgba(0,0,0,0.9)";function u({tooltip:e,placement:t="right",trigger:r="hover",overlayStyle:n=d,bgColor:a=c,viewBox:u="0 -1 24 24"}){return(0,i.tZ)(s,{title:(0,i.tZ)(l,null,e),placement:t,trigger:r,overlayStyle:n,color:a},(0,i.tZ)(o.Z.InfoSolidSmall,{className:"info-solid-small",viewBox:u}))}},9875:(e,t,r)=>{"use strict";r.d(t,{II:()=>i,Kx:()=>l,Rn:()=>s});var n=r(51995),a=r(77808),o=r(36795);const i=(0,n.iK)(a.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,s=(0,n.iK)(o.Z)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`,l=(0,n.iK)(a.Z.TextArea)`
  border: 1px solid ${({theme:e})=>e.colors.secondary.light3};
  border-radius: ${({theme:e})=>e.borderRadius}px;
`},37921:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(73126),a=r(11965),o=(r(67294),r(4715)),i=r(51995);function s(e){const t=(0,i.Fg)(),{colors:r,transitionTiming:s}=t,{type:l="default",onClick:d,children:c,...u}=e,{alert:p,primary:h,secondary:m,grayscale:g,success:b,warning:f,error:v,info:y}=r;let $=g.light3,x=d?h.light2:g.light3,_=d?g.light2:"transparent",w=d?h.light1:"transparent",Z=g.dark1;if("default"!==l){let e;Z=g.light4,"alert"===l?(Z=g.dark1,e=p):e="success"===l?b:"warning"===l?f:"danger"===l?v:"info"===l?y:"secondary"===l?m:h,$=e.base,x=d?e.dark1:e.base,_=d?e.dark1:"transparent",w=d?e.dark2:"transparent"}return(0,a.tZ)(o.Vp,(0,n.Z)({onClick:d},u,{css:(0,a.iv)({transition:`background-color ${s}s`,whiteSpace:"nowrap",cursor:d?"pointer":"default",overflow:"hidden",textOverflow:"ellipsis",backgroundColor:$,borderColor:_,borderRadius:21,padding:"0.35em 0.8em",lineHeight:1,color:Z,maxWidth:"100%","&:hover":{backgroundColor:x,borderColor:w,opacity:1}},"","")}),c)}},83862:(e,t,r)=>{"use strict";r.d(t,{MainNav:()=>d,Menu:()=>l});var n=r(51995),a=r(43865);const o=(0,n.iK)(a.Z.Item)`
  > a {
    text-decoration: none;
  }

  &.ant-menu-item {
    height: ${({theme:e})=>8*e.gridUnit}px;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
    a {
      border-bottom: none;
      transition: background-color ${({theme:e})=>e.transitionTiming}s;
      &:after {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 50%;
        width: 0;
        height: 3px;
        opacity: 0;
        transform: translateX(-50%);
        transition: all ${({theme:e})=>e.transitionTiming}s;
        background-color: ${({theme:e})=>e.colors.primary.base};
      }
      &:focus {
        border-bottom: none;
        background-color: transparent;
        @media (max-width: 767px) {
          background-color: ${({theme:e})=>e.colors.primary.light5};
        }
      }
    }
  }

  &.ant-menu-item,
  &.ant-dropdown-menu-item {
    span[role='button'] {
      display: inline-block;
      width: 100%;
    }
    transition-duration: 0s;
  }
`,i=(0,n.iK)(a.Z)`
  line-height: 51px;
  border: none;

  & > .ant-menu-item,
  & > .ant-menu-submenu {
    vertical-align: inherit;
    &:hover {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    &:hover {
      border-bottom: none;
    }
  }

  &:not(.ant-menu-dark) > .ant-menu-submenu,
  &:not(.ant-menu-dark) > .ant-menu-item {
    margin: 0px;
  }

  & > .ant-menu-item > a {
    padding: ${({theme:e})=>4*e.gridUnit}px;
  }
`,s=(0,n.iK)(a.Z.SubMenu)`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  border-bottom: none;
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    background-color: ${({theme:e})=>e.colors.primary.light5};
    .ant-menu-submenu-title {
      color: ${({theme:e})=>e.colors.grayscale.dark1};
      background-color: ${({theme:e})=>e.colors.primary.light5};
      border-bottom: none;
      margin: 0;
      &:after {
        opacity: 1;
        width: calc(100% - 1);
      }
    }
  }
  .ant-menu-submenu-title {
    position: relative;
    top: ${({theme:e})=>-e.gridUnit-3}px;
    &:after {
      content: '';
      position: absolute;
      bottom: -3px;
      left: 50%;
      width: 0;
      height: 3px;
      opacity: 0;
      transform: translateX(-50%);
      transition: all ${({theme:e})=>e.transitionTiming}s;
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }
  .ant-menu-submenu-arrow {
    top: 67%;
  }
  & > .ant-menu-submenu-title {
    padding: 0 ${({theme:e})=>6*e.gridUnit}px 0
      ${({theme:e})=>3*e.gridUnit}px !important;
    span[role='img'] {
      position: absolute;
      right: ${({theme:e})=>-e.gridUnit-2}px;
      top: ${({theme:e})=>5.25*e.gridUnit}px;
      svg {
        font-size: ${({theme:e})=>6*e.gridUnit}px;
        color: ${({theme:e})=>e.colors.grayscale.base};
      }
    }
    & > span {
      position: relative;
      top: 7px;
    }
    &:hover {
      color: ${({theme:e})=>e.colors.primary.base};
    }
  }
`,l=Object.assign(a.Z,{Item:o}),d=Object.assign(i,{Item:o,SubMenu:s,Divider:a.Z.Divider,ItemGroup:a.Z.ItemGroup})},87183:(e,t,r)=>{"use strict";r.d(t,{Y:()=>s});var n=r(51995),a=r(47933);const o=(0,n.iK)(a.ZP)`
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
`,i=(0,n.iK)(a.ZP.Group)`
  font-size: inherit;
`,s=Object.assign(o,{Group:i,Button:a.ZP.Button})},71262:(e,t,r)=>{"use strict";r.d(t,{Xv:()=>h,cl:()=>g,ZP:()=>b});var n=r(73126),a=(r(67294),r(11965)),o=r(51995),i=r(20838),s=r(13322);const l=({animated:e=!1,fullWidth:t=!0,allowOverflow:r=!0,...o})=>(0,a.tZ)(i.default,(0,n.Z)({animated:e},o,{css:e=>a.iv`
      overflow: ${r?"visible":"hidden"};

      .ant-tabs-content-holder {
        overflow: ${r?"visible":"auto"};
      }
      .ant-tabs-tab {
        flex: 1 1 auto;
        &.ant-tabs-tab-active .ant-tabs-tab-btn {
          color: inherit;
        }
        &:hover {
          .anchor-link-container {
            cursor: pointer;
            .fa.fa-link {
              visibility: visible;
            }
          }
        }
        .short-link-trigger.btn {
          padding: 0 ${e.gridUnit}px;
          & > .fa.fa-link {
            top: 0;
          }
        }
      }
      ${t&&a.iv`
        .ant-tabs-nav-list {
          width: 100%;
        }
      `};

      .ant-tabs-tab-btn {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        font-size: ${e.typography.sizes.s}px;
        text-align: center;
        text-transform: uppercase;
        user-select: none;
        .required {
          margin-left: ${e.gridUnit/2}px;
          color: ${e.colors.error.base};
        }
      }
      .ant-tabs-ink-bar {
        background: ${e.colors.secondary.base};
      }
    `})),d=(0,o.iK)(i.default.TabPane)``,c=Object.assign(l,{TabPane:d}),u=(0,o.iK)(l)`
  ${({theme:e,fullWidth:t})=>`\n    .ant-tabs-content-holder {\n      background: ${e.colors.grayscale.light5};\n    }\n\n    & > .ant-tabs-nav {\n      margin-bottom: 0;\n    }\n\n    .ant-tabs-tab-remove {\n      padding-top: 0;\n      padding-bottom: 0;\n      height: ${6*e.gridUnit}px;\n    }\n\n    ${t?a.iv`
            .ant-tabs-nav-list {
              width: 100%;
            }
          `:""}\n  `}
`,p=(0,o.iK)(s.Z.CancelX)`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,h=Object.assign(u,{TabPane:d});h.defaultProps={type:"editable-card",fullWidth:!1,animated:{inkBar:!0,tabPane:!1}},h.TabPane.defaultProps={closeIcon:(0,a.tZ)(p,{role:"button",tabIndex:0})};const m=(0,o.iK)(h)`
  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab {
    margin: 0 ${({theme:e})=>4*e.gridUnit}px;
    padding: ${({theme:e})=>`${3*e.gridUnit}px ${e.gridUnit}px`};
    background: transparent;
    border: none;
  }

  &.ant-tabs-card > .ant-tabs-nav .ant-tabs-ink-bar {
    visibility: visible;
  }

  .ant-tabs-tab-btn {
    font-size: ${({theme:e})=>e.typography.sizes.m}px;
  }

  .ant-tabs-tab-remove {
    margin-left: 0;
    padding-right: 0;
  }

  .ant-tabs-nav-add {
    min-width: unset !important;
    background: transparent !important;
    border: none !important;
  }
`,g=Object.assign(m,{TabPane:d}),b=c},18451:(e,t,r)=>{"use strict";r.d(t,{c:()=>a});var n=r(28216);function a(){return(0,n.v9)((e=>{var t;return null==e||null==(t=e.common)?void 0:t.conf}))}},39589:(e,t,r)=>{"use strict";var n,a;r.d(t,{Z:()=>a,g:()=>n}),function(e){e.Charts="CHARTS",e.Dashboards="DASHBOARDS",e.Recents="RECENTS",e.SavedQueries="SAVED_QUERIES"}(n||(n={})),function(e){e.GoogleSheets="gsheets",e.DbConnection="dbconnection",e.DatasetCreation="datasetCreation"}(a||(a={}))},8911:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(()=>{try{return r(74082)||{}}catch(e){return{}}})()},34858:(e,t,r)=>{"use strict";r.d(t,{LE:()=>g,NE:()=>v,PW:()=>b,Yi:()=>m,_l:()=>E,bR:()=>$,cb:()=>k,fF:()=>y,h1:()=>C,jb:()=>_,rM:()=>x,xx:()=>Z,z:()=>w});var n=r(15926),a=r.n(n),o=r(67294),i=r(31069),s=r(61988),l=r(22102),d=r(40768),c=r(10222),u=r(98286),p=r(8911);const h=e=>"string"==typeof e?e:Object.entries(e).map((([e,t])=>Array.isArray(t)?`(${e}) ${t.join(", ")}`:`(${e}) ${t}`)).join("\n");function m(e,t,r,n=!0,l=[],c,u=!0){const[p,h]=(0,o.useState)({count:0,collection:l,loading:u,lastFetchDataConfig:null,permissions:[],bulkSelectEnabled:!1});function m(e){h((t=>({...t,...e})))}(0,o.useEffect)((()=>{n&&i.Z.get({endpoint:`/api/v1/${e}/_info?q=${a().encode({keys:["permissions"]})}`}).then((({json:e={}})=>{m({permissions:e.permissions})}),(0,d.v$)((e=>r((0,s.t)("An error occurred while fetching %s info: %s",t,e)))))}),[]);const g=(0,o.useCallback)((({pageIndex:n,pageSize:o,sortBy:l,filters:u})=>{m({lastFetchDataConfig:{filters:u,pageIndex:n,pageSize:o,sortBy:l},loading:!0});const p=(c||[]).concat(u).map((({id:e,operator:t,value:r})=>({col:e,opr:t,value:r&&"object"==typeof r&&"value"in r?r.value:r}))),h=a().encode_uri({order_column:l[0].id,order_direction:l[0].desc?"desc":"asc",page:n,page_size:o,...p.length?{filters:p}:{}});return i.Z.get({endpoint:`/api/v1/${e}/?q=${h}`}).then((({json:e={}})=>{m({collection:e.result,count:e.count,lastFetched:(new Date).toISOString()})}),(0,d.v$)((e=>r((0,s.t)("An error occurred while fetching %ss: %s",t,e))))).finally((()=>{m({loading:!1})}))}),[c]);return{state:{loading:p.loading,resourceCount:p.count,resourceCollection:p.collection,bulkSelectEnabled:p.bulkSelectEnabled,lastFetched:p.lastFetched},setResourceCollection:e=>m({collection:e}),hasPerm:function(e){return!!p.permissions.length&&Boolean(p.permissions.find((t=>t===e)))},fetchData:g,toggleBulkSelect:function(){m({bulkSelectEnabled:!p.bulkSelectEnabled})},refreshData:e=>p.lastFetchDataConfig?g(p.lastFetchDataConfig):e?g(e):null}}function g(e,t,r,n=""){const[a,l]=(0,o.useState)({loading:!1,resource:null,error:null});function c(e){l((t=>({...t,...e})))}return{state:a,setResource:e=>c({resource:e}),fetchResource:(0,o.useCallback)((a=>{c({loading:!0});const o=`/api/v1/${e}/${a}`,l=""!==n?`${o}/${n}`:o;return i.Z.get({endpoint:l}).then((({json:e={}})=>(c({resource:e.result,error:null}),e.result)),(0,d.v$)((e=>{r((0,s.t)("An error occurred while fetching %ss: %s",t,h(e))),c({error:e})}))).finally((()=>{c({loading:!1})}))}),[r,e,t]),createResource:(0,o.useCallback)(((n,a=!1)=>(c({loading:!0}),i.Z.post({endpoint:`/api/v1/${e}/`,body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(c({resource:{id:e.id,...e.result},error:null}),e.id)),(0,d.v$)((e=>{a||r((0,s.t)("An error occurred while creating %ss: %s",t,h(e))),c({error:e})}))).finally((()=>{c({loading:!1})})))),[r,e,t]),updateResource:(0,o.useCallback)(((n,a,o=!1,l=!0)=>(l&&c({loading:!0}),i.Z.put({endpoint:`/api/v1/${e}/${n}`,body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((({json:e={}})=>(c({resource:{...e.result,id:e.id},error:null}),e.result)),(0,d.v$)((e=>(o||r((0,s.t)("An error occurred while fetching %ss: %s",t,JSON.stringify(e))),c({error:e}),e)))).finally((()=>{l&&c({loading:!1})})))),[r,e,t]),clearError:()=>c({error:null})}}function b(e,t,r){const[n,a]=(0,o.useState)({loading:!1,passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1});function l(e){a((t=>({...t,...e})))}return{state:n,importResource:(0,o.useCallback)(((n,a={},o={},c={},p={},h=!1)=>{l({loading:!0,failed:!1});const m=new FormData;m.append("formData",n);const g=(0,s.t)("Please re-export your file and try importing again");return a&&m.append("passwords",JSON.stringify(a)),h&&m.append("overwrite","true"),o&&m.append("ssh_tunnel_passwords",JSON.stringify(o)),c&&m.append("ssh_tunnel_private_keys",JSON.stringify(c)),p&&m.append("ssh_tunnel_private_key_passwords",JSON.stringify(p)),i.Z.post({endpoint:`/api/v1/${e}/import/`,body:m,headers:{Accept:"application/json"}}).then((()=>(l({passwordsNeeded:[],alreadyExists:[],sshPasswordNeeded:[],sshPrivateKeyNeeded:[],sshPrivateKeyPasswordNeeded:[],failed:!1}),!0))).catch((e=>(0,u.O$)(e).then((e=>(l({failed:!0}),e.errors?((0,d.Er)(e.errors)?r((0,s.t)("An error occurred while importing %s: %s",t,[...e.errors.map((e=>e.message)),g].join(".\n"))):l({passwordsNeeded:(0,d.$u)(e.errors),sshPasswordNeeded:(0,d.dK)(e.errors),sshPrivateKeyNeeded:(0,d.ru)(e.errors),sshPrivateKeyPasswordNeeded:(0,d.z9)(e.errors),alreadyExists:(0,d.cE)(e.errors)}),!1):(r((0,s.t)("An error occurred while importing %s: %s",t,e.message||e.error)),!1)))))).finally((()=>{l({loading:!1})}))}),[])}}const f={chart:(0,l.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/chart/favorite_status/"}),dashboard:(0,l.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/dashboard/favorite_status/"}),tag:(0,l.Z)({requestType:"rison",method:"GET",endpoint:"/api/v1/tag/favorite_status/"})};function v(e,t,r){const[n,a]=(0,o.useState)({}),l=e=>a((t=>({...t,...e})));return(0,o.useEffect)((()=>{t.length&&f[e](t).then((({result:e})=>{const t=e.reduce(((e,t)=>(e[t.id]=t.value,e)),{});l(t)}),(0,d.v$)((e=>r((0,s.t)("There was an error fetching the favorite status: %s",e)))))}),[t,e,r]),[(0,o.useCallback)(((t,n)=>{const a=`/api/v1/${e}/${t}/favorites/`;(n?i.Z.delete({endpoint:a}):i.Z.post({endpoint:a})).then((()=>{l({[t]:!n})}),(0,d.v$)((e=>r((0,s.t)("There was an error saving the favorite status: %s",e)))))}),[e]),n]}const y=(e,t)=>{const[r,n]=(0,o.useState)(null);return{sliceCurrentlyEditing:r,handleChartUpdated:function(r){const n=t.map((e=>e.id===r.id?{...e,...r}:e));e(n)},openChartEditModal:function(e){n({slice_id:e.id,slice_name:e.slice_name,description:e.description,cache_timeout:e.cache_timeout,certified_by:e.certified_by,certification_details:e.certification_details,is_managed_externally:e.is_managed_externally})},closeChartEditModal:function(){n(null)}}},$=(e,t,r)=>{(0,c.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${e}`))).then((()=>{r((0,s.t)("Link Copied!"))})).catch((()=>{t((0,s.t)("Sorry, your browser does not support copying."))}))},x=()=>p.Z.DB_IMAGES,_=()=>p.Z.DB_CONNECTION_ALERTS,w=()=>p.Z.DB_CONNECTION_DOC_LINKS,Z=(e,t,r)=>{i.Z.post({endpoint:"api/v1/database/test_connection/",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((()=>{r((0,s.t)("Connection looks good!"))}),(0,d.v$)((e=>{t((0,s.t)("ERROR: %s",h(e)))})))};function k(){const[e,t]=(0,o.useState)(null);return[e,(0,o.useCallback)((()=>{i.Z.get({endpoint:"/api/v1/database/available/"}).then((({json:e})=>{t(e)}))}),[t])]}const S=e=>e&&Array.isArray(null==e?void 0:e.catalog)?{...e,catalog:Object.assign({},...e.catalog.map((e=>({[e.name]:e.value}))))}:e;function C(){const[e,t]=(0,o.useState)(null);return[e,(0,o.useCallback)(((e,r=!1)=>{var n;return null!=e&&null!=(n=e.parameters)&&n.ssh?(t(null),[]):i.Z.post({endpoint:"/api/v1/database/validate_parameters/",body:JSON.stringify(S(e)),headers:{"Content-Type":"application/json"}}).then((()=>{t(null)})).catch((e=>{if("function"==typeof e.json)return e.json().then((({errors:e=[]})=>{const n=e.filter((e=>!["CONNECTION_MISSING_PARAMETERS_ERROR","CONNECTION_ACCESS_DENIED_ERROR"].includes(e.error_type)||r)).reduce(((e,{error_type:t,extra:r,message:n})=>{var a,o;return r.catalog?r.catalog.name?{...e,error_type:t,[r.catalog.idx]:{name:n}}:r.catalog.url?{...e,error_type:t,[r.catalog.idx]:{url:n}}:{...e,error_type:t,[r.catalog.idx]:{name:n,url:n}}:r.invalid?{...e,[r.invalid[0]]:n,error_type:t}:r.missing?{...e,error_type:t,...Object.assign({},...r.missing.map((e=>({[e]:"This is a required field"}))))}:null!=(a=r.issue_codes)&&a.length?{...e,error_type:t,description:n||(null==(o=r.issue_codes[0])?void 0:o.message)}:e}),{});return t(n),n}));console.error(e)}))}),[t]),t]}const E=(e,t,r)=>{var n;return r?null==(n=e.reports[t])?void 0:n[r]:null}},12:(e,t,r)=>{"use strict";var n,a;r.d(t,{F:()=>n,J:()=>a}),function(e){e.Favorite="Favorite",e.Mine="Mine",e.Other="Other",e.Viewed="Viewed",e.Created="Created",e.Edited="Edited"}(n||(n={})),function(e){e.Id="id",e.ChangedOn="changed_on",e.ChangedBy="changed_by",e.Database="database",e.DatabaseName="database.database_name",e.Schema="schema",e.Sql="sql",e.ExecutedSql="executed_sql",e.SqlTables="sql_tables",e.Status="status",e.TabName="tab_name",e.User="user",e.UserFirstName="user.first_name",e.StartTime="start_time",e.EndTime="end_time",e.Rows="rows",e.TmpTableName="tmp_table_name",e.TrackingUrl="tracking_url"}(a||(a={}))},40768:(e,t,r)=>{"use strict";r.d(t,{$u:()=>D,B1:()=>_,Er:()=>V,Gm:()=>C,IB:()=>O,IV:()=>y,Iu:()=>E,Ld:()=>x,Mc:()=>G,ZB:()=>N,_L:()=>T,cE:()=>B,dK:()=>q,eX:()=>f,if:()=>J,iv:()=>j,mq:()=>U,ru:()=>F,tm:()=>Z,v$:()=>S,wk:()=>k,xF:()=>w,xL:()=>R,z9:()=>M});var n=r(25325),a=r.n(n),o=r(51995),i=r(31069),s=r(61988),l=r(68492),d=r(11965),c=r(15926),u=r.n(c),p=r(98286),h=r(8911),m=r(12617),g=r(39589),b=r(12);(()=>{const e=u(),t=[];for(let e=0;e<16;e+=1)for(let r=0;r<16;r+=1){if(e+r===0)continue;const n=String.fromCharCode(16*e+r);/\w|[-_./~]/.test(n)||t.push(`\\u00${e.toString(16)}${r.toString(16)}`)}e.not_idchar=t.join(""),e.not_idstart="-0123456789";const r=`[^${e.not_idstart}${e.not_idchar}][^${e.not_idchar}]*`;e.id_ok=new RegExp(`^${r}$`),e.next_id=new RegExp(r,"g")})();const f=o.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};
`,v=e=>(t,r,n,a)=>async(n="",o,s)=>{var l;const d=`/api/v1/${t}/${e}/${r}`,c=u().encode_uri({filter:n,page:o,page_size:s}),{json:p={}}=await i.Z.get({endpoint:`${d}?q=${c}`});let h=!1;const m=a?{label:`${a.firstName} ${a.lastName}`,value:a.userId}:void 0,g=[];return null==p||null==(l=p.result)||l.filter((({text:e})=>e.trim().length>0)).forEach((({text:e,value:t})=>{m&&t===m.value&&e===m.label?h=!0:g.push({label:e,value:t})})),!m||n&&!h||g.unshift(m),{data:g,totalCount:null==p?void 0:p.count}},y=5,$=e=>{const t={order_column:"changed_on_delta_humanized",order_direction:"desc",page:0,page_size:y,filters:e};return e||delete t.filters,u().encode(t)},x=e=>{const t={edited:[{col:"changed_by",opr:"rel_o_m",value:`${e}`}]},r=[i.Z.get({endpoint:`/api/v1/dashboard/?q=${$(t.edited)}`}),i.Z.get({endpoint:`/api/v1/chart/?q=${$(t.edited)}`})];return Promise.all(r).then((([e,t])=>{var r,n;return{editedDash:null==(r=t.json)?void 0:r.result.slice(0,3),editedChart:null==(n=e.json)?void 0:n.result.slice(0,3)}})).catch((e=>e))},_=(e,t,r=[{col:"owners",opr:"rel_m_m",value:`${e}`}])=>i.Z.get({endpoint:`/api/v1/${t}/?q=${$(r)}`}).then((e=>{var t;return null==(t=e.json)?void 0:t.result})),w=(e,t,r,n)=>i.Z.get({endpoint:t}).then((e=>{const t={},a=[i.Z.get({endpoint:`/api/v1/chart/?q=${$(n)}`}),i.Z.get({endpoint:`/api/v1/dashboard/?q=${$(n)}`})];return Promise.all(a).then((([r,n])=>(t.other=[...r.json.result,...n.json.result],t.viewed=e.json.result,t))).catch((e=>r((0,s.t)("There was an error fetching your recent activity:"),e)))})),Z=v("related"),k=v("distinct");function S(e){return async t=>{const r=await(0,p.O$)(t),n=null==r?void 0:r.errors,a=await h.Z;null!=n&&n.length&&null!=a&&a.ERRORS&&n[0].error_type in a.ERRORS&&(r.message=a.ERRORS[n[0].error_type]),l.Z.error(t),e(r.message||r.error)}}function C({id:e,slice_name:t},r,n,a,o,l){const d={pageIndex:0,pageSize:y,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"created_by",operator:"rel_o_m",value:`${l}`}]};i.Z.delete({endpoint:`/api/v1/chart/${e}`}).then((()=>{"Mine"===o?a(d):a(),r((0,s.t)("Deleted: %s",t))}),(()=>{n((0,s.t)("There was an issue deleting: %s",t))}))}function E({id:e,dashboard_title:t},r,n,a,o,l){return i.Z.delete({endpoint:`/api/v1/dashboard/${e}`}).then((()=>{"Mine"===o?r({pageIndex:0,pageSize:y,sortBy:[{id:"changed_on_delta_humanized",desc:!0}],filters:[{id:"owners",operator:"rel_m_m",value:`${l}`}]}):r(),n((0,s.t)("Deleted: %s",t))}),S((e=>a((0,s.t)("There was an issue deleting %s: %s",t,e)))))}function O(e,t){let r=e.split("\n");return r.length>=t&&(r=r.slice(0,t),r.push("...")),r.join("\n")}const j=5,U=[576,768,992,1200].map((e=>`@media (max-width: ${e}px)`)),T=o.iK.div`
  ${({showThumbnails:e,theme:t})=>`\n    overflow: hidden;\n    display: grid;\n    grid-gap: ${12*t.gridUnit}px ${4*t.gridUnit}px;\n    grid-template-columns: repeat(auto-fit, 300px);\n    max-height: ${e?"314":"148"}px;\n    margin-top: ${-6*t.gridUnit}px;\n    padding: ${e?`${8*t.gridUnit+3}px ${9*t.gridUnit}px`:`${8*t.gridUnit+1}px ${9*t.gridUnit}px`};\n  `}
`,N=o.iK.div`
  cursor: pointer;
  a {
    text-decoration: none;
  }
  .ant-card-cover > div {
    /* Height is calculated based on 300px width, to keep the same aspect ratio as the 800*450 thumbnails */
    height: 168px;
  }
`,R=e=>d.iv`
  margin: auto ${2*e.gridUnit}px auto 0;
  color: ${e.colors.grayscale.base};
`,z=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the database"===e)))},I=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a password for the ssh tunnel"===e)))},P=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key for the ssh tunnel"===e)))},K=e=>{var t;return"object"==typeof e&&Array.isArray(e._schema)&&!(null==(t=e._schema)||!t.find((e=>"Must provide a private key password for the ssh tunnel"===e)))},A=e=>"string"==typeof e&&e.includes("already exists and `overwrite=true` was not passed"),D=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>z(e))).map((([e])=>e)))).flat(),q=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>I(e))).map((([e])=>e)))).flat(),F=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>P(e))).map((([e])=>e)))).flat(),M=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>K(e))).map((([e])=>e)))).flat(),B=e=>e.map((e=>Object.entries(e.extra).filter((([,e])=>A(e))).map((([e])=>e)))).flat(),V=e=>e.some((e=>{const t=Object.entries(e.extra).filter((([e])=>"issue_codes"!==e));return 0===t.length||!t.every((([,e])=>z(e)||A(e)||I(e)||P(e)||K(e)))})),L=(e,t)=>void 0!==e&&a()(e,t).length>0,G=(e,t,r,n,a)=>{const o=(0,m.R)("can_this_form_get","CsvToDatabaseView",e)&&L(t,a),i=L(r,a)&&(0,m.R)("can_this_form_get","ColumnarToDatabaseView",e),s=L(n,a)&&(0,m.R)("can_this_form_get","ExcelToDatabaseView",e);return{canUploadCSV:o,canUploadColumnar:i,canUploadExcel:s,canUploadData:o||i||s}};function J(e,t,r,n){return e===b.F.Created||t===g.g.SavedQueries&&e===b.F.Mine?[{id:"created_by",operator:"rel_o_m",value:`${null==r?void 0:r.userId}`}]:t===g.g.SavedQueries&&e===b.F.Favorite?[{id:"id",operator:"saved_query_is_fav",value:!0}]:e===b.F.Mine&&r?[{id:"owners",operator:"rel_m_m",value:`${r.userId}`}]:e===b.F.Favorite&&[g.g.Dashboards,g.g.Charts].includes(t)?[{id:"id",operator:t===g.g.Dashboards?"dashboard_is_favorite":"chart_is_favorite",value:!0}]:e===b.F.Other?(n||[]).map((e=>({id:e.col,operator:e.opr,value:e.value}))):[]}}}]);
//# sourceMappingURL=5331.658d971a93b50052872c.entry.js.map