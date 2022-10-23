import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsDataService {
    constructor() {}

    public getData(retrievedData: boolean): Observable<ProjectData[]> {
        if (retrievedData) {
            return of([
                {
                    title: 'Montgomery Sprinkler Flush',
                    startDate: '01/24/2023',
                    endDate: '01/27/2023',
                    tags: [
                        'summer',
                        'prep',
                        'seasonal'
                    ],
                    activeUsers: [
                        {
                            name: 'Dan Cook',
                            position: 'Lead',
                        },
                        {
                            name: 'Jake Morenson',
                            position: 'Laborer'
                        }
                    ],
                    customer: 'Montgomery Homes LLC',
                    activeSupplies: [
                        {
                            name: ''
                        }
                    ],
                    activeEquipment: [
                        {
                            name: ''
                        }
                    ],
                    expenses: '1500.00',
                    costAllowed: '2000.00',
                    income: '4000.00'
                }
            ]);
        } else {
            return of([]);
        }
    }
}

export interface ProjectData {
    title: string,
    startDate: string,
    endDate: string,
    tags: string[],
    activeUsers: object[],
    customer: string,
    activeSupplies: object[],
    activeEquipment: object[],
    expenses: string,
    costAllowed: string,
    income: string
}
