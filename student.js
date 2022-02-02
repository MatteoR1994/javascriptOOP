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

}