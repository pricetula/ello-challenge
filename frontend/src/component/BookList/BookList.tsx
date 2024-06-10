import { useEffect, useMemo } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../../gql/__generated__/graphql"
import BookItem from "./BookItem"
import { useAppContext } from '../../context/AppContext';
import { useReadingListStore } from '../../state/readingList';
import BookListEmpty from './BookListEmpty';

export default function BookList() {
    const { setAppState } = useAppContext()
    const bookCollection = useReadingListStore((state) => state.books)
    const favouriteBookKeys = useReadingListStore((state) => state.favouriteBookKeys)
    const books = useMemo<Book[]>(
        () => {
            const readingBookKeys = Object.keys(bookCollection).filter(
                (k) => !favouriteBookKeys.includes(k)
            )
            return [
                ...favouriteBookKeys,
                ...readingBookKeys,
            ].map((k) => bookCollection[k])
        },
        [bookCollection, favouriteBookKeys]
    )
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
    return (
        <Grid
            container
            paddingLeft={5}
            paddingRight={5}
            spacing={4}
        >
            {
                (books.length > 0 && books.map((book) => (
                    <BookItem book={book} />
                ))) ||
                (
                    <BookListEmpty />
                )
            }
        </Grid>
    )
}