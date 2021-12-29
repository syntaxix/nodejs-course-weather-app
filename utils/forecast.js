const request = require('request');
const weatherBaseURL = 'http://api.weatherstack.com/current?access_key=02cbc5739e7235554f99b92bf43aca89'

const getWeather = (lat, lon, callback) => {

    const weatherCallUrl = weatherBaseURL + '&query=' + lat + ',' + lon;

    request({ url: weatherCallUrl, json: true }, (error, response, body) => {

        if (error) {
            callback('Faild to connect Weather Forecst Service');
        }
        else {
            callback(undefined, body.current)
        }
    })

}



module.exports = getWeather;