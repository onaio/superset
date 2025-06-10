"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4717],{79789:(e,t,i)=>{i.d(t,{Z:()=>c});var l=i(67294),r=i(51995),a=i(61988),o=i(13322),n=i(58593),s=i(11965);const c=function({certifiedBy:e,details:t,size:i="l"}){const c=(0,r.Fg)();return(0,s.tZ)(n.u,{id:"certified-details-tooltip",title:(0,s.tZ)(l.Fragment,null,e&&(0,s.tZ)("div",null,(0,s.tZ)("strong",null,(0,a.t)("Certified by %s",e))),(0,s.tZ)("div",null,t))},(0,s.tZ)(o.Z.Certified,{iconColor:c.colors.primary.base,iconSize:i}))}},13842:(e,t,i)=>{i.d(t,{dc:()=>o,lU:()=>a,zq:()=>n}),i(67294);var l=i(51995),r=i(11965);const a=()=>{const e=(0,l.Fg)();return(0,r.tZ)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.tZ)("path",{d:"M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0Z",fill:e.colors.primary.base}),(0,r.tZ)("path",{d:"M7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z",fill:"white"}))},o=()=>{const e=(0,l.Fg)();return(0,r.tZ)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light1}),(0,r.tZ)("path",{d:"M14 10H4V8H14V10Z",fill:"white"}))},n=()=>{const e=(0,l.Fg)();return(0,r.tZ)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.tZ)("path",{d:"M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z",fill:e.colors.grayscale.light2}),(0,r.tZ)("path",{d:"M16 2V16H2V2H16V2Z",fill:"white"}))}},17198:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(51995),r=i(61988),a=i(67294),o=i(9875),n=i(74069),s=i(49238),c=i(11965);const d=l.iK.div`
  padding-top: 8px;
  width: 50%;
  label {
    color: ${({theme:e})=>e.colors.grayscale.base};
    text-transform: uppercase;
  }
`,h=l.iK.div`
  line-height: ${({theme:e})=>4*e.gridUnit}px;
  padding-top: 16px;
`;function p({description:e,onConfirm:t,onHide:i,open:l,title:p}){const[u,g]=(0,a.useState)(!0),[m,f]=(0,a.useState)(""),b=()=>{f(""),t()};return(0,c.tZ)(n.default,{disablePrimaryButton:u,onHide:()=>{f(""),i()},onHandledPrimaryAction:b,primaryButtonName:(0,r.t)("delete"),primaryButtonType:"danger",show:l,title:p},(0,c.tZ)(h,null,e),(0,c.tZ)(d,null,(0,c.tZ)(s.lX,{htmlFor:"delete"},(0,r.t)('Type "%s" to confirm',(0,r.t)("DELETE"))),(0,c.tZ)(o.II,{type:"text",id:"delete",autoComplete:"off",value:m,onChange:e=>{var t;const i=null!=(t=e.target.value)?t:"";g(i.toUpperCase()!==(0,r.t)("DELETE")),f(i)},onPressEnter:()=>{u||b()}})))}},36674:(e,t,i)=>{i.d(t,{Z:()=>d});var l=i(67294),r=i(51995),a=i(11965),o=i(61988),n=i(58593),s=i(13322);const c=r.iK.a`
  ${({theme:e})=>a.iv`
    font-size: ${e.typography.sizes.xl}px;
    display: flex;
    padding: 0 0 0 ${2*e.gridUnit}px;
  `};
`,d=({itemId:e,isStarred:t,showTooltip:i,saveFaveStar:r,fetchFaveStar:d})=>{(0,l.useEffect)((()=>{null==d||d(e)}),[d,e]);const h=(0,l.useCallback)((i=>{i.preventDefault(),r(e,!!t)}),[t,e,r]),p=(0,a.tZ)(c,{href:"#",onClick:h,className:"fave-unfave-icon",role:"button"},t?(0,a.tZ)(s.Z.FavoriteSelected,null):(0,a.tZ)(s.Z.FavoriteUnselected,null));return i?(0,a.tZ)(n.u,{id:"fave-unfave-tooltip",title:(0,o.t)("Click to favorite/unfavorite")},p):p}},4144:(e,t,i)=>{i.d(t,{Z:()=>c});var l=i(73126),r=i(67294),a=i(51995),o=i(68492),n=i(11965);const s=a.iK.div`
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center ${({position:e})=>e};
  display: inline-block;
  height: calc(100% - 1px);
  width: calc(100% - 2px);
  margin: 1px 1px 0 1px;
`;function c({src:e,fallback:t,isLoading:i,position:a,...c}){const[d,h]=(0,r.useState)(t);return(0,r.useEffect)((()=>(e&&fetch(e).then((e=>e.blob())).then((e=>{if(/image/.test(e.type)){const t=URL.createObjectURL(e);h(t)}})).catch((e=>{o.Z.error(e),h(t)})),()=>{h(t)})),[e,t]),(0,n.tZ)(s,(0,l.Z)({src:i?t:d},c,{position:a}))}},1304:(e,t,i)=>{i.d(t,{Z:()=>n});var l=i(67294),r=i(74069),a=i(35932),o=i(11965);const n=l.forwardRef(((e,t)=>{const[i,n]=(0,l.useState)(!1),{beforeOpen:s=(()=>{}),onExit:c=(()=>{}),isButton:d=!1,resizable:h=!1,draggable:p=!1,className:u="",tooltip:g,modalFooter:m,triggerNode:f,destroyOnClose:b=!0,modalBody:v,draggableConfig:y={},resizableConfig:Z={},modalTitle:x,responsive:F,width:C,maxWidth:S}=e,k=()=>{n(!1),null==c||c()},w=e=>{e.preventDefault(),null==s||s(),n(!0)};return t&&(t.current={close:k,open:w}),(0,o.tZ)(l.Fragment,null,d&&(0,o.tZ)(a.Z,{className:"modal-trigger",tooltip:g,onClick:w},f),!d&&(0,o.tZ)("span",{onClick:w,role:"button"},f),(0,o.tZ)(r.default,{className:u,show:i,onHide:k,title:x,footer:m,hideFooter:!m,width:C,maxWidth:S,responsive:F,resizable:h,resizableConfig:Z,draggable:p,draggableConfig:y,destroyOnClose:b},v))}))},60718:(e,t,i)=>{i.d(t,{m:()=>p});var l=i(31069),r=i(61988),a=i(15926),o=i.n(a),n=i(65108),s=i(98286);const c=new Map,d=(0,n.g)(l.Z.get,c,(({endpoint:e})=>e||"")),h=e=>({value:e.name,label:e.name,key:e.id}),p=async(e,t,i)=>{const l="name",a=o().encode({filters:[{col:l,opr:"ct",value:e},{col:"type",opr:"custom_tag",value:!0}],page:t,page_size:i,order_column:l,order_direction:"asc"});return d({endpoint:`/api/v1/tag/?q=${a}`}).then((e=>({data:e.json.result.map(h),totalCount:e.json.count}))).catch((async e=>{const t=(({error:e,message:t})=>{let i=t||e||(0,r.t)("An error has occurred");return"Forbidden"===t&&(i=(0,r.t)("You do not have permission to read tags")),i})(await(0,s.O$)(e));throw new Error(t)}))}},20818:(e,t,i)=>{i.d(t,{Z:()=>A});var l=i(57557),r=i.n(l),a=i(67294),o=i(9875),n=i(49238),s=i(51127),c=i.n(s),d=i(35932),h=i(4715),p=i(15926),u=i.n(p),g=i(51995),m=i(61988),f=i(81545),b=i(31069),v=i(55786),y=i(78161),Z=i(28062),x=i(93185),F=i(74069),C=i(94670),S=i(45697),k=i.n(S),w=i(76787),$=i(11965);const N={onChange:k().func,labelMargin:k().number,colorScheme:k().string,hasCustomLabelColors:k().bool};class T extends a.PureComponent{constructor(e){super(e),this.state={hovered:!1},this.categoricalSchemeRegistry=(0,f.Z)(),this.choices=this.categoricalSchemeRegistry.keys().map((e=>[e,e])),this.schemes=this.categoricalSchemeRegistry.getMap()}setHover(e){this.setState({hovered:e})}render(){const{colorScheme:e,labelMargin:t=0,hasCustomLabelColors:i}=this.props;return(0,$.tZ)(w.Z,{description:(0,m.t)("Any color palette selected here will override the colors applied to this dashboard's individual charts"),labelMargin:t,name:"color_scheme",onChange:this.props.onChange,value:e,choices:this.choices,clearable:!0,schemes:this.schemes,hovered:this.state.hovered,hasCustomLabelColors:i})}}T.propTypes=N,T.defaultProps={hasCustomLabelColors:!1,colorScheme:void 0,onChange:()=>{}};const I=T;var E=i(87999),U=i(98286),j=i(14114),O=i(48273),_=i(60718);const M=(0,g.iK)(n.xJ)`
  margin-bottom: 0;
