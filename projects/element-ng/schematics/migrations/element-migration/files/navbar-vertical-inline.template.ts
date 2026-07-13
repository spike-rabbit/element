import { Component } from '@angular/core';
import { SiNavbarVerticalComponent } from '@spike-rabbit/element-ng/navbar-vertical'

@Component({
  selector: 'app-sample',
  template:`<si-navbar-vertical autoCollapseDelay="false" />`,
   imports: [SiNavbarVerticalComponent],
  standalone: true
})
export class SampleComponent {}
