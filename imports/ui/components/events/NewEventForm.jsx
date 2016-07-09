import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'

@withRouter
export default class NewEventForm extends Component {
  state = {
    name: '',
    organizer: '',
    date: '',
    location: '',
    description: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.router.push('/admin/events/eventId')
  }

  componentDidMount() {
    const input = $(this.refs.datepicker).pickadate()
    const picker = $(input).pickadate('picker')

    picker.on({
      set: ev => { this.setState({ date: ev.select }) },
    })
  }

  handleInputChange = (ev) => {
    ev.preventDefault()
    this.setState({ [ev.target.id]: ev.target.value })
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="name">Event name</label>
              <input id="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="organizer">Event creator</label>
              <input id='organizer' type="text" value={this.state.organizer} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="date">Event date</label>
              <input id="date" type="date" className="datepicker" ref="datepicker" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="location">Event location</label>
              <input id="location" type="text" value={this.state.location} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="description">Event description</label>
              <textarea id="description" className="materialize-textarea" value={this.state.description} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
