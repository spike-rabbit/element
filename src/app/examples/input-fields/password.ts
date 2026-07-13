/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiFormItemComponent } from '@spike-rabbit/element-ng/form';
import {
  SiPasswordStrengthComponent,
  SiPasswordStrengthDirective
} from '@spike-rabbit/element-ng/password-strength';
import { SiPasswordToggleComponent } from '@spike-rabbit/element-ng/password-toggle';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [
    SiFormItemComponent,
    SiPasswordStrengthComponent,
    SiPasswordStrengthDirective,
    SiPasswordToggleComponent,
    FormsModule
  ],
  templateUrl: './password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
}
