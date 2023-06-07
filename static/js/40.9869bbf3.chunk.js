(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[40],{301:function(e,t,a){"use strict";var n=a(2),c=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=a(20),l=function(e,t){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:r}))};l.displayName="DeleteOutlined";t.a=c.forwardRef(l)},326:function(e,t,a){"use strict";var n=a(2),c=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=a(20),l=function(e,t){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:r}))};l.displayName="EditOutlined";t.a=c.forwardRef(l)},410:function(e,t,a){"use strict";a.r(t);var n=a(167),c=a(278),r=a(164),o=a(276),l=a(110),i=a(165),u=a(94),s=a(166),d=a(282),m=a(66),h=a(6),f=a(0),b=a.n(f),g=a(161),p=a(32),O=a(163),v=a(215),j=a(326),E=a(301),w=new g.a,y="unit-of-measurement-view",S="unit-of-measurement-create",z="unit-of-measurement-update",k="unit-of-measurement-delete";t.default=function(e){var t=Object(f.useState)([]),a=Object(h.a)(t,2),g=a[0],x=a[1],C=Object(f.useState)(""),D=Object(h.a)(C,2),H=D[0],L=D[1],_=Object(f.useState)(!1),M=Object(h.a)(_,2),N=M[0],R=M[1],T=Object(f.useState)([]),I=Object(h.a)(T,2),J=I[0],K=I[1],A=Object(f.useState)({}),B=Object(h.a)(A,2),U=B[0],q=B[1];Object(f.useEffect)((function(){F()}),[H]);var F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};R(!0),w.getUomList(Object(m.a)(Object(m.a)({},t),{},{q:H})).then((function(e){var t=e.data,a={};a.current=t.current_page,a.total=t.total,a.pageSize=parseInt(t.per_page),K(t.data),q(a),R(!1)})).catch((function(t){R(!1),Object(O.a)(t,e)}))},Q=function(){w.massDeleteUom({id:g}).then((function(e){s.a.success("Delete data success"),F(),x([])})).catch((function(t){s.a.error("Failed to delete"),Object(O.a)(t,e)}))},Y={selectedRowKeys:g,onChange:function(e){x(e)}},G=g.length>0;return b.a.createElement(n.a,null,b.a.createElement(i.b,{direction:"vertical",size:"large",style:{width:"100%"}},b.a.createElement(r.a,null,b.a.createElement(l.a,{md:19},b.a.createElement(i.b,null,Object(p.a)(S)&&b.a.createElement(u.a,{type:"primary",onClick:function(){e.history.push("/uom/add")},icon:b.a.createElement(v.a,null)},"Add"),Object(p.a)(z)&&b.a.createElement(u.a,{onClick:function(){return console.log("selectedRowKeys changed: ",g),void(g.length>1?d.a.warning({title:"Anda memilih ".concat(g.length," data, silahkan hanya pilih 1 data")}):e.history.push("/uom/edit/".concat(g[0])))},disabled:!G,icon:b.a.createElement(j.a,null)},"Edit"),Object(p.a)(k)&&b.a.createElement(u.a,{danger:!0,onClick:function(){d.a.confirm({title:"Delete ".concat(g.length," data?"),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){Q()},onCancel:function(){console.log("Cancel")}})},disabled:!G,icon:b.a.createElement(E.a,null)},"Delete"))),b.a.createElement(l.a,{md:5},b.a.createElement(o.a.Search,{placeholder:"Search",onSearch:function(e){L(e)}}))),b.a.createElement(r.a,null,b.a.createElement(l.a,{lg:24,xs:24},b.a.createElement(c.a,{loading:N,rowSelection:Object(p.a)(y||z||k)?Y:null,columns:[{title:"Name",dataIndex:"name",sorter:!0},{title:"Description",dataIndex:"description",sorter:!0}],rowKey:function(e){return e.id},onChange:function(e,t,a){var n=Object(m.a)({},U);n.current=e.current,q(n),F({per_page:e.pageSize,page:e.current,sort_field:a.field,sort_order:"ascend"===a.order?"asc":"desc"})},dataSource:J,pagination:Object(m.a)({pageSizeOptions:["20","50","100","200"],showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}},U),scroll:{y:300,x:1e3}})))))}}}]);
//# sourceMappingURL=40.9869bbf3.chunk.js.map