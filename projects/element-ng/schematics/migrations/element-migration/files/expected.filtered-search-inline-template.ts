import { Component } from '@angular/core';
import { SiFilteredSearchModule } from '@spike-rabbit/element-ng/filtered-search'

@Component({
  selector: 'app-sample',
  template:`<si-filtered-search   />`,
   imports: [SiFilteredSearchModule],
  standalone: true
})
export class SampleComponent {}
