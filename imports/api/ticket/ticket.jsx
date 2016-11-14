import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tickets = new Mongo.Collection('tickets');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('ticket', function ticketsPublication() {
    return Tickets.find({
      owner: this.userId
    });
  });
}

Meteor.methods({
  'tickets.insertKor'(_ticket) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    if (! agreedKoreanPrivacyPolicy) {
      throw new Meteor.Error('Please agree privacy policy first');
    }

    Tickets.insert({
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      isKorean: _ticket.isKorean,
      email : _ticket.email,
      agreedKoreanPrivacyPolicy : _ticket.agreedKoreanPrivacyPolicy,
      korName : _ticket.korName,
      mobilePhoneNum : _ticket.mobilePhoneNum,
      engLastName : _ticket.engLastName,
      engFirstName : _ticket.engFirstName,
      affliation : _ticket.affliation,
      position : _ticket.position,
      advisorName : _ticket.advisorName,
      isPresentPoster : _ticket.isPresentPoster
    });
  },
  'tickets.insertNonKor'(_ticket) {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Tickets.insert({
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      email : Meteor.user().emails[0].address,
      isKorean: _ticket.isKorean,
      nationality : _ticket.nationality,
      engLastName : _ticket.engLastName,
      engFirstName : _ticket.engFirstName,
      affliation : _ticket.affliation,
      position : _ticket.position,
      advisorName : _ticket.advisorName,
      isPresentPoster : _ticket.isPresentPoster
    });
  },

  'tickets.findMine'(ticketId) {
    check(ticketId, String);

    const ticket = Tickets.findOne(ticketId);

    // Make sure only the task owner can make a task private
    if (ticket.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }
  },

  'tickets.remove'(_ticketId) {
    check(taskId, String);

    Tickets.remove(_ticketId);
  },
});
