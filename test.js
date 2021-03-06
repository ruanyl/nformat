'use strict';
var assert = require('assert');
var nFormat = require('./');

describe('test nFormat', function() {
  it('should return formatted string' ,function() {
    assert.equal(nFormat(123456789, '***-***:***'), '123-456:789');
    assert.equal(nFormat('123456789', '***-***:**'), '123-456:78');
    assert.equal(nFormat(123456789, '***-***-***:*'), '123-456-789');
    assert.equal(nFormat(123456789, '##*###*#', '#'), '12*345*6');
  });
});
