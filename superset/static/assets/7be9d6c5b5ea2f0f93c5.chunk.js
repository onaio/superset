"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[1006],{40730:(e,t,n)=>{n.d(t,{Z:()=>qe});var a,o=n(28216),i=n(14890),r=n(52256),s=n(97381),l=n(73126),d=n(45697),c=n.n(d),u=n(67294),p=n(61988),h=n(51995),m=n(68492),g=n(55786),v=n(93185),b=n(9531),f=n(38703),y=n(94301),Z=n(57368),x=n(3741),C=n(27600),S=n(23525),T=n(71894);!function(e){e.Explore="explore",e.Dashboard="dashboard"}(a||(a={}));var _,w=n(42190),$=n(50361),M=n.n($),F=n(18446),I=n.n(F),E=n(11865),D=n.n(E),k=n(16355),R=n(11064),N=n(88274),O=n(11965),U=n(90731),q=n(12617),L=n(83862),A=n(4715),z=n(74599),j=n(41814),P=n(69175),V=n(15856),K=n(13322),B=n(9875),H=n(14114),W=n(6412),Y=n(37731),G=n(73727),Q=n(74069),X=n(35932),J=n(57001),ee=n(40219),te=n(99232),ne=n(53579),ae=n(29487),oe=n(12515);function ie({formData:e,result:t,dataset:n,onContextMenu:a,inContextMenu:o}){const i=(0,u.useMemo)((()=>({onContextMenu:a})),[a]);return(0,O.tZ)("div",{css:O.iv`
        width: 100%;
        height: 100%;
        min-height: 0;
      `},(0,O.tZ)(N.Z,{disableErrorBoundary:!0,chartType:e.viz_type,enableNoResults:!0,datasource:n,formData:e,queriesData:t,hooks:i,inContextMenu:o,height:"100%",width:"100%"}))}!function(e){e[e.Chart=0]="Chart",e[e.Table=1]="Table"}(_||(_={}));var re=n(87183),se=n(54076);const le=(0,h.iK)(A.O5.Item)`
  ${({theme:e,isClickable:t,isHidden:n})=>O.iv`
    cursor: ${t?"pointer":"auto"};
    color: ${e.colors.grayscale.light1};
    transition: color ease-in ${e.transitionTiming}s;
    .ant-breadcrumb > span:last-child > & {
      color: ${e.colors.grayscale.dark1};
    }
    &:hover {
      color: ${t?e.colors.grayscale.dark1:"inherit"};
    }
    visibility: ${n?"hidden":"visible"};
  `}
`;var de=n(5462),ce=n(71262);const ue=h.iK.div`
  ${({theme:e})=>O.iv`
    & .pagination-container {
      bottom: ${4*-e.gridUnit}px;
    }
  `}
