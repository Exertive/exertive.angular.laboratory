
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { concatMap } from 'rxjs';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

import { VectorIcon } from '@imaging/domain/primitives/classes/icons/vector/vector.icon.asset.primitive.class';

import { IAssetLoader } from '@imaging/framework/utilities/interfaces/loader/asset.loader.utility.interface';
import { IAssetPreloader } from '@imaging/framework/utilities/interfaces/preloader/asset.preloader.utility.interface';
import { IVectorIcon } from '@imaging/domain/primitives/interfaces/icons/vector/vector.icon.asset.primitive.interface';

import { VectorIconLoader } from '@imaging/framework/utilities/classes/loaders/icon/vector/vector.icon.loader.utility.class';

import { SvgIconFormat } from '@imaging/domain/types/asset/format/asset.format.type';

export class IconAssetPreloader implements IAssetPreloader<IVectorIcon>
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

  public preload$(): Observable<IVectorIcon | null>
  {
    const uri: string = this._uri.concat('.json');
    return this.httpClient.get(uri)
      .pipe(mergeMap((data: any): Observable<IVectorIcon | null> =>
      {
        if (!(data == null || data['icons'] == null))
        {
          const icons: any = data['icons'];
          const keys: string[] = Object.keys(icons);
          if (keys.length > 0)
          {
            for (let key of keys)
            {
              if (icons.hasOwnProperty(key))
              {
                switch (key)
                {
                  case SvgIconFormat:
                  {
                    if (Array.isArray(icons[key]))
                    {
                      const array: any[] = icons[key];
                      return from(array.map((item: any): { key: string, uri: string } =>
                        {
                          const key: string = item.key;
                    const filename: string = item.filename;
                          const uri: string = this.buildUri(this.uri, 'vector', filename);
                          return { key: key, uri };
                        }))
                        .pipe(concatMap((entry: { key: string, uri: string }): Observable<IVectorIcon> =>
                        {
                          const loader: IAssetLoader<IVectorIcon> = new VectorIconLoader(this.httpClient);
                          const vectorIcon: IVectorIcon = new VectorIcon(entry.key, entry.uri);
                          return vectorIcon.load$(loader) as Observable<IVectorIcon>;
                        }));
                    }
                  }
                }
              }
            }
          }
        }
        return of(null);
      }));
  }

  private buildUri(uri: string, folder: string, filename: string): string
  {
    return [ uri, folder, filename ].join('/');
  }

}
