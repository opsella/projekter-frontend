import { ProjectStage } from "./project-stage";

export interface Project {
    name: string;
    code: string;
    description: string;
    metadata?: object;
    /**
     * There should always be at least one stage of a project
     */
    stages: ProjectStage[];
}

