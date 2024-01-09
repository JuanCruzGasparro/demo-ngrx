import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '@shared/components/top-bar/top-bar.component';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Theme } from '@shared/enums/theme.enum';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor(private _themeService: ThemeService) {}

  getThemeClass(): string {
    return this._themeService.isDarkMode ? 'dark-theme' : 'light-theme';
  }
}
