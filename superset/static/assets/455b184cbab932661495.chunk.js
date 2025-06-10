"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3284],{13284:(e,t,i)=>{i.d(t,{UB:()=>Z,ZP:()=>q});var a,n=i(73126),l=i(67294),r=i(69386),o=i(94184),s=i.n(o),d=i(61988),c=i(51995),p=i(11965),g=i(16355),m=i(4715),u=i(58593),h=i(9875),b=i(37921),x=i(14278),y=i(13322),v=i(1510),f=i(64239);!function(e){e.AllCharts="ALL_CHARTS",e.Category="CATEGORY",e.Tags="TAGS",e.RecommendedTags="RECOMMENDED_TAGS"}(a||(a={}));const $=["line","big_number","big_number_total","table","pivot_table_v2","echarts_timeseries_line","echarts_area","echarts_timeseries_bar","echarts_timeseries_scatter","pie","mixed_timeseries","dist_bar","area","bar","deck_polygon","time_table","histogram","deck_scatter","deck_hex","time_pivot","deck_arc","heatmap","deck_grid","deck_screengrid","treemap_v2","box_plot","sankey","word_cloud","mapbox","kepler","cal_heatmap","rose","bubble","bubble_v2","deck_geojson","horizon","deck_multi","compare","partition","event_flow","deck_path","graph_chart","world_map","paired_ttest","para","country_map"],k=new Set($),Z=1090,U=(0,d.t)("Other"),_=(0,d.t)("All charts"),w=[(0,d.t)("Popular"),(0,d.t)("ECharts"),(0,d.t)("Advanced-Analytics")],C=c.iK.div`
  ${({isSelectedVizMetadata:e})=>`\n    display: grid;\n    grid-template-rows: ${e?"auto minmax(100px, 1fr) minmax(200px, 35%)":"auto minmax(100px, 1fr)"};\n    // em is used here because the sidebar should be sized to fit the longest standard tag\n    grid-template-columns: minmax(14em, auto) 5fr;\n    grid-template-areas:\n      'sidebar search'\n      'sidebar main'\n      'details details';\n    height: 70vh;\n    overflow: auto;\n  `}
`,z=c.iK.h3`
  margin-top: 0;
  margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  font-size: ${({theme:e})=>e.typography.sizes.l}px;
  font-weight: ${({theme:e})=>e.typography.weights.bold};
  line-height: ${({theme:e})=>6*e.gridUnit}px;
`,S=c.iK.div`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  overflow: auto;

  .ant-collapse .ant-collapse-item {
    .ant-collapse-header {
      font-size: ${({theme:e})=>e.typography.sizes.s}px;
      color: ${({theme:e})=>e.colors.grayscale.base};
      padding-left: ${({theme:e})=>2*e.gridUnit}px;
      padding-bottom: ${({theme:e})=>e.gridUnit}px;
    }
    .ant-collapse-content .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 ${({theme:e})=>2*e.gridUnit}px;
    }
  }
`,T=c.iK.div`
  grid-area: main;
  overflow-y: auto;
`,M=c.iK.div`
  ${({theme:e})=>`\n    grid-area: search;\n    margin-top: ${3*e.gridUnit}px;\n    margin-bottom: ${e.gridUnit}px;\n    margin-left: ${3*e.gridUnit}px;\n    margin-right: ${3*e.gridUnit}px;\n    .ant-input-affix-wrapper {\n      padding-left: ${2*e.gridUnit}px;\n    }\n  `}
`,K=c.iK.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme:e})=>e.colors.grayscale.base};
`,A=c.iK.button`
  ${({theme:e})=>`\n    all: unset; // remove default button styles\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    cursor: pointer;\n    margin: ${e.gridUnit}px 0;\n    padding: 0 ${e.gridUnit}px;\n    border-radius: ${e.borderRadius}px;\n    line-height: 2em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n\n    &:focus {\n      outline: initial;\n    }\n\n    &.selected {\n      background-color: ${e.colors.primary.base};\n      color: ${e.colors.primary.light5};\n\n      svg {\n        color: ${e.colors.primary.light5};\n      }\n\n      &:hover {\n        .cancel {\n          visibility: visible;\n        }\n      }\n    }\n\n    & span:first-of-type svg {\n      margin-top: ${1.5*e.gridUnit}px;\n    }\n\n    .cancel {\n      visibility: hidden;\n    }\n  `}
`,E=c.iK.div`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    ${({theme:e})=>24*e.gridUnit}px
  );
  grid-auto-rows: max-content;
  justify-content: space-evenly;
  grid-gap: ${({theme:e})=>2*e.gridUnit}px;
  justify-items: center;
  // for some reason this padding doesn't seem to apply at the bottom of the container. Why is a mystery.
  padding: ${({theme:e})=>2*e.gridUnit}px;
`,O=e=>p.iv`
  grid-area: details;
  border-top: 1px solid ${e.colors.grayscale.light2};
`,R=e=>p.iv`
  padding: ${4*e.gridUnit}px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    'viz-name examples-header'
    'viz-tags examples'
    'description examples';
