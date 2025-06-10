"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7317],{42878:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(73126),l=a(67294),o=a(45697),r=a.n(o),i=a(9875),s=a(61988),d=a(68135),c=a(35932),u=a(94670),p=a(1304),h=a(82342),m=a(11965);const v={name:r().string,onChange:r().func,initialValue:r().string,height:r().number,minLines:r().number,maxLines:r().number,offerEditInModal:r().bool,language:r().oneOf([null,"json","html","sql","markdown","javascript"]),aboveEditorSection:r().node,readOnly:r().bool,resize:r().oneOf([null,"block","both","horizontal","inline","none","vertical"]),textAreaStyles:r().object};class g extends l.Component{onControlChange(e){const{value:t}=e.target;this.props.onChange(t)}onAreaEditorChange(e){this.props.onChange(e)}renderEditor(e=!1){const t=e?40:this.props.minLines||12;if(this.props.language){const a={border:`1px solid ${this.props.theme.colors.grayscale.light1}`,minHeight:`${t}em`,width:"auto",...this.props.textAreaStyles};return this.props.resize&&(a.resize=this.props.resize),this.props.readOnly&&(a.backgroundColor="#f2f2f2"),(0,m.tZ)(u.YH,(0,n.Z)({mode:this.props.language,style:a,minLines:t,maxLines:e?1e3:this.props.maxLines,editorProps:{$blockScrolling:!0},defaultValue:this.props.initialValue,readOnly:this.props.readOnly,key:this.props.name},this.props,{onChange:this.onAreaEditorChange.bind(this)}))}return(0,m.tZ)(i.Kx,{placeholder:(0,s.t)("textarea"),onChange:this.onControlChange.bind(this),defaultValue:this.props.initialValue,disabled:this.props.readOnly,style:{height:this.props.height}})}renderModalBody(){return(0,m.tZ)(l.Fragment,null,(0,m.tZ)("div",null,this.props.aboveEditorSection),this.renderEditor(!0))}render(){const e=(0,m.tZ)(h.Z,this.props);return(0,m.tZ)("div",null,e,this.renderEditor(),this.props.offerEditInModal&&(0,m.tZ)(p.Z,{modalTitle:e,triggerNode:(0,m.tZ)(c.Z,{buttonSize:"small",className:"m-t-5"},(0,s.t)("Edit")," ",(0,m.tZ)("strong",null,this.props.language)," ",(0,s.t)("in modal")),modalBody:this.renderModalBody(!0),responsive:!0}))}}g.propTypes=v,g.defaultProps={onChange:()=>{},initialValue:"",height:250,minLines:3,maxLines:10,offerEditInModal:!0,readOnly:!1,resize:null,textAreaStyles:{}};const b=(0,d.b)(g)},9433:(e,t,a)=>{a.d(t,{Bj:()=>c});var n=a(73126),l=(a(67294),a(38179)),o=a(61988),r=a(51995),i=a(61247),s=a(11965);const d={everyText:(0,o.t)("every"),emptyMonths:(0,o.t)("every month"),emptyMonthDays:(0,o.t)("every day of the month"),emptyMonthDaysShort:(0,o.t)("day of the month"),emptyWeekDays:(0,o.t)("every day of the week"),emptyWeekDaysShort:(0,o.t)("day of the week"),emptyHours:(0,o.t)("every hour"),emptyMinutes:(0,o.t)("every minute"),emptyMinutesForHourPeriod:(0,o.t)("every"),yearOption:(0,o.t)("year"),monthOption:(0,o.t)("month"),weekOption:(0,o.t)("week"),dayOption:(0,o.t)("day"),hourOption:(0,o.t)("hour"),minuteOption:(0,o.t)("minute"),rebootOption:(0,o.t)("reboot"),prefixPeriod:(0,o.t)("Every"),prefixMonths:(0,o.t)("in"),prefixMonthDays:(0,o.t)("on"),prefixWeekDays:(0,o.t)("on"),prefixWeekDaysForMonthAndYearPeriod:(0,o.t)("or"),prefixHours:(0,o.t)("at"),prefixMinutes:(0,o.t)(":"),prefixMinutesForHourPeriod:(0,o.t)("at"),suffixMinutesForHourPeriod:(0,o.t)("minute(s)"),errorInvalidCron:(0,o.t)("Invalid cron expression"),clearButtonText:(0,o.t)("Clear"),weekDays:[(0,o.t)("Sunday"),(0,o.t)("Monday"),(0,o.t)("Tuesday"),(0,o.t)("Wednesday"),(0,o.t)("Thursday"),(0,o.t)("Friday"),(0,o.t)("Saturday")],months:[(0,o.t)("January"),(0,o.t)("February"),(0,o.t)("March"),(0,o.t)("April"),(0,o.t)("May"),(0,o.t)("June"),(0,o.t)("July"),(0,o.t)("August"),(0,o.t)("September"),(0,o.t)("October"),(0,o.t)("November"),(0,o.t)("December")],altWeekDays:[(0,o.t)("SUN"),(0,o.t)("MON"),(0,o.t)("TUE"),(0,o.t)("WED"),(0,o.t)("THU"),(0,o.t)("FRI"),(0,o.t)("SAT")],altMonths:[(0,o.t)("JAN"),(0,o.t)("FEB"),(0,o.t)("MAR"),(0,o.t)("APR"),(0,o.t)("MAY"),(0,o.t)("JUN"),(0,o.t)("JUL"),(0,o.t)("AUG"),(0,o.t)("SEP"),(0,o.t)("OCT"),(0,o.t)("NOV"),(0,o.t)("DEC")]},c=(0,r.iK)((e=>(0,s.tZ)(l.ZP,{getPopupContainer:e=>e.parentElement},(0,s.tZ)(i.Z,(0,n.Z)({locale:d},e)))))`
  ${({theme:e})=>`\n\n    /* Boilerplate styling for ReactCronPicker imported explicitly in GlobalStyles.tsx */\n\n    /* When year period is selected */\n\n    :has(.react-js-cron-months) {\n      display: grid !important;\n      grid-template-columns: repeat(2, 50%);\n      column-gap: ${e.gridUnit}px;\n      row-gap: ${2*e.gridUnit}px;\n      div:has(.react-js-cron-hours) {\n        grid-column: span 2;\n        display: flex;\n        justify-content: space-between;\n        .react-js-cron-field {\n          width: 50%;\n        }\n      }\n    }\n\n    /* When month period is selected */\n\n    :not(:has(.react-js-cron-months)) {\n      display: grid;\n      grid-template-columns: repeat(2, 50%);\n      column-gap: ${e.gridUnit}px;\n      row-gap: ${2*e.gridUnit}px;\n      .react-js-cron-period {\n        grid-column: span 2;\n      }\n      div:has(.react-js-cron-hours) {\n        grid-column: span 2;\n        display: flex;\n        justify-content: space-between;\n        .react-js-cron-field {\n          width: 50%;\n        }\n      }\n    }\n\n    /* When week period is selected */\n\n    :not(:has(.react-js-cron-month-days)) {\n      .react-js-cron-week-days {\n        grid-column: span 2;\n      }\n    }\n\n    /* For proper alignment of inputs and span elements */\n\n    :not(div:has(.react-js-cron-hours)) {\n      display: flex;\n      flex-wrap: nowrap;\n    }\n\n    div:has(.react-js-cron-hours) {\n      width: 100%;\n    }\n\n    .react-js-cron-minutes > span {\n      padding-left: ${e.gridUnit}px;\n    }\n\n    /* Sizing of select container */\n\n    .react-js-cron-select.ant-select {\n      width: 100%;\n      .ant-select-selector {\n        flex-wrap: nowrap;\n      }\n    }\n\n    .react-js-cron-field {\n      width: 100%;\n      margin-bottom: 0px;\n      > span {\n        margin-left: 0px;\n      }\n    }\n\n    .react-js-cron-custom-select .ant-select-selection-placeholder {\n      flex: auto;\n      border-radius: ${e.gridUnit}px;\n    }\n\n    .react-js-cron-custom-select .ant-select-selection-overflow-item {\n      align-self: center;\n    }\n\n    .react-js-cron-select > div:first-of-type,\n    .react-js-cron-custom-select {\n      border-radius: ${e.gridUnit}px;\n    }\n  `}
