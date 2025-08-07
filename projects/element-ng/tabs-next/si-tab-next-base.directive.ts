/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { FocusableOption } from '@angular/cdk/a11y';
import {
  booleanAttribute,
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
  Signal,
  TemplateRef,
  untracked,
  viewChild
} from '@angular/core';
import { addIcons, elementCancel } from '@spike-rabbit/element-ng/icon';
import { TranslatableString } from '@spike-rabbit/element-translate-ng/translate';

import { SI_TABSET_NEXT } from './si-tabs-tokens';

@Directive({
  selector: '[siTabNextBase]',
  host: {
    class: 'nav-link focus-inside px-5 si-title-1',
    role: 'tab',
    '[class.disabled]': 'disabledTab()',
    '[class.icon-only]': '!!icon()',
    '[class.pe-3]': 'closable()',
    '[class.active]': 'active()',
    '[attr.id]': "'tab-' + tabId",
    '[attr.aria-selected]': 'active()',
    '[attr.aria-disabled]': 'disabledTab()',
    '[attr.tabindex]': 'tabset.focusKeyManager.activeItem === this && !disabledTab() ? 0 : -1',
    '[attr.aria-controls]': "'content-' + tabId",
    '(keydown.delete)': 'closeTab($event)'
  }
})
export abstract class SiTabNextBaseDirective implements OnDestroy, FocusableOption {
  abstract readonly active: Signal<boolean | undefined>;
  /** Title of the tab item. */
  readonly heading = input.required<TranslatableString>();
  /**
   * Icon of the tab item.
   * If provided, heading text will be ignored and only icon will be displayed.
   */
  readonly icon = input<string>();
  /**
   * Additional badge content. A value of
   * - `true` will render a red dot
   * - any string without a `badgeColor` will render a red dot with text
   * - any string with a `badgeColor` will render a normal badge
   */
  readonly badgeContent = input<TranslatableString | boolean>();
  /**
   * Background color of the badge.
   * If no color is provided a red dot badge will be rendered.
   */
  readonly badgeColor = input<string>();
  /**
   * Disables the tab.
   *
   * @defaultValue false
   */
  readonly disabledTab = input(false, {
    transform: booleanAttribute,
    // eslint-disable-next-line @angular-eslint/no-input-rename
    alias: 'disabled'
  });
  /**
   * Close the current tab.
   *
   * @defaultValue false
   */
  readonly closable = input(false, {
    transform: booleanAttribute
  });
  /** Event emitter to notify when a tab is closed. */
  readonly closeTriggered = output();

  protected readonly tabButton = inject<ElementRef<HTMLElement>>(ElementRef);
  /** @internal */
  readonly tabContent = viewChild('tabContent', { read: TemplateRef });

  private static tabCounter = 0;
  private indexBeforeClose = -1;

  /** @internal */
  tabId = `${SiTabNextBaseDirective.tabCounter++}`;
  protected readonly icons = addIcons({ elementCancel });
  protected tabset = inject(SI_TABSET_NEXT);
  private readonly index = computed(() => this.tabset.tabPanels().indexOf(this));

  constructor() {
    // Update the focusKeyManager if a tab is added that is active or if the tab is set active by the app.
    // This effect should not run, if active was already applied to the focusKeyManager.
    effect(() => {
      const active = this.active(); // We only want to subscribe to the active signal.
      untracked(() => {
        // !!! focusKeyManger.activeItem has signal reads internally. Do not move this outside of untracked.
        if (active && this.tabset.focusKeyManager.activeItem !== this) {
          this.tabset.focusKeyManager.updateActiveItem(this.index());
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.indexBeforeClose >= 0) {
      this.tabset.removedTabByUser(this.indexBeforeClose, this.active());
    }
  }

  protected closeTab(event: Event): void {
    if (this.closable() && !this.disabledTab()) {
      event.stopPropagation();
      const index = this.index();
      this.closeTriggered.emit();
      this.indexBeforeClose = index;
    }
  }

  /** @internal */
  focus(): void {
    this.tabButton.nativeElement.focus({ preventScroll: true });
    // The element is not fully scrolled into view when focused. So we prevent and scroll it manually.
    this.tabButton.nativeElement.scrollIntoView({
      inline: 'nearest',
      block: 'nearest',
      behavior: 'instant'
    });
  }

  /** @internal */
  get disabled(): boolean {
    return this.disabledTab();
  }

  /**
   * Programmatically selects the current tab.
   */
  selectTab(retainFocus?: boolean): void {
    this.tabset.focusKeyManager.updateActiveItem(this.index());
    if (retainFocus) {
      // We need the timeout to wait for cdkMenu to restore the focus before we move it again.
      setTimeout(() => this.focus());
    }
  }

  /** @internal */
  deSelectTab(): void {
    // Empty be default, can be overridden in derived classes.
  }
}
