const assert = chai.assert;
const expect = chai.expect;

const min = Math.floor(0);
const max = Math.floor(musicos.length - 1);
const randomIndex = parseInt(Math.random() * (max - min + 1) + min);

console.log(min, max, randomIndex);

describe('Musicos', () => {
    it('should run mocha tests', () => {
        assert.equal(0, 0);
    });
    it('should log a string to the console', () => {
        expect(musicos).to.be.an('array');
    });
    it('should start out with Mike', () => {
        expect(musicos[0]).to.be.an('object');
    });
});

describe('Characters', () => {
    it('should have a default instruments array', () => {
        expect(musicos[randomIndex].instruments).to.exist;
    });
    it('should have a default style', () => {
        expect(musicos[randomIndex].defaultStyle).to.exist;
    });
    it('should have a default riff', () => {
        expect(musicos[randomIndex].defaultRiff).to.exist;
    });
    it('should have a default outfit', () => {
        expect(musicos[randomIndex].outfit).to.exist;
    });
    it('should have a preferred key', () => {
        expect(musicos[randomIndex].preferredKey).to.exist;
    });
    it('should have a list of 3 influences', () => {
        expect(musicos[randomIndex].influences).to.exist;
    });
    it('should have a hometown', () => {
        expect(musicos[randomIndex].homeTown).to.exist;
    });
});

describe('Bands', () => {
    it('should have a name', () => {
        expect(bands[0].name).to.exist;
    });
    it('should have a list of band members', () => {
        expect(bands[0].members).to.exist;
    });
    it('should have a list of tour dates', () => {
        expect(bands[0].tourDates).to.exist;
    });
    it('should have a home town', () => {
        expect(bands[0].homeTown).to.exist;
    });
    it('should have at least one genre', () => {
        expect(bands[0].genre).to.exist;
    });
});

describe('Shows', () => {
    it('should have a name', () => {
        expect(sxsw.name).to.exist;
    });
    it('should have a list of bands', () => {
        expect(sxsw.talent).to.exist;
    });
    it('should have a location', () => {
        expect(sxsw.location).to.exist;
    });
    it('should have a date', () => {
        expect(sxsw.date).to.exist;
    });
});
