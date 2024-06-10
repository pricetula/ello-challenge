import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

/**
 * SearchEmptyProps interface that defines the props of the SearchEmpty component.
 * @param {string} searchTerm - The search term. will help modify the message displayed.
 * @param {string[]} addedBookKeys - The list of added book keys. will help modify the message displayed.
 */
export interface SearchEmptyProps {
    searchTerm: string;
    addedBookKeys?: string[];
}

/**
 * SearchEmpty component that displays message when no books are found.
 * @param {SearchEmptyProps} props - The props of the component.
 * @returns {JSX.Element} SearchEmpty component.
 */
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