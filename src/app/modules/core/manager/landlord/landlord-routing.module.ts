import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EditComponent } from './edit/edit.component'
import { ListComponent } from './list/list.component'
import { NewComponent } from './new/new.component'

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit', component: EditComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandlordRoutingModule {}
