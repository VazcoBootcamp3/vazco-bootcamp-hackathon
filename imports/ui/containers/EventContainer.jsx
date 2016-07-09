import React, { Component, PropTypes } from "react"
import { Meteor } from "meteor/meteor"
import TrackerReact from "meteor/ultimatejs:tracker-react"

import EventsList from "/imports/api/events/events"

@TrackerReact
export default class EventContainer extends Component {
  static propTypes = {

    children: PropTypes.object.isRequired
  }

  state = {
    subscription: {
      events: Meteor.subscribe('single-event', this.props.eventId)
    }
  }

  componentWillUnmount() {
    this.state.subscription.events.stop()
  }

  meteorData() {
    return {
      event: EventsList.find({}).fetch()[0],
    }
  }

  render() {
    return (
      <div>{React.cloneElement(this.props.children, { event: this.meteorData().event })}</div>
    )
  }
}
