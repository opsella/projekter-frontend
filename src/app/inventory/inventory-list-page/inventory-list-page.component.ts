import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Data } from '@angular/router'
import { InventoryItem } from '../../services/inventory-data.service'
import { map, Observable } from 'rxjs'

@Component({
  selector: 'app-inventory-list-page',
  templateUrl: './inventory-list-page.component.html',
  styleUrls: ['./inventory-list-page.component.scss']
})
export class InventoryListPageComponent implements OnInit {
  public inventoryItems$: Observable<InventoryItem[]>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.inventoryItems$ = this.inventoryItems;
  }

  public get inventoryItems(): Observable<InventoryItem[]> {
    return this.activatedRoute.data
      .pipe(
        map((data: Data) => data['inventoryItems'] as InventoryItem[])
      )
  }

  ngOnInit(): void {
    this.inventoryItems$ = this.inventoryItems;
  }

}
