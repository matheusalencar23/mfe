import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const MFE1_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(MFE1_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
