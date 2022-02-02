let student1 = new Student("pippo", "de paolis", 13, "m");

student1.addGrade(7);
student1.addGrade(9);
student1.addGrade(10);
student1.addGrade(3);
student1.addGrade(2.5);

console.log(student1.calculateMean());

console.log(student1.generateCode());