/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Component } from '@angular/core';
import { SiIconStatusComponent } from '@siemens/element-ng/icon-status';

@Component({
  selector: 'app-sample',
  templateUrl: './si-icon-status.html',
  host: { class: 'p-5' },
  imports: [SiIconStatusComponent]
})
export class SampleComponent {}
