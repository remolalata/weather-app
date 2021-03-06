import { 
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    Button
} from '@mui/material';
import { Cloud } from '@mui/icons-material';

import { validateObj } from '../../utils/utils';
import { MAIN_HEADER, LOGOUT_LABEL } from '../../utils/constants';

import './Header.css';

const Header = props => {
    const title = props.title ? props.title : MAIN_HEADER;

    return (
        <Box className='header'>
            <AppBar position="static">
                <Toolbar>
                    <Cloud />
                    <Typography variant="h4" component="div">{title}</Typography>
                    {validateObj(props.userData) && <Button size='large' variant='outlined' onClick={props.onLogout}>{LOGOUT_LABEL}</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;