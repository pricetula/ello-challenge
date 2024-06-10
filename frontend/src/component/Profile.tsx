import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { useReadingListStore } from '../state/readingList';
import { useMemo } from 'react';

/**
 * profile component that displays the name of the teacher, a count of all books added and list of avatars for their favourite books added.
 * @returns {JSX.Element} Profile component.
 */
export function Profile() {
    const favouriteBookKeys = useReadingListStore((state) => state.favouriteBookKeys)
    const bookCollection = useReadingListStore((state) => state.books)
    const totalBooksAdded = useMemo(() => {
        return Object.keys(bookCollection).length
    }, [bookCollection])
    return (
        <Box paddingTop={12} paddingX={4} paddingBottom={4}>
            <Grid container direction="column" justifyContent="end" spacing={2}>
                <Grid item >
                    <Typography variant="h5" component="h2" fontWeight="bold" color="secondary">
                        Jane Doe
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography color="secondary.light">
                                {
                                    totalBooksAdded
                                        ? (
                                            <span><b>{totalBooksAdded}</b> Books Added</span>
                                        ) : (
                                            <span>No Books Added</span>
                                        )
                                }
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <AvatarGroup color='red' total={favouriteBookKeys?.length}>
                                {
                                    favouriteBookKeys?.slice(0, 4).map((bookKey) => {
                                        const book = bookCollection[bookKey]
                                        return (
                                            <Avatar alt={book?.title + ''} src={book?.coverPhotoURL + ''} />
                                        )
                                    })
                                }
                            </AvatarGroup>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}