`,R=(0,g.iK)(C.Ad)`
  border-radius: ${({theme:e})=>e.borderRadius}px;
  border: 1px solid ${({theme:e})=>e.colors.secondary.light2};
`;var L={name:"1blj7km",styles:"margin-top:1em"};const A=(0,j.ZP)((({addSuccessToast:e,addDangerToast:t,colorScheme:i,dashboardId:l,dashboardInfo:s,dashboardTitle:p,onHide:g=(()=>{}),onlyApply:S=!1,onSubmit:k=(()=>{}),show:w=!1})=>{const[N]=h.qz.useForm(),[T,j]=(0,a.useState)(!1),[A,D]=(0,a.useState)(!1),[z,q]=(0,a.useState)(i),[J,X]=(0,a.useState)(""),[H,B]=(0,a.useState)(),[K,P]=(0,a.useState)([]),[V,W]=(0,a.useState)([]),Y=S?(0,m.t)("Apply"):(0,m.t)("Save"),[Q,G]=(0,a.useState)([]),ee=(0,f.Z)(),te=(0,a.useMemo)((()=>Q.map((e=>({value:e.name,label:e.name,key:e.name})))),[Q.length]),ie=async e=>{const{error:t,statusText:i,message:l}=await(0,U.O$)(e);let r=t||i||(0,m.t)("An error has occurred");"object"==typeof l&&"json_metadata"in l?r=l.json_metadata:"string"==typeof l&&(r=l,"Forbidden"===l&&(r=(0,m.t)("You do not have permission to edit this dashboard"))),F.default.error({title:(0,m.t)("Error"),content:r,okButtonProps:{danger:!0,className:"btn-danger"}})},le=(0,a.useCallback)(((e="owners",t="",i,l)=>{const r=u().encode({filter:t,page:i,page_size:l});return b.Z.get({endpoint:`/api/v1/dashboard/related/${e}?q=${r}`}).then((e=>({data:e.json.result.filter((e=>void 0===e.extra.active||e.extra.active)).map((e=>({value:e.value,label:e.text}))),totalCount:e.json.count})))}),[]),re=(0,a.useCallback)((e=>{const{id:t,dashboard_title:i,slug:l,certified_by:a,certification_details:o,owners:n,roles:s,metadata:d,is_managed_externally:h}=e,p={id:t,title:i,slug:l||"",certifiedBy:a||"",certificationDetails:o||"",isManagedExternally:h||!1};N.setFieldsValue(p),B(p),P(n),W(s),q(d.color_scheme);const u=r()(d,["positions","shared_label_colors","color_scheme_domain"]);X(u?c()(u):"")}),[N]),ae=(0,a.useCallback)((()=>{j(!0),b.Z.get({endpoint:`/api/v1/dashboard/${l}`}).then((e=>{var t;const i=e.json.result,l=null!=(t=i.json_metadata)&&t.length?JSON.parse(i.json_metadata):{};re({...i,metadata:l}),j(!1)}),ie)}),[l,re]),oe=()=>{try{return null!=J&&J.length?JSON.parse(J):{}}catch(e){return{}}},ne=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,full_name:e.label})));P(t)},se=e=>{const t=(0,v.Z)(e).map((e=>({id:e.value,name:e.label})));W(t)},ce=()=>(K||[]).map((e=>({value:e.id,label:e.full_name||`${e.first_name} ${e.last_name}`}))),de=(e="",{updateMetadata:t=!0}={})=>{const i=ee.keys(),l=oe();if(e&&!i.includes(e))throw F.default.error({title:(0,m.t)("Error"),content:(0,m.t)("A valid color scheme is required"),okButtonProps:{danger:!0,className:"btn-danger"}}),new Error("A valid color scheme is required");t&&(l.color_scheme=e,l.label_colors=l.label_colors||{},X(c()(l))),q(e)};return(0,a.useEffect)((()=>{w&&(s?re(s):ae()),C.Ad.preload()}),[s,ae,re,w]),(0,a.useEffect)((()=>{p&&H&&H.title!==p&&N.setFieldsValue({...H,title:p})}),[H,p,N]),(0,a.useEffect)((()=>{if((0,x.cr)(x.TT.TaggingSystem))try{(0,O.$3)({objectType:O.g.DASHBOARD,objectId:l,includeTypes:!1},(e=>G(e)),(e=>{t(`Error fetching tags: ${e.text}`)}))}catch(e){ie(e)}}),[l]),(0,$.tZ)(F.default,{show:w,onHide:g,title:(0,m.t)("Dashboard properties"),footer:(0,$.tZ)(a.Fragment,null,(0,$.tZ)(d.Z,{htmlType:"button",buttonSize:"small",onClick:g,cta:!0},(0,m.t)("Cancel")),(0,$.tZ)(d.Z,{onClick:N.submit,buttonSize:"small",buttonStyle:"primary",className:"m-r-5",cta:!0,disabled:null==H?void 0:H.isManagedExternally,tooltip:null!=H&&H.isManagedExternally?(0,m.t)("This dashboard is managed externally, and can't be edited in Superset"):""},Y)),responsive:!0},(0,$.tZ)(h.qz,{form:N,onFinish:()=>{var i,r,a,o;const{title:n,slug:s,certifiedBy:d,certificationDetails:h}=N.getFieldsValue();let p,u=z,f="",v=J;try{if(!v.startsWith("{")||!v.endsWith("}"))throw new Error;p=JSON.parse(v)}catch(e){return void t((0,m.t)("JSON metadata is invalid!"))}u=(null==(i=p)?void 0:i.color_scheme)||z,f=null==(r=p)?void 0:r.color_namespace,null!=(a=p)&&a.shared_label_colors&&delete p.shared_label_colors,null!=(o=p)&&o.color_scheme_domain&&delete p.color_scheme_domain;const F=(0,y.ZP)();var C;if(Z.getNamespace(f).resetColors(),u?(F.updateColorMap(f,u),p.shared_label_colors=Object.fromEntries(F.getColorMap()),p.color_scheme_domain=(null==(C=ee.get(z))?void 0:C.colors)||[]):(F.reset(),p.shared_label_colors={},p.color_scheme_domain=[]),v=c()(p),de(u,{updateMetadata:!1}),(0,x.cr)(x.TT.TaggingSystem))try{(0,O.$3)({objectType:O.g.DASHBOARD,objectId:l,includeTypes:!1},(e=>{return t=e,(i=Q).map((e=>{t.some((t=>t.name===e.name))||(0,O._U)({objectType:O.g.DASHBOARD,objectId:l,includeTypes:!1},e.name,(()=>{}),(()=>{}))})),void t.map((e=>{i.some((t=>t.name===e.name))||(0,O.OY)({objectType:O.g.DASHBOARD,objectId:l},e,(()=>{}),(()=>{}))}));var t,i}),(e=>{ie(e)}))}catch(e){ie(e)}const w={},$={};(0,x.cr)(x.TT.DashboardRbac)&&(w.roles=V,$.roles=(V||[]).map((e=>e.id)));const T={id:l,title:n,slug:s,jsonMetadata:v,owners:K,colorScheme:u,colorNamespace:f,certifiedBy:d,certificationDetails:h,...w};S?(k(T),g(),e((0,m.t)("Dashboard properties updated"))):b.Z.put({endpoint:`/api/v1/dashboard/${l}`,headers:{"Content-Type":"application/json"},body:JSON.stringify({dashboard_title:n,slug:s||null,json_metadata:v||null,owners:(K||[]).map((e=>e.id)),certified_by:d||null,certification_details:d&&h?h:null,...$})}).then((()=>{k(T),g(),e((0,m.t)("The dashboard has been saved"))}),ie)},layout:"vertical",initialValues:H},(0,$.tZ)(h.X2,null,(0,$.tZ)(h.JX,{xs:24,md:24},(0,$.tZ)("h3",null,(0,m.t)("Basic information")))),(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(n.xJ,{label:(0,m.t)("Name"),name:"title"},(0,$.tZ)(o.II,{type:"text",disabled:T}))),(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,{label:(0,m.t)("URL slug"),name:"slug"},(0,$.tZ)(o.II,{type:"text",disabled:T})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("A readable URL for your dashboard")))),(0,x.cr)(x.TT.DashboardRbac)?(()=>{const e=oe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,$.tZ)(a.Fragment,null,(0,$.tZ)(h.X2,null,(0,$.tZ)(h.JX,{xs:24,md:24},(0,$.tZ)("h3",{style:{marginTop:"1em"}},(0,m.t)("Access")))),(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,{label:(0,m.t)("Owners")},(0,$.tZ)(h.qb,{allowClear:!0,allowNewOptions:!0,ariaLabel:(0,m.t)("Owners"),disabled:T,mode:"multiple",onChange:ne,options:(e,t,i)=>le("owners",e,t,i),value:ce()})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,{label:(0,m.t)("Roles")},(0,$.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,m.t)("Roles"),disabled:T,mode:"multiple",onChange:se,options:(e,t,i)=>le("roles",e,t,i),value:(V||[]).map((e=>({value:e.id,label:`${e.name}`})))})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("Roles is a list which defines access to the dashboard. Granting a role access to a dashboard will bypass dataset level checks. If no roles are defined, regular access permissions apply.")))),(0,$.tZ)(h.X2,null,(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(I,{hasCustomLabelColors:t,onChange:de,colorScheme:z,labelMargin:4}))))})():(()=>{const e=oe(),t=!!Object.keys((null==e?void 0:e.label_colors)||{}).length;return(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)("h3",{style:{marginTop:"1em"}},(0,m.t)("Access")),(0,$.tZ)(M,{label:(0,m.t)("Owners")},(0,$.tZ)(h.qb,{allowClear:!0,ariaLabel:(0,m.t)("Owners"),disabled:T,mode:"multiple",onChange:ne,options:(e,t,i)=>le("owners",e,t,i),value:ce()})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("Owners is a list of users who can alter the dashboard. Searchable by name or username."))),(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)("h3",{style:{marginTop:"1em"}},(0,m.t)("Colors")),(0,$.tZ)(I,{hasCustomLabelColors:t,onChange:de,colorScheme:z,labelMargin:4})))})(),(0,$.tZ)(h.X2,null,(0,$.tZ)(h.JX,{xs:24,md:24},(0,$.tZ)("h3",null,(0,m.t)("Certification")))),(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,{label:(0,m.t)("Certified by"),name:"certifiedBy"},(0,$.tZ)(o.II,{type:"text",disabled:T})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("Person or group that has certified this dashboard."))),(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,{label:(0,m.t)("Certification details"),name:"certificationDetails"},(0,$.tZ)(o.II,{type:"text",disabled:T})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("Any additional detail to show in the certification tooltip.")))),(0,x.cr)(x.TT.TaggingSystem)?(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)("h3",{css:L},(0,m.t)("Tags")))):null,(0,x.cr)(x.TT.TaggingSystem)?(0,$.tZ)(h.X2,{gutter:16},(0,$.tZ)(h.JX,{xs:24,md:12},(0,$.tZ)(M,null,(0,$.tZ)(h.qb,{ariaLabel:"Tags",mode:"multiple",value:te,options:_.m,onChange:e=>{const t=[...new Set(e.map((e=>e.label)))];G([...t.map((e=>({name:e})))])},allowClear:!0})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("A list of tags that have been applied to this chart.")))):null,(0,$.tZ)(h.X2,null,(0,$.tZ)(h.JX,{xs:24,md:24},(0,$.tZ)("h3",{style:{marginTop:"1em"}},(0,$.tZ)(d.Z,{buttonStyle:"link",onClick:()=>D(!A)},(0,$.tZ)("i",{className:"fa fa-angle-"+(A?"down":"right"),style:{minWidth:"1em"}}),(0,m.t)("Advanced"))),A&&(0,$.tZ)(a.Fragment,null,(0,$.tZ)(M,{label:(0,m.t)("JSON metadata")},(0,$.tZ)(R,{showLoadingForImport:!0,name:"json_metadata",value:J,onChange:X,tabSize:2,width:"100%",height:"200px",wrapEnabled:!0})),(0,$.tZ)("p",{className:"help-block"},(0,m.t)("This JSON object is generated dynamically when clicking the save or overwrite button in the dashboard view. It is exposed here for reference and for power users who may want to alter specific parameters."),S&&(0,$.tZ)(a.Fragment,null," ",(0,m.t)('Please DO NOT overwrite the "filter_scopes" key.')," ",(0,$.tZ)(E.Z,{triggerNode:(0,$.tZ)("span",{className:"alert-link"},(0,m.t)('Use "%(menuName)s" menu instead.',{menuName:(0,m.t)("Set filter mapping")}))}))))))))}))},87999:(e,t,i)=>{i.d(t,{Z:()=>me});var l=i(67294),r=i(51995),a=i(1304),o=i(28216),n=i(14890),s=i(81395),c=i(9467),d=i(45697),h=i.n(d),p=i(94184),u=i.n(p),g=i(35932),m=i(11965),f=i(61988),b=i(41609),v=i.n(b),y=i(80621),Z=i(81255);const x=[Z.gn,Z.U0];function F({currentNode:e={},components:t={},filterFields:i=[],selectedChartId:l}){if(!e)return null;const{type:r}=e;if(Z.dW===r&&e&&e.meta&&e.meta.chartId)return{value:e.meta.chartId,label:e.meta.sliceName||`${r} ${e.meta.chartId}`,type:r,showCheckbox:l!==e.meta.chartId,children:[]};let a=[];if(e.children&&e.children.length&&e.children.forEach((e=>{const r=F({currentNode:t[e],components:t,filterFields:i,selectedChartId:l}),o=t[e].type;x.includes(o)?a.push(r):a=a.concat(r)})),x.includes(r)){let t=null;return t=r===Z.U0?(0,f.t)("All charts"):e.meta&&e.meta.text?e.meta.text:`${r} ${e.id}`,{value:e.id,label:t,type:r,children:a}}return a}function C({components:e={},filterFields:t=[],selectedChartId:i}){return v()(e)?[]:[{...F({currentNode:e[y._4],components:e,filterFields:t,selectedChartId:i})}]}function S(e=[],t=-1){const i=[],l=(e,r)=>{e&&e.children&&(-1===t||r<t)&&(i.push(e.value),e.children.forEach((e=>l(e,r+1))))};return e.length>0&&e.forEach((e=>{l(e,0)})),i}var k=i(9679);function w({activeFilterField:e,checkedFilterFields:t}){return(0,k.o)(e?[e]:t)}var $=i(20194);function N({activeFilterField:e,checkedFilterFields:t}){if(e)return(0,$._)(e).chartId;if(t.length){const{chartId:e}=(0,$._)(t[0]);return t.some((t=>(0,$._)(t).chartId!==e))?null:e}return null}function T({checkedFilterFields:e=[],activeFilterField:t,filterScopeMap:i={},layout:l={}}){const r=w({checkedFilterFields:e,activeFilterField:t}),a=t?[t]:e,o=C({components:l,filterFields:a,selectedChartId:N({checkedFilterFields:e,activeFilterField:t})}),n=new Set;a.forEach((e=>{(i[e].checked||[]).forEach((t=>{n.add(`${t}:${e}`)}))}));const s=[...n],c=i[r]?i[r].expanded:S(o,1);return{[r]:{nodes:o,nodesFiltered:[...o],checked:s,expanded:c}}}var I=i(94654),E=i.n(I),U=i(83927),j=i.n(U),O=i(58809),_=i.n(O),M=i(8816),R=i.n(M);function L({tabScopes:e,parentNodeValue:t,forceAggregate:i=!1,hasChartSiblings:l=!1,tabChildren:r=[],immuneChartSiblings:a=[]}){if(i||!l&&Object.entries(e).every((([e,{scope:t}])=>t&&t.length&&e===t[0]))){const i=function({tabs:e=[],tabsInScope:t=[]}){const i=[];return e.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&l.forEach((({value:e,children:l})=>{l&&!t.includes(e)&&i.push(...l.filter((({type:e})=>e===Z.dW)))}))})),i.map((({value:e})=>e))}({tabs:r,tabsInScope:E()(e,(({scope:e})=>e))}),l=E()(Object.values(e),(({immune:e})=>e));return{scope:[t],immune:[...new Set([...i,...l])]}}const o=Object.values(e).filter((({scope:e})=>e&&e.length));return{scope:E()(o,(({scope:e})=>e)),immune:o.length?E()(o,(({immune:e})=>e)):E()(Object.values(e),(({immune:e})=>e)).concat(a)}}function A({currentNode:e={},filterId:t,checkedChartIds:i=[]}){if(!e)return{};const{value:l,children:r}=e,a=r.filter((({type:e})=>e===Z.dW)),o=r.filter((({type:e})=>e===Z.gn)),n=a.filter((({value:e})=>t!==e&&!i.includes(e))).map((({value:e})=>e)),s=R()(_()((e=>e.value)),j()((e=>A({currentNode:e,filterId:t,checkedChartIds:i}))))(o);if(!v()(a)&&a.some((({value:e})=>i.includes(e)))){if(v()(o))return{scope:[l],immune:n};const{scope:e,immune:t}=L({tabScopes:s,parentNodeValue:l,forceAggregate:!0,tabChildren:o});return{scope:e,immune:n.concat(t)}}return o.length?L({tabScopes:s,parentNodeValue:l,hasChartSiblings:!v()(a),tabChildren:o,immuneChartSiblings:n}):{scope:[],immune:n}}function D({filterKey:e,nodes:t=[],checkedChartIds:i=[]}){if(t.length){const{chartId:l}=(0,$._)(e);return A({currentNode:t[0],filterId:l,checkedChartIds:i})}return{}}var z=i(43399),q=i(2275),J=i(28388),X=i.n(J),H=i(13322);const B=(0,r.iK)(H.Z.BarChartOutlined)`
  ${({theme:e})=>`\n    position: relative;\n    top: ${e.gridUnit-1}px;\n    color: ${e.colors.primary.base};\n    margin-right: ${2*e.gridUnit}px;\n  `}
