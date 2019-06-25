import { pupil_schema } from "./pupil";

export interface group_schema {
    id ?: string,
    room ? : number
    level ? : number
    pupils ? : Map<string,pupil_schema>
}