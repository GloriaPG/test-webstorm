/**
 * Created by gloria on 11/18/14.
 * Description : Ridiculuos tests
 */
var should = require('should');
var assert = require('assert');


describe('Test Framework', function () {
    it('Should have mocha installed and runing.', function () {
        assert.equal(true, true);
    })
    it('Should have the should library installed and running for fluent testing', function () {
        true.should.eql(true);
    })
});

describe('Asynchronous testing', function(){
    var result = false;

    beforeEach(function(done){

        setTimeout(function(){
            var somethingHere = 2;
            var somethingElse = 'check';

            result=true;
            done();
        },2000);
    });

    it("Should Not be so hard so this makes it easier.",function(done){
        result.should.eql(true);
        done();
    })
});