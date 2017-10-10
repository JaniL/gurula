const axios = require('axios')
const R = require('ramda')

const unicafeApi = axios.create({
  baseURL: 'http://messi.hyyravintolat.fi/publicapi'
})

const restaurants = {
  'Chemicum': 10,
  'Exactum': 11
}

const createRequest = id =>
  unicafeApi.get(`restaurant/${id}`)

module.exports = R.map(createRequest, restaurants)
