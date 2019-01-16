import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImgCardComponent } from './img-card/img-card.component';

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'img-card', component: ImgCardComponent},
    {path: '', component: DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
