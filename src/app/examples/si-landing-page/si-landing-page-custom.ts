/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CopyrightDetails } from '@spike-rabbit/element-ng/copyright-notice';
import { AlertConfig, SiLandingPageComponent } from '@spike-rabbit/element-ng/landing-page';
import { SiPasswordToggleModule } from '@spike-rabbit/element-ng/password-toggle';
import { SiSystemBannerComponent } from '@spike-rabbit/element-ng/system-banner';

@Component({
  selector: 'app-sample',
  imports: [
    SiLandingPageComponent,
    SiPasswordToggleModule,
    TranslateModule,
    RouterLink,
    SiSystemBannerComponent
  ],
  templateUrl: './si-landing-page-custom.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  announcement: AlertConfig = {
    severity: 'warning',
    message: 'System is currently under maintenance'
  };

  loginAlert: AlertConfig = {
    severity: 'danger',
    message: 'Sample login error message'
  };

  copyrightDetails: CopyrightDetails = {
    startYear: 2023,
    company: 'Example Company'
  };
}
