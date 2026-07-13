/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SiChartCartesianComponent } from '@spike-rabbit/charts-ng/cartesian';
import { SiResizeObserverDirective } from '@spike-rabbit/element-ng/resize-observer';

@Component({
  selector: 'app-sample',
  imports: [SiChartCartesianComponent, SiResizeObserverDirective],
  templateUrl: './si-chart-bar-stacked.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {}
