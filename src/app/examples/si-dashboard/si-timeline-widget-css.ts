/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SiCardComponent } from '@spike-rabbit/element-ng/card';
import { ContentActionBarMainItem } from '@spike-rabbit/element-ng/content-action-bar';
import { SiIconNextComponent, SiStatusIconComponent } from '@spike-rabbit/element-ng/icon';
import { Link, SiLinkDirective } from '@spike-rabbit/element-ng/link';
import { MenuItem } from '@spike-rabbit/element-ng/menu';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [SiCardComponent, SiIconNextComponent, SiStatusIconComponent, SiLinkDirective],
  templateUrl: './si-timeline-widget-css.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  link: Link = { title: 'Home', 'link': '/' };

  simplActionLink: Link = {
    title: 'Do something',
    action: () => this.logEvent('Do something.'),
    tooltip: 'APP.CLAIM'
  };

  primaryActions: ContentActionBarMainItem[] = [
    { type: 'action', label: 'Settings', action: () => this.logEvent('Settings clicked') },
    { type: 'action', label: 'Copy', action: () => this.logEvent('Copy clicked') },
    { type: 'action', label: 'Delete', action: () => this.logEvent('Delete clicked') }
  ];

  secondaryActions: MenuItem[] = [
    { type: 'action', label: 'Settings', action: () => this.logEvent('Settings clicked') },
    { type: 'action', label: 'Copy', action: () => this.logEvent('Copy clicked') }
  ];

  zoom: ContentActionBarMainItem[] = [
    {
      type: 'action',
      label: 'Expand',
      icon: 'element-zoom',
      iconOnly: true,
      action: () => this.logEvent('Zoom clicked')
    }
  ];
  share: ContentActionBarMainItem[] = [
    {
      type: 'action',
      label: 'Share',
      icon: 'element-share',
      iconOnly: true,
      action: () => this.logEvent('Share clicked')
    }
  ];
}
