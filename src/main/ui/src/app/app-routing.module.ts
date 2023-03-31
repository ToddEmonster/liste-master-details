import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from "./pages/commitment/todo.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {TodoLayoutComponent} from "./layouts/commitment/todo-layout.component";


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'commitment/:id',
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
