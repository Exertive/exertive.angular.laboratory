import { InjectionToken } from '@angular/core';

export const LogInjectionToken: InjectionToken<boolean> =
  new InjectionToken(
    'LogInjectionToken',
    {
      providedIn: 'root',
      factory: (): boolean => true
    });
