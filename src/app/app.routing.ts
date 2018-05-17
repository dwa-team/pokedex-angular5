import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicListComponent } from './pages/comic-list/comic-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularyComponent } from './pages/formulary/formulary.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'comics', component:ComicListComponent },
    { path:'comics/:ident', component:ComicListComponent },
    { path:'home', component:HomeComponent },
    { path:'form', component:FormularyComponent }
    // { path:'**', component:FrutasComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
