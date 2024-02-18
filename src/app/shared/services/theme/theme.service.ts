import { Injectable, signal } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Theme } from '@shared/enums/theme.enum';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _THEME_STORE_KEY = 'uiTheme';
  readonly theme = signal<'dark' | 'light'>(this._config.uiTheme);

  constructor(private _config: ConfigService) {
    if (!this.isDarkMode) this.isDarkMode = this._config.uiTheme === 'dark';
  }

  get isDarkMode(): boolean {
    return JSON.parse(localStorage.getItem(this._THEME_STORE_KEY) || 'false');
  }

  set isDarkMode(value: boolean) {
    localStorage.setItem(this._THEME_STORE_KEY, JSON.stringify(value));
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
  }
}
