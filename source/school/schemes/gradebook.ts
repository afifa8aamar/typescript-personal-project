export interface gradebook_schema extends Map< string, gradebook_schema>{
    gradebookid ? : string;
    groupid ?:  string;
    level ?: number;
    record ? : record_schema;
}

export interface record_schema {
    pupilId ? : string,
    teacherId ? : string,
    subjectId ? : string,
    lesson ? : number,
    mark ? : number
}