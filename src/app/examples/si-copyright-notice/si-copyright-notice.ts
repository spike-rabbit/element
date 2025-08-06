/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CopyrightDetails,
  SiCopyrightNoticeComponent
} from '@spike-rabbit/element-ng/copyright-notice';

@Component({
  selector: 'app-sample',
  imports: [SiCopyrightNoticeComponent],
  templateUrl: './si-copyright-notice.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  copyrightDetails: CopyrightDetails = {
    startYear: 2023,
    lastUpdateYear: 2025,
    company: 'My Company' // Defaults to `Sample Company`
  };
}
