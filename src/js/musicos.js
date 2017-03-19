class Character {
    constructor(name, bands, instrument, yrsExperience, axes, outfit) {
        this.name = name;
        this.bands = bands;
        this.instrument = instrument;
        this.yrsExperience = yrsExperience;
        this.axes = axes;
        this.outfit = outfit;
    }
}

var mike = new Character('Michael Bergen', ['Fire Burn', 'Dirty Science Crew'], ['piano', 'keyboards', 'drums'], 18, ['Yamaha Clavinova', 'Korg Triton Extreme', 'Roland Juno-D', 'Break Beats Kit'], 'Jeans & T-Shirt');

var musicos = [mike];

console.log(musicos);
