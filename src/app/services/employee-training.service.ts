import { Injectable } from "@angular/core";

export interface TrainingObj {
  title: String;
  description: String;
  sections: string[];
}

@Injectable({
    providedIn: "root",
})
export class EmployeeTrainingService {
    private trainings: Array<TrainingObj> = [
        {
            title: "Employee Intro",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Sexual Harassment Policy",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Lawn Edging",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Weed Eater Fundamentals",
            description: "(optional)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
    ];

    private completedTrainings: Array<TrainingObj> = [
        {
            title: "Employee Intro",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Sexual Harassment Policy",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Lawn Edging",
            description: "(required)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
        {
            title: "Weed Eater Fundamentals",
            description: "(optional)",
            sections: ["Policies", "Disclosures", "Conduct"],
        },
    ];

    constructor() {}

    public getToDoTrainings(): Array<TrainingObj> {
        return this.trainings;
    }

    public getCompletedTrainings(): Array<TrainingObj> {
        return this.completedTrainings;
    }
}
