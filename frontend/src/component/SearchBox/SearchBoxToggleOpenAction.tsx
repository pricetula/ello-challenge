import Button from '@mui/material/Button';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import SearchIcon from '@mui/icons-material/Search';
import { useAppContext } from '../../context/AppContext';

export default function SearchBox() {
    const { setAppState } = useAppContext()

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
            <span style={{ marginLeft: 26, display: 'flex', alignItems: 'center' }}>
                <KeyboardCommandKeyIcon sx={{ width: 12, lineHeight: 1 }} />K
            </span>
        </Button>
    );
}
