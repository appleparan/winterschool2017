import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Tickets = new Mongo.Collection('tickets');

Meteor.methods({
  'tickets.insertKor'({
    isKorean,
    email,
    agreedKoreanPrivacyPolicy,
    korName,
    mobilePhoneNum,
    engLastName,
    engFirstName,
    affiliation,
    position,
    advisorName,
    willPresentPoster }) {

      var mobileRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
      new SimpleSchema({
        createdAt: { type: Date },
        userId: { type: String, regEx: SimpleSchema.RegEx.Id },
        isKorean : { type: Boolean },
        email : { type: String, regEx: SimpleSchema.RegEx.Email },
        engLastName : { type: String },
        engFirstName : { type: String },
        affiliation : { type: String  },
        position : { type: String },
        advisorName : { type: String },
        willPresentPoster : { type: String },
        agreedKoreanPrivacyPolicy : { type: String },
        korName : { type: String },
        mobilePhoneNum :  { type: String, regEx: mobileRegExp }
      });

      // Make sure the user is logged in before inserting a task
      if (!this.userId || this.userId == undefined) {
        throw new Meteor.Error('not-authorized');
      }

      var isExistedUser = Tickets.findOne({ owner : Meteor.userId() });
      var isExistedEmail = Tickets.findOne({ email : email });

      if (isExistedUser || !(isExistedUser == undefined)) {
        throw new Meteor.Error("You've already registered");
      }

      if (isExistedEmail || !(isExistedEmail == undefined)) {
        throw new Meteor.Error("Your email address have already registerd");
      }

      if (!agreedKoreanPrivacyPolicy) {
        throw new Meteor.Error('Please agree privacy policy first');
      }

      Tickets.insert({
        createdAt: new Date(),
        owner: Meteor.userId(),
        isKorean: isKorean,
        email : email,
        agreedKoreanPrivacyPolicy : agreedKoreanPrivacyPolicy,
        korName : korName,
        mobilePhoneNum : mobilePhoneNum,
        engLastName : engLastName,
        engFirstName : engFirstName,
        affiliation : affiliation,
        position : position,
        advisorName : advisorName,
        willPresentPoster : willPresentPoster
      });
  },
  'tickets.insertNonKor'({
    isKorean,
    email,
    nationality,
    engLastName,
    engFirstName,
    affiliation,
    position,
    advisorName,
    willPresentPoster }) {

      new SimpleSchema({
        createdAt: { type: Date },
        userId: { type: String, regEx: SimpleSchema.RegEx.Id },
        isKorean: { type: Boolean },
        email : { type: String, regEx: SimpleSchema.RegEx.Email },
        engLastName : { type: String },
        engFirstName : { type: String },
        affiliation : { type: String  },
        position : { type: String },
        advisorName : { type: String },
        willPresentPoster : { type: String },
        nationality: { type: String }
      });

      // Make sure the user is logged in before inserting a task
      if (!this.userId || this.userId == undefined) {
        throw new Meteor.Error('not-authorized');
      }

      var isExistedUser = Tickets.findOne({ owner : Meteor.userId() });
      var isExistedEmail = Tickets.findOne({ email : email });

      if (isExistedUser || !(isExistedUser == undefined)) {
        throw new Meteor.Error("You've already registered");
      }

      if (isExistedEmail || !(isExistedEmail == undefined)) {
        throw new Meteor.Error("Your email address have already registerd");
      }

      Tickets.insert({
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.users.findOne(this.userId).username,
        email : Meteor.user().emails[0].address,
        isKorean: isKorean,
        nationality : nationality,
        engLastName : engLastName,
        engFirstName : engFirstName,
        affiliation : affiliation,
        position : position,
        advisorName : advisorName,
        willPresentPoster : willPresentPoster
      });
  },

  'tickets.findMine'(userId) {
    check(userId, String);

    const ticket = Tickets.findOne(userId);

    // Make sure only the task owner can make a task private
    if (ticket.owner !== Meteor.userId) {
      throw new Meteor.Error('not-authorized');
    }
  },

  'tickets.remove'(_ticketId) {
    check(taskId, String);

    Tickets.remove(_ticketId);
  },
});


if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('ticket', function ticketsPublication() {
    return Tickets.find({
      owner: this.userId
    });
  });
}
