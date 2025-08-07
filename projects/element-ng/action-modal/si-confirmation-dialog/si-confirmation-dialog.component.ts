/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SiIconNextComponent } from '@spike-rabbit/element-ng/icon';
import { SiLoadingButtonComponent } from '@spike-rabbit/element-ng/loading-spinner';
import { ModalRef } from '@spike-rabbit/element-ng/modal';
import {
  SiTranslatePipe,
  t,
  TranslatableString
} from '@spike-rabbit/element-translate-ng/translate';
import { take } from 'rxjs';

import { ConfirmationDialogResult } from '../si-action-dialog.types';

@Component({
  selector: 'si-confirmation-dialog',
  imports: [AsyncPipe, SiIconNextComponent, SiTranslatePipe, SiLoadingButtonComponent],
  templateUrl: './si-confirmation-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiConfirmationDialogComponent {
  readonly titleId = input<string>();
  /** @defaultValue '' */
  readonly heading = input<TranslatableString>('');
  /** @defaultValue '' */
  readonly message = input<TranslatableString>('');
  /**
   * @defaultValue
   * ```
   * t(() => $localize`:@@SI_CONFIRMATION_DIALOG.YES:Yes`)
   * ```
   */
  readonly confirmBtnName = input(t(() => $localize`:@@SI_CONFIRMATION_DIALOG.YES:Yes`));
  /**
   * @defaultValue
   * ```
   * t(() => $localize`:@@SI_CONFIRMATION_DIALOG.NO:No`)
   * ```
   */
  readonly declineBtnName = input(t(() => $localize`:@@SI_CONFIRMATION_DIALOG.NO:No`));
  /**
   * @defaultValue
   * ```
   * {}
   * ```
   */
  readonly translationParams = input<{ [key: string]: any }>({});
  /** @defaultValue '' */
  readonly icon = input('');

  protected modalRef = inject(ModalRef<SiConfirmationDialogComponent, ConfirmationDialogResult>);
  protected loading$ = this.modalRef.message.pipe(take(1));
}
