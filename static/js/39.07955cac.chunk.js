(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[39],{301:function(e,t,a){"use strict";var n=a(2),c=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=a(20),r=function(e,t){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:l}))};r.displayName="DeleteOutlined";t.a=c.forwardRef(r)},326:function(e,t,a){"use strict";var n=a(2),c=a(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},o=a(20),r=function(e,t){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:l}))};r.displayName="EditOutlined";t.a=c.forwardRef(r)},414:function(e,t,a){"use strict";a.r(t);var n=a(167),c=a(278),l=a(164),o=a(276),r=a(110),i=a(165),s=a(94),u=a(166),d=a(282),h=a(66),m=a(6),f=a(287),b=a(0),p=a.n(b),g=a(163),O=a(32),v=a(161),j=a(215),E=a(326),w=a(301),y=(f.a.Option,"role-view"),S="role-create",k="role-update",z="role-delete",x=new v.a;t.default=function(e){var t=Object(b.useState)([]),a=Object(m.a)(t,2),f=a[0],v=a[1],C=Object(b.useState)(!1),_=Object(m.a)(C,2),R=_[0],M=_[1],T=Object(b.useState)(""),H=Object(m.a)(T,2),L=H[0],N=H[1],D=Object(b.useState)([]),I=Object(m.a)(D,2),A=I[0],J=I[1],K=Object(b.useState)({}),B=Object(m.a)(K,2),q=B[0],F=B[1];Object(b.useEffect)((function(){Q()}),[L]);var Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};M(!0),x.getMasterRoleList(Object(h.a)(Object(h.a)({},t),{},{q:L})).then((function(e){if(200===e.status){var t=e.data,a={};a.current=t.current_page,a.total=t.total,a.pageSize=parseInt(t.per_page),J(t.data),F(a),M(!1)}})).catch((function(t){M(!1),Object(g.a)(t,e)}))},U=function(){x.massDeleteRole({id:f}).then((function(e){u.a.success("Delete data success"),Q(),v([])})).catch((function(t){u.a.error("Failed to delete"),Object(g.a)(t,e)}))},Y={selectedRowKeys:f,onChange:function(e){v(e)}},G=f.length>0;return p.a.createElement("div",null,p.a.createElement(n.a,null,p.a.createElement(i.b,{direction:"vertical",size:"large",style:{width:"100%"}},p.a.createElement(l.a,null,p.a.createElement(r.a,{md:19},p.a.createElement(i.b,null,Object(O.a)(S)&&p.a.createElement(s.a,{type:"primary",onClick:function(){e.history.push("".concat(e.location.pathname.split("/").slice(0,-1).join("/"),"/add"))},icon:p.a.createElement(j.a,null)},"Add"),Object(O.a)(k)&&p.a.createElement(s.a,{onClick:function(){return console.log("selectedRowKeys changed: ",f),void(f.length>1?d.a.warning({title:"Anda memilih ".concat(f.length," data, silahkan hanya pilih 1 data")}):e.history.push("/role/edit/".concat(f[0])))},disabled:!G,icon:p.a.createElement(E.a,null)},"Edit"),Object(O.a)(z)&&p.a.createElement(s.a,{danger:!0,onClick:function(){d.a.confirm({title:"Anda yakin akan menghapus ".concat(f.length," data?"),okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){U()},onCancel:function(){console.log("Cancel")}})},disabled:!G,icon:p.a.createElement(w.a,null)},"Delete"))),p.a.createElement(r.a,{md:5},p.a.createElement(o.a.Search,{placeholder:"Search",onSearch:function(e){N(e)}}))),p.a.createElement(l.a,null,p.a.createElement(r.a,{lg:24,xs:24},p.a.createElement(c.a,{loading:R,rowSelection:Object(O.a)(y||k||z)?Y:null,columns:[{title:"Role",dataIndex:"name",sorter:!0,width:100},{title:"Total Menu Object",dataIndex:"total_auth_object",width:80,sorter:!0,className:"col-number"},{title:"Total User",dataIndex:"total_user",width:80,sorter:!0,className:"col-number"}],rowKey:function(e){return e.id},onChange:function(e,t,a){var n=Object(h.a)({},q);n.current=e.current,F(n),Q({per_page:e.pageSize,page:e.current,sort_field:a.field,sort_order:"ascend"===a.order?"asc":"desc"})},dataSource:A,pagination:Object(h.a)({pageSizeOptions:["10","50","100","200"],showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}},q)}))))))}}}]);
//# sourceMappingURL=39.07955cac.chunk.js.map