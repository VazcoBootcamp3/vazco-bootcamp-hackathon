import React, { Component } from 'react'

import EventContainer from "../containers/EventContainer"

import EventDetails from "../components/events/EventDetails"
import AttendEventForm from "../components/events/AttendEventForm"

export default class EventPage extends Component {
  render() {
    return (
      <div>
        <h1>EventPage</h1>
        <EventContainer {...this.props.params} >
          <EventDetails />
        </EventContainer>
        <EventContainer {...this.props.params} >
          <AttendEventForm />
        </EventContainer>
      </div>
    )
  }
}
