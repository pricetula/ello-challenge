import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../gql/__generated__/graphql"
import BookItem from "./BookItem"
import { useAppContext } from '../context/AppContext';

export interface BookListProps {
    books: Book[]
    loading: boolean
}

export default function BookList({ books, loading }: BookListProps) {
    const { setAppState } = useAppContext()
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event?.key === 'k' && event?.metaKey) {
                setAppState({ openSearchBox: true })
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <Grid
            container
            paddingTop={16}
            paddingLeft={5}
            paddingRight={5}
            spacing={4}
        >
            {books.map((book) => (
                <BookItem book={book} />
            ))}
        </Grid>
    )
}