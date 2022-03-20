import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

import { setWeatherData, deleteWeatherData } from '../../store/Weather/weather.actions';

import { validateObj, getFirstElementInArray, timeConverter } from '../../utils/utils';
import { BACK_LABEL } from '../../utils/constants';

import './Weather.css';

const Weather = props => {

    const { weather, deleteWeatherData } = props

    const [weatherData, setWeatherData] = useState({})

    const backHandler = () => {
        deleteWeatherData();
    }

    console.log(weatherData)

    useEffect(() => {
        if (validateObj(weather)) {
            setWeatherData(prevState => {
                return {
                    ...prevState,
                    date: weather.dt ? timeConverter(weather.dt) : null,
                    temp: weather.main && weather.main.temp ? weather.main.temp : null,
                    description: weather.weather ? getFirstElementInArray(weather.weather).description : null,
                    main: weather.weather ? getFirstElementInArray(weather.weather).main : null,
                    pressure: weather.main && weather.main.pressure ? weather.main.pressure : null,
                    humidity: weather.main && weather.main.humidity ? weather.main.humidity : null
                }
            })
        }
    }, [weather]);

    return (
        <Container
            maxWidth='md'
            sx={{
                marginTop: '50px'
            }}
        >
            <Box className='weather_screen'>
                <TableContainer component={Paper}>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell>Date (mm/dd/yyyy)</TableCell>
                                {weatherData.temp && <TableCell>Temp (F)</TableCell>}
                                {weatherData.description && <TableCell>Description</TableCell>}
                                {weatherData.main && <TableCell>Main</TableCell>}
                                {weatherData.pressure && <TableCell>Pressure</TableCell>}
                                {weatherData.humidity && <TableCell>Humidity</TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                {weatherData.date && <TableCell>{weatherData.date}</TableCell>}
                                {weatherData.temp && <TableCell>{weatherData.temp}</TableCell>}
                                {weatherData.description && <TableCell>{weatherData.description}</TableCell>}
                                {weatherData.main && <TableCell>{weatherData.main}</TableCell>}
                                {weatherData.pressure && <TableCell>{weatherData.pressure}</TableCell>}
                                {weatherData.humidity && <TableCell>{weatherData.humidity}</TableCell>}
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box className='weather__page--back-button-box'>
                    <Button size='large' variant='contained' onClick={backHandler}>{BACK_LABEL}</Button>
                </Box>
            </Box>
        </Container>
    );
};

const mapStateToProps = state => ({
    weather: state.weather
});

const mapDispatchToProps = dispatch => ({
    setWeatherData: data => dispatch(setWeatherData(data)),
    deleteWeatherData: () => dispatch(deleteWeatherData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);