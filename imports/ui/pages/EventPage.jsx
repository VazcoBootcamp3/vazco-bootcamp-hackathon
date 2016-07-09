import React, { Component } from 'react'

import EventDetails from "../components/events/EventDetails"
import AttendEventForm from "../components/events/AttendEventForm"

export default class EventPage extends Component {
  render() {
    return (
      <div>
        <h1>EventPage {this.props.params.eventId}</h1>
        <EventDetails />
        <AttendEventForm {...this.props.params} />
      </div>
    )
  }
}
