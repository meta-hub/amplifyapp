/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createModelNoteConnection = /* GraphQL */ `
  mutation CreateModelNoteConnection(
    $input: CreateModelNoteConnectionInput!
    $condition: ModelModelNoteConnectionConditionInput
  ) {
    createModelNoteConnection(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateModelNoteConnection = /* GraphQL */ `
  mutation UpdateModelNoteConnection(
    $input: UpdateModelNoteConnectionInput!
    $condition: ModelModelNoteConnectionConditionInput
  ) {
    updateModelNoteConnection(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteModelNoteConnection = /* GraphQL */ `
  mutation DeleteModelNoteConnection(
    $input: DeleteModelNoteConnectionInput!
    $condition: ModelModelNoteConnectionConditionInput
  ) {
    deleteModelNoteConnection(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
