
// Import User Agent Parser Dependencies

import { IResult as IUserAgentParserResult } from '@ua-parser-js/pro-business';

// Import Local Class Dependencies

import { Browser } from '@app/domain/primitives/classes/browser/browser.primitive.class';
import { Device } from '@app/domain/primitives/classes/device/device.primitive.class';
import { Engine } from '@app/domain/primitives/classes/engine/engine.primitive.class';
import { OperatingSystem } from '@app/domain/primitives/classes/system/operating.system.primitive.class';
import { Processor } from '@app/domain/primitives/classes/processor/processor.primitive.class';

// Import Local Interface Dependencies

import { IBrowser } from '@app/domain/primitives/interfaces/browser/browser.primitive.interface';
import { IDevice } from '@app/domain/primitives/interfaces/device/device.primitive.interface';
import { IEngine } from '@app/domain/primitives/interfaces/engine/engine.primitive.interface';
import { IOperatingSystem } from '@app/domain/primitives/interfaces/system/operating.system.primitive.interface';
import { IProcessor } from '@app/domain/primitives/interfaces/processor/processor.primitive.interface';
import { IUserAgent } from '@app/domain/primitives/interfaces/useragent/useragent.primitive.interface'

export class UserAgent implements IUserAgent
{

  // Private Instance Fields

  public get header(): string
  {
    return this._header!;
  }

  public get browser(): IBrowser
  {
    return this._browser!;
  }

  public get processor(): IProcessor
  {
    return this._processor!;
  }

  public get device(): IDevice
  {
    return this._device!;
  }

  public get engine(): IEngine
  {
    return this._engine!;
  }

  public get system(): IOperatingSystem
  {
    return this._system!;
  }

  // Private Instance Fields

  private readonly _header: string | undefined;

  private readonly _browser: IBrowser | undefined;

  private readonly _processor: IProcessor | undefined;

  private readonly _device: IDevice | undefined;

  private readonly _engine: IEngine | undefined;

  private readonly _system: IOperatingSystem | undefined;

  // Public Instance Constructor

  public constructor(
    header: string | undefined = undefined,
    browser: IBrowser | undefined = undefined,
    processor: IProcessor | undefined = undefined,
    device: IDevice | undefined = undefined,
    engine: IEngine | undefined = undefined,
    system: IOperatingSystem | undefined = undefined)
  {
    this._header = header;
    this._browser = browser;
    this._processor = processor;
    this._device = device;
    this._engine = engine;
    this._system = system;
  }

  // Public Instance Methods

  public isInstantiated(): boolean
  {
    let instantiated : boolean = true;
    instantiated &&= !(this._header === undefined);
    instantiated &&= !(this._browser === undefined);
    instantiated &&= !(this._processor === undefined);
    instantiated &&= !(this._device === undefined);
    instantiated &&= !(this._engine === undefined);
    instantiated &&= !(this._system === undefined);
    return instantiated;
  }

  // Public Static Methods

  public static fromUserAgentParser(result: IUserAgentParserResult): IUserAgent
  {
    return new UserAgent(
      result.ua,
      Browser.fromUserAgentParser(result.browser),
      Processor.fromUserAgentParser(result.cpu),
      Device.fromUserAgentParser(result.device),
      Engine.fromUserAgentParser(result.engine),
      OperatingSystem.fromUserAgentParser(result.os));
  }

}
