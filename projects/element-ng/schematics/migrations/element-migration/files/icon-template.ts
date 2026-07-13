import { Component } from '@angular/core';
import { SiIconComponent } from '@spike-rabbit/element-ng/icon';

@Component({
  selector: 'si-migration',
  imports: [SiIconComponent],
  templateUrl: './icon-template.html'
})
export class TemplateComponent {
  readonly stack = 'stacked';
}
