import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RealEstateAddComponent } from '@modules/core/landlord/real-estate/components/real-estate-add/real-estate-add.component'
import { RealEstateEditComponent } from '@modules/core/landlord/real-estate/components/real-estate-edit/real-estate-edit.component'
import { RealEstateListComponent } from '@modules/core/landlord/real-estate/components/real-estate-list/real-estate-list.component'

const routes: Routes = [
  {
    path: 'edit',
    component: RealEstateEditComponent,
  },
  {
    path: 'list',
    component: RealEstateListComponent,
  },
  {
    path: 'new',
    component: RealEstateAddComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealEstateRoutingModule {}
