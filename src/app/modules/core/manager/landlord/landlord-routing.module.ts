import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LandlordContainerComponent } from '@modules/core/manager/landlord/components/container/landlord-container.component'
import { LandlordEditComponent } from '@modules/core/manager/landlord/components/edit/landlord-edit.component'
import { LandlordListComponent } from '@modules/core/manager/landlord/components/list/landlord-list.component'
import { LandlordNewComponent } from '@modules/core/manager/landlord/components/new/landlord-new.component'
import { LandlordViewComponent } from '@modules/core/manager/landlord/components/view/landlord-view.component'

const landlordRouting: Routes = [
  { path: '', component: LandlordContainerComponent },
  { path: 'list', component: LandlordListComponent },
  { path: 'new', component: LandlordNewComponent },
  { path: 'edit', component: LandlordEditComponent },
  { path: 'view', component: LandlordViewComponent },
]

@NgModule({
  imports: [RouterModule.forChild(landlordRouting)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
