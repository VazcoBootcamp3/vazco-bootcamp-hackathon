import React, { Component, PropTypes } from 'react'

export default class AttendEventForm extends Component {
  state = {
    name: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    console.log(this.state.name)
    console.log(this.props.eventId)
  }

  handleNameChange = (ev) => {
    this.setState({ name: ev.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameChange}></input>
          <button>I'm attending!</button>
        </form>
      </div>
    )
  }
}
