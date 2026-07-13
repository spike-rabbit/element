import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { addIcons } from '@spike-rabbit/element-ng/icon';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    { provide: 'ICONS', useValue: addIcons({ 'icon': 'icon' }) }
  ]
};
