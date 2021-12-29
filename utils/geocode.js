const request = require('request');

const geocode = (address, callback) => {

    const geocodURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoieWFuaXZsIiwiYSI6ImNrdmNwdnVqNDBiMGIydm8weXM2dzIyZ2cifQ.nim3Akuxl5nKIMHUddfGxg'
    request({ url: geocodURL, json: true }, function (error, response, body) {
        if (error) {
            callback('Can not connect to Mapbox.', undefined);
        }
        else if (response.body.features.length === 0) {
            callback('No result found for this location. Try another search', undefined);

        } else {
            callback(undefined, { text: response.body.features[0].text, center: response.body.features[0].center });
        }

    });
};

module.exports = geocode;