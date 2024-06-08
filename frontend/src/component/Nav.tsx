import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logoElloSRC from '../assets/logoEllo.svg';

export default function Nav() {
    return (
        <AppBar color="default" position="fixed" component="nav">
            <Toolbar>
                <img src={logoElloSRC} alt="ello-logo" width={40} />
            </Toolbar>
        </AppBar>
    );
}