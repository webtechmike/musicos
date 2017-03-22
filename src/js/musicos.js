class Character {
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

class Band {
    constructor(name, members, tourDates, homeTown, genre) {
        this.name = name;
        this.members = members;
        this.tourDates = tourDates;
        this.homeTown = homeTown;
        this.genre = genre;
    }
}

class Show {
    constructor(name, talent, location, date){
        this.name = name;
        this.talent = talent;
        this.location = location;
        this.date = date;
    }
}

let d = new Date();

let mike = new Character('Michael Bergen', ['piano', 'keyboards', 'drums'], 'roots', 'someFile.mp3', 'Eb', ['Jackie Mitoo', 'Bill Evans', 'Thelonius Monk', 'Bob Marley', 'Duke Ellington', 'Charlie Parker', 'Miles Davis'], ['Korg Triton Extreme', 'Roland Juno-D', 'Break Beats Kit'], 18, 'Aliso Viejo', ['Fire Burn', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let tony = new Character('Tony Browning', ['drums'], ['downtempo', 'rock'], 'someOtherFile.mp3', 'N/A', ['The Cure', 'Depeche Mode'], ['Ludwig Kit'], 20, 'Laguna Hills', ['Red Lights', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let dsc = new Band('DSC', [mike, tony], [d], ['Laguna Hills'], ['Hip Hop'])

let musicos = [mike, tony];
let bands = [dsc];
let sxsw = new Show('Lalapalooza', [dsc], 'Texas', d);

console.log(musicos, bands, sxsw);
