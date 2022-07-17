import { LightningElement, wire } from 'lwc';
// import { createRecord } from 'lightning/uiRecordApi';
import { Uczestnik } from './Uczestnik';
import { Wydarzenie } from './Wydarzenie';

// import USER_OBJECT from '@salesforce/schema/User';
// import NAME from '@salesforce/schema/User.Name';
// import USER_BIRTHDATE from '@salesforce/schema/User.Date'
import addUczestnik from '@salesforce/apex/AddUczestnikController.addUczestnik';
import addWydarzenie from '@salesforce/apex/AddWydarzenieController.addWydarzenie';

// import EVENT_OBJECT from '@salesforce/schema/Event';
// import EVENT_NAME from '@salesforce/schema/Event.Name';
// import EVENT_DATE from '@salesforce/schema/Event.Date';
// import EVENT_DESCRIPTION from '@salesforce/schema/Event.Description';

export default class Form extends LightningElement {
    uczestnik = new Uczestnik();
    wydarzenie = new Wydarzenie();

    handleEventNameChange(event) {
        this.wydarzenie.setNazwa = event.target.value;
    }
    handleEventLocationChange(event) {
        this.wydarzenie.setMiejsce = event.target.value;
    }

    handleEventDateChange(event) {
        this.wydarzenie.setData = event.target.value;
    }

    handleEventDescriptionChange(event) {
        this.wydarzenie.setOpis = event.target.value;
    }

    handleUserFirstNameChange(event) {
        this.uczestnik.setFirstName = event.target.value;
    }

    handleUserLastNameChange(event) {
        this.uczestnik.setLastName = event.target.value;
    }

    handleUserBirthDateChange(event) {
        this.uczestnik.setBirthDate = event.target.value;
    }

    handleUserEmailChange(event) {
        this.uczestnik.setEmail = event.target.value;
    }

    handleCreation() {
        if (this.uczestnik.birthDate == null || this.calculateAge(this.uczestnik.birthDate) < 18) {
            alert("Uczestnik musi być pełnoletni!");
            return;
        }
        addUczestnik({
            firstName: this.uczestnik.getFirstName,
            lastName: this.uczestnik.getLastName,
            birthDate: this.uczestnik.getBirthDate,
            email: this.uczestnik.getEmail
        }).catch(error => {
            console.log(error.body.message);
        });
        addWydarzenie({
            name: this.wydarzenie.getNazwa,
            d: this.wydarzenie.getData,
            location: this.wydarzenie.getMiejsce,
            description: this.wydarzenie.getOpis
        }).catch(error => {
            console.log(error.body.message);
        });
        alert("Dane zostały poprawnie zapisane w bazie!");
    }

    calculateAge(date) {
        var today = new Date();
        var birthDate = new Date(date);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }    
        return age;
    }
    
}