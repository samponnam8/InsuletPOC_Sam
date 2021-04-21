import { LightningElement } from 'lwc';

export default class Cometdparent extends LightningElement {
    messageReceived(event) {
        const message = event.detail;
        console.log(message);

    }
}