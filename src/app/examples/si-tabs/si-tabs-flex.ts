/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiFooterComponent } from '@spike-rabbit/element-ng/footer';
import { SiTabComponent, SiTabsetComponent } from '@spike-rabbit/element-ng/tabs';

@Component({
  selector: 'app-sample',
  imports: [SiTabsetComponent, SiTabComponent, SiFooterComponent],
  templateUrl: './si-tabs-flex.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'si-layout-fixed-height' }
})
export class SampleComponent {}
