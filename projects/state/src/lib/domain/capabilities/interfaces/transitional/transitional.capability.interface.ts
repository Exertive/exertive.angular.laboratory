
import { IGraph } from '@state/domain/facilities/interfaces/graph/state.graph.facility.interface';

export interface ITransitional
{

  // Public Interface Properties

  // <summary>
  // Get the State of the Transitional Entity as represented by a
  // State Transition Graph instance.
  // </summary>
  readonly state: IGraph;

  // <summary>
  // Get whether the State of the Transitional Entity is in a valid
  // non-error State.
  // </summary>
  readonly passed: boolean;

  // <summary>
  // Get whether the State of the Transitional Entity is in an error
  // State.
  // </summary>
  readonly failed: boolean;

  // Public Interface Methods

  transition(state: number): ITransitional;

}

