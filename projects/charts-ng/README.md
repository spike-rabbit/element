# Element Charts

The Element chart library for Angular based on ECharts. Going through the roof. Stoinks.

## Usage

To use the Element Charts Angular components in your project, add them to your dependencies
by executing:

```sh
npm install --save @spike-rabbit/charts-ng
```

You also have to install the peer dependencies of Element Charts.

```sh
npm install echarts --save
```

Import the library to your Angular `AppModule`, mostly residing in your
`src/app/app.modules.ts` file as follows:

```ts
// [...]

// Import this library
import { SiChartsNgModule } from '@spike-rabbit/charts-ng';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SiChartsNgModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### Running unit tests

Run `yarn charts:test` to perform the unit tests via [Karma](https://karma-runner.github.io).
You can set a seed for running the tests in a specific using an environment variable: `SEED=71384 yarn lib:test`

## License

The following applies for code and documentation of the git repository,
unless explicitly mentioned.

Copyright (c) Siemens 2016 - 2025

MIT, see [LICENSE.md](LICENSE.md).
