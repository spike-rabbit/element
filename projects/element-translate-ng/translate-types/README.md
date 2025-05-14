# Entry point for @siemens/element development only

`TranslatableString` must be in its own entry point as it is reused in `@siemens/element-localize-types` which itself is
used as a types-package.
Having `TranslatableString` in `@siemens/element-translate-ng/translation` causes the compiler to fail.
Therefore, it is only reexported in `@siemens/element-translate-ng/translation`.
