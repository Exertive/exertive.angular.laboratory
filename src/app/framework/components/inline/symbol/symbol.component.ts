
import { ChangeDetectionStrategy, effect, input, InputSignal } from '@angular/core';

import { Component } from '@angular/core';

import { NgStyle } from '@angular/common';

import { ICssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';

@Component(
  {
    selector: 'symbol',
    template: '<span class="symbol" [ngStyle]="cssStyle"><ng-content/></span>',
    styleUrl: 'symbol.component.scss',
    standalone: true,
    imports: [
      NgStyle
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
  })
export class SymbolComponent
{

  public size: InputSignal<string | undefined> = input();

  public cssStyle: ICssStyle = {};

  public constructor()
  {
    effect(() =>
    {
      const size: string | undefined = this.size();
      if (!(size === undefined))
      {
        this.cssStyle['font-size'] = size;
      }
    });

  }

}
