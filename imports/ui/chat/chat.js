import { Template } from 'meteor/templating';
import './chat.html';
import './chat.css';
import '../message/message.js';
import { Messages } from '../../api/messages/messages.js';


Template.chat.onCreated(function () {
  this.subscribe('messages.all')
})

Template.chat.helpers({
  messages() {
    return Messages.find({}, { sort: { createdAt: 1 } }).fetch();
  },
});

Template.chat.events({
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
