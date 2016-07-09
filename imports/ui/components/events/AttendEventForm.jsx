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
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="name">Your name</label>
              <input id="name" type="text" value={this.state.name} onChange={this.handleNameChange} />
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn">I'm attending!</button>
          </div>
        </form>
      </div>
    )
  }
}
