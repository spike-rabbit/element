/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Directive } from '@angular/core';

/** The siemens logo. Should be located inside `.header-brand`. */
@Directive({
  selector: 'si-header-logo, [siHeaderLogo]',
  host: {
    class: 'header-logo px-6 focus-inside'
  }
})
export class SiHeaderLogoDirective {}
