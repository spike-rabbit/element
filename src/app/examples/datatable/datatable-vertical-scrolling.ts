/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { Component, OnInit, TemplateRef, viewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule, TableColumn } from '@siemens/ngx-datatable';
import { SiCircleStatusModule } from '@spike-rabbit/element-ng/circle-status';
import { StatusType } from '@spike-rabbit/element-ng/common';
import { SiDatatableModule } from '@spike-rabbit/element-ng/datatable';
import { SiEmptyStateComponent } from '@spike-rabbit/element-ng/empty-state';
import { SiResizeObserverModule } from '@spike-rabbit/element-ng/resize-observer';
import { SiSliderComponent } from '@spike-rabbit/element-ng/slider';

@Component({
  selector: 'app-sample',
  imports: [
    NgxDatatableModule,
    SiResizeObserverModule,
    SiDatatableModule,
    SiEmptyStateComponent,
    SiSliderComponent,
    SiCircleStatusModule
  ],
  templateUrl: './datatable-vertical-scrolling.html',
  styleUrl: './datatable.scss'
})
export class SampleComponent implements OnInit {
  readonly table = viewChild(DatatableComponent);
  readonly statusCellTempl = viewChild.required<TemplateRef<any>>('statusCellTempl');

  rows: any[] = [];
  columns!: TableColumn[];

  statusTypes: StatusType[] = ['success', 'info', 'warning', 'danger'];
  nextStatusType = 0;
  slidingValue = 10;

  constructor() {
    this.setupData(this.slidingValue);
  }

  ngOnInit(): void {
    this.initTableColumns();
  }

  setupData(size?: number): void {
    if (size) {
      const data = [];
      for (let i = 1; i <= size; i++) {
        data.push({
          id: i,
          firstname: 'First ' + i,
          lastname: 'Last ' + i,
          age: 10 + (i % 9),
          status: this.getStatusType(i)
        });
      }
      this.rows = data;
    }
  }

  resizeTable(): void {
    setTimeout(() => this.table()?.recalculate());
  }

  private initTableColumns(): void {
    this.columns = [
      {
        prop: 'status',
        name: 'Status',
        width: 100,
        resizeable: false,
        canAutoResize: false,
        cellTemplate: this.statusCellTempl()
      },
      {
        prop: 'id',
        name: 'ID',
        width: 50,
        resizeable: false,
        headerClass: 'justify-content-end',
        cellClass: 'text-align-right-cell',
        canAutoResize: false
      },
      {
        prop: 'firstname',
        name: 'First Name',
        minWidth: 100,
        resizeable: true,
        canAutoResize: true
      },
      {
        prop: 'lastname',
        name: 'Last Name',
        minWidth: 100,
        resizeable: true,
        canAutoResize: true
      },
      {
        prop: 'age',
        name: 'Age',
        width: 80,
        resizeable: false,
        canAutoResize: false,
        headerClass: 'justify-content-end',
        cellClass: 'text-align-right-cell'
      }
    ];
  }

  private getStatusType(row: number): StatusType | null {
    if (row % 4 !== 0) {
      return null;
    }
    this.nextStatusType = ++this.nextStatusType % this.statusTypes.length;
    return this.statusTypes[this.nextStatusType];
  }
}
