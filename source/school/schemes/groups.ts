import { pupil_schema } from "./pupil";

export interface group_schema  {
    "id": string,
    "room": number
    level ? : number
    pupils ? : pupil_schema
}