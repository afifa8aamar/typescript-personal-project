import {subject_schema} from './schemes/subject';
export class LMSModel {
    lms: subject_schema[];
    constructor(){
        this.lms = [];
    }

    async add(subject : object)
    {
        this.lms.push(subject);
        return 'Resolved';

    }
    async verify (subject : object)
    {
        for (let i = 0 ; i < this.lms.length ; i++)
            if (this.lms[i] == subject)
                return true;
        return false;
    }
    async remove (subject : object)
    {
        for (let i = 0 ; i < this.lms.length ; i++)
            if (this.lms[i] == subject)
                this.lms[i] == null;
        else throw new TypeError('Can\'t Remove');
    }
    async readAll()
    {
        return [...this.lms]
    }
    clear ()
    {
        this.lms = [];
    }
}