
import { Graph } from '@imaging/domain/facilities/classes/graph/state.graph.facility.class';

import { IGraph } from '@imaging/domain/facilities/interfaces/graph/state.graph.facility.interface';
import { ITransitional } from '@imaging/domain/capabilities/interfaces/transitional/transitional.capability.interface';

import { Domain } from '@imaging/domain/types/state/domain/state.domain.type';
import { Transitions } from '@imaging/domain/types/state/transitions/transitions.type';

export abstract class Transitional implements ITransitional
{

  // Public Instance Properties

  public get state(): IGraph
  {
    return this._state;
  }

  public get passed(): boolean
  {
    return !this.failed;
  }

  public get failed(): boolean
  {
    return this.state.state === Graph.ErrorState;
  }

  // Protected Instance Fields

  protected readonly _state: IGraph;

  // Protected Instance Constructor

  protected constructor(domain: Domain, transitions: Transitions)
  {
    this._state = new Graph(domain, transitions);
  }

  // Public Instance Methods

  public transition(state: number): ITransitional
  {
    this.state.transition(state);
    return this;
  }

}
