// react/src/services/DialogService.ts

class DialogService {
  // Define any state or properties needed for the service
  private dialogState: any;

  constructor() {
    // Initialize any state or properties
    this.dialogState = null;
  }

  // Define methods that were originally in the AngularJS DialogService
  openDialog() {
    // Implement the logic to open a dialog
    this.dialogState = { isOpen: true };
  }

    this.dialogState = null;
    console.log('Dialog closed');
// Implement the logic to close a dialog
this.dialogState = { isOpen: false };
  }

  // Add any other methods or properties as needed
}

export default DialogService;