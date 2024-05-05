const fs = require("fs");

const getStudent = () => {
  console.log("Getting students");
};

const addStudents = (name, age, Class) => {
  const student = loadStudent();
  const duplicateData = student.filter((student) => {
    return student.name === name;
  });

  if (duplicateData.length === 0) {
    student.push({
      name: name,
      age: age,
      class: Class,
    });

    saveStudent(student);
  } else {
    console.log("record already in system");
  }

  console.log("add student");
};

const removeStudent = (name) => {
  console.log("removing  " + name);

  const students = loadStudent();

  const newStudent = students.filter((students) => {
    return students.name !== name;
  });

  saveStudent(newStudent);
};

const listStudent = () => {
  const student = loadStudent();

  student.forEach((student) => {
    console.log(
      "Name :" +
        student.name +
        ", Class " +
        student.class +
        ", Age:" +
        student.age
    );
  });
};

const loadStudent = () => {
  try {
    const dataBuffer = fs.readFileSync("students.json");
    const JSONdata = JSON.parse(dataBuffer.toString());

    return JSONdata;
  } catch (e) {
    return [];
  }
};

const saveStudent = (students) => {
  const stringData = JSON.stringify(students);
  fs.writeFileSync("students.json", stringData);
};

//console.log(loadStudent())

module.exports = {
  getStudent: getStudent,
  addStudents: addStudents,
  removeStudent: removeStudent,
  listStudent: listStudent,
};
