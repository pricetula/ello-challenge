import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import SearchBoxToggleOpenAction from '../SearchBox/SearchBoxToggleOpenAction';

/**
 * BookListEmpty component that displays a message when the reading list is empty.
 * @returns {JSX.Element} BookListEmpty component.
 */
export default function BookListEmpty() {
    return (
        <Grid container direction="column" gap={4} width="100%" height={400} justifyContent="center" alignItems="center">
            <Typography color="secondary.main" variant="h6" component="p">
                No books added to your reading list.
            </Typography>
            <Typography color="secondary.main" variant="h6" component="p">
                <Grid container gap={1}>
                    <span>First</span>
                    <span><SearchBoxToggleOpenAction /></span>
                    <span>to get started 💪</span>
                </Grid>
            </Typography>
        </Grid>
    )
}