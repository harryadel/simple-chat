import { Template } from 'meteor/templating';
import './message.html';
import './message.css';

Template.message.onCreated(function() {
    this.subscribe('users.emails');
});

Template.message.helpers({
    userEmail() {
        const user = Meteor.users.findOne(this.userId);
        return user?.emails?.[0]?.address || 'Unknown User';
    }
})