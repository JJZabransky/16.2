class Zamestnanec {
    constructor(id, name, position, salary, start_date, office, extn) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.start_date = new Date();
        this.office = new office;
        this.extn = extn;
    }
}

function Load() {
const req = new XMLHttpRequest();
req.open("GET", "https://datausa.io/api/data?drilldowns=Nation&measures=Population");
let zamestnanci = JSON.parse(this.responseText);
console.log(zamestnanci);
req.send();
}
Load();

