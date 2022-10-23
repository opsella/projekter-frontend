import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {
    public templates: string[] = ['Template 1', 'Template 2', 'Template 3', 'Template 4', 'Template 5']
    constructor(private _formBuilder: FormBuilder) {}

    public templateOptions = this._formBuilder.group({
        options: new FormControl(this.templates, [Validators.required]),
    });

    ngOnInit(): void {
    }

    public get projectRoute(): string {
        return ''
    }

}
