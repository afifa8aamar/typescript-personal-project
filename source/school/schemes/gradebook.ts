import { IRecords } from "./record";

export interface IGradebookSchema {
    gradebookid ?: string;
    groupid ?: string;
    level ?: number;
    record ?: IRecords;
    pupilid ?: string;
}
