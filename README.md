<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# camelcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to camel case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-camelcase@esm/index.mjs';
```

#### camelcase( str )

Converts a string to camel case.

```javascript
var out = camelcase( 'foo bar' );
// returns 'fooBar'

out = camelcase( 'IS_MOBILE' );
// returns 'isMobile'

out = camelcase( 'Hello World!' );
// returns 'helloWorld'

out = camelcase( '--foo-bar--' );
// returns 'fooBar'
```

</section>

<!-- /.usage -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-camelcase@esm/index.mjs';

var str = 'Hello World!';
var out = camelcase( str );
// returns 'helloWorld'

str = 'HELLO WORLD!';
out = camelcase( str );
// returns 'helloWorld'

str = 'To be, or not to be: that is the question.';
out = camelcase( str );
// returns 'toBeOrNotToBeThatIsTheQuestion'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-base/constantcase`][@stdlib/string/base/constantcase]</span><span class="delimiter">: </span><span class="description">convert a string to constant case.</span>
-   <span class="package-name">[`@stdlib/string-base/lowercase`][@stdlib/string/base/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>
-   <span class="package-name">[`@stdlib/string-base/snakecase`][@stdlib/string/base/snakecase]</span><span class="delimiter">: </span><span class="description">convert a string to snake case.</span>
-   <span class="package-name">[`@stdlib/string-base/uppercase`][@stdlib/string/base/uppercase]</span><span class="delimiter">: </span><span class="description">convert a string to uppercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-camelcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-camelcase

[test-image]: https://github.com/stdlib-js/string-base-camelcase/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/string-base-camelcase/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-camelcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-camelcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-camelcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-camelcase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-camelcase/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-base-camelcase/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-base-camelcase/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-base-camelcase/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-base-camelcase/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-base-camelcase/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-base-camelcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-camelcase/main/LICENSE

<!-- <related-links> -->

[@stdlib/string/base/constantcase]: https://github.com/stdlib-js/string-base-constantcase/tree/esm

[@stdlib/string/base/lowercase]: https://github.com/stdlib-js/string-base-lowercase/tree/esm

[@stdlib/string/base/snakecase]: https://github.com/stdlib-js/string-base-snakecase/tree/esm

[@stdlib/string/base/uppercase]: https://github.com/stdlib-js/string-base-uppercase/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
