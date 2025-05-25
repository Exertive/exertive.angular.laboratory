
import { Asset } from '@asset/domain/primitives/classes/asset/asset.primitive.class';

import { IBitmapImage } from '@image/domain/primitives/interfaces/image/bitmap/bitmap.image.primitive.interface';

import { AssetCategory, ImageAssetCategory } from '@asset/domain/types/category/asset.category.type';

export class BitmapImage extends Asset implements IBitmapImage
{

  // Public Instance Properties

  public override get category(): AssetCategory
  {
    return ImageAssetCategory;
  }

  // Public Instance Constructor

  public constructor(input: string | object | null = null)
  {
    super(input);
  }

}
