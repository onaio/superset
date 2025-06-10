"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[7001],{81788:(e,t,a)=>{a.d(t,{B8:()=>d,TZ:()=>o,mf:()=>l,u7:()=>r});var s=a(31069),n=a(68492);const i=(e,t,a)=>{let s=`api/v1/dashboard/${e}/filter_state`;return t&&(s=s.concat(`/${t}`)),a&&(s=s.concat(`?tab_id=${a}`)),s},o=(e,t,a,o)=>s.Z.put({endpoint:i(e,a,o),jsonPayload:{value:t}}).then((e=>e.json.message)).catch((e=>(n.Z.error(e),null))),r=(e,t,a)=>s.Z.post({endpoint:i(e,void 0,a),jsonPayload:{value:t}}).then((e=>e.json.key)).catch((e=>(n.Z.error(e),null))),d=(e,t)=>s.Z.get({endpoint:i(e,t)}).then((({json:e})=>JSON.parse(e.value))).catch((e=>(n.Z.error(e),null))),l=e=>s.Z.get({endpoint:`/api/v1/dashboard/permalink/${e}`}).then((({json:e})=>e)).catch((e=>(n.Z.error(e),null)))},57001:(e,t,a)=>{a.r(t),a.d(t,{DashboardPage:()=>ie,DashboardPageIdContext:()=>ae,default:()=>oe});var s=a(67294),n=a(11965),i=a(16550),o=a(51995),r=a(78161),d=a(28062),l=a(61988),c=a(28216),u=a(14114),p=a(38703),h=a(67417),m=a(4305),g=a(50810),f=a(14505),v=a(61337),b=a(27600),y=a(23525),w=a(9467),E=a(81788),x=a(14890),S=a(45697),D=a.n(S),C=a(93185),_=a(14278),j=a(20292),$=a(81255);function F(e){return Object.values(e).reduce(((e,t)=>(t&&t.type===$.dW&&t.meta&&t.meta.chartId&&e.push(t.meta.chartId),e)),[])}var I=a(2275),O=a(3741),U=a(99543),R=a(56967);const T=[$.dW,$.xh,$.t];function Z(e){return!Object.values(e).some((({type:e})=>e&&T.includes(e)))}const k={actions:D().shape({addSliceToDashboard:D().func.isRequired,removeSliceFromDashboard:D().func.isRequired,triggerQuery:D().func.isRequired,logEvent:D().func.isRequired,clearDataMaskState:D().func.isRequired}).isRequired,dashboardInfo:I.$X.isRequired,dashboardState:I.DZ.isRequired,slices:D().objectOf(I.Rw).isRequired,activeFilters:D().object.isRequired,chartConfiguration:D().object,datasources:D().object.isRequired,ownDataCharts:D().object.isRequired,layout:D().object.isRequired,impressionId:D().string.isRequired,timeout:D().number,userId:D().string};class q extends s.PureComponent{static onBeforeUnload(e){e?window.addEventListener("beforeunload",q.unload):window.removeEventListener("beforeunload",q.unload)}static unload(){const e=(0,l.t)("You have unsaved changes.");return window.event.returnValue=e,e}constructor(e){var t,a;super(e),this.appliedFilters=null!=(t=e.activeFilters)?t:{},this.appliedOwnDataCharts=null!=(a=e.ownDataCharts)?a:{},this.onVisibilityChange=this.onVisibilityChange.bind(this)}componentDidMount(){const e=(0,j.Z)(),{dashboardState:t,layout:a}=this.props,s={is_soft_navigation:O.Yd.timeOriginOffset>0,is_edit_mode:t.editMode,mount_duration:O.Yd.getTimestamp(),is_empty:Z(a),is_published:t.isPublished,bootstrap_data_length:e.length},n=(0,R.Z)();n&&(s.target_id=n),this.props.actions.logEvent(O.Wl,s),"hidden"===document.visibilityState&&(this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()}),window.addEventListener("visibilitychange",this.onVisibilityChange),this.applyCharts()}componentDidUpdate(){this.applyCharts()}UNSAFE_componentWillReceiveProps(e){const t=F(this.props.layout),a=F(e.layout);this.props.dashboardInfo.id===e.dashboardInfo.id&&(t.length<a.length?a.filter((e=>-1===t.indexOf(e))).forEach((t=>{return this.props.actions.addSliceToDashboard(t,(a=e.layout,s=t,Object.values(a).find((e=>e&&e.type===$.dW&&e.meta&&e.meta.chartId===s))));var a,s})):t.length>a.length&&t.filter((e=>-1===a.indexOf(e))).forEach((e=>this.props.actions.removeSliceFromDashboard(e))))}applyCharts(){const{hasUnsavedChanges:e,editMode:t}=this.props.dashboardState,{appliedFilters:a,appliedOwnDataCharts:s}=this,{activeFilters:n,ownDataCharts:i,chartConfiguration:o}=this.props;(0,C.cr)(C.TT.DashboardCrossFilters)&&!o||(t||(0,U.JB)(s,i,{ignoreUndefined:!0})&&(0,U.JB)(a,n,{ignoreUndefined:!0})||this.applyFilters(),e?q.onBeforeUnload(!0):q.onBeforeUnload(!1))}componentWillUnmount(){window.removeEventListener("visibilitychange",this.onVisibilityChange),this.props.actions.clearDataMaskState()}onVisibilityChange(){if("hidden"===document.visibilityState)this.visibilityEventData={start_offset:O.Yd.getTimestamp(),ts:(new Date).getTime()};else if("visible"===document.visibilityState){const e=this.visibilityEventData.start_offset;this.props.actions.logEvent(O.Ev,{...this.visibilityEventData,duration:O.Yd.getTimestamp()-e})}}applyFilters(){const{appliedFilters:e}=this,{activeFilters:t,ownDataCharts:a}=this.props,s=Object.keys(t),n=Object.keys(e),i=new Set(s.concat(n)),o=((e,t)=>{const a=Object.keys(e),s=Object.keys(t),n=(i=a,o=s,[...i.filter((e=>!o.includes(e))),...o.filter((e=>!i.includes(e)))]).filter((a=>e[a]||t[a]));var i,o;return new Set([...a,...s]).forEach((a=>{(0,U.JB)(e[a],t[a])||n.push(a)})),[...new Set(n)]})(a,this.appliedOwnDataCharts);[...i].forEach((a=>{if(!s.includes(a)&&n.includes(a))o.push(...e[a].scope);else if(n.includes(a)){if((0,U.JB)(e[a].values,t[a].values,{ignoreUndefined:!0})||o.push(...t[a].scope),!(0,U.JB)(e[a].scope,t[a].scope)){const s=(t[a].scope||[]).concat(e[a].scope||[]);o.push(...s)}}else o.push(...t[a].scope)})),this.refreshCharts([...new Set(o)]),this.appliedFilters=t,this.appliedOwnDataCharts=a}refreshCharts(e){e.forEach((e=>{this.props.actions.triggerQuery(!0,e)}))}render(){return this.context.loading?(0,n.tZ)(p.Z,null):this.props.children}}q.contextType=_.Zn,q.propTypes=k,q.defaultProps={timeout:60,userId:""};const P=q;var L=a(52256),M=a(97381),B=a(43399),J=a(87915),Y=a(74599);const N=(0,c.$j)((function(e){var t,a,s,n;const{datasources:i,sliceEntities:o,dataMask:r,dashboardInfo:d,dashboardState:l,dashboardLayout:c,impressionId:u,nativeFilters:p}=e;return{timeout:null==(t=d.common)||null==(a=t.conf)?void 0:a.SUPERSET_WEBSERVER_TIMEOUT,userId:d.userId,dashboardInfo:d,dashboardState:l,datasources:i,activeFilters:{...(0,B.De)(),...(0,J.g)({chartConfiguration:null==(s=d.metadata)?void 0:s.chart_configuration,nativeFilters:p.filters,dataMask:r,allSliceIds:l.sliceIds})},chartConfiguration:null==(n=d.metadata)?void 0:n.chart_configuration,ownDataCharts:(0,J.U)(r,"ownState"),slices:o.slices,layout:c.present,impressionId:u}}),(function(e){return{actions:(0,x.DE)({setDatasources:g.Fy,clearDataMaskState:Y.sh,addSliceToDashboard:w.Pi,removeSliceFromDashboard:w.rL,triggerQuery:L.triggerQuery,logEvent:M.logEvent},e)}}))(P);var V=a(14670),Q=a.n(V);const z=e=>n.iv`
  body {
    h1 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xxl}px;
      letter-spacing: -0.2px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${3*e.gridUnit}px;
    }

    h2 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.xl}px;
      margin-top: ${3*e.gridUnit}px;
      margin-bottom: ${2*e.gridUnit}px;
    }

    h3,
    h4,
    h5,
    h6 {
      font-weight: ${e.typography.weights.bold};
      line-height: 1.4;
      font-size: ${e.typography.sizes.l}px;
      letter-spacing: 0.2px;
      margin-top: ${2*e.gridUnit}px;
      margin-bottom: ${e.gridUnit}px;
    }
  }
