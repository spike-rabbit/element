/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiIconComponent } from '@spike-rabbit/element-ng/icon';
import { SiInfoPageComponent } from '@spike-rabbit/element-ng/info-page';

@Component({
  selector: 'app-sample',
  imports: [SiInfoPageComponent, SiIconComponent],
  templateUrl: './si-info-page-stacked-icon.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  face = 'element-state-face-neutral';
}
