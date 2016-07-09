import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import './methods';

import EventList from './events';

if(Meteor.isServer) {
    describe('event.create', () => {
        beforeEach(() => {
            EventList.remove({});
        });
    
        it('should create event', () => {
            const createEvent = Meteor.server.method_handlers['event.create'];
            
            assert.equal(EventList.find({}).count(), 0);

            const event = {
                name: 'Test',
                owner: 'Janusz',
                date: new Date(),
                place: 'Biegun',
                description: 'Lorem ipsum...',
            };

            createEvent.apply(this, [ event ]);

            assert.equal(EventList.find({}).count(), 1);
        });
    });

    describe('event.join', () => {
        beforeEach(() => {
            EventList.remove({});
        });

        it('should add user to users', () => {
            const createEvent = Meteor.server.method_handlers['event.create'];
            const newEvent = {
                name: 'Test',
                owner: 'Janusz',
                date: new Date(),
                place: 'Biegun',
                description: 'Lorem ipsum...',
            };

            createEvent.apply(this, [ newEvent ]);

            const eventJoin = Meteor.server.method_handlers['event.join'];
            const event = EventList.findOne({name: newEvent.name});

            let users = event.users;
            assert.equal(users.length, 1);
            const newUser = 'Zbyszek';
            eventJoin.apply(this, [{
                eventId: event._id,
                userId: newUser,
            }]);

            event.refresh();
            users = event.users;
            assert.equal(users.length, 2);
        });
    });
}
