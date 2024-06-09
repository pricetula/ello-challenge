import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import type { Book } from "../gql/__generated__/graphql"

export interface BookProps {
    book: Book
}

export default function BookItem({ book }: BookProps) {
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
                <CardActions>
                    <Button
                        component="label"
                        role="button"
                        variant="text"
                        size='small'
                        startIcon={<ClearIcon />}
                    >
                        Upload file
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}