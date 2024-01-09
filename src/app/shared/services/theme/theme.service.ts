import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Theme } from '@shared/enums/theme.enum';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _isDarkMode$ = new BehaviorSubject<boolean>(false);

  private _THEME_STORE_KEY = 'isDarkMode';

  constructor() {}

  get isDarkMode(): boolean {
    return JSON.parse(localStorage.getItem(this._THEME_STORE_KEY) || 'false');
  }

  set isDarkMode(value: boolean) {
    localStorage.setItem(this._THEME_STORE_KEY, JSON.stringify(value));
  }

  toggleDarkMode(): void {
    this._isDarkMode$.next(!this.isDarkMode);
    this.isDarkMode = !this.isDarkMode;
  }
}
