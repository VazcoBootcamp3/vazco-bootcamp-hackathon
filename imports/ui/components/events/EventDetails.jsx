import React, { Component, PropTypes } from 'react'

export default class EventDetails extends Component {
  render() {
    if (this.props.event) {
      const { name, owner, date, place, description } = this.props.event

      return (
        <div>
          <p>Name: {name}</p>
          <p>Organizer: {owner}</p>
          <p>Date: {date.toLocaleString()}</p>
          <p>Place: {place}</p>
          <p>Description: {description}</p>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}
