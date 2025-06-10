"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9041],{60972:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(61988),o=a(34858),r=a(29487),i=a(11965);const s=(0,o.z)(),d=s?s.support:"https://superset.apache.org/docs/databases/installing-database-drivers",c=({errorMessage:e,showDbInstallInstructions:t})=>(0,i.tZ)(r.Z,{closable:!1,css:e=>(e=>i.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"error",showIcon:!0,message:e,description:t?(0,i.tZ)(n.Fragment,null,(0,i.tZ)("br",null),(0,l.t)("Database driver for importing maybe not installed. Visit the Superset documentation page for installation instructions: "),(0,i.tZ)("a",{href:d,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,l.t)("here")),"."):""})},49576:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),l=a(51995),o=a(13322),r=a(11965);const i=l.iK.label`
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
`,s=(0,l.iK)(o.Z.CheckboxHalf)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,d=(0,l.iK)(o.Z.CheckboxOff)`
  color: ${({theme:e})=>e.colors.grayscale.base};
  cursor: pointer;
`,c=(0,l.iK)(o.Z.CheckboxOn)`
  color: ${({theme:e})=>e.colors.primary.base};
  cursor: pointer;
`,u=l.iK.input`
  &[type='checkbox'] {
    cursor: pointer;
    opacity: 0;
    position: absolute;
    left: 3px;
    margin: 0;
    top: 4px;
  }
`,p=l.iK.div`
  cursor: pointer;
  display: inline-block;
  position: relative;
`,h=(0,n.forwardRef)((({indeterminate:e,id:t,checked:a,onChange:l,title:o="",labelText:h=""},m)=>{const g=(0,n.useRef)(),v=m||g;return(0,n.useEffect)((()=>{v.current.indeterminate=e}),[v,e]),(0,r.tZ)(n.Fragment,null,(0,r.tZ)(p,null,e&&(0,r.tZ)(s,null),!e&&a&&(0,r.tZ)(c,null),!e&&!a&&(0,r.tZ)(d,null),(0,r.tZ)(u,{name:t,id:t,type:"checkbox",ref:v,checked:a,onChange:l})),(0,r.tZ)(i,{title:o,htmlFor:t},h))}))},1315:(e,t,a)=>{a.d(t,{Gr:()=>it,ZP:()=>ct});var n=a(78718),l=a.n(n),o=a(41609),r=a.n(o),i=a(75049),s=a(51995),d=a(61988),c=a(67294),u=a(16550),p=a(61337),h=a(71262),m=a(4715),g=a(29487),v=a(74069),b=a(35932),y=a(13322);function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},f.apply(this,arguments)}const Z={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},x=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function _(e,t){for(;e&&t--;)e=e.previousElementSibling;return e}const w={basedOn:void 0,className:"",component:"div",ellipsis:"…",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},C=Object.keys(w);class S extends c.Component{constructor(e){super(e),this.state={text:e.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(e){e.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==e&&this.reflow(this.props)}componentWillUnmount(){this.canvas.parentNode.removeChild(this.canvas)}setState(e,t){return void 0!==e.clamped&&(this.clamped=e.clamped),super.setState(e,t)}initCanvas(){if(this.canvas)return;const e=this.canvas=document.createElement("div");e.className=`LinesEllipsis-canvas ${this.props.className}`,e.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(Z).forEach((t=>{e.style[t]=Z[t]})),document.body.appendChild(e)}copyStyleToCanvas(){const e=window.getComputedStyle(this.target);x.forEach((t=>{this.canvas.style[t]=e[t]}))}reflow(e){const t=e.basedOn||(/^[\x00-\x7F]+$/.test(e.text)?"words":"letters");switch(t){case"words":this.units=e.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(e.text);break;default:throw new Error(`Unsupported options basedOn: ${t}`)}this.maxLine=+e.maxLine||1,this.canvas.innerHTML=this.units.map((e=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("");const a=this.putEllipsis(this.calcIndexes()),n=a>-1,l={clamped:n,text:n?this.units.slice(0,a).join(""):e.text};this.setState(l,e.onReflow.bind(this,l))}calcIndexes(){const e=[0];let t=this.canvas.firstElementChild;if(!t)return e;let a=0,n=1,l=t.offsetTop;for(;(t=t.nextElementSibling)&&(t.offsetTop>l&&(n++,e.push(a),l=t.offsetTop),a++,!(n>this.maxLine)););return e}putEllipsis(e){if(e.length<=this.maxLine)return-1;const t=e[this.maxLine],a=this.units.slice(0,t),n=this.canvas.children[t].offsetTop;this.canvas.innerHTML=a.map(((e,t)=>`<span class='LinesEllipsis-unit'>${e}</span>`)).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const l=this.canvas.lastElementChild;let o=_(l,2);for(;o&&(l.offsetTop>n||l.offsetHeight>o.offsetHeight||l.offsetTop>o.offsetTop);)this.canvas.removeChild(o),o=_(l,2),a.pop();return a.length}isClamped(){return this.clamped}render(){const{text:e,clamped:t}=this.state,a=this.props,{component:n,ellipsis:l,trimRight:o,className:r}=a,i=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(a,["component","ellipsis","trimRight","className"]);return c.createElement(n,f({className:`LinesEllipsis ${t?"LinesEllipsis--clamped":""} ${r}`,ref:e=>this.target=e},function(e,t){if(!e||"object"!=typeof e)return e;const a={};return Object.keys(e).forEach((n=>{t.indexOf(n)>-1||(a[n]=e[n])})),a}(i,C)),t&&o?e.replace(/[\s\uFEFF\xA0]+$/,""):e,c.createElement("wbr",null),t&&c.createElement("span",{className:"LinesEllipsis-ellipsis"},l))}}S.defaultProps=w;const $=S;var k=a(11965);const N=(0,s.iK)(b.Z)`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0;
`,E=s.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px;
  height: ${({theme:e})=>18*e.gridUnit}px;
  margin: ${({theme:e})=>3*e.gridUnit}px 0;

  .default-db-icon {
    font-size: 36px;
    color: ${({theme:e})=>e.colors.grayscale.base};
    margin-right: 0;
    span:first-of-type {
      margin-right: 0;
    }
  }

  &:first-of-type {
    margin-right: 0;
  }

  img {
    width: ${({theme:e})=>10*e.gridUnit}px;
    height: ${({theme:e})=>10*e.gridUnit}px;
    margin: 0;
    &:first-of-type {
      margin-right: 0;
    }
  }
  svg {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,U=s.iK.div`
  max-height: calc(1.5em * 2);
  white-space: break-spaces;

  &:first-of-type {
    margin-right: 0;
  }

  .LinesEllipsis {
    &:first-of-type {
      margin-right: 0;
    }
  }
`,T=s.iK.div`
  padding: ${({theme:e})=>4*e.gridUnit}px 0;
  border-radius: 0 0 ${({theme:e})=>e.borderRadius}px
    ${({theme:e})=>e.borderRadius}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light4};
  width: 100%;
  line-height: 1.5em;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:first-of-type {
    margin-right: 0;
  }
`,M=(0,s.iK)((({icon:e,altText:t,buttonText:a,...n})=>(0,k.tZ)(N,n,(0,k.tZ)(E,null,e&&(0,k.tZ)("img",{src:e,alt:t}),!e&&(0,k.tZ)(y.Z.DatabaseOutlined,{className:"default-db-icon","aria-label":"default-icon"})),(0,k.tZ)(T,null,(0,k.tZ)(U,null,(0,k.tZ)($,{text:a,maxLine:"2",basedOn:"words",trimRight:!0}))))))`
  text-transform: none;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};
  font-weight: ${({theme:e})=>e.typography.weights.normal};
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  margin: 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.grayscale.light5};
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    box-shadow: 4px 4px 20px ${({theme:e})=>e.colors.grayscale.light2};
  }
`;var A,P,L=a(8272),D=a(14114),q=a(73684),O=a(72875),I=a(60972),F=a(34858),R=a(18451),z=a(38703);!function(e){e.SqlalchemyUri="sqlalchemy_form",e.DynamicForm="dynamic_form"}(A||(A={})),function(e){e.GSheet="gsheets",e.Snowflake="snowflake"}(P||(P={}));var H=a(94184),K=a.n(H),j=a(49576),B=a(43700),J=a(94670);const Q=k.iv`
  margin-bottom: 0;
`,V=s.iK.header`
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  line-height: ${({theme:e})=>6*e.gridUnit}px;

  .helper-top {
    padding-bottom: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  .subheader-text {
    line-height: ${({theme:e})=>4.25*e.gridUnit}px;
  }

  .helper-bottom {
    padding-top: 0;
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0;
  }

  h4 {
    color: ${({theme:e})=>e.colors.grayscale.dark2};
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    margin: 0;
    padding: 0;
    line-height: ${({theme:e})=>8*e.gridUnit}px;
  }

  .select-db {
    padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
    .helper {
      margin: 0;
    }

    h4 {
      margin: 0 0 ${({theme:e})=>4*e.gridUnit}px;
    }
  }
`,W=k.iv`
  .ant-tabs-top {
    margin-top: 0;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 0;
  }
  .ant-tabs-tab {
    margin-right: 0;
  }
`,G=k.iv`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
  }
`,X=e=>k.iv`
  margin-bottom: ${5*e.gridUnit}px;
  svg {
    margin-bottom: ${.25*e.gridUnit}px;
  }
`,Y=e=>k.iv`
  padding-left: ${2*e.gridUnit}px;
`,ee=e=>k.iv`
  padding: ${4*e.gridUnit}px ${4*e.gridUnit}px 0;
`,te=e=>k.iv`
  .ant-select-dropdown {
    height: ${40*e.gridUnit}px;
  }

  .ant-modal-header {
    padding: ${4.5*e.gridUnit}px ${4*e.gridUnit}px
      ${4*e.gridUnit}px;
  }

  .ant-modal-close-x .close {
    color: ${e.colors.grayscale.dark1};
    opacity: 1;
  }

  .ant-modal-body {
    height: ${180.5*e.gridUnit}px;
  }

  .ant-modal-footer {
    height: ${16.25*e.gridUnit}px;
  }
`,ae=e=>k.iv`
  border: 1px solid ${e.colors.info.base};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;

  .ant-alert-message {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    font-weight: ${e.typography.weights.bold};
  }

  .ant-alert-description {
    color: ${e.colors.info.dark2};
    font-size: ${e.typography.sizes.m}px;
    line-height: ${5*e.gridUnit}px;

    a {
      text-decoration: underline;
    }

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`,ne=s.iK.div`
  ${({theme:e})=>k.iv`
    margin: 0 ${4*e.gridUnit}px -${4*e.gridUnit}px;
  `}
`,le=e=>k.iv`
  .required {
    margin-left: ${e.gridUnit/2}px;
    color: ${e.colors.error.base};
  }

  .helper {
    display: block;
    padding: ${e.gridUnit}px 0;
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    text-align: left;
  }
`,oe=e=>k.iv`
  .form-group {
    margin-bottom: ${4*e.gridUnit}px;
    &-w-50 {
      display: inline-block;
      width: ${`calc(50% - ${4*e.gridUnit}px)`};
      & + .form-group-w-50 {
        margin-left: ${8*e.gridUnit}px;
      }
    }
  }
  .control-label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
  }
  .helper {
    color: ${e.colors.grayscale.light1};
    font-size: ${e.typography.sizes.s}px;
    margin-top: ${1.5*e.gridUnit}px;
  }
  .ant-tabs-content-holder {
    overflow: auto;
    max-height: 480px;
  }
`,re=e=>k.iv`
  label {
    color: ${e.colors.grayscale.dark1};
    font-size: ${e.typography.sizes.s}px;
    margin-bottom: 0;
  }
`,ie=s.iK.div`
  ${({theme:e})=>k.iv`
    margin-bottom: ${6*e.gridUnit}px;
    &.mb-0 {
      margin-bottom: 0;
    }
    &.mb-8 {
      margin-bottom: ${2*e.gridUnit}px;
    }

    .control-label {
      color: ${e.colors.grayscale.dark1};
      font-size: ${e.typography.sizes.s}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    &.extra-container {
      padding-top: ${2*e.gridUnit}px;
    }

    .input-container {
      display: flex;
      align-items: top;

      label {
        display: flex;
        margin-left: ${2*e.gridUnit}px;
        margin-top: ${.75*e.gridUnit}px;
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    textarea {
      height: 160px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${1.5*e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='name'] {
        flex: 0 1 auto;
        width: 40%;
      }
    }
    &.expandable {
      height: 0;
      overflow: hidden;
      transition: height 0.25s;
      margin-left: ${8*e.gridUnit}px;
      margin-bottom: 0;
      padding: 0;
      .control-label {
        margin-bottom: 0;
      }
      &.open {
        height: ${108}px;
        padding-right: ${5*e.gridUnit}px;
      }
    }
  `}
