
// Import Angular Dependencies

import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { Inject } from '@angular/core';

// Import Reactive Dependencies

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { mergeMap } from 'rxjs';
import { of } from 'rxjs';
import { take } from 'rxjs';

// Import Local Reactive Extension

import { sequence } from '@app/domain/extensions/sequence/reactive.sequence.extension';

// Import State Dependencies

import { ProgressState } from '@app/domain/enumerations/progress/progress.state.enum';

// Import Token Dependencies

import { LogInjectionToken } from '@app/framework/injection/tokens/log/log.injection.token';

// The Abstract Class Definition

// noinspection DuplicatedCode,JSUnusedGlobalSymbols

@Component(
  {
    template: ''
  })
export abstract class Composite
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{

  // Public Instance Properties

  public get prepared(): boolean
  {
    return this.hasState(this.progress, ProgressState.Prepared);
  }

  public get arranged(): boolean
  {
    return this.hasState(this.progress, ProgressState.Arranged);
  }

  public get composed(): boolean
  {
    return this.hasState(this.progress, ProgressState.Composed);
  }

  public get completed(): boolean
  {
    return this.hasState(this.progress, ProgressState.Completed);
  }

  public get preparing(): boolean
  {
    return this.hasState(this.progress, ProgressState.Preparing);
  }

  public get arranging(): boolean
  {
    return this.hasState(this.progress, ProgressState.Arranging);
  }

  public get composing(): boolean
  {
    return this.hasState(this.progress, ProgressState.Composing);
  }

  public get completing(): boolean
  {
    return this.hasState(this.progress, ProgressState.Completing);
  }

  // Protected Instance Properties

  protected get changeDetector(): ChangeDetectorRef
  {
    return this._changeDetector;
  }

  protected get log(): boolean
  {
    return this._log;
  }

  protected get destroyed$(): Subject<boolean>
  {
    return this._destroyed$;
  }

  protected get progression$(): Observable<ProgressState>
  {
    return this._progress$.asObservable();
  }

  protected get progress$(): BehaviorSubject<ProgressState>
  {
    return this._progress$;
  }

  protected get progress(): ProgressState
  {
    return this.progress$.getValue();
  }

  // Private Instance Fields

  private readonly _changeDetector: ChangeDetectorRef;

  private readonly _log: boolean;

  private readonly _progress$: BehaviorSubject<ProgressState>;

  private readonly _destroyed$: Subject<boolean>;

  // Protected Instance Constructor

  protected constructor(
    changeDetector: ChangeDetectorRef,
    @Inject(LogInjectionToken) log: boolean)
  {
    this._changeDetector = changeDetector;
    this._log = log;

    this._progress$ = new BehaviorSubject<ProgressState>(ProgressState.Pending);
    this._destroyed$ = new Subject<boolean>();
  }

  // Public Instance Methods

  // Angular Lifecycle Event Handlers

  public ngOnInit(): void
  {
    sequence<ProgressState>(
      this.progress,
      { component: this, lifecycleEvent: 'Initialization' },
      this.performPreparation$,
      this.performArrangement$)
      .pipe(take(1))
      .subscribe((_state: ProgressState): void =>
      {
      });
  }

  public ngAfterViewInit(): void
  {
    const parameters: any = { component: this, lifecycleEvent: 'View Initialization' };
    this.continueOperations$(this.progress, parameters )
      .pipe(take(1))
      .subscribe((_state: ProgressState): void =>
      {
        this.changeDetector.detectChanges();
      });
  }

  public ngAfterViewChecked(): void
  {
    if (!this.completed)
    {
      const parameters: any = { component: this, lifecycleEvent: 'View Check' };
      this.continueOperations$(this.progress, parameters)
        .pipe(take(1))
        .subscribe((_state: ProgressState): void =>
        {
        });
    }
  }

  public ngOnDestroy(): void
  {
    this.destroy$()
      .pipe(take(1))
      .subscribe((_destroyed: boolean): void =>
      {
        this.changeDetector.detach();
      });
  }

  // Protected Instance Methods

  // <summary>
  // Performs the asynchronous Preparation Operation if the Progress State is still in the
  // 'Pending' State. The Method 'signals' that Preparation is being performed by setting and
  // unsetting the 'Preparing' Progress State. The actual Operation is defined by the
  // implementing Component.
  // <param name='lifeCycleEvent'>The name of the Angular Lifecycle event being handled.</param>
  // <param name='state'>The current Progress State.</param>
  // <return>An Observable yielding the resulting Progress State.</returns>

  protected performPreparation$(state: ProgressState, data: any): Observable<ProgressState>
  {
    const operation: string = 'Preparation';
    const component: any = data.component;
    const lifecycleEvent: string = data.lifecycleEvent;
    if (state === ProgressState.Pending)
    {
      state = component.updateState(component.setState(state, ProgressState.Preparing, true));
      return component.prepare$()
        .pipe(mergeMap((initialized: boolean): Observable<ProgressState> =>
        {
          component.logOperation(lifecycleEvent, operation, initialized);
          state = component.updateState(component.setState(state, ProgressState.Preparing, false));
          if (initialized)
          {
            state = component.updateState(component.setState(state, ProgressState.Prepared, true));
          }
          return of(state);
        }));
    }
    return of(state);
  }

  // <summary>
  // Performs the asynchronous Arrangement Operation if the Progress State is in the
  // 'Prepared' State. The Method 'signals' that Arrangement is being performed by setting and
  // unsetting the 'Arranging' Progress State. The actual Operation is defined by the
  // implementing Component.
  // <param name='lifeCycleEvent'>The name of the Angular Lifecycle event being handled.</param>
  // <param name='state'>The current Progress State.</param>
  // <return>An Observable yielding the resulting Progress State.</returns>

  protected performArrangement$(state: ProgressState, data: any): Observable<ProgressState>
  {
    const operation: string = 'Arrangement';
    const component: any = data.component;
    const lifecycleEvent: string = data.lifecycleEvent;
    if (state === ProgressState.Prepared)
    {
      state = component.updateState(component.setState(state, ProgressState.Arranging, true));
      return component.arrange$()
        .pipe(mergeMap((arranged: boolean): Observable<ProgressState> =>
        {
          component.logOperation(lifecycleEvent, operation, arranged);
          state = component.updateState(component.setState(state, ProgressState.Arranging, false));
          if (arranged)
          {
            state = component.updateState(component.setState(state, ProgressState.Arranged, true));
          }
          return of(state);
        }));
    }
    return of(state);
  }

  // <summary>
  // Performs the asynchronous Composition Operation if the Progress State is in the
  // 'Arranged' State. The Method 'signals' that Composition is being performed by setting and
  // unsetting the 'Composing' Progress State. The actual Operation is defined by the
  // implementing Component.
  // <param name='lifeCycleEvent'>The name of the Angular Lifecycle event being handled.</param>
  // <param name='state'>The current Progress State.</param>
  // <return>An Observable yielding the resulting Progress State.</returns>

  protected performComposition$(state: ProgressState, data: any): Observable<ProgressState>
  {
    const operation: string = 'Composition';
    const component: any = data.component;
    const lifecycleEvent: string = data.lifecycleEvent;
    if (state === ProgressState.Arranged)
    {
      state = component.updateState(component.setState(state, ProgressState.Composing, true));
      return component.compose$()
        .pipe(mergeMap((composed: boolean): Observable<ProgressState> =>
        {
          component.logOperation(lifecycleEvent, operation, composed);
          state = component.updateState(component.setState(state, ProgressState.Composing, false));
          if (composed)
          {
            state = component.updateState(component.setState(state, ProgressState.Composed, true));
          }
          return of(state);
        }))
    }
    return of(state);
  }

  // <summary>
  // Performs the asynchronous Completion Operation if the Progress State is in the
  // 'Composed' State. The Method 'signals' that Completion is being performed by setting and
  // unsetting the 'Completing' Progress State. The actual Operation is defined by the
  // implementing Component.
  // <param name='lifeCycleEvent'>The name of the Angular Lifecycle event being handled.</param>
  // <param name='state'>The current Progress State.</param>
  // <return>An Observable yielding the resulting Progress State.</returns>

  protected performCompletion$(state: ProgressState, data: any): Observable<ProgressState>
  {
    const operation: string = 'Completion';
    const component: any = data.component;
    const lifecycleEvent: string = data.lifecycleEvent;
    if (state === ProgressState.Composed)
    {
      state = component.updateState(component.setState(state, ProgressState.Completing, true));
      return component.complete$()
        .pipe(mergeMap((completed: boolean): Observable<ProgressState> =>
        {
          component.logOperation(lifecycleEvent, operation, completed);
          state = component.updateState(component.setState(state, ProgressState.Completing, false));
          if (completed)
          {
            state = component.updateState(component.setState(state, ProgressState.Completed, true));
          }
          return of(state);
        }))
    }
    return of(state);
  }

  protected continueOperations$(state: ProgressState, data: any): Observable<ProgressState>
  {
    if (state === ProgressState.Pending)
    {
      return sequence<ProgressState>(
        state,
        data,
        this.performPreparation$,
        this.performArrangement$,
        this.performComposition$,
        this.performCompletion$);
    }
    if (state === ProgressState.Prepared)
    {
      return sequence<ProgressState>(
        state,
        data,
        this.performArrangement$,
        this.performComposition$,
        this.performCompletion$);
    }
    if (state === ProgressState.Arranged)
    {
      return sequence<ProgressState>(
        state,
        data,
        this.performComposition$,
        this.performCompletion$);
    }
    if (state === ProgressState.Composed)
    {
      return sequence<ProgressState>(
        state,
        data,
        this.performCompletion$);
    }
    if (state === ProgressState.Completed)
    {
        return of(state);
    }
    return of(state);
  }

  // Protected Abstract Instance Methods

  protected abstract prepare$(): Observable<boolean>;

  protected abstract arrange$(): Observable<boolean>;

  protected abstract compose$(): Observable<boolean>;

  protected abstract complete$(): Observable<boolean>;

  protected destroy$(): Observable<boolean>
  {
    this.destroyed$.next(true);
    this.destroyed$.complete();
    return of(true);
  }

  protected hasState(progress: ProgressState, state: ProgressState): boolean
  {
    return (progress & state) === state;
  }

  protected setState(progress: ProgressState, state: ProgressState, value: boolean = true): ProgressState
  {
    return value ? progress | state : progress & ~state;
  }

  protected updateState(state: ProgressState): ProgressState
  {
    this.progress$.next(state);
    return state;
  }

  protected logOperation(handler: string, operation: string, success: boolean): void
  {
    if (this.log)
    {
      const outcome: string = (success ? '' : 'not ') + 'performed successfully.';
      console.log([ 'Composite Component', handler, [ operation, outcome ].join(' ') ].join(' : '));
    }
  }

}
