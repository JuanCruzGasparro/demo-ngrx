import { Component } from '@angular/core';
import { FilterInputComponent } from '@shared/components/filter-input/filter-input.component';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-signals-index',
  standalone: true,
  imports: [MaterialModule, FilterInputComponent],
  templateUrl: './signals-index.component.html',
  styleUrl: './signals-index.component.scss',
})
export class SignalsIndexComponent {}
