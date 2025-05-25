
import { StateException } from '@imaging/domain/primitives/classes/exceptions/state/state.exception.primitive.class';

import { IException } from '@imaging/domain/primitives/interfaces/exceptions/exception/exception.primitive.interface';
import { IGraph } from '@imaging/domain/facilities/interfaces/graph/state.graph.facility.interface';

import { Domain } from '@imaging//domain/types/state/domain/state.domain.type';
import { Transitions } from '@imaging/domain/types/state/transitions/transitions.type';

// The Class Definition

// noinspection UnnecessaryLocalVariableJS
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

// <exclude>
// export class Graph<TState extends Domain<TState> & PendingState<TState> & ErrorState<TState>> implements IGraph<TState>
// {
//
//   Public Instance Properties
//
//   public get domain(): TState
//   {
//     return this._domain;
//   }
//
//   public get state(): State<TState>
//   {
//     return this._state;
//   }
//
//   public get transitions(): Transitions<TState>
//   {
//     return this._transitions;
//   }
//
//   public get exceptions(): IException[]
//   {
//     return this._exceptions;
//   }
//
//   Public Instance Properties
//
//   private readonly _domain: TState;
//
//   private _state: State<TState>;
//
//   private readonly _transitions: Transitions<TState>;
//
//   private readonly _exceptions: IException[];
//
//   public constructor(domain: TState, transitions: Transitions<TState>)
//   {
//     this._domain = domain;
//     this._state = this.basis.Pending;
//     this._transitions = transitions;
//     this._exceptions = [];
//   }
//
//   public transition(state: State<TState>): IGraph<TState>
//   {
//     if (state === this.state || this.transitions[this.state].includes(state))
//     {
//       this._state = state;
//       return this;
//     }
//     const origin: State<TState> = this.state as State<TState>;
//     const destination: State<TState> = state as State<TState>;
//     const exceptions: IException = new StateException(origin, destination);
//     this.exceptions.push(exceptions);
//     return this;
//   }
//
// }
