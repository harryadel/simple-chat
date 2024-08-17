import { Mongo } from 'meteor/mongo';
import 'meteor/aldeed:collection2/static';
import SimpleSchema from "meteor/aldeed:simple-schema";

const Messages = new Mongo.Collection('messages');

Messages.attachSchema(
    new SimpleSchema({
        text: String,
        createdAt: Date, 
        userId: String,
    })
)

export {
    Messages
}