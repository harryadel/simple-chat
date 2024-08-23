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
    return Messages.find().fetch();
  },
});

Template.body.events({
  'submit .new-message'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    try {
      // Insert a message into the collection
      const res = Meteor.callAsync('messages.insert', {
        text
      })
      // Clear form
      target.text.value = '';

      const chatContainer = document.querySelector('.chat-container');
      const messagesList = document.querySelector('.messages-list');

      if (chatContainer && messagesList) {
        chatContainer.scrollTop = messagesList.scrollHeight;
      }
    } catch (error) { }

  },
});
