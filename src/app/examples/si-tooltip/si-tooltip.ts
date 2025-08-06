/**
 * Copyright (c) Siemens 2016 - 2025
 * SPDX-License-Identifier: MIT
 */
import { Component } from '@angular/core';
import { SiIconNextComponent } from '@spike-rabbit/element-ng/icon';
import { SiTooltipDirective } from '@spike-rabbit/element-ng/tooltip';

@Component({
  selector: 'app-sample',
  imports: [SiIconNextComponent, SiTooltipDirective],
  templateUrl: './si-tooltip.html'
})
export class SampleComponent {
  html = `<span>I am a <strong>bold text</strong> tooltip.</span>`;
}
