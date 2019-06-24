import {validate} from './validate';
export class LMSModel {
    lms: Set<unknown>;
    constructor(){
        this.lms = new Set();
    }

    async add(subject)
    {
        this.lms.add(subject.subject);
        return 'Resolved';

    }
    async verify (subject)
    {
        return this.lms.has(subject.subject);
    }
    async remove (subject)
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