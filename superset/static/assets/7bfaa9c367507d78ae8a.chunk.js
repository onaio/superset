"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9820],{94301:(n,e,t)=>{t.d(e,{Tc:()=>$,UX:()=>k,XJ:()=>w,x3:()=>f}),t(67294);var i,l=t(51995),o=t(11965),a=t(61988),r=t(4715),s=t(35932);!function(n){n[n.Small=0]="Small",n[n.Medium=1]="Medium",n[n.Big=2]="Big"}(i||(i={}));const c=l.iK.div`
  ${({theme:n})=>o.iv`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: ${4*n.gridUnit}px;
    text-align: center;

    & .ant-empty-image svg {
      width: auto;
    }

    & a,
    & span[role='button'] {
      color: inherit;
      text-decoration: underline;
      &:hover {
        color: ${n.colors.grayscale.base};
      }
    }
  `}
`,d=l.iK.div``,p=l.iK.p`
  ${({theme:n})=>o.iv`
    font-size: ${n.typography.sizes.m}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
    font-weight: ${n.typography.weights.bold};
  `}
`,g=(0,l.iK)(p)`
  ${({theme:n})=>o.iv`
    font-size: ${n.typography.sizes.l}px;
    color: ${n.colors.grayscale.light1};
    margin-top: ${4*n.gridUnit}px;
  `}
`,h=l.iK.p`
  ${({theme:n})=>o.iv`
    font-size: ${n.typography.sizes.s}px;
    color: ${n.colors.grayscale.light1};
    margin: ${2*n.gridUnit}px 0 0 0;
  `}
`,u=(0,l.iK)(h)`
  ${({theme:n})=>o.iv`
    font-size: ${n.typography.sizes.m}px;
  `}
`,m=(0,l.iK)(h)`
  ${({theme:n})=>o.iv`
    margin-top: ${n.gridUnit}px;
    line-height: 1.2;
  `}
`,b=(0,l.iK)(s.Z)`
  ${({theme:n})=>o.iv`
    margin-top: ${4*n.gridUnit}px;
    z-index: 1;
  `}
`,x=n=>"string"==typeof n?`/static/assets/images/${n}`:n,y=n=>{switch(n){case i.Small:return{height:"50px"};case i.Medium:return{height:"80px"};case i.Big:return{height:"150px"};default:return{height:"50px"}}},Z=({image:n,size:e})=>(0,o.tZ)(r.HY,{description:!1,image:x(n),imageStyle:y(e)}),v=n=>{n.preventDefault(),n.stopPropagation()},w=({title:n,image:e,description:t,buttonAction:l,buttonText:a,className:r})=>(0,o.tZ)(c,{className:r},e&&(0,o.tZ)(Z,{image:e,size:i.Big}),(0,o.tZ)(d,{css:n=>o.iv`
        max-width: ${150*n.gridUnit}px;
      `},(0,o.tZ)(g,null,n),t&&(0,o.tZ)(u,null,t),l&&a&&(0,o.tZ)(b,{buttonStyle:"primary",onClick:l,onMouseDown:v},a))),f=({title:n,image:e,description:t,buttonAction:l,buttonText:a})=>(0,o.tZ)(c,null,e&&(0,o.tZ)(Z,{image:e,size:i.Medium}),(0,o.tZ)(d,{css:n=>o.iv`
        max-width: ${100*n.gridUnit}px;
      `},(0,o.tZ)(p,null,n),t&&(0,o.tZ)(h,null,t),a&&l&&(0,o.tZ)(b,{buttonStyle:"primary",onClick:l,onMouseDown:v},a))),$=({title:n,image:e,description:t})=>(0,o.tZ)(c,null,e&&(0,o.tZ)(Z,{image:e,size:i.Small}),(0,o.tZ)(d,{css:n=>o.iv`
        max-width: ${75*n.gridUnit}px;
      `},(0,o.tZ)(p,null,n),t&&(0,o.tZ)(m,null,t))),A={NO_DATABASES_MATCH_TITLE:(0,a.t)("No databases match your search"),NO_DATABASES_AVAILABLE_TITLE:(0,a.t)("There are no databases available"),MANAGE_YOUR_DATABASES_TEXT:(0,a.t)("Manage your databases"),HERE_TEXT:(0,a.t)("here")},k=n=>(0,o.tZ)($,{image:"empty.svg",title:n?A.NO_DATABASES_MATCH_TITLE:A.NO_DATABASES_AVAILABLE_TITLE,description:(0,o.tZ)("p",null,A.MANAGE_YOUR_DATABASES_TEXT," ",(0,o.tZ)("a",{href:"/databaseview/list"},A.HERE_TEXT))})},64158:(n,e,t)=>{t.d(e,{Z:()=>p}),t(67294);var i=t(51995),l=t(94184),o=t.n(l),a=t(11965);const r=i.iK.ul`
  display: inline-block;
  margin: 16px 0;
  padding: 0;

  li {
    display: inline;
    margin: 0 4px;

    span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${({theme:n})=>n.colors.grayscale.light5};
      border-radius: ${({theme:n})=>n.borderRadius}px;

      &:hover,
      &:focus {
        z-index: 2;
        color: ${({theme:n})=>n.colors.grayscale.dark1};
        background-color: ${({theme:n})=>n.colors.grayscale.light3};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${({theme:n})=>n.colors.grayscale.light5};
        cursor: default;
        background-color: ${({theme:n})=>n.colors.primary.base};

        &:focus {
          outline: none;
        }
      }
    }
  }
