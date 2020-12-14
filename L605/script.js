

var students = [
    { FirstName: 'დავით', LastName: 'წულუკიძე', PersonalNumber: '123'},
    { FirstName: 'მიხილ', LastName: 'კაპანაძე', PersonalNumber: '124'},
    { FirstName: 'სოფო', LastName: 'დოღონაძე', PersonalNumber: '125'}
];

console.log(Object.keys(students[0]));

function displayStudentsTable(studentList){
    //write code
    let table = document.createElement('table');
    let head = document.createElement('thead');
    let row = document.createElement('tr');
    let tbody = document.createElement('tbody');

    container.appendChild(table);
    table.append(trh);
    for (var i = 0; i < keys.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = keys[i];
      trh.appendChild(th);
    }
    for (var i = 0; i < studentList.length; i++) {
      var trd = document.createElement("tr");
      table.append(trd);
      for (var j = 0; j < keys.length; j++) {
        var td = document.createElement("td");
        td.innerHTML = studentList[i][keys[j]];
        trd.appendChild(td);
      }
    }
  }

displayStudentsTable(studens);