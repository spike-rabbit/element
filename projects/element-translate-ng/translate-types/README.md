# Entry point for @spike-rabbit/element development only

`TranslatableString` must be in its own entry point as it is reused in `@spike-rabbit/element-localize-types` which itself is
used as a types-package.
Having `TranslatableString` in `@spike-rabbit/element-translate-ng/translation` causes the compiler to fail.
Therefore, it is only reexported in `@spike-rabbit/element-translate-ng/translation`.
