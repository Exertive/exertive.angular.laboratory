
import { IException } from '@supervision/domain/primitives/interfaces/exception/exception.primitive.interface';

import { Domain } from '@state/domain/types/domain/state.domain.type';
import { Transitions } from '@state/domain/types/transitions/transitions.type';

// <summary>
// Defines the contract for a State Transition Graph as implemented in the Exertive Core Library,
// where a Graph represents a standard State Transition Graph in which individual States are
// represented by Nodes connected by Transitions.
// </summary>

// The Interface Definition

export interface IGraph
{

  // Public Interface Properties

  // <summary>
  // Get the Enum Type which provides the Basis for the States within the
  // State Machine.
  // <summary>
  readonly domain: Domain;

  // <summary>
  // Get the current State of the State Machine.
  // <summary>
  readonly state: number;

  // <summary>
  // Get the Set of Transitions permitted within the State Machine.
  // <summary>
  readonly transitions: Transitions;

  // <summary>
  // Get any exceptions thrown by the State Machine.
  // <summary>
  readonly exceptions: IException[];

  // Public Interface Methods

  // <summary>
  // Transition the Graph from its current State to that specified, provided
  // the Transition is 'registered' as valid.
  // </summary>
  // <returns>
  // The Graph instance for possible chaining, where the Graph will be in the
  // destination State if the Transition is permitted, or in the Error State
  // if it is not.
  // </returns>
  transition(state: number): IGraph;

}

// export interface IGraph
// {
//
//   Public Interface Properties
//
//   readonly domain: Domain<TState>;
//
//   readonly state: number;
//
//   readonly transitions: Transitions<TState>;
//
//   readonly exceptions: IException[];
//
//   Public Interface Methods
//
//   transition(state: State<TState>): IGraph<TState>;
//
// }
