"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{5049:function(e,t,n){var r=n(8768),o=n(1376),c=n(8626),i=n(2010),s=n(4197),w=n(8083),l=n(4354),a=n(9039),u=n(7975),f=n(720),Z=n(729);const m=new a.ZP({fill:new u.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.Z({color:"#319FD3",width:1}),text:new Z.Z({font:"12px Calibri,sans-serif",fill:new u.Z({color:"#000"}),stroke:new f.Z({color:"#fff",width:3})})}),g=new s.Z({declutter:!0,source:new w.Z({maxZoom:15,format:new r.Z,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(e){return m.getText().setText(e.get("name")),m}}),p=new i.Z({source:new c.Z({template:"z:{z} x:{x} y:{-y}",projection:g.getSource().getProjection(),tileGrid:g.getSource().getTileGrid(),zDirection:1})});new o.Z({layers:[g,p],target:"map",view:new l.ZP({center:[0,6e6],zoom:4})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(5049)}]);
//# sourceMappingURL=canvas-tiles-tms.js.map