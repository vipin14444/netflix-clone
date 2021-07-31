import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './protected-app/browse/browse.component';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedAppComponent } from './protected-app/protected-app.component';

const routes: Routes = [
  {
    path: '',
    component: ProtectedAppComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'browse',
      },
      {
        path: 'browse',
        component: BrowseComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [BrowseComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedAppModule {}
