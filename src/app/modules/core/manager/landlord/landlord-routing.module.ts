import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { LandlordEditComponent } from '@modules/core/manager/landlord/components/edit/landlord-edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordNewComponent } from '@modules/core/manager/landlord/components/new/landlord-new.component'

const landlordRoutes: Routes = [
  { path: '', component: LandlordContainerComponent },
  { path: 'list', component: LandlordListComponent },
  { path: 'new', component: LandlordNewComponent },
  { path: 'edit', component: LandlordEditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(landlordRoutes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
