import { NgModule } from "@angular/core";
import { SiAccordionComponent, SiCollapsiblePanelComponent } from '@spike-rabbit/element-ng/accordion';
import { ModuleBasedAccordionInlineTemplateComponent } from './module-based.accordion-inline-template';
import { ModuleBasedAccordionInlineTemplateComponent as ModuleBasedAccordionInlineTemplateComponent2 } from "./expected.module-based.accordion-inline-template";

@NgModule({
  imports:[SiAccordionComponent, SiCollapsiblePanelComponent],
  declarations:[ModuleBasedAccordionInlineTemplateComponent,ModuleBasedAccordionInlineTemplateComponent2],
})
export class ModuleBasedAccordionInlineTemplate {}
