
import { Exception } from '@supervision/domain/primitives/classes/exception/exception.primitive.class';

import { IExceptionOptions } from '@supervision/domain/primitives/interfaces/exception/options/exception.options.primitive.interface';

export class StateException extends Exception
{

  public constructor(originState: number, destinationState: number)
  {
    const origin: string = originState.toString();
    const destination: string = destinationState.toString();
    const explanation: string = 'The transition from \'' + origin + '\' to \'' + destination + '\' is not permitted.';
    const options: IExceptionOptions =
      {
        explanation: explanation,
      };
    super('Invalid transition', options);
  }

}
