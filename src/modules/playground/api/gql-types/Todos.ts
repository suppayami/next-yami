/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Todos
// ====================================================

export interface Todos_todos {
  __typename: "Todo";
  id: string;
  task: string;
}

export interface Todos {
  todos: (Todos_todos | null)[] | null;
}
