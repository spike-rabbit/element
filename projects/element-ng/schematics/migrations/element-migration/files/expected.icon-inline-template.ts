import { Component } from '@angular/core';
import { SiIconLegacyComponent } from '@spike-rabbit/element-ng/icon';

@Component({
  selector: 'si-migration',
  imports: [SiIconLegacyComponent],
  template: `<si-icon-legacy icon="element-help" stackedColor="green" [stackedIcon]="stack" />
    <si-icon-legacy icon="element-help" stackedColor="green" [stackedIcon]="stack"
      ></si-icon-legacy
    >`
})
export class TemplateComponent {
  readonly stack = 'stacked';
}