`,W=e=>n.iv`
  .filter-card-popover {
    width: 240px;
    padding: 0;
    border-radius: 4px;

    &.ant-popover-placement-bottom {
      padding-top: ${e.gridUnit}px;
    }

    &.ant-popover-placement-left {
      padding-right: ${3*e.gridUnit}px;
    }

    .ant-popover-inner {
      box-shadow: 0 0 8px rgb(0 0 0 / 10%);
    }

    .ant-popover-inner-content {
      padding: ${4*e.gridUnit}px;
    }

    .ant-popover-arrow {
      display: none;
    }
  }

  .filter-card-tooltip {
    &.ant-tooltip-placement-bottom {
      padding-top: 0;
      & .ant-tooltip-arrow {
        top: -13px;
      }
    }
  }
`,K=e=>n.iv`
  .ant-dropdown-menu.chart-context-menu {
    min-width: ${43*e.gridUnit}px;
  }
  .ant-dropdown-menu-submenu.chart-context-submenu {
    max-width: ${60*e.gridUnit}px;
    min-width: ${40*e.gridUnit}px;
  }
`;var A=a(78718),X=a.n(A);const H={},G=()=>{const e=(0,v.rV)(v.dR.DashboardExploreContext,{});return Object.fromEntries(Object.entries(e).filter((([,e])=>!e.isRedundant)))},ee=(e,t)=>{const a=G();(0,v.LS)(v.dR.DashboardExploreContext,{...a,[e]:t})},te=({dashboardPageId:e})=>{const t=(0,c.v9)((({dashboardInfo:t,dashboardState:a,nativeFilters:s,dataMask:n})=>{var i,o,r;return{labelColors:(null==(i=t.metadata)?void 0:i.label_colors)||H,sharedLabelColors:(null==(o=t.metadata)?void 0:o.shared_label_colors)||H,colorScheme:null==a?void 0:a.colorScheme,chartConfiguration:(null==(r=t.metadata)?void 0:r.chart_configuration)||H,nativeFilters:Object.entries(s.filters).reduce(((e,[t,a])=>({...e,[t]:X()(a,["chartsInScope"])})),{}),dataMask:n,dashboardId:t.id,filterBoxFilters:(0,B.De)(),dashboardPageId:e}}),c.wU);return(0,s.useEffect)((()=>(ee(e,t),()=>{ee(e,{...t,isRedundant:!0})})),[t,e]),null},ae=s.createContext(""),se=s.lazy((()=>Promise.all([a.e(1216),a.e(8924),a.e(6658),a.e(1323),a.e(7802),a.e(876),a.e(981),a.e(9484),a.e(8109),a.e(3143),a.e(9820),a.e(3197),a.e(5331),a.e(7317),a.e(1090),a.e(9818),a.e(868),a.e(1006),a.e(4717),a.e(452)]).then(a.bind(a,34899)))),ne=document.title,ie=({idOrSlug:e})=>{const t=(0,o.Fg)(),a=(0,c.I0)(),x=(0,i.k6)(),S=(0,s.useMemo)((()=>Q().generate()),[]),D=(0,c.v9)((({dashboardInfo:e})=>e&&Object.keys(e).length>0)),{addDangerToast:C}=(0,u.e1)(),{result:_,error:j}=(0,h.QU)(e),{result:$,error:F}=(0,h.Es)(e),{result:I,error:O,status:U}=(0,h.JL)(e),R=(0,s.useRef)(!1),T=j||F,Z=Boolean(_&&$),{dashboard_title:k,css:q,metadata:P,id:L=0}=_||{};if((0,s.useEffect)((()=>{const e=()=>{const e=G();(0,v.LS)(v.dR.DashboardExploreContext,{...e,[S]:{...e[S],isRedundant:!0}})};return window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}}),[S]),(0,s.useEffect)((()=>{a((0,w.sL)(U))}),[a,U]),(0,s.useEffect)((()=>{L&&async function(){const e=(0,y.eY)(b.KD.permalinkKey),t=(0,y.eY)(b.KD.nativeFiltersKey),s=(0,y.eY)(b.KD.nativeFilters);let n,i=t||{};if(e){const t=await(0,E.mf)(e);t&&({dataMask:i,activeTabs:n}=t.state)}else t&&(i=await(0,E.B8)(L,t));s&&(i=s),Z&&(R.current||(R.current=!0),a((0,m.Y)({history:x,dashboard:_,charts:$,activeTabs:n,dataMask:i})))}()}),[Z]),(0,s.useEffect)((()=>(k&&(document.title=k),()=>{document.title=ne})),[k]),(0,s.useEffect)((()=>"string"==typeof q?(0,f.Z)(q):()=>{}),[q]),(0,s.useEffect)((()=>{const e=(0,r.ZP)();return e.source=r.Ag.Dashboard,()=>{d.getNamespace(null==P?void 0:P.color_namespace).resetColors(),e.clear()}}),[null==P?void 0:P.color_namespace]),(0,s.useEffect)((()=>{O?C((0,l.t)("Error loading chart datasources. Filters may not work correctly.")):a((0,g.Fy)(I))}),[C,I,O,a]),T)throw T;return Z&&D?(0,n.tZ)(s.Fragment,null,(0,n.tZ)(n.xB,{styles:[W(t),z(t),K(t),"",""]}),(0,n.tZ)(te,{dashboardPageId:S}),(0,n.tZ)(ae.Provider,{value:S},(0,n.tZ)(N,null,(0,n.tZ)(se,null)))):(0,n.tZ)(p.Z,null)},oe=ie},87915:(e,t,a)=>{a.d(t,{U:()=>s,g:()=>n});const s=(e,t)=>Object.values(e).filter((e=>e[t])).reduce(((e,a)=>({...e,[a.id]:t?a[t]:a})),{}),n=({chartConfiguration:e,nativeFilters:t,dataMask:a,allSliceIds:s})=>{const n={};return Object.values(a).forEach((({id:a,extraFormData:i})=>{var o,r,d,l,c,u;const p=null!=(o=null!=(r=null!=(d=null==t||null==(l=t[a])?void 0:l.chartsInScope)?d:null==e||null==(c=e[a])||null==(u=c.crossFilters)?void 0:u.chartsInScope)?r:s)?o:[];n[a]={scope:p,values:i}})),n}},14505:(e,t,a)=>{function s(e){const t="CssEditor-css",a=document.head||document.getElementsByTagName("head")[0],s=document.querySelector(`.${t}`)||function(e){const t=document.createElement("style");return t.className=e,t.type="text/css",t}(t);return"styleSheet"in s?s.styleSheet.cssText=e:s.innerHTML=e,a.appendChild(s),function(){s.remove()}}a.d(t,{Z:()=>s})},67417:(e,t,a)=>{a.d(t,{schemaEndpoints:()=>h.Kt,CN:()=>s.CN,tableEndpoints:()=>p.QD,hb:()=>d,QU:()=>l,Es:()=>c,JL:()=>u,L8:()=>g,Xx:()=>h.Xx,SJ:()=>p.SJ,uY:()=>p.uY,zA:()=>p.zA});var s=a(45673),n=a(42190),i=a(15926);function o({owners:e}){return e?e.map((e=>`${e.first_name} ${e.last_name}`)):null}const r=a.n(i)().encode({columns:["owners.first_name","owners.last_name"],keys:["none"]});function d(e){return(0,n.l6)((0,n.s_)(`/api/v1/chart/${e}?q=${r}`),o)}const l=e=>(0,n.l6)((0,n.s_)(`/api/v1/dashboard/${e}`),(e=>({...e,metadata:e.json_metadata&&JSON.parse(e.json_metadata)||{},position_data:e.position_json&&JSON.parse(e.position_json),owners:e.owners||[]}))),c=e=>(0,n.s_)(`/api/v1/dashboard/${e}/charts`),u=e=>(0,n.s_)(`/api/v1/dashboard/${e}/datasets`);var p=a(23936),h=a(69279);const m=a(10362).h.injectEndpoints({endpoints:e=>({queryValidations:e.query({providesTags:["QueryValidations"],query:({dbId:e,schema:t,sql:a,templateParams:s})=>{let n=s;try{n=JSON.parse(s||"")}catch(e){n=void 0}const i={schema:t,sql:a,...n&&{template_params:n}};return{method:"post",endpoint:`/api/v1/database/${e}/validate_sql/`,headers:{"Content-Type":"application/json"},body:JSON.stringify(i),transformResponse:({json:e})=>e.result}}})})}),{useQueryValidationsQuery:g}=m}}]);
//# sourceMappingURL=01db708dc06d50a84568.chunk.js.map