
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { ExperimentPageComponent } from '@app/framework/components/pages/experiments/experiment.page.component';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'experiments',
      pathMatch: 'full',
    },
    {
      path: 'experiments',
      component: ExperimentPageComponent
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
