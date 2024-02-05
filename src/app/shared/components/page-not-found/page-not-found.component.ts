import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@shared/modules/material.module';
import { TopBarService } from '@shared/services/top-bar/top-bar.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent implements OnInit {
  constructor(private _topBarService: TopBarService) {}

  ngOnInit(): void {
    this._topBarService.isVisible = false;
  }
}
