import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { AppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';
import {salesReducer} from '@app/modules/sales/sales.reducer';
import {SalesState} from '@app/modules/sales/sales.model';

export const FEATURE_NAME = 'modules';

export const reducers: ActionReducerMap<ModulesState> = {
  todos: todosReducer,
  sales: salesReducer,
};

export const selectModule = createFeatureSelector<State, ModulesState>(
  FEATURE_NAME
);

export interface ModulesState {
  todos: TodosState;
  sales: SalesState;
}

export interface State extends AppState {
  modules: ModulesState;
}
