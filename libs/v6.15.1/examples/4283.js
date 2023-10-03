"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4283],{7313:function(e,t,n){function r(e,t){let n=e.length-t,r=0;do{for(let n=t;n>0;n--)e[r+t]+=e[r],r++;n-=t}while(n>0)}function o(e,t,n){let r=0,o=e.length;const i=o/n;for(;o>t;){for(let n=t;n>0;--n)e[r+t]+=e[r],++r;o-=t}const l=e.slice();for(let t=0;t<i;++t)for(let r=0;r<n;++r)e[n*t+r]=l[(n-r-1)*i+t]}n.d(t,{Z:function(){return i}});class i{async decode(e,t){const n=await this.decodeBlock(t),i=e.Predictor||1;if(1!==i){const t=!e.StripOffsets;return function(e,t,n,i,l,c){if(!t||1===t)return e;for(let e=0;e<l.length;++e){if(l[e]%8!=0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(l[e]!==l[0])throw new Error("When decoding with predictor, all samples must have the same size.")}const f=l[0]/8,s=2===c?1:l.length;for(let c=0;c<i&&!(c*s*n*f>=e.byteLength);++c){let i;if(2===t){switch(l[0]){case 8:i=new Uint8Array(e,c*s*n*f,s*n*f);break;case 16:i=new Uint16Array(e,c*s*n*f,s*n*f/2);break;case 32:i=new Uint32Array(e,c*s*n*f,s*n*f/4);break;default:throw new Error(`Predictor 2 not allowed with ${l[0]} bits per sample.`)}r(i,s)}else 3===t&&(i=new Uint8Array(e,c*s*n*f,s*n*f),o(i,s,f))}return e}(n,i,t?e.TileWidth:e.ImageWidth,t?e.TileLength:e.RowsPerStrip||e.ImageLength,e.BitsPerSample,e.PlanarConfiguration)}return n}}},4283:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(7313);function o(e,t){for(let n=t.length-1;n>=0;n--)e.push(t[n]);return e}function i(e){const t=new Uint16Array(4093),n=new Uint8Array(4093);for(let e=0;e<=257;e++)t[e]=4096,n[e]=e;let r=258,i=9,l=0;function c(){r=258,i=9}function f(e){const t=function(e,t,n){const r=t%8,o=Math.floor(t/8),i=8-r,l=t+n-8*(o+1);let c=8*(o+2)-(t+n);const f=8*(o+2)-t;if(c=Math.max(0,c),o>=e.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),257;let s=e[o]&2**(8-r)-1;s<<=n-i;let a=s;if(o+1<e.length){let t=e[o+1]>>>c;t<<=Math.max(0,n-f),a+=t}if(l>8&&o+2<e.length){const r=8*(o+3)-(t+n);a+=e[o+2]>>>r}return a}(e,l,i);return l+=i,t}function s(e,o){return n[r]=o,t[r]=e,r++,r-1}function a(e){const r=[];for(let o=e;4096!==o;o=t[o])r.push(n[o]);return r}const u=[];c();const h=new Uint8Array(e);let d,w=f(h);for(;257!==w;){if(256===w){for(c(),w=f(h);256===w;)w=f(h);if(257===w)break;if(w>256)throw new Error(`corrupted code at scanline ${w}`);o(u,a(w)),d=w}else if(w<r){const e=a(w);o(u,e),s(d,e[e.length-1]),d=w}else{const e=a(d);if(!e)throw new Error(`Bogus entry. Not in dictionary, ${d} / ${r}, position: ${l}`);o(u,e),u.push(e[e.length-1]),s(d,e[e.length-1]),d=w}r+1>=2**i&&(12===i?d=void 0:i++),w=f(h)}return new Uint8Array(u)}class l extends r.Z{decodeBlock(e){return i(e).buffer}}}}]);
//# sourceMappingURL=4283.js.map