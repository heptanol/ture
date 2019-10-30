import {NodeAction, NodeActionType} from './node.action';

export const initialState = {};

export function todosReducer(state = initialState, action: NodeAction) {
  switch (action.type) {
    case NodeActionType.GET_NODES_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}
