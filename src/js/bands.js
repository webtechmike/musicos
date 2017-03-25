class Band {
    constructor(name, members, tourDates, homeTown, genre) {
        this.name = name;
        this.members = members;
        this.tourDates = tourDates;
        this.homeTown = homeTown;
        this.genre = genre;
    }
}
let d = new Date();
let dsc = new Band('DSC', [mike, tony], [d], ['Laguna Hills'], ['Hip Hop'])

let bands = [dsc];

function getBands() {
    return bands;
}

function setBand(name, members, tourDates, homeTown, genre) {
    return new Band(name, members, tourDates, homeTown, genre);
}

console.log(bands);
