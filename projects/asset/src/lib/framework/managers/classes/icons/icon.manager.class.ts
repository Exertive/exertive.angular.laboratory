
// Import Angular Dependencies

import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// Import Reactive Dependencies

import { Observable } from 'rxjs';
import { of } from 'rxjs';

// Import Class Dependencies

import { VectorIconManager } from '@asset/framework/managers/classes/icons/vector/vector.icon.manager.class';

// Import Interface Dependencies

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';
import { IAssetManager } from '@asset/framework/managers/interfaces/asset/asset.manager.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

// Import Type Dependencies

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';

import { IconAssetCategory } from '@asset/domain/types/category/asset.category.type';

// noinspection JSUnusedLocalSymbols

@Injectable({ providedIn: 'root' })
export class IconManager implements IAssetManager
{

  // Public Instance Properties

  public get catalogue(): ICatalogue
  {
    return this._catalogue;
  }

  // Private Instance Properties

  private get vectorIconManager(): VectorIconManager
  {
    return this._vectorIconManager;
  }

  private get uri(): string
  {
    return IconManager._Uri;
  }

  private get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  // Private Static Fields

  private static readonly _Uri: string = 'assets/icons';

  // Private Instance Fields

  private readonly _vectorIconManager: VectorIconManager;

  private readonly _catalogue: ICatalogue;

  private readonly _httpClient: HttpClient;

  // Public Constructor

  public constructor()
  {
    this._vectorIconManager = inject(VectorIconManager);
    this._httpClient = inject(HttpClient);
    this._catalogue = {};
  }

  public catalogue$(): Observable<boolean>
  {
    return of(false);
  }

  public lookup(key: string, category: AssetCategory = IconAssetCategory): IAsset | null
  {
    if (category === IconAssetCategory)
    {
      return this.vectorIconManager.lookup(key);
    }
    return null;
  }

}

