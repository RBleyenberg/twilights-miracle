import { createSelector } from '@ngrx/store';

import { ModulesState, selectModule } from '../modules.state';

export const selectSales = createSelector(
  selectModule,
  (state: ModulesState) => state.sales
);
