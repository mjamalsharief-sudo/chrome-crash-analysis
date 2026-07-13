import { LightningElement, wire, track } from 'lwc';
import getCrashIncidents from '@salesforce/apex/CrashController.getCrashIncidents';

const COLUMNS = [
    { label: 'Incident Number', fieldName: 'Name', type: 'text' },
    { label: 'Exception Type', fieldName: 'Exception_Type__c', type: 'text' },
    { label: 'App Version', fieldName: 'App_Version__c', type: 'text' },
    { label: 'Status', fieldName: 'Triage_Status__c', type: 'text' }
];

export default class CrashDashboard extends LightningElement {
    columns = COLUMNS;
    @track crashData = [];

    @wire(getCrashIncidents)
    wiredCrashes({ error, data }) {
        if (data) {
            this.crashData = data;
        } else if (error) {
            console.error('Error fetching crashes', error);
        }
    }
}
