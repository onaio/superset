"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[8438],{51794:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294);const i=()=>{const[t,e]=(0,a.useState)(0),[n,i]=(0,a.useState)(!1),l=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{var t;const n=()=>{const t=l.current;if(!t)return;const n=o.current,{scrollWidth:a,clientWidth:r,childNodes:s}=t;if(a>r){const t=6,a=(null==n?void 0:n.offsetWidth)||0,l=r-t,o=s.length;let d=0,c=0;for(let t=0;t<o;t+=1)l-d-a<=0&&(c+=1),d+=s[t].offsetWidth;o>1&&c?(i(!0),e(c)):(i(!1),e(1))}else i(!1),e(0)},a=new ResizeObserver(n),r=null==(t=l.current)?void 0:t.parentElement;return r&&a.observe(r),n(),()=>{a.disconnect()}}),[o.current]),[l,o,t,n]}},52564:(t,e,n)=>{n.d(e,{u:()=>$});var a=n(73126),i=n(67294),l=n(11965),o=n(51995),r=n(61988),s=n(4715),d=n(58593),c=n(99612);const u=t=>l.iv`
  display: flex;
  font-size: ${t.typography.sizes.xl}px;
  font-weight: ${t.typography.weights.bold};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  & .dynamic-title,
  & .dynamic-title-input {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & .dynamic-title {
    cursor: default;
  }
  & .dynamic-title-input {
    border: none;
    padding: 0;
    outline: none;

    &::placeholder {
      color: ${t.colors.grayscale.light1};
    }
  }

  & .input-sizer {
    position: absolute;
    left: -9999px;
    display: inline-block;
  }
`,h=({title:t,placeholder:e,onSave:n,canEdit:a,label:o})=>{const[s,h]=(0,i.useState)(!1),[p,g]=(0,i.useState)(t||""),m=(0,i.useRef)(null),[b,f]=(0,i.useState)(!1),{width:v,ref:y}=(0,c.NB)(),{width:x,ref:$}=(0,c.NB)({refreshMode:"debounce"});(0,i.useEffect)((()=>{g(t)}),[t]),(0,i.useEffect)((()=>{if(s&&null!=m&&m.current&&(m.current.focus(),m.current.setSelectionRange)){const{length:t}=m.current.value;m.current.setSelectionRange(t,t),m.current.scrollLeft=m.current.scrollWidth}}),[s]),(0,i.useLayoutEffect)((()=>{null!=y&&y.current&&(y.current.textContent=p||e)}),[p,e,y]),(0,i.useEffect)((()=>{m.current&&m.current.scrollWidth>m.current.clientWidth?f(!0):f(!1)}),[v,x]);const Z=(0,i.useCallback)((()=>{a&&!s&&h(!0)}),[a,s]),w=(0,i.useCallback)((()=>{if(!a)return;const e=p.trim();g(e),t!==e&&n(e),h(!1)}),[a,p,n,t]),U=(0,i.useCallback)((t=>{a&&s&&g(t.target.value)}),[a,s]),S=(0,i.useCallback)((t=>{var e;a&&"Enter"===t.key&&(t.preventDefault(),null==(e=m.current)||e.blur())}),[a]);return(0,l.tZ)("div",{css:u,ref:$},(0,l.tZ)(d.u,{id:"title-tooltip",title:b&&p&&!s?p:null},a?(0,l.tZ)("input",{className:"dynamic-title-input","aria-label":null!=o?o:(0,r.t)("Title"),ref:m,onChange:U,onBlur:w,onClick:Z,onKeyPress:S,placeholder:e,value:p,css:l.iv`
              cursor: ${s?"text":"pointer"};

              ${v&&v>0&&l.iv`
                width: ${v+1}px;
              `}
            `}):(0,l.tZ)("span",{className:"dynamic-title","aria-label":null!=o?o:(0,r.t)("Title"),ref:m},p)),(0,l.tZ)("span",{ref:y,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var p=n(79789),g=n(36674),m=n(13322),b=n(35932);const f=t=>l.iv`
  width: ${8*t.gridUnit}px;
  height: ${8*t.gridUnit}px;
  padding: 0;
  border: 1px solid ${t.colors.primary.dark2};

  &.ant-btn > span.anticon {
    line-height: 0;
    transition: inherit;
  }

  &:hover:not(:focus) > span.anticon {
    color: ${t.colors.primary.light1};
  }
`,v=t=>l.iv`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  background-color: ${t.colors.grayscale.light5};
  height: ${16*t.gridUnit}px;
  padding: 0 ${4*t.gridUnit}px;

  .editable-title {
    overflow: hidden;

    & > input[type='button'],
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      white-space: nowrap;
    }
  }

  span[role='button'] {
    display: flex;
    height: 100%;
  }

  .title-panel {
    display: flex;
    align-items: center;
    min-width: 0;
    margin-right: ${12*t.gridUnit}px;
  }

  .right-button-panel {
    display: flex;
    align-items: center;
  }
`,y=t=>l.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*t.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,x=t=>l.iv`
  margin-left: ${2*t.gridUnit}px;
