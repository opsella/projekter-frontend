import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: false
})
export class AppComponent implements OnInit {
  public title = "projekter-frontend";

  constructor(
    protected auth: AuthService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    // this.auth.idTokenClaims$.subscribe(claims => console.log(claims));
    //
    // this.httpClient.get(`https://localhost:7209/users/me`).pipe(
    //   switchMap((response: any) => {
    //     return this.httpClient.get(`https://localhost:7209/users/${ response['data']['user_id'] }/permissions`)
    //   }),
    // ).subscribe();
  }
}
