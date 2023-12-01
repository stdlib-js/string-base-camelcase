// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-capitalize@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-replace@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-trim@v0.1.1-esm/index.mjs";var r=/\s+/g,n=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,d=/(?:\s|^)([^\s]+)(?=\s|$)/g,m=/([a-z0-9])([A-Z])/g;function a(e,i,r){return i=t(i),0===r?i:s(i)}function g(s){return s=e(s,n," "),s=e(s,r," "),s=e(s,m,"$1 $2"),s=i(s),e(s,d,a)}export{g as default};
//# sourceMappingURL=index.mjs.map
