import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../gql/queries/books';

export default function Dashboard() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <h1>Dashboard</h1>
      <ul>
        {data.books.map((book: any) => (
          <li key={book.title}>
            <img src={book.coverPhotoURL} alt={book.title} width={20} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.readingLevel}</p>
          </li>
        ))}
      </ul>
    </>
  )
}