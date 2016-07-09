import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'

@withRouter
export default class NewEventForm extends Component {
  state = {
    name: '',
    organizer: '',
    date: '',
    place: '',
    description: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    this.props.router.push('/admin/events/eventId')
  }

  // handleInputChange = (ev) => {
  //   this.setState()
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