`;function K({currentNode:e={},selectedChartId:t}){if(!e)return null;const{label:i,value:l,type:r,children:a}=e;if(a&&a.length){const o=a.map((e=>K({currentNode:e,selectedChartId:t})));return{...e,label:(0,m.tZ)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l})},r===Z.dW&&(0,m.tZ)(B,null),i),children:o}}return{...e,label:(0,m.tZ)("span",{className:u()(`filter-scope-type ${r.toLowerCase()}`,{"selected-filter":t===l})},i)}}function P({nodes:e,selectedChartId:t}){return e?e.map((e=>K({currentNode:e,selectedChartId:t}))):[]}var V=i(13842);const W={check:(0,m.tZ)(V.lU,null),uncheck:(0,m.tZ)(V.zq,null),halfCheck:(0,m.tZ)(V.dc,null),expandClose:(0,m.tZ)("span",{className:"rct-icon rct-icon-expand-close"}),expandOpen:(0,m.tZ)("span",{className:"rct-icon rct-icon-expand-open"}),expandAll:(0,m.tZ)("span",{className:"rct-icon rct-icon-expand-all"},(0,f.t)("Expand all")),collapseAll:(0,m.tZ)("span",{className:"rct-icon rct-icon-collapse-all"},(0,f.t)("Collapse all")),parentClose:(0,m.tZ)("span",{className:"rct-icon rct-icon-parent-close"}),parentOpen:(0,m.tZ)("span",{className:"rct-icon rct-icon-parent-open"}),leaf:(0,m.tZ)("span",{className:"rct-icon rct-icon-leaf"})},Y={nodes:h().arrayOf(q.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,selectedChartId:h().number},Q=()=>{};function G({nodes:e=[],checked:t=[],expanded:i=[],onCheck:l,onExpand:r,selectedChartId:a}){return(0,m.tZ)(X(),{showExpandAll:!0,expandOnClick:!0,showNodeIcon:!1,nodes:P({nodes:e,selectedChartId:a}),checked:t,expanded:i,onCheck:l,onExpand:r,onClick:Q,icons:W})}G.propTypes=Y,G.defaultProps={selectedChartId:null};var ee=i(49238);const te={label:h().string.isRequired,isSelected:h().bool.isRequired};function ie({label:e,isSelected:t}){return(0,m.tZ)("span",{className:u()("filter-field-item filter-container",{"is-selected":t})},(0,m.tZ)(ee.lX,{htmlFor:e},e))}function le({nodes:e,activeKey:t}){if(!e)return[];const i=e[0],l=i.children.map((e=>({...e,children:e.children.map((e=>{const{label:i,value:l}=e;return{...e,label:(0,m.tZ)(ie,{isSelected:l===t,label:i})}}))})));return[{...i,label:(0,m.tZ)("span",{className:"root"},i.label),children:l}]}ie.propTypes=te;const re={activeKey:h().string,nodes:h().arrayOf(q.ck).isRequired,checked:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,expanded:h().arrayOf(h().oneOfType([h().number,h().string])).isRequired,onCheck:h().func.isRequired,onExpand:h().func.isRequired,onClick:h().func.isRequired};function ae({activeKey:e,nodes:t=[],checked:i=[],expanded:l=[],onClick:r,onCheck:a,onExpand:o}){return(0,m.tZ)(X(),{showExpandAll:!0,showNodeIcon:!1,expandOnClick:!0,nodes:le({nodes:t,activeKey:e}),checked:i,expanded:l,onClick:r,onCheck:a,onExpand:o,icons:W})}ae.propTypes=re,ae.defaultProps={activeKey:null};const oe={dashboardFilters:h().objectOf(q.Er).isRequired,layout:h().object.isRequired,updateDashboardFiltersScope:h().func.isRequired,setUnsavedChanges:h().func.isRequired,onCloseModal:h().func.isRequired},ne=r.iK.div`
  ${({theme:e})=>m.iv`
    display: flex;
    flex-direction: column;
    height: 80%;
    margin-right: ${-6*e.gridUnit}px;
    font-size: ${e.typography.sizes.m}px;

    & .nav.nav-tabs {
      border: none;
    }

    & .filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }

    & .warning-message {
      padding: ${6*e.gridUnit}px;
    }
  `}
