const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('Interaction Mock - notifyCustomer', () => {
  it('should send an email to the customer', () => {
    // MOCK (simulating access to database)
    db.getCustomerSync = function (customerId) {
      console.log('Fake reading customer...');
      return { email: 'a' };
    };

    let mailSent = false;
    // MOCK (to ensure mail.send is correctly called in the process)
    mail.send = function (email, message) {
      mailSent = true;
    };

    lib.notifyCustomer({ customerId: 1 });

    expect(mailSent).toBe(true);
  });
});
