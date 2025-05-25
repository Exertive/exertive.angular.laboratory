/* eslint-disable @typescript-eslint/no-unused-vars */
// Import Angular Dependencies

import { ChangeDetectionStrategy, effect } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ElementRef } from '@angular/core';
import { InputSignal } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Signal } from '@angular/core';

import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';

import { computed } from '@angular/core';
import { inject } from '@angular/core';

import { input } from '@angular/core';

import { NgClass, NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';

// Import Reactive Dependencies

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { take } from 'rxjs';

// Import ImageKey Dependencies

import { ImagekitioAngularModule } from 'imagekitio-angular';

// The ImageKit Transformation interface is defined in the ImageKey JavaScript Library.
// For convenience, it is replicated locally.

import { Transformation } from '@image/domain/primitives/interfaces/transformation/transformation.primitive.interface';

// Import Local Interface Dependencies

import { ICssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';
import { IBitmapImage } from '@image/domain/primitives/interfaces/image/bitmap/bitmap.image.primitive.interface';

// Import Local Type Dependencies

import { Placement } from '@image/domain/types/placement/placement.type';
import { PlacementOptions } from '@image/domain/types/placement/placement.type';

import { Supervisor } from '@supervision/framework/utilities/classes/supervisor/supervisor.utility.class';

import { getCssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';
import { ICssClass } from '@composition/domain/primitives/interfaces/class/css.class.primitive.interface';

// The Component Definition

// noinspection RedundantIfStatementJS,JSUnusedGlobalSymbols,DuplicatedCode,JSUnusedLocalSymbols,UnnecessaryLocalVariableJS

@Component(
  {
    selector:         'bitmap-image',
    templateUrl:      'bitmap.image.component.html',
    styleUrl:         'bitmap.image.component.scss',
    changeDetection:  ChangeDetectionStrategy.OnPush,
    imports:          [ ImagekitioAngularModule, NgClass, NgIf, NgStyle ],
    standalone:       true
  })
export class BitmapImageComponent implements OnDestroy
{

  // Public Instance Properties

  // There appears to be a problem with Signals not responding to delayed changes
  // to a Signal's value.

  public image: InputSignal<IBitmapImage> = input.required();

  public placement: InputSignal<Placement> = input(PlacementOptions.Cover);

  public imageSrc: Signal<string> = computed((): string =>
  {
    const endpoint: string = this.image().host;
    const path: string = this.image().path;
    return endpoint.concat(path);
  });

  public imageWidth: Signal<number> = computed((): number => this.image().size.width);

  public imageHeight: Signal<number> = computed((): number => this.image().size.height);

  public get imageTransformations(): Transformation[]
  {
    return this._imageTransformations!;
  }

  public get imageDimensions(): string
  {
    return this._imageDimensions!;
  }

  @ViewChild('ImageContainer', { read: ElementRef, static: true })
  public get containerElementRef(): ElementRef<HTMLElement>
  {
    return this._containerElementRef!;
  }
  public set containerElementRef(elementRef: ElementRef<HTMLElement>)
  {
    this._containerElementRef = elementRef;
  }

  public get cssClass(): ICssClass
  {
    return this._cssClass!;
  }

  public get cssStyle(): ICssStyle
  {
    return this._cssStyle!;
  }

  // <summary>
  // Get the Outer CSS Style settings from within the CSS Style property.
  // The getCssStyle function must be used to avoid complaints by ESLint,
  // which will generate a TS7015 error: Element implicitly has an 'any'
  // type because index expression is not of type 'number' if
  // return this._cssStyle['outer'];
  // is used.
  public get outerCssStyle(): ICssStyle
  {
    return getCssStyle(this._cssStyle!, 'outer');
  }

  public get innerCssStyle(): ICssStyle
  {
    return getCssStyle(this._cssStyle!, 'inner');
  }

  public get imageCssStyle(): ICssStyle
  {
    return getCssStyle(this._cssStyle!, 'image');
  }

  public get informationCssStyle(): ICssStyle
  {
    return getCssStyle(this._cssStyle!, 'information');
  }

  public get composed(): boolean
  {
    return this._composed;
  }

  public get destroyed(): boolean
  {
    return this._destroyed;
  }

  // Private Instance Properties

  private get changeDetector(): ChangeDetectorRef
  {
    return this._changeDetector;
  }

  private get hostElementRef(): ElementRef<HTMLElement>
  {
    return this._hostElementRef;
  }

  private get renderer(): Renderer2
  {
    return this._renderer;
  }

  // Private Instance Fields

  private _imageTransformations: Transformation[] | undefined;

  private _imageDimensions: string | undefined;

  private _containerElementRef: ElementRef<HTMLElement> | undefined;

  private _cssClass: ICssClass | undefined;

  private _cssStyle: ICssStyle | undefined;

  private _composed: boolean;

  private _destroyed: boolean;

  private readonly _changeDetector: ChangeDetectorRef;

  private readonly _hostElementRef: ElementRef<HTMLElement>;

  private readonly _renderer: Renderer2;

  // Public Instance Constructor

  public constructor()
  {
    // Assign injected services, objects, etc. to local instance fields.
    this._changeDetector = inject(ChangeDetectorRef);
    this._hostElementRef = inject(ElementRef);
    this._renderer = inject(Renderer2);

    // Initialize local instance properties.
    this._composed = false;
    this._destroyed = false;

    effect((): void =>
    {
      const contentElementRef: ElementRef<HTMLElement> | undefined = this._containerElementRef;
      if (contentElementRef instanceof ElementRef)
      {
        const contentElement: HTMLElement = contentElementRef.nativeElement;
        this.compose$(contentElement)
          .pipe(take(1))
          .subscribe((composed: boolean): void =>
          {
            this._composed = composed;
          });
      }
    });

  }

  // Public Instance Methods

  // Angular Lifecycle Event Handlers

  public ngOnDestroy(): void
  {
    if (this.destroy())
    {
      this._destroyed = true;
    }
  }

  // Lifecycle Event Actions

  // Placement (or fitting) of the Image within the Content Element essentially
  // involves the projection of the actual image into the HTML Element. Assuming
  // that the Aspect Ratio of the image is to be maintained regardless of the
  // dimensions of the HTML Element, this involves both:
  // 1) Calculation of the minimum pixel size of the Image to acquire;
  // 2) Placement of the scaled image

  public compose$(contentElement: HTMLElement): Observable<boolean>
  {
    if (!this.composed)
    {
      this._cssStyle = { outer: {}, inner: {}, image: {}, information: {} };
      this._cssClass = { button: '' };
      if (contentElement instanceof HTMLElement)
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const cssStyle: any = this._cssStyle;
        const image: IBitmapImage = this.image();
        const placement: Placement = this.placement();

        const pixelRatio: number = window.devicePixelRatio || 1;
        const cssWidth: number = contentElement.clientWidth;
        const cssHeight: number = contentElement.clientHeight;
        const actualWidth: number = cssWidth * pixelRatio;
        const actualHeight: number = cssHeight * pixelRatio;
        const imageWidth: number = image.size.width;
        const imageHeight: number = image.size.height;
        const horizontalScale: number = actualWidth / imageWidth;
        const verticalScale: number = actualHeight / imageHeight;

        let scaledWidth: number = 0;
        let scaledHeight: number = 0;

        if (placement === PlacementOptions.Cover)
        {
          // Scale the Image so that it fills the Content Element completely.
          // If the shape (Aspect Ratio) of the Content Element differs from
          // that of the Image then clipping of a portion of the Image is
          // necessary. By default, clipping is performed to center the Image
          // in the clipped dimension.
          const scaleFactor: number = Math.max(horizontalScale, verticalScale);
          const scaledPixelWidth: number = imageWidth * scaleFactor;
          const scaledPixelHeight: number = imageHeight * scaleFactor;
          const scaledCssWidth: number = scaledPixelWidth / pixelRatio;
          const scaledCssHeight: number = scaledPixelHeight / pixelRatio;

          scaledWidth = scaledPixelWidth;
          scaledHeight = scaledPixelHeight;

          let horizontalOffset: number = 0;
          let verticalOffset: number = 0;
          if (horizontalScale > verticalScale)
          {
            // The Image must be clipped vertically. This is done by offsetting
            // the Image Element by the required amount relative to the Content
            // Element using CSS Margin settings. These are expressed in CSS Pixel
            // Units.
            verticalOffset = -(scaledCssHeight - cssHeight) / 2;
          }
          if (verticalScale > horizontalScale)
          {
            // The Image must be clipped horizontally. This is done by offsetting
            // the Image Element by the required amount relative to the Content
            // Element using CSS Margin settings. These are expressed in CSS Pixel
            // Units.
            horizontalOffset = -(scaledCssWidth - cssWidth) / 2;
          }

          // Scale the Image content to fit
          this._imageTransformations =
            [
              {
                width: scaledPixelWidth,
                height: scaledPixelHeight
              }
            ];

          const precision: number = 2;
          Supervisor.notify('Responsive Image:');
          Supervisor.notify('  Content CSS width =  ' + cssWidth.toFixed(precision) + '.');
          Supervisor.notify('  Content CSS height = ' + cssHeight.toFixed(precision) + '.');
          Supervisor.notify('  Image CSS width =    ' + scaledCssWidth.toFixed(precision) + '.');
          Supervisor.notify('  Image CSS height =   ' + scaledCssHeight.toFixed(precision) + '.');

          cssStyle['inner']['position'] = 'absolute';
          cssStyle['inner']['top'] = verticalOffset + 'px';
          cssStyle['inner']['left'] = horizontalOffset + 'px';
          cssStyle['inner']['bottom'] = verticalOffset + 'px';
          cssStyle['inner']['right'] = horizontalOffset + 'px';

          cssStyle['inner']['width'] = scaledCssWidth + 'px';
          cssStyle['inner']['height'] = scaledCssHeight + 'px';

          cssStyle['image']['position'] = 'absolute';
          cssStyle['image']['width'] = scaledCssWidth + 'px';
          cssStyle['image']['height'] = scaledCssHeight + 'px';
          cssStyle['image']['pointer-events'] = 'none';

          cssStyle['information']['height'] = '0';
          cssStyle['information']['transition'] = 'height 0.5s ease-in';
          cssStyle['information']['overflow-y'] = 'hidden';
        }

        const precision: number = 0;
        const imageDimensions: string =
          [
            'Original image dimensions:',
            imageWidth.toFixed(precision) + '&thinsp;&times;&thinsp;' + imageHeight.toFixed(precision),
            'pixels;',
            'Scaled image dimensions:',
            scaledWidth.toFixed(precision) + '&thinsp;&times;&thinsp;' + scaledHeight.toFixed(precision),
            'pixels;',
            'Cropped image dimensions:',
            (cssWidth * pixelRatio).toFixed(precision) + '&thinsp;&times;&thinsp;' + (cssHeight * pixelRatio).toFixed(precision),
            'pixels.'
          ].join(' ');
        this._imageDimensions = imageDimensions;

        return of(true);
      }
    }
    return of(this.composed);
  }

  public destroy(): boolean
  {
    this.changeDetector.detach();
    return true;
  }

  public onInformationClick(_event: MouseEvent): void
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cssStyle: any = this.cssStyle;
    cssStyle['information']['height'] = 'auto';
    this.cssClass['button'] = 'hidden';
  }

  public onCloseClick(_event: MouseEvent): void
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cssStyle: any = this.cssStyle;
    cssStyle['information']['height'] = '0';
    this.cssClass['button'] = '';
  }

}
