import { GroupsModel } from "./GroupsModel";
import { IGradebookSchema } from "./schemes/gradebook";
import { LMSModel } from "./LMSModel";
import { IRecords } from "./schemes/record";
import { ISubjectSchema } from "./schemes/subject";
import { TeachersModel } from "./TeachersModel";

export class GradebooksModel {
    public gradebook: Map<string, IGradebookSchema>;
    public mainbook: IGradebookSchema[];
    public groups: GroupsModel;
    public teachers: TeachersModel;
    public lms: LMSModel;
    public id: string;

    constructor(groups: GroupsModel, teachers: TeachersModel, lms: LMSModel) {
        this.gradebook = new Map();
        this.mainbook = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.id = "";
    }

    public async readAll(mainid : string) {
        let result = [];
        for(let i=0; i<this.mainbook.length; i++) {
            if(this.mainbook[i].gradebookid == mainid) {
                result.push(this.mainbook[i].record);
            }
        }
        return result;
    }

    
    public async read(gradebookid : string , pupilId : string ) {
        for(let i = 0; i < this.mainbook.length; i++) {
            if (this.mainbook[i] && this.mainbook[i].record ) {
                let record : Records | undefined = this.mainbook[i].record
                if(this.mainbook[i].gradebookid == gradebookid && record == pupilId){
                    let temp =  this.mainbook[i].record;
                }
            }
        }
    }


        public async addRecord(gradebookId: string , record: Records) {
        let pupilFullName;
        if(record.pupilId) {
            let pupil = this.groups.pupils.get(record.pupilId);
            if(pupil && pupil.name){
                pupilFullName = `${pupil.name.first} ${pupil.name.last}`;
            }
        }
        let teacherId = record.teacherId;
        let subjectId = record.subjectId;
        let lesson = record.lesson;
        let mark = record.mark ;
        let teacherFullName
        if(teacherId) {
            let teacher = await this.teachers.read(teacherId);
            if(teacher && teacher.name)
                teacherFullName = `${teacher.name.first} ${teacher.name.last}`;
        }
        let subject: SubjectSchema[] = await this.lms.readAll()
        let subjectTitle : string | undefined;
        for (var i = 0 ; i < subject.length ; i ++)
        {
            if ( record.lesson === subject[i].lessons)
                subjectTitle = subject[i].title;
        }
        let obj = {
            pupilFullName,
            records: [ { teacherFullName,subjectId,lesson,mark } ]
        };
        
        let finalobj : GradebookSchema = {gradebookid: gradebookId, record , pupilid: record.pupilId};
        this.mainbook.push(finalobj);
    }

        public async clear() {
        this.groups.clear();
        this.teachers.clear();
        this.lms.clear();
    }

    public async add(level: number, groupId: string) {
        const obj: GradebookSchema = {};
        this.id = (() => Math.random().toString(36).substr(2, 9)).toString();
        obj.gradebookid = this.id;
        obj.level = level;
        obj.groupid = groupId;
        this.gradebook.set(this.id, obj);
        return this.id;
    }
}