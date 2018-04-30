import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicListComponent } from './comic-list/comic-list.component';
import { FrutasComponent } from './frutas/frutas.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path:'', component:HomeComponent },
    { path:'comics', component:ComicListComponent },
    { path:'comics/:ident', component:ComicListComponent },
    { path:'frutas', component:FrutasComponent },
    { path:'home', component:HomeComponent }
    // { path:'**', component:FrutasComponent }
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot (appRoutes);
