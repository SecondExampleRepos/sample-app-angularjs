// react/src/services/LoadingIndicatorService.ts

class LoadingIndicatorService {
  private loading: boolean;

  constructor() {
    this.loading = false;
  }

  showLoading() {
    this.loading = true;
// Assuming we have a global event system or a state management solution like Redux to handle UI updates
const event = new CustomEvent('showLoadingIndicator');
window.dispatchEvent(event);
  }

// Assuming we have a global event system or a state management solution like Redux or Context API to handle UI updates
const event = new CustomEvent('hideLoadingIndicator');
window.dispatchEvent(event);
    this.loading = false;
// Assuming we have a global event system or a state management solution like Redux or Context API to handle UI updates
const event = new CustomEvent('hideLoadingIndicator');
window.dispatchEvent(event);
  }

  isLoading(): boolean {
    return this.loading;
  }
}

export default LoadingIndicatorService;