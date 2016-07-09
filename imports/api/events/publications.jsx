import { Meteor } from 'meteor/meteor';
import EventList from './events';

Meteor.publish('events-list', function () {
    return EventList.find({}, { fields: {
        name: 1,
        owner: 1,
        date: 1,
        place: 1,
    }});
});

Meteor.publish('single-event', function (id) {
    const currentEvent = id;
    return EventList.find({_id: currentEvent});
});