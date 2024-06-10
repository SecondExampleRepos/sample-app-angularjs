// react/src/services/LoadingIndicatorService.ts

class LoadingIndicatorService {
  private loading: boolean;

  constructor() {
    this.loading = false;
  }

  isLoading(): boolean {
    return this.loading;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
  }


  resetLoading(): void {
    this.loading = false;
  }
}

export default LoadingIndicatorService;