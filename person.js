class Person {

    constructor(name, surname, age, gender) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
    }

    generateCode() {
        let now = new Date(); // Questo now viene riempito con la data attuale di quando l'esecuzione del codice passa in questo punto.
        let actualYear = now.getFullYear(); // Data una data, posso prendere solo l'anno.
        let birthYear = actualYear - this.age;
        let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear + this.gender;
        return code;
    }

}