/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiCardComponent } from '@spike-rabbit/element-ng/card';
import { ContentActionBarMainItem } from '@spike-rabbit/element-ng/content-action-bar';
import { Link, SiLinkDirective } from '@spike-rabbit/element-ng/link';
import { SiSearchBarComponent } from '@spike-rabbit/element-ng/search-bar';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiCardComponent, SiLinkDirective, SiSearchBarComponent],
  templateUrl: './si-list-widget-css.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
  simplLink: Link = {
    title: 'Link',
    link: '/'
  };

  primaryActions: ContentActionBarMainItem[] = [
    {
      type: 'action',
      label: 'Sort up',
      icon: 'element-sort-up',
      iconOnly: true,
      action: () => this.logEvent('Sort up')
    }
  ];
}
