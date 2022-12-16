import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {ProjectTemplate} from "./models/project-template";
import {environment} from "../../environments/environment";
import {NotImplementedException} from "../shared/not-implemented-exception";

@Injectable({
    providedIn: "root"
})
export class ProjectTemplateDataService {
    constructor() { }

    public query(): Observable<ProjectTemplate[]> {
        if(environment.useFakeData) {
            return this.getFakeData();
        }

        throw new NotImplementedException();
    }

    private getFakeData(): Observable<ProjectTemplate[]> {
        if (environment.returnFakeEmpty) {
            return of([]);
        }

        return of([
            {
                name: "Default",
                version: 1,
                project: {
                    name: "{{required}}",
                    code: "{{required}}",
                    description: "{{required}}",
                    stages: [
                        {
                            name: "{{required}}",
                            code: "{{required}}",
                            description: "{{required}}",
                        }
                    ]
                }
            },
            {
                name: "Irrigation General",
                version: 1,
                project: {
                    name: "{{required}}",
                    code: "{{required}}",
                    description: "Install pipes for customer",
                    stages: [
                        {
                            name: "Find Water Shutoff",
                            code: "{{calculated}}",
                            description: "Determine the location of the water shutoff on the property",
                            metadata: {
                                requiresCityNotification: "{{required:/true|false/}}"
                            }
                        },
                        {
                            name: "Install Pipes",
                            code: "{{calculated}}",
                            description: "Prepare and lay pipes",
                            stages: [
                                {
                                    name: "Dig Trenches",
                                    code: "{{calculated}}",
                                    description: "Use trencher to dig required trenches"
                                },
                                {
                                    name: "Lay Pipes",
                                    code: "{{calculated}}",
                                    description: "Place pipes inside of trenches",
                                    stages: [
                                        {
                                            name: "Glue Pipes",
                                            code: "{{calculated}}",
                                            description: "Take current pipes and glue them together"
                                        }
                                    ]
                                },
                                {
                                    name: "Connect Pipe Branches",
                                    code: "{{calculated}}",
                                    description: "Attach branching pipes to go to sprinkler heads"
                                }
                            ]
                        }
                    ]
                }
            }
        ]);
    }
}
