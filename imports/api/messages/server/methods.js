import { Messages } from "../messages";
import { check } from 'meteor/check';

Meteor.methods({
    async 'messages.insert'({ text }) {
        check(text, String)
        
        const currentUser = await Meteor.userAsync();
        await Messages.insertAsync({ 
            text,
            createdAt: new Date(),
            userId: currentUser._id
         });
    }
})