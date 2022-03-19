import {
    Box,
    Button,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';

import './Weather.css';

import { BACK_LABEL } from '../../utils/constants';

const Landing = () => {

    return (
        <Container
            maxWidth='md'
            sx={{
                marginTop: '50px'
            }}
        >
            <Box className='weather_page'>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Date (mm/dd/yyyy)</TableCell>
                                <TableCell>Temp (F)</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Main</TableCell>
                                <TableCell>Pressure</TableCell>
                                <TableCell>Humidity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>09/01/2020</TableCell>
                                <TableCell>75</TableCell>
                                <TableCell>Sky is clear</TableCell>
                                <TableCell>Clear</TableCell>
                                <TableCell>1023.68</TableCell>
                                <TableCell>100</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box className='weather__page--back-button-box'>
                    <Button size='large' variant='contained'>{BACK_LABEL}</Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Landing;