
import { Injectable } from '@angular/core';

import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';

import { IAssetManager } from '@asset/framework/managers/interfaces/asset/asset.manager.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';

import { IconAssetCategory } from '@asset/domain/types/category/asset.category.type';

// noinspection JSUnusedLocalSymbols
@Injectable({ providedIn: 'root' })
export class VectorIconManager implements IAssetManager
{

  // Public Instance Properties

  public get catalogue(): ICatalogue
  {
    return this._catalogue;
  }

  // Private Instance Properties

  private get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  // Private Instance Fields

  private readonly _catalogue: ICatalogue;

  private readonly _httpClient: HttpClient;

  // Public Constructor

  public constructor()
  {
    this._httpClient = inject(HttpClient);
    this._catalogue = {};
  }

  public catalogue$(): Observable<boolean>
  {
    return of(false);
  }

  public lookup(key: string, category: AssetCategory = IconAssetCategory): IAsset | null
  {
    return (category === IconAssetCategory) ? this.catalogue[key] || null : null;
  }

}

