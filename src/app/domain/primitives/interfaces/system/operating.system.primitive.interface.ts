
// The Interface Definition

// <summary>
// Defines the contract for an Operating System (OS) Primitive as used in the Exertive Agency Library,
// where the Operating System Primitive encapsulates the available information for an Operating System
// as captioned by the User Agent (UA) Parser Library.
// </summary>

export interface IOperatingSystem
{

  // Public Interface Properties

  // <summary>
  // Get the Name of the Operating System as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly name: string;

  // <summary>
  // Get the Version of the Operating System as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly version: string;

  // Public Interface Methods

  // <summary>
  // Determine whether the Operating System instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  isInstantiated(): boolean;

}
