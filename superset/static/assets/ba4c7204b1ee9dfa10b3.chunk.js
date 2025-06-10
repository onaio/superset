"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[3172],{63172:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d});var r=o(67294),i=o(51995),s=o(11965),l=o(61988),n=o(51776);const a=i.iK.div`
  ${({theme:e,subheaderFontSize:t})=>`\n    font-weight: ${e.typography.weights.light};\n    width: 33%;\n    display: table-cell;\n    font-size: ${t||20}px;\n    text-align: center;\n  `}
`,c=i.iK.div`
  ${({theme:e,backgroundColor:t,textColor:o})=>`\n    background-color: ${t};\n    color: ${o};\n    padding: ${e.gridUnit}px ${2*e.gridUnit}px;\n    border-radius: ${2*e.gridUnit}px;\n    display: inline-block;\n    margin-right: ${e.gridUnit}px;\n  `}
`;function d(e){const{height:t,width:o,bigNumber:d,prevNumber:p,valueDifference:g,percentDifferenceFormattedString:b,headerFontSize:u,subheaderFontSize:h,comparisonColorEnabled:f,percentDifferenceNumber:m,comparatorText:x}=e,y=(0,r.createRef)(),$=(0,i.Fg)(),v=s.iv`
    font-family: ${$.typography.families.sansSerif};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${4*$.gridUnit}px;
    border-radius: ${2*$.gridUnit}px;
    height: ${t}px;
    width: ${o}px;
  `,w=s.iv`
    font-size: ${u||60}px;
    font-weight: ${$.typography.weights.normal};
    text-align: center;
  `,k=s.iv`
    color: ${f?m>0?$.colors.success.base:$.colors.error.base:$.colors.grayscale.base};
    margin-left: ${$.gridUnit}px;
  `,C=$.colors.grayscale.light4,Z=$.colors.grayscale.base,{backgroundColor:T,textColor:U}=(0,r.useMemo)((()=>{let e=C,t=Z;return m>0?f&&(e=$.colors.success.light2,t=$.colors.success.base):m<0&&f&&(e=$.colors.error.light2,t=$.colors.error.base),{backgroundColor:e,textColor:t}}),[$,f,m]),z=(0,r.useMemo)((()=>[{symbol:"#",value:p,tooltipText:(0,l.t)("Data for %s",x)},{symbol:"△",value:g,tooltipText:(0,l.t)("Value difference between the time periods")},{symbol:"%",value:b,tooltipText:(0,l.t)("Percentage difference between the time periods")}]),[p,g,b]);return(0,s.tZ)("div",{ref:y,css:v},(0,s.tZ)("div",{css:w},d,0!==m&&(0,s.tZ)("span",{css:k},m>0?"↑":"↓")),(0,s.tZ)("div",{css:s.iv`
          width: 100%;
          display: table;
        `},(0,s.tZ)("div",{css:s.iv`
            display: table-row;
          `},z.map(((e,t)=>(0,s.tZ)(a,{key:`comparison-symbol-${e.symbol}`,subheaderFontSize:h},(0,s.tZ)(n.u,{id:"tooltip",placement:"top",title:e.tooltipText},(0,s.tZ)(c,{backgroundColor:t>0?T:C,textColor:t>0?U:Z},e.symbol),e.value)))))))}}}]);
//# sourceMappingURL=ba4c7204b1ee9dfa10b3.chunk.js.map