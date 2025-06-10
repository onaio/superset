"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[6284],{99299:(e,t,a)=>{a.d(t,{Z:()=>o}),a(67294);var r=a(19181),s=a(11965);const o=e=>(0,s.tZ)(r.Z,e)},33726:(e,t,a)=>{a.d(t,{Y:()=>s});var r=a(61988);const s={name:(0,r.t)("SQL"),tabs:[{name:"Saved queries",label:(0,r.t)("Saved queries"),url:"/savedqueryview/list/",usesRouter:!0},{name:"Query history",label:(0,r.t)("Query history"),url:"/sqllab/history/",usesRouter:!0}]}},6189:(e,t,a)=>{a.d(t,{Z:()=>b});var r=a(73126),s=(a(67294),a(51995)),o=a(61988),i=a(33743),l=a(49889),n=a(53459),c=a(22489),u=a(120),d=a(42110),g=a(13322),h=a(10222),p=a(11965);d.Z.registerLanguage("sql",i.Z),d.Z.registerLanguage("markdown",n.Z),d.Z.registerLanguage("html",l.Z),d.Z.registerLanguage("json",c.Z);const m=s.iK.div`
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
`;function b({addDangerToast:e,addSuccessToast:t,children:a,...s}){return(0,p.tZ)(m,null,(0,p.tZ)(g.Z.Copy,{tabIndex:0,role:"button",onClick:r=>{var s;r.preventDefault(),r.currentTarget.blur(),s=a,(0,h.Z)((()=>Promise.resolve(s))).then((()=>{t&&t((0,o.t)("SQL Copied!"))})).catch((()=>{e&&e((0,o.t)("Sorry, your browser does not support copying."))}))}}),(0,p.tZ)(d.Z,(0,r.Z)({style:u.Z},s),a))}},86185:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294);function s({queries:e,fetchData:t,currentQueryId:a}){const s=e.findIndex((e=>e.id===a)),[o,i]=(0,r.useState)(s),[l,n]=(0,r.useState)(!1),[c,u]=(0,r.useState)(!1);function d(){n(0===o),u(o===e.length-1)}function g(a){const r=o+(a?-1:1);r>=0&&r<e.length&&(t(e[r].id),i(r),d())}return(0,r.useEffect)((()=>{d()})),{handleKeyPress:function(t){o>=0&&o<e.length&&("ArrowDown"===t.key||"k"===t.key?(t.preventDefault(),g(!1)):"ArrowUp"!==t.key&&"j"!==t.key||(t.preventDefault(),g(!0)))},handleDataChange:g,disablePrevious:l,disableNext:c}}},36444:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var r=a(67294),s=a(16550),o=a(73727),i=a(51995),l=a(61988),n=a(31069),c=a(43716),u=a(30381),d=a.n(u),g=a(40768),h=a(14114),p=a(34858),m=a(37921),b=a(86074),y=a(99299),Z=a(33726),v=a(93139),f=a(58593),x=a(42110),S=a(33743),q=a(120),w=a(27600),k=a(12),T=a(13322),C=a(74069),$=a(94184),D=a.n($),z=a(35932),H=a(6189),L=a(86185),U=a(11965);const K=i.iK.div`
  color: ${({theme:e})=>e.colors.secondary.light2};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  margin-bottom: 0;
  text-transform: uppercase;