`,se=(0,s.iK)(J.Ad)`
  flex: 1 1 auto;
  border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,de=s.iK.div`
  padding-top: ${({theme:e})=>e.gridUnit}px;
  .input-container {
    padding-top: ${({theme:e})=>e.gridUnit}px;
    padding-bottom: ${({theme:e})=>e.gridUnit}px;
  }
  &.expandable {
    height: 0;
    overflow: hidden;
    transition: height 0.25s;
    margin-left: ${({theme:e})=>7*e.gridUnit}px;
    &.open {
      height: ${261}px;
      &.ctas-open {
        height: ${363}px;
      }
    }
  }
`,ce=s.iK.div`
  padding: 0 ${({theme:e})=>4*e.gridUnit}px;
  margin-top: ${({theme:e})=>6*e.gridUnit}px;
`,ue=e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,pe=e=>k.iv`
  font-size: ${3.5*e.gridUnit}px;
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding-right: ${2*e.gridUnit}px;
`,he=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;

  .helper {
    color: ${({theme:e})=>e.colors.grayscale.base};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin: 0px;
  }
`,me=(s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
`,s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.light1};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  text-transform: uppercase;
`),ge=s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark1};
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
`,ve=s.iK.div`
  .catalog-type-select {
    margin: 0 0 20px;
  }

  .label-select {
    text-transform: uppercase;
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: 11px;
    margin: 0 5px ${({theme:e})=>2*e.gridUnit}px;
  }

  .label-paste {
    color: ${({theme:e})=>e.colors.grayscale.light1};
    font-size: 11px;
    line-height: 16px;
  }

  .input-container {
    margin: ${({theme:e})=>7*e.gridUnit}px 0;
    display: flex;
    flex-direction: column;
}
  }
  .input-form {
    height: 100px;
    width: 100%;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;
    resize: vertical;
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    &::placeholder {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }

  .input-container {
    .input-upload {
      display: none !important;
    }
    .input-upload-current {
      display: flex;
      justify-content: space-between;
    }
    .input-upload-btn {
      width: ${({theme:e})=>32*e.gridUnit}px
    }
  }`,be=s.iK.div`
  .preferred {
    .superset-button {
      margin-left: 0;
    }
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: ${({theme:e})=>4*e.gridUnit}px;
  }

  .preferred-item {
    width: 32%;
    margin-bottom: ${({theme:e})=>2.5*e.gridUnit}px;
  }

  .available {
    margin: ${({theme:e})=>4*e.gridUnit}px;
    .available-label {
      font-size: ${({theme:e})=>e.typography.sizes.l}px;
      font-weight: ${({theme:e})=>e.typography.weights.bold};
      margin: ${({theme:e})=>6*e.gridUnit}px 0;
    }
    .available-select {
      width: 100%;
    }
  }

  .label-available-select {
    text-transform: uppercase;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .control-label {
    color: ${({theme:e})=>e.colors.grayscale.dark1};
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,ye=(0,s.iK)(b.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,fe=s.iK.div`
  position: sticky;
  top: 0;
  z-index: ${({theme:e})=>e.zIndex.max};
  background: ${({theme:e})=>e.colors.grayscale.light5};
  height: auto;
`,Ze=s.iK.div`
  margin-bottom: 16px;

  .catalog-type-select {
    margin: 0 0 20px;
  }

  .gsheet-title {
    font-size: ${({theme:e})=>e.typography.sizes.l}px;
    font-weight: ${({theme:e})=>e.typography.weights.bold};
    margin: ${({theme:e})=>10*e.gridUnit}px 0 16px;
  }

  .catalog-label {
    margin: 0 0 7px;
  }

  .catalog-name {
    display: flex;
    .catalog-name-input {
      width: 95%;
      margin-bottom: 0px;
    }
  }

  .catalog-name-url {
    margin: 4px 0;
    width: 95%;
  }

  .catalog-add-btn {
    width: 95%;
  }
`,xe=s.iK.div`
  .ant-progress-inner {
    display: none;
  }

  .ant-upload-list-item-card-actions {
    display: none;
  }
`,_e=({db:e,onInputChange:t,onTextChange:a,onEditorChange:n,onExtraInputChange:l,onExtraEditorChange:o,extraExtension:r})=>{var i,s,c,u;const p=!(null==e||!e.expose_in_sqllab),h=!!(null!=e&&e.allow_ctas||null!=e&&e.allow_cvas),m=null==e||null==(i=e.engine_information)?void 0:i.supports_file_upload,g=JSON.parse((null==e?void 0:e.extra)||"{}",((e,t)=>"engine_params"===e&&"object"==typeof t?JSON.stringify(t):t)),v=null==r?void 0:r.component,b=null==r?void 0:r.logo,y=null==r?void 0:r.description;return(0,k.tZ)(B.Z,{expandIconPosition:"right",accordion:!0,css:e=>(e=>k.iv`
  .ant-collapse-header {
    padding-top: ${3.5*e.gridUnit}px;
    padding-bottom: ${2.5*e.gridUnit}px;

    .anticon.ant-collapse-arrow {
      top: calc(50% - ${6}px);
    }
    .helper {
      color: ${e.colors.grayscale.base};
    }
  }
  h4 {
    font-size: 16px;
    margin-top: 0;
    margin-bottom: ${e.gridUnit}px;
  }
  p.helper {
    margin-bottom: 0;
    padding: 0;
  }
`)(e)},(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("SQL Lab")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust how this database will interact with SQL Lab."))),key:"1"},(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"expose_in_sqllab",indeterminate:!1,checked:!(null==e||!e.expose_in_sqllab),onChange:t,labelText:(0,d.t)("Expose database in SQL Lab")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Allow this database to be queried in SQL Lab")})),(0,k.tZ)(de,{className:K()("expandable",{open:p,"ctas-open":h})},(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_ctas",indeterminate:!1,checked:!(null==e||!e.allow_ctas),onChange:t,labelText:(0,d.t)("Allow CREATE TABLE AS")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Allow creation of new tables based on queries")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_cvas",indeterminate:!1,checked:!(null==e||!e.allow_cvas),onChange:t,labelText:(0,d.t)("Allow CREATE VIEW AS")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Allow creation of new views based on queries")})),(0,k.tZ)(ie,{className:K()("expandable",{open:h})},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("CTAS & CVAS SCHEMA")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"force_ctas_schema",placeholder:(0,d.t)("Create or select schema..."),onChange:t,value:(null==e?void 0:e.force_ctas_schema)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Force all tables and views to be created in this schema when clicking CTAS or CVAS in SQL Lab.")))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_dml",indeterminate:!1,checked:!(null==e||!e.allow_dml),onChange:t,labelText:(0,d.t)("Allow DML")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Allow manipulation of the database using non-SELECT statements such as UPDATE, DELETE, CREATE, etc.")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"cost_estimate_enabled",indeterminate:!1,checked:!(null==g||!g.cost_estimate_enabled),onChange:l,labelText:(0,d.t)("Enable query cost estimation")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("For Bigquery, Presto and Postgres, shows a button to compute cost before running a query.")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allows_virtual_table_explore",indeterminate:!1,checked:!(null==g||!g.allows_virtual_table_explore),onChange:l,labelText:(0,d.t)("Allow this database to be explored")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("When enabled, users are able to visualize SQL Lab results in Explore.")}))),(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"disable_data_preview",indeterminate:!1,checked:!(null==g||!g.disable_data_preview),onChange:l,labelText:(0,d.t)("Disable SQL Lab data preview queries")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Disable data preview when fetching table metadata in SQL Lab.  Useful to avoid browser performance issues when using  databases with very wide tables.")}))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"expand_rows",indeterminate:!1,checked:!(null==g||null==(s=g.schema_options)||!s.expand_rows),onChange:l,labelText:(0,d.t)("Enable row expansion in schemas")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("For Trino, describe full schemas of nested ROW types, expanding them with dotted paths")})))))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Performance")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Adjust performance settings of this database."))),key:"2"},(0,k.tZ)(ie,{className:"mb-8"},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Chart cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"cache_timeout",value:(null==e?void 0:e.cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:t})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the caching timeout for charts of this database. A timeout of 0 indicates that the cache never expires, and -1 bypasses the cache. Note this defaults to the global timeout if undefined."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schema cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"schema_cache_timeout",value:(null==g||null==(c=g.metadata_cache_timeout)?void 0:c.schema_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for schemas of this database. If left unset, the cache never expires."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Table cache timeout")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"number",name:"table_cache_timeout",value:(null==g||null==(u=g.metadata_cache_timeout)?void 0:u.table_cache_timeout)||"",placeholder:(0,d.t)("Enter duration in seconds"),onChange:l})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Duration (in seconds) of the metadata caching timeout for tables of this database. If left unset, the cache never expires. "))),(0,k.tZ)(ie,{css:(0,k.iv)({no_margin_bottom:Q},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_run_async",indeterminate:!1,checked:!(null==e||!e.allow_run_async),onChange:t,labelText:(0,d.t)("Asynchronous query execution")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Operate the database in asynchronous mode, meaning that the queries are executed on remote workers as opposed to on the web server itself. This assumes that you have a Celery worker setup as well as a results backend. Refer to the installation docs for more information.")}))),(0,k.tZ)(ie,{css:(0,k.iv)({no_margin_bottom:Q},"","")},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"cancel_query_on_windows_unload",indeterminate:!1,checked:!(null==g||!g.cancel_query_on_windows_unload),onChange:l,labelText:(0,d.t)("Cancel query on window unload event")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Terminate running queries when browser window closed or navigated to another page. Available for Presto, Hive, MySQL, Postgres and Snowflake databases.")})))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Security")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Add extra connection information."))),key:"3"},(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Secure extra")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"masked_encrypted_extra",value:(null==e?void 0:e.masked_encrypted_extra)||"",placeholder:(0,d.t)("Secure extra"),onChange:e=>n({json:e,name:"masked_encrypted_extra"}),width:"100%",height:"160px"})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("JSON string containing additional connection configuration. This is used to provide connection information for systems like Hive, Presto and BigQuery which do not conform to the username:password syntax normally used by SQLAlchemy.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Root certificate")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("textarea",{name:"server_cert",value:(null==e?void 0:e.server_cert)||"",placeholder:(0,d.t)("Enter CA_BUNDLE"),onChange:a})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Optional CA_BUNDLE contents to validate HTTPS requests. Only available on certain database engines."))),(0,k.tZ)(ie,{css:m?{}:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"impersonate_user",indeterminate:!1,checked:!(null==e||!e.impersonate_user),onChange:t,labelText:(0,d.t)("Impersonate logged in user (Presto, Trino, Drill, Hive, and GSheets)")}),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("If Presto or Trino, all the queries in SQL Lab are going to be executed as the currently logged on user who must have permission to run them. If Hive and hive.server2.enable.doAs is enabled, will run the queries as service account, but impersonate the currently logged on user via hive.server2.proxy.user property.")}))),m&&(0,k.tZ)(ie,{css:null!=e&&e.allow_file_upload?{}:Q},(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(j.Z,{id:"allow_file_upload",indeterminate:!1,checked:!(null==e||!e.allow_file_upload),onChange:t,labelText:(0,d.t)("Allow file uploads to database")}))),m&&!(null==e||!e.allow_file_upload)&&(0,k.tZ)(ie,{css:Q},(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Schemas allowed for File upload")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"schemas_allowed_for_file_upload",value:((null==g?void 0:g.schemas_allowed_for_file_upload)||[]).join(","),placeholder:"schema1,schema2",onChange:l})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("A comma-separated list of schemas that files are allowed to upload to.")))),r&&v&&y&&(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,b&&(0,k.tZ)(b,null),(0,k.tZ)("span",{css:e=>({fontSize:e.typography.sizes.l,fontWeight:e.typography.weights.bold})},null==r?void 0:r.title),(0,k.tZ)("p",{className:"helper"},(0,k.tZ)(y,null))),key:null==r?void 0:r.title,collapsible:null!=r.enabled&&r.enabled()?"icon":"disabled"},(0,k.tZ)(ie,{css:Q},(0,k.tZ)(v,{db:e,onEdit:r.onEdit}))),(0,k.tZ)(B.Z.Panel,{header:(0,k.tZ)("div",null,(0,k.tZ)("h4",null,(0,d.t)("Other")),(0,k.tZ)("p",{className:"helper"},(0,d.t)("Additional settings."))),key:"4"},(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Metadata Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"metadata_params",placeholder:(0,d.t)("Metadata Parameters"),onChange:e=>o({json:e,name:"metadata_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.metadata_params)||{}).length?null==g?void 0:g.metadata_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The metadata_params object gets unpacked into the sqlalchemy.MetaData call.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Engine Parameters")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(se,{name:"engine_params",placeholder:(0,d.t)("Engine Parameters"),onChange:e=>o({json:e,name:"engine_params"}),width:"100%",height:"160px",value:Object.keys((null==g?void 0:g.engine_params)||{}).length?null==g?void 0:g.engine_params:""})),(0,k.tZ)("div",{className:"helper"},(0,k.tZ)("div",null,(0,d.t)("The engine_params object gets unpacked into the sqlalchemy.create_engine call.")))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Version")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"version",placeholder:(0,d.t)("Version number"),onChange:l,value:(null==g?void 0:g.version)||""})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Specify the database version. This is used with Presto for query cost estimation, and Dremio for syntax changes, among others.")))))};var we=a(8911);const Ce=({db:e,onInputChange:t,testConnection:a,conf:n,testInProgress:l=!1,children:o})=>{var r,i;const s=(null==we.Z||null==(r=we.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:r.SQLALCHEMY_DOCS_URL)||"https://docs.sqlalchemy.org/en/13/core/engines.html",u=(null==we.Z||null==(i=we.Z.DB_MODAL_SQLALCHEMY_FORM)?void 0:i.SQLALCHEMY_DISPLAY_TEXT)||"SQLAlchemy docs";return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Display Name"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"database_name",value:(null==e?void 0:e.database_name)||"",placeholder:(0,d.t)("Name your database"),onChange:t})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Pick a name to help you identify this database."))),(0,k.tZ)(ie,null,(0,k.tZ)("div",{className:"control-label"},(0,d.t)("SQLAlchemy URI"),(0,k.tZ)("span",{className:"required"},"*")),(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)("input",{type:"text",name:"sqlalchemy_uri",value:(null==e?void 0:e.sqlalchemy_uri)||"",autoComplete:"off",placeholder:(null==e?void 0:e.sqlalchemy_uri_placeholder)||(0,d.t)("dialect+driver://username:password@host:port/database"),onChange:t})),(0,k.tZ)("div",{className:"helper"},(0,d.t)("Refer to the")," ",(0,k.tZ)("a",{href:s||(null==n?void 0:n.SQLALCHEMY_DOCS_URL)||"",target:"_blank",rel:"noopener noreferrer"},u||(null==n?void 0:n.SQLALCHEMY_DISPLAY_TEXT)||"")," ",(0,d.t)("for more information on how to structure your URI."))),o,(0,k.tZ)(b.Z,{onClick:a,loading:l,cta:!0,buttonStyle:"link",css:e=>(e=>k.iv`
  width: 100%;
  border: 1px solid ${e.colors.primary.dark2};
  color: ${e.colors.primary.dark2};
  &:hover,
  &:focus {
    border: 1px solid ${e.colors.primary.dark1};
    color: ${e.colors.primary.dark1};
  }
