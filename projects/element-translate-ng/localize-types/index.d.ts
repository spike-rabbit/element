/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { TranslatableString } from '@siemens/element-translate-ng/translate-types';

declare global {
  let $localize: (strings: TemplateStringsArray, ...expressions: string[]) => TranslatableString;

  interface Window {
    $localize: (strings: TemplateStringsArray, ...expressions: string[]) => TranslatableString;
  }
}
