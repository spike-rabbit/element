/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { EnvironmentProviders, importProvidersFrom, Provider } from '@angular/core';
import {
  SiTranslateModule,
  SiTranslateServiceBuilder
} from '@spike-rabbit/element-translate-ng/translate';

import { SiTranslateNgxTServiceBuilder } from './si-translate-ngxt.service-builder';

/**
 * This provider configures Element to use ngx-translate for translating {@link TranslatableString}
 * It should only be imported once in an application's configuration (typically `app.config.ts`)
 */
export const provideNgxTranslateForElement = (): (EnvironmentProviders | Provider)[] => {
  return [
    { provide: SiTranslateServiceBuilder, useClass: SiTranslateNgxTServiceBuilder },
    importProvidersFrom(SiTranslateModule)
  ];
};
