import { 
    Box, 
    Typography, 
} from '@mui/material';

const User = props => {
    return (
        <Box>
            <Typography component='div' variant='h6' align='center' sx={{ marginBottom: '20px' }}>John Smith</Typography>
            <Typography component='div' variant='h6' align='center'>github</Typography>
        </Box>
    );
};

export default User;