`},12441:(e,t,a)=>{a.d(t,{r:()=>i}),a(67294);var n=a(51995),l=a(40987),o=a(11965);const r=(0,n.iK)(l.Z)`
  .ant-switch-checked {
    background-color: ${({theme:e})=>e.colors.primary.base};
  }
`,i=e=>(0,o.tZ)(r,e)},98978:(e,t,a)=>{a.d(t,{Z:()=>Z});var n=a(11965),l=a(67294),o=a(80008),r=a.n(o),i=a(61988),s=a(4715);const d="GMT Standard Time",c="400px",u={"-300-240":["Eastern Standard Time","Eastern Daylight Time"],"-360-300":["Central Standard Time","Central Daylight Time"],"-420-360":["Mountain Standard Time","Mountain Daylight Time"],"-420-420":["Mountain Standard Time - Phoenix","Mountain Standard Time - Phoenix"],"-480-420":["Pacific Standard Time","Pacific Daylight Time"],"-540-480":["Alaska Standard Time","Alaska Daylight Time"],"-600-600":["Hawaii Standard Time","Hawaii Daylight Time"],60120:["Central European Time","Central European Daylight Time"],"00":[d,d],"060":["GMT Standard Time - London","British Summer Time"]},p=r()(),h=r()([2021,1]),m=r()([2021,7]),v=e=>h.tz(e).utcOffset().toString()+m.tz(e).utcOffset().toString(),g=e=>{var t,a;const n=v(e);return(p.tz(e).isDST()?null==(t=u[n])?void 0:t[1]:null==(a=u[n])?void 0:a[0])||e},b=r().tz.countries().map((e=>r().tz.zonesForCountry(e,!0))).flat(),T=[];b.forEach((e=>{T.find((t=>v(t.name)===v(e.name)))||T.push(e)}));const f=T.map((e=>({label:`GMT ${r().tz(p,e.name).format("Z")} (${g(e.name)})`,value:e.name,offsets:v(e.name),timezoneName:e.name}))),E=(e,t)=>r().tz(p,e.timezoneName).utcOffset()-r().tz(p,t.timezoneName).utcOffset();f.sort(E);const _=e=>{var t;return(null==(t=f.find((t=>t.offsets===v(e))))?void 0:t.value)||"Africa/Abidjan"};function Z({onTimezoneChange:e,timezone:t,minWidth:a=c}){const o=(0,l.useMemo)((()=>_(t||r().tz.guess())),[t]);return(0,l.useEffect)((()=>{t!==o&&e(o)}),[o,e,t]),(0,n.tZ)(s.Ph,{ariaLabel:(0,i.t)("Timezone selector"),css:(0,n.iv)({minWidth:a},"",""),onChange:t=>e(t),value:o,options:f,sortComparator:E})}},67317:(e,t,a)=>{a.d(t,{j5:()=>B,KL:()=>te,ZP:()=>ne});var n=a(67294),l=a(61988),o=a(11965),r=a(51995),i=a(93185),s=a(31069),d=a(15926),c=a.n(d),u=a(34858),p=a(9875),h=a(12441),m=a(74069),v=a(43700),g=a(98978),b=a(85633),T=a(14114),f=a(4715),E=a(42878),_=a(18451),Z=a(9882),y=a(90335),N=a(28216);function R({timeUnit:e,min:t,name:a,value:l,placeholder:r,onChange:i}){const[s,d]=(0,n.useState)(!1);return(0,o.tZ)("input",{type:"text",min:t,name:a,value:l?`${l}${s?"":` ${e}`}`:"",placeholder:r,onFocus:()=>d(!0),onBlur:()=>d(!1),onChange:i})}var x,S=a(9433);!function(e){e.Picker="picker",e.Input="input"}(x||(x={}));const C=[{label:(0,l.t)("Recurring (every)"),value:x.Picker},{label:(0,l.t)("CRON Schedule"),value:x.Input}],O=({value:e,onChange:t})=>{const a=(0,r.Fg)(),i=(0,n.useRef)(null),[s,d]=(0,n.useState)(x.Picker),c=(0,n.useCallback)((e=>{var a;t(e),null==(a=i.current)||a.setValue(e)}),[i,t]),u=(0,n.useCallback)((e=>{t(e.target.value)}),[t]),h=(0,n.useCallback)((()=>{var e;t((null==(e=i.current)?void 0:e.input.value)||"")}),[t]),[m,v]=(0,n.useState)();return(0,o.tZ)(n.Fragment,null,(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Schedule type"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Schedule type"),placeholder:(0,l.t)("Schedule type"),onChange:e=>{d(e)},value:s,options:C}))),(0,o.tZ)(B,{className:"styled-input"},(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Schedule"),(0,o.tZ)("span",{className:"required"},"*")),s===x.Input&&(0,o.tZ)(p.II,{type:"text",name:"crontab",ref:i,style:m?{borderColor:a.colors.error.base}:{},placeholder:(0,l.t)("CRON expression"),value:e,onBlur:u,onChange:e=>c(e.target.value),onPressEnter:h}),s===x.Picker&&(0,o.tZ)(S.Bj,{clearButton:!1,value:e,setValue:c,displayError:s===x.Picker,onError:v})))};var A=a(13322);const L=r.iK.div`
  margin-bottom: 10px;

  .input-container {
    textarea {
      height: auto;
    }
  }

  .inline-container {
    margin-bottom: 10px;

    > div {
      margin: 0;
    }

    .delete-button {
      margin-left: 10px;
      padding-top: 3px;
    }
  }
