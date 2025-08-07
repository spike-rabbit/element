/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiColorPickerComponent } from '@spike-rabbit/element-ng/color-picker';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiColorPickerComponent, FormsModule],
  templateUrl: './si-color-picker-ngmodel.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
  palette = [
    'element-data-1',
    'element-data-2',
    'element-data-3',
    'element-data-4',
    'element-data-5',
    'element-data-6',
    'element-data-7',
    'element-data-8 '
  ];

  selectedColor = 'element-data-7';
}
