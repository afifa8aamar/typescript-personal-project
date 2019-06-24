import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradebooksModel,
} from './school';


(async() =>{

var teacherObj = 
{
    "name": {
      "first": 'Pitter',
      "last": "Black"
    },
    "image": "image",
    "dateOfBirth": "19-12-1965",
    "emails": [
      {
        "email": "Pitter.black@gmail.com",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "+65489563254",
        "primary": true
      }
    ],
    "sex": "male", 
    "subjects": [
      {
        "subject": "Math"
      }
    ],
    "description": "A Good teacher",
  };

  var teacherObj1 = 
{
    "name": {
      "first": 'Lisa',
      "last": "White"
    },
    "image": "image",
    "dateOfBirth": "20-8-1996", 
    "emails": [
      {
        "email": "Lisa.white@gmail.com",
        "primary": true
      }
    ],
    "phones": [
      {
        "phone": "+6785163254",
        "primary": true
      },
      {
        "phone": "+6785167854",
        "primary": false
      }
    ],
    "sex": "female"
  };

var obj = {
  "name": {
    "first": 'Changed',
    "last": "To this"
  },
  "phones": [
    {
      "phone": "+6785163254",
      "primary": true
    },
    {
      "phone": "+6785167854",
      "primary": false
    }
  ],
}


const teacher = new TeachersModel();
var teacherid = await teacher.add(teacherObj);
await teacher.update(teacherid,obj)
await teacher.read(teacherid)
var teacherid = await teacher.add(teacherObj);
var result = await teacher.read(teacherid);
var update = await teacher.update(teacherid, teacherObj1);
result = await teacher.read(teacherid);
var deletedteacher = await teacher.remove(teacherid);





var pupil1 = {
    "name": {
      "first": "Pitter",
      "last": "Black"
    },
    "image": "string",
    "dateOfBirth": "string",
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": 'male', 
    "description": "A Good pupil",
  }

  var pupil2 = {
    "name": {
      "first": "Changed",
      "last": "To this"
    },
    "image": "string",
    "dateOfBirth": "string",
    "phones": [
      {
        "phone": "string",
        "primary": true
      }
    ],
    "sex": 'male', 
    "description": "A Good pupil",
  }

const pupils = new PupilsModel();
var pupilid = await pupils.add(pupil1);
var result = await pupils.read(pupilid);
var update =await pupils.update(pupilid, pupil2);
result =await pupils.read(pupilid);
var deletedpupils =await pupils.remove(pupilid);




const history = new SubjectsModel({
  title: 'History',
  lessons: 24,
  description: 'Some text'
});

var historyid = history.id

const lms = new LMSModel();
//await lms.remove(history);
await lms.add(history);
await lms.verify(history);
await lms.readAll();





const room = 236;
const groups = new GroupsModel();
const groupid = await groups.add(room);
var groupInfo = await groups.read(groupid);
await groups.addPupil(groupid, pupilid);
await groups.addPupil(groupid, pupilid);
var groupInfo = await groups.read(groupid);
await groups.update(groupid, {room: 237})
await groups.read(groupid)
await groups.readAll()





const pupilId = pupilid;
const teacherId = teacherid;
const gradebooks = new GradebooksModel(groups, teacher, lms);

const level = 1;
const gradebookId = await gradebooks.add(level, groupid);

await gradebooks.clear();
const teacherrecord = new TeachersModel();
var teacheridrecord = await teacher.add(teacherObj);
const record = {
  pupilId: pupilId,
  teacherId: teacheridrecord,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

//let recordOut = await gradebooks.addRecord(gradebookId, record);
const oliver = await gradebooks.read(gradebookId, pupilid);
const students = gradebooks.readAll(gradebookId); 


})();