`,k=({setting:e=null,index:t,onUpdate:a,onRemove:i})=>{const{method:s,recipients:d,options:c}=e||{},[u,p]=(0,n.useState)(d||""),h=(0,r.Fg)();return e?(d&&u!==d&&p(d),(0,o.tZ)(L,null,(0,o.tZ)("div",{className:"inline-container"},(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Notification Method")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Delivery method"),onChange:n=>{if(p(""),a){const l={...e,method:n,recipients:""};a(t,l)}},placeholder:(0,l.t)("Select Delivery Method"),options:(c||[]).map((e=>({label:e,value:e}))),value:s}),0!==t&&i?(0,o.tZ)("span",{role:"button",tabIndex:0,className:"delete-button",onClick:()=>i(t)},(0,o.tZ)(A.Z.Trash,{iconColor:h.colors.grayscale.base})):null))),void 0!==s?(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("%s recipients",s),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)("textarea",{name:"recipients",value:u,onChange:n=>{const{target:l}=n;if(p(l.value),a){const n={...e,recipients:l.value};a(t,n)}}})),(0,o.tZ)("div",{className:"helper"},(0,l.t)('Recipients are separated by "," or ";"'))):null)):null};var I=a(40695);const w=({title:e,subtitle:t,validateCheckStatus:a,testId:n})=>{const r=(0,o.tZ)(I.Z,null);return(0,o.tZ)("div",{className:"collapse-panel-header"},(0,o.tZ)("div",{className:"collapse-panel-title"},(0,o.tZ)("span",null,(0,l.t)(e)),a?(0,o.tZ)("span",{className:"validation-checkmark"},r):(0,o.tZ)("span",{className:"collapse-panel-asterisk"}," *")),(0,o.tZ)("p",{className:"collapse-panel-subtitle"},t?(0,l.t)(t):void 0))};var $=a(73126),j=a(46445);const U=e=>(0,o.tZ)(j.Z.Panel,(0,$.Z)({css:e=>(e=>o.iv`
  .ant-collapse-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px ${4*e.gridUnit}px;

    .anticon.anticon-right.ant-collapse-arrow {
      padding: 0;
      top: calc(50% - ${6}px);
    }

    .collapse-panel-title {
      font-size: ${4*e.gridUnit}px;
      font-weight: ${e.typography.weights.bold};
      line-height: 130%;
    }

    .collapse-panel-subtitle {
      color: ${e.colors.grayscale.base};
      font-size: ${e.typography.sizes.s}px;
      font-weight: ${e.typography.weights.normal};
      line-height: 150%;
      margin-bottom: 0;
      padding-top: ${e.gridUnit}px;
    }

    .collapse-panel-asterisk {
      color: var(--semantic-error-base, ${e.colors.warning.dark1});
    }
    .validation-checkmark {
      width: ${4*e.gridUnit}px;
      height: ${4*e.gridUnit}px;
      margin-left: ${e.gridUnit}px;
      color: ${e.colors.success.base};
    }
  }
