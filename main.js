let student1 = new Student("pippo", "de paolis", 13, "m");

student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);

let student2 = new Student("paperino", "duck", 13, "m");

let student3 = new Student("topolino", "mouse", 12, "m");


let teacher1 = new Teacher("paperone", "duck", 80, "m", "terza media");

//console.log(teacher1.toString());


teacher1.addStudent(student1);

//console.log(teacher1.toString());


teacher1.addStudent(student2);

teacher1.addStudent(student3);

//console.log(teacher1.toString());


teacher1.addStudentGrade("padu2009", 7);
teacher1.addStudentGrade("padu2009", 5);

teacher1.addStudentGrade("tomo2010", 7);
teacher1.addStudentGrade("tomo2010", 5);

console.log(teacher1.toString());
console.log(teacher1.bestStudent());

// teacher1.bestStudent();


// console.log(student1.calculateMean());
// console.log(student1.generateCode());
// console.log(student1.toString());
// console.log(student2.toString());