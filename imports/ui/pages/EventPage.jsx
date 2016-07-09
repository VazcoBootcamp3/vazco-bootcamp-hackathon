import React, { Component } from 'react'

export default class EventPage extends Component {
  render() {
    return (
      <div>
        EventPage {this.props.params.eventId}
      </div>
    )
  }
}
