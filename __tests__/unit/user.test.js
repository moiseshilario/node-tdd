const bcrypt = require('bcryptjs');

const truncate = require('../utils/truncate');
const factory = require('../factories');

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should encrypt user password', async () => {
    const user = await factory.create('User', {
      password: '1234'
    });

    const compareHash = await bcrypt.compare('1234', user.password_hash);

    expect(compareHash).toBe(true);
  });
});
