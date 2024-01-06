import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Theme } from '@shared/enums/theme.enum';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private _overlayContainer: OverlayContainer) {}

  setTheme(theme: string): void {
    const overlayContainerClasses =
      this._overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes('-theme')
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(`${theme}-theme`);
    localStorage.setItem('theme', theme);
  }

  getCurrentTheme(): string {
    return localStorage.getItem('theme') || Theme.Light;
  }
}
