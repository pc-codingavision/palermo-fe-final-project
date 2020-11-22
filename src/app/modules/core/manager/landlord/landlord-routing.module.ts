import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { EditComponent } from '@modules/core/manager/landlord/components/edit/edit.component'
import { DeactivateGuard } from '@shared/services/deactivate-guard.service'

import { LandlordListResolver } from './guards/landlord-list-resolve'

const landlordRoutes: Routes = [
  {
    path: '',
    component: LandlordContainerComponent,
    resolve: { list: LandlordListResolver },
  },

  { path: 'new', component: EditComponent, canDeactivate: [DeactivateGuard] },
  { path: 'edit/:id', component: EditComponent, canDeactivate: [DeactivateGuard] },
]

@NgModule({
  imports: [RouterModule.forChild(landlordRoutes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule { }
