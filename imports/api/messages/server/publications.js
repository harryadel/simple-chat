
import { Messages } from "../messages";

Meteor.publish({
    async 'messages.all'() {
        if (!this.userId) return this.ready();
        
        return (await Messages.find());
    }
})