`)(e)},(0,d.t)("Test connection")))};var Se=a(49238);const $e={account:{helpText:(0,d.t)("Copy the identifier of the account you are trying to connect to."),placeholder:(0,d.t)("e.g. xy12345.us-east-2.aws")},warehouse:{placeholder:(0,d.t)("e.g. compute_wh"),className:"form-group-w-50"},role:{placeholder:(0,d.t)("e.g. AccountAdmin"),className:"form-group-w-50"}},ke=({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,field:o})=>{var r;return(0,k.tZ)(q.Z,{id:o,name:o,required:e,value:null==l||null==(r=l.parameters)?void 0:r[o],validationMethods:{onBlur:a},errorMessage:null==n?void 0:n[o],placeholder:$e[o].placeholder,helpText:$e[o].helpText,label:o,onChange:t.onParametersChange,className:$e[o].className||o})};var Ne,Ee=a(2857);!function(e){e[e.JsonUpload=0]="JsonUpload",e[e.CopyPaste=1]="CopyPaste"}(Ne||(Ne={}));const Ue={gsheets:"service_account_info",bigquery:"credentials_info"};var Te={name:"s5xdrg",styles:"display:flex;align-items:center"};const Me=({changeMethods:e,isEditMode:t,db:a,editNewDb:n})=>{var l,o,r;const[i,s]=(0,c.useState)(Ne.JsonUpload.valueOf()),[u,p]=(0,c.useState)(null),[h,g]=(0,c.useState)(!0),v="gsheets"===(null==a?void 0:a.engine)?!t&&!h:!t,b=t&&"{}"!==(null==a?void 0:a.masked_encrypted_extra),f=(null==a?void 0:a.engine)&&Ue[a.engine],Z="object"==typeof(null==a||null==(l=a.parameters)?void 0:l[f])?JSON.stringify(null==a||null==(o=a.parameters)?void 0:o[f]):null==a||null==(r=a.parameters)?void 0:r[f];return(0,k.tZ)(ve,null,"gsheets"===(null==a?void 0:a.engine)&&(0,k.tZ)("div",{className:"catalog-type-select"},(0,k.tZ)(Ee.Z,{css:e=>(e=>k.iv`
  margin-bottom: ${2*e.gridUnit}px;
`)(e),required:!0},(0,d.t)("Type of Google Sheets allowed")),(0,k.tZ)(m.IZ,{style:{width:"100%"},defaultValue:b?"false":"true",onChange:e=>g("true"===e)},(0,k.tZ)(m.IZ.Option,{value:"true",key:1},(0,d.t)("Publicly shared sheets only")),(0,k.tZ)(m.IZ.Option,{value:"false",key:2},(0,d.t)("Public and privately shared sheets")))),v&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Ee.Z,{required:!0},(0,d.t)("How do you want to enter service account credentials?")),(0,k.tZ)(m.IZ,{defaultValue:i,style:{width:"100%"},onChange:e=>s(e)},(0,k.tZ)(m.IZ.Option,{value:Ne.JsonUpload},(0,d.t)("Upload JSON file")),(0,k.tZ)(m.IZ.Option,{value:Ne.CopyPaste},(0,d.t)("Copy and Paste JSON credentials")))),i===Ne.CopyPaste||t||n?(0,k.tZ)("div",{className:"input-container"},(0,k.tZ)(Ee.Z,{required:!0},(0,d.t)("Service Account")),(0,k.tZ)("textarea",{className:"input-form",name:f,value:Z,onChange:e.onParametersChange,placeholder:(0,d.t)("Paste content of service credentials JSON file here")}),(0,k.tZ)("span",{className:"label-paste"},(0,d.t)("Copy and paste the entire service account .json file here"))):v&&(0,k.tZ)("div",{className:"input-container",css:e=>X(e)},(0,k.tZ)("div",{css:Te},(0,k.tZ)(Ee.Z,{required:!0},(0,d.t)("Upload Credentials")),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Use the JSON file you automatically downloaded when creating your service account."),viewBox:"0 0 24 24"})),!u&&(0,k.tZ)(m.C0,{className:"input-upload-btn",onClick:()=>{var e,t;return null==(e=document)||null==(t=e.getElementById("selectedFile"))?void 0:t.click()}},(0,d.t)("Choose File")),u&&(0,k.tZ)("div",{className:"input-upload-current"},u,(0,k.tZ)(y.Z.DeleteFilled,{iconSize:"m",onClick:()=>{p(null),e.onParametersChange({target:{name:f,value:""}})}})),(0,k.tZ)("input",{id:"selectedFile",accept:".json",className:"input-upload",type:"file",onChange:async t=>{var a,n;let l;t.target.files&&(l=t.target.files[0]),p(null==(a=l)?void 0:a.name),e.onParametersChange({target:{type:null,name:f,value:await(null==(n=l)?void 0:n.text()),checked:!1}}),document.getElementById("selectedFile").value=null}})))};var Ae=a(93185);const Pe=({clearValidationErrors:e,changeMethods:t,db:a,dbModel:n})=>{var l,o,i;const[s,u]=(0,c.useState)(!1),p=(0,Ae.cr)(Ae.TT.SshTunneling),h=(null==n||null==(l=n.engine_information)?void 0:l.disable_ssh_tunneling)||!1,g=p&&!h;return(0,c.useEffect)((()=>{var e;g&&void 0!==(null==a||null==(e=a.parameters)?void 0:e.ssh)&&u(a.parameters.ssh)}),[null==a||null==(o=a.parameters)?void 0:o.ssh,g]),(0,c.useEffect)((()=>{var e;g&&void 0===(null==a||null==(e=a.parameters)?void 0:e.ssh)&&!r()(null==a?void 0:a.ssh_tunnel)&&t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:!0}})}),[t,null==a||null==(i=a.parameters)?void 0:i.ssh,null==a?void 0:a.ssh_tunnel,g]),g?(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(m.KU,{checked:s,onChange:a=>{u(a),t.onParametersChange({target:{type:"toggle",name:"ssh",checked:!0,value:a}}),e()}}),(0,k.tZ)("span",{css:Y},(0,d.t)("SSH Tunnel")),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("SSH Tunnel configuration parameters"),placement:"right",viewBox:"0 -5 24 24"})):null};var Le;const De=["host","port","database","username","password","access_token","http_path","database_name","credentials_info","service_account_info","catalog","query","encryption","account","warehouse","role","ssh"],qe={host:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var o;return(0,k.tZ)(q.Z,{id:"host",name:"host",value:null==l||null==(o=l.parameters)?void 0:o.host,required:e,hasTooltip:!0,tooltipText:(0,d.t)("This can be either an IP address (e.g. 127.0.0.1) or a domain name (e.g. mydatabase.com)."),validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.host,placeholder:(0,d.t)("e.g. 127.0.0.1"),className:"form-group-w-50",label:(0,d.t)("Host"),onChange:t.onParametersChange})},http_path:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var o,r;const i=JSON.parse((null==l?void 0:l.extra)||"{}");return(0,k.tZ)(q.Z,{id:"http_path",name:"http_path",required:e,value:null==(o=i.engine_params)||null==(r=o.connect_args)?void 0:r.http_path,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.http_path,placeholder:(0,d.t)("e.g. sql/protocolv1/o/12345"),label:"HTTP Path",onChange:t.onExtraInputChange,helpText:(0,d.t)("Copy the name of the HTTP Path of your cluster.")})},port:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var o;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(q.Z,{id:"port",name:"port",type:"number",required:e,value:null==l||null==(o=l.parameters)?void 0:o.port,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.port,placeholder:(0,d.t)("e.g. 5432"),className:"form-group-w-50",label:(0,d.t)("Port"),onChange:t.onParametersChange}))},database:({required:e,changeMethods:t,getValidation:a,validationErrors:n,placeholder:l,db:o})=>{var r;return(0,k.tZ)(q.Z,{id:"database",name:"database",required:e,value:null==o||null==(r=o.parameters)?void 0:r.database,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.database,placeholder:null!=l?l:(0,d.t)("e.g. world_population"),label:(0,d.t)("Database name"),onChange:t.onParametersChange,helpText:(0,d.t)("Copy the name of the database you are trying to connect to.")})},username:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{var o;return(0,k.tZ)(q.Z,{id:"username",name:"username",required:e,value:null==l||null==(o=l.parameters)?void 0:o.username,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.username,placeholder:(0,d.t)("e.g. Analytics"),label:(0,d.t)("Username"),onChange:t.onParametersChange})},password:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:o})=>{var r;return(0,k.tZ)(q.Z,{id:"password",name:"password",required:e,visibilityToggle:!o,value:null==l||null==(r=l.parameters)?void 0:r.password,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.password,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Password"),onChange:t.onParametersChange})},access_token:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l,isEditMode:o})=>{var r;return(0,k.tZ)(q.Z,{id:"access_token",name:"access_token",required:e,visibilityToggle:!o,value:null==l||null==(r=l.parameters)?void 0:r.access_token,validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.access_token,placeholder:(0,d.t)("e.g. ********"),label:(0,d.t)("Access token"),onChange:t.onParametersChange})},database_name:({changeMethods:e,getValidation:t,validationErrors:a,db:n})=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(q.Z,{id:"database_name",name:"database_name",required:!0,value:null==n?void 0:n.database_name,validationMethods:{onBlur:t},errorMessage:null==a?void 0:a.database_name,placeholder:"",label:(0,d.t)("Display Name"),onChange:e.onChange,helpText:(0,d.t)("Pick a nickname for how the database will display in Superset.")})),query:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>(0,k.tZ)(q.Z,{id:"query_input",name:"query_input",required:e,value:(null==l?void 0:l.query_input)||"",validationMethods:{onBlur:a},errorMessage:null==n?void 0:n.query,placeholder:(0,d.t)("e.g. param1=value1&param2=value2"),label:(0,d.t)("Additional Parameters"),onChange:t.onQueryChange,helpText:(0,d.t)("Add additional custom parameters")}),encryption:({isEditMode:e,changeMethods:t,db:a,sslForced:n})=>{var l;return(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(m.KU,{disabled:n&&!e,checked:(null==a||null==(l=a.parameters)?void 0:l.encryption)||n,onChange:e=>{t.onParametersChange({target:{type:"toggle",name:"encryption",checked:!0,value:e}})}}),(0,k.tZ)("span",{css:Y},"SSL"),(0,k.tZ)(L.Z,{tooltip:(0,d.t)('SSL Mode "require" will be used.'),placement:"right",viewBox:"0 -5 24 24"}))},credentials_info:Me,service_account_info:Me,catalog:({required:e,changeMethods:t,getValidation:a,validationErrors:n,db:l})=>{const o=(null==l?void 0:l.catalog)||[],r=n||{};return(0,k.tZ)(Ze,null,(0,k.tZ)("h4",{className:"gsheet-title"},(0,d.t)("Connect Google Sheets as tables to this database")),(0,k.tZ)("div",null,null==o?void 0:o.map(((n,l)=>{var i,s;return(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Ee.Z,{className:"catalog-label",required:!0},(0,d.t)("Google Sheet Name and URL")),(0,k.tZ)("div",{className:"catalog-name"},(0,k.tZ)(q.Z,{className:"catalog-name-input",required:e,validationMethods:{onBlur:a},errorMessage:null==(i=r[l])?void 0:i.name,placeholder:(0,d.t)("Enter a name for this sheet"),onChange:e=>{t.onParametersChange({target:{type:`catalog-${l}`,name:"name",value:e.target.value}})},value:n.name}),(null==o?void 0:o.length)>1&&(0,k.tZ)(y.Z.CloseOutlined,{css:e=>k.iv`
                    align-self: center;
                    background: ${e.colors.grayscale.light4};
                    margin: 5px 5px 8px 5px;

                    &.anticon > * {
                      line-height: 0;
                    }
                  `,iconSize:"m",onClick:()=>t.onRemoveTableCatalog(l)})),(0,k.tZ)(q.Z,{className:"catalog-name-url",required:e,validationMethods:{onBlur:a},errorMessage:null==(s=r[l])?void 0:s.url,placeholder:(0,d.t)("Paste the shareable Google Sheet URL here"),onChange:e=>t.onParametersChange({target:{type:`catalog-${l}`,name:"value",value:e.target.value}}),value:n.value}))})),(0,k.tZ)(ye,{className:"catalog-add-btn",onClick:()=>{t.onAddTableCatalog()}},"+ ",(0,d.t)("Add sheet"))))},warehouse:ke,role:ke,account:ke,ssh:null!=(Le=(0,i.I)().get("ssh_tunnel.form.switch"))?Le:Pe},Oe=({dbModel:e,db:t,editNewDb:a,getPlaceholder:n,getValidation:l,isEditMode:o=!1,onAddTableCatalog:r,onChange:i,onExtraInputChange:s,onParametersChange:d,onParametersUploadFileChange:c,onQueryChange:u,onRemoveTableCatalog:p,sslForced:h,validationErrors:m,clearValidationErrors:g})=>{const v=null==e?void 0:e.parameters;return(0,k.tZ)(Se.l0,null,(0,k.tZ)("div",{css:e=>[ee,re(e)]},v&&De.filter((e=>Object.keys(v.properties).includes(e)||"database_name"===e)).map((e=>{var b;return qe[e]({required:null==(b=v.required)?void 0:b.includes(e),changeMethods:{onParametersChange:d,onChange:i,onQueryChange:u,onParametersUploadFileChange:c,onAddTableCatalog:r,onRemoveTableCatalog:p,onExtraInputChange:s},validationErrors:m,getValidation:l,clearValidationErrors:g,db:t,key:e,field:e,isEditMode:o,sslForced:h,editNewDb:a,placeholder:n?n(e):void 0})}))))},Ie=(0,F.z)(),Fe=Ie?Ie.support:"https://superset.apache.org/docs/databases/installing-database-drivers",Re={postgresql:"https://superset.apache.org/docs/databases/postgres",mssql:"https://superset.apache.org/docs/databases/sql-server",gsheets:"https://superset.apache.org/docs/databases/google-sheets"},ze=({isLoading:e,isEditMode:t,useSqlAlchemyForm:a,hasConnectedDb:n,db:l,dbName:o,dbModel:r,editNewDb:i,fileList:s})=>{const u=s&&(null==s?void 0:s.length)>0,p=(0,k.tZ)(V,null,(0,k.tZ)(me,null,null==l?void 0:l.backend),(0,k.tZ)(ge,null,o)),h=(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter Primary Credentials")),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn how to connect your database")," ",(0,k.tZ)("a",{href:(null==Ie?void 0:Ie.default)||Fe,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")),m=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:3,stepLast:3})),(0,k.tZ)("h4",{className:"step-3-text"},(0,d.t)("Database connected")),(0,k.tZ)("p",{className:"subheader-text"},(0,d.t)("Create a dataset to begin visualizing your data as a chart or go to\n          SQL Lab to query your data.")))),g=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})),(0,k.tZ)("p",{className:"helper-bottom"},(0,d.t)("Need help? Learn more about")," ",(0,k.tZ)("a",{href:(v=null==l?void 0:l.engine,v?Ie?Ie[v]||Ie.default:Re[v]?Re[v]:`https://superset.apache.org/docs/databases/${v}`:null),target:"_blank",rel:"noopener noreferrer"},(0,d.t)("connecting to %(dbModelName)s.",{dbModelName:r.name}),"."))));var v;const b=(0,k.tZ)(V,null,(0,k.tZ)("div",{className:"select-db"},(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:1,stepLast:3})),(0,k.tZ)("h4",null,(0,d.t)("Select a database to connect")))),y=(0,k.tZ)(fe,null,(0,k.tZ)(V,null,(0,k.tZ)("p",{className:"helper-top"},(0,d.t)("STEP %(stepCurr)s OF %(stepLast)s",{stepCurr:2,stepLast:2})),(0,k.tZ)("h4",null,(0,d.t)("Enter the required %(dbModelName)s credentials",{dbModelName:r.name})),(0,k.tZ)("p",{className:"helper-bottom"},u?s[0].name:"")));return u?y:e?(0,k.tZ)(c.Fragment,null):t?p:a?h:n&&!i?m:l||i?g:b};var He=a(87183),Ke=a(9875),je=a(77808),Be=a(31097),Je=a(10038),Qe=a(55287);const Ve=s.iK.div`
  padding-top: ${({theme:e})=>2*e.gridUnit}px;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }
