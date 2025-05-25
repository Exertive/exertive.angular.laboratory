
// Import User Agent Parser Dependencies

import { IEngine as IUserAgentParserEngine } from '@ua-parser-js/pro-business';

// Import Local Instance Dependencies

import { IBrowser } from '@app/domain/primitives/interfaces/browser/browser.primitive.interface';
import { IEngine } from '@app/domain/primitives/interfaces/engine/engine.primitive.interface';
import { DeviceType } from '@app/domain/types/device/device.type';

// Import Local Type Dependencies

import { EngineType } from '@app/domain/types/engine/engine.type';
import { IBrowser as IUserAgentParserBrowser } from '@ua-parser-js/pro-business';

// The Class Definition

// <summary>
// Represents a Browser Engine Primitive as used in the Exertive Agency Library, where the Engine
// Primitive encapsulates the available information for an Engine as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export class Engine implements IEngine
{

  // Public Instance Properties

  // <summary>
  // Gets/Sets the Type of the Engine as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  public get name(): EngineType
  {
    return this._name!;
  }
  public set name(name: EngineType)
  {
    this._name = name;
  }

  // <summary>
  // Gets/Sets the Version of the Engine as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  public get version(): string
  {
    return this._version!;
  }
  public set version(version: string)
  {
    this._version = version;
  }

  // Private Instance Fields

  private _name: EngineType | undefined;

  private _version: string | undefined;

  // Public Instance Constructor

  public constructor(
    name: string | undefined = undefined,
    version: string | undefined = undefined)
  {
    this._name = name;
    this._version = version;
  }

  // Public Instance Methods

  // <summary>
  // Determines whether the Engine instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  public isInstantiated(): boolean
  {
    let instantiated: boolean = true;
    instantiated &&= !(this._name === undefined);
    instantiated &&= !(this._version === undefined);
    return instantiated;
  }

  // Public Static Methods

  public static fromUserAgentParser(engine: IUserAgentParserEngine): IEngine
  {
    return new Engine(engine.name, engine.version);
  }

}
