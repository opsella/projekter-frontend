import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inventory-equipment-creation',
  templateUrl: './inventory-equipment-creation.component.html',
  styleUrls: ['./inventory-equipment-creation.component.scss'],
})
export class InventoryEquipmentCreationComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
