
import { Renderer2 } from '@angular/core';

import { Observable } from 'rxjs';

import { ICssStyle } from '@app/domain/primitives/interfaces/style/css.style.primitive.interface';

export interface ICompositor
{

  // Public Interface Properties

  readonly style: ICssStyle;

  readonly renderer: Renderer2;

  // Public  Interface Methods

  compose$(element: Element): Observable<Element>;

  place$(container: HTMLElement, content: HTMLElement): Observable<Element>;

}
