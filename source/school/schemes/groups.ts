import { IPupilSchema } from "./pupil";

export interface IGroupSchema {
    id ?: string;
    room ?: number;
    level ?: number;
    pupils ?: Map<string, IPupilSchema>;
}
