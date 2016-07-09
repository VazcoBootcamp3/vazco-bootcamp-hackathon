import React, { Component } from 'react'

import EventContainer from "../containers/EventContainer"

import EventDetails from "../components/events/EventDetails"
import EventAttendeesList from "../components/events/EventAttendeesList"

export default class ManageEventPage extends Component {
  render() {
    return (
      <div>
        <h1>Manage event: {this.props.params.eventId}</h1>
        <EventContainer {...this.props.params} >
          <EventDetails />
        </EventContainer>
        <EventContainer {...this.props.params} >
          <EventAttendeesList />
        </EventContainer>
        <a href={`${window.location.host}/events/${this.props.params.eventId}`}>Go to event</a>
      </div>
    )
  }
}
