import {subject_scheme} from './schemes/subject'
export class SubjectsModel {
    id: string;
    constructor(subject : object){
        const f =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        this.id = (f()).toString();
        var title = subject.title;
        var lessons = subject.lessons;
        var description = subject.description
        this.subject = {
            title, lessons, description
        }
    }

}
