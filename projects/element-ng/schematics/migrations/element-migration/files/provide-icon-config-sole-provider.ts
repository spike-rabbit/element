import { ApplicationConfig } from '@angular/core';
import { provideIconConfig } from '@spike-rabbit/element-ng/icon';

export const appConfig: ApplicationConfig = {
  providers: [provideIconConfig({ disableSvgIcons: true })]
};
