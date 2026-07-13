import { Component } from '@angular/core';
import { SiIconLegacyComponent } from '@spike-rabbit/element-ng/icon';

@Component({
  selector: 'si-migration',
  imports: [SiIconLegacyComponent],
  templateUrl: './icon-template.html'
})
export class TemplateComponent {
  readonly stack = 'stacked';
}
