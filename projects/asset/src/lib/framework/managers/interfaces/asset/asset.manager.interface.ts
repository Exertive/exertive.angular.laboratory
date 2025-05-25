
import { Observable } from 'rxjs';

import { IAsset } from '@asset/domain/primitives/interfaces/asset/asset.primitive.interface';
import { ICatalogue } from '@asset/domain/collections/interfaces/catalogue/catalogue.collection.interface';

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';
import { AssetFormat } from '@asset/domain/types/format/asset.format.type';

// <summary>
// Defines the contract for an Asset Manager as implemented in the Exertive Asset Library,
// where an Asset Manager is responsible for managing a Catalogue of Assets.
// </summary>

export interface IAssetManager
{

  // Public Interface Properties

  readonly catalogue: ICatalogue;

  // Public Interface Methods

  // <summary>
  // Catalogue, asynchronously, any Assets for which a Catalogie file is present in the Applications's
  // assets folder.
  // <summary>
  // <returns>
  // An Observable representing the asynchronous task, yielding the Catalogue compiled.
  // <returns>
  catalogue$(): Observable<boolean>;

  // <summary>
  // Look up, synchronously, an Asset of the specified Category in the Asset Catalogue.
  // <summary>
  // <returns>
  // The matching Asset if one is found, or null if a matching Asset is not found.
  // <returns>
  lookup(key: string, category: AssetCategory): IAsset | null;

}
