import Box from "@mui/material/Box";
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
import Typography from "@mui/material/Typography";
import { Book } from "../../gql/__generated__/graphql";
import { useReadingListStore } from '../../state/readingList';

/**
 * SearchResultItemProps interface that defines the props for the SearchResultItem component.
 * @param {Book} book - The book object.
 */
export interface SearchResultItemProps {
    book: Book;
}

/**
 * SearchResultItem component that displays a single book item from the search result.
 * @param {SearchResultItemProps} props - The props for the component.
 * @returns {JSX.Element} SearchResultItem component.
 */
export default function SearchResultItem({ book }: SearchResultItemProps) {
    // addBooks function used to add books to readingList state
    const addBooks = useReadingListStore((state) => state.addBooks)
    // handleAdd function used to add a single book to readingList state
    const handleAdd = (book: Book) => {
        addBooks([book])
    }
    return (
        <Grid container flexWrap="nowrap" component="div" height={100} marginBottom={2} gap={1}>
            <Grid width="20%">
                {
                    (book.coverPhotoURL && <img width="80" height="80" src={book.coverPhotoURL} />) ||
                    (!book.coverPhotoURL && <Box sx={{ width: 80, height: 80, bgcolor: 'grey.300' }} />)
                }
            </Grid>
            <Grid flexGrow={1} width="40%">
                <Grid container direction="column" gap={2}>
                    <Typography component="b" color="secondary.main">{book.title}</Typography>
                    <Typography variant="caption" color="secondary.main">
                        by <b>{book.author}</b>
                    </Typography>
                </Grid>
            </Grid>
            <Grid width="10%">
                <IconButton color="primary" onClick={() => handleAdd(book)}><AddIcon /></IconButton>
            </Grid>
        </Grid>
    )
}