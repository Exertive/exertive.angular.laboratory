
import { StateException } from '@state/domain/primitives/exception/state.exception.primitive.class';

import { IException } from '@supervision/domain/primitives/interfaces/exception/exception.primitive.interface';
import { IGraph } from '@state/domain/facilities/interfaces/graph/state.graph.facility.interface';

import { Domain } from '@state/domain/types/domain/state.domain.type';
import { Transitions } from '@state/domain/types/transitions/transitions.type';

// The Class Definition

// noinspection UnnecessaryLocalVariableJS,JSUnusedGlobalSymbols

export class Graph implements IGraph
{

  // Public Instance Properties

  public get domain(): Domain
  {
    return this._domain;
  }

  public get state(): number
  {
    return this._state;
  }

  public get transitions(): Transitions
  {
    return this._transitions;
  }

  public get exceptions(): IException[]
  {
    return this._exceptions;
  }

  // Public Static Fields

  public static readonly PendingState: number = 0x0000;

  public static readonly ErrorState: number = 0x8000;

  // Private Instance Fields

  private readonly _domain: Domain;

  private _state: number;

  private readonly _transitions: Transitions;

  private readonly _exceptions: IException[];

  // Public Instance Constructor

  public constructor(domain: Domain, transitions: Transitions)
  {
    this._domain = domain;
    this._state = Graph.PendingState;
    this._transitions = transitions;
    this._exceptions = [];
  }

  public transition(state: number): IGraph
  {
    if (state === this.state || state === Graph.ErrorState || this.transitions[this.state].includes(state))
    {
      this._state = state === Graph.ErrorState ? (this._state | state) : state;
      return this;
    }
    const origin: number = this.state;
    const destination: number = state;
    const exception: IException = new StateException(origin, destination);
    this.exceptions.push(exception);
    return this;
  }

}
