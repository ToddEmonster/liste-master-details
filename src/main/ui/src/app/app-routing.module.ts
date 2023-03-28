import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./todo.component";
import {MainPageComponent} from "./main-page.component";
import {TodoLayoutComponent} from "./todo-layout.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'todo/:id',
    component: TodoLayoutComponent,
    children: [
      {
        path: '',
        component: TodoComponent
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
