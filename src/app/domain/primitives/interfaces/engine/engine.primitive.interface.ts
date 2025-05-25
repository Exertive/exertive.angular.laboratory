
// Import Local Type Dependencies

import { EngineType } from '@app/domain/types/engine/engine.type';

// The Interface Definition

// <summary>
// Defines the contract for a Browser Engine Primitive as used in the Exertive Agency Library, where the
// Engine Primitive encapsulates the available information for an Engine as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export interface IEngine
{

  // Public Interface Properties

  // <summary>
  // Get the Type of the Engine as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly name: EngineType;

  // <summary>
  // Get the Version of the Engine as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly version: string;

  // Public Interface Methods

  // <summary>
  // Determine whether the Engine instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  isInstantiated(): boolean;

}
