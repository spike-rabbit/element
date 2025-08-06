/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiFooterComponent } from '@spike-rabbit/element-ng/footer';

@Component({
  selector: 'app-sample',
  imports: [SiFooterComponent],
  templateUrl: './si-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {}