`,pe="adhoc_filters",he=({formData:e,closeModal:t})=>{const n=(0,o.I0)(),{addDangerToast:a}=(0,H.e1)(),i=(0,h.Fg)(),[r,l]=(0,u.useState)(""),d=(0,u.useContext)(J.DashboardPageIdContext),c=(0,u.useCallback)((()=>{n((0,s.logEvent)(x.qL,{slice_id:e.slice_id}))}),[n,e.slice_id]),m=(0,o.v9)((e=>{var t;return(0,q.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),[g,v]=e.datasource.split("__");(0,u.useEffect)((()=>{(0,ee.nv)(Number(g),v,e,0).then((e=>{l(`/explore/?form_data_key=${e}&dashboard_page_id=${d}`)})).catch((()=>{a((0,p.t)("Failed to generate chart edit URL"))}))}),[a,d,g,v,e]);const b=!r||!m;return(0,O.tZ)(u.Fragment,null,(0,O.tZ)(X.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:c,disabled:b,tooltip:b?(0,p.t)("You do not have sufficient permissions to edit the chart"):void 0},(0,O.tZ)(G.rU,{css:O.iv`
            &:hover {
              text-decoration: none;
            }
          `,to:r},(0,p.t)("Edit chart"))),(0,O.tZ)(X.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,css:O.iv`
          margin-left: ${2*i.gridUnit}px;
        `},(0,p.t)("Close")))};function me({column:e,dataset:t,drillByConfig:n,formData:a,onHideModal:i}){const l=(0,o.I0)(),d=(0,h.Fg)(),{addDangerToast:c}=(0,H.e1)(),[m,v]=(0,u.useState)(!0),[b,y]=(0,u.useState)([{...n,column:e}]);(0,u.useEffect)((()=>{l((0,s.logEvent)(x.zf,{slice_id:a.slice_id}))}),[l,a.slice_id]);const{column:Z,groupbyFieldName:C=n.groupbyFieldName}=b[b.length-1]||{},S=(0,u.useMemo)((()=>(0,g.Z)(a[C]).map((e=>{var n;return null==(n=t.columns)?void 0:n.find((t=>t.column_name===e))})).filter(Y.Z)),[t.columns,a,C]),{displayModeToggle:T,drillByDisplayMode:w}=(()=>{const[e,t]=(0,u.useState)(_.Chart);return{displayModeToggle:(0,u.useMemo)((()=>(0,O.tZ)("div",{css:e=>O.iv`
          margin-bottom: ${6*e.gridUnit}px;
          .ant-radio-button-wrapper-checked:not(
              .ant-radio-button-wrapper-disabled
            ):focus-within {
            box-shadow: none;
          }
        `},(0,O.tZ)(re.Y.Group,{onChange:({target:{value:e}})=>{t(e)},defaultValue:_.Chart},(0,O.tZ)(re.Y.Button,{value:_.Chart},(0,p.t)("Chart")),(0,O.tZ)(re.Y.Button,{value:_.Table},(0,p.t)("Table"))))),[]),drillByDisplayMode:e}})(),[$,M]=(0,u.useState)(),F=((e,t)=>(0,Y.Z)(e)?1===e.length?(0,O.tZ)(ue,null,(0,O.tZ)(de.T,{colnames:e[0].colnames,coltypes:e[0].coltypes,rowcount:e[0].sql_rowcount,data:e[0].data,dataSize:15,datasourceId:t,isVisible:!0})):(0,O.tZ)(ce.ZP,{fullWidth:!1},e.map(((e,n)=>(0,O.tZ)(ce.ZP.TabPane,{tab:(0,p.t)("Results %s",n+1),key:n},(0,O.tZ)(ue,null,(0,O.tZ)(de.T,{colnames:e.colnames,coltypes:e.coltypes,data:e.data,rowcount:e.sql_rowcount,dataSize:15,datasourceId:t,isVisible:!0})))))):(0,O.tZ)("div",null))($,a.datasource),[I,E]=(0,u.useState)(a),[D,k]=(0,u.useState)([...S,e].filter(Y.Z)),[R,N]=(0,u.useState)([{groupby:S,filters:n.filters},{groupby:e||[]}]),U=(0,u.useCallback)(((e,t=C)=>Array.isArray(a[t])?[e.column_name]:e.column_name),[a,C]),q=(0,u.useCallback)((e=>e.reduce(((e,t)=>{null!=t&&t.groupbyFieldName&&t.column&&(e.formData[t.groupbyFieldName]=U(t.column,t.groupbyFieldName),e.overridenGroupbyFields.add(t.groupbyFieldName));const n=(null==t?void 0:t.adhocFilterFieldName)||pe;return e.formData[n]=[...(0,g.Z)(e[n]),...(0,g.Z)(t.filters).map((e=>(0,te.f)(e)))],e.overridenAdhocFilterFields.add(n),e}),{formData:{},overridenGroupbyFields:new Set,overridenAdhocFilterFields:new Set})),[U]),L=(0,u.useCallback)((()=>b.reduce(((e,t)=>{const n=t.adhocFilterFieldName||pe;return e[n]=[...e[n]||[],...t.filters.map((e=>(0,te.f)(e)))],e}),{})),[b]),z=((e,t=se.EI)=>(0,u.useMemo)((()=>{const n=t=>t<e.length-1;return(0,O.tZ)(A.O5,{css:e=>O.iv`
          margin: ${2*e.gridUnit}px 0 ${4*e.gridUnit}px;
        `},e.map(((e,a)=>{return(0,O.tZ)(le,{key:a,isClickable:n(a),isHidden:(o=e,0===(0,g.Z)(o.groupby).length&&0===(0,g.Z)(o.filters).length),onClick:n(a)?()=>t(e,a):se.EI},(e=>`${(0,g.Z)(e.groupby).map((e=>e.verbose_name||e.column_name)).join(", ")} ${e.filters?`(${e.filters.map((e=>e.formattedVal||e.val)).join(", ")})`:""}`)(e));var o})).filter((e=>!1===e.props.isHidden)))}),[e,t]))(R,(0,u.useCallback)(((e,t)=>{l((0,s.logEvent)(x.TG,{slice_id:a.slice_id})),y((e=>e.slice(0,t))),N((e=>{const n=e.slice(0,t+1);return delete n[n.length-1].filters,n})),k((e=>e.slice(0,t))),E((()=>{if(0===t)return a;const{formData:e,overridenAdhocFilterFields:n}=q(b.slice(0,t)),o={...a,...e};return n.forEach((t=>({...o,[t]:[...a[t],...e[t]]}))),o}))}),[l,b,a,q])),j=(0,u.useMemo)((()=>{let e={...I};Z&&C&&(e[C]=U(Z));const t=L();return Object.keys(t).forEach((n=>{e={...e,[n]:[...(0,g.Z)(a[n]),...t[n]]}})),e.slice_id=0,delete e.slice_name,delete e.dashboards,e}),[I,Z,C,L,U,a]);(0,u.useEffect)((()=>{k((e=>!Z||e.some((e=>e.column_name===Z.column_name))?e:[...e,Z]))}),[Z]);const P=(0,u.useCallback)(((e,t)=>{l((0,s.logEvent)(x.g3,{drill_depth:b.length+1,slice_id:a.slice_id})),E(j),y((n=>[...n,{...t,column:e}])),N((n=>{const a=[...n,{groupby:e}];return a[a.length-2].filters=t.filters,a}))}),[l,b.length,j,a.slice_id]),V=(0,u.useMemo)((()=>({drillBy:{excludedColumns:D,openNewModal:!1}})),[D]),{contextMenu:K,inContextMenu:B,onContextMenu:W}=((e,t,n,a,o)=>{const i=(0,u.useRef)(null),[r,s]=(0,u.useState)(!1),l=(0,u.useCallback)(((...e)=>{s(!1),null==n||n(...e)}),[n]),d=(0,u.useCallback)((()=>{s(!1)}),[]);return{contextMenu:(0,u.useMemo)((()=>(0,O.tZ)(ye,{ref:i,id:0,formData:t,onSelection:l,onClose:d,displayedItems:a,additionalConfig:o})),[o,0,a,t,d,l]),inContextMenu:r,onContextMenu:(e,t,n)=>{var a;null==(a=i.current)||a.open(e,t,n),s(!0)}}})(0,I,P,be.DrillBy,V),G=(0,o.v9)((e=>{const t=Object.values(e.dashboardLayout.present).find((e=>{var t;return(null==(t=e.meta)?void 0:t.chartId)===a.slice_id}));return(null==t?void 0:t.meta.sliceNameOverride)||(null==t?void 0:t.meta.sliceName)}));(0,u.useEffect)((()=>{if(j){const[e]=(0,oe.hz)(j);v(!0),M(void 0),(0,r.getChartDataRequest)({formData:j}).then((({response:t,json:n})=>(0,r.handleChartDataResponse)(t,n,e))).then((e=>{M(e)})).catch((()=>{c((0,p.t)("Failed to load chart data."))})).finally((()=>{v(!1)}))}}),[c,j]);const{metadataBar:X}=(0,ne.S)({dataset:t});return(0,O.tZ)(Q.default,{css:O.iv`
        .ant-modal-footer {
          border-top: none;
        }
      `,show:!0,onHide:null!=i?i:()=>null,title:(0,p.t)("Drill by: %s",G),footer:(0,O.tZ)(he,{formData:j}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*d.gridUnit,minWidth:128*d.gridUnit,defaultSize:{width:"auto",height:"80vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,O.tZ)("div",{css:O.iv`
          display: flex;
          flex-direction: column;
          height: 100%;
        `},X,z,T,m&&(0,O.tZ)(f.Z,null),!m&&!$&&(0,O.tZ)(ae.Z,{type:"error",message:(0,p.t)("There was an error loading the chart data")}),w===_.Chart&&$&&(0,O.tZ)(ie,{dataset:t,formData:j,result:$,onContextMenu:W,inContextMenu:B}),w===_.Table&&$&&F,K))}var ge=n(46219);const ve=({drillByConfig:e,formData:t,contextMenuY:n=0,submenuIndex:a=0,onSelection:o=(()=>{}),onClick:i=(()=>{}),excludedColumns:r,openNewModal:s=!0,...d})=>{const c=(0,h.Fg)(),{addDangerToast:m}=(0,H.e1)(),[v,b]=(0,u.useState)(!0),[y,Z]=(0,u.useState)(""),[x,C]=(0,u.useState)(),[S,T]=(0,u.useState)([]),[_,w]=(0,u.useState)(!1),[$,M]=(0,u.useState)(),F=(0,u.useCallback)(((t,n)=>{i(t),o(n,e),M(n),s&&w(!0)}),[e,i,o,s]),I=(0,u.useCallback)((()=>{w(!1)}),[]);(0,u.useEffect)((()=>{Z("")}),[S.length]);const E=null==e?void 0:e.groupbyFieldName,D=(0,u.useMemo)((()=>{var e;return null==(e=(0,R.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===k.cg.DrillBy))}),[t.viz_type]),N=(e=>{const t={};return(0,g.Z)(null==e?void 0:e.columns).forEach((e=>{t[e.column_name]=e.verbose_name||e.column_name})),(0,g.Z)(null==e?void 0:e.metrics).forEach((e=>{t[e.metric_name]=e.verbose_name||e.metric_name})),t})(x);(0,u.useEffect)((()=>{if(D&&E){const n=t.datasource.split("__")[0];(0,W.e)({endpoint:`/api/v1/dataset/${n}`}).then((({json:{result:n}})=>{C(n),T((0,g.Z)(n.columns).filter((e=>e.groupby)).filter((n=>{var a,o;return!(0,g.Z)(t[null!=(a=e.groupbyFieldName)?a:""]).includes(n.column_name)&&n.column_name!==t.x_axis&&(null==(o=(0,g.Z)(r))?void 0:o.every((e=>e.column_name!==n.column_name)))})))})).catch((()=>{W.f.delete(`/api/v1/dataset/${n}`),m((0,p.t)("Failed to load dimensions for drill by"))})).finally((()=>{b(!1)}))}}),[m,r,t,null==e?void 0:e.groupbyFieldName,D,E]);const U=(0,u.useCallback)((e=>{var t;e.stopPropagation();const n=null==e||null==(t=e.target)?void 0:t.value;Z(n)}),[]),q=(0,u.useMemo)((()=>S.filter((e=>(e.verbose_name||e.column_name).toLowerCase().includes(y.toLowerCase())))),[S,y]),A=(0,u.useMemo)((()=>(0,P.th)(n,q.length||1,a,200,S.length>10?48:0)),[n,q.length,a,S.length]);let z;return D?E||(z=(0,p.t)("Drill by is not available for this data point")):z=(0,p.t)("Drill by is not yet supported for this chart type"),D&&E?(0,O.tZ)(u.Fragment,null,(0,O.tZ)(L.Menu.SubMenu,(0,l.Z)({title:(0,p.t)("Drill by"),key:"drill-by-submenu",popupClassName:"chart-context-submenu",popupOffset:[0,A]},d),(0,O.tZ)("div",null,S.length>10&&(0,O.tZ)(B.II,{prefix:(0,O.tZ)(K.Z.Search,{iconSize:"l",iconColor:c.colors.grayscale.light1}),onChange:U,placeholder:(0,p.t)("Search columns"),value:y,onClick:e=>{e.nativeEvent.stopImmediatePropagation()},allowClear:!0,css:O.iv`
                width: auto;
                max-width: 100%;
                margin: ${2*c.gridUnit}px ${3*c.gridUnit}px;
                box-shadow: none;
              `}),v?(0,O.tZ)("div",{css:O.iv`
                padding: ${3*c.gridUnit}px 0;
              `},(0,O.tZ)(f.Z,{position:"inline-centered"})):q.length?(0,O.tZ)("div",{css:O.iv`
                max-height: ${200}px;
                overflow: auto;
              `},q.map((e=>(0,O.tZ)(ge.i,(0,l.Z)({key:`drill-by-item-${e.column_name}`,tooltipText:e.verbose_name||e.column_name},d,{onClick:t=>F(t,e)}),e.verbose_name||e.column_name)))):(0,O.tZ)(L.Menu.Item,(0,l.Z)({disabled:!0,key:"no-drill-by-columns-found"},d),(0,p.t)("No columns found")))),_&&(0,O.tZ)(me,{column:$,drillByConfig:e,formData:t,onHideModal:I,dataset:{...x,verbose_map:N}})):(0,O.tZ)(L.Menu.Item,(0,l.Z)({key:"drill-by-disabled",disabled:!0},d),(0,O.tZ)("div",null,(0,p.t)("Drill by"),(0,O.tZ)(V.j,{title:z})))};var be;!function(e){e[e.CrossFilter=0]="CrossFilter",e[e.DrillToDetail=1]="DrillToDetail",e[e.DrillBy=2]="DrillBy",e[e.All=3]="All"}(be||(be={}));const fe=({id:e,formData:t,onSelection:n,onClose:a,displayedItems:i=be.All,additionalConfig:r},s)=>{var d,c;const m=(0,h.Fg)(),b=(0,o.I0)(),f=(0,o.v9)((e=>{var t;return(0,q.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),y=(0,o.v9)((e=>{var t;return(0,q.R)("can_write","ExploreFormDataRestApi",null==(t=e.user)?void 0:t.roles)})),Z=(0,o.v9)((e=>{var t;return(0,q.R)("can_samples","Datasource",null==(t=e.user)?void 0:t.roles)})),x=f&&y,C=f&&Z,S=(0,o.v9)((({dashboardInfo:e})=>e.crossFiltersEnabled)),T=e=>i===be.All||(0,g.Z)(i).includes(e),[{filters:_,clientX:w,clientY:$},M]=(0,u.useState)({clientX:0,clientY:0}),F=[],I=(0,v.cr)(v.TT.DrillToDetail)&&C&&T(be.DrillToDetail),E=(0,v.cr)(v.TT.DrillBy)&&x&&T(be.DrillBy),D=(0,v.cr)(v.TT.DashboardCrossFilters)&&T(be.CrossFilter),N=null==(d=(0,R.Z)().get(t.viz_type))||null==(c=d.behaviors)?void 0:c.includes(k.cg.InteractiveChart);let K=0;if(D&&(K+=1),I&&(K+=2),E&&(K+=1),0===K&&(K=1),D){var B;const t=!N||!S||!(null!=_&&_.crossFilter);let n=null;t?S?N?null!=_&&_.crossFilter||(n=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("You can't apply cross-filter on this data point.")))):n=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("This visualization type does not support cross-filtering."))):n=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("Cross-filtering is not enabled for this dashboard."))):n=(0,O.tZ)(u.Fragment,null,(0,O.tZ)("div",null,(0,p.t)("Cross-filter will be applied to all of the charts that use this dataset.")),(0,O.tZ)("div",null,(0,p.t)("You can also just click on the chart to apply cross-filter."))),F.push((0,O.tZ)(u.Fragment,null,(0,O.tZ)(L.Menu.Item,{key:"cross-filtering-menu-item",disabled:t,onClick:()=>{null!=_&&_.crossFilter&&b((0,z.eG)(e,_.crossFilter.dataMask))}},null!=_&&null!=(B=_.crossFilter)&&B.isCurrentValueSelected?(0,p.t)("Remove cross-filter"):(0,O.tZ)("div",null,(0,p.t)("Add cross-filter"),(0,O.tZ)(V.j,{title:n,color:t?void 0:m.colors.grayscale.base}))),K>1&&(0,O.tZ)(L.Menu.Divider,null)))}if(I&&F.push((0,O.tZ)(j.p,(0,l.Z)({chartId:e,formData:t,filters:null==_?void 0:_.drillToDetail,isContextMenu:!0,contextMenuY:$,onSelection:n,submenuIndex:D?2:1},(null==r?void 0:r.drillToDetail)||{}))),E){let e=0;D&&(e+=1),I&&(e+=2),F.push((0,O.tZ)(ve,(0,l.Z)({drillByConfig:null==_?void 0:_.drillBy,onSelection:n,formData:t,contextMenuY:$,submenuIndex:e},(null==r?void 0:r.drillBy)||{})))}const H=(0,u.useCallback)(((t,n,a)=>{var o;const i=(0,P.$t)(n,K);M({clientX:t,clientY:i,filters:a}),null==(o=document.getElementById(`hidden-span-${e}`))||o.click()}),[e,K]);return(0,u.useImperativeHandle)(s,(()=>({open:H})),[H]),U.createPortal((0,O.tZ)(A.Gj,{overlay:(0,O.tZ)(L.Menu,{className:"chart-context-menu"},F.length?F:(0,O.tZ)(L.Menu.Item,{disabled:!0},"No actions")),trigger:["click"],onVisibleChange:e=>!e&&a()},(0,O.tZ)("span",{id:`hidden-span-${e}`,css:(0,O.iv)({visibility:"hidden",position:"fixed",top:$,left:w,width:1,height:1},"","")})),document.body)},ye=(0,u.forwardRef)(fe),Ze={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,initialValues:c().object,formData:c().object.isRequired,latestQueryFormData:c().object,labelColors:c().object,sharedLabelColors:c().object,height:c().number,width:c().number,setControlValue:c().func,vizType:c().string.isRequired,triggerRender:c().bool,chartAlert:c().string,chartStatus:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,addFilter:c().func,setDataMask:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,source:c().oneOf([a.Dashboard,a.Explore]),emitCrossFilters:c().bool},xe={},Ce=[k.cg.InteractiveChart],Se={addFilter:()=>xe,onFilterMenuOpen:()=>xe,onFilterMenuClose:()=>xe,initialValues:xe,setControlValue(){},triggerRender:!1};class Te extends u.Component{constructor(e){super(e),this.state={showContextMenu:e.source===a.Dashboard&&((0,v.cr)(v.TT.DrillToDetail)||(0,v.cr)(v.TT.DashboardCrossFilters)),inContextMenu:!1,legendState:void 0},this.hasQueryResponseChange=!1,this.contextMenuRef=u.createRef(),this.handleAddFilter=this.handleAddFilter.bind(this),this.handleRenderSuccess=this.handleRenderSuccess.bind(this),this.handleRenderFailure=this.handleRenderFailure.bind(this),this.handleSetControlValue=this.handleSetControlValue.bind(this),this.handleOnContextMenu=this.handleOnContextMenu.bind(this),this.handleContextMenuSelected=this.handleContextMenuSelected.bind(this),this.handleContextMenuClosed=this.handleContextMenuClosed.bind(this),this.handleLegendStateChanged=this.handleLegendStateChanged.bind(this),this.onContextMenuFallback=this.onContextMenuFallback.bind(this),this.hooks={onAddFilter:this.handleAddFilter,onContextMenu:this.state.showContextMenu?this.handleOnContextMenu:void 0,onError:this.handleRenderFailure,setControlValue:this.handleSetControlValue,onFilterMenuOpen:this.props.onFilterMenuOpen,onFilterMenuClose:this.props.onFilterMenuClose,onLegendStateChanged:this.handleLegendStateChanged,setDataMask:e=>{var t;null==(t=this.props.actions)||t.updateDataMask(this.props.chartId,e)}},this.mutableQueriesResponse=M()(this.props.queriesResponse)}shouldComponentUpdate(e,t){var n,a;return!(!(e.queriesResponse&&["success","rendered"].indexOf(e.chartStatus)>-1)||null!=(n=e.queriesResponse)&&null!=(a=n[0])&&a.error)&&(!I()(this.state,t)||(this.hasQueryResponseChange=e.queriesResponse!==this.props.queriesResponse,this.hasQueryResponseChange&&(this.mutableQueriesResponse=M()(e.queriesResponse)),this.hasQueryResponseChange||!I()(e.datasource,this.props.datasource)||e.annotationData!==this.props.annotationData||e.ownState!==this.props.ownState||e.filterState!==this.props.filterState||e.height!==this.props.height||e.width!==this.props.width||e.triggerRender||e.labelColors!==this.props.labelColors||e.sharedLabelColors!==this.props.sharedLabelColors||e.formData.color_scheme!==this.props.formData.color_scheme||e.formData.stack!==this.props.formData.stack||e.cacheBusterProp!==this.props.cacheBusterProp||e.emitCrossFilters!==this.props.emitCrossFilters))}handleAddFilter(e,t,n=!0,a=!0){this.props.addFilter(e,t,n,a)}handleRenderSuccess(){const{actions:e,chartStatus:t,chartId:n,vizType:a}=this.props;["loading","rendered"].indexOf(t)<0&&e.chartRenderingSucceeded(n),this.hasQueryResponseChange&&e.logEvent(x.aD,{slice_id:n,viz_type:a,start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleRenderFailure(e,t){const{actions:n,chartId:a}=this.props;m.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),this.hasQueryResponseChange&&n.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}handleSetControlValue(...e){const{setControlValue:t}=this.props;t&&t(...e)}handleOnContextMenu(e,t,n){this.contextMenuRef.current.open(e,t,n),this.setState({inContextMenu:!0})}handleContextMenuSelected(){this.setState({inContextMenu:!1})}handleContextMenuClosed(){this.setState({inContextMenu:!1})}handleLegendStateChanged(e){this.setState({legendState:e})}onContextMenuFallback(e){this.state.inContextMenu||(e.preventDefault(),this.handleOnContextMenu(e.clientX,e.clientY))}render(){var e;const{chartAlert:t,chartStatus:n,chartId:o,emitCrossFilters:i}=this.props;if("loading"===n||t||null===n)return null;this.renderStartTime=x.Yd.getTimestamp();const{width:r,height:s,datasource:d,annotationData:c,initialValues:h,ownState:m,filterState:g,chartIsStale:v,formData:b,latestQueryFormData:f,postTransformProps:Z}=this.props,C=v&&f?f:b,S=C.viz_type||this.props.vizType,T=D()(S),_="table"===S?`superset-chart-${T}`:T;let w;const $=(0,p.t)("No results were returned for this query"),M=this.props.source===a.Explore?(0,p.t)("Make sure that the controls are configured properly and the datasource contains data for the selected time range"):void 0,F="chart.svg";w=r>300&&s>220?(0,O.tZ)(y.XJ,{title:$,description:M,image:F}):(0,O.tZ)(y.Tc,{title:$,image:F});const I=null!=(e=(0,R.Z)().get(b.viz_type))&&e.behaviors.find((e=>e===k.cg.DrillToDetail))?{inContextMenu:this.state.inContextMenu}:{};return(0,O.tZ)(u.Fragment,null,this.state.showContextMenu&&(0,O.tZ)(ye,{ref:this.contextMenuRef,id:o,formData:C,onSelection:this.handleContextMenuSelected,onClose:this.handleContextMenuClosed}),(0,O.tZ)("div",{onContextMenu:this.state.showContextMenu?this.onContextMenuFallback:void 0},(0,O.tZ)(N.Z,(0,l.Z)({disableErrorBoundary:!0,key:`${o}`,id:`chart-id-${o}`,className:_,chartType:S,width:r,height:s,annotationData:c,datasource:d,initialValues:h,formData:C,ownState:m,filterState:g,hooks:this.hooks,behaviors:Ce,queriesData:this.mutableQueriesResponse,onRenderSuccess:this.handleRenderSuccess,onRenderFailure:this.handleRenderFailure,noResults:w,postTransformProps:Z,emitCrossFilters:i,legendState:this.state.legendState},I))))}}Te.propTypes=Ze,Te.defaultProps=Se;const _e=Te;var we=n(67417),$e=n(72875);const Me=({chartId:e,error:t,...n})=>{const{result:a}=(0,we.hb)(e),o=t&&{...t,extra:{...t.extra,owners:a}};return(0,O.tZ)($e.Z,(0,l.Z)({},n,{error:o}))};var Fe=n(75701);const Ie={annotationData:c().object,actions:c().object,chartId:c().number.isRequired,datasource:c().object,dashboardId:c().number,initialValues:c().object,formData:c().object.isRequired,labelColors:c().object,sharedLabelColors:c().object,width:c().number,height:c().number,setControlValue:c().func,timeout:c().number,vizType:c().string.isRequired,triggerRender:c().bool,force:c().bool,isFiltersInitialized:c().bool,chartAlert:c().string,chartStatus:c().string,chartStackTrace:c().string,queriesResponse:c().arrayOf(c().object),triggerQuery:c().bool,chartIsStale:c().bool,errorMessage:c().node,addFilter:c().func,onQuery:c().func,onFilterMenuOpen:c().func,onFilterMenuClose:c().func,ownState:c().object,postTransformProps:c().func,datasetsStatus:c().oneOf(["loading","error","complete"]),isInView:c().bool,emitCrossFilters:c().bool},Ee={},De=(0,p.t)("The dataset associated with this chart no longer exists"),ke={addFilter:()=>Ee,onFilterMenuOpen:()=>Ee,onFilterMenuClose:()=>Ee,initialValues:Ee,setControlValue(){},triggerRender:!1,dashboardId:null,chartStackTrace:null,force:!1,isInView:!0},Re=h.iK.div`
  min-height: ${e=>e.height}px;
  position: relative;

  .chart-tooltip {
    opacity: 0.75;
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
  }

  .slice_container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: ${e=>e.height}px;

    .pivot_table tbody tr {
      font-feature-settings: 'tnum' 1;
    }

    .alert {
      margin: ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,Ne=h.iK.div`
  font-family: ${({theme:e})=>e.typography.families.monospace};
  word-break: break-word;
  overflow-x: auto;
  white-space: pre-wrap;
`;class Oe extends u.PureComponent{constructor(e){super(e),this.handleRenderContainerFailure=this.handleRenderContainerFailure.bind(this)}componentDidMount(){this.props.triggerQuery&&this.runQuery()}componentDidUpdate(){this.props.triggerQuery&&this.runQuery()}runQuery(){this.props.actions.postChartFormData(this.props.formData,Boolean(this.props.force||(0,S.eY)(C.KD.force)),this.props.timeout,this.props.chartId,this.props.dashboardId,this.props.ownState)}handleRenderContainerFailure(e,t){const{actions:n,chartId:a}=this.props;m.Z.warn(e),n.chartRenderingFailed(e.toString(),a,t?t.componentStack:null),n.logEvent(x.aD,{slice_id:a,has_err:!0,error_details:e.toString(),start_offset:this.renderStartTime,ts:(new Date).getTime(),duration:x.Yd.getTimestamp()-this.renderStartTime})}renderErrorMessage(e){var t;const{chartId:n,chartAlert:o,chartStackTrace:i,datasource:r,dashboardId:s,height:l,datasetsStatus:d}=this.props,c=null==e||null==(t=e.errors)?void 0:t[0],u=o||(null==e?void 0:e.message);return void 0!==o&&o!==De&&r===b.tw&&d!==w.ni.Error?(0,O.tZ)(Re,{key:n,"data-ui-anchor":"chart",className:"chart-container",height:l},(0,O.tZ)(f.Z,null)):(0,O.tZ)(Me,{key:n,chartId:n,error:c,subtitle:(0,O.tZ)(Ne,null,u),copyText:u,link:e?e.link:null,source:s?a.Dashboard:a.Explore,stackTrace:i})}render(){const{height:e,chartAlert:t,chartStatus:n,errorMessage:a,chartIsStale:o,queriesResponse:i=[],width:r}=this.props,s="loading"===n;return this.renderContainerStartTime=x.Yd.getTimestamp(),"failed"===n?i.map((e=>this.renderErrorMessage(e))):a&&0===(0,g.Z)(i).length?(0,O.tZ)(y.XJ,{title:(0,p.t)("Add required control values to preview chart"),description:(0,Fe.J)(!0),image:"chart.svg"}):s||t||a||!o||0!==(0,g.Z)(i).length?(0,O.tZ)(Z.Z,{onError:this.handleRenderContainerFailure,showMessage:!1},(0,O.tZ)(Re,{"data-ui-anchor":"chart",className:"chart-container",height:e,width:r},(0,O.tZ)("div",{className:"slice_container"},this.props.isInView||!(0,v.cr)(v.TT.DashboardVirtualization)||(0,T.b)()?(0,O.tZ)(_e,(0,l.Z)({},this.props,{source:this.props.dashboardId?"dashboard":"explore"})):(0,O.tZ)(f.Z,null)),s&&(0,O.tZ)(f.Z,null))):(0,O.tZ)(y.XJ,{title:(0,p.t)("Your chart is ready to go!"),description:(0,O.tZ)("span",null,(0,p.t)('Click on "Create chart" button in the control panel on the left to preview a visualization or')," ",(0,O.tZ)("span",{role:"button",tabIndex:0,onClick:this.props.onQuery},(0,p.t)("click here")),"."),image:"chart.svg"})}}Oe.propTypes=Ie,Oe.defaultProps=ke;const Ue=Oe,qe=(0,o.$j)(null,(function(e){return{actions:(0,i.DE)({...r,updateDataMask:z.eG,logEvent:s.logEvent},e)}}))(Ue)},28543:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(69856),o=n(56565),i=n(61641);const r=[...a.qB].map((e=>a.LT[e].operation));class s{constructor(e){var t;this.expressionType=e.expressionType||i.p.Simple,this.expressionType===i.p.Simple?(this.subject=e.subject,this.operator=null==(t=e.operator)?void 0:t.toUpperCase(),this.operatorId=e.operatorId,this.comparator=e.comparator,[a.d.IsTrue,a.d.IsFalse].indexOf(e.operatorId)>=0&&(this.comparator=e.operatorId===a.d.IsTrue),[a.d.IsNull,a.d.IsNotNull].indexOf(e.operatorId)>=0&&(this.comparator=null),this.clause=e.clause||i.N.Where,this.sqlExpression=null):this.expressionType===i.p.Sql&&(this.sqlExpression="string"==typeof e.sqlExpression?e.sqlExpression:(0,o.c)(e,{useSimple:!0}),this.clause=e.clause,e.operator&&r.indexOf(e.operator)>=0?(this.subject=e.subject,this.operator=e.operator,this.operatorId=e.operatorId):(this.subject=null,this.operator=null),this.comparator=null),this.isExtra=!!e.isExtra,this.isNew=!!e.isNew,this.datasourceWarning=!!e.datasourceWarning,this.filterOptionName=e.filterOptionName||`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}duplicateWith(e){return new s({...this,isNew:!1,...e})}equals(e){return e.clause===this.clause&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.operator===this.operator&&e.operatorId===this.operatorId&&e.comparator===this.comparator&&e.subject===this.subject}isValid(){const e=[a.d.IsNotNull,a.d.IsNull].map((e=>a.LT[e].operation)),t=[a.d.IsTrue,a.d.IsFalse].map((e=>a.LT[e].operation));if(this.expressionType===i.p.Simple){if(e.indexOf(this.operator)>=0)return!(!this.operator||!this.subject);if(t.indexOf(this.operator)>=0)return!(!this.subject||null===this.comparator);if(this.operator&&this.subject&&this.clause)if(Array.isArray(this.comparator)){if(this.comparator.length>0)return!0}else if(null!==this.comparator)return!0}else if(this.expressionType===i.p.Sql)return!(!this.sqlExpression||!this.clause);return!1}getDefaultLabel(){const e=this.translateToSql();return e.length<43?e:`${e.substring(0,40)}...`}getTooltipTitle(){return this.translateToSql()}translateToSql(){return(0,o.c)(this)}}},61890:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(67294),o=n(45697),i=n.n(o),r=n(31069),s=n(68492),l=n(61988),d=n(55786),c=n(68135),u=n(82342),p=n(17536),h=n(27130),m=n(19113),g=n(69856),v=n(40266),b=n(33334),f=n(13322),y=n(74069),Z=n(96055),x=n(42753),C=n(7848),S=n(11965);function T({adhocFilter:e,options:t,datasource:n,onFilterEdit:a,onRemoveFilter:o,partitionColumn:i,onMoveLabel:r,onDropLabel:s,index:l,sections:d,operators:c}){const{actualTimeRange:u,title:p}=(0,C.w)(e);return(0,S.tZ)(Z.Z,{sections:d,operators:c,adhocFilter:e,options:t,datasource:n,onFilterEdit:a,partitionColumn:i},(0,S.tZ)(b.yz,{label:null!=u?u:e.getDefaultLabel(),tooltipTitle:null!=p?p:e.getTooltipTitle(),onRemove:o,onMoveLabel:r,onDropLabel:s,index:l,type:x.g.FilterOption,withCaret:!0,isExtra:e.isExtra}))}var _=n(28543),w=n(61641);const $=i().oneOfType([i().shape({expressionType:i().oneOf([w.p.Simple]).isRequired,clause:i().oneOf([w.N.Having,w.N.Where]).isRequired,subject:i().string.isRequired,comparator:i().oneOfType([i().string,i().arrayOf(i().string)]).isRequired}),i().shape({expressionType:i().oneOf([w.p.Sql]).isRequired,clause:i().oneOf([w.N.Where,w.N.Having]).isRequired,sqlExpression:i().string.isRequired})]);var M=n(72201);const{warning:F}=y.default,I=i().oneOfType([i().string,p.Z]),E={label:i().oneOfType([i().object,i().string]),name:i().string,sections:i().arrayOf(i().string),operators:i().arrayOf(i().string),onChange:i().func,value:i().arrayOf($),datasource:i().object,columns:i().arrayOf(M.Z),savedMetrics:i().arrayOf(h.Z),selectedMetrics:i().oneOfType([I,i().arrayOf(I)]),isLoading:i().bool,canDelete:i().func};function D(e){return e&&!(e instanceof _.Z)&&e.expressionType}class k extends a.Component{constructor(e){super(e),this.optionsForSelect=this.optionsForSelect.bind(this),this.onRemoveFilter=this.onRemoveFilter.bind(this),this.onNewFilter=this.onNewFilter.bind(this),this.onFilterEdit=this.onFilterEdit.bind(this),this.moveLabel=this.moveLabel.bind(this),this.onChange=this.onChange.bind(this),this.mapOption=this.mapOption.bind(this),this.getMetricExpression=this.getMetricExpression.bind(this),this.removeFilter=this.removeFilter.bind(this);const t=(this.props.value||[]).map((e=>D(e)?new _.Z(e):e));this.optionRenderer=e=>(0,S.tZ)(v.Z,{option:e}),this.valueRenderer=(e,t)=>(0,S.tZ)(T,{key:t,index:t,adhocFilter:e,onFilterEdit:this.onFilterEdit,options:this.state.options,sections:this.props.sections,operators:this.props.operators,datasource:this.props.datasource,onRemoveFilter:e=>{e.stopPropagation(),this.onRemoveFilter(t)},onMoveLabel:this.moveLabel,onDropLabel:()=>this.props.onChange(this.state.values),partitionColumn:this.state.partitionColumn}),this.state={values:t,options:this.optionsForSelect(this.props),partitionColumn:null}}componentDidMount(){const{datasource:e}=this.props;if(e&&"table"===e.type){var t;const n=null==(t=e.database)?void 0:t.id,{datasource_name:a,schema:o,is_sqllab_view:i}=e;!i&&n&&a&&o&&r.Z.get({endpoint:`/api/v1/database/${n}/table_extra/${a}/${o}/`}).then((({json:e})=>{if(e&&e.partitions){const{partitions:t}=e;t&&t.cols&&1===Object.keys(t.cols).length&&this.setState({partitionColumn:t.cols[0]})}})).catch((e=>{s.Z.error("fetch extra_table_metadata:",e.statusText)}))}}UNSAFE_componentWillReceiveProps(e){this.props.columns!==e.columns&&this.setState({options:this.optionsForSelect(e)}),this.props.value!==e.value&&this.setState({values:(e.value||[]).map((e=>D(e)?new _.Z(e):e))})}removeFilter(e){const t=[...this.state.values];t.splice(e,1),this.setState((e=>({...e,values:t}))),this.props.onChange(t)}onRemoveFilter(e){const{canDelete:t}=this.props,{values:n}=this.state,a=null==t?void 0:t(n[e],n);"string"!=typeof a?this.removeFilter(e):F({title:(0,l.t)("Warning"),content:a})}onNewFilter(e){const t=this.mapOption(e);t&&this.setState((e=>({...e,values:[...e.values,t]})),(()=>{this.props.onChange(this.state.values)}))}onFilterEdit(e){this.props.onChange(this.state.values.map((t=>t.filterOptionName===e.filterOptionName?e:t)))}onChange(e){const t=(e||[]).map((e=>this.mapOption(e))).filter((e=>e));this.props.onChange(t)}getMetricExpression(e){return this.props.savedMetrics.find((t=>t.metric_name===e)).expression}moveLabel(e,t){const{values:n}=this.state,a=[...n];[a[t],a[e]]=[a[e],a[t]],this.setState({values:a})}mapOption(e){return e instanceof _.Z?e:e.saved_metric_name?new _.Z({expressionType:w.p.Sql,subject:this.getMetricExpression(e.saved_metric_name),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:w.N.Having}):e.label?new _.Z({expressionType:w.p.Sql,subject:new m.Z(e).translateToSql(),operator:g.LT[g.d.GreaterThan].operation,comparator:0,clause:w.N.Having}):e.column_name?new _.Z({expressionType:w.p.Simple,subject:e.column_name,operator:g.LT[g.d.Equals].operation,comparator:"",clause:w.N.Where,isNew:!0}):null}optionsForSelect(e){return[...e.columns,...(0,d.Z)(e.selectedMetrics).map((e=>e&&("string"==typeof e?{saved_metric_name:e}:new m.Z(e))))].filter((e=>e)).reduce(((e,t)=>(t.saved_metric_name?e.push({...t,filterOptionName:t.saved_metric_name}):t.column_name?e.push({...t,filterOptionName:`_col_${t.column_name}`}):t instanceof m.Z&&e.push({...t,filterOptionName:`_adhocmetric_${t.label}`}),e)),[]).sort(((e,t)=>(e.saved_metric_name||e.column_name||e.label).localeCompare(t.saved_metric_name||t.column_name||t.label)))}addNewFilterPopoverTrigger(e){return(0,S.tZ)(Z.Z,{operators:this.props.operators,sections:this.props.sections,adhocFilter:new _.Z({}),datasource:this.props.datasource,options:this.state.options,onFilterEdit:this.onNewFilter,partitionColumn:this.state.partitionColumn},e)}render(){const{theme:e}=this.props;return(0,S.tZ)("div",{className:"metrics-select"},(0,S.tZ)(b.gM,null,(0,S.tZ)(u.Z,this.props),this.addNewFilterPopoverTrigger((0,S.tZ)(b.IG,null,(0,S.tZ)(f.Z.PlusLarge,{iconSize:"s",iconColor:e.colors.grayscale.light5})))),(0,S.tZ)(b.yj,null,this.state.values.length>0?this.state.values.map(((e,t)=>this.valueRenderer(e,t))):this.addNewFilterPopoverTrigger((0,S.tZ)(b.SW,null,(0,S.tZ)(f.Z.PlusSmall,{iconColor:e.colors.grayscale.light1}),(0,l.t)("Add filter")))))}}k.propTypes=E,k.defaultProps={name:"",onChange:()=>{},columns:[],savedMetrics:[],selectedMetrics:[]};const R=(0,c.b)(k)},72201:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(45697),o=n.n(a);const i=o().shape({column_name:o().string.isRequired,type:o().string})},19113:(e,t,n)=>{n.d(t,{Z:()=>s,v:()=>o});var a=n(69856);const o={SIMPLE:"SIMPLE",SQL:"SQL"};function i(e){if(e.sqlExpression&&a.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf(")"),n=e.sqlExpression.substring(0,t).lastIndexOf("(");if(t>0&&n>0)return e.sqlExpression.substring(n+1,t)}return null}function r(e){if(e.sqlExpression&&a.Q_.test(e.sqlExpression)){const t=e.sqlExpression.indexOf("(");if(t>0)return e.sqlExpression.substring(0,t)}return null}class s{constructor(e){if(this.expressionType=e.expressionType||o.SIMPLE,this.expressionType===o.SIMPLE){const t=i(e);this.column=e.column||t&&{column_name:t},this.aggregate=e.aggregate||r(e),this.sqlExpression=null}else this.expressionType===o.SQL&&(this.sqlExpression=e.sqlExpression,this.column=null,this.aggregate=null);this.datasourceWarning=!!e.datasourceWarning,this.hasCustomLabel=!(!e.hasCustomLabel||!e.label),this.label=this.hasCustomLabel?e.label:this.getDefaultLabel(),this.optionName=e.optionName||`metric_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}getDefaultLabel(){return this.translateToSql({useVerboseName:!0})}translateToSql(e={useVerboseName:!1,transformCountDistinct:!1}){if(this.expressionType===o.SIMPLE){var t,n;const o=this.aggregate||"",i=e.useVerboseName&&null!=(t=this.column)&&t.verbose_name?`(${this.column.verbose_name})`:null!=(n=this.column)&&n.column_name?`(${this.column.column_name})`:"";return e.transformCountDistinct&&o===a.YY.COUNT_DISTINCT&&/^\(.*\)$/.test(i)?`COUNT(DISTINCT ${i.slice(1,-1)})`:o+i}return this.expressionType===o.SQL?this.sqlExpression:""}duplicateWith(e){return new s({...this,...e})}equals(e){return e.label===this.label&&e.expressionType===this.expressionType&&e.sqlExpression===this.sqlExpression&&e.aggregate===this.aggregate&&(e.column&&e.column.column_name)===(this.column&&this.column.column_name)}isValid(){return this.expressionType===o.SIMPLE?!(!this.column||!this.aggregate):this.expressionType===o.SQL&&!!this.sqlExpression}inferSqlExpressionAggregate(){return r(this)}inferSqlExpressionColumn(){return i(this)}}},40266:(e,t,n)=>{n.d(t,{Z:()=>c}),n(67294);var a=n(45697),o=n.n(a),i=n(34087),r=n(17536),s=n(99963),l=n(11965);const d={option:o().oneOfType([i.Z,o().shape({saved_metric_name:o().string.isRequired}),r.Z]).isRequired};function c({option:e}){return e.saved_metric_name?(0,l.tZ)(s.l,{column:{column_name:e.saved_metric_name,type:"expression"},showType:!0}):e.column_name?(0,l.tZ)(s.l,{column:e,showType:!0}):e.label?(0,l.tZ)(s.l,{column:{column_name:e.label,type:"expression"},showType:!0}):null}c.propTypes=d},17536:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(45697),o=n.n(a),i=n(69856),r=n(34087),s=n(19113);const l=o().oneOfType([o().shape({expressionType:o().oneOf([s.v.SIMPLE]).isRequired,column:r.Z.isRequired,aggregate:o().oneOf(Object.keys(i.YY)).isRequired,label:o().string.isRequired}),o().shape({expressionType:o().oneOf([s.v.SQL]).isRequired,sqlExpression:o().string.isRequired,label:o().string.isRequired})])},34087:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(45697),o=n.n(a);const i=o().shape({column_name:o().string.isRequired,type:o().string})},27130:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(45697),o=n.n(a);const i=o().shape({metric_name:o().string,verbose_name:o().string,expression:o().string})},96022:(e,t,n)=>{n.d(t,{ZN:()=>P,gT:()=>K});var a=n(73126),o=n(67294),i=n(28216),r=n(51995),s=n(11965),l=n(61988),d=n(93185),c=n(13322),u=n(83862),p=n(1304),h=n(35932),m=n(14114),g=n(12515),v=n(56727),b=n(23525),f=n(10222),y=n(21312),Z=n(97381),x=n(3741),C=n(15423),S=n(9875),T=n(13433),_=n(27600),w=n(50909);const $=(0,r.iK)(w.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`,M=({formData:e,addDangerToast:t})=>{const[n,a]=(0,o.useState)("400"),[i,r]=(0,o.useState)("600"),[d,c]=(0,o.useState)(""),[u,p]=(0,o.useState)(""),h=(0,o.useCallback)((e=>{const{value:t,name:n}=e.currentTarget;"width"===n&&r(t),"height"===n&&a(t)}),[]),m=(0,o.useCallback)((()=>{c(""),(0,b.YE)(e).then((e=>{c(e),p("")})).catch((()=>{p((0,l.t)("Error")),t((0,l.t)("Sorry, something went wrong. Try again later."))}))}),[t,e]);(0,o.useEffect)((()=>{m()}),[]);const g=(0,o.useMemo)((()=>{if(!d)return"";const e=`${d}?${_.KD.standalone.name}=1&height=${n}`;return`<iframe\n  width="${i}"\n  height="${n}"\n  seamless\n  frameBorder="0"\n  scrolling="no"\n  src="${e}"\n>\n</iframe>`}),[n,d,i]),v=u||g||(0,l.t)("Generating link, please wait..");return(0,s.tZ)("div",{id:"embed-code-popover"},(0,s.tZ)("div",{css:s.iv`
          display: flex;
          flex-direction: column;
        `},(0,s.tZ)(T.Z,{shouldShowText:!1,text:g,copyNode:(0,s.tZ)($,{buttonSize:"xsmall"},(0,s.tZ)("i",{className:"fa fa-clipboard"}))}),(0,s.tZ)(S.Kx,{name:"embedCode",disabled:!g,value:v,rows:"4",readOnly:!0,css:e=>s.iv`
            resize: vertical;
            padding: ${2*e.gridUnit}px;
            font-size: ${e.typography.sizes.s}px;
            border-radius: 4px;
            background-color: ${e.colors.secondary.light5};
          `})),(0,s.tZ)("div",{css:e=>s.iv`
          display: flex;
          margin-top: ${4*e.gridUnit}px;
          & > div {
            margin-right: ${2*e.gridUnit}px;
          }
          & > div:last-of-type {
            margin-right: 0;
            margin-left: ${2*e.gridUnit}px;
          }
        `},(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-height"},(0,l.t)("Chart height")),(0,s.tZ)(S.II,{type:"text",defaultValue:n,name:"height",onChange:h})),(0,s.tZ)("div",null,(0,s.tZ)("label",{htmlFor:"embed-width"},(0,l.t)("Chart width")),(0,s.tZ)(S.II,{type:"text",defaultValue:i,name:"width",onChange:h,id:"embed-width"}))))};var F=n(73727);const I=({chartId:e,dashboards:t=[],...n})=>{const i=(0,r.Fg)(),[d,p]=(0,o.useState)(),[h,m]=(0,o.useState)(),g=t.length>10,v=t.filter((e=>!d||e.dashboard_title.toLowerCase().includes(d.toLowerCase()))),b=0===t.length,f=d&&0===v.length,y=e?`?focused_chart=${e}`:"";return(0,s.tZ)(o.Fragment,null,g&&(0,s.tZ)(S.II,{allowClear:!0,placeholder:(0,l.t)("Search"),prefix:(0,s.tZ)(c.Z.Search,{iconSize:"l"}),css:s.iv`
            width: ${220}px;
            margin: ${2*i.gridUnit}px ${3*i.gridUnit}px;
          `,value:d,onChange:e=>p(e.currentTarget.value)}),(0,s.tZ)("div",{css:s.iv`
          max-height: ${300}px;
          overflow: auto;
        `},v.map((e=>(0,s.tZ)(u.Menu.Item,(0,a.Z)({key:String(e.id),onMouseEnter:()=>m(e.id),onMouseLeave:()=>{h===e.id&&m(null)}},n),(0,s.tZ)(F.rU,{target:"_blank",rel:"noreferer noopener",to:`/superset/dashboard/${e.id}${y}`},(0,s.tZ)("div",{css:s.iv`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  max-width: ${220}px;
                `},(0,s.tZ)("div",{css:s.iv`
                    white-space: normal;
                  `},e.dashboard_title),(0,s.tZ)(c.Z.Full,{iconSize:"l",iconColor:i.colors.grayscale.base,css:s.iv`
                    margin-left: ${2*i.gridUnit}px;
                    visibility: ${h===e.id?"visible":"hidden"};
                  `})))))),f&&(0,s.tZ)("div",{css:s.iv`
              margin-left: ${3*i.gridUnit}px;
              margin-bottom: ${i.gridUnit}px;
            `},(0,l.t)("No results found")),b&&(0,s.tZ)(u.Menu.Item,(0,a.Z)({disabled:!0,css:s.iv`
              min-width: ${220}px;
            `},n),(0,l.t)("None"))))},E="edit_properties",D="export_to_csv",k="export_to_csv_pivoted",R="export_to_json",N="export_to_xlsx",O="download_as_image",U="copy_permalink",q="embed_code",L="share_by_email",A="view_query",z="run_in_sql_lab",j=["pivot_table_v2"],P=r.iK.div`
  ${({theme:e})=>s.iv`
    display: flex;
    align-items: center;

    & svg {
      width: ${3*e.gridUnit}px;
      height: ${3*e.gridUnit}px;
    }

    & span[role='checkbox'] {
      display: inline-flex;
      margin-right: ${e.gridUnit}px;
    }
  `}
`,V=((0,r.iK)(h.Z)`
  ${({theme:e})=>s.iv`
    width: ${8*e.gridUnit}px;
    height: ${8*e.gridUnit}px;
    padding: 0;
    border: 1px solid ${e.colors.primary.dark2};

    &.ant-btn > span.anticon {
      line-height: 0;
      transition: inherit;
    }

    &:hover:not(:focus) > span.anticon {
      color: ${e.colors.primary.light1};
    }
  `}
`,s.iv`
  .ant-dropdown-menu-item > & > .anticon:first-child {
    margin-right: 0;
    vertical-align: 0;
  }
`),K=(e,t,n,h,S,T,_,...w)=>{const $=(0,r.Fg)(),{addDangerToast:F,addSuccessToast:P}=(0,m.e1)(),K=(0,i.I0)(),[B,H]=(0,o.useState)(null),[W,Y]=(0,o.useState)(!1),G=(0,i.v9)((e=>{var t;return null==(t=e.charts)?void 0:t[(0,g.Jp)(e.explore)]})),{datasource:Q}=e,X=(0,o.useCallback)((async()=>{try{const t=(0,l.t)("Superset Chart"),n=await(0,b.YE)(e),a=encodeURIComponent((0,l.t)("%s%s","Check out this chart: ",n));window.location.href=`mailto:?Subject=${t}%20&Body=${a}`}catch(e){F((0,l.t)("Sorry, something went wrong. Try again later."))}}),[F,e]),J=(0,o.useCallback)((()=>t?(0,g.pe)({formData:e,ownState:T,resultType:"full",resultFormat:"csv"}):null),[t,e]),ee=(0,o.useCallback)((()=>t?(0,g.pe)({formData:e,resultType:"post_processed",resultFormat:"csv"}):null),[t,e]),te=(0,o.useCallback)((()=>(0,g.pe)({formData:e,resultType:"results",resultFormat:"json"})),[e]),ne=(0,o.useCallback)((()=>(0,g.pe)({formData:e,resultType:"results",resultFormat:"xlsx"})),[e]),ae=(0,o.useCallback)((async()=>{try{if(!e)throw new Error;await(0,f.Z)((()=>(0,b.YE)(e))),P((0,l.t)("Copied to clipboard!"))}catch(e){F((0,l.t)("Sorry, something went wrong. Try again later."))}}),[F,P,e]),oe=(0,o.useCallback)((({key:t,domEvent:a})=>{var o;switch(t){case E:S(),Y(!1);break;case D:J(),Y(!1),K((0,Z.logEvent)(x.F8,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case k:ee(),Y(!1),K((0,Z.logEvent)(x.t4,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case R:te(),Y(!1),K((0,Z.logEvent)(x.Tl,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case N:ne(),Y(!1),K((0,Z.logEvent)(x.BL,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case O:(0,v.Z)(".panel-body .chart-container",null!=(o=null==n?void 0:n.slice_name)?o:(0,l.t)("New chart"),!0)(a),Y(!1),K((0,Z.logEvent)(x.xE,{chartId:null==n?void 0:n.slice_id,chartName:null==n?void 0:n.slice_name}));break;case U:ae(),Y(!1);break;case q:Y(!1);break;case L:X(),Y(!1);break;case A:Y(!1);break;case z:h(e,a.metaKey),Y(!1)}}),[ae,J,ee,te,e,h,S,X,null==n?void 0:n.slice_name]);return[(0,o.useMemo)((()=>(0,s.tZ)(u.Menu,(0,a.Z)({onClick:oe,selectable:!1},w),(0,s.tZ)(o.Fragment,null,n&&(0,s.tZ)(u.Menu.Item,{key:E},(0,l.t)("Edit chart properties")),(0,s.tZ)(u.Menu.SubMenu,{title:(0,l.t)("On dashboards"),key:"dashboards_added_to"},(0,s.tZ)(I,{chartId:null==n?void 0:n.slice_id,dashboards:_})),(0,s.tZ)(u.Menu.Divider,null)),(0,s.tZ)(u.Menu.SubMenu,{title:(0,l.t)("Download"),key:"download_submenu"},j.includes(e.viz_type)?(0,s.tZ)(o.Fragment,null,(0,s.tZ)(u.Menu.Item,{key:D,icon:(0,s.tZ)(c.Z.FileOutlined,{css:V}),disabled:!t},(0,l.t)("Export to original .CSV")),(0,s.tZ)(u.Menu.Item,{key:k,icon:(0,s.tZ)(c.Z.FileOutlined,{css:V}),disabled:!t},(0,l.t)("Export to pivoted .CSV"))):(0,s.tZ)(u.Menu.Item,{key:D,icon:(0,s.tZ)(c.Z.FileOutlined,{css:V}),disabled:!t},(0,l.t)("Export to .CSV")),(0,s.tZ)(u.Menu.Item,{key:R,icon:(0,s.tZ)(c.Z.FileOutlined,{css:V})},(0,l.t)("Export to .JSON")),(0,s.tZ)(u.Menu.Item,{key:O,icon:(0,s.tZ)(c.Z.FileImageOutlined,{css:V})},(0,l.t)("Download as image")),(0,s.tZ)(u.Menu.Item,{key:N,icon:(0,s.tZ)(c.Z.FileOutlined,{css:V})},(0,l.t)("Export to Excel"))),(0,s.tZ)(u.Menu.SubMenu,{title:(0,l.t)("Share"),key:"share_submenu"},(0,s.tZ)(u.Menu.Item,{key:U},(0,l.t)("Copy permalink to clipboard")),(0,s.tZ)(u.Menu.Item,{key:L},(0,l.t)("Share chart by email")),(0,d.cr)(d.TT.EmbeddableCharts)?(0,s.tZ)(u.Menu.Item,{key:q},(0,s.tZ)(p.Z,{triggerNode:(0,s.tZ)("span",null,(0,l.t)("Embed code")),modalTitle:(0,l.t)("Embed code"),modalBody:(0,s.tZ)(M,{formData:e,addDangerToast:F}),maxWidth:100*$.gridUnit+"px",destroyOnClose:!0,responsive:!0})):null),(0,s.tZ)(u.Menu.Divider,null),B?(0,s.tZ)(o.Fragment,null,(0,s.tZ)(u.Menu.SubMenu,{title:(0,l.t)("Manage email report")},(0,s.tZ)(y.Z,{chart:G,setShowReportSubMenu:H,showReportSubMenu:B,setIsDropdownVisible:Y,isDropdownVisible:W,useTextMenu:!0})),(0,s.tZ)(u.Menu.Divider,null)):(0,s.tZ)(u.Menu,null,(0,s.tZ)(y.Z,{chart:G,setShowReportSubMenu:H,setIsDropdownVisible:Y,isDropdownVisible:W,useTextMenu:!0})),(0,s.tZ)(u.Menu.Item,{key:A},(0,s.tZ)(p.Z,{triggerNode:(0,s.tZ)("span",null,(0,l.t)("View query")),modalTitle:(0,l.t)("View query"),modalBody:(0,s.tZ)(C.Z,{latestQueryFormData:e}),draggable:!0,resizable:!0,responsive:!0})),Q&&(0,s.tZ)(u.Menu.Item,{key:z},(0,l.t)("Run in SQL Lab")))),[F,t,G,_,oe,W,e,B,n,$.gridUnit]),W,Y]}},33313:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(44904);const o=["AND","AS","ASC","AVG","BY","CASE","COUNT","CREATE","CROSS","DATABASE","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","END","FOREIGN","FROM","GRANT","GROUP","HAVING","IF","INNER","INSERT","JOIN","KEY","LEFT","LIMIT","MAX","MIN","NATURAL","NOT","NULL","OFFSET","ON","OR","ORDER","OUTER","PRIMARY","REFERENCES","RIGHT","SELECT","SUM","TABLE","THEN","TYPE","UNION","UPDATE","WHEN","WHERE"].concat(["BIGINT","BINARY","BIT","CHAR","DATE","DECIMAL","DOUBLE","FLOAT","INT","INTEGER","MONEY","NUMBER","NUMERIC","REAL","SET","TEXT","TIMESTAMP","VARCHAR"]).map((e=>({meta:"sql",name:e,score:a.Yn,value:e})))},15856:(e,t,n)=>{n.d(t,{j:()=>r}),n(67294);var a=n(11965),o=n(13322),i=n(58593);const r=({title:e,color:t})=>(0,a.tZ)(i.u,{title:e,placement:"top"},(0,a.tZ)(o.Z.InfoCircleOutlined,{css:e=>a.iv`
        color: ${t||e.colors.text.label};
        margin-left: ${2*e.gridUnit}px;
        &.anticon {
          font-size: unset;
          .anticon {
            line-height: unset;
            vertical-align: unset;
          }
        }
      `}))},41814:(e,t,n)=>{n.d(t,{p:()=>se});var a=n(73126),o=n(41609),i=n.n(o),r=n(67294),s=n(61988),l=n(11965),d=n(32103),c=n(51995),u=n(11064),p=n(16355),h=n(69363),m=n(83862),g=n(16550),v=n(74069),b=n(35932),f=n(28216),y=n(57001),Z=n(12617),x=n(88889),C=n(55786),S=n(99612),T=n(38703),_=n(27600);const w=function({value:e}){return(0,l.tZ)("span",null,e?_.Ly:_.gz)},$=function(){return(0,l.tZ)("span",{css:e=>l.iv`
        color: ${e.colors.grayscale.light1};
      `},_.Wq)};var M=n(42846),F=n(51115);const I=function({format:e=M.default.DATABASE_DATETIME,value:t}){return t?(0,l.tZ)("span",null,(0,F.bt)(e).format(t)):(0,l.tZ)($,null)};var E=n(94301),D=n(52256),k=n(93197),R=n(87183),N=n(4715),O=n(13322),U=n(99299);const q=function(e){const{headerTitle:t,groupTitle:n,groupOptions:a,value:o,onChange:i}=e,s=(0,c.Fg)(),[d,u]=(0,r.useState)(!1);return(0,l.tZ)("div",{css:l.iv`
        display: flex;
        align-items: center;
      `},(0,l.tZ)(U.Z,{trigger:"click",visible:d,content:(0,l.tZ)("div",null,(0,l.tZ)("div",{css:l.iv`
                font-weight: ${s.typography.weights.bold};
                margin-bottom: ${s.gridUnit}px;
              `},n),(0,l.tZ)(R.Y.Group,{value:o,onChange:e=>{i(e.target.value),u(!1)}},(0,l.tZ)(N.T,{direction:"vertical"},a.map((e=>(0,l.tZ)(R.Y,{key:e.value,value:e.value},e.label)))))),placement:"bottomLeft",arrowPointAtCenter:!0},(0,l.tZ)(O.Z.SettingOutlined,{iconSize:"m",iconColor:s.colors.grayscale.light1,css:l.iv`
            margin-top: 3px; // we need exactly 3px to align the icon
            margin-right: ${s.gridUnit}px;
          `,onClick:()=>u(!0)})),t)};var L=n(42190),A=n(53579),z=n(60331),j=n(72813),P=n(89555);function V({filters:e,setFilters:t,totalCount:n,loading:a,onReload:o}){const i=(0,c.Fg)(),d=(0,r.useMemo)((()=>Object.assign({},...e.map((e=>({[(0,j.GA)(e.col)?e.col.label:e.col]:e}))))),[e]),u=(0,r.useCallback)((e=>{const n={...d};delete n[e],t([...Object.values(n)])}),[d,t]),p=(0,r.useMemo)((()=>Object.entries(d).map((([e,{val:t,formattedVal:n}])=>({colName:e,val:null!=n?n:t}))).sort(((e,t)=>e.colName.localeCompare(t.colName)))),[d]);return(0,l.tZ)("div",{css:l.iv`
        display: flex;
        justify-content: space-between;
        padding: ${i.gridUnit/2}px 0;
        margin-bottom: ${2*i.gridUnit}px;
      `},(0,l.tZ)("div",{css:l.iv`
          display: flex;
          flex-wrap: wrap;
          margin-bottom: -${4*i.gridUnit}px;
        `},p.map((({colName:e,val:t})=>(0,l.tZ)(z.Z,{closable:!0,onClose:u.bind(null,e),key:e,css:l.iv`
              height: ${6*i.gridUnit}px;
              display: flex;
              align-items: center;
              padding: ${i.gridUnit/2}px ${2*i.gridUnit}px;
              margin-right: ${4*i.gridUnit}px;
              margin-bottom: ${4*i.gridUnit}px;
              line-height: 1.2;
            `},(0,l.tZ)("span",{css:l.iv`
                margin-right: ${i.gridUnit}px;
              `},e),(0,l.tZ)("strong",null,t))))),(0,l.tZ)("div",{css:l.iv`
          display: flex;
          align-items: center;
          height: min-content;
        `},(0,l.tZ)(P.Z,{loading:a&&!n,rowcount:n}),(0,l.tZ)(O.Z.ReloadOutlined,{iconColor:i.colors.grayscale.light1,iconSize:"l","aria-label":(0,s.t)("Reload"),role:"button",onClick:o})))}var K=n(57557),B=n.n(K),H=n(65946);const W=50;var Y,G={name:"82a6rk",styles:"flex:1"};function Q({children:e}){const{ref:t,height:n}=(0,S.NB)();return(0,l.tZ)("div",{ref:t,css:G},r.cloneElement(e,{height:n}))}function X({formData:e,initialFilters:t}){const n=(0,c.Fg)(),[a,o]=(0,r.useState)(0),i=(0,r.useRef)(a),[d,u]=(0,r.useState)(t),[p,h]=(0,r.useState)(!1),[m,g]=(0,r.useState)(""),[v,b]=(0,r.useState)(new Map),[y,Z]=(0,r.useState)({}),S=(0,f.v9)((e=>e.common.conf.SAMPLES_ROW_LIMIT)),[_,M]=(0,r.useMemo)((()=>e.datasource.split("__")),[e.datasource]),{metadataBar:F,status:R}=(0,A.S)({datasetId:_}),N=(0,r.useMemo)((()=>{const e=v.get(a);return e?(i.current=a,e):v.get(i.current)}),[a,v]),O=(0,r.useMemo)((()=>(null==N?void 0:N.colNames.map(((e,t)=>({key:e,dataIndex:e,title:(null==N?void 0:N.colTypes[t])===x.Z.Temporal?(0,l.tZ)(q,{headerTitle:e,groupTitle:(0,s.t)("Formatting"),groupOptions:[{label:(0,s.t)("Original value"),value:Y.Original},{label:(0,s.t)("Formatted value"),value:Y.Formatted}],value:y[e]===Y.Original?Y.Original:Y.Formatted,onChange:t=>Z((n=>({...n,[e]:t})))}):e,render:n=>!0===n||!1===n?(0,l.tZ)(w,{value:n}):null===n?(0,l.tZ)($,null):(null==N?void 0:N.colTypes[t])===x.Z.Temporal&&y[e]!==Y.Original&&("number"==typeof n||n instanceof Date)?(0,l.tZ)(I,{value:n}):String(n),width:150}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.colTypes,y]),U=(0,r.useMemo)((()=>(null==N?void 0:N.data.map(((e,t)=>null==N?void 0:N.colNames.reduce(((t,n)=>({...t,[n]:e[n]})),{key:t}))))||[]),[null==N?void 0:N.colNames,null==N?void 0:N.data]),z=(0,r.useCallback)((()=>{g(""),b(new Map),o(0)}),[]);(0,r.useEffect)((()=>{g(""),b(new Map),o(0)}),[d]),(0,r.useEffect)((()=>{if(v.has(a)&&[...v.keys()].at(-1)!==a){const e=new Map(v);e.delete(a),b(e.set(a,v.get(a)))}}),[a,v]),(0,r.useEffect)((()=>{if(!m&&!p&&!v.has(a)){var t;h(!0);const n=null!=(t=function(e,t){if(!e)return;const n=(0,H.Z)(e),a=B()(n.extras,"having"),o=[...(0,C.Z)(n.filters),...(0,C.Z)(t).map((e=>B()(e,"formattedVal")))];return{granularity:n.granularity,time_range:n.time_range,filters:o,extras:a}}(e,d))?t:{},o=Math.ceil(S/W);(0,D.getDatasourceSamples)(M,_,!1,n,W,a+1).then((e=>{b(new Map([...[...v.entries()].slice(1-o),[a,{total:e.total_count,data:e.data,colNames:(0,C.Z)(e.colnames),colTypes:(0,C.Z)(e.coltypes)}]])),g("")})).catch((e=>{g(`${e.name}: ${e.message}`)})).finally((()=>{h(!1)}))}}),[S,_,M,d,e,p,a,m,v]);const j=!m&&!v.size||R===L.ni.Loading;let P=null;if(m)P=(0,l.tZ)("pre",{css:l.iv`
          margin-top: ${4*n.gridUnit}px;
        `},m);else if(j)P=(0,l.tZ)(T.Z,null);else if(0===(null==N?void 0:N.total)){const e=(0,s.t)("No rows were returned for this dataset");P=(0,l.tZ)(E.x3,{image:"document.svg",title:e})}else P=(0,l.tZ)(Q,null,(0,l.tZ)(k.ZP,{data:U,columns:O,size:k.ex.Small,defaultPageSize:W,recordCount:null==N?void 0:N.total,usePagination:!0,loading:p,onChange:e=>o(e.current?e.current-1:0),resizable:!0,virtualize:!0,allowHTML:!0}));return(0,l.tZ)(r.Fragment,null,!j&&F,!j&&(0,l.tZ)(V,{filters:d,setFilters:u,totalCount:null==N?void 0:N.total,loading:p,onReload:z}),P)}!function(e){e[e.Original=0]="Original",e[e.Formatted=1]="Formatted"}(Y||(Y={}));const J=({canExplore:e,closeModal:t,exploreChart:n})=>{const a=(0,c.Fg)();return(0,l.tZ)(r.Fragment,null,(0,l.tZ)(b.Z,{buttonStyle:"secondary",buttonSize:"small",onClick:n,disabled:!e,tooltip:e?void 0:(0,s.t)("You do not have sufficient permissions to edit the chart")},(0,s.t)("Edit chart")),(0,l.tZ)(b.Z,{buttonStyle:"primary",buttonSize:"small",onClick:t,css:l.iv`
          margin-left: ${2*a.gridUnit}px;
        `},(0,s.t)("Close")))};function ee({chartId:e,formData:t,initialFilters:n,showModal:a,onHideModal:o}){const i=(0,c.Fg)(),d=(0,g.k6)(),u=(0,r.useContext)(y.DashboardPageIdContext),{slice_name:p}=(0,f.v9)((t=>t.sliceEntities.slices[e])),h=(0,f.v9)((e=>{var t;return(0,Z.R)("can_explore","Superset",null==(t=e.user)?void 0:t.roles)})),m=(0,r.useMemo)((()=>`/explore/?dashboard_page_id=${u}&slice_id=${e}`),[e,u]),b=(0,r.useCallback)((()=>{d.push(m)}),[m,d]);return(0,l.tZ)(v.default,{show:a,onHide:null!=o?o:()=>null,css:l.iv`
        .ant-modal-body {
          display: flex;
          flex-direction: column;
        }
      `,title:(0,s.t)("Drill to detail: %s",p),footer:(0,l.tZ)(J,{exploreChart:b,canExplore:h}),responsive:!0,resizable:!0,resizableConfig:{minHeight:128*i.gridUnit,minWidth:128*i.gridUnit,defaultSize:{width:"auto",height:"75vh"}},draggable:!0,destroyOnClose:!0,maskClosable:!1},(0,l.tZ)(X,{formData:t,initialFilters:n}))}var te=n(69175),ne=n(15856),ae=n(46219);const oe=(0,s.t)("Drill to detail by"),ie=({children:e,...t})=>(0,l.tZ)(m.Menu.Item,(0,a.Z)({disabled:!0},t),(0,l.tZ)("div",{css:l.iv`
        white-space: normal;
        max-width: 160px;
      `},e)),re=(0,c.iK)((({children:e,stripHTML:t=!1})=>{const n=t&&"string"==typeof e?(0,d.ZU)(e):e;return(0,l.tZ)("span",null,n)}))`
  ${({theme:e})=>`\n     font-weight: ${e.typography.weights.bold};\n     color: ${e.colors.primary.base};\n   `}
`,se=({chartId:e,formData:t,filters:n=[],isContextMenu:o=!1,contextMenuY:d=0,onSelection:c=(()=>null),onClick:g=(()=>null),submenuIndex:v=0,...b})=>{const[f,y]=(0,r.useState)([]),[Z,x]=(0,r.useState)(!1),C=(0,r.useCallback)(((e,t)=>{g(t),c(),y(e),x(!0)}),[g,c]),S=(0,r.useCallback)((()=>{x(!1)}),[]),T=(0,r.useMemo)((()=>{var e;return null==(e=(0,u.Z)().get(t.viz_type))?void 0:e.behaviors.find((e=>e===p.cg.DrillToDetail))}),[t.viz_type]),_=(0,r.useMemo)((()=>{const{metrics:e}=(0,h.Z)(t);return i()(e)}),[t]);let w,$;w=T&&_?(0,l.tZ)(ie,(0,a.Z)({},b,{key:"drill-detail-no-aggregations"}),(0,s.t)("Drill to detail"),(0,l.tZ)(ne.j,{title:(0,s.t)("Drill to detail is disabled because this chart does not group data by dimension value.")})):(0,l.tZ)(m.Menu.Item,(0,a.Z)({},b,{key:"drill-detail-no-filters",onClick:C.bind(null,[])}),(0,s.t)("Drill to detail")),T||($=(0,l.tZ)(ie,(0,a.Z)({},b,{key:"drill-detail-by-chart-not-supported"}),oe,(0,l.tZ)(ne.j,{title:(0,s.t)("Drill to detail by value is not yet supported for this chart type.")}))),T&&_&&($=(0,l.tZ)(ie,(0,a.Z)({},b,{key:"drill-detail-by-no-aggregations"}),oe));const M=(0,r.useMemo)((()=>(0,te.th)(d,n.length>1?n.length+1:n.length,v)),[d,n.length,v]);return T&&!_&&null!=n&&n.length&&($=(0,l.tZ)(m.Menu.SubMenu,(0,a.Z)({},b,{popupOffset:[0,M],popupClassName:"chart-context-submenu",title:oe}),(0,l.tZ)("div",null,n.map(((e,t)=>(0,l.tZ)(ae.i,(0,a.Z)({},b,{tooltipText:`${oe} ${e.formattedVal}`,key:`drill-detail-filter-${t}`,onClick:C.bind(null,[e])}),`${oe} `,(0,l.tZ)(re,{stripHTML:!0},e.formattedVal)))),n.length>1&&(0,l.tZ)(m.Menu.Item,(0,a.Z)({},b,{key:"drill-detail-filter-all",onClick:C.bind(null,n)}),(0,l.tZ)("div",null,`${oe} `,(0,l.tZ)(re,{stripHTML:!1},(0,s.t)("all"))))))),!T||_||null!=n&&n.length||($=(0,l.tZ)(ie,(0,a.Z)({},b,{key:"drill-detail-by-select-aggregation"}),oe,(0,l.tZ)(ne.j,{title:(0,s.t)("Right-click on a dimension value to drill to detail by that value.")}))),(0,l.tZ)(r.Fragment,null,w,o&&$,(0,l.tZ)(ee,{chartId:e,formData:t,initialFilters:f,showModal:Z,onHideModal:S}))}},46219:(e,t,n)=>{n.d(t,{i:()=>l});var a=n(73126),o=(n(67294),n(3297)),i=n(11965),r=n(83862),s=n(58593);const l=({tooltipText:e,children:t,...n})=>{const[l,d]=(0,o.Z)();return(0,i.tZ)(r.Menu.Item,(0,a.Z)({css:i.iv`
        display: flex;
      `},n),(0,i.tZ)(s.u,{title:d?e:null},(0,i.tZ)("div",{ref:l,css:i.iv`
            max-width: 100%;
            ${o.B};
          `},t)))}},69175:(e,t,n)=>{n.d(t,{$t:()=>a,th:()=>o});const a=(e,t,n=Number.MAX_SAFE_INTEGER,a=0)=>{const o=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),i=Math.min(32*t,n)+32+a;return o-e<i?o-i:e},o=(e,t,n=0,o=Number.MAX_SAFE_INTEGER,i=0)=>{const r=e+4+32*n+4;return a(r,t,o,i)-r}},87253:(e,t,n)=>{n.d(t,{lU:()=>s.lU,zq:()=>s.zq,ZP:()=>r}),n(67294);var a=n(51995),o=n(11965);const i=a.iK.span`
  &,
  & svg {
    vertical-align: top;
  }
`;function r({checked:e,onChange:t,style:n,className:a}){return(0,o.tZ)(i,{style:n,onClick:()=>{t(!e)},role:"checkbox",tabIndex:0,"aria-checked":e,"aria-label":"Checkbox",className:a||""},e?(0,o.tZ)(s.lU,null):(0,o.tZ)(s.zq,null))}var s=n(13842)},88694:(e,t,n)=>{n.d(t,{$i:()=>p,Lt:()=>u});var a=n(73126),o=(n(67294),n(4715)),i=n(51995),r=n(13322),s=n(11965);const l=i.iK.div`
  width: ${({theme:e})=>.75*e.gridUnit}px;
  height: ${({theme:e})=>.75*e.gridUnit}px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.grayscale.light1};

  font-weight: ${({theme:e})=>e.typography.weights.normal};
  display: inline-flex;
  position: relative;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary.base};

    &::before,
    &::after {
      background-color: ${({theme:e})=>e.colors.primary.base};
    }
  }

  &::before,
  &::after {
    position: absolute;
    content: ' ';
    width: ${({theme:e})=>.75*e.gridUnit}px;
    height: ${({theme:e})=>.75*e.gridUnit}px;
    border-radius: 50%;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  &::before {
    top: ${({theme:e})=>e.gridUnit}px;
  }

  &::after {
    bottom: ${({theme:e})=>e.gridUnit}px;
  }
`,d=i.iK.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e})=>2*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
`;var c;!function(e){e.Vertical="vertical",e.Horizontal="horizontal"}(c||(c={}));const u=({overlay:e,iconOrientation:t=c.Vertical,...n})=>(0,s.tZ)(o.Gj,(0,a.Z)({overlay:e},n),(0,s.tZ)(d,null,((e=c.Vertical)=>e===c.Horizontal?(0,s.tZ)(r.Z.MoreHoriz,{iconSize:"xl"}):(0,s.tZ)(l,null))(t))),p=e=>(0,s.tZ)(o.Gj,(0,a.Z)({overlayStyle:e.overlayStyle},e))},1510:(e,t,n)=>{n.d(t,{GW:()=>y,Rz:()=>f,X3:()=>g,on:()=>h,vk:()=>m,zi:()=>p});var a=n(5364),o=n(16355),i=n(93185),r=n(61988),s=n(70400),l=n(81255),d=n(80621),c=n(20292);const u=()=>{var e,t;const n=(0,c.Z)();return(null==n||null==(e=n.common)||null==(t=e.conf)?void 0:t.NATIVE_FILTER_DEFAULT_ROW_LIMIT)||1e3},p=({datasetId:e,dependencies:t={},groupby:n,defaultDataMask:a,controlValues:o,filterType:i,sortMetric:r,adhoc_filters:l,time_range:d,granularity_sqla:c,type:p,dashboardId:h,id:m})=>{var g;const v={};return e&&(v.datasource=`${e}__table`),n&&(v.groupby=[n]),r&&(v.sortMetric=r),{...o,...v,adhoc_filters:null!=l?l:[],extra_filters:[],extra_form_data:t,granularity_sqla:c,metrics:["count"],row_limit:u(),showSearch:!0,defaultValue:null==a||null==(g=a.filterState)?void 0:g.value,time_range:d,url_params:(0,s.Z)("regular"),inView:!0,viz_type:i,type:p,dashboardId:h,native_filter_id:m}};function h(e={},t={}){const n={};return a.Ci.forEach((a=>{const o=[...e[a]||[],...t[a]||[]];o.length&&(n[a]=o)})),a.Ay.forEach((a=>{const o=e[a];void 0!==o&&(n[a]=o);const i=t[a];void 0!==i&&(n[a]=i)})),n}function m(e,t){let n={};return t.forEach((t=>{var a,o;n=h(n,null!=(a=null==(o=e[t])?void 0:o.extraFormData)?a:{})})),n}function g(e){return!e.includes(o.cg.NativeFilter)||(0,i.cr)(i.TT.DashboardCrossFilters)&&e.includes(o.cg.InteractiveChart)}const v=(e,t)=>{var n;return(null==e||null==(n=e[t])?void 0:n.type)===l.gn},b=(e,t,n,a,o,i)=>{var r,s,d,c,u,p;i.has(n)||(i.add(n),(null==e||null==(r=e[n])?void 0:r.type)===l.dW&&t.includes(null==(s=e[n])||null==(d=s.meta)?void 0:d.chartId)&&a.forEach(o.add,o),0===(null==e||null==(c=e[n])||null==(u=c.children)?void 0:u.length)||v(e,n)&&o.has(n)||null==(p=e[n])||p.children.forEach((n=>b(e,t,n,v(e,n)?[...a,n]:a,o,i))))},f=(e,t)=>{const n=e[d._4].children[0],a=n!==d.PV,o=new Set,i=new Set;var r,s;return a?null==(r=e[n])||null==(s=r.children)||s.forEach((n=>b(e,t,n,[n],o,i))):Object.values(e).filter((e=>(null==e?void 0:e.type)===l.gn)).forEach((n=>b(e,t,n.id,[n.id],o,i))),o},y=e=>null==e?"":"string"==typeof e||"number"==typeof e?`${e}`:Array.isArray(e)?e.join(", "):"object"==typeof e?JSON.stringify(e):(0,r.t)("Unknown value")},91914:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(1510),o=n(99543);function i(e){return Object.entries(e).map((([e,t])=>({col:e,op:Array.isArray(t)?"IN":"==",val:t}))).filter((e=>null!==e.val))}var r=n(87915);const s={},l={};function d({chart:e,filters:t,nativeFilters:n,chartConfiguration:d,colorScheme:c,colorNamespace:u,sliceId:p,dataMask:h,extraControls:m,labelColors:g,sharedLabelColors:v,allSliceIds:b}){const f=l[p];if(s[p]===t&&(0,o.JB)(null==f?void 0:f.color_scheme,c,{ignoreUndefined:!0})&&(0,o.JB)(null==f?void 0:f.color_namespace,u,{ignoreUndefined:!0})&&(0,o.JB)(null==f?void 0:f.label_colors,g,{ignoreUndefined:!0})&&(0,o.JB)(null==f?void 0:f.shared_label_colors,v,{ignoreUndefined:!0})&&f&&(0,o.JB)(null==f?void 0:f.dataMask,h,{ignoreUndefined:!0})&&(0,o.JB)(null==f?void 0:f.extraControls,m,{ignoreUndefined:!0}))return f;let y={};const Z=(0,r.g)({chartConfiguration:d,dataMask:h,nativeFilters:n,allSliceIds:b}),x=Object.entries(Z).filter((([,{scope:t}])=>t.includes(e.id))).map((([e])=>e));x.length&&(y={extra_form_data:(0,a.vk)(h,x)});const C={...e.form_data,label_colors:g,shared_label_colors:v,...c&&{color_scheme:c},extra_filters:i(t),...y,...m};return s[p]=t,l[p]={...C,dataMask:h,extraControls:m},C}},50909:(e,t,n)=>{n.d(t,{C4:()=>D,HS:()=>w,_q:()=>R,m:()=>_,qi:()=>T});var a=n(11965),o=n(23279),i=n.n(o),r=n(67294),s=n(51995),l=n(61988),d=n(51115),c=n(42846),u=n(88889),p=n(32103),h=n(4715),m=n(9875),g=n(27600),v=n(87183),b=n(13322),f=n(35932),y=n(99299),Z=n(54076),x=n(13433),C=n(61587);const S=(0,s.iK)("span")`
  color: ${({theme:e})=>e.colors.grayscale.light1};
`,T=(0,s.iK)(f.Z)`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;

  // needed to override button's first-of-type margin: 0
  && {
    margin: 0 ${({theme:e})=>2*e.gridUnit}px;
  }

  i {
    padding: 0 ${({theme:e})=>e.gridUnit}px;
  }
`,_=({data:e,columns:t})=>{const n=(0,s.Fg)();return(0,a.tZ)(x.Z,{text:e&&t?(0,Z.Mv)(e,t):"",wrapped:!1,copyNode:(0,a.tZ)(b.Z.CopyOutlined,{iconColor:n.colors.grayscale.base,iconSize:"l","aria-label":(0,l.t)("Copy"),role:"button",css:a.iv`
            &.anticon > * {
              line-height: 0;
            }
          `})})},w=({onChangeHandler:e})=>{const t=(0,s.Fg)(),n=i()(e,g.M$);return(0,a.tZ)(m.II,{prefix:(0,a.tZ)(b.Z.Search,{iconColor:t.colors.grayscale.base}),placeholder:(0,l.t)("Search"),onChange:e=>{const t=e.target.value;n(t)},css:a.iv`
        width: 200px;
        margin-right: ${2*t.gridUnit}px;
      `})};var $;!function(e){e.Formatted="formatted",e.Original="original"}($||($={}));const M=({onChange:e,value:t})=>(0,a.tZ)(v.Y.Group,{value:t,onChange:e},(0,a.tZ)(h.T,{direction:"vertical"},(0,a.tZ)(v.Y,{value:$.Formatted},(0,l.t)("Formatted date")),(0,a.tZ)(v.Y,{value:$.Original},(0,l.t)("Original value")))),F=s.iK.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme:e})=>4*e.gridUnit+"px"};
