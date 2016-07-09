import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'

@withRouter
export default class AttendEventForm extends Component {
  state = {
    name: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    Meteor.call('event.join', {eventId: this.props.event._id, userId: this.state.name}, (err, res) => {
      if (err) {
        Materialize.toast(err.reason, 4000);
      } else {
        alert('ATTENDING!')
        this.props.router.push('/admin/events/new')
      }
    });
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
