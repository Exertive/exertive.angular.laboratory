
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

export type Step<TState> = Observable<TState> | ((state: TState, data: any) => Observable<TState>)

export function sequence<TState>(seed: TState, data: object, ...steps: Array<Step<TState>>): Observable<TState>
{
  return new Observable<TState>(subscriber =>
  {
    let state: TState;
    let subscription: Subscription

    const proceed: (observable: Observable<TState>) => void = (observable: Observable<TState>): void =>
    {
      subscription = observable.subscribe(
        {
          next: value =>
          {
            state = value;
            subscriber.next(value);
          },
          error: subscriber.error,
          complete: () =>
          {
            if (subscription)
            {
              subscription.unsubscribe()
            }
            const next: Step<TState> | undefined = steps.shift();
            if (next === undefined)
            {
              subscriber.complete();
            }
            else
            {
              proceed(typeof next === 'function' ? next(state, data) : next);
            }
          }
        });
    };

    proceed(of(seed));

    return (): void =>
    {
      subscription.unsubscribe()
    };
  });

}
