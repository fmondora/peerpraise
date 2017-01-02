var assert = require('assert');


var mock = require('../praise-command.js');


describe('praise-command', function() {
  describe('#user()', function() {
    it('should return a value', function() {
      message = "@francesco message lkjfdasljfa";
      assert.equal( "@francesco", mock.user(message) );
      assert.equal( "message lkjfdasljfa", mock.message(message) );

    });
    it('should return a value 2', function() {
      message = "@francesco message lkjfdasljfa";
      assert.equal( "@francesco", mock.user(message) );
      assert.equal( "message lkjfdasljfa", mock.message(message) );

    });
    it("should return a 2 line string"), function() {
      message = "@francesco message on line 1\
      continued on line2";
      assert.equal( "message on line 1\
      continued on line2", mock.message(message) );
    }
  });
});
