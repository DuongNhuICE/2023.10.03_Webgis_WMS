"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1180],{4909:function(t,n,e){var o=e(2739),c=e(5265),i=e(1376),s=e(1372),r=e(5783),u=e(4354);const a=1e7,f=Math.cos(Math.PI/6),h=a*Math.sin(Math.PI/6),l=a*f,p=new c.Z([[0,a],[l,-h],[-l,-h],[0,a]]),w=new o.Z(p),x=new s.Z({source:new r.Z({features:[w]})});new i.Z({layers:[x],target:"map",view:new u.ZP({center:[0,0],zoom:1})});function m(t){const n=t.next,e=t.point,o=t.next.point,c=o[0]-e[0],i=o[1]-e[1],s={point:[e[0]+c/3,e[1]+i/3]},r=Math.sqrt(c*c+i*i)/(2*f),u=Math.atan2(i,c)+Math.PI/6,a={point:[e[0]+r*Math.cos(u),e[1]+r*Math.sin(u)]},h={point:[o[0]-c/3,o[1]-i/3]};t.next=s,s.next=a,a.next=h,h.next=n}const M=document.getElementById("depth");function d(){!function(t){const n=p.clone(),e=function(t){const n={point:t[0]},e=t.length;for(let o=0,c=n;o<e-1;++o)c.next={point:t[o+1]},c=c.next;return n}(n.getCoordinates());for(let n=0;n<t;++n){let t=e;for(;t.next;){const n=t.next;m(t),t=n}}const o=function(t){const n=[t.point];for(let e=t,o=1;e.next;e=e.next,++o)n[o]=e.next.point;return n}(e);document.getElementById("count").innerHTML=o.length,n.setCoordinates(o),w.setGeometry(n)}(Number(M.value))}let g;M.onchange=function(){window.clearTimeout(g),g=window.setTimeout(d,200)},d()}},function(t){var n=function(n){return t(t.s=n)};n(9877),n(4909)}]);
//# sourceMappingURL=fractal.js.map