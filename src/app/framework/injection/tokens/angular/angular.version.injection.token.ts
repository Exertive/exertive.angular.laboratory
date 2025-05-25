
import { InjectionToken } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export const AngularVersionInjectionToken =
  new InjectionToken<BehaviorSubject<string>>(
    'Angular Version Inject Token',
    {
      providedIn: 'root',
      factory: (): BehaviorSubject<string> => new BehaviorSubject<string>('n/a')
    });
