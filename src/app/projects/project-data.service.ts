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
                metadata: {
                    requiresCityNotification: "true"
                }
            },
            {
                name: "Install Pipes at School",
                code: "{{calculated}}",
                description: "Install pipes for customer",
                stages: [
                    {
                        name: "Find Water Shutoff",
                        code: "{{calculated}}",
                        description: "Determine the location of the water shutoff on the property"
                    },
                    {
                        name: "Install Pipes",
                        code: "{{calculated}}",
                        description: "",
                        stages: [
                            {
                                name: "Dig Trenches",
                                code: "{{calculated}}",
                                description: ""
                            },
                            {
                                name: "Lay Pipes",
                                code: "{{calculated}}",
                                description: "",
                                stages: [
                                    {
                                        name: "Glue Pipes",
                                        code: "{{calculated}}",
                                        description: ""
                                    }
                                ]
                            },
                            {
                                name: "Connect Pipe Branches",
                                code: "{{calculated}}",
                                description: ""
                            }
                        ]
                    }
                ]
            }
        ]);
    }
}