`,$=({editableTitleProps:t,showTitlePanelItems:e,certificatiedBadgeProps:n,showFaveStar:i,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:u,additionalActionsMenu:$,menuDropdownProps:Z,showMenuDropdown:w=!0,tooltipProps:U})=>{const S=(0,o.Fg)();return(0,l.tZ)("div",{css:v,className:"header-with-actions"},(0,l.tZ)("div",{className:"title-panel"},(0,l.tZ)(h,t),e&&(0,l.tZ)("div",{css:y},(null==n?void 0:n.certifiedBy)&&(0,l.tZ)(p.Z,n),i&&(0,l.tZ)(g.Z,d),c)),(0,l.tZ)("div",{className:"right-button-panel"},u,(0,l.tZ)("div",{css:x},w&&(0,l.tZ)(s.Gj,(0,a.Z)({trigger:["click"],overlay:$},Z),(0,l.tZ)(b.Z,{css:f,buttonStyle:"tertiary","aria-label":(0,r.t)("Menu actions trigger"),tooltip:null==U?void 0:U.text,placement:null==U?void 0:U.placement},(0,l.tZ)(m.Z.MoreHoriz,{iconColor:S.colors.primary.dark2,iconSize:"l"}))))))}},80663:(t,e,n)=>{n.d(e,{Z:()=>d});var a=n(67294),i=n(29119),l=n(51995),o=n(61337),r=n(11965);const s=l.iK.div`
  position: absolute;
  height: 100%;

  :hover .sidebar-resizer::after {
    background-color: ${({theme:t})=>t.colors.primary.base};
  }

  .sidebar-resizer {
    // @z-index-above-sticky-header (100) + 1 = 101
    z-index: 101;
  }

  .sidebar-resizer::after {
    display: block;
    content: '';
    width: 1px;
    height: 100%;
    margin: 0 auto;
  }
`,d=({id:t,initialWidth:e,minWidth:n,maxWidth:l,enable:d,children:c})=>{const[u,h]=function(t,e){const n=(0,a.useRef)(),[i,l]=(0,a.useState)(e);return(0,a.useEffect)((()=>{var e;n.current=null!=(e=n.current)?e:(0,o.rV)(o.dR.CommonResizableSidebarWidths,{}),n.current[t]&&l(n.current[t])}),[t]),[i,function(e){l(e),(0,o.LS)(o.dR.CommonResizableSidebarWidths,{...n.current,[t]:e})}]}(t,e);return(0,r.tZ)(a.Fragment,null,(0,r.tZ)(s,null,(0,r.tZ)(i.e,{enable:{right:d},handleClasses:{right:"sidebar-resizer"},size:{width:u,height:"100%"},minWidth:n,maxWidth:l,onResizeStop:(t,e,n,a)=>h(u+a.width)})),c(u))}},86057:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(11965),i=(n(67294),n(51995)),l=n(78186),o=n(13322),r=n(58593);const s=function({warningMarkdown:t,size:e,marginRight:n}){const s=(0,i.Fg)();return(0,a.tZ)(r.u,{id:"warning-tooltip",title:(0,a.tZ)(l.Z,{source:t})},(0,a.tZ)(o.Z.AlertSolid,{iconColor:s.colors.alert.base,iconSize:e,css:(0,a.iv)({marginRight:null!=n?n:2*s.gridUnit},"","")}))}},3720:(t,e,n)=>{n.r(e),n.d(e,{datasetReducer:()=>ce,default:()=>he});var a=n(67294),i=n(16550),l=n(31069),o=n(61988),r=n(68492),s=n(15926),d=n.n(s),c=n(72570);const u=(t,e)=>{const[n,i]=(0,a.useState)([]),s=e?encodeURIComponent(e):void 0,u=(0,a.useCallback)((async t=>{let e,n=[],a=0;for(;void 0===e||n.length<e;){const i=d().encode_uri({filters:t,page:a});try{const t=await l.Z.get({endpoint:`/api/v1/dataset/?q=${i}`});({count:e}=t.json);const{json:{result:o}}=t;n=[...n,...o],a+=1}catch(t){(0,c.Gb)((0,o.t)("There was an error fetching dataset")),r.Z.error((0,o.t)("There was an error fetching dataset"),t)}}i(n)}),[]);(0,a.useEffect)((()=>{const n=[{col:"database",opr:"rel_o_m",value:null==t?void 0:t.id},{col:"schema",opr:"eq",value:s},{col:"sql",opr:"dataset_is_null_or_empty",value:!0}];e&&u(n)}),[null==t?void 0:t.id,e,s,u]);const h=(0,a.useMemo)((()=>null==n?void 0:n.map((t=>t.table_name))),[n]);return{datasets:n,datasetNames:h}};var h,p=n(52564),g=n(35932),m=n(13322),b=n(83862);!function(t){t[t.SelectDatabase=0]="SelectDatabase",t[t.SelectSchema=1]="SelectSchema",t[t.SelectTable=2]="SelectTable",t[t.ChangeDataset=3]="ChangeDataset"}(h||(h={}));var f=n(51995),v=n(11965);const y=f.iK.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:t})=>t.colors.grayscale.light5};
`,x=f.iK.div`
  width: ${({theme:t,width:e})=>null!=e?e:80*t.gridUnit}px;
  max-width: ${({theme:t,width:e})=>null!=e?e:80*t.gridUnit}px;
  flex-direction: column;
  flex: 1 0 auto;
`,$=f.iK.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Z=f.iK.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`,w=(0,f.iK)(Z)`
  flex: 1 0 auto;
  position: relative;
