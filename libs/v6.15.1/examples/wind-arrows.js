"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2207],{6606:function(e,t,n){var o=n(2739),a=n(1376),r=n(9847),s=n(5469),i=n(2010),c=n(1372),w=n(5783),u=n(4354),h=n(9072),l=n(720),p=n(7975),d=n(9039),f=n(2810);const Z=new h.Z({points:2,radius:5,stroke:new l.Z({width:2,color:"black"}),rotateWithView:!0}),g=new h.Z({points:3,radius:5,fill:new p.Z({color:"black"}),rotateWithView:!0}),k=[new d.ZP({image:Z}),new d.ZP({image:g})],m=new w.Z({attributions:'Weather data by <a href="https://openweathermap.org/current">OpenWeather</a>'}),b=new a.Z({layers:[new i.Z({source:new r.Z}),new c.Z({source:m,style:function(e){const t=e.get("wind"),n=(t.deg-180)*Math.PI/180,o=t.speed/10;return Z.setScale([1,o]),Z.setRotation(n),g.setDisplacement([0,g.getRadius()/2+Z.getRadius()*o]),g.setRotation(n),k}})],target:"map",view:new u.ZP({center:[0,0],zoom:2})});fetch("data/openweather/weather.json").then((function(e){return e.json()})).then((function(e){const t=[];e.list.forEach((function(e){const n=new o.Z(new s.Z((0,f.mi)([e.coord.lon,e.coord.lat])));n.setProperties(e),t.push(n)})),m.addFeatures(t),b.getView().fit(m.getExtent())}))}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(6606)}]);
//# sourceMappingURL=wind-arrows.js.map