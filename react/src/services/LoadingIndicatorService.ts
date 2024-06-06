// react/src/services/LoadingIndicatorService.ts

export class LoadingIndicatorService {
  private isLoading: boolean;

  constructor() {
    this.isLoading = false;
  }

  public showLoading(): void {
    this.isLoading = true;
document.body.classList.add('loading');
  }

  public hideLoading(): void {
    this.isLoading = false;
document.getElementById('loading-indicator')?.style.display = 'none';
  }

  public getLoadingStatus(): boolean {
    return this.isLoading;
  }
}