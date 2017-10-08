const ICS_URL = 'http://ics.tko-aly.fi/'
const axios = require('axios')
const ical = require('ical')
const R = require('ramda')

module.exports = () =>
  axios.get(ICS_URL)
    .then(res => ical.parseICS(res.data))
    .then(R.values())
    .then(R.filter(R.propEq('type', 'VEVENT')))
    .then(R.sortBy(R.prop('start')))
