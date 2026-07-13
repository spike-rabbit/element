import { Component } from '@angular/core';
import { SiPopoverLegacyDirective } from '@spike-rabbit/element-ng/popover-legacy';

@Component({
  selector: 'si-migration',
  imports: [SiPopoverLegacyDirective],
  templateUrl: './popover-template.html',
})
export class TemplateComponent {}
