import { Component } from '@angular/core';
import { SiDatepickerModule } from '@spike-rabbit/element-ng/datepicker';

@Component({
  selector: 'app-sample',
  template:`<input siDatepicker triggeringInput="" />`,
  imports: [SiDatepickerModule],
  standalone: true
})
export class SampleComponent {}
