import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'

@withRouter
export default class NewEventForm extends Component {
  state = {
    name: '',
    owner: '',
    date: '',
    place: '',
    description: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    Meteor.call('event.create', this.state, (err, res) => {
      if (err) {
        Materialize.toast(err.reason, 4000);
      } else {
        this.props.router.push(`/admin/events/${res}`)
      }
    });
  }

  componentDidMount() {
    const input = $(this.refs.datepicker).pickadate()
    const picker = $(input).pickadate('picker')

    picker.on({
      set: ev => { this.setState({ date: new Date(ev.select) }) },
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
              <label htmlFor="owner">Event creator</label>
              <input id='owner' type="text" value={this.state.owner} onChange={this.handleInputChange} />
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
              <label htmlFor="place">Event location</label>
              <input id="place" type="text" value={this.state.place} onChange={this.handleInputChange} />
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
