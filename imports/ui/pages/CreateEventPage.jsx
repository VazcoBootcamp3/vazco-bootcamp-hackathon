import React, { Component } from 'react'

import NewEventForm from "../components/events/NewEventForm"

export default class CreateEventPage extends Component {
  render() {
    return (
      <div>
        <h1>Create new event</h1>
        <NewEventForm />
      </div>
    )
  }
}
