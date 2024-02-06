import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material.module';
import { ThemeService } from '@shared/services/theme/theme.service';
import { Theme } from '@shared/enums/theme.enum';
import { TopBarService } from '@shared/services/top-bar/top-bar.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent implements OnInit {
  public themes = Theme;
  public isTopBarVisible$!: BehaviorSubject<boolean>;

  constructor(
    private _route: ActivatedRoute,
    private _themeService: ThemeService,
    private _topBarService: TopBarService
  ) {}

  get isDarkMode(): boolean {
    return this._themeService.isDarkMode;
  }

  ngOnInit(): void {
    this.isTopBarVisible$ = this._topBarService.isVisible;
    this._setTopBarVisibility();
  }

  toggleThemeClickHandler(): void {
    this._themeService.toggleDarkMode();
  }

  private _setTopBarVisibility(): void {
    this._topBarService.isVisible = this._route.snapshot.data['hideTopBar']
      ? false
      : true;
  }
}
