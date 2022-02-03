class Principal extends Person {

    constructor(name, surname, age, gender, school) {
        // this.name = name;
        // this.surname = surname;
        // this.age = age;
        // this.gender = gender;
        super(name, surname, age, gender);
        this.school = school;
        this.teachers = [];
    }

    addTeacher(teacherPassed) {
        if (this.teachers.length === 0) {
            this.teachers.push(teacherPassed);
        } else {
            for (const teacher of this.teachers) {
                if (teacherPassed.surname === teacher.surname) {
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
        if (this.teachers.length === 0) {
            return "Non c'è, al momento, nessun miglior insegnate."
        } else {
            let means = []; // Inizializzo un array vuoto che mi servirà per tenere ogni teacher con il suo studente migliore e la relativa media.
            for (const teacher of this.teachers) { // Ciclo su tutti i teacher del preside.
                let actualBiggerMeanForTeacher = 0; // Inizializzo una variabile di appoggio che tiene al suo interno la media più alta attuale, per quel professore.
                let studentBiggerMean = teacher.students[0]; // Inizializzo una variabile di appoggio che tiene al suo interno lo studente che ha la media attuale più alta.
                for (const student of teacher.students) { // Ciclo su tutti gli studenti del docente corrente
                    if (student.calculateMean() > actualBiggerMeanForTeacher) { // Se la media dello studente attuale è maggiore di quella in memoria...
                        actualBiggerMeanForTeacher = student.calculateMean(); // La media attuale più alta sarà quella dello studente corrente
                        studentBiggerMean = student; // Aggiorno anche lo studente che ha la media corrente più alta
                    }
                }
                means.push({ mean: actualBiggerMeanForTeacher, teach: teacher.name + " " + teacher.surname, stud: studentBiggerMean }); // Finito il ciclo degli studenti aggiungo all'array
                                                                                                                                        // un oggetto che contiene: la media più alta attuale
                                                                                                                                        // del professore in esame ora con il cilo; lo studente
                                                                                                                                        // che ha quella media; il professore
            }
            means.sort(this.compareMeansForTeacher); // Ordino l'array di oggetti con il sort, utilizzando una compareFunction di appoggio
            return "In base ai dati attuali il docente migliore è '" + means[0].teach + "', grazie allo studente:\n\n" + means[0].stud.toString(); // Alla fine il primo elemento
                                                                                                                                                   // dell'array di oggetti ordinato sarà
                                                                                                                                                   // quello corrispondente al best teacher.
                                                                                                                                                   // Ritorno una stringa contente nome e cognome
                                                                                                                                                   // del teacher e il toString() dello studente.
        }
    }

    compareMeansForTeacher(val1, val2) {
        return val2.mean - val1.mean;
    }

    generateCode() {
        // let now = new Date();
        // let actualYear = now.getFullYear();
        // let birthYear = actualYear - this.age;
        // let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear + this.gender + this.school[0];
        // return code;
        const code = super.generateCode() + this.school[0];
        return code;
    }

    toString() {
        let principalDescription = "PRESIDE: \n\n" 
                               + "Nome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Scuola: " + this.school + "\n"
                               + "Insegnanti:";

        if (this.teachers.length === 0) {
            principalDescription += "\n-----------------\nIl preside, al momento, non ha docenti assegnati."
        } else {
            for (let i = 0; i < this.teachers.length; i++) {
                let teacherDescription = "\n-------------------------------------------------------\nDOCENTE " + (i + 1) + "\n" + this.teachers[i].toString();
                principalDescription += teacherDescription;
            }
        }
        return principalDescription;
    }

}