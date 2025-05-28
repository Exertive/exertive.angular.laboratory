
import { HttpClient } from '@angular/common/http';

import { Observable}  from 'rxjs';

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';

export interface IAssetPreloader<TAsset extends IAsset>
{

  readonly httpClient: HttpClient;

  preload$(): Observable<TAsset | null>;

}
