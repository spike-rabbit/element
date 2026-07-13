import { Component } from '@angular/core';
import { SiTreeViewModule } from '@spike-rabbit/element-ng/tree-view'

@Component({
  selector: 'app-sample',
  template:`<si-tree-view ariaLabel="Company locations" disableFilledIcons="false" trackByFunction="trackBy" />`,
  imports: [SiTreeViewModule],
  standalone: true
})
export class SampleComponent {
  trackBy() {}
}
