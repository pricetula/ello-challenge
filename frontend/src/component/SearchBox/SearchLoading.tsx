import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

/**
 * SearchLoading component that displays a loading spinner and message when searching for books.
 * @returns {JSX.Element} SearchLoading component.
 */
export default function SearchLoading() {
    return (
        <Grid container gap={2} width="100%" height="100%" justifyContent="center" alignItems="center">
            <CircularProgress />
            <Typography color="secondary.light" variant="h6" component="p">
                finding books 📚...
            </Typography>
        </Grid>
    )
}