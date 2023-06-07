(this.webpackJsonpinventory=this.webpackJsonpinventory||[]).push([[42],{321:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(0),c=t.n(n),r=t(322),i=t.n(r);function l(e){return c.a.createElement(i.a,{format:"YYYY-MM-DD HH:mm:ss"},e)}},427:function(e,a,t){"use strict";t.r(a);var n=t(167),c=t(165),r=t(94),i=t(164),l=t(110),o=t(0),u=t.n(o),d=t(304),m=t(278),s=t(6),f=t(161),b=t(163),p=t(321),v=new f.a,h=function(e){var a=Object(o.useState)(!1),t=Object(s.a)(a,2),n=t[0],c=t[1],r=Object(o.useState)(!1),i=Object(s.a)(r,2),l=i[0],d=i[1];Object(o.useEffect)((function(){f()}),[]);var f=function(){c(!0);var a=e.match.params.id;v.viewStock(a).then((function(e){c(!1),d(e.data)})).catch((function(a){Object(b.a)(a,e)}))},h=[{field:"Plant",value:l.room&&l.room.plant?l.room.plant.name:"-"},{field:"Room",value:l.room?l.room.name:"-"},{field:"Material",value:l.material?"".concat(l.material.material_code," - ").concat(l.material.description):"-"},{field:"Classification",value:l.material?l.material.classification.name:"-"},{field:"Require Serial Number?",value:l.material?l.material.serial_number?"Yes":"No":"-"},{field:"UoM",value:l.material&&l.material.uom?l.material.uom.name:"-"},{field:"Ready Stock",value:l.stock},{field:"Quantity In Transait",value:l.quantity_in_transit},{field:"Minimum Stock",value:l.minimum_stock},{field:"Updated by",value:l.updated_by?"".concat(l.updated_by.fullname," - ").concat(l.updated_by.email):"-"},{field:"Updated at",value:Object(p.a)(l.updated_at)}];return u.a.createElement(m.a,{loading:n,columns:[{title:"Field",dataIndex:"field",width:50},{title:"Value",dataIndex:"value",width:150}],dataSource:h,size:"small",pagination:!1})},E=t(276),j=t(66),O=t(177),S=t(400),g=O.a.TabPane,k=new f.a,w=function(e){var a=Object(o.useState)([]),t=Object(s.a)(a,2),n=t[0],d=t[1],f=Object(o.useState)(!1),p=Object(s.a)(f,2),v=p[0],h=p[1],w=Object(o.useState)([]),y=Object(s.a)(w,2),_=y[0],C=y[1],M=Object(o.useState)({}),x=Object(s.a)(M,2),z=x[0],I=x[1],R=Object(o.useState)(""),Y=Object(s.a)(R,2),q=Y[0],Q=Y[1];Object(o.useEffect)((function(){B()}),[q]);var B=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};h(!0);var t=e.match.params.id;k.getStockDetailByStockId(t,Object(j.a)(Object(j.a)({},a),{},{q:q})).then((function(e){var a=e.data,t={};t.current=a.current_page,t.total=a.total,t.pageSize=parseInt(a.per_page),C(a.data),I(t),h(!1)})).catch((function(a){h(!1),Object(b.a)(a,e)}))},D=function(e){var a=[];n.map((function(e){return a.push("id[]=".concat(e))})),a.push("size=".concat(e));var t="".concat("https://api.inventaris.net/public/api","/transaction/stock-detail/qrcode?").concat(a.join("&"));window.open(t)},J={selectedRowKeys:n,onChange:function(e){d(e)}},K=n.length>0;return u.a.createElement(O.a,{defaultActiveKey:"1"},u.a.createElement(g,{tab:"Ready Stock",key:"1"},u.a.createElement(c.b,{direction:"vertical",size:"large",style:{width:"100%"}},u.a.createElement(i.a,null,u.a.createElement(l.a,{md:19},u.a.createElement(c.b,null,u.a.createElement(r.a,{onClick:function(){return D("m24")},disabled:!K,icon:u.a.createElement(S.a,null)},"Qr Code 70x24MM"),u.a.createElement(r.a,{onClick:function(){return D("s24")},disabled:!K,icon:u.a.createElement(S.a,null)},"Qr Code 24x24MM"))),u.a.createElement(l.a,{md:5},u.a.createElement(E.a.Search,{placeholder:"Search",onSearch:function(e){Q(e)}}))),u.a.createElement(m.a,{loading:v,rowSelection:J,columns:[{title:"Code",dataIndex:"code",width:100},{title:"Material",dataIndex:"stock",width:150,render:function(e){return e&&e?"".concat(e.material.material_code," - ").concat(e.material.description):"-"}}],rowKey:function(e){return e.id},onChange:function(e,a){var t=Object(j.a)({},z);t.current=e.current,I(t),B({per_page:e.pageSize,page:e.current,sort_field:a.field,sort_order:"ascend"===a.order?"asc":"desc"})},dataSource:_,pagination:Object(j.a)({pageSizeOptions:["20","50","100","200"],showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e,a){return"".concat(a[0],"-").concat(a[1]," of ").concat(e," items")}},z),scroll:{y:300,x:1e3}}))))};a.default=function(e){return u.a.createElement(n.a,null,u.a.createElement(i.a,{gutter:24},u.a.createElement(l.a,{xs:24,sm:24,lg:10},u.a.createElement(h,e)),u.a.createElement(l.a,{xs:24,sm:24,lg:14},u.a.createElement(w,e))),u.a.createElement("br",null),u.a.createElement(c.b,null,u.a.createElement(r.a,{onClick:function(){return e.history.goBack()},icon:u.a.createElement(d.a,null)},"Back")))}}}]);
//# sourceMappingURL=42.1066b3a0.chunk.js.map