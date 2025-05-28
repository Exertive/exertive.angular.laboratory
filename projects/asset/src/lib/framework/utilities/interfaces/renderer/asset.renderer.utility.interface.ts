
import { Renderer2 } from '@angular/core';

import { Observable}  from 'rxjs';

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';

export interface IAssetRenderer<TAsset extends IAsset>
{

  readonly renderer: Renderer2;

  render$(asset: TAsset): Observable<TAsset>;

}
