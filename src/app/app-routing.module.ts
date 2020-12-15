import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { advertisementRoutes } from '@modules/core/advertisement/advertisement-routing.module'
import { LoginComponent } from '@shared/components/login/login.component'
import { LogoutComponent } from '@shared/components/logout/logout.component'
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component'
import { Role } from '@shared/enum/enums'
import { AuthGuard } from '@shared/guards/auth.guard'

const managerModule = () =>
  import('./modules/core/manager/manager.module').then((m) => m.ManagerModule)

const tenantModule = () =>
  import('./modules/core/tenant/tenant.module').then((t) => t.TenantModule)

const landlordModule = () =>
  import('./modules/core/landlord/landlord.module').then((l) => l.LandlordModule)

const appRoutes: Routes = [
  { path: '', children: [...advertisementRoutes] },
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  {
    path: 'tenant',
    loadChildren: tenantModule,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      expectedRole: Role.Tenant,
    },
  },
  {
    path: 'manager',
    loadChildren: managerModule,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      expectedRole: Role.Manager,
    },
  },
  {
    path: 'landlord',
    loadChildren: landlordModule,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
    data: {
      expectedRole: Role.Landlord,
    },
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
