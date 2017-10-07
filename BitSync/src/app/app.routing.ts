import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '**', redirectTo: '/main'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);