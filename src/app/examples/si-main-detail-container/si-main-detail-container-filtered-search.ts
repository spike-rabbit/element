/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { JsonPipe } from '@angular/common';
import { Component, inject, viewChild } from '@angular/core';
import { DatatableComponent, NgxDatatableModule } from '@siemens/ngx-datatable';
import {
  ContentActionBarMainItem,
  SiContentActionBarComponent
} from '@spike-rabbit/element-ng/content-action-bar';
import {
  SI_DATATABLE_CONFIG,
  SiDatatableInteractionDirective
} from '@spike-rabbit/element-ng/datatable';
import { SiEmptyStateComponent } from '@spike-rabbit/element-ng/empty-state';
import {
  DisplayedCriteriaEventArgs,
  SearchCriteria,
  SiFilteredSearchComponent
} from '@spike-rabbit/element-ng/filtered-search';
import { SiMainDetailContainerComponent } from '@spike-rabbit/element-ng/main-detail-container';
import { BOOTSTRAP_BREAKPOINTS } from '@spike-rabbit/element-ng/resize-observer';
import { LOG_EVENT } from '@spike-rabbit/live-preview';

import { CorporateEmployee } from '../datatable/data.service';

@Component({
  selector: 'app-sample',
  imports: [
    NgxDatatableModule,
    JsonPipe,
    SiContentActionBarComponent,
    SiDatatableInteractionDirective,
    SiEmptyStateComponent,
    SiFilteredSearchComponent,
    SiMainDetailContainerComponent
  ],
  templateUrl: './si-main-detail-container-filtered-search.html',
  host: {
    class: 'si-layout-fixed-height'
  }
})
export class SampleComponent {
  logEvent = inject(LOG_EVENT);
  searchCriteria = {
    criteria: [
      { name: 'role', value: 'Engineer' },
      { name: 'company', value: 'Bar' },
      { name: 'age', operator: '>', value: '12' }
    ],
    value: ''
  };
  largeLayoutBreakpoint = BOOTSTRAP_BREAKPOINTS.mdMinimum; // this is the default
  detailsActive = false; // this is the default
  isLarge = true;
  mainActions: ContentActionBarMainItem[] = [
    {
      type: 'action',
      label: 'Add',
      action: () => this.logEvent('Add triggered'),
      disabled: false
    }
  ];
  filteredRows: CorporateEmployee[] = [];
  allRows: CorporateEmployee[] = [];
  selectedEntity: CorporateEmployee | undefined;
  selectedEntities: CorporateEmployee[] = [];
  tableConfig = SI_DATATABLE_CONFIG;
  private readonly table = viewChild.required(DatatableComponent);

  constructor() {
    for (let i = 1; i <= 250; i++) {
      this.allRows.push({
        id: i,
        name: 'Last ' + i,
        age: 10 + (i % 9),
        company: i % 2 === 0 ? 'Foo' : 'Bar',
        role: i % 3 === 0 ? 'Installer' : 'Engineer'
      });
    }
    this.updateFilter(this.searchCriteria);
  }

  datatableOnSelect(items: CorporateEmployee[]): void {
    this.selectedEntities = [...items];
    this.selectedEntity = this.selectedEntities[0];
    this.detailsActive = true;
    this.logEvent(this.selectedEntities);
  }

  onSplitChange(containerWidth: number | string): void {
    this.logEvent(`Main width is ${containerWidth}%.`);
    this.table().recalculate();
  }

  updateFilter(searchCriteria?: SearchCriteria): void {
    if (searchCriteria) {
      this.filteredRows = this.allRows.filter(row => {
        if (searchCriteria.value === '' && searchCriteria.criteria.length === 0) {
          return true;
        }

        return searchCriteria.criteria.every(criteria => {
          const value = row[criteria.name as keyof CorporateEmployee];
          if (criteria.operator === '>') {
            return Number(value) > Number(criteria.value);
          } else if (criteria.operator === '<') {
            return Number(value) < Number(criteria.value);
          } else if (criteria.operator === '=') {
            return Number(value) === Number(criteria.value);
          } else if (!criteria.value) {
            return true;
          } else {
            return value === criteria.value;
          }
        });
      });
    }
  }

  singleOccurrence(event: DisplayedCriteriaEventArgs): void {
    event.allow(event.criteria.filter(c => !event.searchCriteria.criteria.some(s => s.name === c)));
  }
}