`,se=r.iK.div`
  ${({theme:e})=>m.iv`
    &.filter-scope-body {
      flex: 1;
      max-height: calc(100% - ${32*e.gridUnit}px);

      .filter-field-pane,
      .filter-scope-pane {
        overflow-y: auto;
      }
    }
  `}
`,ce=r.iK.div`
  ${({theme:e})=>m.iv`
    height: ${16*e.gridUnit}px;
    border-bottom: 1px solid ${e.colors.grayscale.light2};
    padding-left: ${6*e.gridUnit}px;
    margin-left: ${-6*e.gridUnit}px;

    h4 {
      margin-top: 0;
    }

    .selected-fields {
      margin: ${3*e.gridUnit}px 0 ${4*e.gridUnit}px;
      visibility: hidden;

      &.multi-edit-mode {
        visibility: visible;
      }

      .selected-scopes {
        padding-left: ${e.gridUnit}px;
      }
    }
  `}
`,de=r.iK.div`
  ${({theme:e})=>m.iv`
    &.filters-scope-selector {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 100%;

      a,
      a:active,
      a:hover {
        color: inherit;
        text-decoration: none;
      }

      .react-checkbox-tree .rct-icon.rct-icon-expand-all,
      .react-checkbox-tree .rct-icon.rct-icon-collapse-all {
        font-family: ${e.typography.families.sansSerif};
        font-size: ${e.typography.sizes.m}px;
        color: ${e.colors.primary.base};

        &::before {
          content: '';
        }

        &:hover {
          text-decoration: underline;
        }

        &:focus {
          outline: none;
        }
      }

      .filter-field-pane {
        position: relative;
        width: 40%;
        padding: ${4*e.gridUnit}px;
        padding-left: 0;
        border-right: 1px solid ${e.colors.grayscale.light2};

        .filter-container label {
          font-weight: ${e.typography.weights.normal};
          margin: 0 0 0 ${4*e.gridUnit}px;
          word-break: break-all;
        }

        .filter-field-item {
          height: ${9*e.gridUnit}px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 ${6*e.gridUnit}px;
          margin-left: ${-6*e.gridUnit}px;

          &.is-selected {
            border: 1px solid ${e.colors.text.label};
            border-radius: ${e.borderRadius}px;
            background-color: ${e.colors.grayscale.light4};
            margin-left: ${-6*e.gridUnit}px;
          }
        }

        .react-checkbox-tree {
          .rct-title .root {
            font-weight: ${e.typography.weights.bold};
          }

          .rct-text {
            height: ${10*e.gridUnit}px;
          }
        }
      }

      .filter-scope-pane {
        position: relative;
        flex: 1;
        padding: ${4*e.gridUnit}px;
        padding-right: ${6*e.gridUnit}px;
      }

      .react-checkbox-tree {
        flex-direction: column;
        color: ${e.colors.grayscale.dark1};
        font-size: ${e.typography.sizes.m}px;

        .filter-scope-type {
          padding: ${2*e.gridUnit}px 0;
          display: flex;
          align-items: center;

          &.chart {
            font-weight: ${e.typography.weights.normal};
          }

          &.selected-filter {
            padding-left: ${7*e.gridUnit}px;
            position: relative;
            color: ${e.colors.text.label};

            &::before {
              content: ' ';
              position: absolute;
              left: 0;
              top: 50%;
              width: ${4*e.gridUnit}px;
              height: ${4*e.gridUnit}px;
              border-radius: ${e.borderRadius}px;
              margin-top: ${-2*e.gridUnit}px;
              box-shadow: inset 0 0 0 2px ${e.colors.grayscale.light2};
              background: ${e.colors.grayscale.light3};
            }
          }

          &.root {
            font-weight: ${e.typography.weights.bold};
          }
        }

        .rct-checkbox {
          svg {
            position: relative;
            top: 3px;
            width: ${4.5*e.gridUnit}px;
          }
        }

        .rct-node-leaf {
          .rct-bare-label {
            &::before {
              padding-left: ${e.gridUnit}px;
            }
          }
        }

        .rct-options {
          text-align: left;
          margin-left: 0;
          margin-bottom: ${2*e.gridUnit}px;
        }

        .rct-text {
          margin: 0;
          display: flex;
        }

        .rct-title {
          display: block;
        }

        // disable style from react-checkbox-trees.css
        .rct-node-clickable:hover,
        .rct-node-clickable:focus,
        label:hover,
        label:active {
          background: none !important;
        }
      }

      .multi-edit-mode {
        .filter-field-item {
          padding: 0 ${4*e.gridUnit}px 0 ${12*e.gridUnit}px;
          margin-left: ${-12*e.gridUnit}px;

          &.is-selected {
            margin-left: ${-13*e.gridUnit}px;
          }
        }
      }

      .scope-search {
        position: absolute;
        right: ${4*e.gridUnit}px;
        top: ${4*e.gridUnit}px;
        border-radius: ${e.borderRadius}px;
        border: 1px solid ${e.colors.grayscale.light2};
        padding: ${e.gridUnit}px ${2*e.gridUnit}px;
        font-size: ${e.typography.sizes.m}px;
        outline: none;

        &:focus {
          border: 1px solid ${e.colors.primary.base};
        }
      }
    }
  `}
