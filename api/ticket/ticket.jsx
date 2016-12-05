import SimpleSchema from 'simpl-schema';

export const Tickets = new Mongo.Collection('tickets');

Meteor.methods({
  'tickets.insertKor'({
    isKorean,
    isPaid,
    engLastName,
    engFirstName,
    affiliation,
    position,
    advisorName,
    willPresentPoster,
    agreedKoreanPrivacyPolicy,
    korName,
    mobilePhoneNum
    }) {

      var mobileRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
      new SimpleSchema({
        createdAt: { type: Date },
        owner: { type: String, regEx: SimpleSchema.RegEx.Id },
        email : { type: String, regEx: SimpleSchema.RegEx.Email },
        isKorean : { type: Boolean },
        isPaid : { type: Boolean },
        engLastName : { type: String },
        engFirstName : { type: String },
        affiliation : { type: String  },
        position : { type: String },
        advisorName : { type: String },
        willPresentPoster : { type: Boolean },
        agreedKoreanPrivacyPolicy : { type: String },
        korName : { type: String },
        mobilePhoneNum :  { type: String, regEx: mobileRegExp }
      });

      // Make sure the user is logged in before inserting a task
      if (!Meteor.userId() || Meteor.userId() == undefined) {
        throw new Meteor.Error('not authorized, please sign in');
      }

      var isRegistered = Tickets.findOne({ owner : Meteor.userId() });

      if (isRegistered || !(isRegistered == undefined)) {
        throw new Meteor.Error("You've already registered");
      }

      if (!agreedKoreanPrivacyPolicy) {
        throw new Meteor.Error('Please agree privacy policy first');
      }

      Tickets.insert({
        createdAt: new Date(),
        owner: Meteor.userId(),
        email : Meteor.user().emails[0].address,
        isKorean : isKorean,
        isPaid : isPaid,
        engLastName : engLastName,
        engFirstName : engFirstName,
        affiliation : affiliation,
        position : position,
        advisorName : advisorName,
        willPresentPoster : willPresentPoster,
        agreedKoreanPrivacyPolicy : agreedKoreanPrivacyPolicy,
        korName : korName,
        mobilePhoneNum : mobilePhoneNum
      });
  },
  'tickets.insertNonKor'({
    isKorean,
    isPaid,
    engLastName,
    engFirstName,
    affiliation,
    position,
    advisorName,
    willPresentPoster,
    nationality }) {

      new SimpleSchema({
        createdAt: { type: Date },
        owner: { type: String, regEx: SimpleSchema.RegEx.Id },
        email : { type: String, regEx: SimpleSchema.RegEx.Email },
        isKorean : { type: Boolean },
        isPaid : { type: Boolean },
        engLastName : { type: String },
        engFirstName : { type: String },
        affiliation : { type: String  },
        position : { type: String },
        advisorName : { type: String },
        willPresentPoster : { type: Boolean },
        nationality : { type: String }
      });

      // Make sure the user is logged in before inserting a task
      if (!Meteor.userId() || Meteor.userId() == undefined) {
        throw new Meteor.Error('not authorized, please sign in');
      }

      var isRegistered = Tickets.findOne({ owner : Meteor.userId() });

      if (isRegistered || !(isRegistered == undefined)) {
        throw new Meteor.Error("You've already registered");
      }

      Tickets.insert({
        createdAt: new Date(),
        owner : Meteor.userId(),
        email : Meteor.user().emails[0].address,
        isKorean : isKorean,
        isPaid : isPaid,
        engLastName : engLastName,
        engFirstName : engFirstName,
        affiliation : affiliation,
        position : position,
        advisorName : advisorName,
        willPresentPoster : willPresentPoster,
        nationality : nationality
      });
  },
  'tickets.findMine'() {
    const ticket = Tickets.findOne({ owner : Meteor.userId() });

    return ticket;
  },

});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tickets.myTicket', function () {
    if (!this.userId || this.userId == null || this.userId == undefined) {
      throw new Meteor.Error('not authorized, please sign in');
    }

    return Tickets.find({
      owner: this.userId
    });
  });
}
