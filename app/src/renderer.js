const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./components/App').default

const events = require('./integrations/calendar')

Promise.all([events()]).then(([events]) => {
  console.log(events)
  ReactDOM.render(<App events={events} />, document.querySelector('.app'))
})
