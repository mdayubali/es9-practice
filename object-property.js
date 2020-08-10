const students = [
    { id: 43, name: "Amir Khan"},
    { id: 53, name: "Popy"},
    { id: 63, name: "Misha Soudagor"},
    { id: 73, name: "Manna"}
]
const names = students.map(x => x.name);
console.log(names);
const ids = students.map(x => x.id);
console.log(ids);
const Filters = students.filter(elements => elements.id > 43);
console.log(Filters)
const FindId = students.find(elements => elements.id > 43);
console.log(FindId)