import { RouterModule, Routes } from '@angular/router'
import { InventoryResolver } from './inventory.resolver'
import { InventoryListPageComponent } from './inventory-list-page/inventory-list-page.component'
import { InventorySetupPageComponent } from './inventory-setup-page/inventory-setup-page.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  {
    path: 'list',
    resolve: {
      inventoryItems: InventoryResolver,
    },
    component: InventoryListPageComponent,
  },
  {
    path: 'setup',
    component: InventorySetupPageComponent,
  },
  {
    path: '**',
    redirectTo: '/inventory/list',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule {}
