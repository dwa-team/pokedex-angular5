import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FrutasComponent } from './frutas/frutas.component';
import { ComicListComponent } from './comic-list/comic-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FrutasComponent,
    ComicListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }