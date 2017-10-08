import React from 'react'

const Events = require('./sections/Events').default

class App extends React.Component {
  render () {
    const { events } = this.props
    return (
      <div>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                Tähän päivämäärä & kello
              </h1>
            </div>
          </div>
        </section>
        <div className='container'>
          <div className='tile is-ancestor'>
            <div className='tile is-parent is-primary'>
              <div>
                <h1 className='title'>Sarake</h1>
              </div>
            </div>
            <div className='tile is-parent'>
              <Events events={events} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
