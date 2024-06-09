import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logoElloSRC from '../assets/logoEllo.svg';
import SearchBoxToggleOpenAction from './SearchBox/SearchBoxToggleOpenAction';

export default function Nav() {
    return (
        <AppBar color="default" position="fixed" component="nav">
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <img src={logoElloSRC} alt="ello-logo" width={40} />
                <SearchBoxToggleOpenAction />
            </Toolbar>
        </AppBar>
    );
}