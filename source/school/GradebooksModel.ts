import { group_schema } from "./schemes/groups";
import { teacher_schema } from "./schemes/teacher";
import { records } from "./schemes/record";
import { gradebook_schema } from "./schemes/gradebook";
import { subject_schema } from "./schemes/subject";
import { GroupsModel } from "./GroupsModel";
import { TeachersModel } from "./TeachersModel";
import { LMSModel } from "./LMSModel";
import { SubjectsModel } from "./SubjectsModel";

export class GradebooksModel{
    gradebook: Map<string, gradebook_schema>;
    mainbook: gradebook_schema[];
    groups: GroupsModel;
    teachers: TeachersModel;
    lms: LMSModel;
    id: string;

    constructor(groups : GroupsModel, teachers: TeachersModel, lms :LMSModel)
    {
        this.gradebook = new Map();
        this.mainbook = [];
        this.groups = groups;
        this.teachers = teachers;
        this.lms = lms;
        this.id = "";
    }

    async add(level : number, groupId : string){
        let obj : gradebook_schema = {};
        const GenerateID =  () => {return '_' + Math.random().toString(36).substr(2, 9) };
        this.id = GenerateID();
        obj.gradebookid = this.id;
        obj.level = level;
        obj.groupid = groupId;
        this.gradebook.set(this.id, obj);
        return this.id;
    }

    async clear() {
        this.groups.clear();
        this.teachers.clear();
        this.lms.clear();
    }

    async addRecord(gradebookId : string , record : records){
        
        let tmp = this.groups.pupils.get(record.pupilId)
        let pupil = this.groups.pupils.get(record.pupilId)
        let pupilFullName = `${pupil.name.first} ${pupil.name.last}`;
        let teacherId = record.teacherId;
        let subjectId = record.subjectId;
        let lesson = record.lesson;
        let mark = record.mark ;
        let teacher = await this.teachers.read(teacherId);
        let teacherFullName =  `${teacher.name.first} ${teacher.name.last}`;
        let subject: subject_schema[] = await this.lms.readAll()
        let subjectTitle : string;
        for (var i = 0 ; i < subject.length ; i ++)
        {
            if ( record.lesson == subject[i].lessons)
                 subjectTitle = subject[i].title
        }
        let obj = {
            pupilFullName,
            records: [ { teacherFullName,subjectTitle,lesson,mark } ]
        };
        
        let finalobj : gradebook_schema = {gradebookid: gradebookId, record , pupilid: record.pupilId};
        this.mainbook.push(finalobj);
    }

    async read(first : string , second : string ){
        for(let i = 0; i < this.mainbook.length; i++)
        {
            if(this.mainbook[i].gradebookid == first && this.mainbook[i].record.pupilId == second)
            {
                let temp =  this.mainbook[i].record;
            }
        }
    }

    async readAll(mainid : string)
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
