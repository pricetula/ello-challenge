import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../gql/__generated__/graphql"

export interface BookProps {
    book: Book
}

export default function BookItem({ book }: BookProps) {
    return (
        <Grid xs={12} md={4} lg={3}>
            {book.title} by {book.author}
        </Grid>
    )
}