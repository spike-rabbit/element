/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
/* eslint-disable @typescript-eslint/no-deprecated */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiIconComponent } from '@spike-rabbit/element-ng/icon';
import { SiPopoverLegacyDirective } from '@spike-rabbit/element-ng/popover-legacy';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiPopoverLegacyDirective, SiIconComponent],
  templateUrl: './si-popover-legacy.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  myContext = {
    $implicit: {
      state: 'powered on',
      duration: '5 minutes',
      power: '1000 W',
      icon: 'element-microwave-on'
    }
  };
}
