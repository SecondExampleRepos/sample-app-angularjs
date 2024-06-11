// react/src/services/DialogService.ts

export class DialogService {
  // Placeholder for any methods or properties that might be needed


  private dialogElement: HTMLElement | null = null;

  /**
   * Shows the dialog by adding the 'active' class.
   */
  showDialog() {
    if (this.dialogElement) {
      this.dialogElement.classList.add('active');
    }
  }

  /**
   * Hides the dialog by removing the 'active' class.
   */
  hideDialog() {
    if (this.dialogElement) {
      this.dialogElement.classList.remove('active');
    }
  }

  /**
   * Sets the dialog element reference.
   * @param element - The dialog element to be controlled.
   */
  setDialogElement(element: HTMLElement) {
    this.dialogElement = element;
  }

  /**
   * Returns a promise that resolves when the user confirms the dialog,
   * and rejects when the user cancels the dialog.
   */
  getDialogPromise(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (this.dialogElement) {
        const yesButton = this.dialogElement.querySelector('.btn-primary[ng-click="yes()"]');
        const noButton = this.dialogElement.querySelector('.btn-primary[ng-click="no()"]');

        if (yesButton && noButton) {
          yesButton.addEventListener('click', () => resolve(true));
          noButton.addEventListener('click', () => reject(false));
        }
      }
    });
  }
}