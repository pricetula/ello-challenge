import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Book } from "../../gql/__generated__/graphql";
import { useReadingListStore } from '../../state/readingList';

export interface SearchResultItemProps {
    book: Book;
}

export default function SearchResultItem({ book }: SearchResultItemProps) {
    const addBooks = useReadingListStore((state) => state.addBooks)
    const handleAdd = (book: Book) => {
        addBooks([book])
    }
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {
                    (book.coverPhotoURL && <img width="50" height="50" src={book.coverPhotoURL} />) ||
                    (!book.coverPhotoURL && <Box sx={{ width: 50, height: 50, bgcolor: 'grey.300', mr: 2 }} />)
                }
                <Box>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="subtitle1">{book.author}</Typography>
                </Box>
            </Box>
            <Button variant="contained" color="primary" onClick={() => handleAdd(book)}>Add</Button>
        </Box>
    )
}