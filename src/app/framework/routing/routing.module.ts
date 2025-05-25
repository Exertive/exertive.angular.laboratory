
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { LandingPageComponent } from '@app/framework/components/pages/landing/landing.page.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full',
    },
    {
      path: 'landing',
      component: LandingPageComponent
    },
  ];


@NgModule(
  {
    imports:
      [
        RouterModule.forRoot(routes)
      ],
    exports:
      [
        RouterModule
      ]
  })
export class RoutingModule
{
}
