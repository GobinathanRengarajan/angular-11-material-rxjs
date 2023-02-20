import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { MatButtonModule } from '@angular/material/button';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  declarations: [AppComponent, PageHeadingComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
