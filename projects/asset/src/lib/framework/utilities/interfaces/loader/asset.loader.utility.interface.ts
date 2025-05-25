
import { HttpClient } from '@angular/common/http';

import { Observable}  from 'rxjs';

import { IAsset } from '@imaging/domain/primitives/interfaces/asset/asset.primitive.interface';

export interface IAssetLoader<TAsset extends IAsset>
{

  readonly httpClient: HttpClient;

  load$(asset: TAsset): Observable<TAsset>;

}
