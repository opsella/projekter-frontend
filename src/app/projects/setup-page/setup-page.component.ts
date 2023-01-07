import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProjectDataService } from "../project-data.service";

@Component({
  selector    : "app-setup-page",
  templateUrl : "./setup-page.component.html",
  styleUrls   : [
    "./setup-page.component.scss"
  ]
})
export class SetupPageComponent  {
  public templates: string[] = [
    "Template 1",
    "Template 2",
    "Template 3",
    "Template 4",
    "Template 5"
  ];
  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private projectDataService: ProjectDataService
  ) { }

  public templateOptions = this._formBuilder.group({
    options: new FormControl(this.templates, [
      Validators.required
    ]),
  });

  public project = this._formBuilder.group({
    name: new FormControl("", [
      Validators.required
    ]),
    code: new FormControl("", [
      Validators.required
    ]),
    description: new FormControl("")
  });

  public async onSubmit(): Promise<void> {
    this.projectDataService.createData();

    await this.router.navigate([
      "/projects/list"
    ]);
  }
}
