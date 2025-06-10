"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{52630:(e,t,a)=>{t.iB=t.YM=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=l(a(67294)),i=l(a(45697)),r=a(2371);function l(e){return e&&e.__esModule?e:{default:e}}t.YM=function(e){var t=e.itemTypeToComponent,a=e.WrapperComponent,l=void 0===a?"div":a,o=function(e){var a=e.currentPage,i=e.totalPages,o=e.boundaryPagesRange,d=e.siblingPagesRange,u=e.hideEllipsis,c=e.hidePreviousAndNextPageLinks,g=e.hideFirstAndLastPageLinks,p=e.onChange,h=e.disabled,m=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["currentPage","totalPages","boundaryPagesRange","siblingPagesRange","hideEllipsis","hidePreviousAndNextPageLinks","hideFirstAndLastPageLinks","onChange","disabled"]),P=(0,r.getPaginationModel)({currentPage:a,totalPages:i,boundaryPagesRange:o,siblingPagesRange:d,hideEllipsis:u,hidePreviousAndNextPageLinks:c,hideFirstAndLastPageLinks:g}),b=function(e,t,a){return function(i){var r,l,o,d=e[i.type],u=(l=(r=i).value,o=r.isDisabled,function(){!o&&a&&t!==l&&a(l)});return s.default.createElement(d,n({onClick:u},i))}}(t,a,p);return s.default.createElement(l,m,P.map((function(e){return b(n({},e,{isDisabled:!!h}))})))};return o.propTypes={currentPage:i.default.number.isRequired,totalPages:i.default.number.isRequired,boundaryPagesRange:i.default.number,siblingPagesRange:i.default.number,hideEllipsis:i.default.bool,hidePreviousAndNextPageLinks:i.default.bool,hideFirstAndLastPageLinks:i.default.bool,onChange:i.default.func,disabled:i.default.bool},o},t.iB=r.ITEM_TYPES},54070:(e,t,a)=>{a.d(t,{w:()=>l}),a(67294);var n=a(58593),s=a(83379),i=a(61988),r=a(11965);const l=({user:e,date:t})=>{const a=(0,r.tZ)("span",{className:"no-wrap"},t);if(e){const t=(0,s.Z)(e),l=(0,i.t)("Modified by: %s",t);return(0,r.tZ)(n.u,{title:l,placement:"bottom"},a)}return a}},27989:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),s=a(51995),i=a(61988),r=a(35932),l=a(74069),o=a(4715),d=a(34858),u=a(60972),c=a(11965);const g=s.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,p=s.iK.div`
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
`,h=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:s,onModelImport:h,show:m,onHide:P,passwordFields:b=[],setPasswordFields:y=(()=>{}),sshTunnelPasswordFields:v=[],setSSHTunnelPasswordFields:f=(()=>{}),sshTunnelPrivateKeyFields:S=[],setSSHTunnelPrivateKeyFields:E=(()=>{}),sshTunnelPrivateKeyPasswordFields:_=[],setSSHTunnelPrivateKeyPasswordFields:w=(()=>{})})=>{const[Z,T]=(0,n.useState)(!0),[I,N]=(0,n.useState)({}),[k,L]=(0,n.useState)(!1),[x,A]=(0,n.useState)(!1),[$,M]=(0,n.useState)([]),[R,C]=(0,n.useState)(!1),[F,D]=(0,n.useState)(),[K,H]=(0,n.useState)({}),[O,Y]=(0,n.useState)({}),[B,U]=(0,n.useState)({}),G=()=>{M([]),y([]),N({}),L(!1),A(!1),C(!1),D(""),f([]),E([]),w([]),H({}),Y({}),U({})},{state:{alreadyExists:z,passwordsNeeded:V,sshPasswordNeeded:q,sshPrivateKeyNeeded:j,sshPrivateKeyPasswordNeeded:W},importResource:X}=(0,d.PW)(e,t,(e=>{D(e)}));(0,n.useEffect)((()=>{y(V),V.length>0&&C(!1)}),[V,y]),(0,n.useEffect)((()=>{L(z.length>0),z.length>0&&C(!1)}),[z,L]),(0,n.useEffect)((()=>{f(q),q.length>0&&C(!1)}),[q,f]),(0,n.useEffect)((()=>{E(j),j.length>0&&C(!1)}),[j,E]),(0,n.useEffect)((()=>{w(W),W.length>0&&C(!1)}),[W,w]);return Z&&m&&T(!1),(0,c.tZ)(l.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===$.length||k&&!x||R,onHandledPrimaryAction:()=>{var e;(null==(e=$[0])?void 0:e.originFileObj)instanceof File&&(C(!0),X($[0].originFileObj,I,K,O,B,x).then((e=>{e&&(G(),h())})))},onHide:()=>{T(!0),P(),G()},primaryButtonName:k?(0,i.t)("Overwrite"):(0,i.t)("Import"),primaryButtonType:k?"danger":"primary",width:"750px",show:m,title:(0,c.tZ)("h4",null,(0,i.t)("Import %s",t))},(0,c.tZ)(p,null,(0,c.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:$,onChange:e=>{M([{...e.file,status:"done"}])},onRemove:e=>(M($.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:R},(0,c.tZ)(r.Z,{loading:R},(0,i.t)("Select file")))),F&&(0,c.tZ)(u.Z,{errorMessage:F,showDbInstallInstructions:b.length>0||v.length>0||S.length>0||_.length>0}),(()=>{if(0===b.length&&0===v.length&&0===S.length&&0===_.length)return null;const e=[...new Set([...b,...v,...S,..._])];return(0,c.tZ)(n.Fragment,null,(0,c.tZ)("h5",null,(0,i.t)("Database passwords")),(0,c.tZ)(g,null,a),e.map((e=>(0,c.tZ)(n.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,c.tZ)(p,{key:`password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,i.t)("%s PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:I[e],onChange:t=>N({...I,[e]:t.target.value})})),(null==v?void 0:v.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,i.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:K[e],onChange:t=>H({...K,[e]:t.target.value})})),(null==S?void 0:S.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_private_key-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,i.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:O[e],onChange:t=>Y({...O,[e]:t.target.value})})),(null==_?void 0:_.indexOf(e))>=0&&(0,c.tZ)(p,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,c.tZ)("div",{className:"control-label"},(0,i.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,c.tZ)("span",{className:"required"},"*")),(0,c.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:B[e],onChange:t=>U({...B,[e]:t.target.value})}))))))})(),k?(0,c.tZ)(n.Fragment,null,(0,c.tZ)(p,null,(0,c.tZ)("div",{className:"confirm-overwrite"},s),(0,c.tZ)("div",{className:"control-label"},(0,i.t)('Type "%s" to confirm',(0,i.t)("OVERWRITE"))),(0,c.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const n=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";A(n.toUpperCase()===(0,i.t)("OVERWRITE"))}}))):null)}},46977:(e,t,a)=>{a.d(t,{Z:()=>v,u:()=>n});var n,s=a(73126),i=a(18446),r=a.n(i),l=a(67294),o=a(51995),d=a(61988),u=a(79521),c=a(4715),g=a(64158),p=a(97754),h=a(11965);!function(e){e.Default="Default",e.Small="Small"}(n||(n={}));const m=o.iK.div`
  margin: ${({theme:e})=>40*e.gridUnit}px 0;
`,P=o.iK.div`
  ${({scrollTable:e,theme:t})=>e&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*t.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:e,small:t})=>!t&&`height: ${11*e.gridUnit-1}px;`}

    .table-cell {
      ${({theme:e,small:t})=>t&&`\n        padding-top: ${e.gridUnit+1}px;\n        padding-bottom: ${e.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:e})=>`${e.gridUnit-2}px solid ${e.colors.grayscale.light2}`};
    ${({small:e})=>e&&"padding-bottom: 0;"}
  }
