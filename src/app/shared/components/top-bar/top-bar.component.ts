import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Theme } from '@shared/enums/theme.enum';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  public themes = Theme;

  constructor(private _themeService: ThemeService) {}

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode;
  }

  ngOnInit(): void {}

  toggleThemeClickHandler(): void {
    this._themeService.toggleDarkMode();
  }
}
