
// Import Angular Dependencies

import { ChangeDetectionStrategy, Component, output, OutputEmitterRef } from '@angular/core';

import { NgClass } from '@angular/common';

// Import Interface Dependencies
import { ICssClass } from '@composition/domain/primitives/interfaces/class/css.class.primitive.interface';
import { MenuState } from '@menu/domain/states/menu/menu.state';

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

  public menuOpened: OutputEmitterRef<boolean> = output<boolean>();

  public menuClosed: OutputEmitterRef<boolean> = output<boolean>();

  // Public Instance Properties

  public get cssClass(): ICssClass
  {
    return this._cssClass!;
  }

  public get state(): MenuState
  {
    return this._state;
  }

  public get pending(): boolean
  {
    return this.getState(MenuState.Pending);
  }

  public get open(): boolean
  {
    return this.getState(MenuState.Open);
  }

  public get closed(): boolean
  {
    return this.getState(MenuState.Closed);
  }

  // Private Instance Fields

  private _state: MenuState;

  private readonly _cssClass: ICssClass | undefined;

  // Constructor

  public constructor()
  {
    this._cssClass = { icon: 'closed' };
    this._state = MenuState.Closed;

  }

  // Public Instance Methods

  public onClick(event: MouseEvent): void
  {
    if (!(this.open))
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
    this.cssClass['icon'] = 'closed';
    this.menuClosed.emit(true);
    this.setState(MenuState.Closed);
  }

  public openMenu(): void
  {
    this.cssClass['icon'] = 'open';
    this.menuOpened.emit(true);
    this.setState(MenuState.Open);
  }

  // Private Instance Fields

  private getState(state: MenuState): boolean
  {
    return state === MenuState.Pending ? this._state === MenuState.Pending : (this._state & state) === state;
  }

  private setState(state: MenuState): MenuState
  {
    this._state = state;
    return state;
  }



}
