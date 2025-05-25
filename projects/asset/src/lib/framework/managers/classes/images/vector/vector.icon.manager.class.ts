
import { Injectable } from '@angular/core';

import { inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { VectorIcon } from '@imaging/domain/primitives/classes/icons/vector/vector.icon.asset.primitive.class';

import { IAsset } from '@imaging/domain/primitives/interfaces/asset/asset.primitive.interface';
import { IAssetManager } from '@imaging/framework/managers/interfaces/asset/asset.manager.interface';
import { IVectorIcon } from '@imaging/domain/primitives/interfaces/icons/vector/vector.icon.asset.primitive.interface';

import { Cache } from '@imaging/domain/types/cache/asset.cache.type';

import { AssetCategory } from '@imaging/domain/types/category/asset.category.type';
import { AssetFormat } from '@imaging/domain/types/format/asset.format.type';

import { IconAssetCategory } from '@imaging/domain/types/category/asset.category.type';
import { SvgIconFormat } from '@imaging/domain/types/format/asset.format.type';

// noinspection JSUnusedLocalSymbols
@Injectable({ providedIn: 'root' })
export class VectorIconManager implements IAssetManager<IVectorIcon>
{
  // Public Instance Properties

  public get cache(): Cache<IVectorIcon>
  {
    return this._cache;
  }

  // Private Instance Properties

  private get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  // Private Instance Fields

  private readonly _cache: Cache<IVectorIcon>;

  private readonly _httpClient: HttpClient;

  // Public Constructor

  public constructor()
  {
    this._httpClient = inject(HttpClient);
    this._cache = {};
  }

  public produce<TAsset>(key: string, category: AssetCategory, format: AssetFormat, uri: string): TAsset | null
  {
    if (category === IconAssetCategory)
    {
      switch (format)
      {
        case SvgIconFormat:
        {
          return new VectorIcon(key, uri) as TAsset;
        }
      }
    }
    return null;
  }

  public preload$(): Observable<boolean>
  {
    return of(true);
  }

  public retrieve(key: string, category: AssetCategory = IconAssetCategory): IVectorIcon | null
  {
    return (category === IconAssetCategory) ? this.cache[key] || null : null;
  }

  public retrieve$(key: string, category: AssetCategory = IconAssetCategory): Observable<IVectorIcon | null>
  {
    return (category === IconAssetCategory) ? of(this.cache[key] || null) : of(null);
  }

  public store(asset: IAsset, category: AssetCategory = IconAssetCategory): IVectorIcon | null
  {
    if (category === IconAssetCategory && asset instanceof VectorIcon)
    {
      this.cache[asset.key] = asset;
      return asset;
    }
    return null;
  }

  public store$(asset: IAsset, category: AssetCategory = IconAssetCategory): Observable<IVectorIcon | null>
  {
    if (category === IconAssetCategory && asset instanceof VectorIcon)
    {
      this.cache[asset.key] = asset;
      return of(asset);
    }
    return of(null);
  }

}

