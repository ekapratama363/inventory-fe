(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[36],{301:function(e,t,a){"use strict";var n=a(2),c=a(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},l=a(20),r=function(e,t){return c.createElement(l.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:i}))};r.displayName="DeleteOutlined";t.a=c.forwardRef(r)},326:function(e,t,a){"use strict";var n=a(2),c=a(0),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},l=a(20),r=function(e,t){return c.createElement(l.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:i}))};r.displayName="EditOutlined";t.a=c.forwardRef(r)},416:function(e,t,a){"use strict";a.r(t);var n=a(167),c=a(278),i=a(164),l=a(276),r=a(110),o=a(165),s=a(94),u=a(166),d=a(282),h=a(66),m=a(6),f=a(0),b=a.n(f),g=a(161),p=a(163),O=a(32),v=a(215),j=a(326),E=a(344),w=a(301),y=new g.a,S="material-view",k="material-create",z="material-update",x="material-delete";t.default=function(e){var t=Object(f.useState)([]),a=Object(m.a)(t,2),g=a[0],C=a[1],M=Object(f.useState)(""),D=Object(m.a)(M,2),_=D[0],H=D[1],I=Object(f.useState)(!1),L=Object(m.a)(I,2),N=L[0],R=L[1],T=Object(f.useState)([]),A=Object(m.a)(T,2),J=A[0],K=A[1],B=Object(f.useState)({}),U=Object(m.a)(B,2),q=U[0],F=U[1];Object(f.useEffect)((function(){Q()}),[_]);var Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};R(!0),y.getMasterMaterialList(Object(h.a)(Object(h.a)({},t),{},{q:_})).then((function(e){var t=e.data,a={};a.current=t.current_page,a.total=t.total,a.pageSize=parseInt(t.per_page),K(t.data),F(a),R(!1)})).catch((function(t){R(!1),Object(p.a)(t,e)}))},V=function(){y.massDeleteMaterial({id:g}).then((function(e){u.a.success("Delete data success"),Q(),C([])})).catch((function(t){u.a.error("Failed to delete"),Object(p.a)(t,e)}))},Y={selectedRowKeys:g,onChange:function(e){C(e)}},G=g.length>0;return b.a.createElement(n.a,null,b.a.createElement(o.b,{direction:"vertical",size:"large",style:{width:"100%"}},b.a.createElement(i.a,null,b.a.createElement(r.a,{md:19},b.a.createElement(o.b,null,Object(O.a)(k)&&b.a.createElement(s.a,{type:"primary",onClick:function(){e.history.push("/material/add")},icon:b.a.createElement(v.a,null)},"Add"),Object(O.a)(z)&&b.a.createElement(s.a,{onClick:function(){return console.log("selectedRowKeys changed: ",g),void(g.length>1?d.a.warning({title:"Anda memilih ".concat(g.length," data, silahkan hanya pilih 1 data")}):e.history.push("/material/edit/".concat(g[0])))},disabled:!G,icon:b.a.createElement(j.a,null)},"Edit"),Object(O.a)(S)&&b.a.createElement(s.a,{onClick:function(){g.length>1?d.a.warning({title:"Anda memilih ".concat(g.length," data, silahkan hanya pilih 1 data")}):e.history.push("/material/view/".concat(g[0]))},disabled:!G,icon:b.a.createElement(E.a,null)},"View"),Object(O.a)(x)&&b.a.createElement(s.a,{danger:!0,onClick:function(){d.a.confirm({title:"Delete ".concat(g.length," data?"),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){V()},onCancel:function(){console.log("Cancel")}})},disabled:!G,icon:b.a.createElement(w.a,null)},"Delete"))),b.a.createElement(r.a,{md:5},b.a.createElement(l.a.Search,{placeholder:"Search",onSearch:function(e){H(e)}}))),b.a.createElement(i.a,null,b.a.createElement(r.a,{lg:24,xs:24},b.a.createElement(c.a,{loading:N,rowSelection:Object(O.a)(S||z||x)?Y:null,columns:[{title:"Name",dataIndex:"material_code",sorter:!0},{title:"Description",dataIndex:"description",sorter:!0},{title:"Classification",dataIndex:"classification",render:function(e){if(e)return e.name}},{title:"Unit of Measurement (UoM)",dataIndex:"uom",render:function(e){if(e)return e.name}}],rowKey:function(e){return e.id},onChange:function(e,t,a){var n=Object(h.a)({},q);n.current=e.current,F(n),Q({per_page:e.pageSize,page:e.current,sort_field:a.field,sort_order:"ascend"===a.order?"asc":"desc"})},dataSource:J,pagination:Object(h.a)({pageSizeOptions:["20","50","100","200"],showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}},q),scroll:{y:300,x:1e3}})))))}}}]);
//# sourceMappingURL=36.5a97e81f.chunk.js.map