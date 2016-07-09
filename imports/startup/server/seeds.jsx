import { Meteor } from 'meteor/meteor';
import { eventCreate, eventJoin } from '/imports/api/events/methods';

import EventsList from '/imports/api/events/events'
const eventsNumber = EventsList.find({}).count();
const createEvent = Meteor.server.method_handlers['event.create'];
const joinEvent = Meteor.server.method_handlers['event.join'];

if(eventsNumber === 0) {
    const event1 = {
        name: 'Opera',
        owner: 'Janusz',
        date: new Date(),
        place: 'opera',
        description: 'Grupa opera',
    };
    const event2 = {
        name: 'Teatr',
        owner: 'John',
        date: new Date(),
        place: 'Capitol',
        description: 'Grupa teatr',
    };
    const event3 = {
        name: 'Kino',
        owner: 'Nick',
        date: new Date(),
        place: 'Nowe Horyzonty',
        description: 'Grupa filmy',
    };

    createEvent.apply( this, [event1] );
    createEvent.apply( this, [event2] );
    createEvent.apply( this, [event3] );

    const users = [ 'Zbigniew', 'Andrzej', 'Mietek', 'Janek'];

    let eventData = EventsList.findOne({ name: event1.name });
    for(const user of users) {
        joinEvent.apply(this, [{
            eventId: eventData._id,
            userId: user,
        }]);
    }

    eventData = EventsList.findOne({ name: event2.name });
    for(const user of users) {
        joinEvent.apply(this, [{
            eventId: eventData._id,
            userId: user,
        }]);
    }

    eventData = EventsList.findOne({ name: event3.name });
    console.log(eventData)
    for(const user of users) {
        joinEvent.apply(this, [{
            eventId: eventData._id,
            userId: user,
        }]);
    }

}
