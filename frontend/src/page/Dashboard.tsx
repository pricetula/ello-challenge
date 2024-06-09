import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../gql/queries/books';
import BookList from '../component/BookList';
import type { Book } from '../gql/__generated__/graphql';

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (error) return <p>Error : {error.message}</p>;
  return (
      <BookList loading={loading} books={data?.books as Book[] || []} />
  )
}