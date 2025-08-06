/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DateRange, SiDatepickerComponent } from '@spike-rabbit/element-ng/datepicker';

@Component({
  selector: 'app-sample',
  imports: [CommonModule, SiDatepickerComponent],
  templateUrl: './si-datepicker-range.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  myDateRange: DateRange = {
    start: new Date('2022-03-01'),
    end: new Date('2022-03-03')
  };
}