`;function s({children:n}){return(0,a.tZ)(r,{role:"navigation"},n)}s.Next=function({disabled:n,onClick:e}){return(0,a.tZ)("li",{className:o()({disabled:n})},(0,a.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"»"))},s.Prev=function({disabled:n,onClick:e}){return(0,a.tZ)("li",{className:o()({disabled:n})},(0,a.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"«"))},s.Item=function({active:n,children:e,onClick:t}){return(0,a.tZ)("li",{className:o()({active:n})},(0,a.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:e=>{e.preventDefault(),n||t(e)}},e))},s.Ellipsis=function({disabled:n,onClick:e}){return(0,a.tZ)("li",{className:o()({disabled:n})},(0,a.tZ)("span",{role:"button",tabIndex:n?-1:0,onClick:t=>{t.preventDefault(),n||e(t)}},"…"))};const c=s;var d=t(52630);const p=(0,d.YM)({WrapperComponent:c,itemTypeToComponent:{[d.iB.PAGE]:({value:n,isActive:e,onClick:t})=>(0,a.tZ)(c.Item,{active:e,onClick:t},n),[d.iB.ELLIPSIS]:({isActive:n,onClick:e})=>(0,a.tZ)(c.Ellipsis,{disabled:n,onClick:e}),[d.iB.PREVIOUS_PAGE_LINK]:({isActive:n,onClick:e})=>(0,a.tZ)(c.Prev,{disabled:n,onClick:e}),[d.iB.NEXT_PAGE_LINK]:({isActive:n,onClick:e})=>(0,a.tZ)(c.Next,{disabled:n,onClick:e}),[d.iB.FIRST_PAGE_LINK]:()=>null,[d.iB.LAST_PAGE_LINK]:()=>null}})},97754:(n,e,t)=>{t.d(e,{Z:()=>p});var i=t(73126),l=t(67294),o=t(94184),a=t.n(o),r=t(51995),s=t(13322),c=t(11965);const d=r.iK.table`
  ${({theme:n})=>`\n    background-color: ${n.colors.grayscale.light5};\n    border-collapse: separate;\n    border-radius: ${n.borderRadius}px;\n\n    thead > tr > th {\n      border: 0;\n    }\n\n    tbody {\n      tr:first-of-type > td {\n        border-top: 0;\n      }\n    }\n    th {\n      background: ${n.colors.grayscale.light5};\n      position: sticky;\n      top: 0;\n\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n\n      &.xs {\n        min-width: 25px;\n      }\n      &.sm {\n        min-width: 50px;\n      }\n      &.md {\n        min-width: 75px;\n      }\n      &.lg {\n        min-width: 100px;\n      }\n      &.xl {\n        min-width: 150px;\n      }\n      &.xxl {\n        min-width: 200px;\n      }\n\n      span {\n        white-space: nowrap;\n        display: flex;\n        align-items: center;\n        line-height: 2;\n      }\n\n      svg {\n        display: inline-block;\n        position: relative;\n      }\n    }\n\n    td {\n      &.xs {\n        width: 25px;\n      }\n      &.sm {\n        width: 50px;\n      }\n      &.md {\n        width: 75px;\n      }\n      &.lg {\n        width: 100px;\n      }\n      &.xl {\n        width: 150px;\n      }\n      &.xxl {\n        width: 200px;\n      }\n    }\n\n    .table-cell-loader {\n      position: relative;\n\n      .loading-bar {\n        background-color: ${n.colors.secondary.light4};\n        border-radius: 7px;\n\n        span {\n          visibility: hidden;\n        }\n      }\n\n      .empty-loading-bar {\n        display: inline-block;\n        width: 100%;\n        height: 1.2em;\n      }\n    }\n\n    .actions {\n      white-space: nowrap;\n      min-width: 100px;\n\n      svg,\n      i {\n        margin-right: 8px;\n\n        &:hover {\n          path {\n            fill: ${n.colors.primary.base};\n          }\n        }\n      }\n    }\n\n    .table-row {\n      .actions {\n        opacity: 0;\n        font-size: ${n.typography.sizes.xl}px;\n        display: flex;\n      }\n\n      &:hover {\n        background-color: ${n.colors.secondary.light5};\n\n        .actions {\n          opacity: 1;\n          transition: opacity ease-in ${n.transitionTiming}s;\n        }\n      }\n    }\n\n    .table-row-selected {\n      background-color: ${n.colors.secondary.light4};\n\n      &:hover {\n        background-color: ${n.colors.secondary.light4};\n      }\n    }\n\n    .table-cell {\n      font-feature-settings: 'tnum' 1;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: 320px;\n      line-height: 1;\n      vertical-align: middle;\n      &:first-of-type {\n        padding-left: ${4*n.gridUnit}px;\n      }\n      &__wrap {\n        white-space: normal;\n      }\n      &__nowrap {\n        white-space: nowrap;\n      }\n    }\n\n    @keyframes loading-shimmer {\n      40% {\n        background-position: 100% 0;\n      }\n\n      100% {\n        background-position: 100% 0;\n      }\n    }\n  `}
