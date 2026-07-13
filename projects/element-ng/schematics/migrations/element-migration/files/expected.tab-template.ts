import { Component } from '@angular/core';
import { SiTabLegacyComponent, SiTabsetLegacyComponent } from '@spike-rabbit/element-ng/tabs-legacy';

@Component({
  selector: 'si-migration',
  imports: [SiTabLegacyComponent, SiTabsetLegacyComponent],
  templateUrl: './tab-template.html'
})
export class TemplateComponent {
  readonly selectedTabIndex = 0;
}