`)(e)},e)),P=r.iK.ul`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
  padding-inline-start: ${({theme:e})=>3*e.gridUnit}px;
`,M=["pivot_table_v2","table","paired_ttest"],D=["Email"],z="PNG",q=[{label:(0,l.t)("< (Smaller than)"),value:"<"},{label:(0,l.t)("> (Larger than)"),value:">"},{label:(0,l.t)("<= (Smaller or equal)"),value:"<="},{label:(0,l.t)(">= (Larger or equal)"),value:">="},{label:(0,l.t)("== (Is equal)"),value:"=="},{label:(0,l.t)("!= (Is not equal)"),value:"!="},{label:(0,l.t)("Not null"),value:"not null"}],F=[{label:(0,l.t)("None"),value:0},{label:(0,l.t)("30 days"),value:30},{label:(0,l.t)("60 days"),value:60},{label:(0,l.t)("90 days"),value:90}],G=[{label:(0,l.t)("Dashboard"),value:"dashboard"},{label:(0,l.t)("Chart"),value:"chart"}],W={png:{label:(0,l.t)("Send as PNG"),value:"PNG"},csv:{label:(0,l.t)("Send as CSV"),value:"CSV"},txt:{label:(0,l.t)("Send as text"),value:"TEXT"}},X=o.iv`
  margin-bottom: 0;
`,K=(0,r.iK)(m.default)`
  .ant-modal-body {
    height: 720px;
  }

  .control-label {
    margin-top: ${({theme:e})=>e.gridUnit}px;
  }

  .ant-collapse > .ant-collapse-item {
    border-bottom: none;
  }

  .inline-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    &.wrap {
      flex-wrap: wrap;
    }

    > div {
      flex: 1 1 auto;
    }
  }
