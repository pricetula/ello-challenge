import { useEffect, useMemo } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../../gql/__generated__/graphql"
import BookItem from "./BookItem"
import { useAppContext } from '../../context/AppContext';
import { useReadingListStore } from '../../state/readingList';
import BookListEmpty from './BookListEmpty';

/**
 * BookList component that displays a list of books.
 * @returns {JSX.Element} BookList component.
 */
export default function BookList() {
    // setAppState function used to set the app state
    const { setAppState } = useAppContext()
    // bookCollection used to get the list of books added from the readingList state
    const bookCollection = useReadingListStore((state) => state.books)
    // favouriteBookKeys used to get the list of favourite book keys added from the readingList state
    const favouriteBookKeys = useReadingListStore((state) => state.favouriteBookKeys)
    // books used to get the list of books to display
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
    // useEffect hook to listen for the meta+k key combination to open the search box
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