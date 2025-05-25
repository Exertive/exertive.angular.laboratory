
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

import { SvgImageParser } from '@imaging/framework/utilities/classes/parsers/image/svg/svg.image.parser.utility.class';

import { IAssetLoader } from '@imaging/framework/utilities/interfaces/loader/asset.loader.utility.interface';
import { IAssetParser } from '@imaging/framework/utilities/interfaces/parsers/asset.parser.utility.interface';
import { IVectorIcon } from '@imaging/domain/primitives/interfaces/icons/vector/vector.icon.asset.primitive.interface';

import { AssetLoaded } from '@imaging/domain/states/asset/state/asset.state';


export class VectorIconLoader implements IAssetLoader<IVectorIcon>
{

  public get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  private readonly _httpClient: HttpClient;

  public constructor(httpClient: HttpClient)
  {
    this._httpClient = httpClient;
  }

  public load$(asset: IVectorIcon): Observable<IVectorIcon>
  {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'text/xml')
      .set('Accept', [ 'text/xml', 'images/*' ]);

    const uri: string = asset.uri;

    const parser: IAssetParser<IVectorIcon> = new SvgImageParser();

    return this.httpClient.get(uri, { headers, responseType: 'text' })
      .pipe(mergeMap((data: string): Observable<IVectorIcon> =>
      {
        asset.data = data;
        return parser.parse$(asset, new DOMParser())
          .pipe(mergeMap((asset: IVectorIcon): Observable<IVectorIcon> =>
          {
            if (!asset.errored)
            {
              asset.transition(AssetLoaded);
            }
            return of(asset);
          }));
      }))
      .pipe(catchError((error: any): Observable<IVectorIcon> =>
      {
        return of(asset.fail('An error occurred reading the icon', error) as IVectorIcon);
      }));
  }

}
