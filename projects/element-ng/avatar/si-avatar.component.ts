/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  numberAttribute,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { EntityStatusType, STATUS_ICON, StatusIcon } from '@siemens/element-ng/common';
import { SiIconModule } from '@siemens/element-ng/icon';
import { TranslatableString } from '@siemens/element-translate-ng/translate';

import { SiAvatarBackgroundColorDirective } from './si-avatar-background-color.directive';

export type AvatarSize = 'tiny' | 'xsmall' | 'small' | 'regular' | 'large' | 'xlarge';

@Component({
  selector: 'si-avatar',
  templateUrl: './si-avatar.component.html',
  styleUrl: './si-avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, SiIconModule],
  hostDirectives: [
    {
      directive: SiAvatarBackgroundColorDirective,
      inputs: ['color', 'autoColor']
    }
  ],
  host: {
    '[class]': 'size()'
  }
})
export class SiAvatarComponent implements OnChanges {
  /**
   * Size of the component.
   *
   * @defaultValue 'regular'
   */
  readonly size = input<AvatarSize>('regular');
  /** Image src URL when using an image. */
  readonly imageUrl = input<string>();
  /** Icon name when using an icon. */
  readonly icon = input<string>();
  /**
   * Initials to be displayed as default avatar if no `icon` or `imageUrl` are provided.
   * If also no initials are provided, they will be automatically calculated from the `altText`.
   * The value will be used to calculate the background color when `autoColor` is true.
   */
  readonly initials = input<string>();
  /**
   * The desired color index from $element-data-* color tokens. This can be set to any kind of
   * positive integer that is then mapped to a color index.
   * A better way to set a pseudo-random color is to set * {@link autoColor} to `true`.
   *
   * @defaultValue undefined
   */
  readonly color = input<number | undefined, unknown>(undefined, { transform: numberAttribute });
  /** The `alt` text for image, `title` for other modes. */
  readonly altText = input.required<string>();
  /**
   * The status (success, info, warning, caution, danger, critical, pending, progress) to be
   * visualized.
   */
  readonly status = input<EntityStatusType>();
  /**
   * aria-label for status
   */
  readonly statusAriaLabel = input<TranslatableString>();

  protected statusIcon?: StatusIcon;
  protected displayInitials?: string;
  private readonly autoBackgroundColorDirective = inject(SiAvatarBackgroundColorDirective);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.status) {
      const status = this.status();
      this.statusIcon = status ? STATUS_ICON[status] : undefined;
    }

    if (changes.initials || changes.altText) {
      this.setInitials();
      this.autoBackgroundColorDirective.calculateColorFromInitials(this.displayInitials);
    }
  }

  private setInitials(): void {
    const initials = this.initials();
    if (initials) {
      this.displayInitials = initials;
    } else {
      const name = this.altText()
        .replaceAll(/\([^)]*\)/g, '')
        .trim();
      const byComma = name.split(/,\s*/);
      let first: string;
      let last: string;
      if (byComma.length > 1) {
        last = byComma[0];
        first = byComma[1];
      } else {
        const parts = name.split(' ');
        first = parts.shift() ?? '';
        last = parts.pop() ?? '';
      }
      if (first) {
        first = first[0].toLocaleUpperCase();
      }
      if (last) {
        last = last[0].toLocaleUpperCase();
      }
      this.displayInitials = first + last;
    }
  }
}
