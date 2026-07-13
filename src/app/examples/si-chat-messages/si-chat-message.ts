/**
 * Copyright (c) Siemens 2016 - 2026
 * SPDX-License-Identifier: MIT
 */
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  elementBookmark,
  elementDelete,
  elementEdit,
  elementExport,
  elementOptionsVertical,
  elementUser
} from '@siemens/element-icons';
import { SiAvatarComponent } from '@spike-rabbit/element-ng/avatar';
import {
  SiChatMessageComponent,
  SiAttachmentListComponent,
  Attachment,
  SiChatMessageActionDirective,
  MessageAction
} from '@spike-rabbit/element-ng/chat-messages';
import { addIcons, SiIconComponent } from '@spike-rabbit/element-ng/icon';
import { SiMarkdownRendererComponent } from '@spike-rabbit/element-ng/markdown-renderer';
import { MenuItemAction, SiMenuFactoryComponent } from '@spike-rabbit/element-ng/menu';
import { SiTranslatePipe } from '@spike-rabbit/element-translate-ng/translate';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

@Component({
  selector: 'app-sample',
  imports: [
    CdkMenuTrigger,
    SiChatMessageComponent,
    SiMarkdownRendererComponent,
    SiIconComponent,
    SiAvatarComponent,
    SiAttachmentListComponent,
    SiChatMessageActionDirective,
    SiMenuFactoryComponent,
    SiTranslatePipe
  ],
  templateUrl: './si-chat-message.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);

  protected readonly icons = addIcons({
    elementUser,
    elementOptionsVertical,
    elementExport,
    elementEdit,
    elementBookmark,
    elementDelete
  });

  actions: MessageAction[] = [
    {
      label: 'Copy',
      icon: this.icons.elementExport,
      action: (messageId: string) => this.logEvent(`Copy message ${messageId}`)
    },
    {
      label: 'Edit',
      icon: this.icons.elementEdit,
      action: (messageId: string) => this.logEvent(`Edit message ${messageId}`)
    }
  ];

  secondaryActions: MenuItemAction[] = [
    {
      type: 'action',
      label: 'Bookmark',
      icon: this.icons.elementBookmark,
      action: (messageId: string) => this.logEvent(`Bookmark message ${messageId}`)
    },
    {
      type: 'action',
      label: 'Delete',
      icon: this.icons.elementDelete,
      action: (messageId: string) => this.logEvent(`Delete message ${messageId}`)
    }
  ];

  attachments: Attachment[] = [
    {
      name: 'error-log.txt'
    },
    {
      name: 'screenshot.png'
    }
  ];

  readonly secondaryActionsLabel = 'More actions';
}
