import { useMemo, useState } from "react"
import Backdrop from "@mui/material/Backdrop"
import { useQuery } from "@apollo/client"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import InputAdornment from "@mui/material/InputAdornment"
import SearchIcon from "@mui/icons-material/Search"
import TextField from "@mui/material/TextField"
import { SEARCH_BOOKS } from "../../gql/queries/books"
import { useAppContext } from "../../context/AppContext"
import { useDerivedReadingBookKeys } from "../../hook/addedBookKeys"
import { getBookKey } from "../../state/readingList"
import SearchResultItem from "./SearchResultItem"
import SearchEmpty from "./SearchEmpty"
import SearchLoading from "./SearchLoading"

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "90%",
    maxWidth: 500,
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
}

const resultStyle = {
    width: "100%",
    height: 300,
    maxHeight: 300,
    overflow: "auto",
    marginTop: 16,
}

/**
 * SearchBox component that displays search box modal.
 * @returns {JSX.Element} SearchBox component.
 */
export default function SearchBox() {
    // search term state that will be used to search for books
    const [searchTerm, setSearchTerm] = useState<string>("")
    // get the appState and setAppState from AppContext to allow for setting the openSearchBox state which is global
    const { setAppState, appState } = useAppContext()
    // get the list of added book keys
    const addedBookKeys = useDerivedReadingBookKeys()
    // useQuery hook to search for books
    const { loading, error, data } = useQuery(
        SEARCH_BOOKS,
        {
            variables: { input: { term: searchTerm } },
            // skip the query if there is no search term
            skip: !searchTerm,
        }
    )

    // function to close the modal by setting openSearchBox global state to false
    const handleClose = () => {
        setAppState({ openSearchBox: false })
    }

    // filter the search results to exclude books that have already been added
    const bookResults = useMemo(() => {
        return data?.searchBooks?.filter(
            (book: any) => !addedBookKeys?.includes?.(getBookKey(book))
        ) || []
    }, [data, addedBookKeys])

    if (error) console.error(error)

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
                        placeholder="Search books"
                        variant="standard"
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon style={{ fontSize: 16 }} /></InputAdornment>,
                        }}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Box style={resultStyle}>
                        {
                            (loading && <SearchLoading />) ||
                            (bookResults?.length && bookResults?.length > 0 && bookResults?.map?.((book) => (
                                book && <SearchResultItem key={getBookKey(book)} book={book}/>
                            ))) ||
                            (<SearchEmpty searchTerm={searchTerm} addedBookKeys={addedBookKeys} />)
                        }
                    </Box>
                </Box>
            </Fade>
        </Modal>
    )
}

