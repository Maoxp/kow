# Zephir

Zephir 是一种专门为 PHP 扩展开发设计的高级语言。它允许开发人员使用类似于 PHP 语法的语言来编写扩展，并将其编译成 C 代码，然后再通过 PHP 扩展机制加载到 PHP 中。

[Zephir](https://docs.zephir-lang.com/latest/) 提供了一种更加高级和易于使用的方式来编写 PHP 扩展，相比于直接使用 C 或 C++ 编写扩展，它可以显著减少开发时间和复杂性。由于 Zephir 语法与 PHP 类似，PHP 开发人员可以更快速地学习和使用它来编写扩展。

一些 Zephir 的特性包括：

1. 类似于 PHP 的语法：Zephir 的语法与 PHP 类似，因此 PHP 开发人员可以很容易地上手。

2. 编译成 C 代码：Zephir 编写的代码会被编译成 C 代码，然后再通过编译器生成 PHP 扩展。这样可以保证扩展的性能和效率。

3. 强类型支持：与 PHP 不同，Zephir 支持静态类型，这有助于提高代码的可读性和性能。

4. 直接访问 Zend API：Zephir 允许开发人员直接访问 Zend Engine API，因此可以实现与直接使用 C 编写扩展相似的功能。

总的来说，Zephir 提供了一种更加高级和便捷的方式来开发 PHP 扩展，特别是对于那些熟悉 PHP 但不熟悉 C 的开发人员来说，它是一个非常有吸引力的选择。

## 扩展开发的选择

A C++ library for developing PHP extensions: [php-cpp](https://www.php-cpp.com/)
