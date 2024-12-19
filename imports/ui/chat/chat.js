import { Template } from 'meteor/templating';
import { Messages } from '../../api/messages/messages';
import './chat.html'
import './chat.css'
import '../message/message'

Template.chat.onCreated(function() {
    this.subscribe('messages.all');
})

Template.chat.helpers({
    messages() {
        return Messages.find({}, { sort: { createdAt: -1}}).fetch();
    }
})

Template.chat.events({
    'submit .new-message'(event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        const result = Meteor.callAsync('messages.insert', { text });

        target.text.value = '';
    }
})