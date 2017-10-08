import React from 'react'

class Events extends React.Component {
  render () {
    const { events } = this.props
    return (
      <div>
        <h1 className='title'>Tapahtumat</h1>
        {events.map(event => (
          <div className='box content'>
            <h2 className='title is-size-6'>{event.summary}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default Events
