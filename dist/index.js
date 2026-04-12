"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=v(function(C,i){
var E=require('@stdlib/string-base-capitalize/dist'),n=require('@stdlib/string-base-lowercase/dist'),a=require('@stdlib/string-base-replace/dist'),_=require('@stdlib/string-base-trim/dist'),l=/\s+/g,o=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,q=/(?:\s|^)([^\s]+)(?=\s|$)/g,t=/([a-z0-9])([A-Z])/g;function A(e,r,u){return r=n(r),u===0?r:E(r)}function g(e){return e=a(e,o," "),e=a(e,l," "),e=a(e,t,"$1 $2"),e=_(e),a(e,q,A)}i.exports=g
});var m=c();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
