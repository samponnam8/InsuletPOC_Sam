trigger createCasePT on Cloud_News__e (after insert) {

    
       List<Case> cases = new List<Case>();
    // Get queue Id for case owner
    Group queue = [SELECT Id FROM Group WHERE Name='Regional Dispatch' AND Type='Queue'];
    // Iterate through each notification.
    for (Cloud_News__e event : Trigger.New) {
        if (event.Urgent__c == true) {
            // Create Case to dispatch new team.
            Case cs = new Case();
            cs.Priority = 'High';
            cs.Subject = 'News team dispatch to ' +
                event.Location__c;
            cs.OwnerId = queue.Id;
            cases.add(cs);
        }
   }
    System.debug('case created'+cases);
    // Insert all cases corresponding to events received.
    insert cases;


}