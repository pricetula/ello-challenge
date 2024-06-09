import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useAppContext } from '../../context/AppContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 500,
    minHeight: 300,
    width: "90%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function SearchBox() {
    // get the appState and setAppState from AppContext
    const { setAppState, appState } = useAppContext()

    // function to close the modal by setting openSearchBox state to false
    const handleClose = () => {
        setAppState({ openSearchBox: false })
    }

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
                    />
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
}