`,N=c.iK.div`
  grid-area: viz-tags;
  width: ${({theme:e})=>120*e.gridUnit}px;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
`,j=c.iK.p`
  grid-area: description;
  overflow: auto;
  padding-right: ${({theme:e})=>14*e.gridUnit}px;
  margin: 0;
`,I=c.iK.div`
  grid-area: examples;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;
  gap: ${({theme:e})=>4*e.gridUnit}px;

  img {
    height: 100%;
    border-radius: ${({theme:e})=>e.gridUnit}px;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
  }
`,V=e=>p.iv`
  cursor: pointer;
  width: ${24*e.gridUnit}px;
  position: relative;

  img {
    min-width: ${24*e.gridUnit}px;
    min-height: ${24*e.gridUnit}px;
    border: 1px solid ${e.colors.grayscale.light2};
    border-radius: ${e.gridUnit}px;
    transition: border-color ${e.transitionTiming};
  }

  &.selected img {
    border: 2px solid ${e.colors.primary.light2};
  }

  &:hover:not(.selected) img {
    border: 1px solid ${e.colors.grayscale.light1};
  }

  .viztype-label {
    margin-top: ${2*e.gridUnit}px;
    text-align: center;
  }
`,D=c.iK.div`
  ${({theme:e})=>`\n    border: 1px solid ${e.colors.primary.dark1};\n    box-sizing: border-box;\n    border-radius: ${e.gridUnit}px;\n    background: ${e.colors.grayscale.light5};\n    line-height: ${2.5*e.gridUnit}px;\n    color: ${e.colors.primary.dark1};\n    font-size: ${e.typography.sizes.s}px;\n    font-weight: ${e.typography.weights.bold};\n    text-align: center;\n    padding: ${.5*e.gridUnit}px ${e.gridUnit}px;\n    text-transform: uppercase;\n    cursor: pointer;\n\n    div {\n      transform: scale(0.83,0.83);\n    }\n  `}
`,G=c.iK.div`
  position: absolute;
  right: ${({theme:e})=>e.gridUnit}px;
  top: ${({theme:e})=>19*e.gridUnit}px;
`,H=c.iK.div`
  display: inline-block !important;
  margin-left: ${({theme:e})=>2*e.gridUnit}px;
