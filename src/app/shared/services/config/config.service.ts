import { Injectable } from '@angular/core';
import { IEnvironment } from '@shared/interfaces/environment.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _environment: IEnvironment = environment;

  constructor() {}

  get apiUrl(): string {
    return this._environment.api.url;
  }
}
