import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent, TimeComponent } from './app.component';


const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'time', component: TimeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