`,he=r.iK.div`
  ${({theme:e})=>`\n    height: ${16*e.gridUnit}px;\n\n    border-top: ${e.gridUnit/4}px solid ${e.colors.primary.light3};\n    padding: ${6*e.gridUnit}px;\n    margin: 0 0 0 ${6*-e.gridUnit}px;\n    text-align: right;\n\n    .btn {\n      margin-right: ${4*e.gridUnit}px;\n\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  `}
`;class pe extends l.PureComponent{constructor(e){super(e);const{dashboardFilters:t,layout:i}=e;if(Object.keys(t).length>0){const e=function({dashboardFilters:e={}}){const t=Object.values(e).map((e=>{const{chartId:t,filterName:i,columns:l,labels:r}=e,a=Object.keys(l).map((e=>({value:(0,$.w)({chartId:t,column:e}),label:r[e]||e})));return{value:t,label:i,children:a,showCheckbox:!0}}));return[{value:y.dU,type:Z.U0,label:(0,f.t)("All filters"),children:t}]}({dashboardFilters:t}),l=e[0].children;this.allfilterFields=[],l.forEach((({children:e})=>{e.forEach((e=>{this.allfilterFields.push(e.value)}))})),this.defaultFilterKey=l[0].children[0].value;const r=Object.values(t).reduce(((e,{chartId:l,columns:r})=>({...e,...Object.keys(r).reduce(((e,r)=>{const a=(0,$.w)({chartId:l,column:r}),o=C({components:i,filterFields:[a],selectedChartId:l}),n=S(o,1),s=((0,z.Q1)({filterScope:t[l].scopes[r]})||[]).filter((e=>e!==l));return{...e,[a]:{nodes:o,nodesFiltered:[...o],checked:s,expanded:n}}}),{})})),{}),{chartId:a}=(0,$._)(this.defaultFilterKey),o=[],n=this.defaultFilterKey,s=[y.dU].concat(a),c=T({checkedFilterFields:o,activeFilterField:n,filterScopeMap:r,layout:i});this.state={showSelector:!0,activeFilterField:n,searchText:"",filterScopeMap:{...r,...c},filterFieldNodes:e,checkedFilterFields:o,expandedFilterIds:s}}else this.state={showSelector:!1};this.filterNodes=this.filterNodes.bind(this),this.onChangeFilterField=this.onChangeFilterField.bind(this),this.onCheckFilterScope=this.onCheckFilterScope.bind(this),this.onExpandFilterScope=this.onExpandFilterScope.bind(this),this.onSearchInputChange=this.onSearchInputChange.bind(this),this.onCheckFilterField=this.onCheckFilterField.bind(this),this.onExpandFilterField=this.onExpandFilterField.bind(this),this.onClose=this.onClose.bind(this),this.onSave=this.onSave.bind(this)}onCheckFilterScope(e=[]){const{activeFilterField:t,filterScopeMap:i,checkedFilterFields:l}=this.state,r=w({activeFilterField:t,checkedFilterFields:l}),a=t?[t]:l,o={...i[r],checked:e},n=function({checked:e=[],filterFields:t=[],filterScopeMap:i={}}){const l=e.reduce(((e,t)=>{const[i,l]=t.split(":");return{...e,[l]:(e[l]||[]).concat(parseInt(i,10))}}),{});return t.reduce(((e,t)=>({...e,[t]:{...i[t],checked:l[t]||[]}})),{})}({checked:e,filterFields:a,filterScopeMap:i});this.setState((()=>({filterScopeMap:{...i,...n,[r]:o}})))}onExpandFilterScope(e=[]){const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=this.state,r=w({activeFilterField:t,checkedFilterFields:i}),a={...l[r],expanded:e};this.setState((()=>({filterScopeMap:{...l,[r]:a}})))}onCheckFilterField(e=[]){const{layout:t}=this.props,{filterScopeMap:i}=this.state,l=T({checkedFilterFields:e,activeFilterField:null,filterScopeMap:i,layout:t});this.setState((()=>({activeFilterField:null,checkedFilterFields:e,filterScopeMap:{...i,...l}})))}onExpandFilterField(e=[]){this.setState((()=>({expandedFilterIds:e})))}onChangeFilterField(e={}){const{layout:t}=this.props,i=e.value,{activeFilterField:l,checkedFilterFields:r,filterScopeMap:a}=this.state;if(i===l){const e=T({checkedFilterFields:r,activeFilterField:null,filterScopeMap:a,layout:t});this.setState({activeFilterField:null,filterScopeMap:{...a,...e}})}else if(this.allfilterFields.includes(i)){const e=T({checkedFilterFields:r,activeFilterField:i,filterScopeMap:a,layout:t});this.setState({activeFilterField:i,filterScopeMap:{...a,...e}})}}onSearchInputChange(e){this.setState({searchText:e.target.value},this.filterTree)}onClose(){this.props.onCloseModal()}onSave(){const{filterScopeMap:e}=this.state,t=this.allfilterFields.reduce(((t,i)=>{const{nodes:l}=e[i];return{...t,[i]:D({filterKey:i,nodes:l,checkedChartIds:e[i].checked})}}),{});this.props.updateDashboardFiltersScope(t),this.props.setUnsavedChanges(!0),this.props.onCloseModal()}filterTree(){if(this.state.searchText){const e=e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=w({activeFilterField:t,checkedFilterFields:i}),a=l[r].nodes.reduce(this.filterNodes,[]),o=S([...a]),n={...l[r],nodesFiltered:a,expanded:o};return{filterScopeMap:{...l,[r]:n}}};this.setState(e)}else this.setState((e=>{const{activeFilterField:t,checkedFilterFields:i,filterScopeMap:l}=e,r=w({activeFilterField:t,checkedFilterFields:i}),a={...l[r],nodesFiltered:l[r].nodes};return{filterScopeMap:{...l,[r]:a}}}))}filterNodes(e=[],t={}){const{searchText:i}=this.state,l=(t.children||[]).reduce(this.filterNodes,[]);return(t.label.toLocaleLowerCase().indexOf(i.toLocaleLowerCase())>-1||l.length)&&e.push({...t,children:l}),e}renderFilterFieldList(){const{activeFilterField:e,filterFieldNodes:t,checkedFilterFields:i,expandedFilterIds:l}=this.state;return(0,m.tZ)(ae,{activeKey:e,nodes:t,checked:i,expanded:l,onClick:this.onChangeFilterField,onCheck:this.onCheckFilterField,onExpand:this.onExpandFilterField})}renderFilterScopeTree(){const{filterScopeMap:e,activeFilterField:t,checkedFilterFields:i,searchText:r}=this.state,a=w({activeFilterField:t,checkedFilterFields:i}),o=N({activeFilterField:t,checkedFilterFields:i});return(0,m.tZ)(l.Fragment,null,(0,m.tZ)("input",{className:"filter-text scope-search multi-edit-mode",placeholder:(0,f.t)("Search..."),type:"text",value:r,onChange:this.onSearchInputChange}),(0,m.tZ)(G,{nodes:e[a].nodesFiltered,checked:e[a].checked,expanded:e[a].expanded,onCheck:this.onCheckFilterScope,onExpand:this.onExpandFilterScope,selectedChartId:o}))}renderEditingFiltersName(){const{dashboardFilters:e}=this.props,{activeFilterField:t,checkedFilterFields:i}=this.state,l=[].concat(t||i).map((t=>{const{chartId:i,column:l}=(0,$._)(t);return e[i].labels[l]||l}));return(0,m.tZ)("div",{className:"selected-fields multi-edit-mode"},0===l.length&&(0,f.t)("No filter is selected."),1===l.length&&(0,f.t)("Editing 1 filter:"),l.length>1&&(0,f.t)("Batch editing %d filters:",l.length),(0,m.tZ)("span",{className:"selected-scopes"},l.join(", ")))}render(){const{showSelector:e}=this.state;return(0,m.tZ)(ne,null,(0,m.tZ)(ce,null,(0,m.tZ)("h4",null,(0,f.t)("Configure filter scopes")),e&&this.renderEditingFiltersName()),(0,m.tZ)(se,{className:"filter-scope-body"},e?(0,m.tZ)(de,{className:"filters-scope-selector"},(0,m.tZ)("div",{className:u()("filter-field-pane multi-edit-mode")},this.renderFilterFieldList()),(0,m.tZ)("div",{className:"filter-scope-pane multi-edit-mode"},this.renderFilterScopeTree())):(0,m.tZ)("div",{className:"warning-message"},(0,f.t)("There are no filters in this dashboard."))),(0,m.tZ)(he,null,(0,m.tZ)(g.Z,{buttonSize:"small",onClick:this.onClose},(0,f.t)("Close")),e&&(0,m.tZ)(g.Z,{buttonSize:"small",buttonStyle:"primary",onClick:this.onSave},(0,f.t)("Save"))))}}pe.propTypes=oe;const ue=(0,o.$j)((function({dashboardLayout:e,dashboardFilters:t}){return{dashboardFilters:t,layout:e.present}}),(function(e){return(0,n.DE)({updateDashboardFiltersScope:s.l6,setUnsavedChanges:c.if},e)}))(pe),ge=r.iK.div((({theme:{gridUnit:e}})=>({padding:2*e,paddingBottom:3*e})));class me extends l.PureComponent{constructor(e){super(e),this.modal=void 0,this.modal=l.createRef(),this.handleCloseModal=this.handleCloseModal.bind(this)}handleCloseModal(){var e,t;null==this||null==(e=this.modal)||null==(t=e.current)||null==t.close||t.close()}render(){const e={onCloseModal:this.handleCloseModal};return(0,m.tZ)(a.Z,{ref:this.modal,triggerNode:this.props.triggerNode,modalBody:(0,m.tZ)(ge,null,(0,m.tZ)(ue,e)),width:"80%"})}}},82342:(e,t,i)=>{i.d(t,{Z:()=>p});var l=i(67294),r=i(11965),a=i(51995),o=i(61988),n=i(9882),s=i(58593),c=i(49238),d=i(13322);const h=r.iv`
  &.anticon {
    font-size: unset;
    .anticon {
      line-height: unset;
      vertical-align: unset;
    }
  }
