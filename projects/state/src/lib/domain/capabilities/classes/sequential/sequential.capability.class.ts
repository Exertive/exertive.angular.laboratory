
import { Transitional } from '@imaging/domain/capabilities/classes/transitional/transitional.capability.class';

import { ISequential } from '@imaging/domain/capabilities/interfaces/sequential/sequential.capability.interface';

import { Domain } from '@imaging/domain/types/state/domain/state.domain.type';
import { Sequence } from '@imaging/domain/types/state/sequence/sequence.type';
import { Transitions } from '@imaging/domain/types/state/transitions/transitions.type';

export abstract class Sequential extends Transitional implements ISequential
{

  // Public Instance Properties

  public get sequence(): Sequence
  {
    return this._sequence;
  }

  public get completed(): boolean
  {
    return (this.state.state & this.sequence.final) === this.sequence.final;
  }

  // Protected Instance Fields

  protected readonly _sequence: Sequence;

  // Protected Instance Constructor

  protected constructor(domain: Domain, transitions: Transitions, sequence: Sequence)
  {
    super(domain, transitions);
    this._sequence = sequence;
  }

  // Public Instance Methods

  public proceed(): ISequential
  {
    if (!this.failed)
    {
      const state: number = this.state.state;
      const transitions: number[] | undefined = this.state.transitions[state];
      if (!(transitions === undefined || transitions.length === 0))
      {
        const destination: number = transitions[0];
        this.transition(destination);
      }
    }
    return this;
  }

}
