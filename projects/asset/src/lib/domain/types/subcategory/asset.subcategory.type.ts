
export const ImageAssetSubCategories: string[] =
  [
    'Photograph',             // 0
    'Drawing',                // 1
    'Painting',               // 2
    'Illustration',           // 3
    'Design',                 // 4
    'Diagram',                // 5
    'Etching'                 // 6
  ];

export type ImageAssetSubCategory = typeof ImageAssetSubCategories[number];

export const PhotographAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[0];
export const DrawingAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[1];
export const PaintingAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[2];
export const IllustrationAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[3];
export const DesignAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[4];
export const DiagramAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[5];
export const EtchingAssetSubCategory: ImageAssetSubCategory = ImageAssetSubCategories[6];

export type AssetSubCategory = ImageAssetSubCategory;
