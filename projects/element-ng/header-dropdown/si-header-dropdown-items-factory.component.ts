/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Component, input, output } from '@angular/core';
import { MenuItem } from '@spike-rabbit/element-ng/common';
import { SiLinkDirective } from '@spike-rabbit/element-ng/link';
import { SiTranslateModule } from '@spike-rabbit/element-translate-ng/translate';

import { SiHeaderDropdownItemComponent } from './si-header-dropdown-item.component';
import { SiHeaderDropdownTriggerDirective } from './si-header-dropdown-trigger.directive';
import { SiHeaderDropdownComponent } from './si-header-dropdown.component';

/**
 * A factory to render multiple {@link MenuItem}.
 * Requires a wrapping {@link SiHeaderDropdownComponent}.
 *
 * @internal
 */
@Component({
  selector: 'si-header-dropdown-items-factory',
  imports: [
    SiHeaderDropdownComponent,
    SiHeaderDropdownItemComponent,
    SiTranslateModule,
    SiLinkDirective,
    SiHeaderDropdownTriggerDirective
  ],
  templateUrl: './si-header-dropdown-items-factory.component.html'
})
export class SiHeaderDropdownItemsFactoryComponent {
  readonly items = input.required<MenuItem[]>();
  readonly activeChange = output<boolean>();
}
