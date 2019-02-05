import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';
import { SideMenuService } from './components/side-menu/shared/side-menu.service';
import { ContentService } from './components/home/shared/content.service';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],
  providers: [
    SideMenuService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
