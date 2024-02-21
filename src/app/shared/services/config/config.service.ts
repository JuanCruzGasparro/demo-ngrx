import { Injectable } from '@angular/core';
import { IEnvironment } from '@shared/interfaces/environment.interface';
import { environment } from 'src/environments/environment';

// Respect this getter naming: "{ api: { url } } => apiUrl" or "{ ui: { theme } } => uiTheme"

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _environment: IEnvironment = environment;

  constructor() {}

  get apiUrl(): string {
    return this._environment.api.url;
  }

  get uiTheme(): 'dark' | 'light' {
    return this._environment.ui.theme;
  }
}