`;function L(e){return k.has(e.key)?$.indexOf(e.key):$.length}const P=({entry:e,selectedViz:t,setSelectedViz:i,onDoubleClick:a})=>{const n=(0,c.Fg)(),{key:l,value:r}=e,o=t===e.key;return(0,p.tZ)("div",{role:"button",css:V(n),tabIndex:0,className:o?"selected":"",onClick:()=>i(l),onDoubleClick:a},(0,p.tZ)("img",{alt:r.name,width:"100%",className:"viztype-selector "+(o?"selected":""),src:r.thumbnail}),(0,p.tZ)("div",{className:"viztype-label"},r.name),r.label&&(0,p.tZ)(G,null,(0,p.tZ)(D,null,(0,p.tZ)("div",null,(0,d.t)(r.label)))))},B=({vizEntries:e,...t})=>(0,p.tZ)(E,null,e.map((e=>(0,p.tZ)(P,(0,n.Z)({key:e.key},t,{entry:e}))))),F=({selector:e,sectionId:t,icon:i,isSelected:a,onClick:n,className:r})=>{const o=(0,l.useRef)(null);return(0,l.useEffect)((()=>{a&&queueMicrotask((()=>(0,f.default)(o.current,{behavior:"smooth",scrollMode:"if-needed"})))}),[]),(0,p.tZ)(A,{ref:o,key:e,name:e,className:s()(r,a&&"selected"),onClick:()=>n(e,t)},i,e)},X=(e,t)=>t===e.category||t===U&&null==e.category||(e.tags||[]).indexOf(t)>-1;function q(e){var t,i;const{selectedViz:n,onChange:o,onDoubleClick:s,className:c}=e,{mountedPluginMetadata:f}=(0,x.gp)(),$=(0,l.useRef)(),[k,Z]=(0,l.useState)(""),[A,E]=(0,l.useState)(!0),V=A&&!!k,G=n?f[n]:null,P=(0,l.useMemo)((()=>{const t=Object.entries(f).map((([e,t])=>({key:e,value:t}))).filter((({key:t})=>!e.denyList.includes(t))).filter((({value:e})=>(0,v.X3)(e.behaviors||[])&&!e.deprecated));return t.sort(((e,t)=>L(e)-L(t))),t}),[f]),q=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{const i=t.value.category||U;e[i]||(e[i]=[]),e[i].push(t)})),e}),[P]),W=(0,l.useMemo)((()=>Object.keys(q).sort(((e,t)=>e===U?1:t===U?-1:e.localeCompare(t)))),[q]),Y=(0,l.useMemo)((()=>{const e={};return P.forEach((t=>{(t.value.tags||[]).forEach((i=>{e[i]||(e[i]=[]),e[i].push(t)}))})),e}),[P]),J=(0,l.useMemo)((()=>Object.keys(Y).sort(((e,t)=>e.localeCompare(t))).filter((e=>-1===w.indexOf(e)))),[Y]),Q=(0,l.useMemo)((()=>P.sort(((e,t)=>e.key.localeCompare(t.key)))),[P]),[ee,te]=(0,l.useState)((()=>(null==G?void 0:G.category)||w[0])),[ie,ae]=(0,l.useState)((()=>null!=G&&G.category?a.Category:a.RecommendedTags)),ne=(0,l.useMemo)((()=>new r.Z(P,{ignoreLocation:!0,threshold:.3,keys:[{name:"value.name",weight:4},{name:"value.tags",weight:2},"value.description"]})),[P]),le=(0,l.useMemo)((()=>""===k.trim()?[]:ne.search(k).map((e=>e.item)).sort(((e,t)=>{var i,a;const n=null==(i=e.value)?void 0:i.label,l=null==(a=t.value)?void 0:a.label,r=n&&g.eH[n]?g.eH[n].weight:0;return(l&&g.eH[l]?g.eH[l].weight:0)-r}))),[k,ne]),re=(0,l.useCallback)((()=>{E(!0)}),[]),oe=(0,l.useCallback)((e=>Z(e.target.value)),[]),se=(0,l.useCallback)((()=>{E(!1),Z(""),$.current.blur()}),[]),de=(0,l.useCallback)(((e,t)=>{A&&se(),te(e),ae(t);const i=G&&X(G,e);e===ee||i||o(null)}),[se,A,ee,G,o]),ce=(0,l.useMemo)((()=>({[a.RecommendedTags]:{title:(0,d.t)("Recommended tags"),icon:(0,p.tZ)(y.Z.Tags,null),selectors:w},[a.Category]:{title:(0,d.t)("Category"),icon:(0,p.tZ)(y.Z.Category,null),selectors:W},[a.Tags]:{title:(0,d.t)("Tags"),icon:(0,p.tZ)(y.Z.Tags,null),selectors:J}})),[W,J]);return(0,p.tZ)(C,{className:c,isSelectedVizMetadata:Boolean(G)},(0,p.tZ)(S,null,(0,p.tZ)(F,{css:({gridUnit:e})=>p.iv`
              margin: ${2*e}px;
              margin-bottom: 0;
            `,sectionId:a.AllCharts,selector:_,icon:(0,p.tZ)(y.Z.Ballot,null),isSelected:!V&&_===ee&&a.AllCharts===ie,onClick:de}),(0,p.tZ)(m.Ol,{expandIconPosition:"right",ghost:!0,defaultActiveKey:Object.keys(ce)},Object.keys(ce).map((e=>{const t=ce[e];return(0,p.tZ)(m.Ol.Panel,{header:(0,p.tZ)("span",{className:"header"},t.title),key:e},t.selectors.map((i=>(0,p.tZ)(F,{key:i,selector:i,sectionId:e,icon:t.icon,isSelected:!V&&i===ee&&e===ie,onClick:de}))))})))),(0,p.tZ)(M,null,(0,p.tZ)(h.II,{type:"text",ref:$,value:k,placeholder:(0,d.t)("Search all charts"),onChange:oe,onFocus:re,prefix:(0,p.tZ)(K,null,(0,p.tZ)(y.Z.Search,{iconSize:"m"})),suffix:(0,p.tZ)(K,null,k&&(0,p.tZ)(y.Z.XLarge,{iconSize:"m",onClick:se}))})),(0,p.tZ)(T,null,(0,p.tZ)(B,{vizEntries:V?le:ee===_&&ie===a.AllCharts?Q:ie===a.Category&&q[ee]?q[ee]:ie!==a.Tags&&ie!==a.RecommendedTags||!Y[ee]?[]:Y[ee],selectedViz:n,setSelectedViz:o,onDoubleClick:s})),G?(0,p.tZ)("div",{css:e=>[O(e),R(e)]},(0,p.tZ)(l.Fragment,null,(0,p.tZ)(z,{css:p.iv`
                grid-area: viz-name;
                position: relative;
              `},null==G?void 0:G.name,(null==G?void 0:G.label)&&(0,p.tZ)(u.u,{id:"viz-badge-tooltip",placement:"top",title:null!=(t=G.labelExplanation)?t:g.t$[G.label]},(0,p.tZ)(H,null,(0,p.tZ)(D,null,(0,p.tZ)("div",null,(0,d.t)(G.label)))))),(0,p.tZ)(N,null,null==G?void 0:G.tags.map((e=>(0,p.tZ)(b.Z,{key:e},e)))),(0,p.tZ)(j,null,(null==G?void 0:G.description)||(0,d.t)("No description available.")),(0,p.tZ)(z,{css:p.iv`
                grid-area: examples-header;
              `},(0,d.t)("Examples")),(0,p.tZ)(I,null,(null!=G&&null!=(i=G.exampleGallery)&&i.length?G.exampleGallery:[{url:null==G?void 0:G.thumbnail,caption:null==G?void 0:G.name}]).map((e=>(0,p.tZ)("img",{key:e.url,src:e.url,alt:e.caption,title:e.caption})))))):null)}}}]);
//# sourceMappingURL=455b184cbab932661495.chunk.js.map