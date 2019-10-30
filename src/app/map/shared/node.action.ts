import { Action } from '@ngrx/store';
import { Node } from './node.model';

export enum NodeActionType {
  GET_NODES = '[NODE] GET NODES',
  GET_NODES_SUCCESS = '[NODE] GET NODES SUCCESS',
  GET_NODES_FAIL = '[NODE] GET NODES FAIL',
}

export class GetNodes implements Action {
  readonly type = NodeActionType.GET_NODES;
}

export class GetNodesSuccess implements Action {
  readonly type = NodeActionType.GET_NODES_SUCCESS;
  constructor(public payload: Node[]) { }
}

export class GetNodesFail implements Action {
  readonly type = NodeActionType.GET_NODES_FAIL;
  constructor(public payload: any) { }
}

export type NodeAction = GetNodes | GetNodesSuccess | GetNodesFail;
