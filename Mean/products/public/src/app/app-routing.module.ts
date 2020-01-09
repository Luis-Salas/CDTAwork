import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './product/details/details.component';
import { EditComponent } from './product/edit/edit.component';
import { CreateComponent } from './product/create/create.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  { path: 'products', component: ProductComponent, children: [
    { path: 'details', component: DetailsComponent },
    { path: 'edit', component: EditComponent },
    { path: 'create', component: CreateComponent }
    
  ]
},
{ path: 'reviews', component: ReviewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
