
const getWeather = require("./utils/forecast")
const geocode = require("./utils/geocode")

const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
   res.send('<h1>Hello, go to weather..</h1><p>this is first p</p><p>Second paragrpah</p><p>Second paragrpah 333</p>')
})

app.get('/weather', (req, res) => {

   if (!req.query.location)
      return res.send({ "error": "must provide location" });

   const location = req.query.location;

   geocode(location, (error, data) => {
      if (error) {
         console.log(error);
         return res.send({ "error": "this is error.." });
      }
      else {
         //some changes

         const lat = data.center[1];
         const lon = data.center[0];

         console.log(lat);
         console.log(lon);

         getWeather(lat, lon, (error, data) => {
            res.send(data);
         });
      }

   });


})


app.get('/help', (req, res) => {
   res.send('Help!')
})


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
