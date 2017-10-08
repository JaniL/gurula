const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/App').default

const events = require('./integrations/calendar')
const jobs = require('./integrations/jobs')

Promise.all([events(), jobs()]).then(([events, jobs]) => {
  ReactDOM.render(<App events={events} jobs={jobs} />, document.querySelector('.app'))
})
