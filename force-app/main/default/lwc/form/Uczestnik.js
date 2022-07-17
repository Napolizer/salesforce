export class Uczestnik {
    firstName;
    lastName;
    birthDate;
    email;

    get getFirstName() {
        return this.firstName;
    }
    get getLastName() {
        return this.lastName;
    }
    get getBirthDate() {
        return this.birthDate;
    }
    get getEmail() {
        return this.email;
    }

    set setFirstName(name) {
        this.firstName = name;
    }
    set setLastName(name) {
        this.lastName = name;
    }
    set setBirthDate(date) {
        this.birthDate = date;
    }
    set setEmail(email) {
        this.email = email;
    }
}