`,Q=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
  font-size: ${({theme:e})=>e.typography.sizes.m}px;
  padding: 4px 0 24px 0;
`,J=i.iK.div`
  margin: 0 0 ${({theme:e})=>6*e.gridUnit}px 0;
`,F=i.iK.div`
  display: inline;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  padding: ${({theme:e})=>2*e.gridUnit}px
    ${({theme:e})=>4*e.gridUnit}px;
  margin-right: ${({theme:e})=>4*e.gridUnit}px;
  color: ${({theme:e})=>e.colors.secondary.dark1};

  &.active,
  &:focus,
  &:hover {
    background: ${({theme:e})=>e.colors.secondary.light4};
    border-bottom: none;
    border-radius: ${({theme:e})=>e.borderRadius}px;
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  &:hover:not(.active) {
    background: ${({theme:e})=>e.colors.secondary.light5};
  }
`,I=(0,i.iK)(C.default)`
  .ant-modal-body {
    padding: ${({theme:e})=>6*e.gridUnit}px;
  }

  pre {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
    font-weight: ${({theme:e})=>e.typography.weights.normal};
    line-height: ${({theme:e})=>e.typography.sizes.l}px;
    height: 375px;
    border: none;
  }
`,R=(0,h.ZP)((function({onHide:e,openInSqlLab:t,queries:a,query:s,fetchData:o,show:i,addDangerToast:n,addSuccessToast:c}){const{handleKeyPress:u,handleDataChange:d,disablePrevious:g,disableNext:h}=(0,L.Z)({queries:a,currentQueryId:s.id,fetchData:o}),[p,m]=(0,r.useState)("user"),{id:b,sql:y,executed_sql:Z}=s;return(0,U.tZ)("div",{role:"none",onKeyUp:u},(0,U.tZ)(I,{onHide:e,show:i,title:(0,l.t)("Query preview"),footer:(0,U.tZ)(r.Fragment,null,(0,U.tZ)(z.Z,{key:"previous-query",disabled:g,onClick:()=>d(!0)},(0,l.t)("Previous")),(0,U.tZ)(z.Z,{key:"next-query",disabled:h,onClick:()=>d(!1)},(0,l.t)("Next")),(0,U.tZ)(z.Z,{key:"open-in-sql-lab",buttonStyle:"primary",onClick:()=>t(b)},(0,l.t)("Open in SQL Lab")))},(0,U.tZ)(K,null,(0,l.t)("Tab name")),(0,U.tZ)(Q,null,s.tab_name),(0,U.tZ)(J,null,(0,U.tZ)(F,{role:"button",className:D()({active:"user"===p}),onClick:()=>m("user")},(0,l.t)("User query")),(0,U.tZ)(F,{role:"button",className:D()({active:"executed"===p}),onClick:()=>m("executed")},(0,l.t)("Executed query"))),(0,U.tZ)(H.Z,{addDangerToast:n,addSuccessToast:c,language:"sql"},("user"===p?y:Z)||"")))}));var _=a(72570),A=a(83379);const N=(0,i.iK)(v.Z)`
  table .table-cell {
    vertical-align: top;
  }
`;x.Z.registerLanguage("sql",S.Z);const P=(0,i.iK)(x.Z)`
  height: ${({theme:e})=>26*e.gridUnit}px;
  overflow: hidden !important; /* needed to override inline styles */
  text-overflow: ellipsis;
  white-space: nowrap;
`,O=i.iK.div`
  .count {
    margin-left: 5px;
    color: ${({theme:e})=>e.colors.primary.base};
    text-decoration: underline;
    cursor: pointer;
  }
`,B=i.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.dark2};
`,E=(0,i.iK)(m.Z)`
  text-align: left;
  font-family: ${({theme:e})=>e.typography.families.monospace};
