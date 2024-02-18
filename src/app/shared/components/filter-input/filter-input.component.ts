import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from '@shared/modules/material.module';

@Component({
  selector: 'app-filter-input',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './filter-input.component.html',
  styleUrl: './filter-input.component.scss',
})
export class FilterInputComponent {
  name = input<string>();
  label = 'Filter';
}
