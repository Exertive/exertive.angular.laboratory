
export const ImageAssetFormats: string[] =
  [
    'image/bmp',
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/webp'
  ];

export type ImageAssetFormat = typeof ImageAssetFormats[number];

export const BmpImageFormat: ImageAssetFormat = ImageAssetFormats[0];
export const GifImageFormat: ImageAssetFormat = ImageAssetFormats[1];
export const JpegImageFormat: ImageAssetFormat = ImageAssetFormats[2];
export const PngImageFormat: ImageAssetFormat = ImageAssetFormats[3];
export const SvgImageFormat: ImageAssetFormat = ImageAssetFormats[4];
export const WebpImageFormat: ImageAssetFormat = ImageAssetFormats[5];

export type IconAssetFormat = typeof ImageAssetFormats[number];

export const BmpIconFormat: IconAssetFormat = ImageAssetFormats[0];
export const GifIconFormat: IconAssetFormat = ImageAssetFormats[1];
export const JpegIconFormat: IconAssetFormat = ImageAssetFormats[2];
export const PngIconFormat: IconAssetFormat = ImageAssetFormats[3];
export const SvgIconFormat: IconAssetFormat = ImageAssetFormats[4];
export const WebpIconFormat: IconAssetFormat = ImageAssetFormats[5];

export type AssetFormat = ImageAssetFormat;

export const ImageFileExtensions: Record<string, string[]> =
  {
    'image/bmp':      [ 'bmp' ],
    'image/gif':      [ 'gif' ],
    'image/jpeg':     [ 'jpeg', 'jpg' ],
    'image/png':      [ 'png' ],
    'image/svg+xml':  [ 'svg' ],
    'image/webp':     [ 'webp' ],
  };
