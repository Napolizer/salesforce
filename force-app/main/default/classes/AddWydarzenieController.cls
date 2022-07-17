public with sharing class AddWydarzenieController {
    @AuraEnabled
    public static void addWydarzenie(String name, Date d, String location, String description) {
        Wydarzenie__c wydarzenie = new Wydarzenie__c(
            Name = name,
            Data__c = d,
            Miejsce__c = location,
            Opis__c = description
        );

        try {
            insert wydarzenie;   
        } catch (DMLException e) {
            System.debug(e.getMessage());
        }
    }
}
