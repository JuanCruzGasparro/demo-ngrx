import { Component } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

type IndexLink = {
  name: string;
  path: string;
};

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  public links: IndexLink[] = [
    { name: 'Basic Todos', path: 'todos' },
    { name: 'Drag & Drop', path: 'drag-and-drop' },
    { name: 'Signals', path: 'signals' },
  ];

  constructor(private _router: Router) {}

  public redirectTo({ path }: IndexLink): void {
    this._router.navigateByUrl(`demos/${path}`);
  }
}
