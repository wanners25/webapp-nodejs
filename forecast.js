const request = require('request')

const forecast = (lat, lon, callback) => {
const url = 'https://api.darksky.net/forecast/16c1bc15493bdbcd858818abf7718c76/' + lat + ',' + lon
 request({url : url, json : true}, (error, Response) => {
     if (error) {
         console.log('Unable to connect to Weather services')
     }else if (Response.body.error) {
         console.log('Bad response')
     }else {
         callback(undefined, {time : Response.body.currently.time, temp : Response.body.currently.temperature})
     }
 })
}


module.exports = forecast