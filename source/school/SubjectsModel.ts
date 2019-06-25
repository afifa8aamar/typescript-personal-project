import {ISubjectSchema} from "./schemes/subject";
export class SubjectsModel {
    public id ?: string;
    public subject ?: ISubjectSchema;
    constructor(subject: ISubjectSchema) {
        const f =  () =>  Math.random().toString(36).substr(2, 9) ;
        this.id = (f()).toString();
        const title = subject.title;
        const lessons = subject.lessons;
        const description = subject.description;
        this.subject = {
            description, lessons, title,
        };
    }
}
