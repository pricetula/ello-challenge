/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']['output']>;
  coverPhotoURL?: Maybe<Scalars['String']['output']>;
  readingLevel?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  searchBooks?: Maybe<Array<Maybe<Book>>>;
};


export type QuerySearchBooksArgs = {
  input: SearchTermInput;
};

export type SearchTermInput = {
  term: Scalars['String']['input'];
};

export type GetBooksQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQueryQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', author?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null, title?: string | null } | null> | null };

export type SearchBooksQueryQueryVariables = Exact<{
  input: SearchTermInput;
}>;


export type SearchBooksQueryQuery = { __typename?: 'Query', searchBooks?: Array<{ __typename?: 'Book', author?: string | null, coverPhotoURL?: string | null, readingLevel?: string | null, title?: string | null } | null> | null };


export const GetBooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooksQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhotoURL"}},{"kind":"Field","name":{"kind":"Name","value":"readingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetBooksQueryQuery, GetBooksQueryQueryVariables>;
export const SearchBooksQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchBooksQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchTermInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"coverPhotoURL"}},{"kind":"Field","name":{"kind":"Name","value":"readingLevel"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<SearchBooksQueryQuery, SearchBooksQueryQueryVariables>;