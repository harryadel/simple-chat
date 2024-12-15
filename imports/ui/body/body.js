import { Template } from 'meteor/templating';
import './body.html';
import './body.css';
import '../message/message.js';
import { Messages } from '../../api/messages/messages.js';


Template.body.onCreated(function () {
  this.subscribe('messages.all')
})

Template.body.helpers({
  messages() {
    return Messages.find({}, { sort: { createdAt: 1 } }).fetch();
  },
});

Template.body.events({
  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a message into the collection
    Meteor.callAsync('messages.insert', {
      text
    })
    // Clear form
    target.text.value = '';

  },
});
