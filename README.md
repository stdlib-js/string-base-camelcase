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

# camelcase

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a string to camel case.

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-camelcase@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-base-camelcase/tags). For example,

```javascript
import camelcase from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-base-camelcase@v0.0.2-esm/index.mjs';
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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-base-camelcase.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-base-camelcase

[test-image]: https://github.com/stdlib-js/string-base-camelcase/actions/workflows/test.yml/badge.svg?branch=v0.0.2
[test-url]: https://github.com/stdlib-js/string-base-camelcase/actions/workflows/test.yml?query=branch:v0.0.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-base-camelcase/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-base-camelcase?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-base-camelcase.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-base-camelcase/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-base-camelcase/tree/deno
[umd-url]: https://github.com/stdlib-js/string-base-camelcase/tree/umd
[esm-url]: https://github.com/stdlib-js/string-base-camelcase/tree/esm
[branches-url]: https://github.com/stdlib-js/string-base-camelcase/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-base-camelcase/main/LICENSE

</section>

<!-- /.links -->
