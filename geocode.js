const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoidHJpZGlwLW1pdHJhIiwiYSI6ImNqenB2M3FocDA5NGkzZHMxajdsMWJ5OWcifQ.MFGDRT4RZlGGDU1IMeNpXQ'
    request({url : url, json : true}, (error, response) => {
        callback(undefined, {longitude : response.body.features[0].center[0],latitude : response.body.features[0].center[1]})
    }) 
}

module.exports = geocode