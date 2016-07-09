import { Meteor } from 'meteor/meteor';
import EventList from './events';

Meteor.publish('single-event', function (id) {
    const currentEvent = id;
    return EventList.find({_id: currentEvent});
});
