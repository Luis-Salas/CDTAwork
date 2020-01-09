import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { HttpClientModule } from '@angular/common/http';
import { BurbankComponent } from './burbank/burbank.component';


const routes: Routes = [
  { path: 'chicago',component: ChicagoComponent },
  { path: 'burbank',component: BurbankComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
