
// Import User Agent Parser Dependencies

import { DesktopDevice } from '@app/domain/types/device/device.type';
import { IDevice as IUserAgentParserDevice } from '@ua-parser-js/pro-business';

// Import Local Interface Dependencies

import { IDevice } from '@app/domain/primitives/interfaces/device/device.primitive.interface';

// Import Local Type Dependencies

import { DeviceType } from '@app/domain/types/device/device.type';

// The Class Definition

// <summary>
// Defines the Browser Primitive as used in the Exertive Agency Library, where the Browser Primitive
// encapsulates the available information for a Browser as captioned by the User Agent (UA) Parser
// Library.
// </summary>

export class Device implements IDevice
{

  // Public Instance Properties

  // <summary>
  // Get/Set the Type of the Device as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  public get type(): DeviceType
  {
    return this._type!;
  }
  public set type(type: DeviceType)
  {
    this._type = type;
  }

  // <summary>
  // Get/Set the name of the Device Vendor as identified by the User Agent string and
  // parsed by the User Agent Parser.
  // </summary>
  public get vendor(): string
  {
    return this._vendor!;
  }
  public set vendor(vendor: string)
  {
    this._vendor = vendor;
  }

  // <summary>
  // Get/Set the Device Model as identified by the User Agent string and parsed by
  // the User Agent Parser.
  // </summary>
  public get model(): string
  {
    return this._model!;
  }
  public set model(model: string)
  {
    this._model = model;
  }

  // <summary>
  // Gets/Sets the Width of the Device Screen in CSS pixels.
  // </summary>
  public get screenWidth(): number
  {
    return this._screenWidth!;
  }
  public set screenWidth(screenWidth: number)
  {
    this._screenWidth = screenWidth;
  }

  // <summary>
  // Gets/Sets the Height of the Device Screen in CSS pixels.
  // </summary>
  public get screenHeight(): number
  {
    return this._screenHeight!;
  }
  public set screenHeight(screenHeight: number)
  {
    this._screenHeight = screenHeight;
  }

  // <summary>
  // Gets/Sets the Ratio of actual to CSS pixels for the Device Screen.
  // </summary>
  public get pixelRatio(): number
  {
    return this._pixelRatio!;
  }
  public set pixelRatio(pixelRatio: number)
  {
    this._pixelRatio = pixelRatio;
  }

  // <summary>
  // Gets/Sets the Orientation of the Device Screen.
  // </summary>
  public get orientation(): ScreenOrientation
  {
    return this._orientation!;
  }
  public set orientation(orientation: ScreenOrientation)
  {
    this._orientation = orientation;
  }

  // Private Instance Properties

  private _type: DeviceType | undefined;

  private _vendor: string | undefined;

  private _model: string | undefined;

  private _screenWidth: number | undefined;

  private _screenHeight: number | undefined;

  private _pixelRatio: number | undefined;

  private _orientation: ScreenOrientation | undefined;

  // Public Instance Constructor

  public constructor(
    type: DeviceType | undefined = undefined,
    vendor: string | undefined = undefined,
    model: string | undefined = undefined)
  {
    this._type = type;
    this._vendor = vendor;
    this._model = model;
    this._screenWidth = window.screen.width;
    this._screenHeight = window.screen.height;
    this._pixelRatio = window.devicePixelRatio;
    this._orientation = window.screen.orientation;

    // Make a few obvious adjustments.
    // The device type is often undefined, especially for desktop devices.
    if (this._type === undefined)
    {
      if (this._screenWidth >= 1920 || this._screenHeight >= 1920)
      {
        this._type = DesktopDevice;
      }
    }
  }

  // Public Interface Methods

  // <summary>
  // Determines whether the Device instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  public isInstantiated(): boolean
  {
    let instantiated: boolean = true;
    instantiated &&= !(this._type === undefined);
    instantiated &&= !(this._vendor === undefined);
    instantiated &&= !(this._model === undefined);
    return instantiated;
  }

  // Public Static Methods

  public static fromUserAgentParser(device: IUserAgentParserDevice): IDevice
  {
    return new Device(device.type, device.vendor, device.model);
  }

}
