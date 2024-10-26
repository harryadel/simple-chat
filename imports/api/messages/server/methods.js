import { Messages } from "../messages";
import { check } from 'meteor/check';

Meteor.methods({
    async 'messages.insert'({ text }) {
        check(text, String);
        
        const currentUser = await Meteor.userAsync();

        // Security check: Only allow logged-in users to invoke this method
        if (!currentUser) {
            throw new Meteor.Error('not-authorized', 'You must be logged in to insert a message.');
        }

        await Messages.insertAsync({ 
            text,
            createdAt: new Date(),
            userId: currentUser._id
         });
    }
})