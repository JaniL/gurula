const axios = require('axios')
const JOBS_URL = 'http://jobs-back.tko-aly.fi/jobs.json'

module.exports = () =>
  axios.get(JOBS_URL)
    .then(res => res.data)
