var assert = chai.assert;
var expect = chai.expect;

describe('Musicos', () => {
    it('should run mocha tests', () => {
        assert.equal(0, 0);
    });
    it('should log a string to the console', () => {
        expect(musicos).to.be.an('array');
    });
});

describe('Characters', () => {
    it('should start out with Mike', () => {
        expect(musicos[0]).to.be.an('object');
    });
});
