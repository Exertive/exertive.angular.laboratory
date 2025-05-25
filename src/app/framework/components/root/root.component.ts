
// Import Angular Dependencies

import { ChangeDetectorRef } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Params as QueryParameters } from '@angular/router';
import { mergeMap } from 'rxjs';

// Import Reactive Dependencies

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { take } from 'rxjs';

// Import Component Dependencies

import { Composite } from '@app/framework/abstractions/classes/composite/composite.abstraction.class';

// Import Token Dependencies

import { AngularVersionInjectionToken } from '@app/framework/injection/tokens/angular/angular.version.injection.token';
import { LogInjectionToken } from '@app/framework/injection/tokens/log/log.injection.token';

// The Component Definition

// <summary>
// Represents the Angular Application Root Component, which is loaded automatically as part of
// the application bootstrapping process.
// </summary>

// noinspection JSUnusedGlobalSymbols, DuplicatedCode, JSUnusedLocalSymbols, UnnecessaryLocalVariableJS

@Component(
  {
    selector:    'app-root',
    templateUrl: 'root.component.html',
    styleUrl:    'root.component.scss',
    standalone:  false
  })
export class RootComponent extends Composite implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{

  // Private Instance Properties

  private get angularVersion(): string
  {
    return this._angularVersion!;
  }

  private get hostElementRef(): ElementRef<HTMLElement>
  {
    return this._hostElementRef;
  }

  private get route(): ActivatedRoute
  {
    return this._route;
  }

  // Private Instance Fields

  private readonly _angularVersion: string | null;

  private readonly _hostElementRef: ElementRef<HTMLElement>;

  private readonly _route: ActivatedRoute;

  // Public Constructor

  public constructor(
    changeDetector: ChangeDetectorRef,
    elementRef: ElementRef<HTMLElement>,
    injector: Injector,
    route: ActivatedRoute,
    @Inject(AngularVersionInjectionToken) angularVersion$: BehaviorSubject<string>)
  {
    super(changeDetector, injector.get(LogInjectionToken));

    this._hostElementRef = elementRef;
    this._route = route;
    this._angularVersion = elementRef.nativeElement.getAttribute('ng-version');

    angularVersion$.next(this._angularVersion || 'n/a');
  }

  // Public Instance Methods

  // Angular Lifecycle Event Handlers

  public override ngOnInit(): void
  {
    // Run any tests if the current route contains the 'test' query
    // parameter indicating that tests should be performed.
    // this.runTests$().pipe(take(1)).subscribe();

    // Proceed with initialization.
    super.ngOnInit();
  }

  public override ngAfterViewInit(): void
  {
    super.ngAfterViewInit();
  }

  public override ngAfterViewChecked(): void
  {
    super.ngAfterViewChecked();
  }

  public override ngOnDestroy(): void
  {
    super.ngOnDestroy();
  }

  // Tasks

  public override prepare$(): Observable<boolean>
  {
    if (this.preparing)
    {
      return of(true);
    }
    return of(false);
  }

  public arrange$(): Observable<boolean>
  {
    if (this.prepared && this.arranging)
    {
      return of(true);
    }
    return of(false);
  }

  public compose$(): Observable<boolean>
  {
    if (this.arranged && this.composing)
    {
      // Perform any further composition here, which can only be reliably performed after
      // View Initialization or Checking.
      return of(true);
    }
    return of(false);
  }

  public complete$(): Observable<boolean>
  {
    return of(true);
  }

}
