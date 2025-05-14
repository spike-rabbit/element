/**
 * Copyright Siemens 2016 - 2025.
 * SPDX-License-Identifier: MIT
 */
import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

import {
  SI_LIVE_PREVIEW_CONFIG,
  SI_LIVE_PREVIEW_INTERNALS
} from '../../interfaces/live-preview-config';

interface TreeItem {
  label: string;
  link?: string;
  level: number;
}

@Component({
  selector: 'si-example-overview',
  // eslint-disable-next-line  @angular-eslint/prefer-standalone
  standalone: false,
  templateUrl: './si-example-overview.component.html',
  styleUrl: './si-example-overview.component.scss'
})
export class SiExampleOverviewComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);
  private config = inject(SI_LIVE_PREVIEW_CONFIG);
  private internalConfig = inject(SI_LIVE_PREVIEW_INTERNALS);
  private componentList: string[] = [];

  protected activeExampleRoute!: Observable<string>;
  protected tree: TreeItem[] = [];
  protected baseUrl = this.config.examplesBaseUrl;
  protected ticketBaseUrl = this.config.ticketBaseUrl;
  protected isCollapsed = localStorage.getItem('si-live-preview-examples-collapsed') === 'true';
  protected showContent = !this.isCollapsed;

  protected searchControl = new UntypedFormControl();

  ngOnInit(): void {
    this.title.setTitle(this.internalConfig.titleBase);

    this.componentList = this.config.componentLoader.list
      .sort()
      .map(component => component.replace(this.baseUrl, ''));
    this.makeTree();

    this.activeExampleRoute = this.route.url.pipe(
      filter(segments => !!segments.length),
      map(segments => segments.join('/'))
    );

    // Handle the filter query parameter
    this.route.queryParams.subscribe(search => {
      this.makeTree(search.q);
      this.searchControl.setValue(search.q);
    });

    this.searchControl.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((search: string) => {
        // Do navigation in place to set query param
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { q: search },
          queryParamsHandling: 'merge'
        });
      });
  }

  private makeTree(filterValue?: string): void {
    this.tree = [];

    let prevParents: string[] = [];
    for (const item of this.componentList) {
      if (filterValue && !item.toLowerCase().includes(filterValue)) {
        continue;
      }

      const parts = item.split('/');
      const label = parts.pop()!;

      for (let i = 0; i < parts.length; i++) {
        if (prevParents.length < i || parts[i] !== prevParents[i]) {
          this.tree.push({ label: parts[i], level: i });
        }
      }
      prevParents = parts;
      this.tree.push({ label, link: item, level: parts.length });
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    localStorage.setItem('si-live-preview-examples-collapsed', this.isCollapsed.toString());

    if (this.isCollapsed) {
      this.showContent = false;
      setTimeout(() => window.dispatchEvent(new Event('resize')), 500);
    } else {
      setTimeout(() => {
        this.showContent = true;
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }

  resetSearchBar(): void {
    this.searchControl.reset();
  }
}
