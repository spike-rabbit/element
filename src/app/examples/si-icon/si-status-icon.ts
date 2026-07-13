/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiStatusIconComponent } from '@spike-rabbit/element-ng/icon';

@Component({
  selector: 'app-sample',
  imports: [SiStatusIconComponent],
  templateUrl: './si-status-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {}
