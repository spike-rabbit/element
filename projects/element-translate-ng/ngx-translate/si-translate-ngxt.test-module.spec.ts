/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SiTranslateModule } from '@spike-rabbit/element-translate-ng/translate';
import { of } from 'rxjs';

@Component({
  template: `{{ 'KEY-1' | translate }}`,
  imports: [TranslateModule]
})
class TestComponent {}

@NgModule({
  imports: [
    TranslateModule.forChild({
      defaultLanguage: 'test',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useValue: { getTranslation: () => of({ 'KEY-1': 'VALUE-MODIFIED' }) } as TranslateLoader
      },
      isolate: true
    }),
    SiTranslateModule,
    RouterModule.forChild([{ path: '', component: TestComponent, pathMatch: 'full' }]),
    TestComponent
  ]
})
export class TestModule {}
