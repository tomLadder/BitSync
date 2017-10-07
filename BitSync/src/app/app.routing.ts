// import { IntroductionComponent } from './introduction/introduction.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
    //{ path: 'introduction', component: IntroductionComponent },
    //{ path: '**', redirectTo: '/introduction'},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);