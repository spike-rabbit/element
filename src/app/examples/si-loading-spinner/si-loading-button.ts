/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiFormItemComponent } from '@spike-rabbit/element-ng/form';
import { SiLoadingButtonComponent } from '@spike-rabbit/element-ng/loading-spinner';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [FormsModule, SiLoadingButtonComponent, SiFormItemComponent],
  templateUrl: './si-loading-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  loading = false;

  handleClick(msg: string): void {
    this.logEvent(msg);
    this.loading = true;
  }
}
