/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const getModelNoteConnection = /* GraphQL */ `
  query GetModelNoteConnection($id: ID!) {
    getModelNoteConnection(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listModelNoteConnections = /* GraphQL */ `
  query ListModelNoteConnections(
    $filter: ModelModelNoteConnectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelNoteConnections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
