import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryListPageComponent } from './inventory-list-page/inventory-list-page.component';
import { InventorySetupPageComponent } from './inventory-setup-page/inventory-setup-page.component';

@NgModule({
  declarations: [InventoryListPageComponent, InventorySetupPageComponent],
  imports: [CommonModule],
})
export class InventoryModule {}
