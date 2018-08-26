import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import { AppState } from '@app/core';

import { todosReducer } from './todos/todos.reducer';
import { TodosState } from './todos/todos.model';

export const FEATURE_NAME = 'modules';

export const reducers: ActionReducerMap<ModulesState> = {
  todos: todosReducer
};

export const selectModule = createFeatureSelector<State, ModulesState>(
  FEATURE_NAME
);

export interface ModulesState {
  todos: TodosState;
}

export interface State extends AppState {
  modules: ModulesState;
}
