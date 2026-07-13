import { withNativeFederation, shareAll } from '@angular-architects/native-federation/config';
export default withNativeFederation({
  name: 'dashboards-demo-esm',

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  },

  // Don't share any mapped paths - bundle them into the app instead
  sharedMappings: [],

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    '@siemens/ngx-datatable',
    // Use RegExp to skip ALL entry points!
    /^@angular\/platform-browser\/animations/,
    '@meteocons/svg-static',
    /^@module-federation/,
    /^@ngx-formly/,
    /^ol/,
    /^ngx-image-cropper/,
    /^google-libphonenumber/,
    /^echarts/,
    // Skip packages with assets that can't be bundled for browser
    'flag-icons',
    // Skip Node.js-only build/schematics tooling that shareAll would otherwise
    // try to bundle for the browser. These transitively import
    // @angular-devkit/core, whose template.js is not valid browser code and
    // breaks esbuild ("Unterminated string literal").
    /^@angular-architects\/module-federation/,
    /^@angular\/cdk\/schematics/
    // Add further packages you don't need at runtime
  ],

  features: {
    // Disabled because sheriff-core doesn't support wildcard path mappings
    // like @spike-rabbit/element-ng/*: projects/element-ng/*/index.ts in tsconfig
    ignoreUnusedDeps: false
  }
});
