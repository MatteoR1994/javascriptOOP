class Student {
    
    constructor(name, surname, age, gender) { // Nel costruttore vado ad inserire tutte le proprietà che ritengo fondamentali quando creo un nuovo studente
        this.name = name; // this è lo studente, proprio lui, quando viene creato
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.grades = []; // Quando non ho ancora una proprietà posso dichiarne la scatola come vuota e riempirla dopo.
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 10) {
            this.grades.push(grade);
        }
    }

    calculateMean() { // In una classe per definire i metodi (o funzioni) non serve mettere "function" all'inizio. Perché un metodo è visto come una proprietà dello studente
        if (this.grades.length === 0) {
            return -1;
        }
        let sum = this.grades.reduce((p, c) => p + c);
        let mean = sum / this.grades.length;
        return mean;
    } // Quando mi servono i dati dello studente metto "this"

    generateCode() {
        let now = new Date(); // Questo now viene riempito con la data attuale di quando l'esecuzione del codice passa in questo punto.
        let actualYear = now.getFullYear(); // Data una data, posso prendere solo l'anno.
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
        return code;
    }

    toString() { // Quando vogliamo printare un recap dello studente (o di un altro oggetto di un'altra classe) a console useremo il metodo toString()
        let mean = this.calculateMean();
        if (mean === -1) {
            mean = "N/c";
        }
        let studentDescription = "Nome: " + this.name + "\n"
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Media: " + mean + "\n";
        return studentDescription;
    }

}

// Creare una classe Teacher:

//  ° Proprietà fondamentali
//  - name
//  - surnem
//  - age
//  - gender
//  - degree

//  ° Proprietà non fondamentali
//  - students (array, inizialmente vuoto)

//  ° Metodi:
//  - toString()
//      - Stampi prima i dati dell'insegnante
//      - Sotto il nome dell'insegnante metta tutte le schede dei suoi studenti
//  - addStudents(studente)
//      - Se lo studente non è già tra i suoi studenti allora lo aggiunge (per ora due studenti sono uguali se hanno studentCode uguale)
//  - addGrade(studentCode, grade) => assegna il grade a quello studente
//  - bestStudent() => deve restituire il toString() dello studente con la media più alta