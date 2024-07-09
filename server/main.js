import { Meteor } from 'meteor/meteor';
import '../imports/api/messages/messages';
import '../imports/api/messages/server/methods';
import '../imports/api/messages/server/publications';

Meteor.startup(() => {
  // code to run on server at startup
});
