
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

import { IBrowser } from '@app/domain/primitives/interfaces/browser/browser.primitive.interface';
import { ICssStyle } from '../../../../../../projects/composition/src/lib/domain/primitives/interfaces/style/css.style.primitive.interface';
import { IDevice } from '@app/domain/primitives/interfaces/device/device.primitive.interface';
import { IOperatingSystem } from '@app/domain/primitives/interfaces/system/operating.system.primitive.interface';
import { IUserAgent } from '@app/domain/primitives/interfaces/useragent/useragent.primitive.interface';

// The Component Definition

// noinspection DuplicatedCode, JSUnusedLocalSymbols,UnnecessaryLocalVariableJS

@Component(
  {
    selector:         'user-agent-panel',
    templateUrl:      'user.agent.panel.component.html',
    styleUrl:         'user.agent.panel.component.scss',
    standalone:       true,
    imports:          [ NgIf, NgOptimizedImage, NgStyle ],
    changeDetection:  ChangeDetectionStrategy.OnPush
  })
export class UserAgentPanelComponent implements OnInit, OnDestroy
{

  // Public Instance Properties

  @Input()
  public get agent(): IUserAgent
  {
    return this._agent!;
  }
  public set agent(agent: IUserAgent)
  {
    this._agent = agent;
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

  public get imageWidth(): number
  {
    return UserAgentPanelComponent._ImageWidth;
  }

  public get imageHeight(): number
  {
    return UserAgentPanelComponent._ImageHeight;
  }

  public get intrinsicImageWidth(): number
  {
    return UserAgentPanelComponent._IntrinsicImageWidth;
  }

  public get intrinsicImageHeight(): number
  {
    return UserAgentPanelComponent._IntrinsicImageHeight;
  }

  public get userAgentImageSrc(): string
  {
    return UserAgentPanelComponent._UserAgentImageSrc;
  }

  public get userAgentImageText(): string
  {
    return UserAgentPanelComponent._UserAgentImageText;
  }

  public get browserImageSrc(): string
  {
    return this._browserImageSrc!;
  }

  public get browserImageText(): string
  {
    return this._browserImageSrc!;
  }

  public get browserText(): string
  {
    return this._browserText!;
  }

  public get operatingSystemImageSrc(): string
  {
    return this._operatingSystemImageSrc!;
  }

  public get operatingSystemImageText(): string
  {
    return this._operatingSystemImageSrc!;
  }

  public get operatingSystemText(): string
  {
    return this._operatingSystemText!;
  }

  public get deviceTypeText(): string
  {
    return this._deviceTypeText!;
  }

  public get deviceScreenImageSrc(): string
  {
    return this._deviceScreenImageSrc!;
  }

  public get deviceScreenImageText(): string
  {
    return this._deviceScreenImageSrc!;
  }

  public get deviceScreenText(): string
  {
    return this._deviceScreenText!;
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

  private _agent: IUserAgent | undefined;

  private _width: number | undefined;

  private _height: number | undefined;

  private _browserImageSrc: string | undefined;

  private _browserImageText: string | undefined;

  private _browserText: string | undefined;

  private _operatingSystemImageSrc: string | undefined;

  private _operatingSystemImageText: string | undefined;

  private _operatingSystemText: string | undefined;

  private _deviceTypeText: string | undefined;

  private _deviceScreenImageSrc: string | undefined;

  private _deviceScreenImageText: string | undefined;

  private _deviceScreenText: string | undefined;

  private _cssStyle: ICssStyle | undefined;

  private _initialized: boolean;

  private _composed: boolean;

  private _destroyed: boolean;

  private readonly _changeDetector: ChangeDetectorRef;

  // Private Static Field

  private static readonly _DefaultWidth: number = 32;

  private static readonly _DefaultHeight: number = 224;

  private static readonly _IconImageFolder: string = 'assets/images/vectors/icons';

  private static readonly _UserAgentImageSrc: string = 'assets/images/vectors/icons/user_agent_icon_image.svg';

  private static readonly _UserAgentImageText: string = 'User Agent Icon Image';

  private static readonly _IntrinsicImageWidth: number = 512;

  private static readonly _IntrinsicImageHeight: number = 512;

  private static readonly _ImageWidth: number = 20;

  private static readonly _ImageHeight: number = 20;

  private static readonly _MacOSReleaseNames: { [minVersion: number]: string } =
    {
      11: 'Big Sur',
      12: 'Monterey',
      13: 'Ventura',
      14: 'Sonoma',
      15: 'Sequoia'
    }
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
    this._width = !(this._width === undefined) ? this._width : UserAgentPanelComponent._DefaultWidth;
    this._height = !(this._height === undefined) ? this._height : UserAgentPanelComponent._DefaultHeight;

    const agent: IUserAgent | undefined = this._agent;
    if (!(agent === undefined))
    {
      const browser: IBrowser = agent.browser;
      this._browserText = this.resolveBrowserText(browser);
      this._browserImageSrc = this.resolveBrowserImageSrc(browser);
      this._browserImageText = this.resolveBrowserImageText(browser);

      const system: IOperatingSystem = agent.system;
      this._operatingSystemText = this.resolveOperatingSystemText(system);
      this._operatingSystemImageSrc = this.resolveOperatingSystemImageSrc(system);
      this._operatingSystemImageText = this.resolveOperatingSystemImageText(system);

      const device: IDevice = agent.device;
      this._deviceTypeText = this.resolveDeviceTypeText(device);
      this._deviceScreenText = this.resolveDeviceScreenText(device);
      this._deviceScreenImageSrc = this.resolveDeviceScreenImageSrc(device);
      this._deviceScreenImageText = this.resolveDeviceScreenImageText(device);
    }

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

      imageCssStyle['width'] = this.imageWidth + 'px';
      imageCssStyle['height'] = this.imageHeight + 'px';

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

  private resolveBrowserText(browser: IBrowser): string
  {
    const browserName: string = browser.name;
    const browserVersion: string = browser.major;
    switch (browserName.toLowerCase())
    {
      case 'chrome':
      {
        return [ 'Google Chrome', '(Version ' + browserVersion + ')' ].join(' ');
      }
      case 'edge':
      {
        return [ 'Microsoft Edge', '(Version ' + browserVersion + ')' ].join(' ');
      }
      case 'firefox':
      {
        return [ 'Mozilla Firefox', '(Version ' + browserVersion + ')' ].join(' ');
      }
      case 'safari':
      {
        return 'Apple Safari';
      }
      default:
      {
        throw new Error('The browser \'' + browserName + '\' is not recognized.');
      }
    }
  }

  private resolveBrowserImageSrc(browser: IBrowser): string
  {
    const browserName: string = browser.name;
    const iconImageFolder: string = UserAgentPanelComponent._IconImageFolder;
    let iconImageFileName: string = '';
    switch (browserName.toLowerCase())
    {
      case 'chrome':
      {
        iconImageFileName = 'chrome_browser_icon_image.svg';
        break;
      }
      case 'edge':
      {
        iconImageFileName = 'edge_browser_icon_image.svg';
        break;
      }
      case 'firefox':
      {
        iconImageFileName = 'firefox_browser_icon_image.svg';
        break;
      }
      case 'safari':
      {
        iconImageFileName = 'safari_browser_icon_image.svg';
        break;
      }
      default:
      {
        throw new Error('The browser \'' + browserName + '\' is not recognized.');
      }
    }
    return [ iconImageFolder, iconImageFileName ].join('/');
  }

  private resolveBrowserImageText(browser: IBrowser): string | undefined
  {
    const browserName: string = browser.name;
    switch (browserName.toLowerCase())
    {
      case 'chrome':
      {
        return 'Google Chrome Icon Image';
      }
      case 'edge':
      {
        return 'Microsoft Edge Icon Image';
      }
      case 'firefox':
      {
        return 'Mozilla Firefox Icon Image';
      }
      case 'safari':
      {
        return 'Apple Safari Icon Image';
      }
      default:
      {
        throw new Error('The browser \'' + browserName + '\' is not recognized.');
      }
    }
  }

  private resolveOperatingSystemText(operatingSystem: IOperatingSystem): string
  {
    const systemName: string = operatingSystem.name;
    let systemVersion: string = operatingSystem.version;
    switch (systemName.toLowerCase())
    {
      case 'windows':
      {
        systemVersion = this.modifyWindowsVersion(systemVersion);
        return [ 'Microsoft Windows', systemVersion ].join(' ');
      }
      case 'macos':
      {
        const modifiedVersion: string = this.modifyMacOSVersion(systemVersion);
        return [ 'macOS', modifiedVersion ].join(' ');
      }
      default:
      {
        throw new Error('The operating system \'' + systemName + '\' is not recognized.');
      }
    }
  }

  private modifyWindowsVersion(version: string): string
  {
    return version.replace('10', '10/11');
  }

  private modifyMacOSVersion(version: string): string
  {
    const parts: string[] = version.split('.');
    if (parts.length > 2)
    {
      const majorVersion = Number(parts[0]);
      const minorVersion = Number(parts[1]);
      if (majorVersion === 10 && minorVersion >= 11 && minorVersion <= 17)
      {
        const releaseName: string = UserAgentPanelComponent._MacOSReleaseNames[minorVersion];
        return [ releaseName, version ].join(' ');
      }
    }
    return version;
  }

  private resolveDeviceTypeText(device: IDevice): string
  {
    const deviceType: string = device.type;
    return !(deviceType === undefined) ? this.convertToInitialCapitals(deviceType) : '';
  }

  private resolveDeviceScreenText(device: IDevice): string
  {
    const screenWidth: number = device.screenWidth;
    const screenHeight: number = device.screenHeight;

    const deviceScreenText: string =
      [
        screenWidth.toFixed(0),
        '&times;',
        screenHeight.toFixed(0)
      ].join('&hairsp;')
    return deviceScreenText;
  }

  private resolveDeviceScreenImageSrc(device: IDevice): string
  {
    const deviceOrientation: ScreenOrientation = device.orientation;
    const iconImageFolder: string = UserAgentPanelComponent._IconImageFolder;
    let iconImageFileName: string = '';
    switch (deviceOrientation.type)
    {
      case 'landscape-primary':
      {
        iconImageFileName = 'landscape_resolution_icon_image.svg';
        break;
      }
      case 'portrait-primary':
      {
        iconImageFileName = 'portrait_resolution_icon_image.svg';
        break;
      }
    }
    return [ iconImageFolder, iconImageFileName ].join('/');
  }

  private resolveDeviceScreenImageText(device: IDevice): string
  {
    const deviceOrientation: ScreenOrientation = device.orientation;
    switch (deviceOrientation.type)
    {
      case 'landscape-primary':
      {
        return 'Landscape Device Screen Icon Image';
      }
      case 'portrait-primary':
      {
        return 'Portrait Device Screen Icon Image';
      }
    }
    return '';
  }

  private resolveOperatingSystemImageSrc(operatingSystem: IOperatingSystem): string
  {
    const systemName: string = operatingSystem.name;
    const iconImageFolder: string = UserAgentPanelComponent._IconImageFolder;
    let iconImageFileName: string = '';
    switch (systemName.toLowerCase())
    {
      case 'windows':
      {
        iconImageFileName = 'windows_icon_image.svg';
        break;
      }
      case 'macos':
      {
        iconImageFileName = 'apple_icon_image.svg';
        break;
      }
      default:
      {
        throw new Error('The operating system \'' + systemName + '\' is not recognized.');
      }
    }
    return [ iconImageFolder, iconImageFileName ].join('/');
  }

  private resolveOperatingSystemImageText(operatingSystem: IOperatingSystem): string | undefined
  {
    const systemName: string = operatingSystem.name;
    switch (systemName.toLowerCase())
    {
      case 'windows':
      {
        return 'Microsoft Windows Icon Image';
      }
      case 'macos':
      {
        return 'Apple macOS Icon Image';
      }
      default:
      {
        throw new Error('The operating system \'' + systemName + '\' is not recognized.');
      }
    }
  }

  private convertToInitialCapitals(text: string): string
  {
    if (!(text == null || text.length === 0))
    {
      const capitalize: (word: string) => string = (word: string): string =>
      {
        return word.slice(0, 1).toUpperCase().concat(word.slice(1).toLowerCase());
      }
      const words: string[] = text.split(/\s+/);
      if (words.length > 0)
      {
        if (words.length === 1)
        {
          return capitalize(words[0]);
        }
        return words.map((word: string): string => capitalize(word)).join(' ');
      }
    }
    return text;
  }

  private calculatePadding(): string
  {
    const buttonWidth: number = this.width;
    const buttonHeight: number = this.height;
    const iconWidth: number = this.imageWidth;
    const iconHeight: number = this.imageHeight;
    const horizontalGap: number = (buttonWidth - iconWidth) / 2;
    const verticalGap: number = (buttonHeight - iconHeight) / 2;
    return [verticalGap + 'px', horizontalGap + 'px'].join(' ');
  }

}
