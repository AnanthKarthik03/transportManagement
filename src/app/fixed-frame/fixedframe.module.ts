import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [HeaderComponent, FooterComponent],
})
export class FixedFrameModule {}
