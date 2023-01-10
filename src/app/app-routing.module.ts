import { MomentComponent } from './components/page/moment/moment.component';
import { NewMomentComponent } from './components/page/new-moment/new-moment.component';
import { AboutComponent } from './components/page/about/about.component';
import { HomeComponent } from './components/page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: " ", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "moments/new", component: NewMomentComponent },
  { path: "moments/:id", component: MomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
