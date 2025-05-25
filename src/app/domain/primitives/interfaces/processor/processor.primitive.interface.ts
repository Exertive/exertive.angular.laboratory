
// Import Local Type Dependencies

import { ProcessorArchitecture } from '@app/domain/types/processor/processorArchitecture';

// The Interface Definition

// <summary>
// Represents a Processor (CPU) Primitive as used in the Exertive Agency Library, where the Processor
// Primitive encapsulates the available information for an Processor as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export interface IProcessor
{

  // Public Interface Properties

  // <summary>
  // Get the Architecture of the Processor as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly architecture: ProcessorArchitecture;

  // Public Interface Methods

  // <summary>
  // Determine whether the Processor instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  isInstantiated(): boolean;


}
