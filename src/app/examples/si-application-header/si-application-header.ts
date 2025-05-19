/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  SiApplicationHeaderComponent,
  SiHeaderAccountItemComponent,
  SiHeaderActionItemComponent,
  SiHeaderActionsDirective,
  SiHeaderBrandDirective,
  SiHeaderCollapsibleActionsComponent,
  SiHeaderLogoDirective,
  SiHeaderNavigationComponent,
  SiHeaderNavigationItemComponent,
  SiHeaderSelectionItemComponent
} from '@spike-rabbit/element-ng/application-header';
import {
  SiHeaderDropdownComponent,
  SiHeaderDropdownItemComponent,
  SiHeaderDropdownTriggerDirective
} from '@spike-rabbit/element-ng/header-dropdown';

@Component({
  selector: 'app-sample',
  templateUrl: './si-application-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SiApplicationHeaderComponent,
    SiHeaderActionItemComponent,
    SiHeaderCollapsibleActionsComponent,
    RouterLink,
    RouterLinkActive,
    SiHeaderDropdownComponent,
    SiHeaderDropdownTriggerDirective,
    SiHeaderDropdownItemComponent,
    SiHeaderNavigationItemComponent,
    SiHeaderAccountItemComponent,
    SiHeaderNavigationComponent,
    SiHeaderActionsDirective,
    SiHeaderBrandDirective,
    SiHeaderSelectionItemComponent,
    SiHeaderLogoDirective
  ]
})
export class SampleComponent {
  allTenants = ['Tenant 1', 'Tenant 2', 'Tenant 3'];

  activeTenant = 'Tenant 1';
}
