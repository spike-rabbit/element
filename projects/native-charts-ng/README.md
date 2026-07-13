# Element Native Charts

The Element native chart library for Angular without external dependencies.

## Usage

To use the Element Native Charts Angular components in your project, add them to your dependencies
by executing:

```sh
npm install --save @spike-rabbit/native-charts-ng
```

Element Native Charts uses standalone components with separate entry points.
Import components directly from their specific entry points:

```ts
import { SiNChartGaugeComponent } from '@spike-rabbit/native-charts-ng/gauge';
import { SiMicrochartBarComponent } from '@spike-rabbit/native-charts-ng/microchart-bar';
import { SiMicrochartDonutComponent } from '@spike-rabbit/native-charts-ng/microchart-donut';
import { SiMicrochartLineComponent } from '@spike-rabbit/native-charts-ng/microchart-line';
import { SiMicrochartProgressComponent } from '@spike-rabbit/native-charts-ng/microchart-progress';

@Component({
  selector: 'app-dashboard',
  imports: [
    SiNChartGaugeComponent,
    SiMicrochartBarComponent
    // ... other components
  ],
  template: `
    <si-nchart-gauge [series]="gaugeSeries" [min]="0" [max]="100" />
    <si-microchart-bar [series]="barSeries" />
  `
})
export class DashboardComponent {}
```

### Running unit tests

Run `pnpm run native-charts:test` to perform the unit tests via [Vitest](https://main.vitest.dev/).

## License

Code and documentation Copyright (c) Siemens 2016 - 2026

MIT, see [LICENSE.md](LICENSE.md).