`,p=({name:e,label:t,description:i,validationErrors:p=[],renderTrigger:u=!1,rightNode:g,leftNode:m,onClick:f,hovered:b=!1,tooltipOnClick:v=(()=>{}),warning:y,danger:Z})=>{const{gridUnit:x,colors:F}=(0,a.Fg)(),C=(0,l.useRef)(!1),S=(0,l.useMemo)((()=>(p.length||(C.current=!0),C.current?p.length?F.error.base:"unset":F.alert.base)),[F.error.base,F.alert.base,p.length]);return t?(0,r.tZ)("div",{className:"ControlHeader"},(0,r.tZ)("div",{className:"pull-left"},(0,r.tZ)(c.lX,{css:e=>r.iv`
            margin-bottom: ${.5*e.gridUnit}px;
            position: relative;
          `},m&&(0,r.tZ)("span",null,m),(0,r.tZ)("span",{role:"button",tabIndex:0,onClick:f,style:{cursor:f?"pointer":""}},t)," ",y&&(0,r.tZ)("span",null,(0,r.tZ)(s.u,{id:"error-tooltip",placement:"top",title:y},(0,r.tZ)(d.Z.AlertSolid,{iconColor:F.alert.base,iconSize:"s"}))," "),Z&&(0,r.tZ)("span",null,(0,r.tZ)(s.u,{id:"error-tooltip",placement:"top",title:Z},(0,r.tZ)(d.Z.ErrorSolid,{iconColor:F.error.base,iconSize:"s"}))," "),(null==p?void 0:p.length)>0&&(0,r.tZ)("span",null,(0,r.tZ)(s.u,{id:"error-tooltip",placement:"top",title:null==p?void 0:p.join(" ")},(0,r.tZ)(d.Z.ExclamationCircleOutlined,{css:r.iv`
                    ${h};
                    color: ${S};
                  `}))," "),b?(0,r.tZ)("span",{css:()=>r.iv`
          position: absolute;
          top: 50%;
          right: 0;
          padding-left: ${x}px;
          transform: translate(100%, -50%);
          white-space: nowrap;
        `},i&&(0,r.tZ)("span",null,(0,r.tZ)(s.u,{id:"description-tooltip",title:i,placement:"top"},(0,r.tZ)(d.Z.InfoCircleOutlined,{css:h,onClick:v}))," "),u&&(0,r.tZ)("span",null,(0,r.tZ)(n.V,{label:(0,o.t)("bolt"),tooltip:(0,o.t)("Changing this control takes effect instantly"),placement:"top",icon:"bolt"})," ")):null)),g&&(0,r.tZ)("div",{className:"pull-right"},g),(0,r.tZ)("div",{className:"clearfix"})):null}},76787:(e,t,i)=>{i.d(t,{Z:()=>y});var l=i(73126),r=i(23560),a=i.n(r),o=i(67294),n=i(51995),s=i(61988),c=i(4715),d=i(82342),h=i(58593),p=i(13322),u=i(11965);function g(e){const{id:t,label:i,colors:l}=e,[r,a]=(0,o.useState)(!1),n=(0,o.useRef)(null),s=(0,o.useRef)(null),c=()=>l.map(((e,i)=>(0,u.tZ)("span",{key:`${t}-${i}`,css:t=>u.iv`
          padding-left: ${t.gridUnit/2}px;
          :before {
            content: '';
            display: inline-block;
            background-color: ${e};
            border: 1px solid ${"white"===e?"black":e};
            width: 9px;
            height: 10px;
          }
        `})));return(0,u.tZ)(h.u,{"data-testid":"tooltip",overlayClassName:"color-scheme-tooltip",title:()=>(0,u.tZ)(o.Fragment,null,(0,u.tZ)("span",null,i),(0,u.tZ)("div",null,c())),key:t,visible:r},(0,u.tZ)("span",{className:"color-scheme-option",onMouseEnter:()=>{const e=n.current,t=s.current;e&&t&&(e.scrollWidth>e.offsetWidth||e.scrollHeight>e.offsetHeight||t.scrollWidth>t.offsetWidth||t.scrollHeight>t.offsetHeight)&&a(!0)},onMouseLeave:()=>{a(!1)},css:u.iv`
          display: flex;
          align-items: center;
          justify-content: flex-start;
        `},(0,u.tZ)("span",{className:"color-scheme-label",ref:n,css:e=>u.iv`
            min-width: 125px;
            padding-right: ${2*e.gridUnit}px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          `},i),(0,u.tZ)("span",{ref:s,css:e=>u.iv`
            flex: 100%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding-right: ${e.gridUnit}px;
          `},c())))}const m=(0,n.iK)(p.Z.AlertSolid)`
  color: ${({theme:e})=>e.colors.alert.base};
