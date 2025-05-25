
import { HttpClient } from '@angular/common/http';

import { Observable}  from 'rxjs';

import { IAsset } from '@imaging/domain/primitives/interfaces/asset/asset.primitive.interface';

export interface IAssetCompositor<TAsset extends IAsset>
{

  compose$(asset: TAsset): Observable<TAsset>;

}
