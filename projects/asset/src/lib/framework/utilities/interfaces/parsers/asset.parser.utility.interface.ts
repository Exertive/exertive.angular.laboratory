import { IAsset } from '@imaging/domain/primitives/interfaces/asset/asset.primitive.interface';
import { Observable } from 'rxjs';


export interface IAssetParser<TAsset extends IAsset>
{

  parse$(asset: TAsset, parser?: DOMParser):  Observable<TAsset>;

}
