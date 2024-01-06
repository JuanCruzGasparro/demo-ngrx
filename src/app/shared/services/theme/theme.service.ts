import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Theme } from '@shared/enums/theme.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public currentTheme: Theme = this._getCurrentTheme();

  private _DEFAULT_THEME = Theme.Light;

  constructor(private _overlayContainer: OverlayContainer) {
    this._setCurrentTheme(this._getCurrentTheme());
  }

  toggleTheme(): void {
    const nextTheme =
      this.currentTheme === Theme.Light ? Theme.Dark : Theme.Light;
    this._setCurrentTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  }

  private _getCurrentTheme(): Theme {
    return (localStorage.getItem('theme') as Theme) || this._DEFAULT_THEME;
  }

  private _setCurrentTheme(theme: Theme): void {
    this.currentTheme = theme;
    // document.body.classList.remove('light-theme', 'dark-theme');
    // document.body.classList.add(theme);
    const overlayContainerClasses =
      this._overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter(
      (item: string) => item.includes('-theme')
    );
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(`${theme}-theme`);
  }
}
