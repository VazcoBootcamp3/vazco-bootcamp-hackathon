import React, { Component, PropTypes } from 'react'

export default class EventAttendeesList extends Component {
  static defaultProps = {
    attendees: ['Attendee 1', 'Attendee 2']
  }

  render() {
    return (
      <p>
        Attendees: {this.props.attendees.join(', ')}
      </p>
    )
  }
}
