"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9818],{32871:(t,e,i)=>{var n;i.d(e,{p:()=>n}),function(t){t.Dashboards="dashboards",t.Description="description",t.LastModified="lastModified",t.Owner="owner",t.Rows="rows",t.Sql="sql",t.Table="table",t.Tags="tags"}(n||(n={}))},67697:(t,e,i)=>{i.d(e,{pG:()=>v.p,ZP:()=>Z});var n=i(87185),l=i.n(n),a=i(67294),o=i(99612),r=i(51995),s=i(58593),d=i(55786),c=i(61988),p=i(13322),u=i(11965);const g=r.iK.div`
  font-weight: ${({theme:t})=>t.typography.weights.bold};
`,h=({text:t,header:e})=>{const i=(0,d.Z)(t);return(0,u.tZ)(a.Fragment,null,e&&(0,u.tZ)(g,null,e),i.map((t=>(0,u.tZ)("div",{key:t},t))))},m=16,f={dashboards:0,table:1,sql:2,rows:3,tags:4,description:5,owner:6,lastModified:7},y=r.iK.div`
  ${({theme:t,count:e})=>`\n    display: flex;\n    align-items: center;\n    padding: 8px 12px;\n    background-color: ${t.colors.grayscale.light4};\n    color: ${t.colors.grayscale.base};\n    font-size: ${t.typography.sizes.s}px;\n    min-width: ${24+32*e-m}px;\n    border-radius: ${t.borderRadius}px;\n    line-height: 1;\n  `}
`,x=r.iK.div`
  ${({theme:t,collapsed:e,last:i,onClick:n})=>`\n    display: flex;\n    align-items: center;\n    max-width: ${174+(i?0:m)}px;\n    min-width: ${e?16+(i?0:m):94+(i?0:m)}px;\n    padding-right: ${i?0:m}px;\n    cursor: ${n?"pointer":"default"};\n    & .metadata-icon {\n      color: ${n&&e?t.colors.primary.base:t.colors.grayscale.base};\n      padding-right: ${e?0:8}px;\n      & .anticon {\n        line-height: 0;\n      }\n    }\n    & .metadata-text {\n      min-width: 70px;\n      overflow: hidden;\n      text-overflow: ${e?"unset":"ellipsis"};\n      white-space: nowrap;\n      text-decoration: ${n?"underline":"none"};\n      line-height: 1.4;\n    }\n  `}
