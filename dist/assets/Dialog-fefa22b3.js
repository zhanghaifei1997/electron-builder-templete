import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-46bac8fa.js";import{_ as o}from"./Dialog.vue_vue_type_style_index_0_lang-9d1e0892.js";import{d as l,r as t,q as a,o as i,h as s,w as m,g as r,B as p,t as n,a as u,c as d,C as c,e as f,F as _,k as v,H as j}from"./index-13030047.js";import{E as g}from"./el-button-27772831.js";import{F as b}from"./Form-c03ab119.js";import{u as D}from"./useValidator-36e64419.js";import"./el-card-b4065fbb.js";import"./el-popper-fd2eedc1.js";import"./constants-795fc76a.js";import"./el-overlay-b67dd3f2.js";import"./scroll-a4ae664c.js";import"./vnode-a962394e.js";import"./use-dialog-6c558818.js";import"./event-5568c9d8.js";import"./refs-60d0e198.js";import"./use-form-item-d6edd9f4.js";import"./use-form-common-props-280177cd.js";import"./el-col-b79058d5.js";import"./el-input-7af69275.js";import"./el-tag-30a7bbad.js";import"./tsxHelper-871e9ef3.js";import"./debounce-aa60cf2f.js";import"./validator-721c49e6.js";import"./el-input-number-22ed6b28.js";import"./el-switch-9cd07555.js";import"./el-divider-25829e77.js";import"./InputPassword-cec31836.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-4de620e0.js";import"./aria-ecee1d93.js";const y=l({__name:"Dialog",setup(l){const{required:y}=D(),{t:k}=v(),P=t(!1),h=t(!1),x=a([{field:"field1",label:k("formDemo.input"),component:"Input",formItemProps:{rules:[y()]}},{field:"field2",label:k("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:k("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:k("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:k("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:k("formDemo.timeSelect")}]);(async()=>{const e=await j();e&&(x[1].componentProps.options=e.data)})();const C=t(),V=()=>{var e,o;null==(o=null==(e=u(C))?void 0:e.getElFormRef())||o.validate((e=>{}))};return(l,t)=>(i(),s(u(e),{title:u(k)("dialogDemo.dialog"),message:u(k)("dialogDemo.dialogDes")},{default:m((()=>[r(u(g),{type:"primary",onClick:t[0]||(t[0]=e=>P.value=!P.value)},{default:m((()=>[p(n(u(k)("dialogDemo.open")),1)])),_:1}),r(u(g),{type:"primary",onClick:t[1]||(t[1]=e=>h.value=!h.value)},{default:m((()=>[p(n(u(k)("dialogDemo.combineWithForm")),1)])),_:1}),r(u(o),{modelValue:P.value,"onUpdate:modelValue":t[3]||(t[3]=e=>P.value=e),title:u(k)("dialogDemo.dialog")},{footer:m((()=>[r(u(g),{onClick:t[2]||(t[2]=e=>P.value=!1)},{default:m((()=>[p(n(u(k)("dialogDemo.close")),1)])),_:1})])),default:m((()=>[(i(),d(_,null,c(1e4,(e=>f("div",{key:e},n(e),1))),64))])),_:1},8,["modelValue","title"]),r(u(o),{modelValue:h.value,"onUpdate:modelValue":t[5]||(t[5]=e=>h.value=e),title:u(k)("dialogDemo.dialog")},{footer:m((()=>[r(u(g),{type:"primary",onClick:V},{default:m((()=>[p(n(u(k)("dialogDemo.submit")),1)])),_:1}),r(u(g),{onClick:t[4]||(t[4]=e=>h.value=!1)},{default:m((()=>[p(n(u(k)("dialogDemo.close")),1)])),_:1})])),default:m((()=>[r(u(b),{ref_key:"formRef",ref:C,schema:x},null,8,["schema"])])),_:1},8,["modelValue","title"])])),_:1},8,["title","message"]))}});export{y as default};
