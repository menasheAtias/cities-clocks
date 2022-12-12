import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgClockComponent } from './common/ng-clock/ng-clock.component';
import { CitiesClocksComponent } from './components/cities-clocks/cities-clocks.component';
import { ChipsAutocompleteComponent } from './common/chips-autocomplete/chips-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NgClockComponent,
    CitiesClocksComponent,
    ChipsAutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
