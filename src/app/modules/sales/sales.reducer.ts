import { v4 as uuid } from 'uuid';

import { SalesActions, SalesActionTypes } from './sales.actions';
import { Sale, SalesState } from './sales.model';

export const initialState: SalesState = {
  items: [
    { id: uuid(), name: 'Twilight\'s powers', done: true },
    { id: uuid(), name: 'Awesome ponies', done: false },
    { id: uuid(), name: 'Beastmode activated', done: false
    }
  ]
};

export function salesReducer(
  state: SalesState = initialState,
  action: SalesActions
): SalesState {
  switch (action.type) {
    case SalesActionTypes.ADD:
      return {
        ...state,
        items: [
          {
            id: action.payload.id,
            name: action.payload.name,
            done: false
          },
          ...state.items
        ]
      };

    case SalesActionTypes.TOGGLE:
      return {
        ...state,
        items: state.items.map(
          (item: Sale) =>
            item.id === action.payload.id ? { ...item, done: !item.done } : item
        )
      };

    case SalesActionTypes.REMOVE_DONE:
      return {
        ...state,
        items: state.items.filter((item: Sale) => !item.done)
      };

    default:
      return state;
  }
}
