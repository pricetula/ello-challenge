import { gql } from '../__generated__/gql'

export const GET_BOOKS = gql(`
query GetBooksQuery {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
`);