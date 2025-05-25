
// Import User Agent Parser Dependencies

import { ICPU as IUserAgentParserProcessor } from '@ua-parser-js/pro-business';

// Import Local Interface Dependencies

import { IProcessor } from '@app/domain/primitives/interfaces/processor/processor.primitive.interface';

// Import Local Type Dependencies

import { ProcessorArchitecture } from '@app/domain/types/processor/processorArchitecture';

// The Class Definition

// <summary>
// Represents a Processor (CPU) Primitive as used in the Exertive Agency Library, where the Processor
// Primitive encapsulates the available information for an Processor as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export class Processor implements IProcessor
{

  // Public Instance Properties

  // <summary>
  // Gets/Sets the Architecture of the Processor as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  public get architecture(): ProcessorArchitecture
  {
    return this._architecture!;
  }
  public set architecture(architecture: ProcessorArchitecture)
  {
    this._architecture = architecture;
  }

  // Private Instance Properties

  private _architecture: ProcessorArchitecture | undefined;

  // Public Instance Constructor

  public constructor(architecture: ProcessorArchitecture | undefined = undefined)
  {
    this._architecture = architecture;
  }

  // Public Instance Methods

  // <summary>
  // Determines whether the Processor instance has been fully instantiated in the sense
  // that all properties have been assign a defined (not undefined) value.
  // </summary>
  public isInstantiated(): boolean
  {
    let instantiated: boolean = true;
    instantiated &&= !(this._architecture === undefined);
    return instantiated;
  }

  // Public Static Methods

  public static fromUserAgentParser(processor: IUserAgentParserProcessor): IProcessor
  {
    return new Processor(processor.architecture);
  }

}