`,U=(0,f.iK)(Z)`
  flex: 1 0 auto;
  height: auto;
`,S=(0,f.iK)(Z)`
  flex: 0 0 auto;
  height: ${({theme:t})=>16*t.gridUnit}px;
  z-index: 0;
`,z=f.iK.div`
  ${({theme:t})=>`\n  flex: 0 0 auto;\n  height: ${16*t.gridUnit}px;\n  border-bottom: 2px solid ${t.colors.grayscale.light2};\n\n  .header-with-actions {\n    height: ${15.5*t.gridUnit}px;\n  }\n  `}
`,C=f.iK.div`
  ${({theme:t})=>`\n  margin: ${4*t.gridUnit}px;\n  font-size: ${t.typography.sizes.xl}px;\n  font-weight: ${t.typography.weights.bold};\n  `}
`,_=f.iK.div`
  ${({theme:t})=>`\n  height: 100%;\n  border-right: 1px solid ${t.colors.grayscale.light2};\n  `}
`,k=f.iK.div`
  width: 100%;
  position: relative;
`,T=f.iK.div`
  ${({theme:t})=>`\n  border-left: 1px solid ${t.colors.grayscale.light2};\n  color: ${t.colors.success.base};\n  `}
`,E=f.iK.div`
  ${({theme:t})=>`\n  height: ${16*t.gridUnit}px;\n  width: 100%;\n  border-top: 1px solid ${t.colors.grayscale.light2};\n  border-bottom: 1px solid ${t.colors.grayscale.light2};\n  color: ${t.colors.info.base};\n  border-top: ${t.gridUnit/4}px solid\n    ${t.colors.grayscale.light2};\n  padding: ${4*t.gridUnit}px;\n  display: flex;\n  justify-content: flex-end;\n  background-color: ${t.colors.grayscale.light5};\n  z-index: ${t.zIndex.max}\n  `}
`,I=f.iK.div`
  .ant-btn {
    span {
      margin-right: 0;
    }

    &:disabled {
      svg {
        color: ${({theme:t})=>t.colors.grayscale.light1};
      }
    }
  }
`,P=t=>v.iv`
  width: ${21.5*t.gridUnit}px;

  &:disabled {
    background-color: ${t.colors.grayscale.light3};
    color: ${t.colors.grayscale.light1};
  }
`,K=(0,o.t)("New dataset"),D={text:(0,o.t)("Select a database table and create dataset"),placement:"bottomRight"},M=()=>(0,v.tZ)(g.Z,{buttonStyle:"primary",tooltip:null==D?void 0:D.text,placement:null==D?void 0:D.placement,disabled:!0,css:P},(0,v.tZ)(m.Z.Save,{iconSize:"m"}),(0,o.t)("Save")),N=()=>(0,v.tZ)(b.Menu,null,(0,v.tZ)(b.Menu.Item,null,(0,o.t)("Settings")),(0,v.tZ)(b.Menu.Item,null,(0,o.t)("Delete")));function R({setDataset:t,title:e=K,editing:n=!1}){const i={title:null!=e?e:K,placeholder:K,onSave:e=>{t({type:h.ChangeDataset,payload:{name:"dataset_name",value:e}})},canEdit:!1,label:(0,o.t)("dataset name")};return(0,v.tZ)(I,null,n?(0,v.tZ)(p.u,{editableTitleProps:i,showTitlePanelItems:!1,showFaveStar:!1,faveStarProps:{itemId:1,saveFaveStar:()=>{}},titlePanelAdditionalItems:(0,v.tZ)(a.Fragment,null),rightPanelAdditionalItems:M(),additionalActionsMenu:N(),menuDropdownProps:{disabled:!0},tooltipProps:D}):(0,v.tZ)(C,null,e||K))}var V,F,A=n(82607),j=n(71262),L=n(73126),O=n(73727),W=n(55786),q=n(93197),B=n(94301);function H(){return H=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},H.apply(this,arguments)}const X=({title:t,titleId:e,...n},i)=>a.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:160,height:166,fill:"none",ref:i,"aria-labelledby":e},n),t?a.createElement("title",{id:e},t):null,V||(V=a.createElement("path",{fill:"#FAFAFA",fillRule:"evenodd",d:"M123.638 8a.5.5 0 0 0-.5.5V158h28.758V8.5a.5.5 0 0 0-.5-.5zM84.793 40.643a.5.5 0 0 1 .5-.5h27.759a.5.5 0 0 1 .5.5V158H84.793zM46.95 72.285a.5.5 0 0 0-.5.5V158h28.758V72.785a.5.5 0 0 0-.5-.5zM8.604 93.715a.5.5 0 0 0-.5.5V158h28.758V94.215a.5.5 0 0 0-.5-.5z",clipRule:"evenodd"})),F||(F=a.createElement("path",{fill:"#D9D9D9",d:"M123.138 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zm-38.344 0v.5h.5v-.5zm-28.759 0h-.5v.5h.5zm-38.344-.001h-.5v.5h.5zm28.758 0v.5h.5v-.5zM8.104 158h-.5v.5h.5zm28.758 0v.5h.5v-.5zM123.639 8.5v-1a1 1 0 0 0-1 1zm0 149.5V8.5h-1V158zm28.258-.5h-28.758v1h28.758zm-.5-149V158h1V8.5zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1h-27.758zM85.293 39.643a1 1 0 0 0-1 1h1zm27.759 0H85.293v1h27.759zm1 1a1 1 0 0 0-1-1v1zm0 117.357V40.643h-1V158zm-29.259.5h28.759v-1H84.793zm-.5-117.857V158h1V40.643zM46.95 72.785v-1a1 1 0 0 0-1 1zm0 85.214V72.785h-1V158zm28.258-.5H46.45v1h28.758zm-.5-84.714V158h1V72.785zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H46.95zM8.604 94.215v-1a1 1 0 0 0-1 1zm0 63.785V94.215h-1V158zm28.258-.5H8.104v1h28.758zm-.5-63.285V158h1V94.215zm0 0h1a1 1 0 0 0-1-1zm-27.758 0h27.758v-1H8.604z"}))),G=(0,a.forwardRef)(X);var Q=n(14114),Y=n(34858),J=n(93139),tt=n(30381),et=n.n(tt),nt=n(51794),at=n(58593);const it=f.iK.div`
  & > span {
    width: 100%;
    display: flex;

    .ant-tooltip-open {
      display: inline;
    }
  }
