import {Observable} from 'rxjs';

import {PlacementStrategy} from '@imaging/domain/strategies/placement/placement.strategy';

export interface IPlacement
{

  place$(container: HTMLElement, content: HTMLElement | SVGElement, strategy: PlacementStrategy): Observable<HTMLElement>;

}
