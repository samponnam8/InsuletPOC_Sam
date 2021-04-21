import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class TrainingForm extends LightningElement {
    @api recordId;
    @track currentStep;
    type = '';
   // feedbackFlag = 'Yes';

    handleSave() {
        console.log('success');
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: `Response created`,
                variant: 'success',
            }),
        );
               this.template
                   .querySelector('div.stepFour')
                   .classList.add('slds-hide');
   
        
    }

   /* handleRadioButton(event) {
        console.log('handle event' + event.target.value);
        this.feedbackFlag = event.target.value;

    }*/

    wizardDecider(){
        if (this.type == 'In-Person') {
            
            this.currentStep = '3';
            this.template.querySelector('div.stepTwo').classList.add('slds-hide');
            this.template
                .querySelector('div.stepThree')
                .classList.remove('slds-hide');
        }else{
            this.currentStep='4';
            this.template.querySelector('div.stepTwo').classList.add('slds-hide');
            this.template
                .querySelector('div.stepFour')
                .classList.remove('slds-hide');
        }
    }

    goToStepFour(){
        this.currentStep = '4';
        this.template.querySelector('div.stepThree').classList.add('slds-hide');
        this.template
            .querySelector('div.stepFour')
            .classList.remove('slds-hide');
    }
    changeHandler(event) {
        this.type = event.target.value;
    }
    goBackToStepOne() {
        this.currentStep = '1';

        this.template.querySelector('div.stepTwo').classList.add('slds-hide');
        this.template
            .querySelector('div.stepOne')
            .classList.remove('slds-hide');

            if (this.type == 'Online') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.online')
                    .classList.add('slds-hide');
                this.template.querySelector('lightning-input-field.onlinea')
                    .classList.add('slds-hide');
            }
            else if (this.type == 'Telephonic') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.Telephonic')
                    .classList.add('slds-hide');
    
            }
    
            else if (this.type == 'In-Person') {
                this.template.querySelector('lightning-input-field.inPerson')
                    .classList.add('slds-hide');
         
            }
            else if (this.type == 'Documents') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.Documents')
                    .classList.add('slds-hide');
    
            }
    }

    goToStepTwo() {

        this.disableDocType = true;
        this.currentStep = '2';

        this.template.querySelector('div.stepOne').classList.add('slds-hide');
        this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');
        if (this.type == 'Online') {
            //   console.log('in online');
            this.template.querySelector('lightning-input-field.online')
                .classList.remove('slds-hide');
            this.template.querySelector('lightning-input-field.onlinea')
                .classList.remove('slds-hide');
        }
        else if (this.type === 'Telephonic') {
            //   console.log('in online');
            this.template.querySelector('lightning-input-field.Telephonic')
                .classList.remove('slds-hide');

        }

        else if (this.type == 'In-Person') {
            this.template.querySelector('lightning-input-field.inPerson')
                .classList.remove('slds-hide');
     
        }
        else if (this.type == 'Documents') {
            //   console.log('in online');
            this.template.querySelector('lightning-input-field.Documents')
                .classList.remove('slds-hide');

        }

    }
    goBackToStepTwo() {
        this.currentStep = '2';

        this.template.querySelector('div.stepThree').classList.add('slds-hide');

        this.template
            .querySelector('div.stepTwo')
            .classList.remove('slds-hide');

            if (this.type == 'Online') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.online')
                    .classList.remove('slds-hide');
                this.template.querySelector('lightning-input-field.onlinea')
                    .classList.remove('slds-hide');
            }
            else if (this.type == 'Telephonic') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.Telephonic')
                    .classList.remove('slds-hide');
    
            }
    
            else if (this.type == 'In-Person') {
                this.template.querySelector('lightning-input-field.inPerson')
                    .classList.remove('slds-hide');
          
            }
            else if (this.type == 'Documents') {
                //   console.log('in online');
                this.template.querySelector('lightning-input-field.Documents')
                    .classList.remove('slds-hide');
    
            }
    }
   /* goToStepThree() {
        this.currentStep = '3';
        
        console.log('flag value' + this.feedbackFlag);
        if (this.feedbackFlag == 'No') {
         //      this.currentStep = '3';

            this.template.querySelector('div.stepTwo').classList.add('slds-hide');
            this.template
                .querySelector('div.stepThree')
                .classList.remove('slds-hide');
        }
        else if (this.feedbackFlag == 'Yes') {
            console.log('setp value '+this.currentStep);
            //this.currentStep = '3';
            this.template.querySelector('div.stepTwo').classList.add('slds-hide');
            this.template
                .querySelector('div.stepFour')
                .classList.remove('slds-hide');

        }
    }*/
}