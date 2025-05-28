
// Import Angular Dependencies

import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Renderer2 } from '@angular/core';

import { Component } from '@angular/core';
import { Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

// Import Reactive Dependencies

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// Import Component Dependencies

import { Composite } from '@app/framework/abstractions/classes/composite/composite.abstraction.class';

// Import Class Dependencies

import { BitmapImage } from '@image/domain/primitives/classes/image/bitmap/bitmap.image.primitive.class';
import { CssStyle } from '@composition/domain/primitives/classes/style/css.style.primitive.class';

// Import Interface Dependencies

import { ICssStyle } from '@composition/domain/primitives/interfaces/style/css.style.primitive.interface';
import { IUserAgent } from '@app/domain/primitives/interfaces/useragent/useragent.primitive.interface';
import { IBitmapImage } from '@image/domain/primitives/interfaces/image/bitmap/bitmap.image.primitive.interface';

// Import Service Dependencies

import { ImageManager } from '@asset/framework/managers/classes/images/image.manager.class';
import { UserAgentService } from '@app/framework/services/useragent/user.agent.service';

// Import Utility Dependencies

// Import Token Dependencies

import { AngularVersionInjectionToken } from '@app/framework/injection/tokens/angular/angular.version.injection.token';
import { LogInjectionToken } from '@app/framework/injection/tokens/log/log.injection.token';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// The Component Definition

// <summary>
// Represents the Angular Application Root Component, which is loaded automatically as part of
// the application bootstrapping process.
// </summary>

// noinspection JSUnusedGlobalSymbols, DuplicatedCode, JSUnusedLocalSymbols, UnnecessaryLocalVariableJS

@Component(
  {
    selector:    'experiments-page',
    templateUrl: 'experiment.page.component.html',
    styleUrl:    'experiment.page.component.scss',
    standalone:  false
  })
export class ExperimentPageComponent extends Composite implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{

  // Public Instance Properties

  public get bitmapImage(): IBitmapImage
  {
    return this._bitmapImage;
  }

  public get userAgent(): IUserAgent
  {
    return this._userAgent!;
  }

  public get titleText(): string
  {
    return ExperimentPageComponent._TitleText;
  }

  public get introductionText(): SafeHtml
  {
    return this._introductionText;
  }

  public get exertiveLogoImageSrc(): string
  {
    return ExperimentPageComponent._ExertiveLogoImageSrc;
  }

  public get exertiveLogoImageWidth(): number
  {
    return ExperimentPageComponent._ExertiveLogoImageWidth;
  }

  public get exertiveLogoImageHeight(): number
  {
    return ExperimentPageComponent._ExertiveLogoImageHeight;
  }

  public get exertiveLogoImageAspectRatio(): number
  {
    return ExperimentPageComponent._ExertiveLogoImageAspectRatio;
  }

  public get githubRepository(): string
  {
    return ExperimentPageComponent._GitHubRepository;
  }

  public get exertiveLogoCssStyle(): CssStyle
  {
    return this.cssStyle['exertiveLogo'] as CssStyle;
  }

  public get angularVersion(): string
  {
    return this._angularVersion || '';
  }

  public get cssStyle(): ICssStyle
  {
    return this._cssStyle;
  }

  // Private Static Fields

  private static readonly _TitleText: string = 'Exertive Angular Laboratory';

  private static readonly _IntroductionText: string =
    [
      'This release of the Exertive Angular Laboratory application',
      'tests implementation of a Component which uses the new Angular',
      'Signals API for the input and output of values to and from the Component,',
      'and computed Signals within it. The Component also uses \'effects\'',
      'in place of the customary Lifecycle Event Handlers.',
      'The Component under test is an Image Component which itself tests the',
      'retrieval and rendering of a \'responsive\' image. The ImageKit API is',
      'used to optionally scale and crop an image (see https://imagekit.io) to' +
      'minimize the amount of data retrieved from remote storage.'
    ].join(' ');

  private static readonly _ExertiveLogoImageSrc: string = 'assets/images/vectors/logos/exertive_lateral_logo_image.svg';

  private static readonly _ExertiveLogoImageWidth: number = 1024;

  private static readonly _ExertiveLogoImageHeight: number = 96;

  private static readonly _ExertiveLogoImageAspectRatio: number = ExperimentPageComponent.calculateExertiveLogoAspectRatio();

  private static readonly _GitHubRepository: string = 'https://github.com/exertive/exertive.angular.laboratory.git';

  // Private Instance Properties

  private get hostElementRef(): ElementRef<HTMLElement>
  {
    return this._elementRef;
  }

  private get httpClient(): HttpClient
  {
    return this._httpClient;
  }

  private get imageManager(): ImageManager
  {
    return this._imageManager;
  }

  private get renderer(): Renderer2
  {
    return this._renderer;
  }

  private get router(): Router
  {
    return this._router;
  }

  // Private Instance Fields

  private _userAgent: IUserAgent | undefined;

  private _cssStyle: ICssStyle;

  private readonly _introductionText: SafeHtml;

  private readonly _bitmapImage: IBitmapImage;

  private readonly _angularVersion: string | null;

  private readonly _elementRef: ElementRef<HTMLElement>;

  private readonly _httpClient: HttpClient;

  private readonly _imageManager: ImageManager;

  private readonly _renderer: Renderer2;

  private readonly _router: Router;

  private readonly _sanitizer: DomSanitizer;

  private readonly _useragentService: UserAgentService;

  // Public Constructor

  public constructor(
    changeDetector: ChangeDetectorRef,
    elementRef: ElementRef<HTMLElement>,
    httpClient: HttpClient,
    imageManager: ImageManager,
    injector: Injector,
    router: Router,
    renderer: Renderer2,
    sanitizer: DomSanitizer,
    useragentService: UserAgentService,
    @Inject(AngularVersionInjectionToken) angularVersion$: BehaviorSubject<string>)
  {
    super(changeDetector, injector.get(LogInjectionToken));

    this._elementRef = elementRef;
    this._httpClient = httpClient;
    this._imageManager = imageManager;
    this._renderer = renderer;
    this._router = router;
    this._sanitizer = sanitizer;
    this._useragentService = useragentService;

    this._introductionText = sanitizer.bypassSecurityTrustHtml(ExperimentPageComponent._IntroductionText);
    this._angularVersion = angularVersion$.getValue();
    this._bitmapImage = new BitmapImage(this.imageManager.lookup('WhiteHorseImage'));
    this._cssStyle = {};
  }

  // Public Instance Methods

  // Angular Lifecycle Event Handlers

  public override ngOnInit(): void
  {
    super.ngOnInit();
  }

  public override ngAfterViewInit(): void
  {
    super.ngAfterViewInit();
  }

  public override ngAfterViewChecked(): void
  {
    super.ngAfterViewChecked();
  }

  public override ngOnDestroy(): void
  {
    super.ngOnDestroy();
  }

  // Tasks

  public override prepare$(): Observable<boolean>
  {
    if (this.preparing)
    {
      const userAgent: IUserAgent = this._useragentService.parse();
      this._userAgent = userAgent;

      return of(true);
    }
    return of(false);
  }

  public arrange$(): Observable<boolean>
  {
    if (this.prepared && this.arranging)
    {
      this._cssStyle =
        {
          exertiveLogo: {},
          threeJsLogo: {},
          angularLogo: {}
        };

      const exertiveLogoCssStyle: CssStyle = this._cssStyle['exertiveLogo'] as CssStyle;
      exertiveLogoCssStyle['width'] = (24 / this.exertiveLogoImageAspectRatio) + 'px'
      exertiveLogoCssStyle['height'] = 24 + 'px'

      return of(true);
    }
    return of(false);
  }

  public compose$(): Observable<boolean>
  {
    if (this.arranged && this.composing)
    {
      // Perform any further composition here, which can only be reliably performed after
      // View Initialization or Checking.
      return of(true);
    }
    return of(false);
  }

  public complete$(): Observable<boolean>
  {
    if (this.composed && this.completing)
    {
      return of(true);
    }
    return of(false);
  }

  // Private Static Methods

  private static calculateExertiveLogoAspectRatio() : number
  {
    return ExperimentPageComponent._ExertiveLogoImageHeight / ExperimentPageComponent._ExertiveLogoImageWidth;
  }

}
