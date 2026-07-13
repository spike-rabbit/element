/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SiFormItemComponent } from '@spike-rabbit/element-ng/form';
import { PhoneDetails, SiPhoneNumberInputComponent } from '@spike-rabbit/element-ng/phone-number';

@Component({
  selector: 'app-sample',
  imports: [CommonModule, SiPhoneNumberInputComponent, ReactiveFormsModule, SiFormItemComponent],
  templateUrl: './si-phone-number-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  lastEventValue!: PhoneDetails;
  form = new FormGroup({
    phoneNumber: new FormControl()
  });
}
