// react/src/services/LoadingIndicatorService.ts

class LoadingIndicatorService {
  private loading: boolean;

  constructor() {
    this.loading = false;
  }

  showLoading() {
    this.loading = true;
document.getElementById('loading-indicator')?.classList.add('visible');
  }

  hideLoading() {
    this.loading = false;
document.getElementById('loading-indicator')?.style.display = 'none';
  }

  isLoading() {
    return this.loading;
  }
}

export default LoadingIndicatorService;