import { Messages } from "../messages";

Meteor.methods({
    async 'messages.insert'({ text }) {
        check(text, String)
        
        const currentUser = await Meteor.userAsync();
        await Messages.insertAsync({ 
            text,
            createdAt: new Date(),
            email: currentUser.emails[0].address
         });
    }
})