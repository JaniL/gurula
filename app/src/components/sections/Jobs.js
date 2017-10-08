import React from 'react'

class Jobs extends React.Component {
  render () {
    const { jobs } = this.props
    return (
      <div>
        <h1 className='title'>Työpaikat</h1>
        {jobs.map(job => (
          <div className='box content'>
            <h2 className='title is-size-6'>{job.title}</h2>
          </div>
        ))}
      </div>
    )
  }
}

export default Jobs
