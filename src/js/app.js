let mike = new Musico('Michael Bergen', ['piano', 'keyboards', 'drums'], 'roots', 'someFile.mp3', 'Eb', ['Jackie Mitoo', 'Bill Evans', 'Thelonius Monk', 'Bob Marley', 'Duke Ellington', 'Charlie Parker', 'Miles Davis'], ['Korg Triton Extreme', 'Roland Juno-D', 'Break Beats Kit'], 18, 'Aliso Viejo', ['Fire Burn', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let tony = new Musico('Tony Browning', ['drums'], ['downtempo', 'rock'], 'someOtherFile.mp3', 'N/A', ['The Cure', 'Depeche Mode'], ['Ludwig Kit'], 20, 'Laguna Hills', ['Red Lights', 'Dirty Science Crew'], 'Jeans & T-Shirt');

let d = new Date();
let musicos = [mike,tony];
let dsc = new Band('DSC', musicos, [d], ['Laguna Hills'], ['Hip Hop'])
let bands = [dsc];
let sxsw = new Show('Lalapalooza', [dsc], 'Texas', d);
let shows = [sxsw];


function getMusicos() {
    return musicos;
}

function getShows() {
    return shows;
}

function getBands() {
    return bands;
}

console.log(musicos);
console.log(shows);
console.log(bands);