`,f=(0,s.t)("This color scheme is being overridden by custom label colors.\n    Check the JSON metadata in the Advanced settings"),b=(0,s.t)("The color scheme is determined by the related dashboard.\n        Edit the color scheme in the dashboard properties."),v=({label:e,hasCustomLabelColors:t,dashboardId:i})=>{if(t||i){const i=t?f:b;return(0,u.tZ)(o.Fragment,null,e," ",(0,u.tZ)(h.u,{title:i},(0,u.tZ)(m,{iconSize:"s"})))}return(0,u.tZ)(o.Fragment,null,e)},y=({hasCustomLabelColors:e=!1,dashboardId:t,label:i=(0,s.t)("Color scheme"),name:r,onChange:n=(()=>{}),value:p,clearable:m=!1,defaultScheme:f,choices:y=[],schemes:Z={},isLinear:x,...F})=>{const C=(0,o.useMemo)((()=>{if(t)return"dashboard";let e=p||f;if("SUPERSET_DEFAULT"===e){var i;const t=a()(Z)?Z():Z;e=null==t||null==(i=t.SUPERSET_DEFAULT)?void 0:i.id}return e}),[t,f,Z,p]),S=(0,o.useMemo)((()=>{if(t)return[{value:"dashboard",label:(0,s.t)("dashboard"),customLabel:(0,u.tZ)(h.u,{title:b},(0,s.t)("Dashboard scheme"))}];const e=a()(Z)?Z():Z,i=a()(y)?y():y,l=[];return i.filter((e=>{const t=e[0],i="SUPERSET_DEFAULT"!==t&&!l.includes(t);return l.push(t),i})).map((([t])=>{var i;const l=e[t];let r=[];return l&&(r=x?l.getColors(10):l.colors),{customLabel:(0,u.tZ)(g,{id:l.id,label:l.label,colors:r}),label:(null==e||null==(i=e[t])?void 0:i.label)||t,value:t}}))}),[y,t,x,Z]);return(0,u.tZ)(c.Ph,{header:(0,u.tZ)(d.Z,(0,l.Z)({},F,{label:(0,u.tZ)(v,{label:i,hasCustomLabelColors:e,dashboardId:t})})),ariaLabel:(0,s.t)("Select color scheme"),allowClear:m,disabled:!!t,name:`select-${r}`,onChange:e=>n(e),options:S,placeholder:(0,s.t)("Select scheme"),value:C})}},48273:(e,t,i)=>{i.d(t,{$3:()=>h,AN:()=>m,LS:()=>d,OY:()=>p,Qz:()=>u,_U:()=>g,g:()=>n});var l=i(31069),r=i(15926),a=i.n(r);const o=Object.freeze(["dashboard","chart","saved_query"]),n=Object.freeze({DASHBOARD:"dashboard",CHART:"chart",QUERY:"saved_query"}),s={saved_query:1,chart:2,dashboard:3},c=e=>{if(!o.includes(e))throw new Error(`objectType ${e} is invalid`);return s[e]};function d(e,t,i){l.Z.get({endpoint:`/api/v1/tag/${e}`}).then((({json:e})=>t(e.result))).catch((e=>i(e)))}function h({objectType:e,objectId:t,includeTypes:i=!1},r,a){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!o.includes(e))throw new Error(`objectType ${e} is invalid`);l.Z.get({endpoint:`/api/v1/${e}/${t}`}).then((({json:e})=>r(e.result.tags.filter((e=>1===e.type))))).catch((e=>a(e)))}function p({objectType:e,objectId:t},i,r,a){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");if(!o.includes(e))throw new Error(`objectType ${e} is invalid`);l.Z.delete({endpoint:`/api/v1/tag/${c(e)}/${t}/${i.name}`}).then((({json:e})=>r(e?JSON.stringify(e):"Successfully Deleted Tagged Objects"))).catch((e=>{const t=e.message;return a(t||"Error Deleting Tagged Objects")}))}function u(e,t,i){const r=e.map((e=>e.name));l.Z.delete({endpoint:`/api/v1/tag/?q=${a().encode(r)}`}).then((({json:e})=>e.message?t(e.message):t("Successfully Deleted Tag"))).catch((e=>{const t=e.message;return i(t||"Error Deleting Tag")}))}function g({objectType:e,objectId:t,includeTypes:i=!1},r,a,o){if(void 0===e||void 0===t)throw new Error("Need to specify objectType and objectId");const n=c(e);l.Z.post({endpoint:`/api/v1/tag/${n}/${t}/`,body:JSON.stringify({properties:{tags:[r]}}),parseMethod:"json",headers:{"Content-Type":"application/json"}}).then((({json:e})=>a(JSON.stringify(e)))).catch((e=>o(e)))}function m({tagIds:e=[],types:t},i,r){let a=`/api/v1/tag/get_objects/?tagIds=${e}`;t&&(a+=`&types=${t}`),l.Z.get({endpoint:a}).then((({json:e})=>i(e.result))).catch((e=>r(e)))}},65108:(e,t,i)=>{i.d(t,{g:()=>l});const l=(e,t,i=((...e)=>JSON.stringify([...e])))=>(...l)=>{const r=i(...l);if(t.has(r))return t.get(r);const a=e(...l);return t.set(r,a),a}}}]);
//# sourceMappingURL=4717.6e1228de78034469da38.entry.js.map