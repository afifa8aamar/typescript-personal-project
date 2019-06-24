import {subject_schema} from './schemes/subject';
export class LMSModel {
    lms: Set<unknown>;
    constructor(){
        this.lms = new Set();
    }

    async add(subject : subject_schema)
    {
        this.lms.add(subject.subject);
        return 'Resolved';

    }
    async verify (subject : subject_schema)
    {
        return this.lms.has(subject.subject);
    }
    async remove (subject : subject_schema)
    {
        if (this.lms.has(subject.subject))
            {
                let l = this.lms.delete(subject.subject);
                return 'Removed'
            }
        else throw new TypeError('Can\'t Remove');
    }
    async readAll()
    {
        return [...this.lms]
    }
}