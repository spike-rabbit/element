/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
/// <reference types="node" />
// only link node types here to prevent them from being used in other files

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideIconConfig } from '@spike-rabbit/element-ng/icon';
import { provideNgxTranslateForElement } from '@spike-rabbit/element-translate-ng/ngx-translate';
import {
  SiLivePreviewThemeApi,
  SimplLivePreviewModule,
  SimplLivePreviewRoutingModule
} from '@spike-rabbit/live-preview';

import { LivePreviewThemeApiService } from './shared/live-preview-theme.api.service';
import { WebpackTranslateLoader } from './webpack-translate-loader';

const componentLoader =
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
  require('@spike-rabbit/live-preview/component-loader?root=src&examples=app/examples/**/*.ts&webcomponents=true!./app.config').default;

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      // Npm dependencies
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: WebpackTranslateLoader
        }
      }),
      SimplLivePreviewRoutingModule,
      // App internal
      SimplLivePreviewModule.forRoot(
        {
          modules: [],
          componentLoader,
          examplesBaseUrl: 'app/examples/',
          ticketBaseUrl: 'https://github.com/siemens/element/issues/new',
          themeSwitcher: true,
          rtlSwitcher: true,
          webcomponents: true
        },
        false
      )
    ),
    { provide: SiLivePreviewThemeApi, useClass: LivePreviewThemeApiService },
    provideAnimationsAsync(navigator.webdriver ? 'noop' : 'animations'),
    provideHttpClient(withInterceptorsFromDi()),
    provideNgxTranslateForElement(),
    provideIconConfig({ disableSvgIcons: false })
  ]
};
