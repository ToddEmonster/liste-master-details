import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommitmentComponent} from './pages/commitment/commitment.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {CommitmentLayoutComponent} from './layouts/commitment/commitment-layout.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'commitment/:id',
    component: CommitmentLayoutComponent,
    children: [
      {
        path: '',
        component: CommitmentComponent
      }
    ]},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