`,lt=f.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
`,ot=f.iK.span`
  &:not(:last-child)::after {
    content: ', ';
  }
`,rt=f.iK.div`
  .link {
    color: ${({theme:t})=>t.colors.grayscale.light5};
    display: block;
    text-decoration: underline;
  }
`,st=f.iK.span`
  ${({theme:t})=>`\n  cursor: pointer;\n  color: ${t.colors.primary.dark1};\n  font-weight: ${t.typography.weights.normal};\n  `}
`;function dt({items:t,renderVisibleItem:e=(t=>t),renderTooltipItem:n=(t=>t),getKey:i=(t=>t),maxLinks:l=20}){const[r,s,d,c]=(0,nt.Z)(),u=(0,a.useMemo)((()=>t.length>l?t.length-l:void 0),[t,l]),h=(0,a.useMemo)((()=>(0,v.tZ)(lt,{ref:r},t.map((t=>(0,v.tZ)(ot,{key:i(t)},e(t)))))),[i,t,e]),p=(0,a.useMemo)((()=>t.slice(0,l).map((t=>(0,v.tZ)(rt,{key:i(t)},n(t))))),[i,t,l,n]);return(0,v.tZ)(it,null,(0,v.tZ)(at.u,{placement:"top",title:d?(0,v.tZ)(a.Fragment,null,p,u&&(0,v.tZ)("span",null,(0,o.t)("+ %s more",u))):null},h,c&&(0,v.tZ)(st,{ref:s},"+",d)))}const ct=t=>({key:t.id,to:`/superset/dashboard/${t.id}`,target:"_blank",rel:"noreferer noopener",children:t.dashboard_title}),ut=t=>v.iv`
  color: ${t.colors.grayscale.light5};
  text-decoration: underline;
  &:hover {
    color: inherit;
  }
`,ht=[{key:"slice_name",title:(0,o.t)("Chart"),width:"320px",sorter:!0,render:(t,e)=>(0,v.tZ)(O.rU,{to:e.url},e.slice_name)},{key:"owners",title:(0,o.t)("Chart owners"),width:"242px",render:(t,e)=>{var n,a;return(0,v.tZ)(dt,{items:null!=(n=null==(a=e.owners)?void 0:a.map((t=>`${t.first_name} ${t.last_name}`)))?n:[]})}},{key:"last_saved_at",title:(0,o.t)("Chart last modified"),width:"209px",sorter:!0,defaultSortOrder:"descend",render:(t,e)=>e.last_saved_at?et().utc(e.last_saved_at).fromNow():null},{key:"last_saved_by.first_name",title:(0,o.t)("Chart last modified by"),width:"216px",sorter:!0,render:(t,e)=>e.last_saved_by?`${e.last_saved_by.first_name} ${e.last_saved_by.last_name}`:null},{key:"dashboards",title:(0,o.t)("Dashboard usage"),width:"420px",render:(t,e)=>(0,v.tZ)(dt,{items:e.dashboards,renderVisibleItem:t=>(0,v.tZ)(O.rU,ct(t)),renderTooltipItem:t=>(0,v.tZ)(O.rU,(0,L.Z)({},ct(t),{css:ut})),getKey:t=>t.id})}],pt=t=>v.iv`
  && th.ant-table-cell {
    color: ${t.colors.grayscale.light1};
  }

  .ant-table-placeholder {
    display: none;
  }
`,gt=(0,v.tZ)(a.Fragment,null,(0,v.tZ)(m.Z.PlusOutlined,{iconSize:"m",css:v.iv`
        & > .anticon {
          line-height: 0;
        }
      `}),(0,o.t)("Create chart with dataset")),mt=(0,f.iK)(B.XJ)`
  margin: ${({theme:t})=>13*t.gridUnit}px 0;
`,bt=({datasetId:t})=>{const{loading:e,recordCount:n,data:i,onChange:l}=(t=>{const{addDangerToast:e}=(0,Q.e1)(),n=(0,a.useMemo)((()=>[{id:"datasource_id",operator:J.p.Equals,value:t}]),[t]),{state:{loading:i,resourceCount:l,resourceCollection:r},fetchData:s}=(0,Y.Yi)("chart",(0,o.t)("chart"),e,!0,[],n),d=(0,a.useMemo)((()=>r.map((t=>({...t,key:t.id})))),[r]),c=(0,a.useCallback)(((t,e,n)=>{var a,i;const l=(null!=(a=t.current)?a:1)-1,o=null!=(i=t.pageSize)?i:0,r=(0,W.Z)(n).filter((({columnKey:t})=>"string"==typeof t)).map((({columnKey:t,order:e})=>({id:t,desc:"descend"===e})));s({pageIndex:l,pageSize:o,sortBy:r,filters:[]})}),[s]);return(0,a.useEffect)((()=>{s({pageIndex:0,pageSize:25,sortBy:[{id:"last_saved_at",desc:!0}],filters:[]})}),[s]),{loading:i,recordCount:l,data:d,onChange:c}})(t),r=(0,a.useCallback)((()=>window.open(`/explore/?dataset_type=table&dataset_id=${t}`,"_blank")),[t]);return(0,v.tZ)("div",{css:i.length?null:pt},(0,v.tZ)(q.ZP,{columns:ht,data:i,size:q.ex.Middle,defaultPageSize:25,recordCount:n,loading:e,onChange:l}),i.length||e?null:(0,v.tZ)(mt,{image:(0,v.tZ)(G,null),title:(0,o.t)("No charts"),description:(0,o.t)("This dataset is not used to power any charts."),buttonText:gt,buttonAction:r}))},ft=(0,f.iK)(j.ZP)`
  ${({theme:t})=>`\n  margin-top: ${8.5*t.gridUnit}px;\n  padding-left: ${4*t.gridUnit}px;\n  padding-right: ${4*t.gridUnit}px;\n\n  .ant-tabs-top > .ant-tabs-nav::before {\n    width: ${50*t.gridUnit}px;\n  }\n  `}
`,vt=f.iK.div`
  ${({theme:t})=>`\n  .ant-badge {\n    width: ${8*t.gridUnit}px;\n    margin-left: ${2.5*t.gridUnit}px;\n  }\n  `}
`,yt={USAGE_TEXT:(0,o.t)("Usage"),COLUMNS_TEXT:(0,o.t)("Columns"),METRICS_TEXT:(0,o.t)("Metrics")},xt=({id:t})=>{const{usageCount:e}=(t=>{const[e,n]=(0,a.useState)(0),i=(0,a.useCallback)((()=>l.Z.get({endpoint:`/api/v1/dataset/${t}/related_objects`}).then((({json:t})=>{n(null==t?void 0:t.charts.count)})).catch((t=>{(0,c.Gb)((0,o.t)("There was an error fetching dataset's related objects")),r.Z.error(t)}))),[t]);return(0,a.useEffect)((()=>{t&&i()}),[t,i]),{usageCount:e}})(t),n=(0,v.tZ)(vt,null,(0,v.tZ)("span",null,yt.USAGE_TEXT),e>0&&(0,v.tZ)(A.Z,{count:e}));return(0,v.tZ)(ft,{moreIcon:null,fullWidth:!1},(0,v.tZ)(j.ZP.TabPane,{tab:yt.COLUMNS_TEXT,key:"1"}),(0,v.tZ)(j.ZP.TabPane,{tab:yt.METRICS_TEXT,key:"2"}),(0,v.tZ)(j.ZP.TabPane,{tab:n,key:"3"},(0,v.tZ)(bt,{datasetId:t})))};var $t=n(29487);const Zt=(t,e,n)=>{var a;return null==e||null==(a=e[t])||null==a.localeCompare?void 0:a.localeCompare(null==n?void 0:n[t])};var wt=n(89419);const Ut=f.iK.div`
  padding: ${({theme:t})=>8*t.gridUnit}px
    ${({theme:t})=>6*t.gridUnit}px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`,St=(0,f.iK)(B.XJ)`
  max-width: 50%;

  p {
    width: ${({theme:t})=>115*t.gridUnit}px;
  }
`,zt=(0,o.t)("Datasets can be created from database tables or SQL queries. Select a database table to the left or "),Ct=(0,o.t)("create dataset from SQL query"),_t=(0,o.t)(" to open SQL Lab. From there you can save the query as a dataset."),kt=(0,o.t)("Select dataset source"),Tt=(0,o.t)("No table columns"),Et=(0,o.t)("This database table does not contain any data. Please select a different table."),It=(0,o.t)("An Error Occurred"),Pt=(0,o.t)("Unable to load columns for the selected table. Please select a different table."),Kt=t=>{const{hasError:e,tableName:n,hasColumns:i}=t;let l="empty-dataset.svg",o=kt,r=(0,v.tZ)(a.Fragment,null,zt,(0,v.tZ)(O.rU,{to:"/sqllab"},(0,v.tZ)("span",{role:"button",tabIndex:0},Ct)),_t);return e?(o=It,r=(0,v.tZ)(a.Fragment,null,Pt),l=void 0):n&&!i&&(l="no-columns.svg",o=Tt,r=(0,v.tZ)(a.Fragment,null,Et)),(0,v.tZ)(Ut,null,(0,v.tZ)(St,{image:l,title:o,description:r}))};var Dt;!function(t){t.ABSOLUTE="absolute",t.RELATIVE="relative"}(Dt||(Dt={}));const Mt=f.iK.div`
  ${({theme:t,position:e})=>`\n  position: ${e};\n  margin: ${4*t.gridUnit}px\n    ${3*t.gridUnit}px\n    ${3*t.gridUnit}px\n    ${6*t.gridUnit}px;\n  font-size: ${6*t.gridUnit}px;\n  font-weight: ${t.typography.weights.medium};\n  padding-bottom: ${3*t.gridUnit}px;\n\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  .anticon:first-of-type {\n    margin-right: ${4*t.gridUnit}px;\n  }\n\n  .anticon:nth-of-type(2) {\n    margin-left: ${4*t.gridUnit}px;\n  `}
`,Nt=f.iK.div`
  ${({theme:t})=>`\n  margin-left: ${6*t.gridUnit}px;\n  margin-bottom: ${3*t.gridUnit}px;\n  font-weight: ${t.typography.weights.bold};\n  `}
`,Rt=f.iK.div`
  ${({theme:t})=>`\n  padding: ${8*t.gridUnit}px\n    ${6*t.gridUnit}px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  `}
`,Vt=f.iK.div`
  ${({theme:t})=>`\n  max-width: 50%;\n  width: 200px;\n\n  img {\n    width: 120px;\n    margin-left: 40px;\n  }\n\n  div {\n    width: 100%;\n    margin-top: ${3*t.gridUnit}px;\n    text-align: center;\n    font-weight: ${t.typography.weights.normal};\n    font-size: ${t.typography.sizes.l}px;\n    color: ${t.colors.grayscale.light1};\n  }\n  `}
`,Ft=f.iK.div`
  ${({theme:t})=>`\n  position: relative;\n  margin: ${3*t.gridUnit}px;\n  margin-left: ${6*t.gridUnit}px;\n  height: calc(100% - ${60*t.gridUnit}px);\n  overflow: auto;\n  `}
`,At=f.iK.div`
  ${({theme:t})=>`\n  position: relative;\n  margin: ${3*t.gridUnit}px;\n  margin-left: ${6*t.gridUnit}px;\n  height: calc(100% - ${30*t.gridUnit}px);\n  overflow: auto;\n  `}
`,jt=f.iK.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`,Lt=(0,f.iK)($t.Z)`
  ${({theme:t})=>`\n  border: 1px solid ${t.colors.info.base};\n  padding: ${4*t.gridUnit}px;\n  margin: ${6*t.gridUnit}px ${6*t.gridUnit}px\n    ${8*t.gridUnit}px;\n  .view-dataset-button {\n    position: absolute;\n    top: ${4*t.gridUnit}px;\n    right: ${4*t.gridUnit}px;\n    font-weight: ${t.typography.weights.normal};\n\n    &:hover {\n      color: ${t.colors.secondary.dark3};\n      text-decoration: underline;\n    }\n  }\n  `}
`,Ot=(0,o.t)("Refreshing columns"),Wt=(0,o.t)("Table columns"),qt=(0,o.t)("Loading"),Bt=["5","10","15","25"],Ht=[{title:"Column Name",dataIndex:"name",key:"name",sorter:(t,e)=>Zt("name",t,e)},{title:"Datatype",dataIndex:"type",key:"type",width:"100px",sorter:(t,e)=>Zt("type",t,e)}],Xt=(0,o.t)("This table already has a dataset associated with it. You can only associate one dataset with a table.\n"),Gt=(0,o.t)("View Dataset"),Qt=({tableName:t,columnList:e,loading:n,hasError:i,datasets:l})=>{var r;const s=(0,f.Fg)(),d=null!=(r=(null==e?void 0:e.length)>0)&&r,c=null==l?void 0:l.map((t=>t.table_name)),u=null==l?void 0:l.find((e=>e.table_name===t));let h,p;return n&&(p=(0,v.tZ)(Rt,null,(0,v.tZ)(Vt,null,(0,v.tZ)("img",{alt:qt,src:wt}),(0,v.tZ)("div",null,Ot)))),n||(h=!n&&t&&d&&!i?(0,v.tZ)(a.Fragment,null,(0,v.tZ)(Nt,null,Wt),u?(0,v.tZ)(Ft,null,(0,v.tZ)(jt,null,(0,v.tZ)(q.ZP,{loading:n,size:q.ex.Small,columns:Ht,data:e,pageSizeOptions:Bt,defaultPageSize:25}))):(0,v.tZ)(At,null,(0,v.tZ)(jt,null,(0,v.tZ)(q.ZP,{loading:n,size:q.ex.Small,columns:Ht,data:e,pageSizeOptions:Bt,defaultPageSize:25})))):(0,v.tZ)(Kt,{hasColumns:d,hasError:i,tableName:t})),(0,v.tZ)(a.Fragment,null,t&&(0,v.tZ)(a.Fragment,null,(null==c?void 0:c.includes(t))&&(g=u,(0,v.tZ)(Lt,{closable:!1,type:"info",showIcon:!0,message:(0,o.t)("This table already has a dataset"),description:(0,v.tZ)(a.Fragment,null,Xt,(0,v.tZ)("span",{role:"button",onClick:()=>{window.open(null==g?void 0:g.explore_url,"_blank","noreferrer noopener popup=false")},tabIndex:0,className:"view-dataset-button"},Gt))})),(0,v.tZ)(Mt,{position:!n&&d?Dt.RELATIVE:Dt.ABSOLUTE,title:t||""},t&&(0,v.tZ)(m.Z.Table,{iconColor:s.colors.grayscale.base}),t)),h,p);var g},Yt=({tableName:t,dbId:e,schema:n,setHasColumns:i,datasets:s})=>{const[d,u]=(0,a.useState)([]),[h,p]=(0,a.useState)(!1),[g,m]=(0,a.useState)(!1),b=(0,a.useRef)(t);return(0,a.useEffect)((()=>{b.current=t,t&&n&&e&&(async t=>{const{dbId:e,tableName:n,schema:a}=t;p(!0),null==i||i(!1);const s=`/api/v1/database/${e}/table/${n}/${a}/`;try{const t=await l.Z.get({endpoint:s});if((t=>{let e=!0;if("string"!=typeof(null==t?void 0:t.name)&&(e=!1),e&&!Array.isArray(t.columns)&&(e=!1),e&&t.columns.length>0){const n=t.columns.some(((t,e)=>{const n=(t=>{let e=!0;const n="The object provided to isITableColumn does match the interface.";return"string"!=typeof(null==t?void 0:t.name)&&(e=!1,console.error(`${n} The property 'name' is required and must be a string`)),e&&"string"!=typeof(null==t?void 0:t.type)&&(e=!1,console.error(`${n} The property 'type' is required and must be a string`)),e})(t);return n||console.error(`The provided object does not match the IDatabaseTable interface. columns[${e}] is invalid and does not match the ITableColumn interface`),!n}));e=!n}return e})(null==t?void 0:t.json)){const e=t.json;e.name===b.current&&(u(e.columns),null==i||i(e.columns.length>0),m(!1))}else u([]),null==i||i(!1),m(!0),(0,c.Gb)((0,o.t)("The API response from %s does not match the IDatabaseTable interface.",s)),r.Z.error((0,o.t)("The API response from %s does not match the IDatabaseTable interface.",s))}catch(t){u([]),null==i||i(!1),m(!0)}finally{p(!1)}})({tableName:t,dbId:e,schema:n})}),[t,e,n]),(0,v.tZ)(Qt,{columnList:d,hasError:g,loading:h,tableName:t,datasets:s})};var Jt=n(17982),te=n(61337);const ee=f.iK.div`
  ${({theme:t})=>`\n    padding: ${4*t.gridUnit}px;\n    height: 100%;\n    background-color: ${t.colors.grayscale.light5};\n    position: relative;\n    .emptystate {\n      height: auto;\n      margin-top: ${17.5*t.gridUnit}px;\n    }\n    .section-title {\n      margin-top: ${5.5*t.gridUnit}px;\n      margin-bottom: ${11*t.gridUnit}px;\n      font-weight: ${t.typography.weights.bold};\n    }\n    .table-title {\n      margin-top: ${11*t.gridUnit}px;\n      margin-bottom: ${6*t.gridUnit}px;\n      font-weight: ${t.typography.weights.bold};\n    }\n    .options-list {\n      overflow: auto;\n      position: absolute;\n      bottom: 0;\n      top: ${92.25*t.gridUnit}px;\n      left: ${3.25*t.gridUnit}px;\n      right: 0;\n\n      .no-scrollbar {\n        margin-right: ${4*t.gridUnit}px;\n      }\n\n      .options {\n        cursor: pointer;\n        padding: ${1.75*t.gridUnit}px;\n        border-radius: ${t.borderRadius}px;\n        :hover {\n          background-color: ${t.colors.grayscale.light4}\n        }\n      }\n\n      .options-highlighted {\n        cursor: pointer;\n        padding: ${1.75*t.gridUnit}px;\n        border-radius: ${t.borderRadius}px;\n        background-color: ${t.colors.primary.dark1};\n        color: ${t.colors.grayscale.light5};\n      }\n\n      .options, .options-highlighted {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n    }\n    form > span[aria-label="refresh"] {\n      position: absolute;\n      top: ${69*t.gridUnit}px;\n      left: ${42.75*t.gridUnit}px;\n      font-size: ${4.25*t.gridUnit}px;\n    }\n    .table-form {\n      margin-bottom: ${8*t.gridUnit}px;\n    }\n    .loading-container {\n      position: absolute;\n      top: ${89.75*t.gridUnit}px;\n      left: 0;\n      right: 0;\n      text-align: center;\n      img {\n        width: ${20*t.gridUnit}px;\n        margin-bottom: ${2.5*t.gridUnit}px;\n      }\n      p {\n        color: ${t.colors.grayscale.light1};\n      }\n    }\n`}
`;function ne({setDataset:t,dataset:e,datasetNames:n}){const{addDangerToast:i}=(0,Q.e1)(),l=(0,a.useCallback)((e=>{t({type:h.SelectDatabase,payload:{db:e}})}),[t]);(0,a.useEffect)((()=>{const t=(0,te.rV)(te.dR.Database,null);t&&l(t)}),[l]);const r=(0,a.useCallback)((t=>(0,v.tZ)(Jt.ez,{table:null!=n&&n.includes(t.value)?{...t,extra:{warning_markdown:(0,o.t)("This table already has a dataset")}}:t})),[n]);return(0,v.tZ)(ee,null,(0,v.tZ)(Jt.ZP,(0,L.Z)({database:null==e?void 0:e.db,handleError:i,emptyState:(0,B.UX)(!1),onDbChange:l,onSchemaChange:e=>{e&&t({type:h.SelectSchema,payload:{name:"schema",value:e}})},onTableSelectChange:e=>{t({type:h.SelectTable,payload:{name:"table_name",value:e}})},sqlLabMode:!1,customTableOptionLabelRenderer:r},(null==e?void 0:e.schema)&&{schema:e.schema})))}var ae=n(97381),ie=n(3741);const le=["db","schema","table_name"],oe=[ie.Ph,ie.FY,ie.Eh,ie.TA],re=(0,Q.ZP)((function({datasetObject:t,addDangerToast:e,hasColumns:n=!1,datasets:l}){const r=(0,i.k6)(),{createResource:s}=(0,Y.LE)("dataset",(0,o.t)("dataset"),e),d=(0,o.t)("Select a database table."),c=(0,o.t)("Create dataset and create chart"),u=!(null!=t&&t.table_name)||!n||(null==l?void 0:l.includes(null==t?void 0:t.table_name));return(0,v.tZ)(a.Fragment,null,(0,v.tZ)(g.Z,{onClick:()=>{if(t){const e=(t=>{let e=0;const n=Object.keys(t).reduce(((n,a)=>(le.includes(a)&&t[a]&&(e+=1),e)),0);return oe[n]})(t);(0,ae.logEvent)(e,t)}else(0,ae.logEvent)(ie.Ph,{});r.goBack()}},(0,o.t)("Cancel")),(0,v.tZ)(g.Z,{buttonStyle:"primary",disabled:u,tooltip:null!=t&&t.table_name?void 0:d,onClick:()=>{if(t){var e;const n={database:null==(e=t.db)?void 0:e.id,schema:t.schema,table_name:t.table_name};s(n).then((e=>{e&&"number"==typeof e&&((0,ae.logEvent)(ie.P$,t),r.push(`/chart/add/?dataset=${t.table_name}`))}))}}},c))}));var se=n(80663);function de({header:t,leftPanel:e,datasetPanel:n,rightPanel:a,footer:i}){const l=(0,f.Fg)();return(0,v.tZ)(y,null,t&&(0,v.tZ)(z,null,t),(0,v.tZ)(w,null,e&&(0,v.tZ)(se.Z,{id:"dataset",initialWidth:80*l.gridUnit,minWidth:80*l.gridUnit,enable:!0},(t=>(0,v.tZ)(x,{width:t},(0,v.tZ)(_,null,e)))),(0,v.tZ)($,null,(0,v.tZ)(U,null,n&&(0,v.tZ)(k,null,n),a&&(0,v.tZ)(T,null,a)),(0,v.tZ)(S,null,i&&(0,v.tZ)(E,null,i)))))}function ce(t,e){const n={...t||{}};switch(e.type){case h.SelectDatabase:return{...n,...e.payload,schema:null,table_name:null};case h.SelectSchema:return{...n,[e.payload.name]:e.payload.value,table_name:null};case h.SelectTable:return{...n,[e.payload.name]:e.payload.value};case h.ChangeDataset:return{...n,[e.payload.name]:e.payload.value};default:return null}}const ue="/tablemodelview/list/?pageIndex=0&sortColumn=changed_on_delta_humanized&sortOrder=desc";function he(){const[t,e]=(0,a.useReducer)(ce,null),[n,l]=(0,a.useState)(!1),[o,r]=(0,a.useState)(!1),{datasets:s,datasetNames:d}=u(null==t?void 0:t.db,null==t?void 0:t.schema),{datasetId:c}=(0,i.UO)();return(0,a.useEffect)((()=>{Number.isNaN(parseInt(c,10))||r(!0)}),[c]),(0,v.tZ)(de,{header:(0,v.tZ)(R,{setDataset:e,title:null==t?void 0:t.table_name}),leftPanel:o?null:(0,v.tZ)(ne,{setDataset:e,dataset:t,datasetNames:d}),datasetPanel:o?(0,v.tZ)(xt,{id:c}):(0,v.tZ)(Yt,{tableName:null==t?void 0:t.table_name,dbId:null==t||null==(h=t.db)?void 0:h.id,schema:null==t?void 0:t.schema,setHasColumns:l,datasets:s}),footer:(0,v.tZ)(re,{url:ue,datasetObject:t,hasColumns:n,datasets:d})});var h}}}]);
//# sourceMappingURL=3525dd1d4a6d39a372b4.chunk.js.map