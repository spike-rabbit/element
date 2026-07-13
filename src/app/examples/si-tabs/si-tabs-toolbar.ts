/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiMenuBarDirective, SiMenuItemComponent } from '@spike-rabbit/element-ng/menu';
import { SiTabComponent, SiTabPortalComponent, SiTabsetComponent } from '@spike-rabbit/element-ng/tabs';
import { SiTooltipDirective } from '@spike-rabbit/element-ng/tooltip';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [
    SiMenuBarDirective,
    SiMenuItemComponent,
    SiTabComponent,
    SiTabPortalComponent,
    SiTabsetComponent,
    SiTooltipDirective
  ],
  templateUrl: './si-tabs-toolbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
}
