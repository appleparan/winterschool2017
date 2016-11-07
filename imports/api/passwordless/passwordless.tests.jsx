import { chai } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
  import './passwordless.jsx'

  describe('passwordless', () => {
    it('code generated', () => {
      // This code will be executed by the test driver when the app is started
      // in the correct mode
      code = Accounts.passwordless.generateVerificationCode("test@example.com");
      var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g
      var codeRe = new RegExp(regex)
      chai.assert(codeRe.test(code))
    })
  })
}
