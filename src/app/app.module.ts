import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, MatButtonModule, MatSidenavModule, MatRadioModule, MatIconModule, MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, FormatStringPipe } from './app.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HomeComponent,
    FormatStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
