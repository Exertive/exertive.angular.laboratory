
// Import Angular Dependencies

import { Injectable } from '@angular/core';

import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Import Reactive Dependencies

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs';
import { of } from 'rxjs';

// Import Class Dependencies

import { ImageCataloguer } from '@asset/framework/utilities/classes/cataloguers/image/image.cataloguer.utility.class';

// Import Interface Dependencies

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';
import { IAssetManager } from '@asset/framework/managers/interfaces/asset/asset.manager.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';
import { IAssetCataloguer } from '@asset/framework/utilities/interfaces/cataloguer/asset.cataloguer.utility.interface';

// Import Type Dependencies

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';
import { ImageAssetCategory } from '@asset/domain/types/category/asset.category.type';


// noinspection JSUnusedLocalSymbols

@Injectable({ providedIn: 'root' })
export class ImageManager implements IAssetManager
{

  // Public Instance Properties

  public get catalogue(): ICatalogue
  {
    return this._catalogue;
  }

  // Private Instance Properties

  private get uri(): string
  {
    return ImageManager._Uri;
  }

  private get cataloguer(): IAssetCataloguer
  {
    return this._cataloguer;
  }

  private get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  // Private Static Fields

  private static readonly _Uri: string = 'assets/images';

  // Private Instance Fields

  private readonly _cataloguer: IAssetCataloguer;

  private readonly _catalogue: ICatalogue;

  private readonly _httpClient: HttpClient;

  // Public Instance Constructor

  public constructor()
  {
    this._httpClient = inject(HttpClient);
    this._cataloguer = new ImageCataloguer(this.uri, this.httpClient);
    this._catalogue = {};
  }

  // Public Instance Methods

  public catalogue$(): Observable<boolean>
  {
    return this.cataloguer.catalogue$()
      .pipe(mergeMap((catalogue: ICatalogue): Observable<boolean> =>
      {
        Object.assign(this.catalogue, catalogue);
        return of(true);
      }));
  }

  public lookup(key: string, category: AssetCategory = ImageAssetCategory): IAsset | null
  {
    return (category === ImageAssetCategory) ? this.catalogue[key] || null : null;
  }

}

