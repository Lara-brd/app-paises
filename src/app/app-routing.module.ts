import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { CountryInfoComponent } from './pages/country-info/country-info.component';

const routes: Routes = [
  { path:'home', component:LayoutComponent },
  { path:'info', component:CountryInfoComponent },
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
