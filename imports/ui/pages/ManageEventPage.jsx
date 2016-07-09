import React, { Component } from 'react'

export default class ManageEventPage extends Component {
  render() {
    return (
      <div>
        ManageEventPage {this.props.params.eventId}
      </div>
    )
  }
}
