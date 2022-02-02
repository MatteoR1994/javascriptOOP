class Principal {

    constructor(name, surname, age, gender, school) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.school = school;
        this.teachers = [];
    }

    addTeacher(teacherPassed) {
        if (this.teachers.length === 0) {
            this.teachers.push(teacherPassed);
        } else {
            for (const teacher of this.teachers) {
                if (teacherPassed.teacherPassed === teacher.surname) {
                    console.log("Il docente che stai tentando di inserire c'è già.");
                    return;
                }
            }
            this.teachers.push(teacherPassed);
        }
    }

    addStudentToTeacher(teacherSurname, newStudent) {
        for (const teacher of this.teachers) {
            if(teacherSurname === teacher.surname) {
                teacher.addStudent(newStudent);
            }
        }
    }

    bestTeacher() {
        let means = [];
        for (const teacher of this.teachers) {
            let actualBiggerMeanForTeacher = 0;
            let studentBiggerMean = teacher.students[0];
            for (const student of teacher.students) {
                if (student.calculateMean() > actualBiggerMeanForTeacher) {
                    actualBiggerMeanForTeacher = student.calculateMean();
                    studentBiggerMean = student;
                }
            }
            means.push({mean: actualBiggerMeanForTeacher, teach: teacher.surname + " " + teacher.name, stud: studentBiggerMean});
        }
        means.sort(this.compareMeansForTeacher);
        return "In base ai dati attuali il professore migliore è " + means[0].teach + ", grazie allo studente:\n\n" + means[0].stud.toString();
    }

    compareMeansForTeacher(val1, val2) {
        return val2.mean - val1.mean;
    }

    toString() {
        let principalDescription = "PRESIDE: \n\n" 
                               + "Nome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Scuola: " + this.school + "\n";

        if (this.teachers.length === 0) {
            principalDescription += "\n-----------------\nL'insegnate, al momento, non ha docenti assegnati."
        } else {
            for (let i = 0; i < this.teachers.length; i++) {
                let teacherDescription = "\n-----------------\nDOCENTE " + (i + 1) + "\n" + this.teachers[i].toString();
                principalDescription += teacherDescription;
            }
        }
        return principalDescription;
    }

}