`,M=(0,h.ZP)((function({addDangerToast:e}){const{state:{loading:t,resourceCount:a,resourceCollection:u},fetchData:h}=(0,p.Yi)("query",(0,l.t)("Query history"),e,!1),[m,x]=(0,r.useState)(),S=(0,i.Fg)(),C=(0,s.k6)(),$=(0,r.useCallback)((t=>{n.Z.get({endpoint:`/api/v1/query/${t}`}).then((({json:e={}})=>{x({...e.result})}),(0,g.v$)((t=>e((0,l.t)("There was an issue previewing the selected query. %s",t)))))}),[e]),D={activeChild:"Query history",...Z.Y},z=[{id:k.J.StartTime,desc:!0}],H=(0,r.useMemo)((()=>[{Cell:({row:{original:{status:e}}})=>{const t={name:null,label:""};return e===c.Tb.Success?(t.name=(0,U.tZ)(T.Z.Check,{iconColor:S.colors.success.base}),t.label=(0,l.t)("Success")):e===c.Tb.Failed||e===c.Tb.Stopped?(t.name=(0,U.tZ)(T.Z.XSmall,{iconColor:e===c.Tb.Failed?S.colors.error.base:S.colors.grayscale.base}),t.label=(0,l.t)("Failed")):e===c.Tb.Running?(t.name=(0,U.tZ)(T.Z.Running,{iconColor:S.colors.primary.base}),t.label=(0,l.t)("Running")):e===c.Tb.TimedOut?(t.name=(0,U.tZ)(T.Z.Offline,{iconColor:S.colors.grayscale.light1}),t.label=(0,l.t)("Offline")):e!==c.Tb.Scheduled&&e!==c.Tb.Pending||(t.name=(0,U.tZ)(T.Z.Queued,{iconColor:S.colors.grayscale.base}),t.label=(0,l.t)("Scheduled")),(0,U.tZ)(f.u,{title:t.label,placement:"bottom"},(0,U.tZ)("span",null,t.name))},accessor:k.J.Status,size:"xs",disableSortBy:!0},{accessor:k.J.StartTime,Header:(0,l.t)("Time"),size:"xl",Cell:({row:{original:{start_time:e}}})=>{const t=d().utc(e).local().format(w.v2).split(" ");return(0,U.tZ)(r.Fragment,null,t[0]," ",(0,U.tZ)("br",null),t[1])}},{Header:(0,l.t)("Duration"),size:"xl",Cell:({row:{original:{status:e,start_time:t,end_time:a}}})=>{const r=e===c.Tb.Failed?"danger":e,s=a?d()(d().utc(a-t)).format(w.n2):"00:00:00.000";return(0,U.tZ)(E,{type:r,role:"timer"},s)}},{accessor:k.J.TabName,Header:(0,l.t)("Tab name"),size:"xl"},{accessor:k.J.DatabaseName,Header:(0,l.t)("Database"),size:"xl"},{accessor:k.J.Database,hidden:!0},{accessor:k.J.Schema,Header:(0,l.t)("Schema"),size:"xl"},{Cell:({row:{original:{sql_tables:e=[]}}})=>{const t=e.map((e=>e.table)),a=t.length>0?t.shift():"";return t.length?(0,U.tZ)(O,null,(0,U.tZ)("span",null,a),(0,U.tZ)(y.Z,{placement:"right",title:(0,l.t)("TABLES"),trigger:"click",content:(0,U.tZ)(r.Fragment,null,t.map((e=>(0,U.tZ)(B,{key:e},e))))},(0,U.tZ)("span",{className:"count"},"(+",t.length,")"))):a},accessor:k.J.SqlTables,Header:(0,l.t)("Tables"),size:"xl",disableSortBy:!0},{accessor:k.J.UserFirstName,Header:(0,l.t)("User"),size:"xl",Cell:({row:{original:{user:e}}})=>(0,A.Z)(e)},{accessor:k.J.User,hidden:!0},{accessor:k.J.Rows,Header:(0,l.t)("Rows"),size:"md"},{accessor:k.J.Sql,Header:(0,l.t)("SQL"),Cell:({row:{original:e,id:t}})=>(0,U.tZ)("div",{tabIndex:0,role:"button",onClick:()=>x(e)},(0,U.tZ)(P,{language:"sql",style:q.Z},(0,g.IB)(e.sql,4)))},{Header:(0,l.t)("Actions"),id:"actions",disableSortBy:!0,Cell:({row:{original:{id:e}}})=>(0,U.tZ)(f.u,{title:(0,l.t)("Open query in SQL Lab"),placement:"bottom"},(0,U.tZ)(o.rU,{to:`/sqllab?queryId=${e}`},(0,U.tZ)(T.Z.Full,{iconColor:S.colors.grayscale.base})))}]),[]),L=(0,r.useMemo)((()=>[{Header:(0,l.t)("Database"),key:"database",id:"database",input:"select",operator:v.p.RelationOneMany,unfilteredLabel:(0,l.t)("All"),fetchSelects:(0,g.tm)("query","database",(0,g.v$)((t=>e((0,l.t)("An error occurred while fetching database values: %s",t))))),paginate:!0},{Header:(0,l.t)("State"),key:"state",id:"status",input:"select",operator:v.p.Equals,unfilteredLabel:"All",fetchSelects:(0,g.wk)("query","status",(0,g.v$)((t=>e((0,l.t)("An error occurred while fetching schema values: %s",t))))),paginate:!0},{Header:(0,l.t)("User"),key:"user",id:"user",input:"select",operator:v.p.RelationOneMany,unfilteredLabel:"All",fetchSelects:(0,g.tm)("query","user",(0,g.v$)((t=>e((0,l.t)("An error occurred while fetching user values: %s",t))))),paginate:!0},{Header:(0,l.t)("Time range"),key:"start_time",id:"start_time",input:"datetime_range",operator:v.p.Between},{Header:(0,l.t)("Search by query text"),key:"sql",id:"sql",input:"search",operator:v.p.Contains}]),[e]);return(0,U.tZ)(r.Fragment,null,(0,U.tZ)(b.Z,D),m&&(0,U.tZ)(R,{onHide:()=>x(void 0),query:m,queries:u,fetchData:$,openInSqlLab:e=>C.push(`/sqllab?queryId=${e}`),show:!0}),(0,U.tZ)(N,{className:"query-history-list-view",columns:H,count:a,data:u,fetchData:h,filters:L,initialSort:z,loading:t,pageSize:25,highlightRowId:null==m?void 0:m.id,refreshData:()=>{},addDangerToast:e,addSuccessToast:_.ws}))}))},83379:(e,t,a)=>{function r(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=0932789468124e337a86.chunk.js.map