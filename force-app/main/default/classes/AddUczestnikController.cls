public with sharing class AddUczestnikController {
    @AuraEnabled
    public static void addUczestnik(String firstName, String lastName, Date birthDate, String email) {
        Uczestnik__c uczestnik = new Uczestnik__c(
            Uczestnik_Birth_Date__c = birthDate,
            Uczestnik_Email__c = email,
            Name = firstName,
            Uczestnik_Last_Name__c = lastName
        );

        try {
            insert uczestnik;   
        } catch (DMLException e) {
            System.debug(e.getMessage());
        }
    }
}
