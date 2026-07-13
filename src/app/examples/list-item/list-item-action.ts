/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { elementUser, elementLock } from '@siemens/element-icons';
import { addIcons, SiIconComponent } from '@spike-rabbit/element-ng/icon';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiIconComponent],
  templateUrl: './list-item-action.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  icons = addIcons({ elementUser, elementLock });
}
