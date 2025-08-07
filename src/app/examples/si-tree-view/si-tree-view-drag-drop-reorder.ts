/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  reorderTreeItem,
  SiTreeViewComponent,
  SiTreeViewItemComponent,
  SiTreeViewItemDirective,
  TreeItem
} from '@spike-rabbit/element-ng/tree-view';

import { treeItems } from './tree-items';

@Component({
  selector: 'app-sample',
  imports: [SiTreeViewComponent, SiTreeViewItemComponent, SiTreeViewItemDirective, DragDropModule],
  templateUrl: './si-tree-view-drag-drop-reorder.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'p-5' }
})
// NOTE: This example is to demonstrate CDK drag drop API capabilities with SiTreeViewItemNextComponent
// and it is not yet production ready.
export class SampleComponent {
  treeItems: TreeItem[] = treeItems;

  itemDropped(event: CdkDragDrop<any>): void {
    const reorderedTree = [...reorderTreeItem(this.treeItems, event)];
    this.treeItems = reorderedTree;
  }
}
