import { createSelector } from '@ngrx/store';

import { ModulesState, selectModule } from '../modules.state';

export const selectTodos = createSelector(
  selectModule,
  (state: ModulesState) => state.todos
);