`,I=s.iK.span`
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.base};
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  text-transform: uppercase;
`,E=({columnName:e,onTimeColumnChange:t,datasourceId:n,isOriginalTimeColumn:o})=>{const i=(0,s.Fg)(),d=n=>{t(e,n.target.value)},c=(0,r.useMemo)((()=>n?(0,a.tZ)(F,{onClick:e=>e.stopPropagation()},(0,a.tZ)(a.xB,{styles:a.iv`
              .column-formatting-popover .ant-popover-inner-content {
                padding: 0;
              }
            `}),(0,a.tZ)(I,null,(0,l.t)("Column Formatting")),(0,a.tZ)(M,{onChange:d,value:o?$.Original:$.Formatted})):null),[n,o]);return n?(0,a.tZ)("span",null,(0,a.tZ)(y.Z,{overlayClassName:"column-formatting-popover",trigger:"click",content:c,placement:"bottomLeft",arrowPointAtCenter:!0},(0,a.tZ)(b.Z.SettingOutlined,{iconSize:"m",iconColor:i.colors.grayscale.light1,css:(0,a.iv)({marginRight:`${i.gridUnit}px`},"",""),onClick:e=>e.stopPropagation()})),e):(0,a.tZ)("span",null,e)},D=(e,t)=>{const n=(0,r.useMemo)((()=>{var e;return null!=(e=null==t?void 0:t.map((e=>Object.values(e).map((e=>e?e.toString().toLowerCase():(0,l.t)("N/A"))))))?e:[]}),[t]);return(0,r.useMemo)((()=>null!=t&&t.length?t.filter(((t,a)=>n[a].some((t=>null==t?void 0:t.includes(e.toLowerCase()))))):[]),[t,e,n])},k=(0,d.bt)(c.default.DATABASE_DATETIME),R=(e,t,n,o,i,s,l)=>{const[d,c]=(0,r.useState)((0,C.W)(o)),h=(e,t)=>{if(o)if(t!==$.Original||d.includes(e)){if(t===$.Formatted&&d.includes(e)){const t=(0,C.W)(o);t.splice(t.indexOf(e),1),(0,C.e)(o,t),c(t)}}else{const t=(0,C.W)(o);t.push(e),(0,C.e)(o,t),c(t)}};return(0,r.useEffect)((()=>{i&&c((0,C.W)(o))}),[o,i]),(0,r.useMemo)((()=>e&&null!=n&&n.length?e.filter((e=>Object.keys(n[0]).includes(e))).map(((e,i)=>{const r=null==t?void 0:t[i],c=n[0][e],m=r===u.Z.Temporal?d.indexOf(e):-1,v=d.includes(e);return{id:e||i,accessor:t=>t[e],Header:r===u.Z.Temporal&&"string"!=typeof c?(0,a.tZ)(E,{columnName:e,datasourceId:o,onTimeColumnChange:h,isOriginalTimeColumn:v}):e,Cell:({value:e})=>!0===e?g.Ly:!1===e?g.gz:null===e?(0,a.tZ)(S,null,g.Wq):r===u.Z.Temporal&&-1===m&&"number"==typeof e?k(e):"string"==typeof e&&l?(0,p.Ul)(e):String(e),...null==s?void 0:s[e]}})):[]),[e,n,t,o,s,d])}},61587:(e,t,n)=>{n.d(t,{W:()=>i,e:()=>r});var a=n(55786),o=n(61337);const i=e=>{const t=(0,o.rV)(o.dR.ExploreDataTableOriginalFormattedTimeColumns,{});return void 0===e?[]:(0,a.Z)(t[e])},r=(e,t)=>{const n=(0,o.rV)(o.dR.ExploreDataTableOriginalFormattedTimeColumns,{});(0,o.LS)(o.dR.ExploreDataTableOriginalFormattedTimeColumns,{...n,[e]:t})}},66124:(e,t,n)=>{n.d(t,{X:()=>h,c:()=>m});var a=n(4788),o=n.n(a),i=n(67294),r=n(51995),s=n(88889),l=n(11965),d=n(50909),c=n(54076),u=n(61587),p=n(89555);const h=r.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: ${2*e.gridUnit}px;\n\n    span {\n      flex-shrink: 0;\n    }\n  `}
