import {
    Box,
    Paper,
    Button,
    InputBase,
    IconButton,
} from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';

import { SEARCH_CITY_PLACEHOLDER_LABEL, DISPLAY_WEATHER_LABEL } from '../../utils/constants';

import './SearchBox.css';

const SearchBox = props => {
    return (
        <Box className='search_box'>
            <Paper component='form' sx={{ display: 'flex' }} onSubmit={props.onSubmit}>
                <IconButton type='submit'>
                    <SearchIcon />
                </IconButton>
                <InputBase
                    placeholder={SEARCH_CITY_PLACEHOLDER_LABEL}
                    sx={{ flexGrow: 1 }}
                    onChange={props.onChange}
                    value={props.value}
                />
            </Paper>
            <Button size='large' variant='contained' onClick={props.onSubmit}>{DISPLAY_WEATHER_LABEL}</Button>
        </Box>
    );
};

export default SearchBox;