`;d.displayName="table";const p=l.memo((({getTableProps:n,getTableBodyProps:e,prepareRow:t,headerGroups:l,columns:o,rows:r,loading:p,highlightRowId:g,columnsForWrapText:h})=>(0,c.tZ)(d,(0,i.Z)({},n(),{className:"table table-hover"}),(0,c.tZ)("thead",null,l.map((n=>(0,c.tZ)("tr",n.getHeaderGroupProps(),n.headers.map((n=>{let e=(0,c.tZ)(s.Z.Sort,null);return n.isSorted&&n.isSortedDesc?e=(0,c.tZ)(s.Z.SortDesc,null):n.isSorted&&!n.isSortedDesc&&(e=(0,c.tZ)(s.Z.SortAsc,null)),n.hidden?null:(0,c.tZ)("th",(0,i.Z)({},n.getHeaderProps(n.canSort?n.getSortByToggleProps():{}),{className:a()({[n.size||""]:n.size})}),(0,c.tZ)("span",null,n.render("Header"),n.canSort&&e))})))))),(0,c.tZ)("tbody",e(),p&&0===r.length&&[...new Array(12)].map(((n,e)=>(0,c.tZ)("tr",{key:e},o.map(((n,e)=>n.hidden?null:(0,c.tZ)("td",{key:e,className:a()("table-cell",{"table-cell-loader":p})},(0,c.tZ)("span",{className:"loading-bar empty-loading-bar",role:"progressbar","aria-label":"loading"}))))))),r.length>0&&r.map((n=>{t(n);const e=n.original.id;return(0,c.tZ)("tr",(0,i.Z)({},n.getRowProps(),{className:a()("table-row",{"table-row-selected":n.isSelected||void 0!==e&&e===g})}),n.cells.map((n=>{if(n.column.hidden)return null;const e=n.column.cellProps||{},t=null==h?void 0:h.includes(n.column.Header);return(0,c.tZ)("td",(0,i.Z)({className:a()("table-cell table-cell__"+(t?"wrap":"nowrap"),{"table-cell-loader":p,[n.column.size||""]:n.column.size})},n.getCellProps(),e),(0,c.tZ)("span",{className:a()({"loading-bar":p}),role:p?"progressbar":void 0},(0,c.tZ)("span",null,n.render("Cell"))))})))}))))))}}]);
//# sourceMappingURL=7bfaa9c367507d78ae8a.chunk.js.map