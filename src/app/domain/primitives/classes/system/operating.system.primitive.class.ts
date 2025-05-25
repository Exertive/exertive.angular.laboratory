
// Import User Agent Parser Dependencies

import { IOS as IUserAgentParserOperatingSystem } from '@ua-parser-js/pro-business';

// Import Local Interface Dependencies

import { IOperatingSystem } from '@app/domain/primitives/interfaces/system/operating.system.primitive.interface';

// The Class Definition

// <summary>
// Defines the contract for an Operating System (OS) Primitive as used in the Exertive Agency Library,
// where the Operating System Primitive encapsulates the available information for an Operating System
// as captioned by the User Agent (UA) Parser Library.
// </summary>

export class OperatingSystem implements IOperatingSystem
{

  // Public Instance Properties

  // <summary>
  // Get the Name of the Operating System as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  public get name(): string
  {
    return this._name!;
  }
  public set name(name: string)
  {
    this._name = name;
  }

  // <summary>
  // Get the Version of the Operating System as identified by the User Agent string and parsed
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

  // Public Instance Properties

  private _name: string | undefined;

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
  // Determine whether the Operating System instance has been fully instantiated in the sense
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

  public static fromUserAgentParser(system: IUserAgentParserOperatingSystem): IOperatingSystem
  {
    return new OperatingSystem(system.name, system.version);
  }

}
