// Import Angular Dependencies

import { NgModule } from '@angular/core';

import { inject } from '@angular/core';
import { provideAppInitializer } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { CommonModule as AngularCommonModule } from '@angular/common';

import { BrowserModule as AngularBrowserModule } from '@angular/platform-browser';

import { NgOptimizedImage as AngularOptimizedImage } from '@angular/common';

// Import Angular Material Dependencies

import { MatIconModule as MaterialIconModule } from '@angular/material/icon';

// Import Reactive Dependencies

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

// Import ImageKit Module

import { ImageKitConfiguration, ImagekitioAngularModule } from 'imagekitio-angular';

// Import Routing Module

import { RoutingModule } from '@app/framework/routing/routing.module';

// Import Component Dependencies

import { RootComponent } from '@app/framework/components/root/root.component';
import { LandingPageComponent } from '@app/framework/components/pages/landing/landing.page.component';

import { AngularPanelComponent } from '@app/framework/components/panels/angular/angular.panel.component';
import { UserAgentPanelComponent } from '@app/framework/components/panels/useragent/user.agent.panel.component';

import { BitmapImageComponent } from '@image/framework/components/images/bitmap/bitmap.image.component';

// Import Utility Dependencies

import { AssetManager } from '@asset/framework/managers/classes/asset/asset.manager.class';

//

const imageKitConfiguration: ImageKitConfiguration =
  {
    urlEndpoint: 'https://ik.imagekit.io/exertive/',
    publicKey: ''
  };

// The Module Definition

@NgModule(
  {
    declarations:
      [
        RootComponent,
        LandingPageComponent
      ],
    imports:
      [
        // Import Angular Modules
        AngularBrowserModule,
        AngularCommonModule,
        AngularOptimizedImage,
        // Import Angular Material Modules
        MaterialIconModule,
        // Import ImageKey Module
        ImagekitioAngularModule.forRoot(imageKitConfiguration),
        // Import Routing Module
        RoutingModule,
        // Import Standalone Components
        AngularPanelComponent,
        UserAgentPanelComponent,
        BitmapImageComponent,
      ],
    providers:
      [
        provideAnimationsAsync(),
        provideHttpClient(),

        provideAppInitializer(() =>
        {
          const assetManager: AssetManager = inject(AssetManager);
          return assetManager.catalogue$()
            .pipe(mergeMap((catalogued: boolean): Observable<boolean> =>
            {
              return of(catalogued);
            }));
        })
      ],
    bootstrap:
      [
        RootComponent
      ]
  })
export class AppModule
{
}
