// const fs= require('fs');
const studentsUtils = require("./students");
//var validator = require('validator');
// var chalk = require('chalk');
const yargs = require("yargs");
//const { demandOption } = require('yargs');

yargs.command({
  command: "add",
  distription: "adding a student",
  builder: {
    name: {
      distribe: "takes student fullname",
      demandOption: true,
      type: "string",
    },

    age: {
      distribe: "takes student age",
      demandOption: true,
      type: "number",
    },

    class: {
      distribe: "takes student class",
      demandOption: true,
      type: "number",
    },
  },
  handler: function (argv) {
    //console.log("Adding a student" + argv.name +   "Age: " + argv.age +   "Class: " + argv.class);
    studentsUtils.addStudents(argv.name, argv.age, argv.class);
  },
});

yargs.command({
  command: "remove",
  distription: "removing a student",
  builder: {
    name: {
      distribe: "takes student fullname",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    studentsUtils.removeStudent(argv.name);
  },
});

yargs.command({
  command: "list",
  distription: "listing a student",
  handler: function () {
    console.log("listing a student");
    studentsUtils.listStudent();
  },
});
yargs.command({
  command: "read",
  distription: "reading a student",
  handler: function () {
    console.log("Reading a student");
  },
});
// studentsUtils.getStudent()
// studentsUtils.addStudents()
yargs.argv;
