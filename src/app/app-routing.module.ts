import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './design/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-ui', loadChildren: () => import('./design/basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./design/charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./design/forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./design/tables/tables.module').then(m => m.TablesModule) },
  { path: 'icons', loadChildren: () => import('./design/icons/icons.module').then(m => m.IconsModule) },
  { path: 'general-pages', loadChildren: () => import('./design/general-pages/general-pages.module').then(m => m.GeneralPagesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./design/user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./design/error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'staff', loadChildren: () => import('./layout/staff/staff.module').then(m => m.StaffModule) },
  { path: 'contractor', loadChildren: () => import('./layout/contractor/contractor.module').then(m => m.ContractorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
