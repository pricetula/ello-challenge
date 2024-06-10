import { useMemo, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { SEARCH_BOOKS } from '../../gql/queries/books';
import { useAppContext } from '../../context/AppContext';
import { useDerivedReadingBookKeys } from '../../hook/addedBookKeys';
import { getBookKey } from '../../state/readingList';
import SearchResultItem from './SearchResultItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: "90%",
    maxWidth: 500,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const resultStyle = {
    width: "100%",
    Height: 400,
    overflow: "auto",
};

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState<string>("")
    // get the appState and setAppState from AppContext
    const { setAppState, appState } = useAppContext()
    const addedBookKeys = useDerivedReadingBookKeys()
    const { loading, error, data } = useQuery(
        SEARCH_BOOKS,
        {
            variables: { input: { term: searchTerm } },
            skip: !searchTerm,
        }
    );

    // function to close the modal by setting openSearchBox state to false
    const handleClose = () => {
        setAppState({ openSearchBox: false })
    }

    const bookResults = useMemo(() => {
        return data?.searchBooks?.filter(
            (book: any) => !addedBookKeys?.includes?.(getBookKey(book))
        ) || []
    }, [data, addedBookKeys])

    if (error) return <p>Error : {error.message}</p>;

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={appState.openSearchBox}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={appState.openSearchBox}>
                <Box sx={style}>
                    <TextField
                        id="standard-basic"
                        placeholder="Find book to add in your reading list"
                        variant="standard"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon style={{ fontSize: 16 }} /></InputAdornment>,
                        }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Box sx={resultStyle}>
                        {
                            (loading && <Typography>Loading...</Typography>) ||
                            (bookResults?.length && bookResults?.length > 0 && bookResults?.map?.((book) => (
                                book && <SearchResultItem key={getBookKey(book)} book={book}/>
                            ))) ||
                            (<Typography>No books found</Typography>)
                        }
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

