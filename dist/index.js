"use strict";var s=function(l,p){return function(){return p||l((p={exports:{}}).exports,p),p.exports}};var y=s(function(K,w){
var j=require('@stdlib/math-base-assert-is-positive-zero/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-floor/dist');function z(l,p,r,e){var i,q,v,a,h,u,o,t,n,c;if(l<=0||p===0)return r;for(p<0&&(e*=-1),e<0?i=(1-l)*e:i=0,u=l,q=g(l/2);;){if(q>0)q-=1,o=r[i+q*e];else{if(u-=1,u===0)return r;t=i+u*e,o=r[t],r[t]=r[i]}for(n=q,v=n*2+1;v<u&&(c=v+1,c<u&&(a=r[i+c*e],h=r[i+v*e],(a>h||k(a)||a===h&&j(a))&&(v+=1)),a=r[i+v*e],a>o||k(a)||a===o&&j(a));)r[i+n*e]=a,n=v,v=n*2+1;r[i+n*e]=o}}w.exports=z
});var R=s(function(L,P){
var m=require('@stdlib/math-base-assert-is-positive-zero/dist'),b=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-special-floor/dist');function B(l,p,r,e,i){var q,v,a,h,u,o,t,n,c;if(l<=0||p===0)return r;for(p<0&&(e*=-1,i-=(l-1)*e),u=l,q=A(l/2);;){if(q>0)q-=1,o=r[i+q*e];else{if(u-=1,u===0)return r;t=i+u*e,o=r[t],r[t]=r[i]}for(n=q,v=n*2+1;v<u&&(c=v+1,c<u&&(a=r[i+c*e],h=r[i+v*e],(a>h||b(a)||a===h&&m(a))&&(v+=1)),a=r[i+v*e],a>o||b(a)||a===o&&m(a));)r[i+n*e]=a,n=v,v=n*2+1;r[i+n*e]=o}}P.exports=B
});var E=s(function(M,_){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=y(),D=R();C(Z,"ndarray",D);_.exports=Z
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=E(),f,O=G(F(__dirname,"./native.js"));H(O)?f=I:f=O;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
