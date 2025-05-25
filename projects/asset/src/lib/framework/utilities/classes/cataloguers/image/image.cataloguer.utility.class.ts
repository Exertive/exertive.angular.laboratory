/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

import { Asset } from '@asset/domain/primitives/classes/asset/asset.primitive.class';

import { IAssetCataloguer } from '@asset/framework/utilities/interfaces/cataloguer/asset.cataloguer.utility.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

import { Supervisor } from '@supervision/framework/utilities/classes/supervisor/supervisor.utility.class';

// The Class Definition

export class ImageCataloguer implements IAssetCataloguer
{

  // Public Instance Properties

  public get uri(): string
  {
    return this._uri;
  }

  public get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  // Private Instance Fields

  private readonly _uri: string;

  private readonly _httpClient: HttpClient;

  // Public Instance Constructor

  public constructor(uri: string, httpClient: HttpClient)
  {
    this._uri = uri;
    this._httpClient = httpClient;
  }

  // Public Instance Methods

  public catalogue$(): Observable<ICatalogue>
  {
    const uri: string = this._uri.concat('.json');
    return this.httpClient.get(uri)
      .pipe(mergeMap((data: any): Observable<ICatalogue> =>
      {
        const catalogue: ICatalogue = {};
        if (!(data == null || data['images'] == null))
        {
          const images: any = data['images'];
          const keys: string[] = Object.keys(images);
          if (keys.length > 0)
          {
            for (const key of keys)
            {
              if (Object.prototype.hasOwnProperty.call(images, key))
              {
                switch (key)
                {
                  case 'bitmaps':
                  case 'vectors':
                  {
                    if (Array.isArray(images[key]))
                    {
                      const array: any[] = images[key];
                      for (const item of array)
                      {
                        catalogue[item.key] = new Asset(item);
                      }
                    }
                    break;
                  }
                  default:
                  {
                    throw new Error('Image Catalogue : Unexpected \'' + key + '\' token encountered.');
                  }
                }
              }
            }
          }
          else
          {
            Supervisor.notify('Image Catalogue : No image entries found.')
          }
        }
        return of(catalogue);
      }));
  }

}
