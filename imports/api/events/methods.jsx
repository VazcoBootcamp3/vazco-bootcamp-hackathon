import EventsList from './events';

export const eventCreate = new ValidatedMethod({
    name: 'event.create',
    validate: new SimpleSchema({
        name: { type: String },
        owner: { type: String },
        date: { type: Date },
        place: { type: String },
        description: { type: String },
    }).validator(),
    run({ name, owner, date, place, description }) {
        const users = [ owner ];
        return EventsList.insert({
            name: name,
            owner: owner,
            date: date,
            place: place,
            description: description,
            users: users,
        });
    },
});

export const eventJoin = new ValidatedMethod({
    name: 'event.join',
    validate: new SimpleSchema({
        eventId: { type: String },
        userId: { type: String },
    }).validator(),
    run({eventId, userId}) {
        const event = EventsList.findOne({_id: eventId});
        event.update({
           $addToSet: {
               users: userId,
           }
        });
    },
});
