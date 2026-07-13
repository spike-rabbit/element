/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
/* eslint-disable @typescript-eslint/no-deprecated */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  SiApplicationHeaderComponent,
  SiHeaderAccountItemComponent,
  SiHeaderActionItemComponent,
  SiHeaderActionsDirective,
  SiHeaderBrandDirective,
  SiHeaderCollapsibleActionsComponent,
  SiHeaderLogoDirective,
  SiHeaderSelectionItemComponent
} from '@spike-rabbit/element-ng/application-header';
import {
  SiHeaderDropdownComponent,
  SiHeaderDropdownItemComponent,
  SiHeaderDropdownTriggerDirective
} from '@spike-rabbit/element-ng/header-dropdown';
import { SiStatusIconComponent } from '@spike-rabbit/element-ng/icon';
import {
  SiNotificationItemComponent,
  type NotificationItemLink
} from '@spike-rabbit/element-ng/notification-item';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [
    SiApplicationHeaderComponent,
    SiHeaderActionItemComponent,
    SiHeaderLogoDirective,
    SiHeaderCollapsibleActionsComponent,
    RouterLink,
    SiHeaderDropdownComponent,
    SiHeaderDropdownTriggerDirective,
    SiHeaderDropdownItemComponent,
    SiHeaderAccountItemComponent,
    SiHeaderActionsDirective,
    SiHeaderBrandDirective,
    SiHeaderSelectionItemComponent,
    SiNotificationItemComponent,
    SiStatusIconComponent
  ],
  templateUrl: './si-notification-item-popover.html',
  styles: `
    /** .header-dropdown-overlay is only applied to the si-header-dropdown if it is shown in an overlay. So not in the mobile mode */
    .header-dropdown-overlay .notification-dropdown {
      max-width: 400px;
    }

    .notification-dropdown {
      max-height: 70vh;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  allTenants = ['Tenant 1', 'Tenant 2', 'Tenant 3'];
  activeTenant = 'Tenant 1';

  itemLink: NotificationItemLink = {
    type: 'link',
    href: 'https://www.siemens.com',
    target: '_blank'
  };
}
