import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { EditComponent } from '@modules/core/manager/landlord/components/edit/edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordListResolver } from '@modules/shared/guards/landlord-list-resolve'
import { DeactivateGuard } from '@shared/services/deactivate-guard.service'

const landlordRoutes: Routes = [
  {
    path: '',
    component: LandlordContainerComponent,
    resolve: { list: LandlordListResolver },
  },
  {
    path: 'list',
    component: LandlordListComponent,
    resolve: { list: LandlordListResolver },
  },
  { path: 'new', component: EditComponent, canDeactivate: [DeactivateGuard] },
  { path: 'edit/:id', component: EditComponent, canDeactivate: [DeactivateGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(landlordRoutes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
