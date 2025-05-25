
// Import Local Type Dependencies

import { DeviceType } from '@app/domain/types/device/device.type';

// The Interface Definition

// <summary>
// Defines the contract for a Device Primitive as used in the Exertive Agency Library, where the Device
// Primitive encapsulates the available information for a Device as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export interface IDevice
{

  // Public Interface Properties

  // <summary>
  // Get the Type of the Device as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly type: DeviceType;

  // <summary>
  // Get the name of the Device Vendor as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly vendor: string;

  // <summary>
  // Get the Device Model as identified by the User Agent string and parsed by the User
  // Agent Parser.
  // </summary>
  readonly model: string;

  // <summary>
  // Get the Width of the Device Screen in CSS pixels.
  // </summary>
  readonly screenWidth: number;

  // <summary>
  // Get the Height of the Device Screen in CSS pixels.
  // </summary>
  readonly screenHeight: number;

  // <summary>
  // Get the Ratio of actual to CSS pixels for the Device Screen.
  // </summary>
  readonly pixelRatio: number;

  // <summary>
  // Get the Orientation of the Device Screen.
  // </summary>
  readonly orientation: ScreenOrientation;

  // Public Interface Methods

  // <summary>
  // Determine whether the Device instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  isInstantiated(): boolean;

}
