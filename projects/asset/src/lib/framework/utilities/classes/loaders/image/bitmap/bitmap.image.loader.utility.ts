
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Subscriber } from 'rxjs';
import { fromEvent } from 'rxjs';
import { catchError } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

import { IAssetLoader } from '@imaging/framework/utilities/interfaces/loader/asset.loader.utility.interface';
import { IBitmapImage } from '@imaging/domain/primitives/interfaces/images/bitmap/bitmap.image.asset.primitive.interface';

import { AssetLoaded } from '@imaging/domain/states/asset/state/asset.state';

const DomImage: new(width?: number, height?: number) => HTMLImageElement = Image;

export class BitmapImageLoader implements IAssetLoader<IBitmapImage>
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

  public load$(image: IBitmapImage): Observable<IBitmapImage>
  {
    return this._httpClient.get(image.uri, { responseType: 'blob' })
      .pipe(mergeMap((response: Blob): Observable<IBitmapImage> =>
      {
        let reader: FileReader = new FileReader();
        reader.readAsDataURL(response);

        // noinspection UnnecessaryLocalVariableJS
        let image$: Observable<IBitmapImage> =
          fromEvent(reader, 'load')
          .pipe(mergeMap((event: Event): Observable<IBitmapImage> =>
          {

            let progressEvent: ProgressEvent<FileReader> = event as ProgressEvent<FileReader>;
            let data: string | ArrayBuffer | null = progressEvent.target?.result || null;
            if (!(data === null))
            {

              let dataUri: string = (typeof (data) === 'string')
                ? data as string
                : new TextDecoder().decode(data as ArrayBuffer);

              image.data = dataUri;

              let subscribe: (observer: Subscriber<IBitmapImage>) => void =
                (observer: Subscriber<IBitmapImage>): void =>
                {
                  let imageElement: HTMLImageElement = new DomImage();
                  imageElement.onload = (_: Event): void =>
                  {
                    image.attributes['width']  = imageElement.naturalWidth;
                    image.attributes['height'] = imageElement.naturalHeight;

                    image.element = imageElement;
                    image.transition(AssetLoaded);

                    observer.next(image);
                    observer.complete();
                  }
                  imageElement.onerror = (event: any): void =>
                  {
                    observer.error(event);
                  };
                  imageElement.src = dataUri;
                };

              return new Observable<IBitmapImage>(subscribe);
            }
            return of(image.fail('An error occurred reading the image') as IBitmapImage);
          }));
        return image$;
      }))
      .pipe(catchError((error: any): Observable<IBitmapImage> =>
      {
        return of(image.fail('An error occurred reading the image', error) as IBitmapImage);
      }));
  }

}
