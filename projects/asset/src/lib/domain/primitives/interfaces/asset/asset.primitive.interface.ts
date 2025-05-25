

import { ISize } from '@composition/domain/primitives/interfaces/size/size.primitive.interface';

import { AssetCategory } from '@asset/domain/types/category/asset.category.type';
import { AssetFormat } from '@asset/domain/types/format/asset.format.type';
import { AssetSubCategory } from '@asset/domain/types/subcategory/asset.subcategory.type';


export interface IAsset
{

  // <summary>
  // Get the Unique String Key of the Asset.
  // <summary>
  readonly key: string;

  // <summary>
  // Get the Category of the Asset.
  // <summary>
  readonly category: AssetCategory;

  // <summary>
  // Get the SubCategory of the Asset.
  // <summary>
  readonly subcategory: AssetSubCategory;

  // <summary>
  // Get the MIME Format of the Asset.
  // <summary>
  readonly format: AssetFormat;

  // <summary>
  // Get the URI of the Host of the Asset.
  // <summary>
  readonly host: string;

  // <summary>
  // Get the Path of the Asset relative to the Host URI.
  // <summary>
  readonly path: string;

  // <summary>
  // Get the Size of the Asset in pixels.
  // <summary>
  readonly size: ISize;

  // <summary>
  // Get the Title of the Asset.
  // <summary>
  readonly title: string;

  // <summary>
  // Get the Artist Name of the Asset.
  // <summary>
  readonly artist: string;

  // <summary>
  // Get the optional Original Medium of the Asset.
  // <summary>
  readonly medium?: string | null;

  // <summary>
  // Get the optional Original Dimensions of the Asset.
  // <summary>
  readonly dimensions?: string | null;

  // <summary>
  // Get the optional Description of the Asset.
  // <summary>
  readonly description?: string | null;

  // <summary>
  // Get the optional Definition of the Asset, where a Definition
  // is included in cases, such as Vector Icons, where the Asset itself
  // can be fully defined by a string representation, i.e. by an
  // SVG Element definition.
  // <summary>
  readonly definition?: string | null;

}
