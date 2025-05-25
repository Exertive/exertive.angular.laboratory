
// Import User Agent Parser Dependencies

import { IBrowser as IUserAgentParserBrowser } from '@ua-parser-js/pro-business';

// Import Local Interface Dependencies

import { IBrowser } from '@app/domain/primitives/interfaces/browser/browser.primitive.interface';

// Import Local Type Dependencies

import { BrowserType } from '@app/domain/types/browser/browser.type';

// The Class Definition

export class Browser implements IBrowser
{

  // Public Instance Properties

  public get name(): string
  {
    return this._name!;
  }
  public set name(name: string)
  {
    this._name = name;
  }

  public get version(): string
  {
    return this._version!;
  }
  public set version(version: string)
  {
    this._version = version;
  }

  public get major(): string
  {
    return this._major!;
  }
  public set major(major: string)
  {
    this._major = major;
  }

  public get type(): BrowserType
  {
    return this._type!;
  }
  public set type(type: BrowserType)
  {
    this._type = type;
  }

  // Private Instance Fields

  private _name: string | undefined;

  private _version: string | undefined;

  private _major: string | undefined;

  private _type: BrowserType | undefined;

  // Public Instance Constructor

  public constructor(
    name: string | undefined = undefined,
    version: string | undefined = undefined,
    major: string | undefined = undefined,
    type: BrowserType | undefined= undefined)
  {
    this._name = name;
    this._version = version;
    this._major = major;
    this._type = type;
  }

  // Public Instance Methods

  public isInstantiated(): boolean
  {
    let instantiated: boolean = true;
    instantiated &&= !(this._name === undefined);
    instantiated &&= !(this._version === undefined);
    instantiated &&= !(this._major === undefined);
    instantiated &&= !(this._type === undefined);
    return instantiated;
  }

  // Public Static Methods

  public static fromUserAgentParser(browser: IUserAgentParserBrowser): IBrowser
  {
    return new Browser(browser.name, browser.version, browser.major, browser.type);
  }

}
