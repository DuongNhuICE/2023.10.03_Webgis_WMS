"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3747],{2336:function(e,t,n){var o=n(1038),r=n(2739),l=n(7975),s=n(1118),a=n(5265),i=n(1376),c=n(9247),u=n(720),g=n(9039),f=n(4354),w=n(9847),h=n(5783),p=n(2010),m=n(1372);function d(e,t){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function Z(e,t,n){const o=d(t,e),r=d(t,n),l=((e[0]-t[0])*(n[0]-t[0])+(e[1]-t[1])*(n[1]-t[1]))/r;return Math.abs(o-l)<1e-6&&o<r}function y(e,t){return(e%t+t)%t}function P(e,t,n){let o=e.getGeometry();"MultiPolygon"===o.getType()&&(o=o.getPolygon(0));const r=o.getLinearRing().getCoordinates();let l,s,a,i=-1;for(l=0;l<r.length;l++)if(s=r[l],a=r[y(l+1,r.length)],Z(t,s,a)){i=l;break}const c=[];let u=0;const g=[];let f=0;for(l=0;l<r.length;l++){if(s=0===l?t:r[y(l+i,r.length)],a=r[y(l+i+1,r.length)],c.push(s),Z(n,s,a)){c.push(n),u+=d(s,n);break}u+=d(s,a)}for(l=0;l<r.length;l++){if(s=r[y(i-l,r.length)],a=0===l?t:r[y(i-l+1,r.length)],g.push(a),Z(n,s,a)){g.push(n),f+=d(n,a);break}f+=d(s,a)}return f<u?g:c}const v=new p.Z({source:new w.Z}),C=new m.Z({source:new h.Z({format:new s.Z,url:"https://ahocevar.com/geoserver/wfs?service=wfs&request=getfeature&typename=topp:states&cql_filter=STATE_NAME='Idaho'&outputformat=application/json"})}),k=new m.Z({source:new h.Z,style:new g.ZP({stroke:new u.Z({color:"rgba(100, 255, 0, 1)",width:2}),fill:new l.Z({color:"rgba(100, 255, 0, 0.3)"})})}),b=new r.Z({geometry:new a.Z([])}),x=new m.Z({source:new h.Z({features:[b]}),style:new g.ZP({stroke:new u.Z({color:"rgba(255, 0, 0, 1)",width:2})})}),G=new i.Z({layers:[v,C,k,x],target:"map",view:new f.ZP({center:[-12986427,5678422],zoom:5})});let I,E,F,A,M=!1;const T={hitTolerance:10,layerFilter:e=>e===C};G.on("click",(e=>{if(!M)return;let t=!1;G.forEachFeatureAtPixel(e.pixel,(n=>{if(E&&n!==E)return;t=!0;const o=G.getCoordinateFromPixel(e.pixel);if(n===E){A=E.getGeometry().getClosestPoint(o);const e=P(E,F,A);I.removeLastPoint(),I.appendCoordinates(e),E=null}E=n,F=E.getGeometry().getClosestPoint(o)}),T),t||(b.getGeometry().setCoordinates([]),E=null)})),G.on("pointermove",(e=>{if(E&&M){let t=null;G.forEachFeatureAtPixel(e.pixel,(n=>{E===n&&(t=G.getCoordinateFromPixel(e.pixel))}),T);let n=[];t&&(A=E.getGeometry().getClosestPoint(t),n=P(E,F,A)),b.getGeometry().setCoordinates(n)}}));const q=new c.Z({source:C.getSource()}),S=document.getElementById("type");function L(){"None"!==S.value&&(I=new o.ZP({source:k.getSource(),type:S.value}),I.on("drawstart",(()=>{M=!0})),I.on("drawend",(()=>{M=!1,b.getGeometry().setCoordinates([]),E=null})),G.addInteraction(I),G.addInteraction(q))}S.onchange=function(){G.removeInteraction(I),G.removeInteraction(q),L()},L()}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(2336)}]);
//# sourceMappingURL=tracing.js.map