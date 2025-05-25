
import { IDebugger } from '@imaging/framework/utilities/interfaces/debugger/debugger.utility.interface';

export class _Debugger implements IDebugger
{

  // Public Interface Methods

  public notify(notification: string): void
  {
    console.log(notification);
  }

}

export const Debugger: IDebugger = new _Debugger();
