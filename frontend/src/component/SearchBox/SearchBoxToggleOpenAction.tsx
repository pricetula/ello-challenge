import Button from '@mui/material/Button';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext } from '../../context/AppContext';

/**
 * SearchBox component that displays the search box.
 * @returns {JSX.Element} SearchBox component.
 */
export default function SearchBox() {
    // get the appState and setAppState from AppContext to allow for setting the openSearchBox state which is global
    const { setAppState } = useAppContext()

    // function to handle the click event to open the search box
    const handleClick = () => {
        setAppState({ openSearchBox: true })
    }

    return (
        <Button
            onClick={handleClick}
            startIcon={<SearchIcon />}
            variant="outlined"
            size='small'
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <span>Find books</span>
            <span style={{ marginLeft: 30, display: 'flex', alignItems: 'center' }}>
                <KeyboardCommandKeyIcon sx={{ width: 14, lineHeight: 1 }} />K
            </span>
        </Button>
    );
}
