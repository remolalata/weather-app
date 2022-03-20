const axios = require('axios');

const { WEATHER_API_URL, CITY_NOT_FOUND } = require('../../utils/constants');

const getWeather = (req, res) => {
    const city = req.query.city;
    const url = WEATHER_API_URL.replace('%%cityName%%', city).replace('%%apiKey%%', process.env.WEATHER_API_KEY);

    axios.get(url)
        .then(result => {
            res.json({
                status: 200,
                result: result.data
            })
        })
        .catch(() => {
            res.json({
                status: 404,
                message: CITY_NOT_FOUND
            })
        })
}

module.exports = {
    getWeather
}