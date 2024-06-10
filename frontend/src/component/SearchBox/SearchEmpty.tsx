import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export interface SearchEmptyProps {
    searchTerm: string;
    addedBookKeys?: string[];
}

export default function SearchEmpty({ searchTerm, addedBookKeys }: SearchEmptyProps) {
    return (
        <Grid container direction="column" gap={2} width="100%" height="100%" justifyContent="center" alignItems="center">
            {
                searchTerm
                    ? (
                        <Typography color="secondary.light" variant="h6" component="p">
                            No {addedBookKeys && addedBookKeys?.length > 0 ? 'more ' : ''}books found for "{searchTerm}" 😢
                        </Typography>
                    ) : (
                        <>
                            <Typography color="secondary.light" variant="h6" component="p">
                                Search for books 📚
                            </Typography>
                            <Typography color="secondary.light" variant="h6" component="p">
                                to add to your reading list 📖
                            </Typography>
                        </>
                    )
            }
        </Grid>
    )
}