`,m=({data:e,datasourceId:t,onInputChange:n,columnNames:a,columnTypes:r,rowcount:m,isLoading:g})=>{const v=(0,u.W)(t),b=o()(a,r).filter((([e,t])=>t===s.Z.Temporal&&e&&!v.includes(e))).map((([e])=>e)),f=(0,i.useMemo)((()=>(0,c.cD)(e,b)),[e,b]);return(0,l.tZ)(h,null,(0,l.tZ)(d.HS,{onChangeHandler:n}),(0,l.tZ)("div",{css:l.iv`
          display: flex;
          align-items: center;
        `},(0,l.tZ)(p.Z,{rowcount:m,loading:g}),(0,l.tZ)(d.m,{data:f,columns:a})))}},5462:(e,t,n)=>{n.d(t,{T:()=>d});var a=n(67294),o=n(61988),i=n(76962),r=n(50909),s=n(66124),l=n(11965);const d=({data:e,colnames:t,coltypes:n,rowcount:d,datasourceId:c,dataSize:u=50,isVisible:p})=>{const[h,m]=(0,a.useState)(""),g=(0,r._q)(t,n,e,c,p,{},!0),v=(0,r.C4)(h,e);return(0,l.tZ)(a.Fragment,null,(0,l.tZ)(s.c,{data:v,columnNames:t,columnTypes:n,rowcount:d,datasourceId:c,onInputChange:e=>m(e),isLoading:!1}),(0,l.tZ)(i.Z,{columns:g,data:v,pageSize:u,noDataText:(0,o.t)("No results"),emptyWrapperType:i.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))}},21496:(e,t,n)=>{n.d(t,{c9:()=>E,Tg:()=>T});var a,o=n(67294),i=n(51995),r=n(93185),s=n(61988),l=n(13322),d=n(71262),c=n(61337);!function(e){e.Results="results",e.Samples="samples"}(a||(a={}));var u=n(11064),p=n(55786),h=n(38703),m=n(94301),g=n(52256),v=n(98286),b=n(5462),f=n(66124),y=n(11965);const Z=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,x=new WeakMap,C=({isRequest:e,queryFormData:t,queryForce:n,ownState:a,errorMessage:i,actions:r,isVisible:l,dataSize:d=50})=>{var c;const C=(0,u.Z)().get((null==t?void 0:t.viz_type)||(null==t?void 0:t.vizType)),[S,T]=(0,o.useState)([]),[_,w]=(0,o.useState)(!0),[$,M]=(0,o.useState)(""),F=null!=(c=null==C?void 0:C.queryObjectCount)?c:1;if((0,o.useEffect)((()=>{i||(e&&x.has(t)&&(T((0,p.Z)(x.get(t))),M(""),n&&r&&r.setForceQuery(!1),w(!1)),e&&!x.has(t)&&(w(!0),(0,g.getChartDataRequest)({formData:t,force:n,resultFormat:"json",resultType:"results",ownState:a}).then((({json:e})=>{T((0,p.Z)(e.result)),M(""),x.set(t,e.result),n&&r&&r.setForceQuery(!1)})).catch((e=>{(0,v.O$)(e).then((({error:e,message:t})=>{M(e||t||(0,s.t)("Sorry, an error occurred"))}))})).finally((()=>{w(!1)}))))}),[t,e]),(0,o.useEffect)((()=>{i&&w(!1)}),[i]),_)return Array(F).fill((0,y.tZ)(h.Z,null));if(i){const e=(0,s.t)("Run a query to display results");return Array(F).fill((0,y.tZ)(m.x3,{image:"document.svg",title:e}))}if($){const e=(0,y.tZ)(o.Fragment,null,(0,y.tZ)(f.c,{data:[],columnNames:[],columnTypes:[],rowcount:0,datasourceId:t.datasource,onInputChange:()=>{},isLoading:!1}),(0,y.tZ)(Z,null,$));return Array(F).fill(e)}if(0===S.length){const e=(0,s.t)("No results were returned for this query");return Array(F).fill((0,y.tZ)(m.x3,{image:"document.svg",title:e}))}return S.slice(0,F).map(((e,n)=>(0,y.tZ)(b.T,{data:e.data,colnames:e.colnames,coltypes:e.coltypes,rowcount:e.rowcount,dataSize:d,datasourceId:t.datasource,key:n,isVisible:l})))},S=i.iK.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .ant-tabs {
    height: 100%;
  }

  .ant-tabs-content {
    height: 100%;
  }

  .ant-tabs-tabpane {
    display: flex;
    flex-direction: column;
  }

  .table-condensed {
    overflow: auto;
  }
`,T=({isRequest:e,queryFormData:t,queryForce:n,ownState:o,errorMessage:i,actions:r,isVisible:l,dataSize:c=50})=>{const u=C({errorMessage:i,queryFormData:t,queryForce:n,ownState:o,isRequest:e,actions:r,dataSize:c,isVisible:l});if(1===u.length)return(0,y.tZ)(S,null,u[0]);const p=u.map(((e,t)=>0===t?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results"),key:a.Results},e):(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e)));return(0,y.tZ)(S,null,(0,y.tZ)(d.ZP,{fullWidth:!1},p))};var _=n(76962),w=n(50909);const $=i.iK.pre`
  margin-top: ${({theme:e})=>4*e.gridUnit+"px"};
`,M=new WeakSet,F=({isRequest:e,datasource:t,queryForce:n,actions:a,dataSize:i=50,isVisible:r})=>{const[l,d]=(0,o.useState)(""),[c,u]=(0,o.useState)([]),[v,b]=(0,o.useState)([]),[Z,x]=(0,o.useState)([]),[C,S]=(0,o.useState)(!1),[T,F]=(0,o.useState)(0),[I,E]=(0,o.useState)(""),D=(0,o.useMemo)((()=>`${t.id}__${t.type}`),[t]);(0,o.useEffect)((()=>{e&&n&&M.delete(t),e&&!M.has(t)&&(S(!0),(0,g.getDatasourceSamples)(t.type,t.id,n,{}).then((e=>{u((0,p.Z)(e.data)),b((0,p.Z)(e.colnames)),x((0,p.Z)(e.coltypes)),F(e.rowcount),E(""),M.add(t),n&&a&&a.setForceQuery(!1)})).catch((e=>{u([]),b([]),x([]),E(`${e.name}: ${e.message}`)})).finally((()=>{S(!1)})))}),[t,e,n]);const k=(0,w._q)(v,Z,c,D,r,{},!0),R=(0,w.C4)(l,c);if(C)return(0,y.tZ)(h.Z,null);if(I)return(0,y.tZ)(o.Fragment,null,(0,y.tZ)(f.c,{data:R,columnNames:v,columnTypes:Z,rowcount:T,datasourceId:D,onInputChange:e=>d(e),isLoading:C}),(0,y.tZ)($,null,I));if(0===c.length){const e=(0,s.t)("No samples were returned for this dataset");return(0,y.tZ)(m.x3,{image:"document.svg",title:e})}return(0,y.tZ)(o.Fragment,null,(0,y.tZ)(f.c,{data:R,columnNames:v,columnTypes:Z,rowcount:T,datasourceId:D,onInputChange:e=>d(e),isLoading:C}),(0,y.tZ)(_.Z,{columns:k,data:R,pageSize:i,noDataText:(0,s.t)("No results"),emptyWrapperType:_.u.Small,className:"table-condensed",isPaginationSticky:!0,showRowCount:!1,small:!0}))},I=i.iK.div`
  ${({theme:e})=>`\n    position: relative;\n    background-color: ${e.colors.grayscale.light5};\n    z-index: 5;\n    overflow: hidden;\n\n    .ant-tabs {\n      height: 100%;\n    }\n\n    .ant-tabs-content-holder {\n      height: 100%;\n    }\n\n    .ant-tabs-content {\n      height: 100%;\n    }\n\n    .ant-tabs-tabpane {\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n\n      .table-condensed {\n        height: 100%;\n        overflow: auto;\n        margin-bottom: ${4*e.gridUnit}px;\n\n        .table {\n          margin-bottom: ${2*e.gridUnit}px;\n        }\n      }\n\n      .pagination-container > ul[role='navigation'] {\n        margin-top: 0;\n      }\n    }\n  `}
`,E=({queryFormData:e,datasource:t,queryForce:n,onCollapseChange:u,chartStatus:p,ownState:h,errorMessage:m,actions:g})=>{const v=(0,i.Fg)(),[b,Z]=(0,o.useState)(a.Results),[x,S]=(0,o.useState)({results:!1,samples:!1}),[T,_]=(0,o.useState)(!(0,r.cr)(r.TT.DatapanelClosedByDefault)&&(0,c.rV)(c.dR.IsDatapanelOpen,!1));(0,o.useEffect)((()=>{(0,r.cr)(r.TT.DatapanelClosedByDefault)||(0,c.LS)(c.dR.IsDatapanelOpen,T)}),[T]),(0,o.useEffect)((()=>{T||S({results:!1,samples:!1}),T&&b.startsWith(a.Results)&&p&&"loading"!==p&&S({results:!0,samples:!1}),T&&b===a.Samples&&S({results:!1,samples:!0})}),[T,b,p]);const w=(0,o.useCallback)((e=>{u(e),_(e)}),[u]),$=(0,o.useCallback)(((e,t)=>{T?e===b&&(t.preventDefault(),w(!1)):w(!0),Z(e)}),[b,w,T]),M=(0,o.useMemo)((()=>{const e=T?(0,y.tZ)(l.Z.CaretUp,{iconColor:v.colors.grayscale.base,"aria-label":(0,s.t)("Collapse data panel")}):(0,y.tZ)(l.Z.CaretDown,{iconColor:v.colors.grayscale.base,"aria-label":(0,s.t)("Expand data panel")});return(0,y.tZ)(f.X,null,T?(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!1)},e):(0,y.tZ)("span",{role:"button",tabIndex:0,onClick:()=>w(!0)},e))}),[w,T,v.colors.grayscale.base]),E=C({errorMessage:m,queryFormData:e,queryForce:n,ownState:h,isRequest:x.results,actions:g,isVisible:a.Results===b}).map(((e,t)=>0===t?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results"),key:a.Results},e):t>0?(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Results %s",t+1),key:`${a.Results} ${t+1}`},e):null));return(0,y.tZ)(I,null,(0,y.tZ)(d.ZP,{fullWidth:!1,tabBarExtraContent:M,activeKey:T?b:"",onTabClick:$},E,(0,y.tZ)(d.ZP.TabPane,{tab:(0,s.t)("Samples"),key:a.Samples},(0,y.tZ)(F,{datasource:t,queryForce:n,isRequest:x.samples,actions:g,isVisible:a.Samples===b}))))}},42753:(e,t,n)=>{var a;n.d(t,{g:()=>a}),function(e){e.Column="column",e.ColumnOption="columnOption",e.AdhocColumnOption="adhocColumn",e.Metric="metric",e.MetricOption="metricOption",e.AdhocMetricOption="adhocMetric",e.FilterOption="filterOption"}(a||(a={}))},63325:(e,t,n)=>{n.d(t,{b:()=>a});const a=n(51995).iK.div`
  .edit-popover-resize {
    transform: scaleX(-1);
    float: right;
    margin-top: ${({theme:e})=>4*e.gridUnit}px;
    margin-right: ${({theme:e})=>-2*e.gridUnit}px;
    cursor: nwse-resize;
  }
  .filter-sql-editor {
    border: ${({theme:e})=>e.colors.grayscale.light2} solid thin;
  }
`},89555:(e,t,n)=>{n.d(t,{Z:()=>d}),n(67294);var a=n(61988),o=n(67190),i=n(37921),r=n(58593),s=n(11965);const l=(0,a.t)("The row limit set for the chart was reached. The chart may show partial data.");function d(e){const{rowcount:t=0,limit:n=null,loading:d}=e,c=n&&t>=n,u=c||0===t&&!d?"danger":"default",p=(0,o.JB)()(t),h=(0,s.tZ)(i.Z,{type:u},d?(0,a.t)("Loading..."):(0,s.tZ)("span",null,(0,a.tn)("%s row","%s rows",t,p)));return c?(0,s.tZ)(r.u,{id:"tt-rowcount-tooltip",title:(0,s.tZ)("span",null,l)},h):h}},96055:(e,t,n)=>{n.d(t,{Z:()=>X});var a=n(67294),o=n(73126),i=n(45697),r=n.n(i),s=n(35932),l=n(51995),d=n(61988),c=n(57368),u=n(71262),p=n(17536),h=n(28543),m=n(4591),g=n(4715),v=n(37731),b=n(31069),f=n(93185),y=n(69856),Z=n(40266),x=n(58593),C=n(9875),S=n(54076),T=n(45211),_=n(23279),w=n.n(_),$=n(55786),M=n(15926),F=n.n(M);const I={parsedAdvancedDataType:"",advancedDataTypeOperatorList:[],errorMessage:""};var E=n(7848),D=n(61314),k=n(61641),R=n(11965);const N=(0,l.iK)(C.II)`
  margin-bottom: ${({theme:e})=>4*e.gridUnit}px;
`,O=((0,l.iK)(m.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,(0,l.iK)(g.Ph)`
  .ant-select-selector::after {
    content: ${({labelText:e})=>e||"\\A0"};
    display: inline-block;
    white-space: nowrap;
    color: ${({theme:e})=>e.colors.grayscale.light1};
    width: max-content;
  }
`),U=e=>{var t,n;const{onSubjectChange:i,onOperatorChange:r,isOperatorRelevant:s,onComparatorChange:l,onDatePickerChange:c}=(e=>{const t=(0,D.Ct)(),n=(t,n)=>{var a;const o=null==(a=e.datasource.columns)?void 0:a.find((e=>e.column_name===n)),i=!!o&&("BOOL"===o.type||"BOOLEAN"===o.type),r=!!o&&("INT"===o.type||"INTEGER"===o.type),s=!!o&&!!o.expression;if(t&&t===y.d.LatestPartition){const{partitionColumn:t}=e;return t&&n&&n===t}return(!t||t!==y.d.TemporalRange)&&(t===y.d.IsTrue||t===y.d.IsFalse?i||r||s:i?t===y.d.IsNull||t===y.d.IsNotNull:e.adhocFilter.clause!==k.N.Having||-1!==y.Ak.indexOf(t))};return{onSubjectChange:a=>{const o=e.options.find((e=>"column_name"in e&&e.column_name===a||"optionName"in e&&e.optionName===a));let i,r="";o&&"column_name"in o?(r=o.column_name,i=k.N.Where):o&&"saved_metric_name"in o?(r=o.saved_metric_name,i=k.N.Having):null!=o&&o.label&&(r=o.label,i=k.N.Having);let{operator:s,operatorId:l,comparator:d}=e.adhocFilter;s=s&&l&&n(l,r)?y.LT[l].operation:null,(0,v.Z)(s)||(s=y.d.In,l=y.d.In,d=void 0),(0,T.x)(a,e.datasource)&&(r=a,s=y.d.TemporalRange,l=y.d.TemporalRange,d=t),e.onChange(e.adhocFilter.duplicateWith({subject:r,clause:i,operator:s,expressionType:k.p.Simple,operatorId:l,comparator:d}))},onOperatorChange:t=>{const n=e.adhocFilter.comparator;let a;a=y.qK.has(t)?Array.isArray(n)?n:[n].filter((e=>e)):Array.isArray(n)?n[0]:n,t!==y.d.IsTrue&&t!==y.d.IsFalse||(a=y.d.IsTrue===t),t&&y.qB.has(t)?e.onChange(e.adhocFilter.duplicateWith({subject:e.adhocFilter.subject,clause:k.N.Where,operatorId:t,operator:y.LT[t].operation,expressionType:k.p.Sql,datasource:e.datasource})):e.onChange(e.adhocFilter.duplicateWith({operatorId:t,operator:y.LT[t].operation,comparator:a,expressionType:k.p.Simple}))},onComparatorChange:t=>{e.onChange(e.adhocFilter.duplicateWith({comparator:t,expressionType:k.p.Simple}))},isOperatorRelevant:n,clearOperator:()=>{e.onChange(e.adhocFilter.duplicateWith({operatorId:void 0,operator:void 0}))},onDatePickerChange:(t,n)=>{e.onChange(e.adhocFilter.duplicateWith({subject:t,operator:y.d.TemporalRange,comparator:n,expressionType:k.p.Simple}))}}})(e),[u,p]=(0,a.useState)([]),[h,m]=(0,a.useState)(e.adhocFilter.comparator),[C,_]=(0,a.useState)(!1),{advancedDataTypesState:M,subjectAdvancedDataType:U,fetchAdvancedDataTypeValueCallback:q,fetchSubjectAdvancedDataType:L}=(e=>{const[t,n]=(0,a.useState)(I),[o,i]=(0,a.useState)(),r=(0,a.useCallback)(((t,a,o)=>{const i=(0,$.Z)(t);o?w()((()=>{const t=`/api/v1/advanced_data_type/convert?q=${F().encode({type:o,values:i})}`;b.Z.get({endpoint:t}).then((({json:t})=>{n({parsedAdvancedDataType:t.result.display_value,advancedDataTypeOperatorList:t.result.valid_filter_operators,errorMessage:t.result.error_message}),e(!t.result.error_message)})).catch((()=>{n({parsedAdvancedDataType:"",advancedDataTypeOperatorList:a.advancedDataTypeOperatorList,errorMessage:(0,d.t)("Failed to retrieve advanced type")}),e(!1)}))}),600)():n(I)}),[e]);return{advancedDataTypesState:t,subjectAdvancedDataType:o,setAdvancedDataTypesState:n,fetchAdvancedDataTypeValueCallback:r,fetchSubjectAdvancedDataType:e=>{const t=e.options.find((t=>"column_name"in t&&t.column_name===e.adhocFilter.subject||"optionName"in t&&t.optionName===e.adhocFilter.subject));t&&"advanced_data_type"in t?i(t.advanced_data_type):e.validHandler(!0)}}})(e.validHandler),A=(e,t)=>U?s(e,t)&&M.advancedDataTypeOperatorList.includes(e):s(e,t),z=()=>{const e=(()=>{var e;const t=Array.isArray(h)?h.filter((e=>u.includes(e))).length:0;return null!=(e=(null==u?void 0:u.length)-t)?e:0})(),t=(0,d.t)("%s option(s)",e);return e?t:""};let j=e.options;const{subject:P,operator:V,operatorId:K}=e.adhocFilter,B={ariaLabel:(0,d.t)("Select subject"),value:null!=P?P:void 0,onChange:e=>{m(void 0),i(e)},notFoundContent:(0,d.t)("No such column found. To filter on a metric, try the Custom SQL tab."),autoFocus:!P,placeholder:""};B.placeholder=e.adhocFilter.clause===k.N.Where?(0,d.t)("%s column(s)",j.length):(0,d.t)("To filter on a metric, use Custom SQL tab."),j=e.options.filter((e=>"column_name"in e&&e.column_name));const H={placeholder:(0,d.t)("%s operator(s)",(null!=(t=e.operators)?t:y.GS).filter((e=>A(e,P))).length),value:K,onChange:r,autoFocus:!!B.value&&!V,ariaLabel:(0,d.t)("Select operator")},W=!!B.value&&!!H.value,Y={allowClear:!0,allowNewOptions:!0,ariaLabel:(0,d.t)("Comparator option"),mode:y.qK.has(K)?"multiple":"single",loading:C,value:h,onChange:l,notFoundContent:(0,d.t)("Type a value here"),disabled:y.yi.includes(K),placeholder:z(),autoFocus:W},G=h&&h.length>0&&z(),Q=(0,E.v)({columnName:e.adhocFilter.subject,timeRange:e.adhocFilter.operator===y.d.TemporalRange?e.adhocFilter.comparator:void 0,datasource:e.datasource,onChange:c});(0,a.useEffect)((()=>{Q||(()=>{const{datasource:t}=e,n=e.adhocFilter.subject,a=e.adhocFilter.clause===k.N.Having;if(n&&t&&t.filter_select&&!a){const e=new AbortController,{signal:a}=e;C&&e.abort(),_(!0),b.Z.get({signal:a,endpoint:`/api/v1/datasource/${t.type}/${t.id}/column/${n}/values/`}).then((({json:e})=>{p(e.result.map((e=>({value:e,label:(0,S.lo)(e)})))),_(!1)})).catch((()=>{p([]),_(!1)}))}})()}),[e.adhocFilter.subject]),(0,a.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&L(e)}),[e.adhocFilter.subject]),(0,a.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&q(void 0===h?"":h,M,U)}),[h,U,q]),(0,a.useEffect)((()=>{(0,f.cr)(f.TT.EnableAdvancedDataTypes)&&m(e.adhocFilter.comparator)}),[e.adhocFilter.comparator]);const X=(0,R.tZ)(g.Ph,(0,o.Z)({css:e=>({marginTop:4*e.gridUnit,marginBottom:4*e.gridUnit}),options:j.map((e=>{return{value:"column_name"in e&&e.column_name||"optionName"in e&&e.optionName||"",label:"saved_metric_name"in e&&e.saved_metric_name||"column_name"in e&&e.column_name||"label"in e&&e.label,key:"id"in e&&e.id||"optionName"in e&&e.optionName||void 0,customLabel:(t=e,(0,R.tZ)(Z.Z,{option:t}))};var t}))},B)),J=(0,R.tZ)(a.Fragment,null,(0,R.tZ)(g.Ph,(0,o.Z)({css:e=>({marginBottom:4*e.gridUnit}),options:(null!=(n=e.operators)?n:y.GS).filter((e=>A(e,P))).map(((e,t)=>({value:e,label:y.LT[e].display,key:e,order:t})))},H)),y.qK.has(K)||u.length>0?(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType},(0,R.tZ)(O,(0,o.Z)({labelText:G,options:u},Y))):(0,R.tZ)(x.u,{title:M.errorMessage||M.parsedAdvancedDataType},(0,R.tZ)(N,{name:"filter-value",ref:e=>{e&&W&&e.focus()},onChange:e=>{const{value:t}=e.target;m(t),l(t)},value:h,placeholder:(0,d.t)("Filter value (case sensitive)"),disabled:y.yi.includes(K)})));return(0,R.tZ)(a.Fragment,null,X,null!=Q?Q:J)};var q=n(94670),L=n(33313),A=n(72201);const z={adhocFilter:r().instanceOf(h.Z).isRequired,onChange:r().func.isRequired,options:r().arrayOf(r().oneOfType([A.Z,r().shape({saved_metric_name:r().string.isRequired}),p.Z])).isRequired,height:r().number.isRequired},j=(0,l.iK)(g.Ph)`
  ${({theme:e})=>`\n    width: ${30*e.gridUnit}px;\n    marginRight: ${e.gridUnit}px;\n  `}
`;class P extends a.Component{constructor(e){super(e),this.onSqlExpressionChange=this.onSqlExpressionChange.bind(this),this.onSqlExpressionClauseChange=this.onSqlExpressionClauseChange.bind(this),this.handleAceEditorRef=this.handleAceEditorRef.bind(this)}componentDidUpdate(){this.aceEditorRef&&this.aceEditorRef.editor.resize()}onSqlExpressionClauseChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({clause:e,expressionType:k.p.Sql}))}onSqlExpressionChange(e){this.props.onChange(this.props.adhocFilter.duplicateWith({sqlExpression:e,expressionType:k.p.Sql}))}handleAceEditorRef(e){e&&(this.aceEditorRef=e)}render(){const{adhocFilter:e,height:t,options:n}=this.props,a=L.Z.concat(n.map((e=>e.column_name?{name:e.column_name,value:e.column_name,score:50,meta:"option"}:null)).filter(Boolean)),o=Object.values(k.N).map((e=>({label:e,value:e})));return(0,R.tZ)("span",null,(0,R.tZ)("div",{className:"filter-edit-clause-section"},(0,R.tZ)("div",null,(0,R.tZ)(j,{options:o,ariaLabel:(0,d.t)("Select column"),placeholder:(0,d.t)("choose WHERE or HAVING..."),value:e.clause,onChange:this.onSqlExpressionClauseChange})),(0,R.tZ)("span",{className:"filter-edit-clause-info"},(0,R.tZ)("strong",null,"WHERE")," ",(0,d.t)("Filters by columns"),(0,R.tZ)("br",null),(0,R.tZ)("strong",null,"HAVING")," ",(0,d.t)("Filters by metrics"))),(0,R.tZ)("div",{css:e=>({marginTop:4*e.gridUnit})},(0,R.tZ)(q.iO,{ref:this.handleAceEditorRef,keywords:a,height:t-130+"px",onChange:this.onSqlExpressionChange,width:"100%",showGutter:!1,value:e.sqlExpression||e.translateToSql(),editorProps:{$blockScrolling:!0},enableLiveAutocompletion:!0,className:"filter-sql-editor",wrapEnabled:!0})))}}P.propTypes=z;const V={adhocFilter:r().instanceOf(h.Z).isRequired,onChange:r().func.isRequired,onClose:r().func.isRequired,onResize:r().func.isRequired,options:r().arrayOf(r().oneOfType([A.Z,r().shape({saved_metric_name:r().string.isRequired}),p.Z])).isRequired,datasource:r().object,partitionColumn:r().string,theme:r().object,sections:r().arrayOf(r().string),operators:r().arrayOf(r().string),requireSave:r().bool},K=l.iK.i`
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`,B=l.iK.div`
  .adhoc-filter-edit-tabs > .nav-tabs {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;

    & > li > a {
      padding: ${({theme:e})=>e.gridUnit}px;
    }
  }

  #filter-edit-popover {
    max-width: none;
  }

  .filter-edit-clause-info {
    font-size: ${({theme:e})=>e.typography.sizes.xs}px;
  }

  .filter-edit-clause-section {
    display: flex;
    flex-direction: row;
    gap: ${({theme:e})=>5*e.gridUnit}px;
  }

  .adhoc-filter-simple-column-dropdown {
    margin-top: ${({theme:e})=>5*e.gridUnit}px;
  }
`,H=l.iK.div`
  margin-top: ${({theme:e})=>2*e.gridUnit}px;
`;class W extends a.Component{constructor(e){var t,n;super(e),this.onSave=this.onSave.bind(this),this.onDragDown=this.onDragDown.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onAdhocFilterChange=this.onAdhocFilterChange.bind(this),this.setSimpleTabIsValid=this.setSimpleTabIsValid.bind(this),this.adjustHeight=this.adjustHeight.bind(this),this.onTabChange=this.onTabChange.bind(this),this.state={adhocFilter:this.props.adhocFilter,width:y.kc,height:y.H7,activeKey:(null==(t=this.props)||null==(n=t.adhocFilter)?void 0:n.expressionType)||"SIMPLE",isSimpleTabValid:!0},this.popoverContentRef=a.createRef()}componentDidMount(){document.addEventListener("mouseup",this.onMouseUp)}componentWillUnmount(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("mousemove",this.onMouseMove)}onAdhocFilterChange(e){this.setState({adhocFilter:e})}setSimpleTabIsValid(e){this.setState({isSimpleTabValid:e})}onSave(){this.props.onChange(this.state.adhocFilter),this.props.onClose()}onDragDown(e){this.dragStartX=e.clientX,this.dragStartY=e.clientY,this.dragStartWidth=this.state.width,this.dragStartHeight=this.state.height,document.addEventListener("mousemove",this.onMouseMove)}onMouseMove(e){this.props.onResize(),this.setState({width:Math.max(this.dragStartWidth+(e.clientX-this.dragStartX),y.kc),height:Math.max(this.dragStartHeight+(e.clientY-this.dragStartY),y.H7)})}onMouseUp(){document.removeEventListener("mousemove",this.onMouseMove)}onTabChange(e){this.setState({activeKey:e})}adjustHeight(e){this.setState((t=>({height:t.height+e})))}render(){const{adhocFilter:e,options:t,onChange:n,onClose:a,onResize:i,datasource:r,partitionColumn:l,theme:p,operators:h,requireSave:m,...g}=this.props,{adhocFilter:v}=this.state,b=v.isValid(),f=m||!v.equals(e);return(0,R.tZ)(B,(0,o.Z)({id:"filter-edit-popover"},g,{ref:this.popoverContentRef}),(0,R.tZ)(u.ZP,{id:"adhoc-filter-edit-tabs",defaultActiveKey:v.expressionType,className:"adhoc-filter-edit-tabs",style:{minHeight:this.state.height,width:this.state.width},allowOverflow:!0,onChange:this.onTabChange},(0,R.tZ)(u.ZP.TabPane,{className:"adhoc-filter-edit-tab",key:k.p.Simple,tab:(0,d.t)("Simple")},(0,R.tZ)(c.Z,null,(0,R.tZ)(U,{operators:h,adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:t,datasource:r,onHeightChange:this.adjustHeight,partitionColumn:l,popoverRef:this.popoverContentRef.current,validHandler:this.setSimpleTabIsValid}))),(0,R.tZ)(u.ZP.TabPane,{className:"adhoc-filter-edit-tab",key:k.p.Sql,tab:(0,d.t)("Custom SQL")},(0,R.tZ)(c.Z,null,(0,R.tZ)(P,{adhocFilter:this.state.adhocFilter,onChange:this.onAdhocFilterChange,options:this.props.options,height:this.state.height,activeKey:this.state.activeKey})))),(0,R.tZ)(H,null,(0,R.tZ)(s.Z,{buttonSize:"small",onClick:this.props.onClose,cta:!0},(0,d.t)("Close")),(0,R.tZ)(s.Z,{disabled:!b||!this.state.isSimpleTabValid||!f,buttonStyle:"primary",buttonSize:"small",className:"m-r-5",onClick:this.onSave,cta:!0},(0,d.t)("Save")),(0,R.tZ)(K,{role:"button","aria-label":"Resize",tabIndex:0,onMouseDown:this.onDragDown,className:"fa fa-expand edit-popover-resize text-muted"})))}}W.propTypes=V;var Y=n(63325),G=n(27845);class Q extends a.PureComponent{constructor(e){super(e),this.onPopoverResize=this.onPopoverResize.bind(this),this.closePopover=this.closePopover.bind(this),this.togglePopover=this.togglePopover.bind(this),this.state={popoverVisible:!1}}onPopoverResize(){this.forceUpdate()}closePopover(){this.togglePopover(!1)}togglePopover(e){this.setState({popoverVisible:e})}render(){const{adhocFilter:e,isControlledComponent:t}=this.props,{visible:n,togglePopover:a,closePopover:o}=t?{visible:this.props.visible,togglePopover:this.props.togglePopover,closePopover:this.props.closePopover}:{visible:this.state.popoverVisible,togglePopover:this.togglePopover,closePopover:this.closePopover},i=(0,R.tZ)(Y.b,null,(0,R.tZ)(W,{adhocFilter:e,options:this.props.options,datasource:this.props.datasource,partitionColumn:this.props.partitionColumn,onResize:this.onPopoverResize,onClose:o,sections:this.props.sections,operators:this.props.operators,onChange:this.props.onFilterEdit,requireSave:this.props.requireSave}));return(0,R.tZ)(G.Z,{trigger:"click",content:i,defaultVisible:n,visible:n,onVisibleChange:a,destroyTooltipOnHide:!0},this.props.children)}}const X=Q},61641:(e,t,n)=>{var a,o;n.d(t,{N:()=>o,p:()=>a}),function(e){e.Simple="SIMPLE",e.Sql="SQL"}(a||(a={})),function(e){e.Having="HAVING",e.Where="WHERE"}(o||(o={}))},7848:(e,t,n)=>{n.d(t,{v:()=>m,w:()=>l});var a=n(67294),o=n(5364),i=n(1090),r=n(69856),s=n(61641);const l=e=>{const[t,n]=(0,a.useState)({});return(0,a.useEffect)((()=>{e.operator===r.d.TemporalRange&&e.expressionType===s.p.Simple||n({}),e.operator===r.d.TemporalRange&&e.comparator===o.vM&&n({actualTimeRange:`${e.subject} (${o.vM})`,title:o.vM}),e.operator===r.d.TemporalRange&&e.expressionType===s.p.Simple&&e.comparator!==o.vM&&t.title!==e.comparator&&(0,i.z1)(e.comparator,e.subject).then((({value:t,error:a})=>{n(a?{actualTimeRange:`${e.subject} (${e.comparator})`,title:a}:{actualTimeRange:null!=t?t:"",title:e.comparator})}))}),[e]),t};var d=n(61988),c=n(45211),u=n(74092),p=n(82342),h=n(11965);const m=({columnName:e,timeRange:t,datasource:n,onChange:o})=>(0,c.x)(e,n)?(0,h.tZ)(a.Fragment,null,(0,h.tZ)(p.Z,{label:(0,d.t)("Time Range")}),(0,h.tZ)(u.Z,{value:t,name:"time_range",onChange:t=>o(e,t),overlayStyle:"Modal"})):void 0},56565:(e,t,n)=>{n.d(t,{c:()=>s});var a=n(46306),o=n(69856),i=n(12515);const r={"==":"=","!=":"<>",">":">","<":"<",">=":">=","<=":"<=",IN:"IN","NOT IN":"NOT IN",LIKE:"LIKE",ILIKE:"ILIKE",REGEX:"REGEX","IS NOT NULL":"IS NOT NULL","IS NULL":"IS NULL","IS TRUE":"IS TRUE","IS FALSE":"IS FALSE","LATEST PARTITION":({datasource:e})=>`= '{{ presto.latest_partition('${e.schema}.${e.datasource_name}') }}'`},s=(e,{useSimple:t}={useSimple:!1})=>{if((0,a.Ki)(e)||t){const{subject:t,operator:n}=e,a="comparator"in e?e.comparator:void 0,s=n&&n===o.LT[o.d.LatestPartition].operation?r[n](e):r[n];return(0,i.CB)(t,s,a)}return(0,a.jz)(e)?e.sqlExpression:""}},33334:(e,t,n)=>{n.d(t,{EQ:()=>g,H$:()=>T,IG:()=>w,Ne:()=>f,SW:()=>_,__:()=>v,a7:()=>m,gM:()=>x,gu:()=>y,yj:()=>C,yz:()=>$});var a=n(73126),o=n(67294),i=n(22068),r=n(27034),s=n(51995),l=n(11965),d=n(61988),c=n(9882),u=n(58593),p=n(13322),h=n(99963);const m=s.iK.div`
  margin-bottom: ${({theme:e})=>e.gridUnit}px;
  :last-child {
    margin-bottom: 0;
  }
`,g=s.iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  height: ${({theme:e})=>6*e.gridUnit}px;
  background-color: ${({theme:e})=>e.colors.grayscale.light3};
  border-radius: 3px;
  cursor: ${({withCaret:e})=>e?"pointer":"default"};
`,v=s.iK.div`
  ${({theme:e})=>`\n    display: flex;\n    width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    align-items: center;\n    white-space: nowrap;\n    padding-left: ${e.gridUnit}px;\n    svg {\n      margin-right: ${e.gridUnit}px;\n    }\n    .type-label {\n      margin-right: ${2*e.gridUnit}px;\n      margin-left: ${e.gridUnit}px;\n      font-weight: ${e.typography.weights.normal};\n      width: auto;\n    }\n    .option-label {\n      display: inline;\n    }\n  `}
`,b=s.iK.span`
  overflow: hidden;
  text-overflow: ellipsis;
`,f=s.iK.div`
  height: 100%;
  border-left: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  margin-left: auto;
`,y=s.iK.div`
  height: 100%;
  width: ${({theme:e})=>6*e.gridUnit}px;
  border-right: solid 1px ${({theme:e})=>e.colors.grayscale.dark2}0C;
  cursor: pointer;
`,Z=(0,s.iK)(c.V)`
  margin: 0 ${({theme:e})=>e.gridUnit}px;
`,x=s.iK.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=s.iK.div`
  padding: ${({theme:e})=>e.gridUnit}px;
  border: solid 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
`,S=l.F4`
  0% {
    right: 100%;
  }
  50% {
    left: 4px;
  }
  90% {
    right: 4px;
  }
  100% {
    left: 100%;
  }
`,T=s.iK.div`
  ${({theme:e,isLoading:t,canDrop:n,isDragging:a,isOver:o})=>`\n  position: relative;\n  padding: ${e.gridUnit}px;\n  border: ${!t&&a?`dashed 1px ${n?e.colors.info.dark1:e.colors.error.dark1}`:`solid 1px ${t&&a?e.colors.warning.light1:e.colors.grayscale.light2}`};\n  border-radius: ${e.gridUnit}px;\n  &:before,\n  &:after {\n    content: ' ';\n    position: absolute;\n    border-radius: ${e.gridUnit}px;\n  }\n  &:before {\n    display: ${a||t?"block":"none"};\n    background-color: ${n?e.colors.primary.base:e.colors.error.light1};\n    z-index: ${e.zIndex.aboveDashboardCharts};\n    opacity: ${e.opacity.light};\n    top: 1px;\n    right: 1px;\n    bottom: 1px;\n    left: 1px;\n  }\n  &:after {\n    display: ${t||n&&o?"block":"none"};\n    background-color: ${t?e.colors.grayscale.light3:e.colors.primary.base};\n    z-index: ${e.zIndex.dropdown};\n    opacity: ${e.opacity.mediumLight};\n    top: ${-e.gridUnit}px;\n    right: ${-e.gridUnit}px;\n    bottom: ${-e.gridUnit}px;\n    left: ${-e.gridUnit}px;\n    cursor: ${t?"wait":"auto"};\n  }\n  `}

  &:before {
    ${({theme:e,isLoading:t})=>t&&l.iv`
        animation: ${S} 2s ease-in infinite;
        background: linear-gradient(currentColor 0 0) 0 100%/0% 3px no-repeat;
        background-size: 100% ${e.gridUnit/2}px;
        top: auto;
        right: ${e.gridUnit}px;
        left: ${e.gridUnit}px;
        bottom: -${e.gridUnit/2}px;
        height: ${e.gridUnit/2}px;
      `};
  }
`,_=s.iK.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({theme:e})=>6*e.gridUnit}px;
  padding-left: ${({theme:e})=>e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
  color: ${({theme:e})=>e.colors.grayscale.light1};
  border: dashed 1px ${({theme:e})=>e.colors.grayscale.light2};
  border-radius: ${({theme:e})=>e.gridUnit}px;
  cursor: ${({cancelHover:e})=>e?"inherit":"pointer"};

  :hover {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light4};
  }

  :active {
    background-color: ${({cancelHover:e,theme:t})=>e?"inherit":t.colors.grayscale.light3};
  }
`,w=s.iK.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>4*e.gridUnit}px;
  width: ${({theme:e})=>4*e.gridUnit}px;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.primary.dark1};
  border: none;
  border-radius: 2px;

  :disabled {
    cursor: not-allowed;
    background-color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,$=({label:e,savedMetric:t,adhocMetric:n,onRemove:c,onMoveLabel:x,onDropLabel:C,withCaret:S,isFunction:T,type:_,index:w,isExtra:$,datasourceWarningMessage:M,tooltipTitle:F,multi:I=!0,...E})=>{const D=(0,s.Fg)(),k=(0,o.useRef)(null),R=(0,o.useRef)(null),N=null==t?void 0:t.metric_name,[,O]=(0,i.L)({accept:_,drop(){I&&(null==C||C())},hover(e,t){var n;if(!I)return;if(!k.current)return;const{dragIndex:a}=e,o=w;if(a===o)return;const i=null==(n=k.current)?void 0:n.getBoundingClientRect(),r=(i.bottom-i.top)/2,s=t.getClientOffset(),l=null!=s&&s.y?(null==s?void 0:s.y)-i.top:0;a<o&&l<r||a>o&&l>r||(null==x||x(a,o),e.dragIndex=o)}}),[{isDragging:U},q]=(0,r.c)({item:{type:_,dragIndex:w,value:null!=t&&t.metric_name?t:n},collect:e=>({isDragging:e.isDragging()})});return q(O(k)),(0,l.tZ)(m,{ref:k},(0,l.tZ)(g,(0,a.Z)({withCaret:S},E),(0,l.tZ)(y,{role:"button",onClick:c},(0,l.tZ)(p.Z.XSmall,{iconColor:D.colors.grayscale.light1})),(0,l.tZ)(v,null,T&&(0,l.tZ)(p.Z.FieldDerived,null),(()=>{const n=!U&&"string"==typeof e&&F&&e&&F!==e||!U&&R&&R.current&&R.current.scrollWidth>R.current.clientWidth;return t&&N?(0,l.tZ)(h.B,{metric:t,labelRef:R,shouldShowTooltip:!U}):n?(0,l.tZ)(u.u,{title:F||e},(0,l.tZ)(b,{ref:R},e)):(0,l.tZ)(b,{ref:R},e)})()),(!!M||$)&&(0,l.tZ)(Z,{icon:"exclamation-triangle",placement:"top",bsStyle:"warning",tooltip:M||(0,d.t)("\n                This filter was inherited from the dashboard's context.\n                It won't be saved when saving the chart.\n              ")}),S&&(0,l.tZ)(f,null,(0,l.tZ)(p.Z.CaretRight,{iconColor:D.colors.grayscale.light1}))))}},85626:(e,t,n)=>{n.d(t,{Z:()=>v}),n(67294);var a=n(51995),o=n(42110),i=n(120),r=n(13433),s=n(50909),l=n(53459),d=n(49889),c=n(33743),u=n(22489),p=n(11965);const h=(0,a.iK)(s.qi)`
  && {
    margin: 0 0 ${({theme:e})=>e.gridUnit}px;
  }
`;o.Z.registerLanguage("markdown",l.Z),o.Z.registerLanguage("html",d.Z),o.Z.registerLanguage("sql",c.Z),o.Z.registerLanguage("json",u.Z);const m=a.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,g=(0,a.iK)(o.Z)`
  flex: 1;
`,v=e=>{const{sql:t,language:n="sql"}=e;return(0,p.tZ)(m,{key:t},(0,p.tZ)(r.Z,{text:t,shouldShowText:!1,copyNode:(0,p.tZ)(h,{buttonSize:"xsmall"},(0,p.tZ)("i",{className:"fa fa-clipboard"}))}),(0,p.tZ)(g,{language:n,style:i.Z},t))}},15423:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(67294),o=n(51995),i=n(55786),r=n(61988),s=n(38703),l=n(98286),d=n(52256),c=n(85626),u=n(11965);const p=o.iK.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`,h=e=>{const[t,n]=(0,a.useState)([]),[o,h]=(0,a.useState)(!1),[m,g]=(0,a.useState)(null);return(0,a.useEffect)((()=>{h(!0),(0,d.getChartDataRequest)({formData:e.latestQueryFormData,resultFormat:"json",resultType:"query"}).then((({json:e})=>{n((0,i.Z)(e.result)),h(!1),g(null)})).catch((e=>{(0,l.O$)(e).then((({error:t,message:n})=>{g(t||n||e.statusText||(0,r.t)("Sorry, An error occurred")),h(!1)}))}))}),[JSON.stringify(e.latestQueryFormData)]),o?(0,u.tZ)(s.Z,null):m?(0,u.tZ)("pre",null,m):(0,u.tZ)(p,null,t.map((e=>e.query?(0,u.tZ)(c.Z,{sql:e.query,language:e.language||void 0}):null)))}},40219:(e,t,n)=>{n.d(t,{BR:()=>s,LW:()=>u,nv:()=>c});var a=n(57557),o=n.n(a),i=n(31069);const r=["url_params"],s=e=>o()(e,r),l=(e,t)=>{let n="api/v1/explore/form_data";return e&&(n=n.concat(`/${e}`)),t&&(n=n.concat(`?tab_id=${t}`)),n},d=(e,t,n,a)=>{const o={datasource_id:e,datasource_type:t,form_data:JSON.stringify(s(n))};return a&&(o.chart_id=a),o},c=(e,t,n,a,o)=>i.Z.post({endpoint:l(void 0,o),jsonPayload:d(e,t,n,a)}).then((e=>e.json.key)),u=(e,t,n,a,o,r)=>i.Z.put({endpoint:l(n,r),jsonPayload:d(e,t,a,o)}).then((e=>e.json.message))},53579:(e,t,n)=>{n.d(t,{S:()=>p});var a=n(67294),o=n(51995),i=n(61988),r=n(11965),s=n(29487),l=n(67697),d=n(32871),c=n(42190),u=n(6412);const p=({dataset:e,datasetId:t})=>{const n=(0,o.Fg)(),[p,h]=(0,a.useState)(),[m,g]=(0,a.useState)(e?c.ni.Complete:c.ni.Loading);return(0,a.useEffect)((()=>{!e&&t&&(0,u.e)({endpoint:`/api/v1/dataset/${t}`}).then((({json:{result:e}})=>{h(e),g(c.ni.Complete)})).catch((()=>{g(c.ni.Error)}))}),[t,e]),{metadataBar:(0,a.useMemo)((()=>{const t=[],a=e||p;if(a){var o,u;const{changed_on_humanized:e,created_on_humanized:n,description:r,table_name:s,changed_by:l,created_by:c,owners:p}=a,h=(0,i.t)("Not available"),m=`${null!=(o=null==c?void 0:c.first_name)?o:""} ${null!=(u=null==c?void 0:c.last_name)?u:""}`.trim()||h,g=l?`${l.first_name} ${l.last_name}`:h,v=(null==p?void 0:p.length)>0?p.map((e=>`${e.first_name} ${e.last_name}`)):[h];t.push({type:d.p.Table,title:s}),t.push({type:d.p.LastModified,value:e,modifiedBy:g}),t.push({type:d.p.Owner,createdBy:m,owners:v,createdOn:n}),r&&t.push({type:d.p.Description,value:r})}return(0,r.tZ)("div",{css:r.iv`
          display: flex;
          margin-bottom: ${4*n.gridUnit}px;
        `},m===c.ni.Complete&&(0,r.tZ)(l.ZP,{items:t,tooltipPlacement:"bottom"}),m===c.ni.Error&&(0,r.tZ)(s.Z,{type:"error",message:(0,i.t)("There was an error loading the dataset metadata")}))}),[e,p,m,n.gridUnit]),status:m}}},21312:(e,t,n)=>{n.d(t,{x:()=>re,Z:()=>ce});var a,o,i=n(11965),r=n(73126),s=n(41609),l=n.n(s),d=n(67294),c=n(28216),u=n(75049),p=n(51995),h=n(93185),m=n(85716),g=n(61988),v=n(13322),b=n(12441),f=n(83862),y=n(87253),Z=n(54076),x=n(88694),C=n(17198),S=n(98286),T=n(39666),_=n(29487),w=n(98978),$=n(73684),M=n(9875),F=n(14114);!function(e){e.Dashboards="dashboards",e.Charts="charts"}(a||(a={})),function(e){e.Text="TEXT",e.PNG="PNG",e.CSV="CSV"}(o||(o={}));var I=n(34858),E=n(67317),D=n(74069),k=n(35932),R=n(87183),N=n(9433);const O=(0,p.iK)(D.default)`
  .ant-modal-body {
    padding: 0;
  }
`,U=p.iK.div`
  padding: ${({theme:e})=>`${3*e.gridUnit}px ${4*e.gridUnit}px ${2*e.gridUnit}px`};
  label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,q=p.iK.div`
  border-top: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  padding: ${({theme:e})=>`${4*e.gridUnit}px ${4*e.gridUnit}px ${6*e.gridUnit}px`};
  .ant-select {
    width: 100%;
  }
  .control-label {
    font-size: ${({theme:e})=>e.typography.sizes.s}px;
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }
`,L=p.iK.span`
  span {
    margin-right: ${({theme:e})=>2*e.gridUnit}px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
`,A=p.iK.div`
  margin-bottom: ${({theme:e})=>7*e.gridUnit}px;

  h4 {
    margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  }
`,z=(0,p.iK)(N.Bj)`
  margin-bottom: ${({theme:e})=>3*e.gridUnit}px;
  width: ${({theme:e})=>120*e.gridUnit}px;
`,j=p.iK.p`
  color: ${({theme:e})=>e.colors.error.base};
`,P=i.iv`
  margin-bottom: 0;
`,V=(0,p.iK)(k.Z)`
  width: ${({theme:e})=>40*e.gridUnit}px;
`,K=e=>i.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`,B=p.iK.div`
  margin: ${({theme:e})=>8*e.gridUnit}px 0
    ${({theme:e})=>4*e.gridUnit}px;
`,H=(0,p.iK)(R.Y)`
  display: block;
  line-height: ${({theme:e})=>8*e.gridUnit}px;
`,W=(0,p.iK)(R.Y.Group)`
  margin-left: ${({theme:e})=>.5*e.gridUnit}px;
`,Y=["pivot_table_v2","table","paired_ttest"],G={crontab:"0 12 * * 1"},Q={},X=(0,F.ZP)((function({onHide:e,show:t=!1,dashboardId:n,chart:a,userId:r,userEmail:s,creationMethod:l,dashboardName:u,chartName:p}){var h;const m=null==a||null==(h=a.sliceFormData)?void 0:h.viz_type,b=!!a,f=b&&m&&Y.includes(m),y=f?o.Text:o.PNG,Z=u||p,x=(0,d.useMemo)((()=>({...G,name:Z?(0,g.t)("Weekly Report for %s",Z):(0,g.t)("Weekly Report")})),[Z]),C=(0,d.useCallback)(((e,t)=>"reset"===t?x:{...e,...t}),[x]),[F,D]=(0,d.useReducer)(C,x),[k,R]=(0,d.useState)(),N=(0,c.I0)(),X=(0,c.v9)((e=>{const t=n?re.Dashboards:re.Charts;return(0,I._l)(e,t,n||(null==a?void 0:a.id))||Q})),J=X&&Object.keys(X).length;(0,d.useEffect)((()=>{D(J?X:"reset")}),[J,X]);const ee=(0,i.tZ)(L,null,(0,i.tZ)(v.Z.Calendar,null),(0,i.tZ)("span",{className:"text"},J?(0,g.t)("Edit email report"):(0,g.t)("Schedule a new email report"))),te=(0,i.tZ)(d.Fragment,null,(0,i.tZ)(V,{key:"back",onClick:e},(0,g.t)("Cancel")),(0,i.tZ)(V,{key:"submit",buttonStyle:"primary",onClick:async()=>{const t={type:"Report",active:!0,force_screenshot:!1,custom_width:F.custom_width,creation_method:l,dashboard:n,chart:null==a?void 0:a.id,owners:[r],recipients:[{recipient_config_json:{target:s},type:"Email"}],name:F.name,description:F.description,crontab:F.crontab,report_format:F.report_format||y,timezone:F.timezone};D({isSubmitting:!0,error:void 0});try{J?await N((0,T.Me)(F.id,t)):await N((0,T.cq)(t)),e()}catch(e){const{error:t}=await(0,S.O$)(e);D({error:t})}D({isSubmitting:!1})},disabled:!F.name,loading:F.isSubmitting},J?(0,g.t)("Save"):(0,g.t)("Add"))),ne=(0,i.tZ)(d.Fragment,null,(0,i.tZ)(B,null,(0,i.tZ)("h4",null,(0,g.t)("Message content"))),(0,i.tZ)("div",{className:"inline-container"},(0,i.tZ)(W,{onChange:e=>{D({report_format:e.target.value})},value:F.report_format||y},f&&(0,i.tZ)(H,{value:o.Text},(0,g.t)("Text embedded in email")),(0,i.tZ)(H,{value:o.PNG},(0,g.t)("Image (PNG) embedded in email")),(0,i.tZ)(H,{value:o.CSV},(0,g.t)("Formatted CSV attached in email"))))),ae=(0,i.tZ)(E.j5,null,(0,i.tZ)("div",{className:"control-label",css:K},(0,g.t)("Screenshot width")),(0,i.tZ)("div",{className:"input-container"},(0,i.tZ)(M.II,{type:"number",name:"custom_width",value:(null==F?void 0:F.custom_width)||"",placeholder:(0,g.t)("Input custom width in pixels"),onChange:e=>{D({custom_width:parseInt(e.target.value,10)||null})}})));return(0,i.tZ)(O,{show:t,onHide:e,title:ee,footer:te,width:"432",centered:!0},(0,i.tZ)(U,null,(0,i.tZ)($.Z,{id:"name",name:"name",value:F.name||"",placeholder:x.name,required:!0,validationMethods:{onChange:({target:e})=>D({name:e.value})},label:(0,g.t)("Report Name")}),(0,i.tZ)($.Z,{id:"description",name:"description",value:(null==F?void 0:F.description)||"",validationMethods:{onChange:({target:e})=>{D({description:e.value})}},label:(0,g.t)("Description"),placeholder:(0,g.t)("Include a description that will be sent with your report"),css:P})),(0,i.tZ)(q,null,(0,i.tZ)(A,null,(0,i.tZ)("h4",{css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0;
`)(e)},(0,g.t)("Schedule")),(0,i.tZ)("p",null,(0,g.t)("A screenshot of the dashboard will be sent to your email at"))),(0,i.tZ)(z,{clearButton:!1,value:F.crontab||"0 12 * * 1",setValue:e=>{D({crontab:e})},onError:R}),(0,i.tZ)(j,null,k),(0,i.tZ)("div",{className:"control-label",css:e=>(e=>i.iv`
  margin: ${3*e.gridUnit}px 0 ${2*e.gridUnit}px;
`)(e)},(0,g.t)("Timezone")),(0,i.tZ)(w.Z,{timezone:F.timezone,onTimezoneChange:e=>{D({timezone:e})}}),b&&ne,(!b||!f)&&ae),F.error&&(0,i.tZ)(_.Z,{type:"error",css:e=>(e=>i.iv`
  border: ${e.colors.error.base} 1px solid;
  padding: ${4*e.gridUnit}px;
  margin: ${4*e.gridUnit}px;
  margin-top: 0;
  color: ${e.colors.error.dark2};
  .ant-alert-message {
    font-size: ${e.typography.sizes.m}px;
    font-weight: bold;
  }
  .ant-alert-description {
    font-size: ${e.typography.sizes.m}px;
    line-height: ${4*e.gridUnit}px;
    .ant-alert-icon {
      margin-right: ${2.5*e.gridUnit}px;
      font-size: ${e.typography.sizes.l}px;
      position: relative;
      top: ${e.gridUnit/4}px;
    }
  }
`)(e),message:J?(0,g.t)("Failed to update report"):(0,g.t)("Failed to create report"),description:F.error}))}));var J=n(96022);const ee=(0,u.I)(),te=e=>i.iv`
  color: ${e.colors.error.base};
`,ne=e=>i.iv`
  & .ant-menu-item {
    padding: 5px 12px;
    margin-top: 0px;
    margin-bottom: 4px;
    :hover {
      color: ${e.colors.grayscale.dark1};
    }
  }
  :hover {
    background-color: ${e.colors.secondary.light5};
  }
`,ae=e=>i.iv`
  &:hover {
    color: ${e.colors.grayscale.dark1};
    background-color: ${e.colors.secondary.light5};
  }
`,oe=p.iK.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  > *:first-child {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,ie=ee.get("report-modal.dropdown.item.icon");var re;!function(e){e.Charts="charts",e.Dashboards="dashboards"}(re||(re={}));const se={};var le={name:"1e1ncky",styles:"border:none"},de={name:"833hqy",styles:"width:200px"};function ce({dashboardId:e,chart:t,useTextMenu:n=!1,setShowReportSubMenu:a,setIsDropdownVisible:o,isDropdownVisible:s,...u}){const S=(0,c.I0)(),_=(0,c.v9)((n=>{const a=e?re.Dashboards:re.Charts;return(0,I._l)(n,a,e||(null==t?void 0:t.id))||se})),w=(null==_?void 0:_.active)||!1,$=(0,c.v9)((e=>e.user)),M=()=>!!(0,h.cr)(h.TT.AlertReports)&&(!(null==$||!$.userId)&&(!!(e||null!=t&&t.id)&&Object.keys($.roles||[]).map((e=>$.roles[e].filter((e=>"menu_access"===e[0]&&"Manage"===e[1])))).some((e=>e.length>0)))),[F,E]=(0,d.useState)(null),D=(0,p.Fg)(),k=(0,m.D)(e),[R,N]=(0,d.useState)(!1),O=async(e,t)=>{null!=e&&e.id&&S((0,T.M)(e,t))},U=M()&&!!(e&&k!==e||null!=t&&t.id);(0,d.useEffect)((()=>{U&&S((0,T.Aw)({userId:$.userId,filterField:e?"dashboard_id":"chart_id",creationMethod:e?"dashboards":"charts",resourceId:e||(null==t?void 0:t.id)}))}),[]);const q=_&&a&&M();(0,d.useEffect)((()=>{q?a(!0):!_&&a&&a(!1)}),[_]);const L=()=>{o&&(o(!1),N(!0))};return(0,i.tZ)(d.Fragment,null,M()&&(0,i.tZ)(d.Fragment,null,(0,i.tZ)(X,{userId:$.userId,show:R,onHide:()=>N(!1),userEmail:$.email,dashboardId:e,chart:t,creationMethod:e?re.Dashboards:re.Charts}),n?l()(_)?(0,i.tZ)(f.Menu,(0,r.Z)({selectable:!1},u,{css:ne}),(0,i.tZ)(f.Menu.Item,{onClick:L},ie?(0,i.tZ)(oe,null,(0,i.tZ)("div",null,(0,g.t)("Set up an email report")),(0,i.tZ)(ie,null)):(0,g.t)("Set up an email report")),(0,i.tZ)(f.Menu.Divider,null)):s&&(0,i.tZ)(f.Menu,{selectable:!1,css:le},(0,i.tZ)(f.Menu.Item,{css:ae,onClick:()=>O(_,!w)},(0,i.tZ)(J.ZN,null,(0,i.tZ)(y.ZP,{checked:w,onChange:Z.EI}),(0,g.t)("Email reports active"))),(0,i.tZ)(f.Menu.Item,{css:ae,onClick:L},(0,g.t)("Edit email report")),(0,i.tZ)(f.Menu.Item,{css:ae,onClick:()=>{o&&(o(!1),E(_))}},(0,g.t)("Delete email report"))):l()(_)?(0,i.tZ)("span",{role:"button",title:(0,g.t)("Schedule email report"),tabIndex:0,className:"action-button action-schedule-report",onClick:()=>N(!0)},(0,i.tZ)(v.Z.Calendar,null)):(0,i.tZ)(d.Fragment,null,(0,i.tZ)(x.$i,{overlay:(0,i.tZ)(f.Menu,{selectable:!1,css:de},(0,i.tZ)(f.Menu.Item,null,(0,g.t)("Email reports active"),(0,i.tZ)(b.r,{checked:w,onClick:e=>O(_,e),size:"small",css:(0,i.iv)({marginLeft:2*D.gridUnit},"","")})),(0,i.tZ)(f.Menu.Item,{onClick:()=>N(!0)},(0,g.t)("Edit email report")),(0,i.tZ)(f.Menu.Item,{onClick:()=>E(_),css:te},(0,g.t)("Delete email report"))),overlayStyle:{zIndex:99,animationDuration:"0s"},trigger:["click"],getPopupContainer:e=>e.closest(".action-button")},(0,i.tZ)("span",{role:"button",className:"action-button action-schedule-report",tabIndex:0},(0,i.tZ)(v.Z.Calendar,null)))),F&&(0,i.tZ)(C.Z,{description:(0,g.t)("This action will permanently delete %s.",null==F?void 0:F.name),onConfirm:()=>{F&&(async e=>{await S((0,T.MZ)(e)),E(null)})(F)},onHide:()=>E(null),open:!0,title:(0,g.t)("Delete Report?")})))}},6954:(e,t,n)=>{n.d(t,{z:()=>s});var a=n(67294),o=n(14670),i=n.n(o);const r=new(n(11133).g0)("tab_id_channel");function s(){const[e,t]=(0,a.useState)();return(0,a.useEffect)((()=>{if(!function(){try{return window.localStorage&&window.sessionStorage}catch(e){return!1}}())return void(e||t(i().generate()));const n=()=>{let e;try{e=window.localStorage.getItem("last_tab_id")}catch(e){}const n=String(e?Number.parseInt(e,10)+1:1);try{window.sessionStorage.setItem("tab_id",n),window.localStorage.setItem("last_tab_id",n)}catch(e){}t(n)};let a;try{a=window.sessionStorage.getItem("tab_id")}catch(e){}a?(r.postMessage({type:"REQUESTING_TAB_ID",tabId:a}),t(a)):n(),r.onmessage=t=>{if(t.tabId===e)if("REQUESTING_TAB_ID"===t.type){const e={type:"TAB_ID_DENIED",tabId:t.tabId};r.postMessage(e)}else"TAB_ID_DENIED"===t.type&&n()}}),[e]),e}},6412:(e,t,n)=>{n.d(t,{e:()=>r,f:()=>i});var a=n(31069),o=n(65108);const i=new Map,r=(0,o.g)(a.Z.get,i,(({endpoint:e})=>e||""))},56727:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(21804),o=n.n(a),i=n(46926),r=n.n(i),s=n(61988),l=n(51995),d=n(72570);const c=(e,t=new Date)=>`${o()(e)}-${t.toISOString().replace(/[: ]/g,"-")}`;function u(e,t,n=!1){return a=>{const o=n?document.querySelector(e):a.currentTarget.closest(e);return o?r().toJpeg(o,{bgcolor:l.K6.colors.grayscale.light4,filter:e=>"string"!=typeof e.className||"mapboxgl-control-container"!==e.className&&!e.className.includes("header-controls")}).then((e=>{const n=document.createElement("a");n.download=`${c(t)}.jpg`,n.href=e,n.click()})).catch((e=>{console.error("Creating image failed",e)})):(0,d.Dz)((0,s.t)("Image download failed, please refresh and try again."))}}},75701:(e,t,n)=>{n.d(t,{J:()=>r});var a=n(61988);const o=(0,a.t)("Create chart"),i=(0,a.t)("Update chart"),r=e=>(0,a.t)("Select values in highlighted field(s) in the control panel. Then run the query by clicking on the %s button.",`"${e?o:i}"`)},99232:(e,t,n)=>{n.d(t,{f:()=>s});var a=n(72813),o=n(61641),i=n(69856),r=n(56565);const s=(e,t=o.N.Where)=>{let n;var s;return n=(0,a.GA)(e.col)?{expressionType:"SQL",clause:t,sqlExpression:(0,r.c)({expressionType:o.p.Simple,subject:`(${e.col.sqlExpression})`,operator:e.op,comparator:"val"in e?e.val:void 0})}:{expressionType:"SIMPLE",clause:t,operator:e.op,operatorId:null==(s=Object.entries(i.LT).find((t=>t[1].operation===e.op)))?void 0:s[0],subject:e.col,comparator:"val"in e?e.val:void 0},e.isExtra&&Object.assign(n,{isExtra:!0,filterOptionName:`filter_${Math.random().toString(36).substring(2,15)}_${Math.random().toString(36).substring(2,15)}`}),n}}}]);
//# sourceMappingURL=7be9d6c5b5ea2f0f93c5.chunk.js.map