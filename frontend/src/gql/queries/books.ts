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

export const SEARCH_BOOKS = gql(`
  query SearchBooksQuery($input: SearchTermInput!) {
    searchBooks(input: $input) {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`);