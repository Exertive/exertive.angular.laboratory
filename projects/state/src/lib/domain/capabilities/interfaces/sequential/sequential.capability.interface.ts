
import { ITransitional } from '@state/domain/capabilities/interfaces/transitional/transitional.capability.interface';

import { Sequence } from '@state/domain/types/sequence/sequence.type';

export interface ISequential extends ITransitional
{

  // Public Interface Properties

  readonly sequence: Sequence;

  readonly completed: boolean;

  // Public Interface Methods

  proceed(): ISequential;

}

