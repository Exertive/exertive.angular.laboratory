
// Import Interface Dependencies

import { IBrowser } from '@app/domain/primitives/interfaces/browser/browser.primitive.interface';
import { IDevice } from '@app/domain/primitives/interfaces/device/device.primitive.interface';
import { IEngine } from '@app/domain/primitives/interfaces/engine/engine.primitive.interface';
import { IOperatingSystem } from '@app/domain/primitives/interfaces/system/operating.system.primitive.interface';
import { IProcessor } from '@app/domain/primitives/interfaces/processor/processor.primitive.interface';

// The Interface Definition

// <summary>
// Defines the contract for a User Agent Primitive as used in the Exertive Agency Library, where the Agent
// Primitive encapsulates the available information on a User Agent as captioned by the User Agent (UA)
// Parser Library.
// </summary>

export interface IUserAgent
{

  // <summary>
  // Get the original User Agent (UA) 'header' string. Within a Web Application,
  // running within a Browser, the string is retrieved from the 'navigator.userAgent'
  // property of the 'window' object.
  // </summary>
  readonly header: string;

  // <summary>
  // Get information on the Browser as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly browser: IBrowser;

  // <summary>
  // Get information on the Processor (CPU) as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly processor: IProcessor;

  // <summary>
  // Get information on the Device as identified by the User Agent string and parsed
  // by the User Agent Parser.
  // </summary>
  readonly device: IDevice;

  // <summary>
  // Get information on the Browser Engine as identified by the User Agent string and
  // parsed by the User Agent Parser.
  // </summary>
  readonly engine: IEngine;

  // <summary>
  // Get information on the Operating System as identified by the User Agent string and
  // parsed by the User Agent Parser.
  // </summary>
  readonly system: IOperatingSystem;

}
