import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { addIcons, provideIconConfig } from '@spike-rabbit/element-ng/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideIconConfig({ disableSvgIcons: true }),
    { provide: 'ICONS', useValue: addIcons({ 'icon': 'icon' }) }
  ]
};