`,V=r.iK.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  .switch-label {
    margin-left: 10px;
  }
`,B=r.iK.div`
  ${({theme:e})=>o.iv`
    flex: 1;
    margin-top: 0px;
    margin-bottom: ${4*e.gridUnit}px;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }

    .helper {
      display: block;
      color: ${e.colors.grayscale.base};
      font-size: ${e.typography.sizes.s}px;
      padding: ${e.gridUnit}px 0;
      text-align: left;
    }

    .required {
      margin-left: ${e.gridUnit/2}px;
      color: ${e.colors.error.base};
    }

    .input-container {
      display: flex;
      align-items: center;

      > div {
        width: 100%;
      }

      label {
        display: flex;
        margin-right: ${2*e.gridUnit}px;
      }

      i {
        margin: 0 ${e.gridUnit}px;
      }
    }

    input,
    textarea {
      flex: 1 1 auto;
    }

    input[disabled] {
      color: ${e.colors.grayscale.base};
    }

    textarea {
      height: 300px;
      resize: none;
    }

    input::placeholder,
    textarea::placeholder {
      color: ${e.colors.grayscale.light1};
    }

    textarea,
    input[type='text'],
    input[type='number'] {
      padding: ${e.gridUnit}px ${2*e.gridUnit}px;
      border-style: none;
      border: 1px solid ${e.colors.grayscale.light2};
      border-radius: ${e.gridUnit}px;

      &[name='description'] {
        flex: 1 1 auto;
      }
    }

    .input-label {
      margin-left: 10px;
    }
  `}
`,H=(0,r.iK)(f.r4)`
  margin-top: ${({theme:e})=>0*e.gridUnit}px;
`,J=(0,r.iK)(Z.V)`
  margin-left: ${({theme:e})=>e.gridUnit}px;
`,Q=r.iK.div`
  ${({theme:e})=>o.iv`
    color: ${e.colors.primary.dark1};
    cursor: pointer;

    i {
      margin-right: ${2*e.gridUnit}px;
    }

    &.disabled {
      color: ${e.colors.grayscale.light1};
      cursor: default;
    }
  `}
`,Y=r.iK.div`
  .inline-container .input-container {
    margin-left: 0;
  }
`,ee=e=>o.iv`
  margin-right: ${3*e.gridUnit}px;
`,te={GENERAL_TITLE:(0,l.t)("General information"),ALERT_CONDITION_TITLE:(0,l.t)("Alert condition"),ALERT_CONTENTS_TITLE:(0,l.t)("Alert contents"),REPORT_CONTENTS_TITLE:(0,l.t)("Report contents"),SCHEDULE_TITLE:(0,l.t)("Schedule"),NOTIFICATION_TITLE:(0,l.t)("Notification method"),NAME_ERROR_TEXT:(0,l.t)("name"),OWNERS_ERROR_TEXT:(0,l.t)("owners"),CONTENT_ERROR_TEXT:(0,l.t)("content type"),DATABASE_ERROR_TEXT:(0,l.t)("database"),SQL_ERROR_TEXT:(0,l.t)("sql"),ALERT_CONDITION_ERROR_TEXT:(0,l.t)("alert condition"),CRONTAB_ERROR_TEXT:(0,l.t)("crontab"),WORKING_TIMEOUT_ERROR_TEXT:(0,l.t)("working timeout"),RECIPIENTS_ERROR_TEXT:(0,l.t)("recipients"),ERROR_TOOLTIP_MESSAGE:(0,l.t)("Not all required fields are complete. Please provide the following:")},ae=({status:e="active",onClick:t})=>"hidden"===e?null:(0,o.tZ)(Q,{className:e,onClick:()=>{"disabled"!==e&&t()}},(0,o.tZ)("i",{className:"fa fa-plus"})," ","active"===e?(0,l.t)("Add another notification method"):(0,l.t)("Add delivery method")),ne=(0,T.ZP)((({addDangerToast:e,onAdd:t,onHide:a,show:r,alert:d=null,isReport:m=!1,addSuccessToast:T})=>{var Z,x,S,C,A,L,I,$;const j=(0,N.v9)((e=>e.user)),Q=(0,_.c)(),ne=(null==Q?void 0:Q.ALERT_REPORTS_NOTIFICATION_METHODS)||D,[le,oe]=(0,n.useState)(!0),[re,ie]=(0,n.useState)(),[se,de]=(0,n.useState)(!0),[ce,ue]=(0,n.useState)("dashboard"),[pe,he]=(0,n.useState)(z),[me,ve]=(0,n.useState)(!1),[ge,be]=(0,n.useState)(!1);(0,n.useEffect)((()=>{be("dashboard"===ce||"chart"===ce&&"PNG"===pe)}),[ce,pe]);const[Te,fe]=(0,n.useState)(!1),[Ee,_e]=(0,n.useState)([]),[Ze,ye]=(0,n.useState)([]),[Ne,Re]=(0,n.useState)([]),[xe,Se]=(0,n.useState)({[y.bx.General]:{hasErrors:!1,name:te.GENERAL_TITLE,errors:[]},[y.bx.Content]:{hasErrors:!1,name:m?te.REPORT_CONTENTS_TITLE:te.ALERT_CONTENTS_TITLE,errors:[]},[y.bx.Alert]:{hasErrors:!1,name:te.ALERT_CONDITION_TITLE,errors:[]},[y.bx.Schedule]:{hasErrors:!1,name:te.SCHEDULE_TITLE,errors:[]},[y.bx.Notification]:{hasErrors:!1,name:te.NOTIFICATION_TITLE,errors:[]}}),[Ce,Oe]=(0,n.useState)(""),Ae=(e,t)=>{Se((a=>({...a,[e]:{hasErrors:t.length>0,name:a[e].name,errors:t}})))},[Le,ke]=(0,n.useState)(""),Ie=m?"report":"alert",we=null!==d,$e="chart"===ce&&((0,i.cr)(i.TT.AlertsAttachReports)||m),[je,Ue]=(0,n.useState)("active"),[Pe,Me]=(0,n.useState)([]),{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:De,ALERT_REPORTS_DEFAULT_CRON_VALUE:ze,ALERT_REPORTS_DEFAULT_RETENTION:qe}=(0,N.v9)((e=>{var t,a,n,l;const o=null==(t=e.common)?void 0:t.conf;return{ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT:null!=(a=null==o?void 0:o.ALERT_REPORTS_DEFAULT_WORKING_TIMEOUT)?a:3600,ALERT_REPORTS_DEFAULT_CRON_VALUE:null!=(n=null==o?void 0:o.ALERT_REPORTS_DEFAULT_CRON_VALUE)?n:"0 0 * * *",ALERT_REPORTS_DEFAULT_RETENTION:null!=(l=null==o?void 0:o.ALERT_REPORTS_DEFAULT_RETENTION)?l:90}})),Fe={active:!0,creation_method:"alerts_reports",crontab:ze,log_retention:qe,working_timeout:De,name:"",owners:[],recipients:[],sql:"",validator_config_json:{},validator_type:"",force_screenshot:!1,grace_period:void 0},Ge=(e,t)=>{const a=[...Pe];a[e]=t,Pe[e].method!==t.method?(Pe[e]=t,Me(Pe.filter(((t,a)=>a<=e))),Pe.length-1>e&&Ue("active"),void 0!==t.method&&"hidden"!==je&&Ue("active")):Me(a)},We=e=>{const t=Pe.slice();t.splice(e,1),Me(t),Ue("active")},{state:{loading:Xe,resource:Ke,error:Ve},fetchResource:Be,createResource:He,updateResource:Je,clearError:Qe}=(0,u.LE)("report",(0,l.t)("report"),e),Ye=()=>{Qe(),de(!0),a(),Me([]),ie({...Fe}),Ue("active")},et=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/created_by?q=${n}`}).then((e=>({data:e.json.result.map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),tt=(0,n.useCallback)((e=>{const t=e||(null==re?void 0:re.database);if(!t||t.label)return null;let a;return Ee.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[null==re?void 0:re.database,Ee]),at=(e,t)=>{ie((a=>({...a,[e]:t})))},nt=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/database?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return _e(t),{data:t,totalCount:e.json.count}}))}),[]),lt=(null==re?void 0:re.database)&&!re.database.label;(0,n.useEffect)((()=>{lt&&at("database",tt())}),[lt,tt]);const ot=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/dashboard?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return ye(t),{data:t,totalCount:e.json.count}}))}),[]),rt=e=>{const t=e||(null==re?void 0:re.dashboard);if(!t||t.label)return null;let a;return Ze.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a},it=(0,n.useCallback)((e=>{const t=e||(null==re?void 0:re.chart);if(!t||t.label)return null;let a;return Ne.forEach((e=>{e.value!==t.value&&e.value!==t.id||(a=e)})),a}),[Ne,null==re?void 0:re.chart]),st=(null==re?void 0:re.chart)&&!(null!=re&&re.chart.label);(0,n.useEffect)((()=>{st&&at("chart",it())}),[it,st]);const dt=(0,n.useMemo)((()=>(e="",t,a)=>{const n=c().encode_uri({filter:e,page:t,page_size:a});return s.Z.get({endpoint:`/api/v1/report/related/chart?q=${n}`}).then((e=>{const t=e.json.result.map((e=>({value:e.value,label:e.text})));return Re(t),{data:t,totalCount:e.json.count}}))}),[]),ct=e=>{const{target:{type:t,value:a,name:n}}=e,l="number"===t?parseInt(a,10)||null:a;at(n,l)},ut=e=>{const{target:t}=e,a=+t.value;at(t.name,0===a?void 0:a?Math.max(a,1):a)},pt=()=>{(()=>{var e,t;const a=[];null!=re&&null!=(e=re.name)&&e.length||a.push(te.NAME_ERROR_TEXT),null!=re&&null!=(t=re.owners)&&t.length||a.push(te.OWNERS_ERROR_TEXT),Ae(y.bx.General,a)})(),(()=>{const e=[];"dashboard"===ce&&null!=re&&re.dashboard||"chart"===ce&&null!=re&&re.chart||e.push(te.CONTENT_ERROR_TEXT),Ae(y.bx.Content,e)})(),m||(()=>{var e,t,a;const n=[];null!=re&&re.database||n.push(te.DATABASE_ERROR_TEXT),null!=re&&null!=(e=re.sql)&&e.length||n.push(te.SQL_ERROR_TEXT),(Te||null!=re&&null!=(t=re.validator_config_json)&&t.op)&&(Te||void 0!==(null==re||null==(a=re.validator_config_json)?void 0:a.threshold))||n.push(te.ALERT_CONDITION_ERROR_TEXT),Ae(y.bx.Alert,n)})(),(()=>{var e;const t=[];null!=re&&null!=(e=re.crontab)&&e.length||t.push(te.CRONTAB_ERROR_TEXT),null!=re&&re.working_timeout||t.push(te.WORKING_TIMEOUT_ERROR_TEXT),Ae(y.bx.Schedule,t)})(),(()=>{const e=(()=>{if(!Pe.length)return!1;let e=!1;return Pe.forEach((t=>{var a;t.method&&null!=(a=t.recipients)&&a.length&&(e=!0)})),e})()?[]:[te.RECIPIENTS_ERROR_TEXT];Ae(y.bx.Notification,e)})()};(0,n.useEffect)((()=>{if(we&&(null==re||!re.id||(null==d?void 0:d.id)!==re.id||se&&r)){if(null!==(null==d?void 0:d.id)&&!Xe&&!Ve){const e=d.id||0;Be(e)}}else!we&&(!re||re.id||se&&r)&&(ie({...Fe,owners:j?[{value:j.userId,label:`${j.firstName} ${j.lastName}`}]:[]}),Me([{recipients:"",options:ne,method:"Email"}]),Ue("active"))}),[d]),(0,n.useEffect)((()=>{if(Ke){const e=(Ke.recipients||[]).map((e=>{const t="string"==typeof e.recipient_config_json?JSON.parse(e.recipient_config_json):{};return{method:e.type,recipients:t.target||e.recipient_config_json,options:ne}}));Me(e),Ue(e.length===ne.length?"hidden":"active"),ue(Ke.chart?"chart":"dashboard"),he(Ke.chart&&Ke.report_format||z);const t="string"==typeof Ke.validator_config_json?JSON.parse(Ke.validator_config_json):Ke.validator_config_json;fe("not null"===Ke.validator_type),Ke.chart&&ke(Ke.chart.viz_type),ve(Ke.force_screenshot),ie({...Ke,chart:Ke.chart?it(Ke.chart)||{value:Ke.chart.id,label:Ke.chart.slice_name}:void 0,dashboard:Ke.dashboard?rt(Ke.dashboard)||{value:Ke.dashboard.id,label:Ke.dashboard.dashboard_title}:void 0,database:Ke.database?tt(Ke.database)||{value:Ke.database.id,label:Ke.database.database_name}:void 0,owners:((null==d?void 0:d.owners)||[]).map((e=>({value:e.value||e.id,label:e.label||`${e.first_name} ${e.last_name}`}))),validator_config_json:"not null"===Ke.validator_type?{op:"not null"}:t})}}),[Ke]);const ht=re||{};return(0,n.useEffect)((()=>{pt()}),[ht.name,ht.owners,ht.database,ht.sql,ht.validator_config_json,ht.crontab,ht.working_timeout,ht.dashboard,ht.chart,ce,Pe,Te]),(0,n.useEffect)((()=>{(()=>{const e=[y.bx.General,y.bx.Content,m?void 0:y.bx.Alert,y.bx.Schedule,y.bx.Notification].some((e=>e&&xe[e].hasErrors)),t=e?(e=>{const t=[];return Object.values(e).forEach((e=>{if(e.hasErrors){const a=`${e.name}: `;t.push(a+e.errors.join(", "))}})),(0,o.tZ)("div",null,te.ERROR_TOOLTIP_MESSAGE,(0,o.tZ)(P,null,t.map((e=>(0,o.tZ)("li",{key:e},e)))))})(xe):"";Oe(t),oe(e)})()}),[xe]),se&&r&&de(!1),(0,o.tZ)(K,{className:"no-content-padding",responsive:!0,disablePrimaryButton:le,primaryTooltipMessage:Ce,onHandledPrimaryAction:()=>{var e,a,n;const o=[];Pe.forEach((e=>{e.method&&e.recipients.length&&o.push({recipient_config_json:{target:e.recipients},type:e.method})}));const r="chart"===ce&&!m,i={...re,type:m?"Report":"Alert",force_screenshot:r||me,validator_type:Te?"not null":"operator",validator_config_json:Te?{}:null==re?void 0:re.validator_config_json,chart:"chart"===ce?null==re||null==(e=re.chart)?void 0:e.value:null,dashboard:"dashboard"===ce?null==re||null==(a=re.dashboard)?void 0:a.value:null,custom_width:ge?null==re?void 0:re.custom_width:void 0,database:null==re||null==(n=re.database)?void 0:n.value,owners:((null==re?void 0:re.owners)||[]).map((e=>e.value||e.id)),recipients:o,report_format:"dashboard"===ce?z:pe||z};if(i.recipients&&!i.recipients.length&&delete i.recipients,i.context_markdown="string",we){if(null!=re&&re.id){const e=re.id;delete i.id,delete i.created_by,delete i.last_eval_dttm,delete i.last_state,delete i.last_value,delete i.last_value_row_json,Je(e,i).then((e=>{e&&(T((0,l.t)("%s updated",i.type)),t&&t(),Ye())}))}}else re&&He(i).then((e=>{e&&(T((0,l.t)("%s updated",i.type)),t&&t(e),Ye())}))},onHide:Ye,primaryButtonName:we?(0,l.t)("Save"):(0,l.t)("Add"),show:r,width:"500px",centered:!0,title:(0,o.tZ)("h4",null,(()=>{let e;switch(!0){case we&&m:e=(0,l.t)("Edit Report");break;case we:e=(0,l.t)("Edit Alert");break;case m:e=(0,l.t)("Add Report");break;default:e=(0,l.t)("Add Alert")}return e})())},(0,o.tZ)(v.Z,{expandIconPosition:"right",defaultActiveKey:"general",accordion:!0,css:o.iv`
          border: 'none';
        `},(0,o.tZ)(U,{header:(0,o.tZ)(w,{title:te.GENERAL_TITLE,subtitle:(0,l.t)("Set up basic details, such as name and description."),validateCheckStatus:!xe[y.bx.General].hasErrors,testId:"general-information-panel"}),key:"general"},(0,o.tZ)("div",{className:"header-section"},(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},m?(0,l.t)("Report name"):(0,l.t)("Alert name"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)("input",{type:"text",name:"name",value:re?re.name:"",placeholder:m?(0,l.t)("Enter report name"):(0,l.t)("Enter alert name"),onChange:ct}))),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Owners"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.qb,{ariaLabel:(0,l.t)("Owners"),allowClear:!0,name:"owners",mode:"multiple",placeholder:(0,l.t)("Select owners"),value:(null==re?void 0:re.owners)||[],options:et,onChange:e=>{at("owners",e||[])}}))),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Description")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)("input",{type:"text",name:"description",value:re&&re.description||"",placeholder:(0,l.t)("Include description to be sent with %s",Ie),onChange:ct}))),(0,o.tZ)(V,null,(0,o.tZ)(h.r,{checked:!!re&&re.active,defaultChecked:!0,onChange:e=>{at("active",e)}}),(0,o.tZ)("div",{className:"switch-label"},m?(0,l.t)("Report is active"):(0,l.t)("Alert is active"))))),!m&&(0,o.tZ)(U,{header:(0,o.tZ)(w,{title:te.ALERT_CONDITION_TITLE,subtitle:(0,l.t)("Define the database, SQL query, and triggering conditions for alert."),validateCheckStatus:!xe[y.bx.Alert].hasErrors,testId:"alert-condition-panel"}),key:"condition"},(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Database"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.qb,{ariaLabel:(0,l.t)("Database"),name:"source",placeholder:(0,l.t)("Select database"),value:null!=re&&null!=(Z=re.database)&&Z.label&&null!=re&&null!=(x=re.database)&&x.value?{value:re.database.value,label:re.database.label}:void 0,options:nt,onChange:e=>{at("database",e||[])}}))),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("SQL Query"),(0,o.tZ)(J,{tooltip:(0,l.t)('The result of this query must be a value capable of numeric interpretation e.g. 1, 1.0, or "1" (compatible with Python\'s float() function).')}),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(E.Z,{name:"sql",language:"sql",offerEditInModal:!1,minLines:15,maxLines:15,onChange:e=>{at("sql",e||"")},readOnly:!1,initialValue:null==Ke?void 0:Ke.sql,key:null==re?void 0:re.id})),(0,o.tZ)("div",{className:"inline-container wrap"},(0,o.tZ)(B,{css:X},(0,o.tZ)("div",{className:"control-label",css:ee},(0,l.t)("Trigger Alert If..."),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Condition"),onChange:e=>{var t;fe("not null"===e);const a={op:e,threshold:re?null==(t=re.validator_config_json)?void 0:t.threshold:void 0};at("validator_config_json",a)},placeholder:(0,l.t)("Condition"),value:(null==re||null==(S=re.validator_config_json)?void 0:S.op)||void 0,options:q,css:ee}))),(0,o.tZ)(B,{css:X},(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Value")," ",!Te&&(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)("input",{type:"number",name:"threshold",disabled:Te,value:void 0===(null==re||null==(C=re.validator_config_json)?void 0:C.threshold)||Te?"":re.validator_config_json.threshold,placeholder:(0,l.t)("Value"),onChange:e=>{var t;const{target:a}=e,n={op:re?null==(t=re.validator_config_json)?void 0:t.op:void 0,threshold:a.value};at("validator_config_json",n)}}))))),(0,o.tZ)(U,{header:(0,o.tZ)(w,{title:m?te.REPORT_CONTENTS_TITLE:te.ALERT_CONTENTS_TITLE,subtitle:(0,l.t)("Customize data source, filters, and layout."),validateCheckStatus:!xe[y.bx.Content].hasErrors,testId:"contents-panel"}),key:"contents"},(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Content type"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Select content type"),onChange:e=>{ve(!1),ue(e)},value:ce,options:G,placeholder:(0,l.t)("Select content type")})),(0,o.tZ)(B,null,"chart"===ce?(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Select chart"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(f.qb,{ariaLabel:(0,l.t)("Chart"),name:"chart",value:null!=re&&null!=(A=re.chart)&&A.label&&null!=re&&null!=(L=re.chart)&&L.value?{value:re.chart.value,label:re.chart.label}:void 0,options:dt,onChange:e=>{(e=>{s.Z.get({endpoint:`/api/v1/chart/${e.value}`}).then((e=>ke(e.json.result.viz_type)))})(e),at("chart",e||void 0),at("dashboard",null)},placeholder:(0,l.t)("Select chart to use")})):(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Select dashboard"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(f.qb,{ariaLabel:(0,l.t)("Dashboard"),name:"dashboard",value:null!=re&&null!=(I=re.dashboard)&&I.label&&null!=re&&null!=($=re.dashboard)&&$.value?{value:re.dashboard.value,label:re.dashboard.label}:void 0,options:ot,onChange:e=>{at("dashboard",e||void 0),at("chart",null)},placeholder:(0,l.t)("Select dashboard to use")}))),(0,o.tZ)(B,{css:["TEXT","CSV"].includes(pe)&&X},$e&&(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Content format"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Select format"),onChange:e=>{he(e)},value:pe,options:M.includes(Le)?Object.values(W):["png","csv"].map((e=>W[e])),placeholder:(0,l.t)("Select format")}))),ge&&(0,o.tZ)(B,{css:!m&&"chart"===ce&&X},(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Screenshot width")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(p.Rn,{type:"number",name:"custom_width",value:(null==re?void 0:re.custom_width)||void 0,min:600,max:2400,placeholder:(0,l.t)("Input custom width in pixels"),onChange:e=>{at("custom_width",e)}}))),(m||"dashboard"===ce)&&(0,o.tZ)("div",{className:"inline-container"},(0,o.tZ)(H,{className:"checkbox",checked:me,onChange:e=>{ve(e.target.checked)}},(0,l.t)("Ignore cache when generating report")))),(0,o.tZ)(U,{header:(0,o.tZ)(w,{title:te.SCHEDULE_TITLE,subtitle:(0,l.t)("Define delivery schedule, timezone, and frequency settings."),validateCheckStatus:!xe[y.bx.Schedule].hasErrors,testId:"schedule-panel"}),key:"schedule"},(0,o.tZ)(O,{value:(null==re?void 0:re.crontab)||"",onChange:e=>at("crontab",e)}),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Timezone")," ",(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)(g.Z,{onTimezoneChange:e=>{at("timezone",e)},timezone:null==re?void 0:re.timezone,minWidth:"100%"})),(0,o.tZ)(B,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Log retention"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(f.Ph,{ariaLabel:(0,l.t)("Log retention"),placeholder:(0,l.t)("Log retention"),onChange:e=>{at("log_retention",e)},value:null==re?void 0:re.log_retention,options:F,sortComparator:(0,b.mj)("value")}))),(0,o.tZ)(B,{css:X},m?(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Working timeout"),(0,o.tZ)("span",{className:"required"},"*")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(R,{min:1,name:"working_timeout",value:(null==re?void 0:re.working_timeout)||"",placeholder:(0,l.t)("Time in seconds"),onChange:ut,timeUnit:(0,l.t)("seconds")}))):(0,o.tZ)(n.Fragment,null,(0,o.tZ)("div",{className:"control-label"},(0,l.t)("Grace period")),(0,o.tZ)("div",{className:"input-container"},(0,o.tZ)(R,{min:1,name:"grace_period",value:(null==re?void 0:re.grace_period)||"",placeholder:(0,l.t)("Time in seconds"),onChange:ut,timeUnit:(0,l.t)("seconds")}))))),(0,o.tZ)(U,{header:(0,o.tZ)(w,{title:te.NOTIFICATION_TITLE,subtitle:(0,l.t)("Choose notification method and recipients."),validateCheckStatus:!xe[y.bx.Notification].hasErrors,testId:"notification-method-panel"}),key:"notification"},Pe.map(((e,t)=>(0,o.tZ)(Y,null,(0,o.tZ)(k,{setting:e,index:t,key:`NotificationMethod-${t}`,onUpdate:Ge,onRemove:We})))),ne.length>Pe.length&&(0,o.tZ)(ae,{status:je,onClick:()=>{Me([...Pe,{recipients:"",options:ne.filter((e=>!Pe.reduce(((t,a)=>t||e===a.method),!1)))}]),Ue(Pe.length===ne.length?"hidden":"disabled")}}))))}))},90335:(e,t,a)=>{var n,l,o;a.d(t,{Z9:()=>n,bx:()=>o,ud:()=>l}),function(e){e.Success="Success",e.Working="Working",e.Error="Error",e.Noop="Not triggered",e.Grace="On Grace"}(n||(n={})),function(e){e.Email="Email",e.Slack="Slack"}(l||(l={})),function(e){e.General="generalSection",e.Content="contentSection",e.Alert="alertConditionSection",e.Schedule="scheduleSection",e.Notification="notificationSection"}(o||(o={}))}}]);
//# sourceMappingURL=d0a2a6bce98dc9040bb8.chunk.js.map