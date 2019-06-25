import { records } from "./record";

export interface gradebook_schema{
    gradebookid ? : string;
    groupid ?:  string;
    level ?: number;
    record ? : records ;
    pupilid ? : string;
}