`,b=r.iK.div`
  display: -webkit-box;
  -webkit-line-clamp: 20;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`,w=({barWidth:t,contentType:e,collapsed:i,last:n=!1,tooltipPlacement:l})=>{const{icon:o,title:r,tooltip:d=r}=(t=>{const{type:e}=t;switch(e){case v.p.Dashboards:return{icon:p.Z.FundProjectionScreenOutlined,title:t.title,tooltip:t.description?(0,u.tZ)("div",null,(0,u.tZ)(h,{header:t.title,text:t.description})):void 0};case v.p.Description:return{icon:p.Z.BookOutlined,title:t.value};case v.p.LastModified:return{icon:p.Z.EditOutlined,title:t.value,tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Last modified"),text:t.value}),(0,u.tZ)(h,{header:(0,c.t)("Modified by"),text:t.modifiedBy}))};case v.p.Owner:return{icon:p.Z.UserOutlined,title:t.createdBy,tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Created by"),text:t.createdBy}),!!t.owners&&(0,u.tZ)(h,{header:(0,c.t)("Owners"),text:t.owners}),(0,u.tZ)(h,{header:(0,c.t)("Created on"),text:t.createdOn}))};case v.p.Rows:return{icon:p.Z.InsertRowBelowOutlined,title:t.title,tooltip:t.title};case v.p.Sql:return{icon:p.Z.ConsoleSqlOutlined,title:t.title,tooltip:t.title};case v.p.Table:return{icon:p.Z.Table,title:t.title,tooltip:t.title};case v.p.Tags:return{icon:p.Z.TagsOutlined,title:t.values.join(", "),tooltip:(0,u.tZ)("div",null,(0,u.tZ)(h,{header:(0,c.t)("Tags"),text:t.values}))};default:throw Error(`Invalid type provided: ${e}`)}})(e),[g,m]=(0,a.useState)(!1),f=(0,a.useRef)(null),y=o,{type:w,onClick:Z}=e;(0,a.useEffect)((()=>{m(!!f.current&&f.current.scrollWidth>f.current.clientWidth)}),[t,m,e]);const $=(0,u.tZ)(x,{collapsed:i,last:n,onClick:Z?()=>Z(w):void 0},(0,u.tZ)(y,{iconSize:"l",className:"metadata-icon"}),!i&&(0,u.tZ)("span",{ref:f,className:"metadata-text"},r));return g||i||d&&d!==r?(0,u.tZ)(s.u,{placement:l,title:(0,u.tZ)(b,null,d)},$):$};var v=i(32871);const Z=({items:t,tooltipPlacement:e="top"})=>{const[i,n]=(0,a.useState)(),[r,s]=(0,a.useState)(!1),d=l()(t,((t,e)=>t.type===e.type)).sort(((t,e)=>f[t.type]-f[e.type])),c=d.length;if(c<2)throw Error("The minimum number of items for the metadata bar is 2.");if(c>6)throw Error("The maximum number of items for the metadata bar is 6.");const p=(0,a.useCallback)((t=>{const e=110*c-m;n(t),s(Boolean(t&&t<e))}),[c]),{ref:g}=(0,o.NB)({onResize:p});return(0,u.tZ)(y,{ref:g,count:c},d.map(((t,n)=>(0,u.tZ)(w,{barWidth:i,key:n,contentType:t,collapsed:r,last:n===c-1,tooltipPlacement:e}))))}},52564:(t,e,i)=>{i.d(e,{u:()=>v});var n=i(73126),l=i(67294),a=i(11965),o=i(51995),r=i(61988),s=i(4715),d=i(58593),c=i(99612);const p=t=>a.iv`
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
`,u=({title:t,placeholder:e,onSave:i,canEdit:n,label:o})=>{const[s,u]=(0,l.useState)(!1),[g,h]=(0,l.useState)(t||""),m=(0,l.useRef)(null),[f,y]=(0,l.useState)(!1),{width:x,ref:b}=(0,c.NB)(),{width:w,ref:v}=(0,c.NB)({refreshMode:"debounce"});(0,l.useEffect)((()=>{h(t)}),[t]),(0,l.useEffect)((()=>{if(s&&null!=m&&m.current&&(m.current.focus(),m.current.setSelectionRange)){const{length:t}=m.current.value;m.current.setSelectionRange(t,t),m.current.scrollLeft=m.current.scrollWidth}}),[s]),(0,l.useLayoutEffect)((()=>{null!=b&&b.current&&(b.current.textContent=g||e)}),[g,e,b]),(0,l.useEffect)((()=>{m.current&&m.current.scrollWidth>m.current.clientWidth?y(!0):y(!1)}),[x,w]);const Z=(0,l.useCallback)((()=>{n&&!s&&u(!0)}),[n,s]),$=(0,l.useCallback)((()=>{if(!n)return;const e=g.trim();h(e),t!==e&&i(e),u(!1)}),[n,g,i,t]),S=(0,l.useCallback)((t=>{n&&s&&h(t.target.value)}),[n,s]),P=(0,l.useCallback)((t=>{var e;n&&"Enter"===t.key&&(t.preventDefault(),null==(e=m.current)||e.blur())}),[n]);return(0,a.tZ)("div",{css:p,ref:v},(0,a.tZ)(d.u,{id:"title-tooltip",title:f&&g&&!s?g:null},n?(0,a.tZ)("input",{className:"dynamic-title-input","aria-label":null!=o?o:(0,r.t)("Title"),ref:m,onChange:S,onBlur:$,onClick:Z,onKeyPress:P,placeholder:e,value:g,css:a.iv`
              cursor: ${s?"text":"pointer"};

              ${x&&x>0&&a.iv`
                width: ${x+1}px;
              `}
            `}):(0,a.tZ)("span",{className:"dynamic-title","aria-label":null!=o?o:(0,r.t)("Title"),ref:m},g)),(0,a.tZ)("span",{ref:b,className:"input-sizer","aria-hidden":!0,tabIndex:-1}))};var g=i(79789),h=i(36674),m=i(13322),f=i(35932);const y=t=>a.iv`
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
`,x=t=>a.iv`
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
`,b=t=>a.iv`
  display: flex;
  align-items: center;
  padding-left: ${2*t.gridUnit}px;

  & .fave-unfave-icon {
    padding: 0 ${t.gridUnit}px;

    &:first-of-type {
      padding-left: 0;
    }
  }
`,w=t=>a.iv`
  margin-left: ${2*t.gridUnit}px;
`,v=({editableTitleProps:t,showTitlePanelItems:e,certificatiedBadgeProps:i,showFaveStar:l,faveStarProps:d,titlePanelAdditionalItems:c,rightPanelAdditionalItems:p,additionalActionsMenu:v,menuDropdownProps:Z,showMenuDropdown:$=!0,tooltipProps:S})=>{const P=(0,o.Fg)();return(0,a.tZ)("div",{css:x,className:"header-with-actions"},(0,a.tZ)("div",{className:"title-panel"},(0,a.tZ)(u,t),e&&(0,a.tZ)("div",{css:b},(null==i?void 0:i.certifiedBy)&&(0,a.tZ)(g.Z,i),l&&(0,a.tZ)(h.Z,d),c)),(0,a.tZ)("div",{className:"right-button-panel"},p,(0,a.tZ)("div",{css:w},$&&(0,a.tZ)(s.Gj,(0,n.Z)({trigger:["click"],overlay:v},Z),(0,a.tZ)(f.Z,{css:y,buttonStyle:"tertiary","aria-label":(0,r.t)("Menu actions trigger"),tooltip:null==S?void 0:S.text,placement:null==S?void 0:S.placement},(0,a.tZ)(m.Z.MoreHoriz,{iconColor:P.colors.primary.dark2,iconSize:"l"}))))))}},46977:(t,e,i)=>{i.d(e,{Z:()=>b,u:()=>n});var n,l=i(73126),a=i(18446),o=i.n(a),r=i(67294),s=i(51995),d=i(61988),c=i(79521),p=i(4715),u=i(64158),g=i(97754),h=i(11965);!function(t){t.Default="Default",t.Small="Small"}(n||(n={}));const m=s.iK.div`
  margin: ${({theme:t})=>40*t.gridUnit}px 0;
