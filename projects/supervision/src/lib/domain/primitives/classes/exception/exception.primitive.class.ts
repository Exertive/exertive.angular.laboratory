
import { IException } from '../../interfaces/exception/exception.primitive.interface';
import { IExceptionOptions } from '../../interfaces/exception/options/exception.options.primitive.interface';

export class Exception extends Error implements IException
{

  // Public Instance Methods

  public get summary(): string
  {
    return this._summary!;
  }
  public set summary(summary: string)
  {
    this._summary = summary;
  }

  public get explanation(): string | null
  {
    return this._explanation ?? null;
  }
  public set explanation(explanation: string | null)
  {
    this._explanation = explanation;
  }

  // Private Instance Fields

  private _summary: string | undefined;

  private _explanation: string | null | undefined;

  // Public Instance Constructor

  public constructor(message: string, options: IExceptionOptions | null = null)
  {
    super(message);
    this.summary = message;
    this.explanation = options?.explanation ?? null;
    this.cause = options?.cause ?? null;

  }

}
