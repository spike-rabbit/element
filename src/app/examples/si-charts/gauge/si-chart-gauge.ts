/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiChartGaugeComponent } from '@spike-rabbit/charts-ng/gauge';
import { SiResizeObserverDirective } from '@spike-rabbit/element-ng/resize-observer';

@Component({
  selector: 'app-sample',
  imports: [SiChartGaugeComponent, SiResizeObserverDirective],
  templateUrl: './si-chart-gauge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  additionalOptions = {
    tooltip: { formatter: '{c} kWh' }
  };
}
