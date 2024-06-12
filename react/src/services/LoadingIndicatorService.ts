import { useEffect } from 'react';

export class LoadingIndicatorService {
  private body: HTMLElement;

  constructor() {
    this.body = document.body;
  }

  showLoadingIndicator() {
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>';
    this.body.appendChild(spinner);
  }

  hideLoadingIndicator() {
    const spinner = document.getElementById('spinner');
    if (spinner && spinner.parentElement) {
      spinner.parentElement.removeChild(spinner);
    }
  }
}

export const useLoadingIndicator = () => {
  const loadingIndicatorService = new LoadingIndicatorService();

  useEffect(() => {
    // Example usage of the loading indicator service
    loadingIndicatorService.showLoadingIndicator();

    return () => {
      loadingIndicatorService.hideLoadingIndicator();
    };
  }, []);

  return loadingIndicatorService;
};