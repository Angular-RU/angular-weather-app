import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoreModule } from '../core.module';
import { SharedModule } from '../../shared/shared.module';
import { CurrentUserStoreService } from '../store/current-user.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [CurrentUserStoreService]
})
export class LayoutModule {}
