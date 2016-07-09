import React, { Component, PropTypes } from 'react'
import { Meteor } from 'meteor/meteor'
import _ from 'lodash'

export default class NewEventForm extends Component {
  state = {
    name: '',
    organizer: '',
    date: '',
    place: '',
    description: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    console.log('test')
  }

  // handleInputChange = (ev) => {
  //   this.setState()
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
