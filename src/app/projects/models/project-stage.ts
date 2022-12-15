export interface ProjectStage {
    name: string;
    code: string;
    description: string;
    metadata?: object;
    stages?: ProjectStage[];
}
