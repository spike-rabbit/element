/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { addIcons, elementThumbnails, SiIconNextComponent } from '@spike-rabbit/element-ng/icon';
import { SiTranslateModule } from '@spike-rabbit/element-translate-ng/translate';

import { SiApplicationHeaderComponent } from './si-application-header.component';

@Component({
  selector: 'si-header-navigation',
  template: `
    @if (header.launchpad()) {
      <button
        class="header-item focus-inside"
        type="button"
        [ngClass]="'d-' + header.expandBreakpoint() + '-none'"
        (click)="header.openLaunchpad()"
      >
        <si-icon-next class="icon pe-5" [icon]="icons.elementThumbnails" />
        {{ header.launchpadLabel() | translate }}
      </button>
    }
    <ng-content />
  `,
  imports: [NgClass, SiTranslateModule, SiIconNextComponent],
  host: { class: 'header-navigation', role: 'navigation' }
})
export class SiHeaderNavigationComponent implements OnDestroy {
  protected header = inject(SiApplicationHeaderComponent);
  protected readonly icons = addIcons({ elementThumbnails });

  constructor() {
    this.header.hasNavigation.set(true);
  }

  ngOnDestroy(): void {
    this.header.hasNavigation.set(false);
  }
}
