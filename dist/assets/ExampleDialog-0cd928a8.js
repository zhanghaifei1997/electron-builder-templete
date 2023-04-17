import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-46bac8fa.js";import{_ as a}from"./Search.vue_vue_type_script_setup_true_lang-d78f9c7a.js";import{_ as t}from"./Dialog.vue_vue_type_style_index_0_lang-9d1e0892.js";import{d as l,q as o,I as r,r as i,ao as s,o as m,c as n,g as p,w as u,a as d,e as c,B as _,t as v,a8 as g,h as f,G as j,F as y,k as b}from"./index-13030047.js";import{E as h}from"./el-button-27772831.js";import{E as w}from"./el-tag-30a7bbad.js";import{_ as D}from"./Table.vue_vue_type_script_lang-6054c4c4.js";import{g as x,d as S,s as k}from"./index-73563cd8.js";import{u as P}from"./useTable-0ba9f7ea.js";import{_ as C}from"./Write.vue_vue_type_script_setup_true_lang-a2f10941.js";import{_ as R}from"./Detail.vue_vue_type_script_setup_true_lang-f29970ab.js";import{u as F}from"./useCrudSchemas-29be5d05.js";import"./el-card-b4065fbb.js";import"./el-popper-fd2eedc1.js";import"./constants-795fc76a.js";import"./Form-c03ab119.js";import"./el-col-b79058d5.js";import"./el-input-7af69275.js";import"./event-5568c9d8.js";import"./use-form-item-d6edd9f4.js";import"./use-form-common-props-280177cd.js";import"./tsxHelper-871e9ef3.js";import"./scroll-a4ae664c.js";import"./debounce-aa60cf2f.js";import"./validator-721c49e6.js";import"./el-input-number-22ed6b28.js";import"./el-switch-9cd07555.js";import"./el-divider-25829e77.js";import"./InputPassword-cec31836.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-4de620e0.js";import"./aria-ecee1d93.js";import"./useForm-e3c41ea9.js";import"./el-overlay-b67dd3f2.js";import"./vnode-a962394e.js";import"./use-dialog-6c558818.js";import"./refs-60d0e198.js";import"./el-message-box-5a9694b4.js";import"./useValidator-36e64419.js";import"./Descriptions-c6e0e04c.js";import"./index-380d49e6.js";import"./tree-b59d36bb.js";const z={class:"mb-10px"},E=l({__name:"ExampleDialog",setup(l){const{register:E,tableObject:L,methods:V}=P({getListApi:x,delListApi:S,response:{list:"list",total:"total"},defaultParams:{title:"s"}}),{getList:Y,setSearchParams:T}=V;Y();const{t:U}=b(),H=o([{field:"index",label:U("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"title",label:U("tableDemo.title"),search:{show:!0},form:{colProps:{span:24}},detail:{span:24}},{field:"author",label:U("tableDemo.author")},{field:"display_time",label:U("tableDemo.displayTime"),form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:U("tableDemo.importance"),formatter:(e,a,t)=>r(w,{type:1===t?"success":2===t?"warning":"danger"},(()=>U(1===t?"tableDemo.important":2===t?"tableDemo.good":"tableDemo.commonly"))),form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"pageviews",label:U("tableDemo.pageviews"),form:{component:"InputNumber",value:0}},{field:"content",label:U("exampleDemo.content"),table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:U("tableDemo.action"),form:{show:!1},detail:{show:!1}}]),{allSchemas:I}=F(H),W=i(!1),q=i(""),A=()=>{q.value=U("exampleDemo.add"),L.currentRow=null,W.value=!0,G.value=""},M=i(!1),B=async(e,a)=>{var t;L.currentRow=e;const{delList:l,getSelections:o}=V,r=await o();M.value=!0,await l(a?r.map((e=>e.id)):[null==(t=L.currentRow)?void 0:t.id],a).finally((()=>{M.value=!1}))},G=i(""),N=(e,a)=>{q.value=U("edit"===a?"exampleDemo.edit":"exampleDemo.detail"),G.value=a,L.currentRow=e,W.value=!0},O=i(),X=i(!1),Z=async()=>{var e;const a=d(O);await(null==(e=null==a?void 0:a.elFormRef)?void 0:e.validate((async e=>{if(e){X.value=!0;const e=await(null==a?void 0:a.getFormData());await k(e).catch((()=>{})).finally((()=>{X.value=!1}))&&(W.value=!1,L.currentPage=1,Y())}})))};return(l,o)=>{const r=s("hasPermi");return m(),n(y,null,[p(d(e),null,{default:u((()=>[p(d(a),{model:{title:"s"},schema:d(I).searchSchema,onSearch:d(T),onReset:d(T)},null,8,["schema","onSearch","onReset"]),c("div",z,[p(d(h),{type:"primary",onClick:A},{default:u((()=>[_(v(d(U)("exampleDemo.add")),1)])),_:1}),p(d(h),{loading:M.value,type:"danger",onClick:o[0]||(o[0]=e=>B(null,!0))},{default:u((()=>[_(v(d(U)("exampleDemo.del")),1)])),_:1},8,["loading"])]),p(d(D),{pageSize:d(L).pageSize,"onUpdate:pageSize":o[1]||(o[1]=e=>d(L).pageSize=e),currentPage:d(L).currentPage,"onUpdate:currentPage":o[2]||(o[2]=e=>d(L).currentPage=e),columns:d(I).tableColumns,data:d(L).tableList,loading:d(L).loading,pagination:{total:d(L).total},onRegister:d(E)},{action:u((({row:e})=>[g((m(),f(d(h),{type:"primary",onClick:a=>N(e,"edit")},{default:u((()=>[_(v(d(U)("exampleDemo.edit")),1)])),_:2},1032,["onClick"])),[[r,["example:dialog:edit"]]]),g((m(),f(d(h),{type:"success",onClick:a=>N(e,"detail")},{default:u((()=>[_(v(d(U)("exampleDemo.detail")),1)])),_:2},1032,["onClick"])),[[r,["example:dialog:view"]]]),g((m(),f(d(h),{type:"danger",onClick:a=>B(e,!1)},{default:u((()=>[_(v(d(U)("exampleDemo.del")),1)])),_:2},1032,["onClick"])),[[r,["example:dialog:delete"]]])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}),p(d(t),{modelValue:W.value,"onUpdate:modelValue":o[4]||(o[4]=e=>W.value=e),title:q.value},{footer:u((()=>["detail"!==G.value?(m(),f(d(h),{key:0,type:"primary",loading:X.value,onClick:Z},{default:u((()=>[_(v(d(U)("exampleDemo.save")),1)])),_:1},8,["loading"])):j("",!0),p(d(h),{onClick:o[3]||(o[3]=e=>W.value=!1)},{default:u((()=>[_(v(d(U)("dialogDemo.close")),1)])),_:1})])),default:u((()=>["detail"!==G.value?(m(),f(C,{key:0,ref_key:"writeRef",ref:O,"form-schema":d(I).formSchema,"current-row":d(L).currentRow},null,8,["form-schema","current-row"])):j("",!0),"detail"===G.value?(m(),f(R,{key:1,"detail-schema":d(I).detailSchema,"current-row":d(L).currentRow},null,8,["detail-schema","current-row"])):j("",!0)])),_:1},8,["modelValue","title"])],64)}}});export{E as default};
