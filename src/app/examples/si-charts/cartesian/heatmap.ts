/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { Component } from '@angular/core';
import {
  CartesianChartSeries,
  ChartXAxis,
  ChartYAxis,
  SiChartCartesianComponent
} from '@spike-rabbit/charts-ng';
import { SiResizeObserverDirective } from '@spike-rabbit/element-ng/resize-observer';

import { ChartBase, ChartData } from './chart-base';

const days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

const hours: string[] = [];
for (let i = 0; i < 24; i++) {
  hours.push(i.toString() + 'h');
}

const data = [
  [0, 0, 5],
  [1, 0, 1],
  [2, 0, null],
  [3, 0, null],
  [4, 0, null],
  [5, 0, null],
  [6, 0, null],
  [7, 0, null],
  [8, 0, null],
  [9, 0, null],
  [10, 0, null],
  [11, 0, 2],
  [12, 0, 4],
  [13, 0, 1],
  [14, 0, 1],
  [15, 0, 3],
  [16, 0, 4],
  [17, 0, 6],
  [18, 0, 4],
  [19, 0, 4],
  [20, 0, 3],
  [21, 0, 3],
  [22, 0, 2],
  [23, 0, 5],
  [0, 1, 7],
  [1, 1, null],
  [2, 1, null],
  [3, 1, null],
  [4, 1, null],
  [5, 1, null],
  [6, 1, null],
  [7, 1, null],
  [8, 1, null],
  [9, 1, null],
  [10, 1, 5],
  [11, 1, 2],
  [12, 1, 2],
  [13, 1, 6],
  [14, 1, 9],
  [15, 1, 11],
  [16, 1, 6],
  [17, 1, 7],
  [18, 1, 8],
  [19, 1, 12],
  [20, 1, 5],
  [21, 1, 5],
  [22, 1, 7],
  [23, 1, 2],
  [0, 2, 1],
  [1, 2, 1],
  [2, 2, null],
  [3, 2, null],
  [4, 2, null],
  [5, 2, null],
  [6, 2, null],
  [7, 2, null],
  [8, 2, null],
  [9, 2, null],
  [10, 2, 3],
  [11, 2, 2],
  [12, 2, 1],
  [13, 2, 9],
  [14, 2, 8],
  [15, 2, 10],
  [16, 2, 6],
  [17, 2, 5],
  [18, 2, 5],
  [19, 2, 5],
  [20, 2, 7],
  [21, 2, 4],
  [22, 2, 2],
  [23, 2, 4],
  [0, 3, 7],
  [1, 3, 3],
  [2, 3, null],
  [3, 3, null],
  [4, 3, null],
  [5, 3, null],
  [6, 3, null],
  [7, 3, null],
  [8, 3, 1],
  [9, 3, null],
  [10, 3, 5],
  [11, 3, 4],
  [12, 3, 7],
  [13, 3, 14],
  [14, 3, 13],
  [15, 3, 12],
  [16, 3, 9],
  [17, 3, 5],
  [18, 3, 5],
  [19, 3, 10],
  [20, 3, 6],
  [21, 3, 4],
  [22, 3, 4],
  [23, 3, 1],
  [0, 4, 1],
  [1, 4, 3],
  [2, 4, null],
  [3, 4, null],
  [4, 4, null],
  [5, 4, 1],
  [6, 4, null],
  [7, 4, null],
  [8, 4, null],
  [9, 4, 2],
  [10, 4, 4],
  [11, 4, 4],
  [12, 4, 2],
  [13, 4, 4],
  [14, 4, 4],
  [15, 4, 14],
  [16, 4, 12],
  [17, 4, 1],
  [18, 4, 8],
  [19, 4, 5],
  [20, 4, 3],
  [21, 4, 7],
  [22, 4, 3],
  [23, 4, null],
  [0, 5, 2],
  [1, 5, 1],
  [2, 5, null],
  [3, 5, 3],
  [4, 5, null],
  [5, 5, null],
  [6, 5, null],
  [7, 5, null],
  [8, 5, 2],
  [9, 5, null],
  [10, 5, 4],
  [11, 5, 1],
  [12, 5, 5],
  [13, 5, 10],
  [14, 5, 5],
  [15, 5, 7],
  [16, 5, 11],
  [17, 5, 6],
  [18, 5, null],
  [19, 5, 5],
  [20, 5, 3],
  [21, 5, 4],
  [22, 5, 2],
  [23, 5, null],
  [0, 6, 1],
  [1, 6, null],
  [2, 6, null],
  [3, 6, null],
  [4, 6, null],
  [5, 6, null],
  [6, 6, null],
  [7, 6, null],
  [8, 6, null],
  [9, 6, null],
  [10, 6, 1],
  [11, 6, null],
  [12, 6, 2],
  [13, 6, 1],
  [14, 6, 3],
  [15, 6, 4],
  [16, 6, null],
  [17, 6, null],
  [18, 6, null],
  [19, 6, null],
  [20, 6, 1],
  [21, 6, 2],
  [22, 6, 2],
  [23, 6, 6]
];

@Component({
  selector: 'app-sample',
  imports: [SiChartCartesianComponent, SiResizeObserverDirective],
  templateUrl: './chart.html'
})
export class SampleComponent extends ChartBase {
  chartData: ChartData = {
    title: 'Basic Chart',
    xAxis: {
      type: 'category',
      splitLine: { show: true },
      data: hours
    } as ChartXAxis,
    yAxis: {
      type: 'category',
      splitLine: { show: true },
      data: days
    } as ChartYAxis,
    series: [
      {
        type: 'heatmap',
        name: 'Series 1',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ] as CartesianChartSeries[],
    showLegend: true,
    additionalOptions: {
      tooltip: { trigger: 'item' },
      visualMap: {
        type: 'continuous',
        min: 1,
        max: 10,
        show: false
      }
    }
  };
}
