import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import './methods';

import EventList from './events';

if(Meteor.isServer) {
    describe('Events methods', () =>{
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

                const createdEvent = EventList.findOne();
                assert.equal(createdEvent.name, event.name);
                assert.equal(createdEvent.owner, event.owner);
                assert.equal(createdEvent.date.getTime(), event.date.getTime());
                assert.equal(createdEvent.place, event.place);
                assert.equal(createdEvent.description, event.description);
                assert.includeMembers(createdEvent.users, [event.owner]);

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
                assert.includeMembers(users, [newUser, newEvent.owner]);
            });

            it('should add users', () => {
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
                const newUsers = ['Zbyszek', 'Mietek', 'Janek'];
                for(const user of newUsers) {
                    eventJoin.apply(this, [{
                        eventId: event._id,
                        userId: user,
                    }]);
                }

                event.refresh();
                users = event.users;
                assert.equal(users.length, 4);
                assert.includeMembers(users, newUsers);
                assert.includeMembers(users, [newEvent.owner]);
            });

            it('users should be unique', () => {
                const createEvent = Meteor.server.method_handlers['event.create'];
                const eventJoin = Meteor.server.method_handlers['event.join'];

                const newEvent = {
                    name: 'Test',
                    owner: 'Janusz',
                    date: new Date(),
                    place: 'Biegun',
                    description: 'Lorem ipsum...',
                };

                createEvent.apply(this, [ newEvent ]);
                const event = EventList.findOne({name: newEvent.name});
                let users = event.users;
                assert.equal(users.length, 1);

                eventJoin.apply(this, [{eventId: event._id, userId: newEvent.owner}]);
                event.refresh();
                users = event.users;
                assert.equal(users.length, 1);
                assert.includeMembers(users, [newEvent.owner]);

                const secondUser = 'Mietek';
                eventJoin.apply(this, [{eventId: event._id, userId: secondUser}]);
                eventJoin.apply(this, [{eventId: event._id, userId: secondUser}]);
                event.refresh();
                users = event.users;
                assert.equal(users.length, 2);
                assert.includeMembers(users, [newEvent.owner, secondUser]);

            });

        });
    });
}
