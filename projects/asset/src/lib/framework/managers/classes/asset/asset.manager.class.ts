
import { Injectable } from '@angular/core';

import { inject } from '@angular/core';

import { Observable } from 'rxjs';

import { IconManager } from '@asset/framework/managers/classes/icons/icon.manager.class';
import { ImageManager } from '@asset/framework/managers/classes/images/image.manager.class';

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';
import { IAssetManager } from '@asset/framework/managers/interfaces/asset/asset.manager.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

import { UriSerializer } from '@asset/framework/utilities/classes/serializers/uri/uri.serializer.class';

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';

import { IconAssetCategory } from '@asset/domain/types/category/asset.category.type';
import { ImageAssetCategory } from '@asset/domain/types/category/asset.category.type';


// noinspection JSUnusedLocalSymbols
@Injectable({ providedIn: 'root', deps: [ UriSerializer ] })
export class AssetManager implements IAssetManager
{

  // Public Instance Properties

  public get catalogue(): ICatalogue
  {
    return this._catalogue;
  }

  // Private Instance Properties

  private get iconManager(): IconManager
  {
    return this._iconManager;
  }

  private get imageManager(): ImageManager
  {
    return this._imageManager;
  }

  private get uriSerializer(): UriSerializer
  {
    return this._uriSerializer;
  }

  // Private Instance Fields

  private readonly _catalogue: ICatalogue;

  private readonly _uriSerializer: UriSerializer;

  private readonly _iconManager: IconManager;

  private readonly _imageManager: ImageManager;

  // Public Constructor

  public constructor()
  {
    this._iconManager = inject(IconManager);
    this._imageManager = inject(ImageManager);
    this._uriSerializer = inject(UriSerializer);

    this._catalogue = {};
  }

  // Public Instance Methods

  public catalogue$(): Observable<boolean>
  {
    return this.imageManager.catalogue$();
  }

  public lookup(key: string, category: AssetCategory): IAsset | null
  {
    switch (category)
    {
      case IconAssetCategory:
      {
        return this.iconManager.lookup(key, category);
      }
      case ImageAssetCategory:
      {
        return null;
      }
    }
    return null;
  }

}
