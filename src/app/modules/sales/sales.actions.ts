import { v4 as uuid } from 'uuid';
import { Action } from '@ngrx/store';

import { SalesState } from './sales.model';

export enum SalesActionTypes {
  ADD = '[Sales] Add',
  TOGGLE = '[Sales] Toggle',
  REMOVE_DONE = '[Sales] Remove Done',
  PERSIST = '[Sales] Persist'
}

export class ActionSalesAdd implements Action {
  readonly type = SalesActionTypes.ADD;
  readonly payload: { id: string; name: string };

  constructor({ id = uuid(), name = '' }: { id?: string; name: string }) {
    this.payload = { id, name };
  }
}

export class ActionSalesToggle implements Action {
  readonly type = SalesActionTypes.TOGGLE;

  constructor(readonly payload: { id: string }) {}
}

export class ActionSalesRemoveDone implements Action {
  readonly type = SalesActionTypes.REMOVE_DONE;
}


export class ActionSalesPersist implements Action {
  readonly type = SalesActionTypes.PERSIST;

  constructor(readonly payload: { sales: SalesState }) {}
}

export type SalesActions =
  | ActionSalesAdd
  | ActionSalesToggle
  | ActionSalesRemoveDone
  | ActionSalesPersist;
