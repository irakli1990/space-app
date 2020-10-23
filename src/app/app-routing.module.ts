import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

const routes: Routes = [
  { path: 'intel', loadChildren: () => import(`./intel/intel.module`).then(m => m.IntelModule) },
  { path: 'nasa', loadChildren: () => import(`./photo-browser/photo-browser.module`).then(m => m.PhotoBrowserModule) },
  { path: 'research', loadChildren: () => import(`./planet-detector/planet-detector.module`).then(m => m.PlanetDetectorModule) },
  { path: '', redirectTo: 'space', pathMatch: 'full' },
  { path: '**', component: BlackHoleComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