`,We=(0,s.iK)(m.X2)`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,Ge=(0,s.iK)(m.qz.Item)`
  margin-bottom: 0 !important;
`,Xe=(0,s.iK)(je.Z.Password)`
  margin: ${({theme:e})=>`${e.gridUnit}px 0 ${2*e.gridUnit}px`};
`,Ye=({db:e,onSSHTunnelParametersChange:t,setSSHTunnelLoginMethod:a})=>{var n,l,o,r,i,s;const[u,p]=(0,c.useState)(it.Password);return(0,k.tZ)(Se.l0,null,(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24,md:12},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"server_address",required:!0},(0,d.t)("SSH Host")),(0,k.tZ)(Ke.II,{name:"server_address",type:"text",placeholder:(0,d.t)("e.g. 127.0.0.1"),value:(null==e||null==(n=e.ssh_tunnel)?void 0:n.server_address)||"",onChange:t}))),(0,k.tZ)(m.JX,{xs:24,md:12},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"server_port",required:!0},(0,d.t)("SSH Port")),(0,k.tZ)(Ke.II,{name:"server_port",placeholder:(0,d.t)("22"),type:"number",value:null==e||null==(l=e.ssh_tunnel)?void 0:l.server_port,onChange:t})))),(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"username",required:!0},(0,d.t)("Username")),(0,k.tZ)(Ke.II,{name:"username",type:"text",placeholder:(0,d.t)("e.g. Analytics"),value:(null==e||null==(o=e.ssh_tunnel)?void 0:o.username)||"",onChange:t})))),(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"use_password",required:!0},(0,d.t)("Login with")),(0,k.tZ)(Ge,{name:"use_password",initialValue:u},(0,k.tZ)(He.Y.Group,{onChange:({target:{value:e}})=>{p(e),a(e)}},(0,k.tZ)(He.Y,{value:it.Password},(0,d.t)("Password")),(0,k.tZ)(He.Y,{value:it.PrivateKey},(0,d.t)("Private Key & Password"))))))),u===it.Password&&(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"password",required:!0},(0,d.t)("SSH Password")),(0,k.tZ)(Xe,{name:"password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(r=e.ssh_tunnel)?void 0:r.password)||"",onChange:t,iconRender:e=>e?(0,k.tZ)(Be.Z,{title:"Hide password."},(0,k.tZ)(Je.Z,null)):(0,k.tZ)(Be.Z,{title:"Show password."},(0,k.tZ)(Qe.Z,null)),role:"textbox"})))),u===it.PrivateKey&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"private_key",required:!0},(0,d.t)("Private Key")),(0,k.tZ)(Ke.Kx,{name:"private_key",placeholder:(0,d.t)("Paste Private Key here"),value:(null==e||null==(i=e.ssh_tunnel)?void 0:i.private_key)||"",onChange:t,rows:4})))),(0,k.tZ)(We,{gutter:16},(0,k.tZ)(m.JX,{xs:24},(0,k.tZ)(Ve,null,(0,k.tZ)(Se.lX,{htmlFor:"private_key_password",required:!0},(0,d.t)("Private Key Password")),(0,k.tZ)(Xe,{name:"private_key_password",placeholder:(0,d.t)("e.g. ********"),value:(null==e||null==(s=e.ssh_tunnel)?void 0:s.private_key_password)||"",onChange:t,iconRender:e=>e?(0,k.tZ)(Be.Z,{title:"Hide password."},(0,k.tZ)(Je.Z,null)):(0,k.tZ)(Be.Z,{title:"Show password."},(0,k.tZ)(Qe.Z,null)),role:"textbox"}))))))},et=(0,i.I)(),tt=JSON.stringify({allows_virtual_table_explore:!0}),at={[P.GSheet]:{message:"Why do I need to create a database?",description:"To begin using your Google Sheets, you need to create a database first. Databases are used as a way to identify your data so that it can be queried and visualized. This database will hold all of your individual Google Sheets you choose to connect here."}},nt=(0,s.iK)(h.ZP)`
  .ant-tabs-content {
    display: flex;
    width: 100%;
    overflow: inherit;

    & > .ant-tabs-tabpane {
      position: relative;
    }
  }
`,lt=s.iK.div`
  ${({theme:e})=>`\n    margin: ${8*e.gridUnit}px ${4*e.gridUnit}px;\n  `};
`,ot=s.iK.div`
  ${({theme:e})=>`\n    padding: 0px ${4*e.gridUnit}px;\n  `};
`;var rt,it;!function(e){e[e.AddTableCatalogSheet=0]="AddTableCatalogSheet",e[e.ConfigMethodChange=1]="ConfigMethodChange",e[e.DbSelected=2]="DbSelected",e[e.EditorChange=3]="EditorChange",e[e.ExtraEditorChange=4]="ExtraEditorChange",e[e.ExtraInputChange=5]="ExtraInputChange",e[e.Fetched=6]="Fetched",e[e.InputChange=7]="InputChange",e[e.ParametersChange=8]="ParametersChange",e[e.QueryChange=9]="QueryChange",e[e.RemoveTableCatalogSheet=10]="RemoveTableCatalogSheet",e[e.Reset=11]="Reset",e[e.TextChange=12]="TextChange",e[e.ParametersSSHTunnelChange=13]="ParametersSSHTunnelChange",e[e.SetSSHTunnelLoginMethod=14]="SetSSHTunnelLoginMethod",e[e.RemoveSSHTunnelConfig=15]="RemoveSSHTunnelConfig"}(rt||(rt={})),function(e){e[e.Password=0]="Password",e[e.PrivateKey=1]="PrivateKey"}(it||(it={}));const st=s.iK.div`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  margin-left: ${({theme:e})=>3*e.gridUnit}px;
`;function dt(e,t){var a,n,o,r;const i={...e||{}};let s,d,c={},u="";const p=JSON.parse(i.extra||"{}");switch(t.type){case rt.ExtraEditorChange:try{d=JSON.parse(t.payload.json||"{}")}catch(e){d=t.payload.json}return{...i,extra:JSON.stringify({...p,[t.payload.name]:d})};case rt.ExtraInputChange:return"schema_cache_timeout"===t.payload.name||"table_cache_timeout"===t.payload.name?{...i,extra:JSON.stringify({...p,metadata_cache_timeout:{...null==p?void 0:p.metadata_cache_timeout,[t.payload.name]:t.payload.value}})}:"schemas_allowed_for_file_upload"===t.payload.name?{...i,extra:JSON.stringify({...p,schemas_allowed_for_file_upload:(t.payload.value||"").split(",").filter((e=>""!==e))})}:"http_path"===t.payload.name?{...i,extra:JSON.stringify({...p,engine_params:{connect_args:{[t.payload.name]:null==(h=t.payload.value)?void 0:h.trim()}}})}:"expand_rows"===t.payload.name?{...i,extra:JSON.stringify({...p,schema_options:{...null==p?void 0:p.schema_options,[t.payload.name]:!!t.payload.value}})}:{...i,extra:JSON.stringify({...p,[t.payload.name]:"checkbox"===t.payload.type?t.payload.checked:t.payload.value})};var h;case rt.InputChange:return"checkbox"===t.payload.type?{...i,[t.payload.name]:t.payload.checked}:{...i,[t.payload.name]:t.payload.value};case rt.ParametersChange:if(null!=(a=t.payload.type)&&a.startsWith("catalog")&&void 0!==i.catalog){var m;const e=[...i.catalog],a=null==(m=t.payload.type)?void 0:m.split("-")[1],n=e[a]||{};return n[t.payload.name]=t.payload.value,e.splice(parseInt(a,10),1,n),s=e.reduce(((e,t)=>{const a={...e};return a[t.name]=t.value,a}),{}),{...i,catalog:e,parameters:{...i.parameters,catalog:s}}}return{...i,parameters:{...i.parameters,[t.payload.name]:t.payload.value}};case rt.ParametersSSHTunnelChange:return{...i,ssh_tunnel:{...i.ssh_tunnel,[t.payload.name]:t.payload.value}};case rt.SetSSHTunnelLoginMethod:{let e={};var g,v,b;return null!=i&&i.ssh_tunnel&&(e=l()(i.ssh_tunnel,["id","server_address","server_port","username"])),t.payload.login_method===it.PrivateKey?{...i,ssh_tunnel:{private_key:null==i||null==(g=i.ssh_tunnel)?void 0:g.private_key,private_key_password:null==i||null==(v=i.ssh_tunnel)?void 0:v.private_key_password,...e}}:t.payload.login_method===it.Password?{...i,ssh_tunnel:{password:null==i||null==(b=i.ssh_tunnel)?void 0:b.password,...e}}:{...i}}case rt.RemoveSSHTunnelConfig:return{...i,ssh_tunnel:void 0};case rt.AddTableCatalogSheet:return void 0!==i.catalog?{...i,catalog:[...i.catalog,{name:"",value:""}]}:{...i,catalog:[{name:"",value:""}]};case rt.RemoveTableCatalogSheet:return null==(n=i.catalog)||n.splice(t.payload.indexToDelete,1),{...i};case rt.EditorChange:return{...i,[t.payload.name]:t.payload.json};case rt.QueryChange:return{...i,parameters:{...i.parameters,query:Object.fromEntries(new URLSearchParams(t.payload.value))},query_input:t.payload.value};case rt.TextChange:return{...i,[t.payload.name]:t.payload.value};case rt.Fetched:if(c=(null==(o=t.payload)||null==(r=o.parameters)?void 0:r.query)||{},u=Object.entries(c).map((([e,t])=>`${e}=${t}`)).join("&"),t.payload.masked_encrypted_extra&&t.payload.configuration_method===A.DynamicForm){var y;const e=null==(y={...JSON.parse(t.payload.extra||"{}")}.engine_params)?void 0:y.catalog,a=Object.entries(e||{}).map((([e,t])=>({name:e,value:t})));return{...t.payload,engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,catalog:a,parameters:{...t.payload.parameters||i.parameters,catalog:e},query_input:u}}return{...t.payload,masked_encrypted_extra:t.payload.masked_encrypted_extra||"",engine:t.payload.backend||i.engine,configuration_method:t.payload.configuration_method,parameters:t.payload.parameters||i.parameters,ssh_tunnel:t.payload.ssh_tunnel||i.ssh_tunnel,query_input:u};case rt.DbSelected:return{...t.payload,extra:tt,expose_in_sqllab:!0};case rt.ConfigMethodChange:return{...t.payload};case rt.Reset:default:return null}}const ct=(0,D.ZP)((({addDangerToast:e,addSuccessToast:t,onDatabaseAdd:a,onHide:n,show:l,databaseId:o,dbEngine:i})=>{var s,y,f;const[Z,x]=(0,c.useReducer)(dt,null),{state:{loading:_,resource:w,error:C},fetchResource:S,createResource:$,updateResource:N,clearError:E}=(0,F.LE)("database",(0,d.t)("database"),e,"connection"),[U,T]=(0,c.useState)("1"),[D,H]=(0,F.cb)(),[K,j,B]=(0,F.h1)(),[J,Q]=(0,c.useState)(!1),[V,Y]=(0,c.useState)(!1),[re,ie]=(0,c.useState)(""),[se,de]=(0,c.useState)(!1),[me,ge]=(0,c.useState)(!1),[ve,Ze]=(0,c.useState)(!1),[we,Se]=(0,c.useState)({}),[$e,ke]=(0,c.useState)({}),[Ne,Ee]=(0,c.useState)({}),[Ue,Te]=(0,c.useState)({}),[Me,Ae]=(0,c.useState)(!1),[Le,De]=(0,c.useState)([]),[qe,Ie]=(0,c.useState)(!1),[Re,He]=(0,c.useState)(),[Ke,je]=(0,c.useState)([]),[Be,Je]=(0,c.useState)([]),[Qe,Ve]=(0,c.useState)([]),[We,Ge]=(0,c.useState)([]),[Xe,tt]=(0,c.useState)({}),it=null!=(s=et.get("ssh_tunnel.form.switch"))?s:Pe,[ct,ut]=(0,c.useState)(void 0);let pt=et.get("databaseconnection.extraOption");pt&&(pt={...pt,onEdit:e=>{tt({...Xe,...e})}});const ht=(0,R.c)(),mt=(0,F.rM)(),gt=(0,F.jb)(),vt=!!o,bt=gt||!(null==Z||!Z.engine||!at[Z.engine]),yt=(null==Z?void 0:Z.configuration_method)===A.SqlalchemyUri,ft=vt||yt,Zt=K||C,xt=(0,u.k6)(),_t=(null==D||null==(y=D.databases)?void 0:y.find((e=>e.engine===(vt?null==Z?void 0:Z.backend:null==Z?void 0:Z.engine))))||{},wt=e=>{if("database"===e)return(0,d.t)("e.g. world_population")},Ct=(0,c.useCallback)(((e,t)=>{x({type:e,payload:t})}),[]),St=(0,c.useCallback)((()=>{B(null)}),[B]),$t=(0,c.useCallback)((({target:e})=>{Ct(rt.ParametersChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})}),[Ct]),kt=()=>{x({type:rt.Reset}),Q(!1),St(),E(),de(!1),De([]),Ie(!1),He(""),je([]),Je([]),Ve([]),Ge([]),Se({}),ke({}),Ee({}),Te({}),Ae(!1),ut(void 0),n()},Nt=e=>{xt.push(e)},{state:{alreadyExists:Et,passwordsNeeded:Ut,sshPasswordNeeded:Tt,sshPrivateKeyNeeded:Mt,sshPrivateKeyPasswordNeeded:At,loading:Pt,failed:Lt},importResource:Dt}=(0,F.PW)("database",(0,d.t)("database"),(e=>{He(e)})),qt=async()=>{var n,l;let o;if(ge(!0),null==(n=pt)||n.onSave(Xe,Z).then((({error:t})=>{t&&(o=t,e(t))})),o)return void ge(!1);const i={...Z||{}};if(i.configuration_method===A.DynamicForm){var s,c;null!=i&&null!=(s=i.parameters)&&s.catalog&&(i.extra=JSON.stringify({...JSON.parse(i.extra||"{}"),engine_params:{catalog:i.parameters.catalog}}));const t=await j(i,!0);if(!r()(K)||null!=t&&t.length)return e((0,d.t)("Connection failed, please check your connection settings.")),void ge(!1);const a=vt?null==(c=i.parameters_schema)?void 0:c.properties:null==_t?void 0:_t.parameters.properties,n=JSON.parse(i.masked_encrypted_extra||"{}");Object.keys(a||{}).forEach((e=>{var t,l,o,r;a[e]["x-encrypted-extra"]&&null!=(t=i.parameters)&&t[e]&&("object"==typeof(null==(l=i.parameters)?void 0:l[e])?(n[e]=null==(o=i.parameters)?void 0:o[e],i.parameters[e]=JSON.stringify(i.parameters[e])):n[e]=JSON.parse((null==(r=i.parameters)?void 0:r[e])||"{}"))})),i.masked_encrypted_extra=JSON.stringify(n),i.engine===P.GSheet&&(i.impersonate_user=!0)}if(null!=i&&null!=(l=i.parameters)&&l.catalog&&(i.extra=JSON.stringify({...JSON.parse(i.extra||"{}"),engine_params:{catalog:i.parameters.catalog}})),!1===ct&&(i.ssh_tunnel=null),null!=Z&&Z.id){if(await N(Z.id,i,i.configuration_method===A.DynamicForm)){var u;if(a&&a(),null==(u=pt)||u.onSave(Xe,Z).then((({error:t})=>{t&&(o=t,e(t))})),o)return void ge(!1);se||(kt(),t((0,d.t)("Database settings updated")))}}else if(Z){if(await $(i,i.configuration_method===A.DynamicForm)){var p;if(Q(!0),a&&a(),null==(p=pt)||p.onSave(Xe,Z).then((({error:t})=>{t&&(o=t,e(t))})),o)return void ge(!1);ft&&(kt(),t((0,d.t)("Database connected")))}}else{if(Ie(!0),!(Le[0].originFileObj instanceof File))return;await Dt(Le[0].originFileObj,we,$e,Ne,Ue,Me)&&(a&&a(),kt(),t((0,d.t)("Database connected")))}Y(!0),de(!1),ge(!1)},Ot=e=>{if("Other"===e)x({type:rt.DbSelected,payload:{database_name:e,configuration_method:A.SqlalchemyUri,engine:void 0,engine_information:{supports_file_upload:!0}}});else{const t=null==D?void 0:D.databases.filter((t=>t.name===e))[0],{engine:a,parameters:n,engine_information:l,default_driver:o,sqlalchemy_uri_placeholder:r}=t,i=void 0!==n;x({type:rt.DbSelected,payload:{database_name:e,engine:a,configuration_method:i?A.DynamicForm:A.SqlalchemyUri,engine_information:l,driver:o,sqlalchemy_uri_placeholder:r}}),a===P.GSheet&&x({type:rt.AddTableCatalogSheet})}},It=()=>{w&&S(w.id),Y(!1),de(!0)},Ft=()=>{se&&Q(!1),qe&&Ie(!1),Lt&&(Ie(!1),He(""),je([]),Je([]),Ve([]),Ge([]),Se({}),ke({}),Ee({}),Te({})),x({type:rt.Reset}),De([])},Rt=()=>Z?!J||se?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:Ft},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:qt,loading:me},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:It},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:qt,loading:me},(0,d.t)("Finish"))):qe?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"back",onClick:Ft},(0,d.t)("Back")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:qt,disabled:!!(Pt||Et.length&&!Me||Ut.length&&"{}"===JSON.stringify(we)||Tt.length&&"{}"===JSON.stringify($e)||Mt.length&&"{}"===JSON.stringify(Ne)||At.length&&"{}"===JSON.stringify(Ue)),loading:me},(0,d.t)("Connect"))):(0,k.tZ)(c.Fragment,null),zt=(0,c.useRef)(!0);(0,c.useEffect)((()=>{zt.current?zt.current=!1:Pt||Et.length||Ut.length||Tt.length||Mt.length||At.length||me||Lt||(kt(),t((0,d.t)("Database connected")))}),[Et,Ut,Pt,Lt,Tt,Mt,At]),(0,c.useEffect)((()=>{l&&(T("1"),ge(!0),H()),o&&l&&vt&&o&&(_||S(o).catch((t=>e((0,d.t)("Sorry there was an error fetching database information: %s",t.message)))))}),[l,o]),(0,c.useEffect)((()=>{w&&(x({type:rt.Fetched,payload:w}),ie(w.database_name))}),[w]),(0,c.useEffect)((()=>{me&&ge(!1),D&&i&&Ot(i)}),[D]),(0,c.useEffect)((()=>{qe&&document.getElementsByClassName("ant-upload-list-item-name")[0].scrollIntoView()}),[qe]),(0,c.useEffect)((()=>{je([...Ut])}),[Ut]),(0,c.useEffect)((()=>{Je([...Tt])}),[Tt]),(0,c.useEffect)((()=>{Ve([...Mt])}),[Mt]),(0,c.useEffect)((()=>{Ge([...At])}),[At]),(0,c.useEffect)((()=>{var e;void 0!==(null==Z||null==(e=Z.parameters)?void 0:e.ssh)&&ut(Z.parameters.ssh)}),[null==Z||null==(f=Z.parameters)?void 0:f.ssh]);const Ht=()=>Re?(0,k.tZ)(ne,null,(0,k.tZ)(I.Z,{errorMessage:Re,showDbInstallInstructions:Ke.length>0})):null,Kt=e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";Ae(n.toUpperCase()===(0,d.t)("OVERWRITE"))},jt=()=>{let e=[];var t;return r()(C)?r()(K)||"GENERIC_DB_ENGINE_ERROR"!==(null==K?void 0:K.error_type)||(e=[(null==K?void 0:K.description)||(null==K?void 0:K.message)]):e="object"==typeof C?Object.values(C):"string"==typeof C?[C]:[],e.length?(0,k.tZ)(lt,null,(0,k.tZ)(O.Z,{title:(0,d.t)("Database Creation Error"),description:(0,d.t)('We are unable to connect to your database. Click "See more" for database-provided information that may help troubleshoot the issue.'),subtitle:(null==(t=e)?void 0:t[0])||(null==K?void 0:K.description),copyText:null==K?void 0:K.description})):(0,k.tZ)(c.Fragment,null)},Bt=()=>{ge(!0),S(null==w?void 0:w.id).then((e=>{(0,p.LS)(p.dR.Database,e)}))},Jt=()=>(0,k.tZ)(Ye,{db:Z,onSSHTunnelParametersChange:({target:e})=>{Ct(rt.ParametersSSHTunnelChange,{type:e.type,name:e.name,value:e.value}),St()},setSSHTunnelLoginMethod:e=>x({type:rt.SetSSHTunnelLoginMethod,payload:{login_method:e}})}),Qt=()=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(Oe,{isEditMode:vt,db:Z,sslForced:!1,dbModel:_t,onAddTableCatalog:()=>{x({type:rt.AddTableCatalogSheet})},onQueryChange:({target:e})=>Ct(rt.QueryChange,{name:e.name,value:e.value}),onExtraInputChange:({target:e})=>Ct(rt.ExtraInputChange,{name:e.name,value:e.value}),onRemoveTableCatalog:e=>{x({type:rt.RemoveTableCatalogSheet,payload:{indexToDelete:e}})},onParametersChange:$t,onChange:({target:e})=>Ct(rt.TextChange,{name:e.name,value:e.value}),getValidation:()=>j(Z),validationErrors:K,getPlaceholder:wt,clearValidationErrors:St}),ct&&(0,k.tZ)(ot,null,Jt()));if(Le.length>0&&(Et.length||Ke.length||Be.length||Qe.length||We.length))return(0,k.tZ)(v.default,{centered:!0,css:e=>[G,te(e),le(e),oe(e)],footer:Rt(),maskClosable:!1,name:"database",onHide:kt,onHandledPrimaryAction:qt,primaryButtonName:(0,d.t)("Connect"),show:l,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),width:"500px"},(0,k.tZ)(ze,{db:Z,dbName:re,dbModel:_t,fileList:Le,hasConnectedDb:J,isEditMode:vt,isLoading:me,useSqlAlchemyForm:yt}),Et.length?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>(e=>k.iv`
  border: 1px solid ${e.colors.warning.light1};
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px 0;
  color: ${e.colors.warning.dark2};

  .ant-alert-message {
    margin: 0;
  }

  .ant-alert-description {
    font-size: ${e.typography.sizes.s+1}px;
    line-height: ${4*e.gridUnit}px;

    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l+1}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),type:"warning",showIcon:!0,message:"",description:(0,d.t)("You are importing one or more databases that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?")})),(0,k.tZ)(q.Z,{id:"confirm_overwrite",name:"confirm_overwrite",required:!0,validationMethods:{onBlur:()=>{}},errorMessage:null==K?void 0:K.confirm_overwrite,label:(0,d.t)('Type "%s" to confirm',(0,d.t)("OVERWRITE")),onChange:Kt,css:ee})):null,Ht(),Ke.length||Be.length||Qe.length||We.length?[...new Set([...Ke,...Be,...Qe,...We])].map((e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),type:"info",showIcon:!0,message:"Database passwords",description:(0,d.t)('The passwords for the databases below are needed in order to import them. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in explore files and should be added manually after the import if they are needed.')})),(null==Ke?void 0:Ke.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"password_needed",name:"password_needed",required:!0,value:we[e],onChange:t=>Se({...we,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==K?void 0:K.password_needed,label:(0,d.t)("%s PASSWORD",e.slice(10)),css:ee}),(null==Be?void 0:Be.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_password_needed",name:"ssh_tunnel_password_needed",required:!0,value:$e[e],onChange:t=>ke({...$e,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==K?void 0:K.ssh_tunnel_password_needed,label:(0,d.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),css:ee}),(null==Qe?void 0:Qe.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_private_key_needed",name:"ssh_tunnel_private_key_needed",required:!0,value:Ne[e],onChange:t=>Ee({...Ne,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==K?void 0:K.ssh_tunnel_private_key_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),css:ee}),(null==We?void 0:We.indexOf(e))>=0&&(0,k.tZ)(q.Z,{id:"ssh_tunnel_private_key_password_needed",name:"ssh_tunnel_private_key_password_needed",required:!0,value:Ue[e],onChange:t=>Te({...Ue,[e]:t.target.value}),validationMethods:{onBlur:()=>{}},errorMessage:null==K?void 0:K.ssh_tunnel_private_key_password_needed,label:(0,d.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),css:ee})))):null);const Vt=vt?(e=>(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ye,{key:"close",onClick:kt},(0,d.t)("Close")),(0,k.tZ)(ye,{key:"submit",buttonStyle:"primary",onClick:qt,disabled:null==e?void 0:e.is_managed_externally,loading:me,tooltip:null!=e&&e.is_managed_externally?(0,d.t)("This database is managed externally, and can't be edited in Superset"):""},(0,d.t)("Finish"))))(Z):Rt();return ft?(0,k.tZ)(v.default,{css:e=>[W,G,te(e),le(e),oe(e)],name:"database",onHandledPrimaryAction:qt,onHide:kt,primaryButtonName:vt?(0,d.t)("Save"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,k.tZ)("h4",null,vt?(0,d.t)("Edit database"):(0,d.t)("Connect a database")),footer:Vt,maskClosable:!1},(0,k.tZ)(fe,null,(0,k.tZ)(he,null,(0,k.tZ)(ze,{isLoading:me,isEditMode:vt,useSqlAlchemyForm:yt,hasConnectedDb:J,db:Z,dbName:re,dbModel:_t}))),(0,k.tZ)(nt,{defaultActiveKey:"1",activeKey:U,onTabClick:e=>T(e),animated:{inkBar:!0,tabPane:!0}},(0,k.tZ)(h.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Basic")),key:"1"},yt?(0,k.tZ)(ce,null,(0,k.tZ)(Ce,{db:Z,onInputChange:({target:e})=>Ct(rt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),conf:ht,testConnection:()=>{var a;if(null==Z||!Z.sqlalchemy_uri)return void e((0,d.t)("Please enter a SQLAlchemy URI to test"));const n={sqlalchemy_uri:(null==Z?void 0:Z.sqlalchemy_uri)||"",database_name:(null==Z||null==(a=Z.database_name)?void 0:a.trim())||void 0,impersonate_user:(null==Z?void 0:Z.impersonate_user)||void 0,extra:null==Z?void 0:Z.extra,masked_encrypted_extra:(null==Z?void 0:Z.masked_encrypted_extra)||"",server_cert:(null==Z?void 0:Z.server_cert)||void 0,ssh_tunnel:!r()(null==Z?void 0:Z.ssh_tunnel)&&ct?{...Z.ssh_tunnel,server_port:Number(Z.ssh_tunnel.server_port)}:void 0};Ze(!0),(0,F.xx)(n,(t=>{Ze(!1),e(t)}),(e=>{Ze(!1),t(e)}))},testInProgress:ve},(0,k.tZ)(it,{dbModel:_t,db:Z,changeMethods:{onParametersChange:$t},clearValidationErrors:St}),ct&&Jt()),(Gt=(null==Z?void 0:Z.backend)||(null==Z?void 0:Z.engine),void 0!==(null==D||null==(Xt=D.databases)||null==(Yt=Xt.find((e=>e.backend===Gt||e.engine===Gt)))?void 0:Yt.parameters)&&!vt&&(0,k.tZ)("div",{css:e=>X(e)},(0,k.tZ)(b.Z,{buttonStyle:"link",onClick:()=>x({type:rt.ConfigMethodChange,payload:{database_name:null==Z?void 0:Z.database_name,configuration_method:A.DynamicForm,engine:null==Z?void 0:Z.engine}}),css:e=>(e=>k.iv`
  font-weight: ${e.typography.weights.normal};
  text-transform: initial;
  padding: ${8*e.gridUnit}px 0 0;
  margin-left: 0px;
`)(e)},(0,d.t)("Connect this database using the dynamic form instead")),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that exposes only the required fields needed to connect this database."),viewBox:"0 -6 24 24"})))):Qt(),!vt&&(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),message:(0,d.t)("Additional fields may be required"),showIcon:!0,description:(0,k.tZ)(c.Fragment,null,(0,d.t)("Select databases require additional fields to be completed in the Advanced tab to successfully connect the database. Learn what requirements your databases has "),(0,k.tZ)("a",{href:Fe,target:"_blank",rel:"noopener noreferrer",className:"additional-fields-alert-description"},(0,d.t)("here")),"."),type:"info"})),Zt&&jt()),(0,k.tZ)(h.ZP.TabPane,{tab:(0,k.tZ)("span",null,(0,d.t)("Advanced")),key:"2"},(0,k.tZ)(_e,{extraExtension:pt,db:Z,onInputChange:({target:e})=>Ct(rt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>Ct(rt.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>Ct(rt.EditorChange,e),onExtraInputChange:({target:e})=>{Ct(rt.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>{Ct(rt.ExtraEditorChange,e)}})))):(0,k.tZ)(v.default,{css:e=>[G,te(e),le(e),oe(e)],name:"database",onHandledPrimaryAction:qt,onHide:kt,primaryButtonName:J?(0,d.t)("Finish"):(0,d.t)("Connect"),width:"500px",centered:!0,show:l,title:(0,k.tZ)("h4",null,(0,d.t)("Connect a database")),footer:Rt(),maskClosable:!1},!me&&J?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ze,{isLoading:me,isEditMode:vt,useSqlAlchemyForm:yt,hasConnectedDb:J,db:Z,dbName:re,dbModel:_t,editNewDb:se}),V&&(0,k.tZ)(st,null,(0,k.tZ)(b.Z,{buttonStyle:"secondary",onClick:()=>{ge(!0),Bt(),Nt("/dataset/add/")}},(0,d.t)("CREATE DATASET")),(0,k.tZ)(b.Z,{buttonStyle:"secondary",onClick:()=>{ge(!0),Bt(),Nt("/sqllab?db=true")}},(0,d.t)("QUERY DATA IN SQL LAB"))),se?Qt():(0,k.tZ)(_e,{extraExtension:pt,db:Z,onInputChange:({target:e})=>Ct(rt.InputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value}),onTextChange:({target:e})=>Ct(rt.TextChange,{name:e.name,value:e.value}),onEditorChange:e=>Ct(rt.EditorChange,e),onExtraInputChange:({target:e})=>{Ct(rt.ExtraInputChange,{type:e.type,name:e.name,checked:e.checked,value:e.value})},onExtraEditorChange:e=>Ct(rt.ExtraEditorChange,e)})):(0,k.tZ)(c.Fragment,null,!me&&(Z?(0,k.tZ)(c.Fragment,null,(0,k.tZ)(ze,{isLoading:me,isEditMode:vt,useSqlAlchemyForm:yt,hasConnectedDb:J,db:Z,dbName:re,dbModel:_t}),bt&&(()=>{var e,t,a,n,l;const{hostname:o}=window.location;let r=(null==gt||null==(e=gt.REGIONAL_IPS)?void 0:e.default)||"";const i=(null==gt?void 0:gt.REGIONAL_IPS)||{};return Object.entries(i).forEach((([e,t])=>{const a=new RegExp(e);o.match(a)&&(r=t)})),(null==Z?void 0:Z.engine)&&(0,k.tZ)(ne,null,(0,k.tZ)(g.Z,{closable:!1,css:e=>ae(e),type:"info",showIcon:!0,message:(null==(t=at[Z.engine])?void 0:t.message)||(null==gt||null==(a=gt.DEFAULT)?void 0:a.message),description:(null==(n=at[Z.engine])?void 0:n.description)||(null==gt||null==(l=gt.DEFAULT)?void 0:l.description)+r}))})(),Qt(),(0,k.tZ)("div",{css:e=>X(e)},_t.engine!==P.GSheet&&(0,k.tZ)(c.Fragment,null,(0,k.tZ)(b.Z,{buttonStyle:"link",onClick:()=>x({type:rt.ConfigMethodChange,payload:{engine:Z.engine,configuration_method:A.SqlalchemyUri,database_name:Z.database_name}}),css:ue},(0,d.t)("Connect this database with a SQLAlchemy URI string instead")),(0,k.tZ)(L.Z,{tooltip:(0,d.t)("Click this link to switch to an alternate form that allows you to input the SQLAlchemy URL for this database manually."),viewBox:"0 -6 24 24"}))),Zt&&jt()):(0,k.tZ)(be,null,(0,k.tZ)(ze,{isLoading:me,isEditMode:vt,useSqlAlchemyForm:yt,hasConnectedDb:J,db:Z,dbName:re,dbModel:_t}),(0,k.tZ)("div",{className:"preferred"},null==D||null==(Wt=D.databases)?void 0:Wt.filter((e=>e.preferred)).map((e=>(0,k.tZ)(M,{className:"preferred-item",onClick:()=>Ot(e.name),buttonText:e.name,icon:null==mt?void 0:mt[e.engine],key:`${e.name}`})))),(()=>{var e,t;return(0,k.tZ)("div",{className:"available"},(0,k.tZ)("h4",{className:"available-label"},(0,d.t)("Or choose from a list of other databases we support:")),(0,k.tZ)("div",{className:"control-label"},(0,d.t)("Supported databases")),(0,k.tZ)(m.IZ,{className:"available-select",onChange:Ot,placeholder:(0,d.t)("Choose a database..."),showSearch:!0},null==(e=[...(null==D?void 0:D.databases)||[]])?void 0:e.sort(((e,t)=>e.name.localeCompare(t.name))).map(((e,t)=>(0,k.tZ)(m.IZ.Option,{value:e.name,key:`database-${t}`},e.name))),(0,k.tZ)(m.IZ.Option,{value:"Other",key:"Other"},(0,d.t)("Other"))),(0,k.tZ)(g.Z,{showIcon:!0,closable:!1,css:e=>ae(e),type:"info",message:(null==gt||null==(t=gt.ADD_DATABASE)?void 0:t.message)||(0,d.t)("Want to add a new database?"),description:null!=gt&&gt.ADD_DATABASE?(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. "),(0,k.tZ)("a",{href:null==gt?void 0:gt.ADD_DATABASE.contact_link,target:"_blank",rel:"noopener noreferrer"},null==gt?void 0:gt.ADD_DATABASE.contact_description_link)," ",null==gt?void 0:gt.ADD_DATABASE.description):(0,k.tZ)(c.Fragment,null,(0,d.t)("Any databases that allow connections via SQL Alchemy URIs can be added. Learn about how to connect a database driver "),(0,k.tZ)("a",{href:Fe,target:"_blank",rel:"noopener noreferrer"},(0,d.t)("here")),".")}))})(),(0,k.tZ)(xe,null,(0,k.tZ)(m.gq,{name:"databaseFile",id:"databaseFile",accept:".yaml,.json,.yml,.zip",customRequest:()=>{},onChange:async e=>{He(""),je([]),Je([]),Ve([]),Ge([]),Se({}),ke({}),Ee({}),Te({}),Ie(!0),De([{...e.file,status:"done"}]),e.file.originFileObj instanceof File&&await Dt(e.file.originFileObj,we,$e,Ne,Ue,Me)&&(null==a||a())},onRemove:e=>(De(Le.filter((t=>t.uid!==e.uid))),!1)},(0,k.tZ)(b.Z,{buttonStyle:"link",type:"link",css:pe},(0,d.t)("Import database from file")))),Ht()))),me&&(0,k.tZ)(z.Z,null));var Wt,Gt,Xt,Yt}))},49041:(e,t,a)=>{a.d(t,{Z:()=>le});var n=a(73126),l=a(23279),o=a.n(l),r=a(67294),i=a(51995),s=a(11965),d=a(23525),c=a(4715),u=a(83862),p=a(58593),h=a(16550),m=a(73727),g=a(85931),v=a(13322),b=a(29147),y=a(27600),f=a(41609),Z=a.n(f),x=a(15926),_=a.n(x),w=a(28216),C=a(35755),S=a(75049),$=a(61988),k=a(31069),N=a(37921),E=a(12617),U=a(22318),T=a(1315),M=a(40768);const A=({version:e="unknownVersion",sha:t="unknownSHA",build:a="unknownBuild"})=>{const n=`https://apachesuperset.gateway.scarf.sh/pixel/0d3461e1-abb1-4691-a0aa-5ed50de66af0/${e}/${t}/${a}`;return(0,s.tZ)("img",{referrerPolicy:"no-referrer-when-downgrade",src:n,width:0,height:0,alt:""})},{SubMenu:P}=u.MainNav,L=i.iK.div`
  display: flex;
  align-items: center;

  & i {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
  }

  & a {
    display: block;
    width: 150px;
    word-wrap: break-word;
    text-decoration: none;
  }
`,D=i.iK.i`
  margin-top: 2px;
`;function q(e){const{locale:t,languages:a,...l}=e;return(0,s.tZ)(P,(0,n.Z)({"aria-label":"Languages",title:(0,s.tZ)("div",{className:"f16"},(0,s.tZ)(D,{className:`flag ${a[t].flag}`})),icon:(0,s.tZ)(v.Z.TriangleDown,null)},l),Object.keys(a).map((e=>(0,s.tZ)(u.MainNav.Item,{key:e,style:{whiteSpace:"normal",height:"auto"}},(0,s.tZ)(L,{className:"f16"},(0,s.tZ)("i",{className:`flag ${a[e].flag}`}),(0,s.tZ)("a",{href:a[e].url},a[e].name))))))}var O=a(39589);const I=(0,S.I)(),F=e=>s.iv`
  padding: ${1.5*e.gridUnit}px ${4*e.gridUnit}px
    ${4*e.gridUnit}px ${7*e.gridUnit}px;
  color: ${e.colors.grayscale.base};
  font-size: ${e.typography.sizes.xs}px;
  white-space: nowrap;
`,R=i.iK.div`
  color: ${({theme:e})=>e.colors.primary.dark1};
`,z=e=>s.iv`
  color: ${e.colors.grayscale.light1};
  .ant-menu-item-active {
    color: ${e.colors.grayscale.light1};
    cursor: default;
  }
`,H=i.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({align:e})=>e};
  align-items: center;
  margin-right: ${({theme:e})=>e.gridUnit}px;
  .ant-menu-submenu-title > svg {
    top: ${({theme:e})=>5.25*e.gridUnit}px;
  }
`,K=i.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,j=i.iK.a`
  padding-right: ${({theme:e})=>e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`,B=e=>s.iv`
  color: ${e.colors.grayscale.light5};
`,J=e=>s.iv`
  &:hover {
    color: ${e.colors.primary.base} !important;
    cursor: pointer !important;
  }
`,{SubMenu:Q}=u.MainNav,V=({align:e,settings:t,navbarRight:a,isFrontendRoute:n,environmentTag:l,setQuery:o})=>{const d=(0,w.v9)((e=>e.user)),c=(0,w.v9)((e=>{var t;return null==(t=e.dashboardInfo)?void 0:t.id})),h=d||{},{roles:g}=h,{CSV_EXTENSIONS:b,COLUMNAR_EXTENSIONS:y,EXCEL_EXTENSIONS:f,ALLOWED_EXTENSIONS:x,HAS_GSHEETS_INSTALLED:C}=(0,w.v9)((e=>e.common.conf)),[S,P]=(0,r.useState)(!1),[L,D]=(0,r.useState)(""),V=(0,E.R)("can_sqllab","Superset",g),W=(0,E.R)("can_write","Dashboard",g),G=(0,E.R)("can_write","Chart",g),X=(0,E.R)("can_write","Database",g),Y=(0,E.R)("can_write","Dataset",g),{canUploadData:ee,canUploadCSV:te,canUploadColumnar:ae,canUploadExcel:ne}=(0,M.Mc)(g,b,y,f,x),le=V||G||W,[oe,re]=(0,r.useState)(!1),[ie,se]=(0,r.useState)(!1),de=(0,U.i5)(d),ce=oe||de,ue=[{label:(0,$.t)("Data"),icon:"fa-database",childs:[{label:(0,$.t)("Connect database"),name:O.Z.DbConnection,perm:X&&!ie},{label:(0,$.t)("Create dataset"),name:O.Z.DatasetCreation,url:"/dataset/add/",perm:Y&&ie},{label:(0,$.t)("Connect Google Sheet"),name:O.Z.GoogleSheets,perm:X&&C},{label:(0,$.t)("Upload CSV to database"),name:"Upload a CSV",url:"/csvtodatabaseview/form",perm:te&&ce,disable:de&&!oe},{label:(0,$.t)("Upload columnar file to database"),name:"Upload a Columnar file",url:"/columnartodatabaseview/form",perm:ae&&ce,disable:de&&!oe},{label:(0,$.t)("Upload Excel file to database"),name:"Upload Excel",url:"/exceltodatabaseview/form",perm:ne&&ce,disable:de&&!oe}]},{label:(0,$.t)("SQL query"),url:"/sqllab?new=true",icon:"fa-fw fa-search",perm:"can_sqllab",view:"Superset"},{label:(0,$.t)("Chart"),url:Number.isInteger(c)?`/chart/add?dashboard_id=${c}`:"/chart/add",icon:"fa-fw fa-bar-chart",perm:"can_write",view:"Chart"},{label:(0,$.t)("Dashboard"),url:"/dashboard/new",icon:"fa-fw fa-dashboard",perm:"can_write",view:"Dashboard"}],pe=()=>{k.Z.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"allow_file_upload",opr:"upload_is_enabled",value:!0}]})}`}).then((({json:e})=>{var t;const a=(null==e||null==(t=e.result)?void 0:t.filter((e=>{var t;return null==e||null==(t=e.engine_information)?void 0:t.supports_file_upload})))||[];re((null==a?void 0:a.length)>=1)}))},he=()=>{k.Z.get({endpoint:`/api/v1/database/?q=${_().encode({filters:[{col:"database_name",opr:"neq",value:"examples"}]})}`}).then((({json:e})=>{se(e.count>=1)}))};(0,r.useEffect)((()=>{ee&&pe()}),[ee]),(0,r.useEffect)((()=>{(X||Y)&&he()}),[X,Y]);const me=e=>(0,s.tZ)(r.Fragment,null,(0,s.tZ)("i",{className:`fa ${e.icon}`}),e.label),ge=(0,$.t)("Enable 'Allow file uploads to database' in any database's settings"),ve=I.get("navbar.right"),be=I.get("navbar.right-menu.item.icon"),ye=(0,i.Fg)();return(0,s.tZ)(H,{align:e},X&&(0,s.tZ)(T.ZP,{onHide:()=>{D(""),P(!1)},show:S,dbEngine:L,onDatabaseAdd:()=>o({databaseAdded:!0})}),(null==l?void 0:l.text)&&(0,s.tZ)(N.Z,{css:(0,s.iv)({borderRadius:125*ye.gridUnit+"px"},"",""),color:/^#(?:[0-9a-f]{3}){1,2}$/i.test(l.color)?l.color:l.color.split(".").reduce(((e,t)=>e[t]),ye.colors)},(0,s.tZ)("span",{css:B},l.text)),(0,s.tZ)(u.MainNav,{selectable:!1,mode:"horizontal",onClick:e=>{e.key===O.Z.DbConnection?P(!0):e.key===O.Z.GoogleSheets&&(P(!0),D("Google Sheets"))},onOpenChange:e=>(e.length>1&&!Z()(null==e?void 0:e.filter((e=>{var t;return e.includes(`sub2_${null==ue||null==(t=ue[0])?void 0:t.label}`)})))&&(ee&&pe(),(X||Y)&&he()),null)},ve&&(0,s.tZ)(ve,null),!a.user_is_anonymous&&le&&(0,s.tZ)(Q,{title:(0,s.tZ)(R,{className:"fa fa-plus"}),icon:(0,s.tZ)(v.Z.TriangleDown,null)},null==ue||null==ue.map?void 0:ue.map((e=>{var t;const a=null==(t=e.childs)?void 0:t.some((e=>"object"==typeof e&&!!e.perm));if(e.childs){var l;if(a)return(0,s.tZ)(Q,{key:`sub2_${e.label}`,className:"data-menu",title:me(e)},null==e||null==(l=e.childs)||null==l.map?void 0:l.map(((e,t)=>"string"!=typeof e&&e.name&&e.perm?(0,s.tZ)(r.Fragment,{key:e.name},3===t&&(0,s.tZ)(u.MainNav.Divider,null),(e=>e.disable?(0,s.tZ)(u.MainNav.Item,{key:e.name,css:z},(0,s.tZ)(p.u,{placement:"top",title:ge},e.label)):(0,s.tZ)(u.MainNav.Item,{key:e.name,css:J},e.url?(0,s.tZ)("a",{href:e.url}," ",e.label," "):e.label))(e)):null)));if(!e.url)return null}return(0,E.R)(e.perm,e.view,g)&&(0,s.tZ)(u.MainNav.Item,{key:e.label},n(e.url)?(0,s.tZ)(m.rU,{to:e.url||""},(0,s.tZ)("i",{className:`fa ${e.icon}`})," ",e.label):(0,s.tZ)("a",{href:e.url},(0,s.tZ)("i",{className:`fa ${e.icon}`})," ",e.label))}))),(0,s.tZ)(Q,{title:(0,$.t)("Settings"),icon:(0,s.tZ)(v.Z.TriangleDown,{iconSize:"xl"})},null==t||null==t.map?void 0:t.map(((e,a)=>{var l;return[(0,s.tZ)(u.MainNav.ItemGroup,{key:`${e.label}`,title:e.label},null==e||null==(l=e.childs)||null==l.map?void 0:l.map((e=>{if("string"!=typeof e){const t=be?(0,s.tZ)(K,null,e.label,(0,s.tZ)(be,{menuChild:e})):e.label;return(0,s.tZ)(u.MainNav.Item,{key:`${e.label}`},n(e.url)?(0,s.tZ)(m.rU,{to:e.url||""},t):(0,s.tZ)("a",{href:e.url},t))}return null}))),a<t.length-1&&(0,s.tZ)(u.MainNav.Divider,{key:`divider_${a}`})]})),!a.user_is_anonymous&&[(0,s.tZ)(u.MainNav.Divider,{key:"user-divider"}),(0,s.tZ)(u.MainNav.ItemGroup,{key:"user-section",title:(0,$.t)("User")},a.user_info_url&&(0,s.tZ)(u.MainNav.Item,{key:"info"},(0,s.tZ)("a",{href:a.user_info_url},(0,$.t)("Info"))),(0,s.tZ)(u.MainNav.Item,{key:"logout"},(0,s.tZ)("a",{href:a.user_logout_url},(0,$.t)("Logout"))))],(a.version_string||a.version_sha)&&[(0,s.tZ)(u.MainNav.Divider,{key:"version-info-divider"}),(0,s.tZ)(u.MainNav.ItemGroup,{key:"about-section",title:(0,$.t)("About")},(0,s.tZ)("div",{className:"about-section"},a.show_watermark&&(0,s.tZ)("div",{css:F},(0,$.t)("Powered by Apache Superset")),a.version_string&&(0,s.tZ)("div",{css:F},(0,$.t)("Version"),": ",a.version_string),a.version_sha&&(0,s.tZ)("div",{css:F},(0,$.t)("SHA"),": ",a.version_sha),a.build_number&&(0,s.tZ)("div",{css:F},(0,$.t)("Build"),": ",a.build_number)))]),a.show_language_picker&&(0,s.tZ)(q,{locale:a.locale,languages:a.languages})),a.documentation_url&&(0,s.tZ)(r.Fragment,null,(0,s.tZ)(j,{href:a.documentation_url,target:"_blank",rel:"noreferrer",title:a.documentation_text||(0,$.t)("Documentation")},a.documentation_icon?(0,s.tZ)("i",{className:a.documentation_icon}):(0,s.tZ)("i",{className:"fa fa-question"})),(0,s.tZ)("span",null," ")),a.bug_report_url&&(0,s.tZ)(r.Fragment,null,(0,s.tZ)(j,{href:a.bug_report_url,target:"_blank",rel:"noreferrer",title:a.bug_report_text||(0,$.t)("Report a bug")},a.bug_report_icon?(0,s.tZ)("i",{className:a.bug_report_icon}):(0,s.tZ)("i",{className:"fa fa-bug"})),(0,s.tZ)("span",null," ")),a.user_is_anonymous&&(0,s.tZ)(j,{href:a.user_login_url},(0,s.tZ)("i",{className:"fa fa-fw fa-sign-in"}),(0,$.t)("Login")),(0,s.tZ)(A,{version:a.version_string,sha:a.version_sha,build:a.build_number}))},W=e=>{const[,t]=(0,C.Kx)({databaseAdded:C.dJ,datasetAdded:C.dJ});return(0,s.tZ)(V,(0,n.Z)({setQuery:t},e))};class G extends r.PureComponent{constructor(...e){super(...e),this.state={hasError:!1},this.noop=()=>{}}static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?(0,s.tZ)(V,(0,n.Z)({setQuery:this.noop},this.props)):this.props.children}}const X=e=>(0,s.tZ)(G,e,(0,s.tZ)(W,e)),Y=i.iK.header`
  ${({theme:e})=>`\n      background-color: ${e.colors.grayscale.light5};\n      margin-bottom: 2px;\n      z-index: 10;\n\n      &:nth-last-of-type(2) nav {\n        margin-bottom: 2px;\n      }\n      .caret {\n        display: none;\n      }\n      .navbar-brand {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        /* must be exactly the height of the Antd navbar */\n        min-height: 50px;\n        padding: ${e.gridUnit}px\n          ${2*e.gridUnit}px\n          ${e.gridUnit}px\n          ${4*e.gridUnit}px;\n        max-width: ${e.gridUnit*e.brandIconMaxWidth}px;\n        img {\n          height: 100%;\n          object-fit: contain;\n        }\n      }\n      .navbar-brand-text {\n        border-left: 1px solid ${e.colors.grayscale.light2};\n        border-right: 1px solid ${e.colors.grayscale.light2};\n        height: 100%;\n        color: ${e.colors.grayscale.dark1};\n        padding-left: ${4*e.gridUnit}px;\n        padding-right: ${4*e.gridUnit}px;\n        margin-right: ${6*e.gridUnit}px;\n        font-size: ${4*e.gridUnit}px;\n        float: left;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n\n        span {\n          max-width: ${58*e.gridUnit}px;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;\n        }\n        @media (max-width: 1127px) {\n          display: none;\n        }\n      }\n      .main-nav .ant-menu-submenu-title > svg {\n        top: ${5.25*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .navbar-brand {\n          float: none;\n        }\n      }\n      .ant-menu-horizontal .ant-menu-item {\n        height: 100%;\n        line-height: inherit;\n      }\n      .ant-menu > .ant-menu-item > a {\n        padding: ${4*e.gridUnit}px;\n      }\n      @media (max-width: 767px) {\n        .ant-menu-item {\n          padding: 0 ${6*e.gridUnit}px 0\n            ${3*e.gridUnit}px !important;\n        }\n        .ant-menu > .ant-menu-item > a {\n          padding: 0px;\n        }\n        .main-nav .ant-menu-submenu-title > svg:nth-of-type(1) {\n          display: none;\n        }\n        .ant-menu-item-active > a {\n          &:hover {\n            color: ${e.colors.primary.base} !important;\n            background-color: transparent !important;\n          }\n        }\n      }\n      .ant-menu-item a {\n        &:hover {\n          color: ${e.colors.grayscale.dark1};\n          background-color: ${e.colors.primary.light5};\n          border-bottom: none;\n          margin: 0;\n          &:after {\n            opacity: 1;\n            width: 100%;\n          }\n        }\n      }\n  `}
