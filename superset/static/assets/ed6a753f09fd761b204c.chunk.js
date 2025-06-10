"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9173],{54070:(e,t,a)=>{a.d(t,{w:()=>o}),a(67294);var s=a(58593),n=a(83379),l=a(61988),r=a(11965);const o=({user:e,date:t})=>{const a=(0,r.tZ)("span",{className:"no-wrap"},t);if(e){const t=(0,n.Z)(e),o=(0,l.t)("Modified by: %s",t);return(0,r.tZ)(s.u,{title:o,placement:"bottom"},a)}return a}},27989:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(67294),n=a(51995),l=a(61988),r=a(35932),o=a(74069),i=a(4715),d=a(34858),u=a(60972),c=a(11965);const p=n.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,h=n.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
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
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:n,onModelImport:m,show:g,onHide:y,passwordFields:b=[],setPasswordFields:v=(()=>{}),sshTunnelPasswordFields:Z=[],setSSHTunnelPasswordFields:f=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:x=[],setSSHTunnelPrivateKeyPasswordFields:k=(()=>{})})=>{const[T,_]=(0,s.useState)(!0),[$,q]=(0,s.useState)({}),[C,P]=(0,s.useState)(!1),[N,D]=(0,s.useState)(!1),[F,H]=(0,s.useState)([]),[K,E]=(0,s.useState)(!1),[I,L]=(0,s.useState)(),[z,R]=(0,s.useState)({}),[A,U]=(0,s.useState)({}),[Q,O]=(0,s.useState)({}),B=()=>{H([]),v([]),q({}),P(!1),D(!1),E(!1),L(""),f([]),S([]),k([]),R({}),U({}),O({})},{state:{alreadyExists:M,passwordsNeeded:j,sshPasswordNeeded:W,sshPrivateKeyNeeded:Y,sshPrivateKeyPasswordNeeded:V},importResource:J}=(0,d.PW)(e,t,(e=>{L(e)}));(0,s.useEffect)((()=>{v(j),j.length>0&&E(!1)}),[j,v]),(0,s.useEffect)((()=>{P(M.length>0),M.length>0&&E(!1)}),[M,P]),(0,s.useEffect)((()=>{f(W),W.length>0&&E(!1)}),[W,f]),(0,s.useEffect)((()=>{S(Y),Y.length>0&&E(!1)}),[Y,S]),(0,s.useEffect)((()=>{k(V),V.length>0&&E(!1)}),[V,k]);return T&&g&&_(!1),(0,c.tZ)(o.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===F.length||C&&!N||K,onHandledPrimaryAction:()=>{var e;(null==(e=F[0])?void 0:e.originFileObj)instanceof File&&(E(!0),J(F[0].originFileObj,$,z,A,Q,N).then((e=>{e&&(B(),m())})))},onHide:()=>{_(!0),y(),B()},primaryButtonName:C?(0,l.t)("Overwrite"):(0,l.t)("Import"),primaryButtonType:C?"danger":"primary",width:"750px",show:g,title:(0,c.tZ)("h4",null,(0,l.t)("Import %s",t))},(0,c.tZ)(h,null,(0,c.tZ)(i.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:F,onChange:e=>{H([{...e.file,status:"done"}])},onRemove:e=>(H(F.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:K},(0,c.tZ)(r.Z,{loading:K},(0,l.t)("Select file")))),I&&(0,c.tZ)(u.Z,{errorMessage:I,showDbInstallInstructions:b.length>0||Z.length>0||w.length>0||x.length>0}),(()=>{if(0===b.length&&0===Z.length&&0===w.length&&0===x.length)return null;const e=[...new Set([...b,...Z,...w,...x])];return(0,c.tZ)(s.Fragment,null,(0,c.tZ)("h5",null,(0,l.t)("Database passwords")),(0,c.tZ)(p,null,a),e.map((e=>(0,c.tZ)(s.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(h,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:$[e],onChange:t=>q({...$,[e]:t.target.value})})),(null==Z?void 0:Z.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:z[e],onChange:t=>R({...z,[e]:t.target.value})})),(null==w?void 0:w.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:A[e],onChange:t=>U({...A,[e]:t.target.value})})),(null==x?void 0:x.indexOf(e))>=0&&(0,c.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,l.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:Q[e],onChange:t=>O({...Q,[e]:t.target.value})}))))))})(),C?(0,c.tZ)(s.Fragment,null,(0,c.tZ)(h,null,(0,c.tZ)("div",{className:"confirm-overwrite"},n),(0,c.tZ)("div",{className:"control-label"},(0,l.t)('Type "%s" to confirm',(0,l.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";D(s.toUpperCase()===(0,l.t)("OVERWRITE"))}}))):null)}},29848:(e,t,a)=>{a.d(t,{Z:()=>d}),a(67294);var s=a(51995),n=a(58593),l=a(13322),r=a(11965);const o=s.iK.span`
  white-space: nowrap;
  min-width: 100px;
  svg,
  i {
    margin-right: 8px;

    &:hover {
      path {
        fill: ${({theme:e})=>e.colors.primary.base};
      }
    }
  }
`,i=s.iK.span`
  color: ${({theme:e})=>e.colors.grayscale.base};
`;function d({actions:e}){return(0,r.tZ)(o,{className:"actions"},e.map(((e,t)=>{const a=l.Z[e.icon];return e.tooltip?(0,r.tZ)(n.u,{id:`${e.label}-tooltip`,title:e.tooltip,placement:e.placement,key:t},(0,r.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick},(0,r.tZ)(a,null))):(0,r.tZ)(i,{role:"button",tabIndex:0,className:"action-button",onClick:e.onClick,key:t},(0,r.tZ)(a,null))})))}},99299:(e,t,a)=>{a.d(t,{Z:()=>l}),a(67294);var s=a(19181),n=a(11965);const l=e=>(0,n.tZ)(s.Z,e)},83556:(e,t,a)=>{a.d(t,{P:()=>c});var s=a(67294),n=a(51995),l=a(59361),r=a(58593),o=a(11965);const i=(0,n.iK)(l.Z)`
  ${({theme:e})=>`\n  margin-top: ${e.gridUnit}px;\n  margin-bottom: ${e.gridUnit}px;\n  font-size: ${e.typography.sizes.s}px;\n  `};
`,d=({name:e,id:t,index:a,onDelete:n,editable:l=!1,onClick:d,toolTipTitle:u=e})=>{const c=(0,s.useMemo)((()=>e.length>20),[e])?`${e.slice(0,20)}...`:e;return(0,o.tZ)(s.Fragment,null,l?(0,o.tZ)(r.u,{title:u,key:u},(0,o.tZ)(i,{key:t,closable:l,onClose:()=>a?null==n?void 0:n(a):null,color:"blue"},c)):(0,o.tZ)(r.u,{title:u,key:u},(0,o.tZ)(i,{role:"link",key:t,onClick:d},t?(0,o.tZ)("a",{href:`/superset/all_entities/?id=${t}`,target:"_blank",rel:"noreferrer"},c):c)))},u=n.iK.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,c=({tags:e,editable:t=!1,onDelete:a,maxTags:n})=>{const[l,r]=(0,s.useState)(n),i=e=>{null==a||a(e)},c=(0,s.useMemo)((()=>l?e.length>l:null),[e.length,l]),p=(0,s.useMemo)((()=>"number"==typeof l?e.length-l+1:null),[c,e.length,l]);return(0,o.tZ)(u,{className:"tag-list"},c&&"number"==typeof l?(0,o.tZ)(s.Fragment,null,e.slice(0,l-1).map(((e,a)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:i,editable:t}))),e.length>l?(0,o.tZ)(d,{name:`+${p}...`,onClick:()=>r(void 0),toolTipTitle:e.map((e=>e.name)).join(", ")}):null):(0,o.tZ)(s.Fragment,null,e.map(((e,a)=>(0,o.tZ)(d,{id:e.id,key:e.id,name:e.name,index:a,onDelete:i,editable:t}))),n&&e.length>n?(0,o.tZ)(d,{name:"...",onClick:()=>r(n)}):null))}},33726:(e,t,a)=>{a.d(t,{Y:()=>n});var s=a(61988);const n={name:(0,s.t)("SQL"),tabs:[{name:"Saved queries",label:(0,s.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,s.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},6189:(e,t,a)=>{a.d(t,{Z:()=>y});var s=a(73126),n=(a(67294),a(51995)),l=a(61988),r=a(33743),o=a(49889),i=a(53459),d=a(22489),u=a(120),c=a(42110),p=a(13322),h=a(10222),m=a(11965);c.Z.registerLanguage("sql",r.Z),c.Z.registerLanguage("markdown",i.Z),c.Z.registerLanguage("html",o.Z),c.Z.registerLanguage("json",d.Z);const g=n.iK.div`
  margin-top: -24px;

  &:hover {
    svg {
      visibility: visible;
    }
  }

  svg {
    position: relative;
    top: 40px;
    left: 512px;
    visibility: hidden;
    margin: -4px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`;function y({addDangerToast:e,addSuccessToast:t,children:a,...n}){return(0,m.tZ)(g,null,(0,m.tZ)(p.Z.Copy,{tabIndex:0,role:"button",onClick:s=>{var n;s.preventDefault(),s.currentTarget.blur(),n=a,(0,h.Z)((()=>Promise.resolve(n))).then((()=>{t&&t((0,l.t)("SQL Copied!"))})).catch((()=>{e&&e((0,l.t)("Sorry, your browser does not support copying."))}))}}),(0,m.tZ)(c.Z,(0,s.Z)({style:u.Z},n),a))}},86185:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294);function n({queries:e,fetchData:t,currentQueryId:a}){const n=e.findIndex((e=>e.id===a)),[l,r]=(0,s.useState)(n),[o,i]=(0,s.useState)(!1),[d,u]=(0,s.useState)(!1);function c(){i(0===l),u(l===e.length-1)}function p(a){const s=l+(a?-1:1);s>=0&&s<e.length&&(t(e[s].id),r(s),c())}return(0,s.useEffect)((()=>{c()})),{handleKeyPress:function(t){l>=0&&l<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),p(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),p(!0)))},handleDataChange:p,disablePrevious:o,disableNext:d}}},7742:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var s=a(61988),n=a(51995),l=a(31069),r=a(93185),o=a(67294),i=a(16550),d=a(73727),u=a(15926),c=a.n(u),p=a(40768),h=a(28216),m=a(99299),g=a(14114),y=a(34858),b=a(19259),v=a(32228),Z=a(86074),f=a(93139),w=a(38703),S=a(17198),x=a(29848),k=a(83556),T=a(58593),_=a(33726),$=a(12),q=a(10222),C=a(27989),P=a(54070),N=a(60718),D=a(13322),F=a(74069),H=a(35932),K=a(6189),E=a(86185),I=a(11965);const L=n.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,z=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 16px 0;
`,R=(0,n.iK)(F.default)`
  .ant-modal-content {
  }

  .ant-modal-body {
    padding: 24px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,A=(0,g.ZP)((({fetchData:e,onHide:t,openInSqlLab:a,queries:n,savedQuery:l,show:r,addDangerToast:i,addSuccessToast:d})=>{const{handleKeyPress:u,handleDataChange:c,disablePrevious:p,disableNext:h}=(0,E.Z)({queries:n,currentQueryId:l.id,fetchData:e});return(0,I.tZ)("div",{role:"none",onKeyUp:u},(0,I.tZ)(R,{onHide:t,show:r,title:(0,s.t)("Query preview"),footer:(0,I.tZ)(o.Fragment,null,(0,I.tZ)(H.Z,{key:"previous-saved-query",disabled:p,onClick:()=>c(!0)},(0,s.t)("Previous")),(0,I.tZ)(H.Z,{key:"next-saved-query",disabled:h,onClick:()=>c(!1)},(0,s.t)("Next")),(0,I.tZ)(H.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:({metaKey:e})=>a(l.id,Boolean(e))},(0,s.t)("Open in SQL Lab")))},(0,I.tZ)(L,null,(0,s.t)("Query name")),(0,I.tZ)(z,null,l.label),(0,I.tZ)(K.Z,{language:"sql",addDangerToast:i,addSuccessToast:d},l.sql||"")))}));var U=a(12617);const Q=(0,s.t)('The passwords for the databases below are needed in order to import them together with the saved queries. Please note that the "Secure Extra" and "Certificate" sections of the database configuration are not present in export files, and should be added manually after the import if they are needed.'),O=(0,s.t)("You are importing one or more saved queries that already exist. Overwriting might cause you to lose some of your work. Are you sure you want to overwrite?"),B=n.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,M=n.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,j=(0,g.ZP)((function({addDangerToast:e,addSuccessToast:t,user:a}){const{state:{loading:n,resourceCount:u,resourceCollection:g,bulkSelectEnabled:F},hasPerm:H,fetchData:K,toggleBulkSelect:E,refreshData:L}=(0,y.Yi)("saved_query",(0,s.t)("Saved queries"),e),{roles:z}=(0,h.v9)((e=>e.user)),R=(0,U.R)("can_read","Tag",z),[j,W]=(0,o.useState)(null),[Y,V]=(0,o.useState)(null),[J,G]=(0,o.useState)(!1),[X,ee]=(0,o.useState)([]),[te,ae]=(0,o.useState)(!1),[se,ne]=(0,o.useState)([]),[le,re]=(0,o.useState)([]),[oe,ie]=(0,o.useState)([]),de=(0,i.k6)(),ue=H("can_write"),ce=H("can_write"),pe=H("can_write"),he=H("can_export"),me=(0,o.useCallback)((t=>{l.Z.get({endpoint:`/api/v1/saved_query/${t}`}).then((({json:e={}})=>{V({...e.result})}),(0,p.v$)((t=>e((0,s.t)("There was an issue previewing the selected query %s",t)))))}),[e]),ge={activeChild:"Saved queries",..._.Y},ye=[];pe&&ye.push({name:(0,s.t)("Bulk select"),onClick:E,buttonStyle:"secondary"}),ye.push({name:(0,I.tZ)(d.rU,{to:"/sqllab?new=true"},(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,s.t)("Query")),buttonStyle:"primary"}),ue&&ye.push({name:(0,I.tZ)(T.u,{id:"import-tooltip",title:(0,s.t)("Import queries"),placement:"bottomRight"},(0,I.tZ)(D.Z.Import,null)),buttonStyle:"link",onClick:()=>{G(!0)},"data-test":"import-button"}),ge.buttons=ye;const be=(e,t)=>{t?window.open(`/sqllab?savedQueryId=${e}`):de.push(`/sqllab?savedQueryId=${e}`)},ve=(0,o.useCallback)((a=>{(0,q.Z)((()=>Promise.resolve(`${window.location.origin}/sqllab?savedQueryId=${a}`))).then((()=>{t((0,s.t)("Link Copied!"))})).catch((()=>{e((0,s.t)("Sorry, your browser does not support copying."))}))}),[e,t]),Ze=e=>{const t=e.map((({id:e})=>e));(0,v.Z)("saved_query",t,(()=>{ae(!1)})),ae(!0)},fe=[{id:"changed_on_delta_humanized",desc:!0}],we=(0,o.useMemo)((()=>[{accessor:"label",Header:(0,s.t)("Name")},{accessor:"description",Header:(0,s.t)("Description")},{accessor:"database.database_name",Header:(0,s.t)("Database"),size:"xl"},{accessor:"database",hidden:!0,disableSortBy:!0},{accessor:"schema",Header:(0,s.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=(null==t?void 0:t.shift())||"";return t.length?(0,I.tZ)(B,null,(0,I.tZ)("span",null,a),(0,I.tZ)(m.Z,{placement:"right",title:(0,s.t)("TABLES"),trigger:"click",content:(0,I.tZ)(o.Fragment,null,t.map((e=>(0,I.tZ)(M,{key:e},e))))},(0,I.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:"sql_tables",Header:(0,s.t)("Tables"),size:"xl",disableSortBy:!0},{Cell:({row:{original:{tags:e=[]}}})=>(0,I.tZ)(k.P,{tags:e.filter((e=>1===e.type))}),Header:(0,s.t)("Tags"),accessor:"tags",disableSortBy:!0,hidden:!(0,r.cr)(r.TT.TaggingSystem)},{Cell:({row:{original:{changed_by:e,changed_on_delta_humanized:t}}})=>(0,I.tZ)(P.w,{user:e,date:t}),Header:(0,s.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{Cell:({row:{original:e}})=>{const t=[{label:"preview-action",tooltip:(0,s.t)("Query preview"),placement:"bottom",icon:"Binoculars",onClick:()=>{me(e.id)}},ce&&{label:"edit-action",tooltip:(0,s.t)("Edit query"),placement:"bottom",icon:"Edit",onClick:({metaKey:t})=>be(e.id,Boolean(t))},{label:"copy-action",tooltip:(0,s.t)("Copy query URL"),placement:"bottom",icon:"Copy",onClick:()=>ve(e.id)},he&&{label:"export-action",tooltip:(0,s.t)("Export query"),placement:"bottom",icon:"Share",onClick:()=>Ze([e])},pe&&{label:"delete-action",tooltip:(0,s.t)("Delete query"),placement:"bottom",icon:"Trash",onClick:()=>W(e)}].filter((e=>!!e));return(0,I.tZ)(x.Z,{actions:t})},Header:(0,s.t)("Actions"),id:"actions",disableSortBy:!0},{accessor:$.J.ChangedBy,hidden:!0}]),[pe,ce,he,ve,me]),Se=(0,o.useMemo)((()=>[{Header:(0,s.t)("Search"),id:"label",key:"search",input:"search",operator:f.p.AllText,toolTipDescription:"Searches all text fields: Name, Description, Database & Schema"},{Header:(0,s.t)("Database"),key:"database",id:"database",input:"select",operator:f.p.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,p.tm)("saved_query","database",(0,p.v$)((t=>e((0,s.t)("An error occurred while fetching dataset datasource values: %s",t))))),paginate:!0},{Header:(0,s.t)("Schema"),id:"schema",key:"schema",input:"select",operator:f.p.Equals,unfilteredLabel:"All",fetchSelects:(0,p.wk)("saved_query","schema",(0,p.v$)((t=>e((0,s.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},...(0,r.cr)(r.TT.TaggingSystem)&&R?[{Header:(0,s.t)("Tag"),id:"tags",key:"tags",input:"select",operator:f.p.SavedQueryTags,fetchSelects:N.m}]:[],{Header:(0,s.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:f.p.RelationOneMany,unfilteredLabel:(0,s.t)("All"),fetchSelects:(0,p.tm)("saved_query","changed_by",(0,p.v$)((e=>(0,s.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[e]);return(0,I.tZ)(o.Fragment,null,(0,I.tZ)(Z.Z,ge),j&&(0,I.tZ)(S.Z,{description:(0,s.t)("This action will permanently delete the saved query."),onConfirm:()=>{j&&(({id:a,label:n})=>{l.Z.delete({endpoint:`/api/v1/saved_query/${a}`}).then((()=>{L(),W(null),t((0,s.t)("Deleted: %s",n))}),(0,p.v$)((t=>e((0,s.t)("There was an issue deleting %s: %s",n,t)))))})(j)},onHide:()=>W(null),open:!0,title:(0,s.t)("Delete Query?")}),Y&&(0,I.tZ)(A,{fetchData:me,onHide:()=>V(null),savedQuery:Y,queries:g,openInSqlLab:be,show:!0}),(0,I.tZ)(b.Z,{title:(0,s.t)("Please confirm"),description:(0,s.t)("Are you sure you want to delete the selected queries?"),onConfirm:a=>{l.Z.delete({endpoint:`/api/v1/saved_query/?q=${c().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{L(),t(e.message)}),(0,p.v$)((t=>e((0,s.t)("There was an issue deleting the selected queries: %s",t)))))}},(a=>{const l=[];return pe&&l.push({key:"delete",name:(0,s.t)("Delete"),onSelect:a,type:"danger"}),he&&l.push({key:"export",name:(0,s.t)("Export"),type:"primary",onSelect:Ze}),(0,I.tZ)(f.Z,{className:"saved_query-list-view",columns:we,count:u,data:g,fetchData:K,filters:Se,initialSort:fe,loading:n,pageSize:25,bulkActions:l,addSuccessToast:t,addDangerToast:e,bulkSelectEnabled:F,disableBulkSelect:E,highlightRowId:null==Y?void 0:Y.id,enableBulkTag:!0,bulkTagResourceName:"query",refreshData:L})})),(0,I.tZ)(C.Z,{resourceName:"saved_query",resourceLabel:(0,s.t)("queries"),passwordsNeededMessage:Q,confirmOverwriteMessage:O,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{G(!1),L(),t((0,s.t)("Query imported"))},show:J,onHide:()=>{G(!1)},passwordFields:X,setPasswordFields:ee,sshTunnelPasswordFields:se,setSSHTunnelPasswordFields:ne,sshTunnelPrivateKeyFields:le,setSSHTunnelPrivateKeyFields:re,sshTunnelPrivateKeyPasswordFields:oe,setSSHTunnelPrivateKeyPasswordFields:ie}),te&&(0,I.tZ)(w.Z,null))}))},83379:(e,t,a)=>{function s(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=ed6a753f09fd761b204c.chunk.js.map