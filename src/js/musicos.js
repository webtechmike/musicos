class Musico {
    constructor(name, instruments, defaultStyle, defaultRiff, preferredKey, influences, axes, yrsExperience, homeTown, bands, outfit) {
        this.name = name;
        this.instruments = instruments;
        this.defaultStyle = defaultStyle;
        this.defaultRiff = defaultRiff;
        this.preferredKey = preferredKey;
        this.influences = influences;
        this.axes = axes;
        this.yrsExperience = yrsExperience;
        this.homeTown = homeTown;
        this.bands = bands;
        this.outfit = outfit;
    }
}

let mike = new Musico('Michael Bergen', ['piano', 'keyboards', 'drums'], 'roots', 'someFile.mp3', 'Eb', ['Jackie Mitoo', 'Bill Evans', 'Thelonius Monk', 'Bob Marley', 'Duke Ellington', 'Charlie Parker', 'Miles Davis'], ['Korg Triton Extreme', 'Roland Juno-D', 'Break Beats Kit'], 18, 'Aliso Viejo', ['Fire Burn', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let tony = new Musico('Tony Browning', ['drums'], ['downtempo', 'rock'], 'someOtherFile.mp3', 'N/A', ['The Cure', 'Depeche Mode'], ['Ludwig Kit'], 20, 'Laguna Hills', ['Red Lights', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let musicos = [mike, tony];

function getMusicos() {
    return musicos;
}

function setMusico(name, instruments, defaultStyle, defaultRiff, preferredKey, influences, axes, yrsExperience, homeTown, bands, outfit) {
    return new Musico(name, instruments, defaultStyle, defaultRiff, preferredKey, influences, axes, yrsExperience, homeTown, bands, outfit);
}

console.log(musicos);
