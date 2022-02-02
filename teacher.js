class Teacher {

    constructor(name, surname, age, gender, degree) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.degree = degree;
        this.students = [];
    }

    addStudent(studentPassed) { // dopo, con map, reduce
        if (this.students.length === 0) {
            this.students.push(studentPassed);
        } else {
            // for (const student of this.students) {
            //     if (studentPassed.generateCode() !== student.generateCode()) {
            //         this.students.push(studentPassed);
            //         break;
            //     } else {
            //         console.log("Lo studente che stai tentando di inserire c'è già.");
            //     }
            // }
            for (const student of this.students) {
                if (studentPassed.generateCode() === student.generateCode()) {
                    console.log("Lo studente che stai tentando di inserire c'è già.");
                    return;
                }
            }
            this.students.push(studentPassed);
        }
    }

    addStudentGrade(studentCode, grade) {
        for (const student of this.students) {
            if(studentCode === student.generateCode()) {
                student.addGrade(grade);
            }
        }
    }

    bestStudent() { // Se due studenti hanno media uguale, prendiamo quello con età minore. dopo, con reduce
        let biggerMeanStudent = this.students[0];
        let biggerMean = biggerMeanStudent.calculateMean();
        for (let i = 1; i < this.students.length; i++) {
            const element = this.students[i];
            if (this.students[i].calculateMean() >= biggerMean) {
                // biggerMean = this.students[i].calculateMean();
                // biggerMeanStudent = this.students[i]
                if (this.students[i].calculateMean() > biggerMean) {
                    biggerMean = this.students[i].calculateMean();
                    biggerMeanStudent = this.students[i]
                } else if(this.students[i].age < biggerMeanStudent.age) {
                    biggerMeanStudent = this.students[i];
                    biggerMean = this.students[i].calculateMean();
                }                
            }
        }

        //this.students.reduce((p, c) =>        this.students[i].calculateMean() >= p.calculateMean() ? ()                  );        

        return "Lo studente migliore di " + this.surname + " è:\n\n" + biggerMeanStudent.toString();
    }

    toString() {
        let teacherDescription = "INSEGNANTE: \n\n" 
                               + "Nome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Grado: " + this.degree + "\n";

        if (this.students.length === 0) {
            teacherDescription += "\n-----------------\nL'insegnate, al momento, non ha studenti assegnati."
        } else {
            for (let i = 0; i < this.students.length; i++) {
                let studentDescription = "\n-----------------\nSTUDENTE " + (i + 1) + "\n" + this.students[i].toString();
                teacherDescription += studentDescription;
            }
        }
        return teacherDescription;
    }

}