import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import Training__c_OBJECT from '@salesforce/schema/Training__c';
import NAME_FIELD from '@salesforce/schema/Training__c.Name';


export default class TestLWCWizard extends NavigationMixin(LightningElement) {


     saveResponse() {

        const fields = {'Name':'test111'};

        const object = {apiname:'Account',fields};

        createRecord(object).then(response=>{
            console.log('Account has been created',response.id)
            this.recordId = response.id;

        }).catch(error=>{

            console.error('Error',error.body.message);

        })
        // 0 - Define the fields object and the current record to save
        //const fields = {};
      
      
      //  console.log('check1'+JSOn.stringify(trainingRecord));
        // 1 - Get current form inputs
        /*let inputs = this.template.querySelectorAll('lightning-input');
        console.log('input'+JSON.stringify(inputs))
        // 2 - Loop the input list and get every input value and assign it to the desired field
        //     The field name is set on every input dataset as the attribute "field"
        inputs.forEach(input => {
            console.log('input value'+input.value)
            fields[input.dataset.fieldName] = input.value;
            console.log('fields'+fields[input.dataset.fieldName] );

        });
           
        // 3 - Create the response using Lightning UI Record API 
        //     and show a toast message with the result
        const fields = {
            Name:'test',
            HCP_Name__c: ''
        
        };
    
        const trainingRecord = { apiName: Training__c_OBJECT.objectApiName, fields };
        createRecord(trainingRecord).then(res => {
            console.log('res'+res);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: `Response created`,
                    variant: 'success',
                }),
            );

            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes: {
                    recordId: res.id,
                    objectApiName: 'Training__c',
                    actionName: 'view'

                }
            });
        }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                })
            );
        });*/
    }

    /**
     * Validates the form, checking for lightning-input errors and
     * controlling that wizard should advance to the next step

     */
    validate() {
        // 1 - Takes all the inputs from the step - "this" is bind to wizard-step component
        const allValid = [...this.querySelectorAll('lightning-input')]
            .reduce((validSoFar, inputCmp) => {
                inputCmp.reportValidity();
                return validSoFar && inputCmp.checkValidity();
            }, true);

        // 2 - Returns true/false; if the validation were asynchronous, it should return a Promise instead
        return allValid;
    }
}