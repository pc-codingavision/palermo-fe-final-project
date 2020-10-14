import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const managerModule = () =>
  import('./modules/core/manager/manager.module').then((m) => m.ManagerModule)

const routes: Routes = [{ path: 'manager', loadChildren: managerModule }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
