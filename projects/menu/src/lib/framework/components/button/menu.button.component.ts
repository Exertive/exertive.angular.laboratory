
// Import Angular Dependencies

import { ChangeDetectionStrategy } from '@angular/core';
import { OutputEmitterRef } from '@angular/core';

import { Component } from '@angular/core';
import { output } from '@angular/core';

import { NgClass } from '@angular/common';

// Import Interface Dependencies

import { ICssClass } from '@composition/domain/primitives/interfaces/class/css.class.primitive.interface';

// The Component Definition

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component(
  {
    selector:         'menu-button',
    templateUrl:      'menu.button.component.html',
    styleUrl:         'menu.button.component.scss',
    changeDetection:  ChangeDetectionStrategy.OnPush,
    imports:          [ NgClass ],
    standalone:       true
  })
export class MenuButtonComponent
{

  // Public Output Signals

  public opened: OutputEmitterRef<boolean> = output<boolean>();

  public closed: OutputEmitterRef<boolean> = output<boolean>();

  // Public Instance Properties

  public get cssClass(): ICssClass
  {
    return this._cssClass!;
  }

  // Public Instance Properties

  private get open(): boolean
  {
    return this._open;
  }
  private set open(open: boolean)
  {
    this._open = open;
  }

  // Private Instance Fields

  private _open: boolean;

  private readonly _cssClass: ICssClass | undefined;

  // Constructor

  public constructor()
  {
    this._cssClass = { button: '' };
    this._open = false;
  }

  // Public Instance Methods

  public onClick(event: MouseEvent): void
  {
    if (!(this._open))
    {
      this.openMenu();
    }
    else
    {
      this.closeMenu();
    }
    event.stopPropagation();
  }

  public closeMenu(): void
  {
    this.cssClass['button'] = '';
    this.closed.emit(true);
    this.open = false;
  }

  public openMenu(): void
  {
    this.cssClass['button'] = 'open';
    this.opened.emit(true);
    this.open = true;
  }

}
