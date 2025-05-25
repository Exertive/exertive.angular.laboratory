import { IAsset } from '@imaging/domain/primitives/interfaces/asset/asset.primitive.interface';
import { IAssetParser } from '@imaging/framework/utilities/interfaces/parsers/asset.parser.utility.interface';
import { of } from 'rxjs';
import { Observable } from 'rxjs';


export class SvgImageParser<TAsset extends IAsset> implements IAssetParser<TAsset>
{

  public parse$(asset: TAsset, parser?: DOMParser): Observable<TAsset>
  {
    if (parser instanceof DOMParser)
    {
      if (typeof asset.data === 'string')
      {
        try
        {
          const svgDocument: Document = parser.parseFromString(asset.data, asset.format as DOMParserSupportedType);
          asset.element = (svgDocument.documentElement as unknown) as SVGElement;
          return of(asset);
        }
        catch(error: any)
        {
          asset.fail('Parser Error'); // The SVG Image Parser was unable to parse the contents of the asset.
          return of(asset);
        }
      }
      asset.fail('Parser Error'); // Invalid data passed to the SVG Image Parser.
      return of(asset);
    }
    asset.fail('Parser Error'); // A DOM Parser instance was not passed to the SVG Image Parser.
    return of(asset);
  }

}
