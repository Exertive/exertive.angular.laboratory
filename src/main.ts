// Import Angular Dependencies

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppModule } from '@app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule,
    {
      ngZoneEventCoalescing: true,
      providers:
        [
          provideAnimations()
        ]
    })
  .catch((error: any): void =>
  {
    console.error(error)
  });
