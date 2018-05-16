import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ComicListComponent } from './pages/comic-list/comic-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormularyComponent } from './pages/formulary/formulary.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    FooterComponent,
    HomeComponent,
    MultiplyPipe,
    FilterPipe,
    FormularyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing, 
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
