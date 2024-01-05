import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [TopBarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TopBarComponent],
})
export class SharedModule {}
