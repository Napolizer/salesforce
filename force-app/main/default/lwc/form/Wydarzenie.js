export class Wydarzenie {
    nazwa;
    data;
    miejsce;
    opis;

    get getNazwa() {
        return this.nazwa;
    }
    get getData() {
        return this.data;
    }
    get getMiejsce() {
        return this.miejsce;
    }
    get getOpis() {
        return this.opis;
    }

    set setNazwa(nazwa) {
        this.nazwa = nazwa;
    }
    set setData(data) {
        this.data = data;
    }
    set setMiejsce(miejsce) {
        this.miejsce = miejsce;
    }
    set setOpis(opis) {
        this.opis = opis;
    }
}