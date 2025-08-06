/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  DestroyRef,
  DoCheck,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
  viewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { addIcons, elementCalendar, SiIconNextComponent } from '@spike-rabbit/element-ng/icon';
import { SiTranslatePipe, t } from '@spike-rabbit/element-translate-ng/translate';

import { SiDatepickerOverlayDirective } from './si-datepicker-overlay.directive';
import { SiDatepickerDirective } from './si-datepicker.directive';

/**
 * Calendar toggle button used in combination with a datepicker directive.
 *
 * @example
 * ```
 * <si-calendar-button class="w-100">
 *   <input
 *     class="form-control"
 *     type="text"
 *     siDatepicker
 *     [siDatepickerConfig]="config"
 *   />
 * </si-calendar-button>
 * ```
 */
@Component({
  selector: 'si-calendar-button',
  imports: [SiIconNextComponent, SiTranslatePipe],
  template: `<ng-content />
    <button
      #calendarButton
      name="open-calendar"
      type="button"
      class="btn btn-circle btn-tertiary btn-xs position-absolute end-0 top-0 me-2 mt-2"
      [attr.aria-label]="ariaLabel() | translate"
      [disabled]="disabled()"
      (click)="show()"
    >
      <si-icon-next [icon]="icons.elementCalendar" />
    </button>`,
  styles: ':host {--si-action-icon-offset: 24px;}',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-inline-block position-relative form-control-wrapper',
    '[class.ng-invalid]': 'showValidationMessages()',
    '[class.ng-touched]': 'showValidationMessages()'
  }
})
export class SiCalendarButtonComponent implements OnInit, AfterContentInit, DoCheck {
  /**
   * Aria label for the calendar toggle button.
   *
   * @defaultValue
   * ```
   * t(() => $localize`:@@SI_DATEPICKER.CALENDAR_TOGGLE_BUTTON:Open calendar`)
   * ```
   */
  readonly ariaLabel = input(
    t(() => $localize`:@@SI_DATEPICKER.CALENDAR_TOGGLE_BUTTON:Open calendar`)
  );

  protected readonly button = viewChild.required<ElementRef<HTMLButtonElement>>('calendarButton');
  /** Datepicker input directive instance used to watch for state changes and required to open the calendar. */
  protected readonly datepicker = contentChild.required(SiDatepickerDirective);
  protected readonly datepickerOverlay = contentChild.required(SiDatepickerOverlayDirective);
  protected readonly ngControl = contentChild(NgControl);
  protected readonly disabled = signal(false);
  protected readonly icons = addIcons({ elementCalendar });
  private readonly destroyerRef = inject(DestroyRef);
  private readonly focusMonitor = inject(FocusMonitor);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  // Add classes here to enable error messages in si-form-item
  protected readonly showValidationMessages = signal(false);

  ngOnInit(): void {
    // Monitor input state changes and update the button accordingly
    this.datepicker().stateChange.subscribe(() => this.updateState());
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntilDestroyed(this.destroyerRef))
      .subscribe(origin => {
        setTimeout(() => {
          if (origin === null && !this.datepickerOverlay().isShown()) {
            this.datepicker().touch();
          }
        });
      });
  }

  ngDoCheck(): void {
    const control = this.ngControl()?.control;
    this.showValidationMessages.set(!!control?.touched && !!control?.invalid);
  }

  ngAfterContentInit(): void {
    this.datepicker().useExternalTrigger(this.button());
    this.updateState();
  }

  protected show(): void {
    this.datepicker().show(true);
  }

  private updateState(): void {
    const datepicker = this.datepicker();
    this.disabled.set(datepicker.disabled() || datepicker.readonly());
  }
}