`,f=s.iK.div`
  ${({scrollTable:t,theme:e})=>t&&`\n    flex: 1 1 auto;\n    margin-bottom: ${4*e.gridUnit}px;\n    overflow: auto;\n  `}

  .table-row {
    ${({theme:t,small:e})=>!e&&`height: ${11*t.gridUnit-1}px;`}

    .table-cell {
      ${({theme:t,small:e})=>e&&`\n        padding-top: ${t.gridUnit+1}px;\n        padding-bottom: ${t.gridUnit+1}px;\n        line-height: 1.45;\n      `}
    }
  }

  th[role='columnheader'] {
    z-index: 1;
    border-bottom: ${({theme:t})=>`${t.gridUnit-2}px solid ${t.colors.grayscale.light2}`};
    ${({small:t})=>t&&"padding-bottom: 0;"}
  }
`,y=s.iK.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme:t})=>t.colors.grayscale.light5};

  ${({isPaginationSticky:t})=>t&&"\n        position: sticky;\n        bottom: 0;\n        left: 0;\n    "};

  .row-count-container {
    margin-top: ${({theme:t})=>2*t.gridUnit}px;
    color: ${({theme:t})=>t.colors.grayscale.base};
  }
`,x=({columns:t,data:e,pageSize:i,totalCount:a=e.length,initialPageIndex:s,initialSortBy:x=[],loading:b=!1,withPagination:w=!0,emptyWrapperType:v=n.Default,noDataText:Z,showRowCount:$=!0,serverPagination:S=!1,columnsForWrapText:P,onServerPagination:k=(()=>{}),scrollTopOnPagination:T=!1,...E})=>{const C={pageSize:null!=i?i:10,pageIndex:null!=s?s:0,sortBy:x},{getTableProps:B,getTableBodyProps:I,headerGroups:U,page:z,rows:M,prepareRow:N,pageCount:R,gotoPage:D,state:{pageIndex:O,pageSize:F,sortBy:W}}=(0,c.useTable)({columns:t,data:e,initialState:C,manualPagination:S,manualSortBy:S,pageCount:Math.ceil(a/C.pageSize)},c.useFilters,c.useSortBy,c.usePagination),L=w?z:M;let K;switch(v){case n.Small:K=({children:t})=>(0,h.tZ)(r.Fragment,null,t);break;case n.Default:default:K=({children:t})=>(0,h.tZ)(m,null,t)}const A=!b&&0===L.length,G=R>1&&w,j=(0,r.useRef)(null);return(0,r.useEffect)((()=>{S&&O!==C.pageIndex&&k({pageIndex:O})}),[O]),(0,r.useEffect)((()=>{S&&!o()(W,C.sortBy)&&k({pageIndex:0,sortBy:W})}),[W]),(0,h.tZ)(r.Fragment,null,(0,h.tZ)(f,(0,l.Z)({},E,{ref:j}),(0,h.tZ)(g.Z,{getTableProps:B,getTableBodyProps:I,prepareRow:N,headerGroups:U,rows:L,columns:t,loading:b,columnsForWrapText:P}),A&&(0,h.tZ)(K,null,Z?(0,h.tZ)(p.HY,{image:p.HY.PRESENTED_IMAGE_SIMPLE,description:Z}):(0,h.tZ)(p.HY,{image:p.HY.PRESENTED_IMAGE_SIMPLE}))),G&&(0,h.tZ)(y,{className:"pagination-container",isPaginationSticky:E.isPaginationSticky},(0,h.tZ)(u.Z,{totalPages:R||0,currentPage:R?O+1:0,onChange:t=>(t=>{var e;T&&(null==j||null==(e=j.current)||e.scroll(0,0)),D(t)})(t-1),hideFirstAndLastPageLinks:!0}),$&&(0,h.tZ)("div",{className:"row-count-container"},!b&&(0,d.t)("%s-%s of %s",F*O+(z.length&&1),F*O+z.length,a))))},b=r.memo(x)},76962:(t,e,i)=>{i.d(e,{Z:()=>n.Z,u:()=>n.u});var n=i(46977)}}]);
//# sourceMappingURL=46bf6240b72767630d3a.chunk.js.map