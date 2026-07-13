/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { NgModule } from '@angular/core';
import { SiChartCartesianComponent } from '@spike-rabbit/charts-ng/cartesian';
import { SiChartComponent } from '@spike-rabbit/charts-ng/chart';
import { SiChartCircleComponent } from '@spike-rabbit/charts-ng/circle';
import { SiCustomLegendComponent } from '@spike-rabbit/charts-ng/custom-legend';
import { SiChartGaugeComponent } from '@spike-rabbit/charts-ng/gauge';
import { SiChartProgressComponent } from '@spike-rabbit/charts-ng/progress';
import { SiChartProgressBarComponent } from '@spike-rabbit/charts-ng/progress-bar';
import { SiChartSankeyComponent } from '@spike-rabbit/charts-ng/sankey';
import { SiChartSunburstComponent } from '@spike-rabbit/charts-ng/sunburst';

/**
 * @deprecated The {@link SiChartsNgModule} is deprecated and will be removed in v51.
 * We recommend importing individual components to avoid unnecessary module imports.
 * Starting with v49, separate entry points are available for each component, allowing applications
 * to import components from specific entry points, which helps reduce the application bundle size.
 */
@NgModule({
  imports: [
    SiChartCartesianComponent,
    SiChartCircleComponent,
    SiChartComponent,
    SiChartGaugeComponent,
    SiChartProgressBarComponent,
    SiChartProgressComponent,
    SiChartSankeyComponent,
    SiChartSunburstComponent,
    SiCustomLegendComponent
  ],
  exports: [
    SiChartCartesianComponent,
    SiChartCircleComponent,
    SiChartComponent,
    SiChartGaugeComponent,
    SiChartProgressBarComponent,
    SiChartProgressComponent,
    SiChartSankeyComponent,
    SiChartSunburstComponent,
    SiCustomLegendComponent
  ]
})
export class SiChartsNgModule {}

/**
 * @deprecated Use {@link SiChartsNgModule} instead. The `Simpl` prefix is deprecated and will be removed in v51.
 */
export { SiChartsNgModule as SimplChartsNgModule };
