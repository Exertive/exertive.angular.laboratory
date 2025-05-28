
// Import Azure Dependencies

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

import { CssStyle } from '@composition/domain/primitives/classes/style/css.style.primitive.class';

// Import Interface Dependencies

import { ICssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';

// The Component Definition

// noinspection DuplicatedCode, JSUnusedLocalSymbols, JSUnusedGlobalSymbols

@Component(
  {
    selector:         'azure-panel',
    templateUrl:      'azure.panel.component.html',
    styleUrl:         'azure.panel.component.scss',
    standalone:       true,
    imports:          [ NgIf, NgOptimizedImage, NgStyle ],
    changeDetection:  ChangeDetectionStrategy.OnPush
  })
export class AzurePanelComponent implements OnInit, OnDestroy
{

  // Public Instance Properties

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

  public get hostedUsingText(): string
  {
    return AzurePanelComponent._HostedUsingText;
  }

  public get azureImageSrc(): string
  {
    return AzurePanelComponent._AzureImageSrc;
  }

  public get logoImageWidth(): number
  {
    return AzurePanelComponent._LogoImageWidth;
  }

  public get logoImageHeight(): number
  {
    return AzurePanelComponent._LogoImageHeight;
  }

  public get azureIntrinsicImageWidth(): number
  {
    return AzurePanelComponent._AzureIntrinsicImageWidth;
  }

  public get azureIntrinsicImageHeight(): number
  {
    return AzurePanelComponent._AzureIntrinsicImageHeight;
  }

  public get azureImageText(): string
  {
    return AzurePanelComponent._AzureImageText;
  }

  public get dockerImageSrc(): string
  {
    return AzurePanelComponent._DockerImageSrc;
  }

  public get dockerImageWidth(): number
  {
    return AzurePanelComponent._DockerImageWidth;
  }

  public get dockerImageHeight(): number
  {
    return AzurePanelComponent._DockerImageHeight;
  }

  public get dockerIntrinsicImageWidth(): number
  {
    return AzurePanelComponent._DockerIntrinsicImageWidth;
  }

  public get dockerIntrinsicImageHeight(): number
  {
    return AzurePanelComponent._DockerIntrinsicImageHeight;
  }

  public get dockerImageText(): string
  {
    return AzurePanelComponent._DockerImageText;
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

  private _repository: string | undefined;

  private _width: number | undefined;

  private _height: number | undefined;

  private _cssStyle: ICssStyle | undefined;

  private _initialized: boolean;

  private _composed: boolean;

  private _destroyed: boolean;

  private readonly _changeDetector: ChangeDetectorRef;

  // Private Static Field

  private static readonly _DefaultWidth: number = 400;

  private static readonly _DefaultHeight: number = 32;

  private static readonly _HostedUsingText: string = 'Hosted on <strong>Microsoft Azure</strong> using <strong>Docker</strong> Linux containers'

  private static readonly _AzureImageText: string = 'Azure';

  private static readonly _AzureImageSrc: string = 'assets/images/vectors/logos/azure_vector_logo_image.svg';

  private static readonly _AzureIntrinsicImageWidth: number = 256;

  private static readonly _AzureIntrinsicImageHeight: number = 256;

  private static readonly _LogoImageWidth: number = 24;

  private static readonly _LogoImageHeight: number = 24;

  private static readonly _DockerImageText: string = 'Docker';

  private static readonly _DockerImageSrc: string = 'assets/images/vectors/logos/docker_vector_logo_image.svg';

  private static readonly _DockerIntrinsicImageWidth: number = 256;

  private static readonly _DockerIntrinsicImageHeight: number = 256;

  private static readonly _DockerImageWidth: number = 24;

  private static readonly _DockerImageHeight: number = 24;

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

  // Azure Lifecycle Event Handlers

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
    this._width = !(this._width === undefined) ? this._width : AzurePanelComponent._DefaultWidth;
    this._height = !(this._height === undefined) ? this._height : AzurePanelComponent._DefaultHeight;
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

      imageCssStyle['width'] = this.logoImageWidth + 'px';
      imageCssStyle['height'] = this.logoImageHeight + 'px';

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
    const iconWidth: number = this.logoImageWidth;
    const iconHeight: number = this.logoImageHeight;
    const horizontalGap: number = (buttonWidth - iconWidth) / 2;
    const verticalGap: number = (buttonHeight - iconHeight) / 2;
    return [verticalGap + 'px', horizontalGap + 'px'].join(' ');
  }

}
