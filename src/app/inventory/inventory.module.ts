import { NgModule } from '@angular/core'
import { InventoryListPageComponent } from './inventory-list-page/inventory-list-page.component'
import { InventorySetupPageComponent } from './inventory-setup-page/inventory-setup-page.component'
import { CommonModule } from '@angular/common'
import { InventoryRoutingModule } from './inventory-routing.module'

@NgModule({
  declarations: [InventoryListPageComponent, InventorySetupPageComponent],
  imports: [CommonModule, InventoryRoutingModule],
})
export class InventoryModule {}
