// react/src/services/LoadingIndicatorService.ts

export class LoadingIndicatorService {
  private loading: boolean;

  constructor() {
    this.loading = false;
  }

  isLoading(): boolean {
    return this.loading;
  }

  showLoading(): void {
    this.loading = true;
  }

  hideLoading(): void {
    this.loading = false;
  }
}

export default new LoadingIndicatorService();