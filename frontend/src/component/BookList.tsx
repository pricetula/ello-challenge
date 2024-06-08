import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../gql/__generated__/graphql"
import BookItem from "./BookItem"

export interface BookListProps {
    books: Book[]
    loading: boolean
}

export default function BookList({books, loading}: BookListProps) {
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <Grid container spacing={2} style={{ paddingTop: 180 }}>
            {books.map((book) => (
                <BookItem book={book} />
            ))}
        </Grid>
    )
}