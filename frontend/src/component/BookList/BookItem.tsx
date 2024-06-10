import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../../gql/__generated__/graphql"
import { useReadingListStore, getBookKey } from '../../state/readingList';
import { useMemo } from 'react';

/**
 * BookProps interface that defines the props for the BookItem component.
 * @param {Book} book - The book object.
 */
export interface BookProps {
    book: Book
}

/**
 * BookItem component that displays a single book item.
 * @param {BookProps} props - The props for the component.
 * @returns {JSX.Element} BookItem component.
 */
export default function BookItem({ book }: BookProps) {
    // favouriteBookKeys used to get the list of favourite book keys added from the readingList state
    const favouriteBookKeys = useReadingListStore((state) => state.favouriteBookKeys)
    // removeBook function used to remove a book from the readingList state
    const removeBook = useReadingListStore((state) => state.removeBook)
    // setFavouriteBook function used to set a book as favourite in the readingList state
    const setFavouriteBook = useReadingListStore((state) => state.setFavouriteBook)
    // removeFavouriteBook function used to remove a book from the favourite list in the readingList state
    const removeFavouriteBook = useReadingListStore((state) => state.removeFavouriteBook)

    // isFavouriteBook used to check if the book is in the favourite list
    const isFavouriteBook = useMemo(() => favouriteBookKeys.includes(getBookKey(book)), [favouriteBookKeys, book])

    // handleRemove function used to remove a book from the readingList state
    const handleRemove = (b: Book) => {
        removeBook(getBookKey(b))
    }
    // handleSetOrRemoveFavourite function used to set or remove a book from the favourite list in the readingList state
    const handleSetOrRemoveFavourite = (b: Book) => {
        if (isFavouriteBook) {
            removeFavouriteBook(getBookKey(b))
        } else {
            setFavouriteBook(getBookKey(b))
        }
    }
    return (
        <Grid xs={12} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={book.coverPhotoURL || ''}
                    title={`${book.title}-image`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                        {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {book.author}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: "flex", justifyContent: "space-between"}}>
                    <Button
                        component="label"
                        role="button"
                        variant="text"
                        size='small'
                        color={isFavouriteBook ? 'error' : 'primary'}
                        startIcon={isFavouriteBook ? <HeartBrokenIcon /> : <FavoriteIcon />}
                        onClick={() => handleSetOrRemoveFavourite(book)}
                    >
                        {`${isFavouriteBook ? 'remove' : 'set'} favourite`}
                    </Button>
                    <IconButton
                        role="button"
                        size='small'
                        color='error'
                        onClick={() => handleRemove(book)}
                    >
                        <ClearIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}