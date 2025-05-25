
export const AssetCategories: string[] =
  [
    'Image',            // 0
    'Icon',             // 1
    'Font',             // 2
    'Audio',            // 3
    'Video',            // 4
    'Document',         // 5
    'Data'              // 6
  ];

export type AssetCategory = typeof AssetCategories[number];

export const ImageAssetCategory: AssetCategory = AssetCategories[0];
export const IconAssetCategory: AssetCategory = AssetCategories[1];
export const FontAssetCategory: AssetCategory = AssetCategories[2];
export const AudioAssetCategory: AssetCategory = AssetCategories[3];
export const VideoAssetCategory: AssetCategory = AssetCategories[4];
export const DocumentAssetCategory: AssetCategory = AssetCategories[5];
export const DataAssetCategory: AssetCategory = AssetCategories[6];
