interface Student {
    firstName : string;
    lastName : string;
    age : number;
    location : string
}

const student1 : Student = {
    firstName : "Abdel-Moneim",
    lastName : "Toeima",
    age : 24,
    location : "Egypt"
};

const student2 : Student = {
    firstName : "Julien",
    lastName : "BB",
    age : 25,
    location : "IDK"
};

const studentList : Student[] = [student1, student2];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.textAlign = 'center';
table.style.margin = 'auto';
table.style.borderRadius = '5px';
table.style.backgroundColor = '#f2f2f2';
table.appendChild(tbody);

studentList.forEach((student) => {
    const tr : HTMLTableRowElement = document.createElement('tr');
    const td1 : HTMLTableDataCellElement = document.createElement('td');
    const td2 : HTMLTableDataCellElement = document.createElement('td');

    td1.style.border = '1px solid black';
    td2.style.border = '1px solid black';

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;

    tr.appendChild(td1);
    tr.appendChild(td2);

    tbody.appendChild(tr);
});

document.body.appendChild(table);
