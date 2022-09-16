const lib = require('../lib');
const db = require('../db');
const mail = require('../mail');

describe('JEST mock - notifyCustomer', () => {
  it('should send an email to the customer', () => {
    // Enrich the DB mock, to return simply a value and make the process go through
    db.getCustomerSync = jest.fn().mockReturnValue({ email: 'a' });
    mail.send = jest.fn();

    lib.notifyCustomer({ customerId: 1 });
    expect(mail.send).toHaveBeenCalled();
    /* Check arguments passed to the function:
    First array mock.calls dimension : the call number
    Second array mock.calls dimension : the first, second, ..., nth passed argument */
    expect(mail.send.mock.calls[0][0]).toBe('a');
    expect(mail.send.mock.calls[0][1]).toMatch(/order/);
  });
});
