import React, { Component, PropTypes } from 'react'

export default class EventAttendeesList extends Component {

  render() {
    if (this.props.event) {
      const { users } = this.props.event

      return (
        <p>
          Attendees: {users.join(', ')}
        </p>
      )
    } else {
      return <div></div>
    }
  }
}
