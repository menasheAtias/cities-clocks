import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesClocksComponent } from './components/cities-clocks/cities-clocks.component';

const routes: Routes = [{ path: '', component:CitiesClocksComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
