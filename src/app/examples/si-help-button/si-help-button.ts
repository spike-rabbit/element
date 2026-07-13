/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SiFormItemComponent } from '@spike-rabbit/element-ng/form';
import { SiHelpButtonComponent } from '@spike-rabbit/element-ng/help-button';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiHelpButtonComponent, SiFormItemComponent, ReactiveFormsModule],
  templateUrl: './si-help-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'p-5'
  }
})
export class SampleComponent {
  private log = inject(LOG_EVENT);
  readonly disabledHelp = new FormControl(false);

  solve(): void {
    this.log('Solution');
  }
}
