import { Component } from '@angular/core';
import { MaterialModule } from '@shared/modules/material.module';
import { routes } from '../app.routes';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {}
