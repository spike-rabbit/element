/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiLoadingSpinnerComponent } from '@spike-rabbit/element-ng/loading-spinner';

@Component({
  selector: 'app-sample',
  imports: [SiLoadingSpinnerComponent],
  templateUrl: './si-loading-spinner.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  loading = true;
}
