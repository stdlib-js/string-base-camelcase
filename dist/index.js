"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var u=v(function(C,c){
var E=require('@stdlib/string-base-capitalize/dist'),n=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),_=require('@stdlib/string-base-trim/dist'),l=/\s+/g,o=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,q=/(?:\s|^)([^\s]+)(?=\s|$)/g,t=/([a-z0-9])([A-Z])/g;function A(e,r,i){return r=n(r),i===0?r:E(r)}function g(e){return e=a(e,o," "),e=a(e,l," "),e=a(e,t,"$1 $2"),e=_(e),a(e,q,A)}c.exports=g
});var m=u();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
