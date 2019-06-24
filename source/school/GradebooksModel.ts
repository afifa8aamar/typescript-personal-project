import { group_schema } from "./schemes/groups";
import { teacher_schema } from "./schemes/teacher";

export class GradebooksModel{
    gradebook: Map<any, any>;
    mainbook: any[];
    groups: any;
    teachers: any;
    lms: any;
    id: string;

    constructor(groups : group_schema, teachers : teacher_schema, lms :object)
    {
        this.gradebook = new Map();
        this.mainbook = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.id = "";
    }

    async add(level : number, groupId : string){
        let obj : group_schema;
        const GenerateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        this.id = GenerateID();
        obj.id = this.id;
        obj.level = level;
        obj.groupid = groupId;
        if(typeof groupId !== "string") 
            throw new Error('invalid id');
        this.gradebook.set(this.id, obj);
        return this.id;
    }

    async clear()
    {
        this.groups = {};
        this.teachers = {};
        this.lms = {};
    }

    async addRecord(gradebookId : string , record : object){
        
        let name = "";
        let tmp = this.groups.pupils
        for(let i = 0; i < tmp.size; i++ ){
            if( tmp.pupil.id == record.pupilId){
                name = `${tmp[i].pupil.name.first} ${tmp[i].pupil.name.last}`;
            }
        }
        let teacherId = record.teacherId;
        let subjectId = record.subjectId;
        let lesson = record.lesson;
        let mark = record.mark ;
        let teacher = `${this.teachers.teachers.get(teacherId).name.first} ${this.teachers.teachers.get(teacherId).name.last}`;
        let subject =  this.lms.lms
        subject = Array.from(subject)
        subject = subject[0].title
        let obj = {
            name,
            records: [ { teacher,subject,lesson,mark } ]
        };
        
        let finalobj = {gradebookid: gradebookId, record:  obj, idpupil: record.pupilId};
        this.mainbook.push(finalobj);
    }

    async read(first, second){
        for(let i = 0; i < this.mainbook.length; i++)
        {
            if(this.mainbook[i].gradebookid == first && this.mainbook[i].idpupil == second)
            {
                return this.mainbook[i].record;
            }
        }
    }

    async readAll(mainid)
    {
        let result = [];
        for(let i=0; i<this.mainbook.length; i++)
        {
            if(this.mainbook[i].gradebookid == mainid)
            {
                result.push(this.mainbook[i].record);
            }
        }
        return result;
    }
}
