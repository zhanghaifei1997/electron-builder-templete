import{D as a}from"./Descriptions-c6e0e04c.js";import{d as e,o as t,h as o,w as r,g as n,B as s,t as m,a as c,e as i,k as p}from"./index-13030047.js";import{E as l}from"./el-tag-30a7bbad.js";const d=["innerHTML"],u=e({__name:"Detail",props:{currentRow:{type:Object,default:()=>null},detailSchema:{type:Array,default:()=>[]}},setup(e){const{t:u}=p();return(p,w)=>(t(),o(c(a),{schema:e.detailSchema,data:e.currentRow||{}},{importance:r((({row:a})=>[n(c(l),{type:1===a.importance?"success":2===a.importance?"warning":"danger"},{default:r((()=>[s(m(1===a.importance?c(u)("tableDemo.important"):2===a.importance?c(u)("tableDemo.good"):c(u)("tableDemo.commonly")),1)])),_:2},1032,["type"])])),content:r((({row:a})=>[i("div",{innerHTML:a.content},null,8,d)])),_:1},8,["schema","data"]))}});export{u as _};