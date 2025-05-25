
// Import Angular Dependencies

import { ChangeDetectorRef } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { NgIf } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { NgStyle } from '@angular/common';

// Import Class Dependencies

import { CssStyle } from '../../../../../../projects/composition/src/lib/domain/primitives/classes/style/css.style.primitive.class';

// Import Interface Dependencies

import { ICssStyle } from '../../../../../../projects/composition/src/lib/domain/primitives/interfaces/style/css.style.primitive.interface';

// The Component Definition

// noinspection DuplicatedCode, JSUnusedLocalSymbols

@Component(
  {
    selector:         'angular-panel',
    templateUrl:      'angular.panel.component.html',
    styleUrl:         'angular.panel.component.scss',
    standalone:       true,
    imports:          [ NgIf, NgOptimizedImage, NgStyle ],
    changeDetection:  ChangeDetectionStrategy.OnPush
  })
export class AngularPanelComponent implements OnInit, OnDestroy
{

  // Public Instance Properties

  @Input()
  public get version(): string
  {
    return this._version!;
  }
  public set version(version: string)
  {
    this._version = version;
  }

  @Input()
  public get width(): number
  {
    return this._width!;
  }
  public set width(width: number)
  {
    this._width = width;
  }

  @Input()
  public get height(): number
  {
    return this._height!;
  }
  public set height(height: number)
  {
    this._height = height;
  }

  public get builtUsingText(): string
  {
    return AngularPanelComponent._BuiltUsingText;
  }

  public get angularImageSrc(): string
  {
    return AngularPanelComponent._AngularImageSrc;
  }

  public get angularImageWidth(): number
  {
    return AngularPanelComponent._AngularImageWidth;
  }

  public get angularImageHeight(): number
  {
    return AngularPanelComponent._AngularImageHeight;
  }

  public get angularIntrinsicImageWidth(): number
  {
    return AngularPanelComponent._AngularIntrinsicImageWidth;
  }

  public get angularIntrinsicImageHeight(): number
  {
    return AngularPanelComponent._AngularIntrinsicImageHeight;
  }

  public get angularImageText(): string
  {
    return AngularPanelComponent._AngularImageText;
  }

  public get angularText(): string
  {
    return AngularPanelComponent._AngularText;
  }

  public get versionText(): string
  {
    return this._versionText!;
  }

  public get cssStyle(): ICssStyle
  {
    return this._cssStyle!;
  }

  public get panelCssStyle(): CssStyle
  {
    return this.cssStyle['panel'] as CssStyle;
  }

  public get imageCssStyle(): CssStyle
  {
    return this.cssStyle['image'] as CssStyle;
  }

  public get initialized(): boolean
  {
    return this._initialized;
  }

  public get composed(): boolean
  {
    return this._composed;
  }

  // Private Instance Properties

  private get changeDetector(): ChangeDetectorRef
  {
    return this._changeDetector;
  }

  // Private Instance Fields

  private _version: string | undefined;

  private _width: number | undefined;

  private _height: number | undefined;

  private _versionText: string | undefined;

  private _cssStyle: ICssStyle | undefined;

  private _initialized: boolean;

  private _composed: boolean;

  private _destroyed: boolean;

  private readonly _changeDetector: ChangeDetectorRef;

  // Private Static Field

  private static readonly _DefaultWidth: number = 32;

  private static readonly _DefaultHeight: number = 224;

  private static readonly _BuiltUsingText: string = 'Built using';

  private static readonly _AngularImageText: string = 'Angular';

  private static readonly _AngularImageSrc: string = 'assets/animations/angular_shield_animation.svg';

  private static readonly _AngularIntrinsicImageWidth: number = 400;

  private static readonly _AngularIntrinsicImageHeight: number = 400;

  private static readonly _AngularImageWidth: number = 24;

  private static readonly _AngularImageHeight: number = 24;

  private static readonly _AngularText: string = 'Angular';

  // Public Instance Constructor

  public constructor(changeDetector: ChangeDetectorRef)
  {
    // Assign injected services, objects, etc. to local instance fields.
    this._changeDetector = changeDetector;

    // Initialize local instance properties.
    this._initialized = false;
    this._composed = false;
    this._destroyed = false;
  }

  // Public Instance Methods

  // Angular Lifecycle Event Handlers

  public ngOnInit(): void
  {
    if (this.initialize())
    {
      this._initialized = true;
      if (this.compose())
      {
        this._composed = true;
      }
    }
  }

  public ngOnDestroy(): void
  {
  }

  // Lifecycle Event Actions

  public initialize(): boolean
  {
    this._width = !(this._width === undefined) ? this._width : AngularPanelComponent._DefaultWidth;
    this._height = !(this._height === undefined) ? this._height : AngularPanelComponent._DefaultHeight;
    this._versionText = !(this._version === undefined) ? '(Version ' + this._version + ')' : '';
    return true;
  }

  public compose(): boolean
  {
    if (this.initialized)
    {
      this._cssStyle = { panel: {}, image: {} };

      const panelCssStyle = this._cssStyle['panel'] as CssStyle;
      const imageCssStyle = this._cssStyle['image'] as CssStyle;

      panelCssStyle['width'] = this.width + 'px';
      panelCssStyle['height'] = this.height + 'px';

      imageCssStyle['width'] = this.angularImageWidth + 'px';
      panelCssStyle['height'] = this.angularImageHeight + 'px';

      return true;
    }
    return false;
  }

  public destroy(): boolean
  {
    this.changeDetector.detach();
    return true;
  }

  // Private Instance Methods

  private calculatePadding(): string
  {
    const buttonWidth: number = this.width;
    const buttonHeight: number = this.height;
    const iconWidth: number = this.angularImageWidth;
    const iconHeight: number = this.angularImageHeight;
    const horizontalGap: number = (buttonWidth - iconWidth) / 2;
    const verticalGap: number = (buttonHeight - iconHeight) / 2;
    return [verticalGap + 'px', horizontalGap + 'px'].join(' ');
  }

}