`,b=o.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:e})=>e.colors.grayscale.light5};

  ${({isPaginationSticky:e})=>e&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:e})=>2*e.gridUnit}px;
    color: ${({theme:e})=>e.colors.grayscale.base};
  }
`,y=({columns:e,data:t,pageSize:a,totalCount:i=t.length,initialPageIndex:o,initialSortBy:y=[],loading:v=!1,withPagination:f=!0,emptyWrapperType:S=n.Default,noDataText:E,showRowCount:_=!0,serverPagination:w=!1,columnsForWrapText:Z,onServerPagination:T=(()=>{}),scrollTopOnPagination:I=!1,...N})=>{const k={pageSize:null!=a?a:10,pageIndex:null!=o?o:0,sortBy:y},{getTableProps:L,getTableBodyProps:x,headerGroups:A,page:$,rows:M,prepareRow:R,pageCount:C,gotoPage:F,state:{pageIndex:D,pageSize:K,sortBy:H}}=(0,u.useTable)({columns:e,data:t,initialState:k,manualPagination:w,manualSortBy:w,pageCount:Math.ceil(i/k.pageSize)},u.useFilters,u.useSortBy,u.usePagination),O=f?$:M;let Y;switch(S){case n.Small:Y=({children:e})=>(0,h.tZ)(l.Fragment,null,e);break;case n.Default:default:Y=({children:e})=>(0,h.tZ)(m,null,e)}const B=!v&&0===O.length,U=C>1&&f,G=(0,l.useRef)(null);return(0,l.useEffect)((()=>{w&&D!==k.pageIndex&&T({pageIndex:D})}),[D]),(0,l.useEffect)((()=>{w&&!r()(H,k.sortBy)&&T({pageIndex:0,sortBy:H})}),[H]),(0,h.tZ)(l.Fragment,null,(0,h.tZ)(P,(0,s.Z)({},N,{ref:G}),(0,h.tZ)(p.Z,{getTableProps:L,getTableBodyProps:x,prepareRow:R,headerGroups:A,rows:O,columns:e,loading:v,columnsForWrapText:Z}),B&&(0,h.tZ)(Y,null,E?(0,h.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE,description:E}):(0,h.tZ)(c.HY,{image:c.HY.PRESENTED_IMAGE_SIMPLE}))),U&&(0,h.tZ)(b,{className:"pagination-container",isPaginationSticky:N.isPaginationSticky},(0,h.tZ)(g.Z,{totalPages:C||0,currentPage:C?D+1:0,onChange:e=>(e=>{var t;I&&(null==G||null==(t=G.current)||t.scroll(0,0)),F(e)})(e-1),hideFirstAndLastPageLinks:!0}),_&&(0,h.tZ)("div",{className:"row-count-container"},!v&&(0,d.t)("%s-%s of %s",K*D+($.length&&1),K*D+$.length,i))))},v=l.memo(y)},76962:(e,t,a)=>{a.d(t,{Z:()=>n.Z,u:()=>n.u});var n=a(46977)},52438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var n=a(75049),s=a(51995),i=a(61988),r=a(31069),l=a(67294),o=a(16550),d=a(73727),u=a(15926),c=a.n(u),g=a(40768),p=a(34858),h=a(19259),m=a(77775),P=a(17198),b=a(32228),y=a(93139),v=a(38703),f=a(86074),S=a(14114),E=a(58593),_=a(13322),w=a(34581),Z=a(79789),T=a(8272),I=a(27989),N=a(86057),k=a(22318),L=a(85931),x=a(33228),A=a(49238),$=a(9875),M=a(74069),R=a(11965);const C=({dataset:e,onHide:t,onDuplicate:a})=>{const[n,s]=(0,l.useState)(!1),[r,o]=(0,l.useState)(!1),[d,u]=(0,l.useState)(""),c=()=>{a(d)};return(0,l.useEffect)((()=>{u(""),s(null!==e)}),[e]),(0,R.tZ)(M.default,{show:n,onHide:t,title:(0,i.t)("Duplicate dataset"),disablePrimaryButton:r,onHandledPrimaryAction:c,primaryButtonName:(0,i.t)("Duplicate")},(0,R.tZ)(A.lX,{htmlFor:"duplicate"},(0,i.t)("New dataset name")),(0,R.tZ)($.II,{type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";u(a),o(""===a)},onPressEnter:c}))};var F=a(28216),D=a(54070),K=a(12);const H=(0,n.I)().get("dataset.delete.related"),O=s.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,Y=s.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.grayscale.light1};
        }
      }
    }
    color: ${({theme:e})=>e.colors.grayscale.light1};
    .ant-menu-item:hover {
      color: ${({theme:e})=>e.colors.grayscale.light1};
      cursor: default;
    }
    &::after {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }
`,B=(0,S.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const n=(0,o.k6)(),{state:{loading:s,resourceCount:u,resourceCollection:S,bulkSelectEnabled:A},hasPerm:$,fetchData:M,toggleBulkSelect:B,refreshData:U}=(0,p.Yi)("dataset",(0,i.t)("dataset"),e),[G,z]=(0,l.useState)(null),[V,q]=(0,l.useState)(null),[j,W]=(0,l.useState)(null),[X,J]=(0,l.useState)(!1),[Q,ee]=(0,l.useState)([]),[te,ae]=(0,l.useState)(!1),[ne,se]=(0,l.useState)([]),[ie,re]=(0,l.useState)([]),[le,oe]=(0,l.useState)([]),de=(0,F.v9)((e=>{var t,a;return(null==(t=e.common)||null==(a=t.conf)?void 0:a.PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET)||!1})),ue=$("can_write"),ce=$("can_write"),ge=$("can_write"),pe=$("can_duplicate"),he=$("can_export"),me=x.dY,Pe=(0,l.useCallback)((({id:t})=>{r.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],q(e.result)})).catch((()=>{e((0,i.t)("An error occurred while fetching dataset related data"))}))}),[e]),be=e=>{const t=e.map((({id:e})=>e));(0,b.Z)("dataset",t,(()=>{ae(!1)})),ae(!0)},ye=(0,l.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,R.tZ)(E.u,{id:"physical-dataset-tooltip",title:(0,i.t)("Physical dataset")},(0,R.tZ)(_.Z.DatasetPhysical,null)):(0,R.tZ)(E.u,{id:"virtual-dataset-tooltip",title:(0,i.t)("Virtual dataset")},(0,R.tZ)(_.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:n}}})=>{let s;s=de?(0,R.tZ)(d.rU,{to:n},t):(0,R.tZ)(L.m,{to:n},t);try{const t=JSON.parse(e);return(0,R.tZ)(O,null,(null==t?void 0:t.certification)&&(0,R.tZ)(Z.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,R.tZ)(N.Z,{warningMarkdown:t.warning_markdown,size:"l"}),s,a&&(0,R.tZ)(T.Z,{tooltip:a}))}catch{return s}},Header:(0,i.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,i.t)("Physical"):(0,i.t)("Virtual"),Header:(0,i.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,i.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,i.t)("Schema"),accessor:"schema",size:"lg"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,R.tZ)(w.Z,{users:e}),Header:(0,i.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,R.tZ)(D.w,{date:e,user:t}),Header:(0,i.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,k.i5)(a);return ue||ce||he||pe?(0,R.tZ)(Y,{className:"actions"},ce&&(0,R.tZ)(E.u,{id:"delete-action-tooltip",title:(0,i.t)("Delete"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,r.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{z({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,g.v$)((e=>(0,i.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,R.tZ)(_.Z.Trash,null))),he&&(0,R.tZ)(E.u,{id:"export-action-tooltip",title:(0,i.t)("Export"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>be([e])},(0,R.tZ)(_.Z.Share,null))),ue&&(0,R.tZ)(E.u,{id:"edit-action-tooltip",title:t?(0,i.t)("Edit"):(0,i.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>Pe(e):void 0},(0,R.tZ)(_.Z.EditAlt,null))),pe&&"virtual"===e.kind&&(0,R.tZ)(E.u,{id:"duplicate-action-tooltop",title:(0,i.t)("Duplicate"),placement:"bottom"},(0,R.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{W(e)}},(0,R.tZ)(_.Z.Copy,null)))):null},Header:(0,i.t)("Actions"),id:"actions",hidden:!ue&&!ce&&!pe,disableSortBy:!0},{accessor:K.J.ChangedBy,hidden:!0}]),[ue,ce,he,Pe,pe,a]),ve=(0,l.useMemo)((()=>[{Header:(0,i.t)("Name"),key:"search",id:"table_name",input:"search",operator:y.p.Contains},{Header:(0,i.t)("Type"),key:"sql",id:"sql",input:"select",operator:y.p.DatasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,i.t)("Virtual"),value:!1},{label:(0,i.t)("Physical"),value:!0}]},{Header:(0,i.t)("Database"),key:"database",id:"database",input:"select",operator:y.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("dataset","database",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,i.t)("Schema"),key:"schema",id:"schema",input:"select",operator:y.p.Equals,unfilteredLabel:"All",fetchSelects:(0,g.wk)("dataset","schema",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,i.t)("Owner"),key:"owner",id:"owners",input:"select",operator:y.p.RelationManyMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("dataset","owners",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,i.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:y.p.DatasetIsCertified,unfilteredLabel:(0,i.t)("Any"),selects:[{label:(0,i.t)("Yes"),value:!0},{label:(0,i.t)("No"),value:!1}]},{Header:(0,i.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:y.p.RelationOneMany,unfilteredLabel:(0,i.t)("All"),fetchSelects:(0,g.tm)("dataset","changed_by",(0,g.v$)((e=>(0,i.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[a]),fe={activeChild:"Datasets",name:(0,i.t)("Datasets")},Se=[];return(ce||he)&&Se.push({name:(0,i.t)("Bulk select"),onClick:B,buttonStyle:"secondary"}),ge&&(Se.push({name:(0,R.tZ)(l.Fragment,null,(0,R.tZ)("i",{className:"fa fa-plus"})," ",(0,i.t)("Dataset")," "),onClick:()=>{n.push("/dataset/add/")},buttonStyle:"primary"}),Se.push({name:(0,R.tZ)(E.u,{id:"import-tooltip",title:(0,i.t)("Import datasets"),placement:"bottomRight"},(0,R.tZ)(_.Z.Import,null)),buttonStyle:"link",onClick:()=>{J(!0)}})),fe.buttons=Se,(0,R.tZ)(l.Fragment,null,(0,R.tZ)(f.Z,fe),G&&(0,R.tZ)(P.Z,{description:(0,R.tZ)(l.Fragment,null,(0,R.tZ)("p",null,(0,i.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",G.table_name,G.chart_count,G.dashboard_count)),H&&(0,R.tZ)(H,{dataset:G})),onConfirm:()=>{G&&(({id:a,table_name:n})=>{r.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{U(),z(null),t((0,i.t)("Deleted: %s",n))}),(0,g.v$)((t=>e((0,i.t)("There was an issue deleting %s: %s",n,t)))))})(G)},onHide:()=>{z(null)},open:!0,title:(0,i.t)("Delete Dataset?")}),V&&(0,R.tZ)(m.W,{datasource:V,onDatasourceSave:U,onHide:()=>{q(null)},show:!0}),(0,R.tZ)(C,{dataset:j,onHide:()=>{W(null)},onDuplicate:t=>{null===j&&e((0,i.t)("There was an issue duplicating the dataset.")),r.Z.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==j?void 0:j.id,table_name:t}}).then((()=>{W(null),U()}),(0,g.v$)((t=>e((0,i.t)("There was an issue duplicating the selected datasets: %s",t)))))}}),(0,R.tZ)(h.Z,{title:(0,i.t)("Please confirm"),description:(0,i.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{r.Z.delete({endpoint:`/api/v1/dataset/?q=${c().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{U(),t(e.message)}),(0,g.v$)((t=>e((0,i.t)("There was an issue deleting the selected datasets: %s",t)))))}},(a=>{const n=[];return ce&&n.push({key:"delete",name:(0,i.t)("Delete"),onSelect:a,type:"danger"}),he&&n.push({key:"export",name:(0,i.t)("Export"),type:"primary",onSelect:be}),(0,R.tZ)(y.Z,{className:"dataset-list-view",columns:ye,data:S,count:u,pageSize:x.IV,fetchData:M,filters:ve,loading:s,initialSort:me,bulkActions:n,bulkSelectEnabled:A,disableBulkSelect:B,addDangerToast:e,addSuccessToast:t,refreshData:U,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,i.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,i.t)("%s Selected (Physical)",e.length,a):(0,i.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,i.t)("0 Selected")}})})),(0,R.tZ)(I.Z,{resourceName:"dataset",resourceLabel:(0,i.t)("dataset"),passwordsNeededMessage:x.iX,confirmOverwriteMessage:x.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{J(!1),U(),t((0,i.t)("Dataset imported"))},show:X,onHide:()=>{J(!1)},passwordFields:Q,setPasswordFields:ee,sshTunnelPasswordFields:ne,setSSHTunnelPasswordFields:se,sshTunnelPrivateKeyFields:ie,setSSHTunnelPrivateKeyFields:re,sshTunnelPrivateKeyPasswordFields:le,setSSHTunnelPrivateKeyPasswordFields:oe}),te&&(0,R.tZ)(v.Z,null))}))},83379:(e,t,a)=>{function n(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>n})},56590:(e,t)=>{t.ITEM_TYPES={PAGE:"PAGE",ELLIPSIS:"ELLIPSIS",FIRST_PAGE_LINK:"FIRST_PAGE_LINK",PREVIOUS_PAGE_LINK:"PREVIOUS_PAGE_LINK",NEXT_PAGE_LINK:"NEXT_PAGE_LINK",LAST_PAGE_LINK:"LAST_PAGE_LINK"},t.ITEM_KEYS={FIRST_ELLIPSIS:-1,SECOND_ELLIPSIS:-2,FIRST_PAGE_LINK:-3,PREVIOUS_PAGE_LINK:-4,NEXT_PAGE_LINK:-5,LAST_PAGE_LINK:-6}},53804:(e,t,a)=>{var n=a(56590);t.createFirstEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.FIRST_ELLIPSIS,value:e,isActive:!1}},t.createSecondEllipsis=function(e){return{type:n.ITEM_TYPES.ELLIPSIS,key:n.ITEM_KEYS.SECOND_ELLIPSIS,value:e,isActive:!1}},t.createFirstPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.FIRST_PAGE_LINK,key:n.ITEM_KEYS.FIRST_PAGE_LINK,value:1,isActive:1===t}},t.createPreviousPageLink=function(e){var t=e.currentPage;return{type:n.ITEM_TYPES.PREVIOUS_PAGE_LINK,key:n.ITEM_KEYS.PREVIOUS_PAGE_LINK,value:Math.max(1,t-1),isActive:1===t}},t.createNextPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.NEXT_PAGE_LINK,key:n.ITEM_KEYS.NEXT_PAGE_LINK,value:Math.min(a,t+1),isActive:t===a}},t.createLastPageLink=function(e){var t=e.currentPage,a=e.totalPages;return{type:n.ITEM_TYPES.LAST_PAGE_LINK,key:n.ITEM_KEYS.LAST_PAGE_LINK,value:a,isActive:t===a}},t.createPageFunctionFactory=function(e){var t=e.currentPage;return function(e){return{type:n.ITEM_TYPES.PAGE,key:e,value:e,isActive:e===t}}}},1158:(e,t)=>{t.createRange=function(e,t){for(var a=[],n=e;n<=t;n++)a.push(n);return a}},2371:(e,t,a)=>{var n=a(1158),s=a(53804);t.getPaginationModel=function(e){if(null==e)throw new Error("getPaginationModel(): options object should be a passed");var t=Number(e.totalPages);if(isNaN(t))throw new Error("getPaginationModel(): totalPages should be a number");if(t<0)throw new Error("getPaginationModel(): totalPages shouldn't be a negative number");var a=Number(e.currentPage);if(isNaN(a))throw new Error("getPaginationModel(): currentPage should be a number");if(a<0)throw new Error("getPaginationModel(): currentPage shouldn't be a negative number");if(a>t)throw new Error("getPaginationModel(): currentPage shouldn't be greater than totalPages");var i=null==e.boundaryPagesRange?1:Number(e.boundaryPagesRange);if(isNaN(i))throw new Error("getPaginationModel(): boundaryPagesRange should be a number");if(i<0)throw new Error("getPaginationModel(): boundaryPagesRange shouldn't be a negative number");var r=null==e.siblingPagesRange?1:Number(e.siblingPagesRange);if(isNaN(r))throw new Error("getPaginationModel(): siblingPagesRange should be a number");if(r<0)throw new Error("getPaginationModel(): siblingPagesRange shouldn't be a negative number");var l=Boolean(e.hidePreviousAndNextPageLinks),o=Boolean(e.hideFirstAndLastPageLinks),d=Boolean(e.hideEllipsis),u=d?0:1,c=[],g=s.createPageFunctionFactory(e);if(o||c.push(s.createFirstPageLink(e)),l||c.push(s.createPreviousPageLink(e)),1+2*u+2*r+2*i>=t){var p=n.createRange(1,t).map(g);c.push.apply(c,p)}else{var h=i,m=n.createRange(1,h).map(g),P=t+1-i,b=t,y=n.createRange(P,b).map(g),v=Math.min(Math.max(a-r,h+u+1),P-u-2*r-1),f=v+2*r,S=n.createRange(v,f).map(g);if(c.push.apply(c,m),!d){var E=v-1,_=(E===h+1?g:s.createFirstEllipsis)(E);c.push(_)}if(c.push.apply(c,S),!d){var w=f+1,Z=(w===P-1?g:s.createSecondEllipsis)(w);c.push(Z)}c.push.apply(c,y)}return l||c.push(s.createNextPageLink(e)),o||c.push(s.createLastPageLink(e)),c};var i=a(56590);t.ITEM_TYPES=i.ITEM_TYPES,t.ITEM_KEYS=i.ITEM_KEYS}}]);
//# sourceMappingURL=086404de555d642e2805.chunk.js.map