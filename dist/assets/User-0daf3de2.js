import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-46bac8fa.js";import{d as s,k as a,I as r,r as t,o,h as m,w as i,g as l,a as p,B as n,t as u}from"./index-13030047.js";import{_ as d}from"./Table.vue_vue_type_script_lang-6054c4c4.js";import{b as c}from"./index-b051bbaf.js";import{E as _}from"./el-button-27772831.js";import"./el-card-b4065fbb.js";import"./el-popper-fd2eedc1.js";import"./constants-795fc76a.js";import"./tsxHelper-871e9ef3.js";import"./event-5568c9d8.js";import"./use-form-common-props-280177cd.js";import"./use-form-item-d6edd9f4.js";import"./el-input-7af69275.js";import"./el-tag-30a7bbad.js";import"./scroll-a4ae664c.js";import"./debounce-aa60cf2f.js";import"./validator-721c49e6.js";const f=s({__name:"User",setup(s){const{t:f}=a(),j=[{field:"index",label:f("userDemo.index"),type:"index"},{field:"username",label:f("userDemo.username")},{field:"password",label:f("userDemo.password")},{field:"role",label:f("userDemo.role")},{field:"remark",label:f("userDemo.remark"),formatter:e=>r("span","admin"===e.username?f("userDemo.remarkMessage1"):f("userDemo.remarkMessage2"))},{field:"action",label:f("userDemo.action")}],g=t(!0);let b=t([]);(async e=>{const s=await c({params:e||{pageIndex:1,pageSize:10}});s&&(b.value=s.data.list,g.value=!1)})();return(s,a)=>(o(),m(p(e),{title:p(f)("userDemo.title"),message:p(f)("userDemo.message")},{default:i((()=>[l(p(d),{columns:j,data:p(b),loading:g.value,selection:!1},{action:i((e=>[l(p(_),{type:"primary",onClick:e=>{}},{default:i((()=>[n(u(p(f)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),_:1},8,["data","loading"])])),_:1},8,["title","message"]))}});export{f as default};