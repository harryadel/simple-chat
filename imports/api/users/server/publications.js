import { Meteor } from 'meteor/meteor';

// Publish minimal user data needed for messages
Meteor.publish('users.emails', function () {
    return Meteor.users.find({}, {
        fields: {
            'emails.address': 1,
        }
    });
});
