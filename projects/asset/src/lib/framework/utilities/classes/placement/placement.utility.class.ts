
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { PlacementStrategy } from '@imaging/domain/strategies/placement/placement.strategy';
import { IPlacement } from '@imaging/framework/utilities/interfaces/placement/placement.utility.interface';
import { IRectangle } from '@composition/domain/primitives/interfaces/rectangle/rectangle.primitive.interface';
import { Rectangle } from '@composition/domain/primitives/classes/rectangle/rectangle.primitive.class';

// Type Aliases

type ElementAttribute = Attr;

// noinspection DuplicatedCode,JSUnusedLocalSymbols
export class Placement implements IPlacement
{

  // Private Static Fields

  private static readonly _ViewportRecognizer: RegExp = /^(?<x>\d+) *(?<y>\d+) *(?<w>\d+) *(?<h>\d+) *$/;

  // Public Instance Constructor

  public constructor()
  {
  }

  // Public Instance Methods

  public place$(container: HTMLElement, content: HTMLElement | SVGElement, strategy: PlacementStrategy): Observable<HTMLElement>
  {
    if (container instanceof HTMLElement)
    {
      const containerArea: DOMRect = container.getBoundingClientRect();
      const containerWidth: number = containerArea.width;
      const containerHeight: number = containerArea.height;
      if (content instanceof HTMLImageElement)
      {
        const imageElement: HTMLImageElement = content as HTMLImageElement;
        const imageWidth: number = imageElement.naturalWidth;
        const imageHeight: number = imageElement.naturalHeight;
        imageElement.style.width = '100%';
        imageElement.style.height = 'auto';

      }
    }
    return of(container);
  }

  // Private Instance Methods

  private getSvgViewbox(element: SVGElement): IRectangle | null
  {
    const viewboxAttribute: ElementAttribute | null = element.attributes.getNamedItem('viewBox');
    if (!(viewboxAttribute === null))
    {
      const viewboxValue: string = viewboxAttribute.value;
      const viewboxRecognizer: RegExp = Placement._ViewportRecognizer;
      const match: RegExpExecArray | null = viewboxRecognizer.exec(viewboxValue);
      if (!(match === null || match.groups === undefined))
      {
        const groups: { [key: string]: string } = match.groups;
        return new Rectangle(Number(groups['x']), Number(groups['y']), Number(groups['w']), Number(groups['h']));
      }
    }
    return null;
  }

}
