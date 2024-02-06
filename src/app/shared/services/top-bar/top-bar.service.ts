import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopBarService {
  private _isVisible$ = new BehaviorSubject<boolean>(true);

  constructor() {}

  set isVisible(visibility: boolean) {
    this._isVisible$.next(visibility);
  }

  get isVisible(): BehaviorSubject<boolean> {
    return this._isVisible$;
  }
}
