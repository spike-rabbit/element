import { withNativeFederation, shareAll } from '@angular-architects/native-federation/config';
export default withNativeFederation({
  name: 'mfe',
  exposes: {
    './Download': './projects/dashboards-demo/mfe/src/app/download.component.ts',
    './Upload': './projects/dashboards-demo/mfe/src/app/upload.component.ts'
  },
  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Use RegExp to skip ALL entry points!
    /^@angular\/platform-browser\/animations/,
    '@meteocons/svg-static',
    /^@module-federation/,
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

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' })
  }
});
