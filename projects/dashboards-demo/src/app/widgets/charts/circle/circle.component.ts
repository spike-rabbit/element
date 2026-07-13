/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { CircleChartSeries, SiChartCircleComponent } from '@spike-rabbit/charts-ng/circle';
import { WidgetConfig, WidgetInstance } from '@spike-rabbit/dashboards-ng';
import { SiResizeObserverDirective } from '@spike-rabbit/element-ng/resize-observer';
import { Observable } from 'rxjs';

import { DataService } from '../../../widgets/charts/data.service';

@Component({
  selector: 'app-circle',
  imports: [SiChartCircleComponent, SiResizeObserverDirective, AsyncPipe],
  templateUrl: './circle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent implements OnInit, WidgetInstance {
  readonly config = input.required<WidgetConfig>();
  data!: Observable<CircleChartSeries[]>;

  private dataService = inject(DataService);

  ngOnInit(): void {
    this.data = (this.dataService as any)[this.config().payload.datasourceId]();
  }
}
