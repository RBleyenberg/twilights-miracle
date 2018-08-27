import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { LocalStorageService } from '@app/core';

import { ActionSalesPersist, SalesActionTypes } from './sales.actions';

export const SALES_KEY = 'modules.sales';

@Injectable()
export class SalesEffects {
  constructor(
    private actions$: Actions<Action>,
    private localStorageService: LocalStorageService
  ) {}

  @Effect({ dispatch: false })
  persistTodos() {
    return this.actions$.pipe(
      ofType<ActionSalesPersist>(SalesActionTypes.PERSIST),
      tap(action =>
        this.localStorageService.setItem(SALES_KEY, action.payload.sales)
      )
    );
  }
}
