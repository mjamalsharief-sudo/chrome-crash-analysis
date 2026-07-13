public with sharing class CrashController {
    @AuraEnabled(cacheable=true)
    public static List<Crash_Incident__c> getCrashIncidents() {
        return [
            SELECT Name, Exception_Type__c, App_Version__c, Triage_Status__c 
            FROM Crash_Incident__c 
            ORDER BY CreatedDate DESC 
            LIMIT 100
        ];
    }
}
