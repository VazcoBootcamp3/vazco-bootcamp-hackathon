const EventsList = new UniCollection('events');

EventsList.setSchema(new SimpleSchema({
    name: {
        type: String,
    },
    owner: {
        type: String,
    },
    date: {
        type: Date,
    },
    place: {
        type: String,
    },
    description: {
        type: String,
    },
    users: {
        type: [String],
    }
}));

export default EventsList;