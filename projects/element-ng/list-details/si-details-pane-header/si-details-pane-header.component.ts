/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  Signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  SiTranslatePipe,
  t,
  TranslatableString
} from '@spike-rabbit/element-translate-ng/translate';

import { SiListDetailsComponent } from '../si-list-details.component';

/** @experimental */
@Component({
  selector: 'si-details-pane-header',
  imports: [SiTranslatePipe],
  templateUrl: './si-details-pane-header.component.html',
  styleUrl: './si-details-pane-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'nav nav-tabs' // To allow nav-link styling.
  }
})
export class SiDetailsPaneHeaderComponent {
  private parent = inject(SiListDetailsComponent);

  /**
   * Optional title to be displayed.
   */
  readonly title = input<TranslatableString>();

  /**
   * You can hide the back button in the mobile view by setting true. Required
   * in add, edit workflows on mobile sizes. During add or edit, the back button
   * should be hidden. Default value is `false`.
   *
   * @defaultValue false
   */
  readonly hideBackButton = input(false, { transform: booleanAttribute });

  /**
   * Details back button text. Required for a11y.
   *
   * @defaultValue
   * ```
   * t(() => $localize`:@@SI_LIST_DETAILS.BACK:Back`)
   * ```
   */
  readonly backButtonText = input(t(() => $localize`:@@SI_LIST_DETAILS.BACK:Back`));

  private readonly backButton = viewChild<ElementRef<HTMLElement>>('backButton');

  constructor() {
    this.parent.transferFocusToDetails.pipe(takeUntilDestroyed()).subscribe(shouldFocus => {
      if (shouldFocus) {
        const backButton = this.backButton();
        if (backButton) {
          // Needed so it's no longer "inert" and loaded.
          setTimeout(() => backButton?.nativeElement?.focus());
        }
      }
    });
  }

  protected get hasLargeSize(): Signal<boolean> {
    return this.parent.hasLargeSize;
  }

  protected backClicked(): void {
    this.parent.detailsBackClicked();
  }
}
