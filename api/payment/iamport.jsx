import { Meteor } from 'meteor/meteor';
// import { HTTP } from 'meteor/http';
// import { Restivus } from 'meteor/nimble:restivus';
import Iamport from 'iamport';
import { Promise } from 'bluebird';
// For Promise, read this http://yubylab.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Promise-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
if (Meteor.isServer) {
  Meteor.methods({
    'iamport.prerpareValidation'({ merchant_uid, amount }) {
      var iamport = new Iamport({
        impKey: Meteor.settings.IAMPORT_KEY,
        impSecret: Meteor.settings.IAMPORT_SECRET
      });

      iamport.payment.prepare({
        merchant_uid : merchant_uid,
        amount : amount
      })
      .then(() => {
        return Promise.resolve(true);
      })
      .catch(console.log.bind(console));
    },
    'iamport.checkPaymentValid'({ merchant_uid }) {
      var iamport = new Iamport({
        impKey: Meteor.settings.IAMPORT_KEY,
        impSecret: Meteor.settings.IAMPORT_SECRET
      });

      Promise.all([iamport.payment.getPrepare({
          merchant_uid : merchant_uid,
        }), iamport.payment.getByMerchant({
          merchant_uid : merchant_uid,
        })])
      .spread(function(result_prepare, result_actual) {
        if (!(result_actual.status == 'paid' && result_prepare.amount == result_actual.amount)) {
          throw new Error('결제 검증이 실패했습니다. 다시 결제하여 주세요.');
        }

        return Promise.resolve(true);
      })
      .catch(console.log.bind(console));
    },
    'iamport.cancelPayment'({ merchant_uid }) {
      var iamport = new Iamport({
        impKey: Meteor.settings.IAMPORT_KEY,
        impSecret: Meteor.settings.IAMPORT_SECRET
      });

      // 상점 고유 아이디로 결제 정보를 조회
      iamport.payment.getByMerchant({
        merchant_uid: 'your merchant_uid'
      }).then(function(result) {
        if (result.status == 'paid') {
          return iamport.payment.cancel({
            merchant_uid : merchant_uid
          });
        }

        return Promise.resolve(false);
      })
      .catch(console.log.bind(console));
    },
  });
}
