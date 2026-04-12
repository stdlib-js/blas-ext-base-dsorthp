"use strict";var h=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var y=h(function(J,w){
var m=require('@stdlib/math-base-assert-is-positive-zero/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),P=require('@stdlib/math-base-special-floor/dist');function Z(i,v,r,e,u){var p,n,a,o,t,s,l,q,c;if(i<=0||v===0)return r;for(v<0&&(e*=-1,u-=(i-1)*e),t=i,p=P(i/2);;){if(p>0)p-=1,s=r[u+p*e];else{if(t-=1,t===0)return r;l=u+t*e,s=r[l],r[l]=r[u]}for(q=p,n=q*2+1;n<t&&(c=n+1,c<t&&(a=r[u+c*e],o=r[u+n*e],(a>o||k(a)||a===o&&m(a))&&(n+=1)),a=r[u+n*e],a>s||k(a)||a===s&&m(a));)r[u+q*e]=a,q=n,n=q*2+1;r[u+q*e]=s}}w.exports=Z
});var _=h(function(K,R){
var g=require('@stdlib/strided-base-stride2offset/dist'),z=y();function A(i,v,r,e){return z(i,v,r,e,g(i,e))}R.exports=A
});var E=h(function(L,d){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=_(),C=y();B(b,"ndarray",C);d.exports=b
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=E(),j,O=F(D(__dirname,"./native.js"));G(O)?j=H:j=O;module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
