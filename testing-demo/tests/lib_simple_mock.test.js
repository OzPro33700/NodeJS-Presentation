const lib = require('../lib');
const db = require('../db');

describe('Simple Mock - applyDiscount', () => {
  it('should apply 10% discount if customer has more than 10 points', () => {
    // MOCK (simulating access to database)
    db.getCustomerSync = function (customerId) {
      console.log('Fake reading customer...');
      return { id: customerId, points: 20 };
    };

    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});
