class Show {
    constructor(name, talent, location, date){
        this.name = name;
        this.talent = talent;
        this.location = location;
        this.date = date;
    }
}

let sxsw = new Show('Lalapalooza', [dsc], 'Texas', d);
let shows = [sxsw];

function getShows() {
    return shows;
}

function setShow(name, talent, location, date) {
    return new Show(name, talent, location, date);
}

console.log(shows);
