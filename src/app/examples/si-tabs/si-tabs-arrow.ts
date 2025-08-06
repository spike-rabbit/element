/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { Component } from '@angular/core';
import { SiTabComponent, SiTabsetComponent } from '@spike-rabbit/element-ng/tabs';

@Component({
  selector: 'app-sample',
  imports: [SiTabComponent, SiTabsetComponent],
  templateUrl: './si-tabs-arrow.html',
  host: { class: 'p-5' }
})
export class SampleComponent {}
