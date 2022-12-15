import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {NotImplementedException} from "../shared/not-implemented-exception";
import {Project} from "./models/project";

@Injectable({
    providedIn: "root"
})
export class ProjectDataService {

    constructor() { }

    public query(): Observable<Project[]> {
        if (environment.useFakeData) {
            return this.getFakeData();
        }

        throw new NotImplementedException();
    }

    private getFakeData(): Observable<Project[]> {
        return of([
            {
                name: "Single Stage Project",
                code: "SSP01",
                description: "The first single stage project",
                stages: [
                    {
                        name: "Stage 1",
                        code: "{{calculated}}",
                        description: "The first and only stage of the single stage project",
                    }
                ],
            },
            {
                name: "Install Pipes at School",
                code: "IPS01",
                description: "Install pipes for customer",
                stages: [
                    {
                        name: "Find Water Shutoff",
                        code: "IPS01:FWS01",
                        description: "Determine the location of the water shutoff on the property",
                        metadata: {
                            requiresCityNotification: "true"
                        }
                    },
                    {
                        name: "Install Pipes",
                        code: "IPS01:IP01",
                        description: "Prepare and lay pipes",
                        stages: [
                            {
                                name: "Dig Trenches",
                                code: "IPS01:IP01:DT01",
                                description: "Use trencher to dig required trenches"
                            },
                            {
                                name: "Lay Pipes",
                                code: "IPS01:IP01:LP01",
                                description: "Place pipes inside of trenches",
                                stages: [
                                    {
                                        name: "Glue Pipes",
                                        code: "IPS01:IP01:LP01:GP01",
                                        description: "Take current pipes and glue them together"
                                    }
                                ]
                            },
                            {
                                name: "Connect Pipe Branches",
                                code: "IPS01:IP01:CPB01",
                                description: "Attach branching pipes to go to sprinkler heads"
                            }
                        ]
                    }
                ]
            }
        ]);
    }
}
