import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { EditContainerComponent } from '@modules/core/manager/landlord/components/edit/components/container/edit-container.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'

const landlordRoutes: Routes = [
  { path: '', component: LandlordContainerComponent },
  { path: 'list', component: LandlordListComponent },
  { path: 'new', component: EditContainerComponent },
  { path: 'edit/:id', component: EditContainerComponent },
]

@NgModule({
  imports: [RouterModule.forChild(landlordRoutes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
