import { ISubjectSchema } from "./schemes/subject";
export class LMSModel {
    public lms: ISubjectSchema[];
    constructor() {
        this.lms = [];
    }
    public async add(subject: object) {
        this.lms.push(subject);
        return 'Resolved';
    }
    public async verify(subject: object) {
        for (const item of this.lms )
        {
            if (item === subject) {
                return true;
            }
        }
        return false;
    }
    public async remove(subject: object) {
        for (let i = 0; i < this.lms.length; i++) {
            if (this.lms[i] === subject) {
                this.lms[i] = {};
            } else { throw new TypeError("Can\'t Remove"); }
        }
    }
    public async readAll() {
        return [...this.lms];
    }
    public clear() {
        this.lms = [];
    }
}
