import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RealEstateAddComponent } from '@modules/core/landlord/real-estate/components/real-estate-add/real-estate-add.component'
import { RealEstateContainerComponent } from '@modules/core/landlord/real-estate/components/real-estate-container/real-estate-container.component'
import { RealEstateEditComponent } from '@modules/core/landlord/real-estate/components/real-estate-edit/real-estate-edit.component'
import { RealEstateListComponent } from '@modules/core/landlord/real-estate/components/real-estate-list/real-estate-list.component'
import { RealEstateRoutingModule } from '@modules/core/landlord/real-estate/real-estate-routing.module'

@NgModule({
  declarations: [
    RealEstateContainerComponent,
    RealEstateAddComponent,
    RealEstateListComponent,
    RealEstateEditComponent,
  ],

  imports: [CommonModule, RealEstateRoutingModule],
})
export class RealEstateModule {}
