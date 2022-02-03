// Creo un pò di studenti

let student1 = new Student("pippo", "de paolis", 13, "m"); // pide2009
let student2 = new Student("paperino", "duck", 13, "m"); // padu2009
let student3 = new Student("topolino", "mouse", 12, "m"); // tomo2010

let student4 = new Student("minnie", "mouse", 15, "f"); // mimo2007
let student5 = new Student("paperina", "ducker", 14, "f"); // padu2008

let student6 = new Student("franco", "rossi", 15, "m"); // frro2007

console.log("Nome studente 1: ", student1.name);

/****/

// Creo un pò di docenti

let teacher1 = new Teacher("paperone", "duck", 80, "m", "terza media");
let teacher2 = new Teacher("clarabella", "bella", 40, "f", "prima superiore");

console.log("Codice docente 1: ", teacher1.generateCode());

/****/

// Creo il preside

let principal = new Principal("Roberto", "Vecchi", 65, "m", "FED High School");

console.log("Codice preside: ", principal.generateCode());

/****/

// Assegno un pò di voti agli studenti

student1.grade = 7;
student1.grade = 9;
student1.grade = 10;
student1.grade = 3;
student1.grade = 2.5;

student2.grade = 7;
student2.grade = 9;
student2.grade = 10;
student2.grade = 3;
student2.grade = 2.5;

student3.grade = 7;
student3.grade = 9;
student3.grade = 10;

student4.grade = 7;
student4.grade = 9;
student4.grade = 10;

student5.grade = 7;
student5.grade = 9;
student5.grade = 10;
student5.grade = 7;

student6.grade = 7;

/****/

// Assegno gli studenti ai docenti

teacher1.addStudent(student1);
teacher1.addStudent(student2);
teacher1.addStudent(student3);

teacher2.addStudent(student4);
teacher2.addStudent(student5);

/****/

// Assegno i docenti al preside

principal.addTeacher(teacher1);
principal.addTeacher(teacher2);

/****/

// I docenti danno i voti agli studenti

teacher1.addStudentGrade("pide2009", 8);
teacher1.addStudentGrade("padu2009", 9);
teacher1.addStudentGrade("tomo2010", 3);

teacher1.addStudentGrade("mimo2007", 6);
teacher1.addStudentGrade("padu2008", 7.5);

/****/

// Stampo la situazione degli insegnanti, con i loro studenti

//console.log(teacher1.toString());
//console.log(teacher2.toString());

/****/

// Stampo la situazione del preside

//console.log(principal.toString());

/****/

// Il nuovostudente, student6, viene assegnato al professore 2 dal preside

principal.addStudentToTeacher("bella", student6);

/****/

// Stampo di nuovo la situazione del preside

console.log(principal.toString());

/****/

// Il preside annuncia il suo professore migliore, attualmente

console.log(principal.bestTeacher());