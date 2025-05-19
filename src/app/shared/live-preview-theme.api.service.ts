/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Injectable } from '@angular/core';
import { SiLivePreviewThemeApi, ThemeType } from '@spike-rabbit/live-preview';
import { NEVER, Observable } from 'rxjs';

@Injectable()
export class LivePreviewThemeApiService extends SiLivePreviewThemeApi {
  setThemeFromPreviewer(theme: ThemeType): void {}

  getApplicationThemeObservable(): Observable<ThemeType> {
    return NEVER;
  }
}
