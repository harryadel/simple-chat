import sha256 from 'crypto-js/sha256'
import { Template } from 'meteor/templating';
import './message.html';
import './message.css';

Template.message.helpers({
    avatar() {
        const hashedEmail = sha256(Meteor.user().emails[0].address)
        return `https://gravatar.com/avatar/${hashedEmail}`
    }
})