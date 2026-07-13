import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SiDateInputDirective, SiDatepickerModule } from '@spike-rabbit/element-ng/datepicker';
import { SiFormItemComponent } from '@spike-rabbit/element-ng/form';

@Component({
  selector: 'app-sample',
  template:`<si-form-item label="Datepicker">
      <input
        type="text"
        class="form-control"
        siDateInput
        [(ngModel)]="date"  />
    </si-form-item>`,
  imports: [FormsModule, SiDatepickerModule, SiDateInputDirective, SiFormItemComponent],
  standalone: true
})
export class SampleComponent {
  date = new Date('2022-03-12');
}
