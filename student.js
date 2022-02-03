class Student extends Person { // extends Person = vuol dire ce la classe Student estende (eredita) la classe Person
    
    constructor(name, surname, age, gender) { // Nel costruttore vado ad inserire tutte le proprietà che ritengo fondamentali quando creo un nuovo studente
        // this.name = name; // this è lo studente, proprio lui, quando viene creato
        // this.surname = surname;
        // this.age = age;
        // this.gender = gender;
        super(name, surname, age, gender);
        this._grades = []; // Quando non ho ancora una proprietà posso dichiarne la scatola come vuota e riempirla dopo.
    }

    set grade(value) {
        if (value >= 0 && value <= 10) {
            this._grades.push(value);
        }
    }

    get grade() {
        return this.calculateMean();
    }

    // get gender() {
    //     return this._gender;
    // }

    // get age() { // Questa è una proprietà nuova, perché non è presente nel constructor dello studente, che viene creata a runtime
    //     let now = new Date();
    //     let age = now.getFullYear() - this.yob;
    //     return age;
    // }

    // set age(value) {
    //     let now = new Date();
    //     this.yob = now.getFullYear() - value;
    // }

    calculateMean() { // In una classe per definire i metodi (o funzioni) non serve mettere "function" all'inizio. Perché un metodo è visto come una proprietà dello studente
        if (this._grades.length === 0) {
            return -1;
        }
        let sum = this._grades.reduce((p, c) => p + c);
        let mean = sum / this._grades.length;
        //return mean;
        return Math.round((mean + Number.EPSILON) * 100) / 100; // Arrotonda la media a 2 decimali
    } // Quando mi servono i dati dello studente metto "this"

    // generateCode() {
    //     let now = new Date(); // Questo now viene riempito con la data attuale di quando l'esecuzione del codice passa in questo punto.
    //     let actualYear = now.getFullYear(); // Data una data, posso prendere solo l'anno.
    //     let birthYear = actualYear - this.age;
    //     let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
    //     return code;
    // }

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