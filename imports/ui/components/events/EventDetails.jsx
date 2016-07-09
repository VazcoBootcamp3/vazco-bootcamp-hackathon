import React, { Component, PropTypes } from 'react'

export default class EventDetails extends Component {
  static defaultProps = {
    name: 'Event name',
    organizer: 'Event organizer',
    date: 'Event date',
    place: 'Event place',
    description: 'Event description',
  }

  render() {
    const { name, organizer, date, place, description } = this.props

    return (
      <div>
        <p>Name: {name}</p>
        <p>Organizer: {organizer}</p>
        <p>Date: {date}</p>
        <p>Place: {place}</p>
        <p>Description: {description}</p>
      </div>
    )
  }
}
