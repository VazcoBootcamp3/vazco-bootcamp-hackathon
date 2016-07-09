import React, { Component } from 'react'

import EventDetails from "../components/events/EventDetails"
import EventAttendeesList from "../components/events/EventAttendeesList"

export default class ManageEventPage extends Component {
  render() {
    return (
      <div>
        <h1>Manage event: {this.props.params.eventId}</h1>
        <EventDetails />
        <EventAttendeesList />
      </div>
    )
  }
}
