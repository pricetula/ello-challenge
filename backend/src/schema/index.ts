export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  input SearchTermInput {
    term: String! # Make search term mandatory
  }

  type Query {
    books: [Book]
    searchBooks(input: SearchTermInput!): [Book]
  }
`;