`,ee=e=>s.iv`
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light.ant-menu-submenu-placement-bottomLeft {
    border-radius: 0px;
  }
  .ant-menu-submenu.ant-menu-submenu-popup.ant-menu.ant-menu-light {
    border-radius: 0px;
  }
  .ant-menu-vertical > .ant-menu-submenu.data-menu > .ant-menu-submenu-title {
    height: 28px;
    i {
      padding-right: ${2*e.gridUnit}px;
      margin-left: ${1.75*e.gridUnit}px;
    }
  }
  .ant-menu-item-selected {
    background-color: transparent;
    &:not(.ant-menu-item-active) {
      color: inherit;
      border-bottom-color: transparent;
      & > a {
        color: inherit;
      }
    }
  }
  .ant-menu-horizontal > .ant-menu-item:has(> .is-active) {
    color: ${e.colors.primary.base};
    border-bottom-color: ${e.colors.primary.base};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
  .ant-menu-vertical > .ant-menu-item:has(> .is-active) {
    background-color: ${e.colors.primary.light5};
    & > a {
      color: ${e.colors.primary.base};
    }
  }
`,{SubMenu:te}=u.MainNav,{useBreakpoint:ae}=c.Grid;function ne({data:{menu:e,brand:t,navbar_right:a,settings:n,environment_tag:l},isFrontendRoute:f=(()=>!1)}){const[Z,x]=(0,r.useState)("horizontal"),_=ae(),w=(0,b.fG)(),C=(0,i.Fg)();let S;(0,r.useEffect)((()=>{function e(){window.innerWidth<=767?x("inline"):x("horizontal")}e();const t=o()((()=>e()),10);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[]),function(e){e.Explore="/explore",e.Dashboard="/dashboard",e.Chart="/chart",e.Datasets="/tablemodelview"}(S||(S={}));const $=[],[k,N]=(0,r.useState)($),E=(0,h.TH)();return(0,r.useEffect)((()=>{const e=E.pathname;switch(!0){case e.startsWith(S.Dashboard):N(["Dashboards"]);break;case e.startsWith(S.Chart)||e.startsWith(S.Explore):N(["Charts"]);break;case e.startsWith(S.Datasets):N(["Datasets"]);break;default:N($)}}),[E.pathname]),(0,d.eY)(y.KD.standalone)||w.hideNav?(0,s.tZ)(r.Fragment,null):(0,s.tZ)(Y,{className:"top",id:"main-menu",role:"navigation"},(0,s.tZ)(s.xB,{styles:ee(C)}),(0,s.tZ)(c.X2,null,(0,s.tZ)(c.JX,{md:16,xs:24},(0,s.tZ)(p.u,{id:"brand-tooltip",placement:"bottomLeft",title:t.tooltip,arrowPointAtCenter:!0},f(window.location.pathname)?(0,s.tZ)(g.m,{className:"navbar-brand",to:t.path},(0,s.tZ)("img",{src:t.icon,alt:t.alt})):(0,s.tZ)("a",{className:"navbar-brand",href:t.path},(0,s.tZ)("img",{src:t.icon,alt:t.alt}))),t.text&&(0,s.tZ)("div",{className:"navbar-brand-text"},(0,s.tZ)("span",null,t.text)),(0,s.tZ)(u.MainNav,{mode:Z,className:"main-nav",selectedKeys:k},e.map(((e,t)=>{var a;return(({label:e,childs:t,url:a,index:n,isFrontendRoute:l})=>a&&l?(0,s.tZ)(u.MainNav.Item,{key:e,role:"presentation"},(0,s.tZ)(m.OL,{role:"button",to:a,activeClassName:"is-active"},e)):a?(0,s.tZ)(u.MainNav.Item,{key:e},(0,s.tZ)("a",{href:a},e)):(0,s.tZ)(te,{key:n,title:e,icon:"inline"===Z?(0,s.tZ)(r.Fragment,null):(0,s.tZ)(v.Z.TriangleDown,null)},null==t?void 0:t.map(((t,a)=>"string"==typeof t&&"-"===t&&"Data"!==e?(0,s.tZ)(u.MainNav.Divider,{key:`$${a}`}):"string"!=typeof t?(0,s.tZ)(u.MainNav.Item,{key:`${t.label}`},t.isFrontendRoute?(0,s.tZ)(m.OL,{to:t.url||"",exact:!0,activeClassName:"is-active"},t.label):(0,s.tZ)("a",{href:t.url},t.label)):null))))({index:t,...e,isFrontendRoute:f(e.url),childs:null==(a=e.childs)?void 0:a.map((e=>"string"==typeof e?e:{...e,isFrontendRoute:f(e.url)}))})})))),(0,s.tZ)(c.JX,{md:8,xs:24},(0,s.tZ)(X,{align:_.md?"flex-end":"flex-start",settings:n,navbarRight:a,isFrontendRoute:f,environmentTag:l}))))}function le({data:e,...t}){const a={...e},l={Data:!0,Security:!0,Manage:!0},o=[],r=[];return a.menu.forEach((e=>{if(!e)return;const t=[],a={...e};e.childs&&(e.childs.forEach((e=>{("string"==typeof e||e.label)&&t.push(e)})),a.childs=t),l.hasOwnProperty(e.name)?r.push(a):o.push(a)})),a.menu=o,a.settings=r,(0,s.tZ)(ne,(0,n.Z)({data:a},t))}},61337:(e,t,a)=>{var n;function l(e,t){try{const a=localStorage.getItem(e);return null===a?t:JSON.parse(a)}catch{return t}}function o(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function r(e,t){return l(e,t)}function i(e,t){o(e,t)}a.d(t,{I_:()=>o,LS:()=>i,OH:()=>l,dR:()=>n,rV:()=>r}),function(e){e.Database="db",e.ChartSplitSizes="chart_split_sizes",e.ControlsWidth="controls_width",e.DatasourceWidth="datasource_width",e.IsDatapanelOpen="is_datapanel_open",e.HomepageChartFilter="homepage_chart_filter",e.HomepageDashboardFilter="homepage_dashboard_filter",e.HomepageCollapseState="homepage_collapse_state",e.HomepageActivityFilter="homepage_activity_filter",e.DatasetnameSetSuccessful="datasetname_set_successful",e.SqllabIsAutocompleteEnabled="sqllab__is_autocomplete_enabled",e.ExploreDataTableOriginalFormattedTimeColumns="explore__data_table_original_formatted_time_columns",e.DashboardCustomFilterBarWidths="dashboard__custom_filter_bar_widths",e.DashboardExploreContext="dashboard__explore_context",e.DashboardEditorShowOnlyMyCharts="dashboard__editor_show_only_my_charts",e.CommonResizableSidebarWidths="common__resizable_sidebar_widths"}(n||(n={}))}}]);
//# sourceMappingURL=9041.c8190a6b23a12ab1c530.entry.js.map