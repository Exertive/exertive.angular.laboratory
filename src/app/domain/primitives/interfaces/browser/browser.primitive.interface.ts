
// Import Local Type Dependencies

import { BrowserType } from '@app/domain/types/browser/browser.type';

// The Interface Definition

// <summary>
// Defines the contract for a Browser Primitive as used in the Exertive Agency Library, where the Browser
// Primitive encapsulates the available information for a Browser as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export interface IBrowser
{

  // Public Interface Properties

  // <summary>
  // Get the Name of the Browser as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly name: string;

  // <summary>
  // Get the Version of the Browser as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly version: string;

  // <summary>
  // Get the Major Version of the Browser as identified by the User Agent string and
  // parsed by the User Agent Parser.
  // </summary>
  readonly major: string;

  // <summary>
  // Get the Type of the Browser as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly type: BrowserType;

  // Public Interface Methods

  // <summary>
  // Determine whether the Browser instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  isInstantiated(): boolean;

}
